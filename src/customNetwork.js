export const ensAddress = process.env.REACT_APP_CUSTOM_NETWORK_ENS_ADDRESS
export const customNetwork = ensAddress
  ? {
      name: process.env.REACT_APP_CUSTOM_NETWORK_NAME || 'private',
      chainId: parseInt(process.env.REACT_APP_CUSTOM_NETWORK_CHAIN_ID || '1'),
      ensAddress
    }
  : 'any'
