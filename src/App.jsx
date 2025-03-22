import React, { FC } from 'react';
import "./App.css";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './RequestAirdrop';
import { ShowSolBalance } from './ShowBalance';
import SendToken from './SendToken';

function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <RequestAirdrop />
                    <ShowSolBalance />
                    <SendToken />
                    { /* Your app's components go here, nested within the context providers. */ }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
        </div>
    </>
  )
}

export default App
