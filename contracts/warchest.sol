// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

//import "hardhat/console.sol";

/// @custom:security-contact security@brentonthomas.com

contract Warchest is ERC20, ERC20Permit {

    constructor() ERC20("WARCHEST", "WAR") ERC20Permit("WARCHEST") {

        require(18 == decimals(), "Decimals must be 18");

        uint256 ONE_BILLION = 1e9;
        uint256 GWEI_MULT = 1e18;
        uint256 INITIAL_SUPPLY = ONE_BILLION * GWEI_MULT;

        super._mint(msg.sender, INITIAL_SUPPLY);
    }
}