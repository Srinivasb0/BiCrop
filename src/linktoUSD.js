import {ethers} from 'ethers';

const network = "goerli";
const provider = new ethers.providers.InfuraProvider(network,"c05e61a31c6e4a2ca64715ac31ff7720");


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
    return LinktoUSD;
}

export default  priceFeed;