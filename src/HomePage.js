import React from "react";
import { Button, Card,Col, Container, Row } from 'react-bootstrap';
import './CardList.css'; // import custom CSS file
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartSimple, faDollar,
          faBowlRice, faWheatAlt, faCubesStacked, faSeedling, faTree } from '@fortawesome/free-solid-svg-icons';
import {ethers} from 'ethers';
import priceFeed from './linktoUSD.js';

const GrayContainer = () => {
  return (
    <Container fluid className="gray-container text-center  home-container-2">
      <br/>
      <h4 className="text-center">BENEFITS OF TOKENIZATION 
</h4>
      <br/><br/>
      <Row style={{marginLeft:"4%"}}>
        <Col md={4}>
          <Card className="no-border-card new-card">
            <Card.Body>
              <FontAwesomeIcon icon={faChartSimple} size="3x" />
              <Card.Title className="mt-3">DEMOCRATIZATION IN INVESTMENT</Card.Title>
              <Card.Text className="mb-3">
              <br/>
              The fractionation of the asset or project allows small and medium investors to participate in the process, increasing the base of potential buyers and helping to spread the word about the investment opportunity.              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="no-border-card new-card">
            <Card.Body>
              <FontAwesomeIcon icon={faDatabase} size="3x" />
              <Card.Title className="mt-3">MORE SECURITY</Card.Title>
              <Card.Text className="mb-3">
              <br/>
              Blockchain is the technology used to create and trade cryptocurrencies and has the highest levels of data security in addition to using top-notch encryption.           
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="no-border-card new-card">
            <Card.Body>
            <FontAwesomeIcon icon={faDollar} size="3x" />  
              <Card.Title className="mt-3">GREATER TRANSPARENCY IN TRANSACTIONS</Card.Title>
              <Card.Text className="mb-3">
              <br/>
              Each transaction is recorded in a digital ledger , is given a unique key and is available for consultation. The smart contract digitally reflects what would be legally done in a conventional transaction.
              </Card.Text>
            </Card.Body>
            </Card>
        </Col>
      </Row>
      <br/><br/>
    </Container>
  );
};
const CardList = (data) => {
  console.log(data);
  const cards = [
    {
      heading: "Rice",
      price: data['rice']['price'] + " USD",
      usd2link: data['rice']['usd2link'] + " LINK",
      link2BIC: data['rice']['link2BIC'] + " BIC",
      ico: "1",
    },
    {
      heading: "Wheat",
      price: data['wheat']['price'] + " USD",
      usd2link: data['wheat']['usd2link'] + " LINK",
      link2BIC: data['wheat']['link2BIC'] + " BIC",
      ico: "2",
    },
    {
      heading: "Sugar",
      price: data['sugar']['price'] + " USD",
      usd2link: data['sugar']['usd2link'] + " LINK",
      link2BIC: data['sugar']['link2BIC'] + " BIC",
      ico: "3",
    },
    {
      heading: "Corn",
      price: data['corn']['price'] + " USD",
      usd2link: data['corn']['usd2link'] + " LINK",
      link2BIC: data['corn']['link2BIC'] + " BIC",
      ico: "4",
    },
    {
      heading: "Soya Bean",
      price: data['soya']['price'] + " USD",
      usd2link: data['soya']['usd2link'] + " LINK",
      link2BIC: data['soya']['link2BIC'] + " BIC",
      ico: "5",
    },
  ];
  return (
    <>
    <p className="live">1 BIC TOKEN = 1 CWT(50 KG)  <span className="live-color"> LIVE</span> </p>
    <div className="card-container text-center">
      
      {cards.map((card, index) => (
        <Card key={index} className={index === 2 ? 'card-margin' : ''}>
          <Card.Body>
            <Card.Title className="card-heading">{card.heading}</Card.Title>
            <br/>
            {
              card.ico=="1"?
            <FontAwesomeIcon icon={faBowlRice} size="5x" />  :
            card.ico=="2"?
            <FontAwesomeIcon icon={faWheatAlt} size="5x" />  :
            card.ico=="3"?
            <FontAwesomeIcon icon={faCubesStacked} size="5x" /> :
            card.ico=="4"?
            <FontAwesomeIcon icon={faSeedling} size="5x" /> :
            <FontAwesomeIcon icon={faTree} size="5x" />
            }
            <br/>
            <Card.Text>
              <br/>
              {card.price}
              <br/>
              {card.usd2link}
              <br/>
              {card.link2BIC}
            </Card.Text>
            {/* <Button variant="dark" size="sm">{card.buttonText}</Button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
};

const ExternalWebsite = () => {
  return (
    <div>
      <iframe title="External Website" src="https://app.uniswap.org/#/pool/55072" width="100%" height="1000px" frameBorder="0" />
    </div>
  );
};

const bicSwapABI = [
  "function swapExactInputSingle(uint)",
  "function swapExactOutputSingle(uint, uint)",
]
const bicTokSwap = "0x6D4d1563AFBb4509f42c3b718B71675275C7C410";
const network = "goerli";
const provider = new ethers.providers.InfuraProvider(network,"c05e61a31c6e4a2ca64715ac31ff7720");
const signer = new ethers.Wallet("b48af849489ff8d312d0147eb40d7015727bacdf3e916be9c9754b25da1c5f44", provider);
const signercontract = new ethers.Contract(bicTokSwap, bicSwapABI, signer);
console.log(signercontract)
const bicABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns(uint)"
]
const bicTok = "0xf9c4fE8e4d570a712aE40d8836fB64192fF32B5A";
const providercontract = new ethers.Contract(bicTok, bicABI, provider);

var base_currency = 'USD'
var endpoint = 'latest'
var access_key = 'u31rm876qr0fg817bbnac6htoef9u99tg780n3e2i4fhmmc3w6zqwp3286q6'

const HomePage = () => {

  const [rice, setrice] = useState({
    "price":0,
        "link2usd":0,
        "usd2link":0,
        "link2BIC":0
  });
  const [wheat, setwheat] = useState({
    "price":0,
        "link2usd":0,
        "usd2link":0,
        "link2BIC":0
  });
  const [sugar, setsugar] = useState({
    "price":0,
        "link2usd":0,
        "usd2link":0,
        "link2BIC":0
  });
  const [corn, setcorn] = useState({
    "price":0,
        "link2usd":0,
        "usd2link":0,
        "link2BIC":0
  });
  const [soya, setsoya] = useState({
    "price":0,
        "link2usd":0,
        "usd2link":0,
        "link2BIC":0
  });

  useEffect( () => {
    (async() =>{
      
      var link2usd = await priceFeed();
      //rice
      var symbol = 'RICE'
      var url = 'https://commodities-api.com/api/'+endpoint+'?access_key='+access_key+'&base='+base_currency
      var data = await fetch(url).then(response => response.json());
      console.log(data);
      var price = Math.round(1 / data['data']['rates'][symbol]);
      var usd2link = ( price/ link2usd).toPrecision(2); 
      var link2BIC = usd2link * 10;
      setrice({
        "price":price,
        "link2usd":link2usd,
        "usd2link":usd2link,
        "link2BIC":link2BIC
      })
      console.log("rice",rice, price);

      //Wheat
      var symbol = 'WHEAT'
      var price = Math.round(1 / data['data']['rates'][symbol]);
      var usd2link = ( price/ link2usd).toPrecision(2); 
      var link2BIC = usd2link * 10;
      setwheat({
        "price":price,
        "link2usd":link2usd,
        "usd2link":usd2link,
        "link2BIC":link2BIC
      })
      console.log("wheat",wheat, price);

      //COFFEE
      var symbol = 'COFFEE'
      var price = Math.round(1 / data['data']['rates'][symbol]);
      var usd2link = ( price/ link2usd).toPrecision(2); 
      var link2BIC = usd2link * 10;
      setsugar({
        "price":price,
        "link2usd":link2usd,
        "usd2link":usd2link,
        "link2BIC":link2BIC
      })
      console.log("coffee",sugar, price);

      //CORN
      var symbol = 'CORN'
      var price = Math.round(1 / data['data']['rates'][symbol]);
      var usd2link = ( price/ link2usd).toPrecision(2); 
      var link2BIC = usd2link * 10;
      setcorn({
        "price":price,
        "link2usd":link2usd,
        "usd2link":usd2link,
        "link2BIC":link2BIC
      })
      console.log("corn",corn, price);

      //SOYABEAN
      var symbol = 'SOYBEAN'
      var price = Math.round(1 / data['data']['rates'][symbol]);
      var usd2link = ( price/ link2usd).toPrecision(2); 
      var link2BIC = usd2link * 10;
      setsoya({
        "price":price,
        "link2usd":link2usd,
        "usd2link":usd2link,
        "link2BIC":link2BIC
      })
      console.log("soya bean",soya, price);
    } ) ();
  }, []);

  // console.log(rice);
const [data, setdata] = useState(0);

  const handleChange = (event) => {
    setdata(event.target.value);
  };

   const handleClick = async ()  => {
    const name = await providercontract.name();
    const symbol = await providercontract.symbol();
    console.log(name,symbol)
    const amt = (1000000000000000000 * data).toString();
    const amountInMaximum = "5000000000000000000";
    const exactOutput = await signercontract.swapExactOutputSingle(amt, amountInMaximum);
    console.log(exactOutput);
  };


  return (
    <>
    <div className="container home-container align-items-center">
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ marginTop: "30px" }}>Token for Agriculture commodities</h1>
          <p>
          By tokenizing their crops, farmers can use the cryptocurrency in four ways: trading them on a traditional commodities exchange; trading them on a cryptocurrency exchange; using them as collateral for loans; and paying for agriculture-related goods and services at participating merchants.
          </p>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-end" style={{ height: "50vh" }}>
            <div className="mr-3 d-flex flex-column">
              <p>Uniswap</p>
              <input type="text"
              id="data"
              name="data"
              onChange={handleChange} 
              value={data}
              className="form-control form-control-lg mb-3" style={{ height: "50px", width: "200px" }} placeholder="0" />
      <div className="conversion-rate-container">
        <div className="conversion-rate">1 BIC USD -> 0.1 LINK</div>
      </div>
      <div className="conversion-rate-container">
      </div>
   
              <Button variant="dark" size="sm" onClick={handleClick}>BUY BICROP TOKEN</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container home-container2">
      <h4 className="text-center">Listed Agrocommodities</h4>
      <br/><br/><br/>
      <CardList rice={rice} wheat={wheat} sugar={sugar} corn={corn} soya={soya}/>
    </div>
    <br/><br/><br/>
    <div className="container">
    <h4 className="text-center">Uniswap</h4>
      <div className="d-flex align-items-center justify-content-center">
      {/* <ul>
        <li>100,000 Tokens minted goerli-testnet </li>
        <li>0.1% tokens supplied to the liquidity  </li>
        <li>1 BIC token for 0.1 Link token swap  </li>
      </ul> */}
    </div>
    <br/>
    <ExternalWebsite/>
    </div>

    <GrayContainer/>
  </>
  );
};

export default HomePage;
