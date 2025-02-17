
const hre = require("hardhat");

async function main() {

    // Get the ContractFactory of your SimpleContract
    const SimpleContract = await hre.ethers.getContractFactory("SimpleContract");
    // Deploy the contract
    const contract = await SimpleContract.deploy();

    // Wait for the deployment transaction to be mined
    await contract.deployed();

    console.log(`SimpleContract deployed to: ${contract.address}`);

  // const name = "MyTokenA";
  // const symbol = "MCT";
  // const decimals = 18;

  // const MyTokenA = await hre.ethers.getContractFactory("MyTokenA");
  // console.log(MyTokenA);
  // const token = await MyTokenA.deploy(name, symbol, decimals);
  // await token.deployed();
  // console.log(`MyTokenA deployed at: ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});