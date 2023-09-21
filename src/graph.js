import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { ARBITRUM, AVALANCHE, ROLLUXTESTNET } from './addresses'

const apolloOptions = {
  query: {
    fetchPolicy: 'no-cache'
  },
  watchQuery: {
    fetchPolicy: 'no-cache'
  }
}

const SATSUMA_KEY = process.env.SATSUMA_KEY || "3b2ced13c8d9"; // "default" key

function getSubgraphUrl(name) {
  if(name.includes('rolluxTestnet')){
    return `https://subgraph.satsuma-prod.com/name/rollex/${name}`
  }
  return `https://subgraph.satsuma-prod.com/${SATSUMA_KEY}/gmx/${name}/api`
}

const arbitrumStatsClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-arbitrum-stats"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const avalancheStatsClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-avalanche-stats"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const rolluxTestnetStatsClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("odx-zkevm-stats"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})
  
function getStatsClient(chainId) {
  if (chainId === ARBITRUM) {
    return arbitrumStatsClient
  } else if (chainId === AVALANCHE) {
    return avalancheStatsClient
  }else if (chainId === ROLLUXTESTNET) {
    return rolluxTestnetStatsClient
  }
  throw new Error(`Invalid chainId ${chainId}`)
}

const arbitrumPricesClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-arbitrum-prices"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const avalanchePricesClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-avalanche-prices"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const rolluxTestnetPricesClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("rex-rolluxTestnet-prices"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

function getPricesClient(chainId) {
  if (chainId === ARBITRUM) {
    return arbitrumPricesClient
  } else if (chainId === AVALANCHE) {
    return avalanchePricesClient
  }else if (chainId === ROLLUXTESTNET) {
    return rolluxTestnetPricesClient
  } else {
    throw new Error(`Invalid chainId ${chainId}`)
  }
}

module.exports = {
  getPricesClient,
  getStatsClient
}
