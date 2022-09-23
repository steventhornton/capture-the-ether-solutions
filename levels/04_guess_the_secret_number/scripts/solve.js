const { ethers } = require("hardhat");
const hre = require("hardhat");


async function solve(instance_address, account) {

    const GuessTheSecretNumberChallenge = await ethers.getContractFactory("GuessTheSecretNumberChallenge");
    const contract = GuessTheSecretNumberChallenge.attach(instance_address);
    
    answer_hash = 0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365;
    console.log(answer_hash);

    for (let i = 0; i < 2**8; i++) {
        console.log(`i: ${i} hash: ${ethers.utils.keccak256(i)}`);
        if (ethers.utils.keccak256(i) == answer_hash) {
            answer = i;
            console.log(`Answer is ${answer}`);
            break;
        }
    }

    let tx = await contract.guess(answer, {'value': ethers.utils.parseEther('1')});
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

    instance_address = '0x50147f6a9094c77B782BF19d46272e1bB2c04387';

    await solve(instance_address, account);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
