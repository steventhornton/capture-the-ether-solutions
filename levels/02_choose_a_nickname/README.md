# Choose a Nickname

The files in this directory provide the solution to the "Choose a Nickname" challenge

## Solution
- Call the `setNickname` function on the `CaptureTheEther` contract with an input nickname.

## Running the Script
```{bash}
npx hardhat run scripts/solve.js --network ropsten
```

## Testing
To test the solution, the `scripts/solve.js` script can be run on a fork of the Ropsten testnet:
```{bash}
npx hardhat run scripts/solve.js --network hardhat
```
