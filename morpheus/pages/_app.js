import '../styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';
import theme from "./component/theme";
import { MoralisProvider } from 'react-moralis'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Morpheus',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



function MyApp({ Component, pageProps }) {
  return (
    <>
     <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={extendTheme(theme)}>
          <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
      </MoralisProvider>
      </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  )
}

export default MyApp
