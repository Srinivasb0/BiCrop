// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BiCropToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("BiCropToken", "BIC") {
        _mint(msg.sender, initialSupply);
    }
}