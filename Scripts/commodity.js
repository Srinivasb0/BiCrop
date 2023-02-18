import fs from 'fs';
import fetch from "node-fetch";
import priceFeed from './linktoUSD.js'

// const AUTH_TOKEN = "wwapcfucann9a4v598xd2956rh7c5w31844zr6hk35y455srd50srd48n0vf"

var base_currency = 'USD'
var symbol = 'RICE' 
var endpoint = 'latest'
var access_key = 'lq98djv5r050inmagtp1ne3e5cegmdi333e7z4i6209co5utj1lp84pt2ydo'


async function commodityPrice() {
    var url = 'https://commodities-api.com/api/'+endpoint+'?access_key='+access_key+'&base='+base_currency+'&symbols='+symbol
	var data = await fetch(url).then(response => response.json());

    
    
    // price in cwt (1 / price)
    var price = Math.round(1 / data['data']['rates'][symbol]);
    
    // calling price feed
    var link2usd = await priceFeed();

    // converting commodity price to link
    var usd2link = (link2usd / price).toPrecision(2); 
    
    // converting link to BIC
    var link2BIC = usd2link * 10;

    console.log(price, link2usd, usd2link, link2BIC);
}
commodityPrice()