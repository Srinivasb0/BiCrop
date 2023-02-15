import ethers  from "ethers";
import dotenv from "dotenv";

dotenv.config();

const network = process.env.ETHEREUM_NETWORK;
const provider = new ethers.providers.InfuraProvider(network,process.env.INFURA_API_KEY);


const bicABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns(uint)"
  ]
const bicTok = "0xf9c4fE8e4d570a712aE40d8836fB64192fF32B5A";
  
const providercontract = new ethers.Contract(bicTok, bicABI, provider);

// call methods
async function main() {
    const name = await providercontract.name();
    const symbol = await providercontract.symbol();
    const totalSupply = await providercontract.totalSupply();
    console.log(name, symbol, totalSupply);
}

main();


