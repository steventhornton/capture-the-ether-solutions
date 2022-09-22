# Guess the Number

The files in this directory provide the solution to the "Guess the Number" challenge

## Solution
- The solution is 42. Call the `guess` method with an answer of 42 and pass 1 eth.

## Running the Script
```{bash}
npx hardhat run scripts/solve.js --network ropsten
```

## Testing
To test the solution, the `scripts/solve.js` script can be run on a fork of the Ropsten testnet:
```{bash}
npx hardhat run scripts/solve.js --network hardhat
```
