const { ethers } = require("hardhat");
const hre = require("hardhat");


async function solve(instance_address, account) {

    const CallMeChallenge = await ethers.getContractFactory("CallMeChallenge");
    const contract = CallMeChallenge.attach(instance_address);

    let tx = await contract.callme();
    await tx.wait(10);
    
    console.log('Success!')

}


async function main() {

    const [account] = await ethers.getSigners();
    console.log(`Account address: ${account.address}`);
    console.log('');

    instance_address = '0x0179E05f9097Bb11F969DdE28F527E66644712E5';

    await solve(instance_address, account);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
