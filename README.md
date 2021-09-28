# PartyBid SubGraph

This project defines subgraph for partybid v2.

## Deploy

Install Graph CLI globally: `yarn global add @graphprotocol/graph-cli`  
Download subgraph codes: `git clone https://github.com/gzliudan/partybid-subgraph`  
Install dependencies: `cd partybid-subgraph && yarn`

### 1. Deploy locally

Instructions: https://thegraph.com/docs/developer/quick-start#local-development

#### 1.1 Set up Ganache CLI

-   yarn global add ganache-cli
-   ganache-cli -h 0.0.0.0

#### 1.2 Run a local Graph Node

-   Install [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/)
-   Clone Graph Node: `git clone https://github.com/graphprotocol/graph-node/`
-   Enter the directory: `cd graph-node/docker`
-   For Linux only: `./setup.sh`
-   Start a local Graph Node: `sudo docker-compose up`

Notice: delete the data directory after tear down the graph node

```bash
docker-compose down
rm -rf ./data
```

#### 1.3 Update file networks/local.json

-   Deploy PartBid contracts Locally, get addresses of contracts
-   update file networks/local.json in partybid-subgraph directory

#### 1.4 Deploy subgraph:

-   Enter direcory: `cd cd partybid-subgraph`
-   Deploy: `yarn clean && yarn prepare:local && graph codegen:local && yarn create:local && yarn deploy:local`

### 2. Deploy to the Graph's hosted service

Instructions: https://thegraph.com/docs/legacyexplorer/deploy-subgraph-hosted

#### 2.1 Store the Access Token

```bash
# Only run once
graph auth --product hosted-service <ACCESS_TOKEN>
```

#### 2.2 Deploy to networks

-   rinkeby: `yarn clean && yarn prepare:rinkeby && yarn codegen:rinkeby && yarn deploy:rinkeby`
-   mainnet: `yarn clean && yarn prepare:mainnet && yarn codegen:mainnet && yarn deploy:mainnet`

## Documentation

-   [Entities](doc/entities.md)
-   Quickly query:
    -   mainnet: https://thegraph.com/legacy-explorer/subgraph/gzliudan/partybid-v2
    -   rinkeby: https://thegraph.com/legacy-explorer/subgraph/gzliudan/rinkeby-partybid-v2
-   Programmatically query:
    -   mainnet: https://api.thegraph.com/subgraphs/name/gzliudan/partybid-v2
    -   rinkeby: https://api.thegraph.com/subgraphs/name/gzliudan/rinkeby-partybid-v2

## Resources

-   [PartyBid](https://github.com/PartyDAO/partybid)
-   [The Graph](https://thegraph.com/)
-   [GraphQL](https://graphql.org/)

## Authors

-   [Daniel Liu](https://twitter.com/gzliudan): liudaniel@qq.com

## License

This project is licensed under the [MIT license](./LICENSE).
