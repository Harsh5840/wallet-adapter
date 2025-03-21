import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react";

export default function ShowBalance(){
        const {connection} = useConnection();
        const wallet = useWallet();
        async function getMeUserbalance(){
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML(balance / LAMPORTS_PER_SOL);
        }
       useEffect(()=>{
            getMeUserbalance();
       },[wallet])  //important as we added wallet as the changing dependency
        return (
            <>
           Balance <span id="balance"></span>
           </>
        )
}