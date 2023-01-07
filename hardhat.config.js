
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.17" },
      { version: "0.7.6" },
      { version: "0.6.6" }
    ]
  },
  networks: {
    goerli: {

      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY,],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY,],
    },
    local: {
      url: `http://127.0.0.1:8545`,
      accounts: [process.env.WALLET_PRIVATE_KEY,],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 100000000
  },
};

// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config()
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks:{
//     goerli:{
//       url:process.env.ALCHEMY_URL,
//       accounts: [process.env.WALLET_PRIVATE_KEY]
//     }
//   }
// };

// Contract deployed to: 0xB7a61314912151d8b6d3396eD0Ad0E27C899ab2d
