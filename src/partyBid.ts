import { findOrCreateUser } from './helpers';
import { Party, Contribution, Bid, Claim } from '../generated/schema';
import { Contributed, Bid as bidEvent, Finalized, Claimed } from '../generated/templates/PartyBid/PartyBid';

enum PartyStatus {
    AUCTION_ACTIVE,
    AUCTION_WON,
    AUCTION_LOST,
}

/**
 * Handler called when the `Contributed` Event is called on the PartyBid Contract
 * @param event
 */
export function handleContributed(event: Contributed): void {
    let contributor_id = event.params.contributor.toHexString();
    let contributor = findOrCreateUser(contributor_id);

    let contribution = new Contribution(event.transaction.hash.toHexString());
    contribution.party = event.address.toHexString();
    contribution.contributor = contributor_id;
    contribution.amount = event.params.amount;
    contribution.previousTotalContributedToParty = event.params.previousTotalContributedToParty;
    contribution.totalFromContributor = event.params.totalFromContributor;
    contribution.save();
}

/**
 * Handler called when the `handleBid` Event is called on the PartyBid Contract
 * @param event
 */
export function handleBid(event: bidEvent): void {
    let bid = new Bid(event.transaction.hash.toHexString());
    bid.party = event.address.toHexString();
    bid.bider = event.transaction.from.toHexString();
    bid.amount = event.params.amount;
    bid.save();
}

/**
 * Handler called when the `handleFinalized` Event is called on the PartyBid Contract
 * @param event
 */
export function handleFinalized(event: Finalized): void {
    let party = Party.load(event.address.toHexString());
    if (party === null) {
        throw new Error('nonexist party');
    }

    if (event.params.result == PartyStatus.AUCTION_ACTIVE) {
        party.partyStatus = 'AUCTION_ACTIVE';
    } else if (event.params.result == PartyStatus.AUCTION_WON) {
        party.partyStatus = 'AUCTION_WON';
    } else if (event.params.result == PartyStatus.AUCTION_LOST) {
        party.partyStatus = 'AUCTION_LOST';
    }

    party.totalSpent = event.params.totalSpent;
    party.partyDAOEthFee = event.params.fee;
    party.totalContributed = event.params.totalContributed;
    party.save();
}

/**
 * Handler called when the `handleClaimed` Event is called on the PartyBid Contract
 * @param event
 */
export function handleClaimed(event: Claimed): void {
    let claim = new Claim(event.transaction.hash.toHexString());
    claim.party = event.address.toHexString();
    claim.contributor = event.params.contributor.toHexString();
    claim.totalContributed = event.params.totalContributed;
    claim.excessContribution = event.params.excessContribution;
    claim.tokenAmount = event.params.tokenAmount;
    claim.save();
}
