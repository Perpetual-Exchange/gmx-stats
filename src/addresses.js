export const BSC = 56
export const ARBITRUM = 42161
export const AVALANCHE = 43114
export const ROLLUXTESTNET = 57000

export const addresses = {
    [BSC]: {
        Vault: "0xc73A8DcAc88498FD4b4B1b2AaA37b0a2614Ff67B",
        Router: "0xD46B23D042E976F8666F554E928e0Dc7478a8E1f",
        USDG: "0x85E76cbf4893c1fbcB34dCF1239A91CE2A4CF5a7",
        Stabilize: "0x82C4841728fBd5e08A77A95cA3192BcE1F645Ee9",
        WardenSwapRouter: "0x7A1Decf6c24232060F4D76A33a317157549C2093",
        OneInchRouter: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26",
        DodoexRouter: "0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486",
        MetamaskRouter: "0x1a1ec25DC08e98e5E93F1104B5e5cdD298707d31"
    },

    [ARBITRUM]: {
        GMX: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
        BTC: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        ETH: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        LINK: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
        UNI: '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0',
        DAI: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        RewardReader: '0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0',
        GLP: '0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258',
        GlpManager: '0x321F653eED006AD1C29D174e17d96351BDe22649'
    },

    [AVALANCHE]: {
        GMX: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
        AVAX: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
        ETH: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        BTC: '0x50b7545627a5162f82a992c33b87adc75187b218',
        RewardReader: '0x04Fc11Bd28763872d143637a7c768bD96E44c1b6',
        GLP: '0x01234181085565ed162a948b6a5e88758CD7c7b8',
        GlpManager: '0xe1ae4d4b06A5Fe1fc288f6B4CD72f9F8323B107F'
    },

    [ROLLUXTESTNET]: {
        GMX: '0x0d0610DeD1a17AabA6528258488cd2243f94666d',
        ETH: '0x5eD4813824E5e2bAF9BBC211121b21aB38E02522',
        BTC: '0xfA600253bB6fE44CEAb0538000a8448807e50c85',
        RewardReader: '0x2Da84746E7AB4351bd07F8f1AB2387BEf218F177',
        GLP: '0x1C1e43bE7F0f5175DF59ad922F56120545AED78C',
        GlpManager: '0xDC72632f1fc4159E75533B7B6c2BdA92d1644639'
    }
    
}

export function getAddress(chainId, key) {
    if (!(chainId) in addresses) {
        throw new Error(`Unknown chain ${chainId}`)
    }
    if (!(key in addresses[chainId])) {
        throw new Error(`Unknown address key ${key}`)
    }
    return addresses[chainId][key]
}
