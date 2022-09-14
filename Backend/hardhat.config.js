require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


module.exports = {
 
  solidity: "0.8.7",
  namedAccounts: {
    deployer: {
      default: 0, // ethers built in account at index 0
    },
  },
 
}
