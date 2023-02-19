import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';

import { Navbar, Nav, Container, Button, Tooltip , OverlayTrigger  } from 'react-bootstrap';
import HomePage from './HomePage.js';
import {ethers} from 'ethers';

function App() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;

  const connectWallet = async () => {
    console.log(haveMetamask);
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
      console.log(accountAddress);
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      provider.send("eth_requestAccounts", []);
      // const signer = provider.getSigner();
      // const tokcontract = new ethers.Contract(tokAddress, tokABI, provider);
      // const name = tokcontract.name();
      // const symbol = tokcontract.symbol();
    } catch (error) {
      setIsConnected(false);
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {accountAddress}
    </Tooltip>
  );
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">@ BiCrop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="/" className="mx-3">Home</Nav.Link>
              <Nav.Link href="/about" className="mx-3">About</Nav.Link>
              <Nav.Link href="/services" className="mx-3">Services</Nav.Link>
              <Nav.Link href="/blog" className="mx-3">Blog</Nav.Link>
              <Nav.Link href="/contact" className="mx-3">Contact</Nav.Link> */}
           
              <Button variant="dark" size="sm">Quick Node</Button>
              {
                isConnected ? 
                <div>
                
                <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="outline-dark" size="sm" className="ms-2">Connected 0x....</Button>
    </OverlayTrigger>
                </div>
                  :
              <Button variant="outline-dark" size="sm" className="ms-2" onClick={connectWallet}>Wallet</Button>
}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
