require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.4.21",
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: [3000, 6000]
      },
      forking: {
        url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_ROPSTEN_API_KEY}`
      },
      accounts: [{privateKey: process.env.PRIVATE_KEY, balance: '10000000000000000000'}]
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_ROPSTEN_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
