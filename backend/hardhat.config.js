require("@nomiclabs/hardhat-waffle");
module.exports = {
 solidity: '0.8.0',
 networks: {
 goerli: {
 url: "https://goerli.infura.io/v3/8589a3ee730e419cac6d27b55ebbd7f6",
 accounts: ["5236991524864a6a703e4e146d9366dd3ed81145577714496a5d32d70beb16d9"]
 }
 }
}
