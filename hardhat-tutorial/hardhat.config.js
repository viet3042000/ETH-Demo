require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    node1: {
      url: "http://127.0.0.1:8545", // Adjust to Node 1's RPC URL
      accounts: ["0x8430bb3002d8c11ab5e735695a312dac45429f913eb15d81085c766c97e4e95d"]
    },
    node2: {
      url: "http://127.0.0.1:8546",
      accounts: ["0xa8538ff5a231f28084e8b593cb73482f82e6ae21424e7d2e09edf732f23eca62"]
    },
    node3: {
      url: "http://127.0.0.1:8547",
      accounts: ["0x85ee306749c938d210e2f7b9c648b8c32adfb2ce061fe230e59eb7a3aa06125c "]
    }
  },
};