async function main() {
    const lottery = await ethers.getContractFactory("lottery");
 
    // Start deployment, returning a promise that resolves to a contract object
    const Lottery = await lottery.deploy();   
    console.log("Contract deployed to address:", Lottery.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });