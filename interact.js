
const contract = require("./artifacts/contracts/ManufactureProductDetails.sol/ManufactureProductDetails.json");
console.log(JSON.stringify(contract.abi));
const API_KEY=process.env.API_KEY;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS=process.env.CONTRACT_ADDRESS;
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const ManufactureProductDetailsContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
async function main() {
    const tx = await ManufactureProductDetailsContract.getManufactureDetials("SA123");
    console.log(tx);
  }
// async function main() {
//     const tx = await ManufactureProductDetailsContract.addProductFirstPointDetails("SA123","SA123","4545","454erx");
//     console.log(tx);
//   }
  
  main();