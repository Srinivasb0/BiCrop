var Mnft = artifacts.require("myNFT.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Mnft);
};