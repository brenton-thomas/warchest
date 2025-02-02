require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY } = process.env;



/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.28",
  
  defaultNetwork: "hardhat", 
  networks: {    
     hardhat: {},   
     sepolia: {     
      url: API_URL,      
      accounts: [PRIVATE_KEY],   
      chainId:11155111,
     }
  }
};
