import ethers  from "ethers";
import dotenv from "dotenv";

dotenv.config();

const network = process.env.ETHEREUM_NETWORK;
const provider = new ethers.providers.InfuraProvider(network,process.env.INFURA_API_KEY);
const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY, provider);

const bicSwapABI = [
    "function swapExactInputSingle(uint)",
  ]
const bicTokSwap = "0x6D4d1563AFBb4509f42c3b718B71675275C7C410";

const signercontract = new ethers.Contract(bicTokSwap, bicSwapABI, signer);
const singlswap = signercontract.swapExactInputSingle("100000000000000000");
console.log("Single swap succeded");
