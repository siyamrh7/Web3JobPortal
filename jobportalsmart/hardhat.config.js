require("@nomicfoundation/hardhat-toolbox");

// walk planet drift around avoid tortoise balance trim moment put critic spice
/** @type import('hardhat/config').HardhatUserConfig */
//0xd8B4338e306842d2c1394eeFEc35F81BbB6EE4c4
const ALCHEMY_API_KEY= "aVg6rY7LBAJa4C_yZldx_2UL3dE86CBw"
const GOERLI_PRIVATE_KEY="04719e5264b273b0eb418ebe8847be99d576ec6a986396dadc680fb35d701804"
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
