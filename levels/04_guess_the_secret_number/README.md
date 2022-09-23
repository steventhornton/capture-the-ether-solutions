# Guess the Secret Number

The files in this directory provide the solution to the "Guess the Secret Number" challenge

## Solution
- Since the input to `guess` is a `uint8`, there aree only 256 (2**8) possible values that the answer could take. We can simply try all values and find the number whose `keccak256` has is equal to the solution.

## Running the Script
```{bash}
npx hardhat run scripts/solve.js --network ropsten
```

## Testing
To test the solution, the `scripts/solve.js` script can be run on a fork of the Ropsten testnet:
```{bash}
npx hardhat run scripts/solve.js --network hardhat
```
