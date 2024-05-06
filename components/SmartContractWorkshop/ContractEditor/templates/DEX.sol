// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleDEX {
    IERC20 public token;

    constructor(address tokenAddress) {
        token = IERC20(tokenAddress);
    }

    function buyTokens() external payable {
        uint256 amountToBuy = msg.value; // Amount of wei sent with the transaction
        uint256 dexBalance = token.balanceOf(address(this));
        require(amountToBuy > 0, "You need to send some ether");
        require(amountToBuy <= dexBalance, "Not enough tokens in the reserve");

        token.transfer(msg.sender, amountToBuy);
    }

    function sellTokens(uint256 amount) external {
        require(amount > 0, "You need to sell at least some tokens");
        uint256 allowance = token.allowance(msg.sender, address(this));
        require(allowance >= amount, "Check the token allowance");

        token.transferFrom(msg.sender, address(this), amount);
        payable(msg.sender).transfer(amount);
    }
}
