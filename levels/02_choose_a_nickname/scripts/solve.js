const { ethers } = require("hardhat");
const hre = require("hardhat");


async function solve(instance_address, account) {

    const CaptureTheEther = await ethers.getContractFactory("CaptureTheEther");
    const contract = CaptureTheEther.attach(instance_address);

    let tx = await contract.setNickname(ethers.utils.formatBytes32String('0xThornton'));
    await tx.wait(10);
    
    console.log('Success!')

}


async function main() {

    const [account] = await ethers.getSigners();
    console.log(`Account address: ${account.address}`);
    console.log('');

    instance_address = '0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee';

    await solve(instance_address, account);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
