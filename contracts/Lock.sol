// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./openzeppelin/token/ERC20/ERC20.sol";

contract Simple_Token is ERC20 {
    address public owner;

 

    constructor(uint256 initialSupply) ERC20("CARCARA", "CRC") {
        _mint(msg.sender, initialSupply);
        owner = msg.sender;
    }




}