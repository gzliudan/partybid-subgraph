# PartyBid Subgraph Entities

This page describes all of the GraphQL entities of the PartyBid Subgraph.

## User

The `User` entity represents ethereum account that interact with PartyBid contracts.

| Field Name     | Type             | Description                           |
| -------------- | ---------------- | ------------------------------------- |
| id             | ID               | The Ethereum address of the user      |
| ownedContracts | \[Party\]        | The Parties created by the user       |
| bids           | \[Bid\]          | The Bids created by the user          |
| contributions  | \[Contribution\] | The Contributions created by the user |
| claims         | \[Claim\]        | The Claims created by the user        |

## Bid

The `Party` entity represents PartyBid contract which bid for a NFT.

| Field Name       | Type             | Description                                                                                          |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| id               | ID               | The Ethereum address of PartyBid contract                                                            |
| creator          | User             | The creator of the PartyBid contract                                                                 |
| nftContract      | Bytes            | The Ethereum address of NFT contract                                                                 |
| tokenId          | BigInt           | The token id in the nftContract Contract                                                             |
| marketWrapper    | Bytes            | The Ethereum address of market wrapper contract                                                      |
| auctionId        | BigInt           | The auction id on the market contract                                                                |
| splitRecipient   | Bytes            | The address that will receive a portion of the tokens if the PartyBid wins the auction               |
| splitBasisPoints | BigInt           | The percent of the total token supply taken by the splitRecipient                                    |
| name             | String           | ERC-20 name for fractional tokens                                                                    |
| symbol           | String           | ERC-20 symbol for fractional tokens                                                                  |
| partyStatus      | PartyStatus      | The state of the contract                                                                            |
| totalSpent       | BigInt           | The total spent by PartyBid on the auction; 0 when lost NFT; highest bid + PartyDAO fee when won NFT |
| partyDAOEthFee   | BigInt           | ETH fee for PartyDAO when won NFT                                                                    |
| totalContributed | BigInt           | Total ETH deposited by all contributors                                                              |
| contributions    | \[Contribution\] | All contributions of this PartyBid contract                                                          |
| bids             | \[Bid\]          | All bids of this PartyBid contract                                                                   |
| claims           | \[Claim\]        | All claims of this PartyBid contract                                                                 |

## Contribution

The `Contribution` entity represents deposit to the PartyBid's treasury.

| Field Name       | Type             | Description                                                                                          |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| id               | ID               | The Ethereum address of PartyBid contract                                                            |
| creator          | User             | The creator of the PartyBid contract                                                                 |
| nftContract      | Bytes            | The Ethereum address of NFT contract                                                                 |
| tokenId          | BigInt           | The token id in the nftContract Contract                                                             |
| marketWrapper    | Bytes            | The Ethereum address of market wrapper contract                                                      |
| auctionId        | BigInt           | The auction id on the market contract                                                                |
| splitRecipient   | Bytes            | The address that will receive a portion of the tokens if the PartyBid wins the auction               |
| splitBasisPoints | BigInt           | The percent of the total token supply taken by the splitRecipient                                    |
| name             | String           | ERC-20 name for fractional tokens                                                                    |
| symbol           | String           | ERC-20 symbol for fractional tokens                                                                  |
| partyStatus      | PartyStatus      | The state of the contract                                                                            |
| totalSpent       | BigInt           | The total spent by PartyBid on the auction; 0 when lost NFT; highest bid + PartyDAO fee when won NFT |
| partyDAOEthFee   | BigInt           | ETH fee for PartyDAO when won NFT                                                                    |
| totalContributed | BigInt           | Total ETH deposited by all contributors                                                              |
| contributions    | \[Contribution\] | All contributions of this PartyBid contract                                                          |
| bids             | \[Bid\]          | All bids of this PartyBid contract                                                                   |
| claims           | \[Claim\]        | All claims of this PartyBid contract                                                                 |

## Bid

The `Bid` entity represents Bid event in PartyBid contract.

| Field Name | Type   | Description                      |
| ---------- | ------ | -------------------------------- |
| id         | ID     | hash of transaction              |
| party      | Party  | The address of PartyBid contract |
| bider      | User   | The address of user who call bid |
| amount     | BigInt | The amount of bid                |

## Claim

The `Claim` entity represents Claim event in PartyBid contract.

| Field Name         | Type   | Description                                                 |
| ------------------ | ------ | ----------------------------------------------------------- |
| id                 | ID     | hash of transaction                                         |
| party              | Party  | The address of PartyBid contract                            |
| contributor        | User   | The address of user who will receive ETH and token          |
| totalContributed   | BigInt | The total amount contributed to the contributor             |
| excessContribution | BigInt | The amount of excess ETH owed to the contributor            |
| tokenAmount        | BigInt | The amount of fractional NFT tokens owed to the contributor |
