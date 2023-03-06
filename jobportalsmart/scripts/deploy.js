// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");



async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("JobPortal");
  const token = await Token.deploy("0x2Ba7bcEdA3Cf984D4E2EAFBA0a90169651586576");
  console.log("Contract address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



// npx hardhat run --network goerli scripts/deploy.js