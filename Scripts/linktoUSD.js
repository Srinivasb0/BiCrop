import ethers  from "ethers";
import dotenv from "dotenv";

dotenv.config();

const network = process.env.ETHEREUM_NETWORK;
const provider = new ethers.providers.InfuraProvider(network,process.env.INFURA_API_KEY);


const LinktoUSDABI = [
    "function getLatestPrice() view returns(uint)"
  ]
const LinktoUSD = "0x785c15EA822C8EF2dB57549f8F3cce7C0BF3e18b";
  
const providercontract = new ethers.Contract(LinktoUSD, LinktoUSDABI, provider);

// call methods
async function priceFeed() {
    const latestPrice = await providercontract.getLatestPrice();
    const price = parseInt(latestPrice['_hex'],16)+1;
    const LinktoUSD = price / 100000000 // ;
    console.log("The Latest price of 1 Link is" , LinktoUSD, "USD");
}

priceFeed();