// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarbonCreditToken is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("Carbon Credit Token", "CRX")
        Ownable(initialOwner)
    {
        _mint(initialOwner, 100 * 10 ** decimals()); // Mint exactly 100 CRX
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}

# This smart contract has been deployed on remix ide 
contract address - 0x0fed653E54835939f9f95f288Aecc742e029925f 
