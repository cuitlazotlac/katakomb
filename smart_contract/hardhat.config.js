require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-goerli.g.alchemy.com/v2/0l0sgk98pREjza6usfBiGxgD4jpQbQJR",
      accounts: [""],
    },
  },
};
