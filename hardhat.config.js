require("@nomiclabs/hardhat-waffle"); //new update from hardhat requires to import 'hardhat-toolbox'
require("dotenv").config();
require('hardhat-abi-exporter');

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId: 4,
    },
    rinkeby: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [process.env.STAGING_PRIVATE_KEY]
    },
  },
};