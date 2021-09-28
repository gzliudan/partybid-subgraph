import { BigInt } from '@graphprotocol/graph-ts/index';
import { findOrCreateUser } from './helpers';
import { Party } from '../generated/schema';
import { PartyBidDeployed } from '../generated/PartyBidFactory/PartyBidFactory';

/**
 * Handler called when the `PartyBidDeployed` Event is called on the PartyBidFactory Contract
 * @param event
 */
export function handlePartyBidDeployed(event: PartyBidDeployed): void {
    let creator_id = event.params.creator.toHexString();
    let creator = findOrCreateUser(creator_id);
    let party = new Party(event.params.partyBidProxy.toHexString());
    party.creator = creator_id;
    party.nftContract = event.params.nftContract;
    party.tokenId = event.params.tokenId;
    party.marketWrapper = event.params.marketWrapper;
    party.auctionId = event.params.auctionId;
    party.splitRecipient = event.params.splitRecipient;
    party.splitBasisPoints = event.params.splitBasisPoints;
    party.name = event.params.name;
    party.symbol = event.params.symbol;
    party.partyStatus = 'AUCTION_ACTIVE';
    party.totalSpent = BigInt.fromI32(0);
    party.partyDAOEthFee = BigInt.fromI32(0);
    party.totalContributed = BigInt.fromI32(0);
    party.save();
}
