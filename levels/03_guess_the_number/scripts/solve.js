const { ethers } = require("hardhat");
const hre = require("hardhat");


async function solve(instance_address, account) {

    const GuessTheNumberChallenge = await ethers.getContractFactory("GuessTheNumberChallenge");
    const contract = GuessTheNumberChallenge.attach(instance_address);
    
    console.log(await ethers.provider.getBalance(instance_address));

    let tx = await contract.guess(42, {'value': ethers.BigNumber.from('1000000000000000000')});
    await tx.wait(10);
    
    if (await contract.isComplete()) {
      console.log('Success!')
    } else {
      console.log('Fail!');
    }
    
}


async function main() {

    const [account] = await ethers.getSigners();
    console.log(`Account address: ${account.address}`);
    console.log('');

    instance_address = '0x06E8B5e102949c1B28B4F4a0538A4Ec2579ae377';

    await solve(instance_address, account);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
