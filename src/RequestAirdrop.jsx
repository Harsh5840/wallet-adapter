import {useConnection, useWallet} from '@solana/wallet-adapter-react';  //the useWallet function works because we have provided the walletProvider in the app.jsx file 
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

const RequestAirdrop = () => {

    const wallet = useWallet();  //gets the info about the wallet 
    const {connection} = useConnection(); // it comes from the ConnectionProvider
    const requestAirdrop = () => {
        try{
        const publicKey = wallet.publicKey;
        const amount = document.getElementById("amount")
        connection.requestAirdrop(publicKey , amount * LAMPORTS_PER_SOL);
    }catch(error){
        console.log(error)
    }
    }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <input type="text" id='amount' placeholder="amount" className="border-2 border-white rounded-md p-2" />
        <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  )
}

export default RequestAirdrop