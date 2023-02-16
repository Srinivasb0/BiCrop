import fs from 'fs';
import fetch from "node-fetch";

// const AUTH_TOKEN = "wwapcfucann9a4v598xd2956rh7c5w31844zr6hk35y455srd50srd48n0vf"

async function commodityPrice() {
    const url = "https://commodities-api.com/api/latestPost"
	const data = await fetch(url).then(response => response.json())
    console.log(data);
}
commodityPrice()