
async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const ManufactureProductDetails = await ethers.getContractFactory("ManufactureProductDetails");
    const manufactureProductDetails = await ManufactureProductDetails.deploy();
  
    console.log("ManufactureProductDetails address:", manufactureProductDetails.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });