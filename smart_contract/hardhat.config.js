require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/LssgTEwQEDhhsYxFgbQqHwv3_rNae45a',
      accounts: ['dcb23a07265f3f8084f063c351095a21a40ce3630be23711e7182898465e83c3'],
    },
  },
};