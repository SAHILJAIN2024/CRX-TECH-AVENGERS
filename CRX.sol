// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarbonCreditToken is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("Carbon Credit Token", "CRX")
        Ownable(initialOwner)
    {
        _mint(initialOwner, 10 * 10 ** decimals()); 
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}

# This smart contract has been deployed on remix ide 
contract address - 0xb3e497afCaB81fFb7690e3157D03715F0580B391
