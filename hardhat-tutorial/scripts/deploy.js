
const hre = require("hardhat");

async function main() {

  const nameA = "MyTokenA";
  const nameB = "MyTokenB";
  const symbolA = "MCTA";
  const symbolA = "MCTB";
  const decimals = 18;

  const MyTokenA = await hre.ethers.getContractFactory(nameA);
  const MyTokenA = await hre.ethers.getContractFactory(nameB);
  console.log(MyTokenA);
  console.log(MyTokenB);
    
  const tokenA = await MyTokenA.deploy(nameA, symbolA, decimals);
  const tokenB = await MyTokenB.deploy(nameB, symbolB, decimals);
  await tokenA.deployed();
  await tokenB.deployed();
  console.log(`MyTokenA deployed at: ${tokenA.address}`);
  console.log(`MyTokenB deployed at: ${tokenB.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
