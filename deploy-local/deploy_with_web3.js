const fs = require('fs');
const Web3 = require('web3');
const rpcURL = 'http://127.0.0.1:7545';

const web3 = new Web3(rpcURL);


const contractFile = fs.readFileSync("./build/contracts/ballot.json");
const source = JSON.parse(contractFile);
const bytecode = source.bytecode;

const abi = source.abi;

let account ="0x8a45bbE47219Cb0e5DFf86F14672653887f2B34c";
let argument =
[["0x63616e6469646174653100000000000000000000000000000000000000000000",
"0x6332000000000000000000000000000000000000000000000000000000000000",
"0x6333000000000000000000000000000000000000000000000000000000000000"]];

let parameter = {
    from: account,
    gas: web3.utils.toHex(1200000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei'))
}

let payload = {
  data: bytecode,
  arguments: argument
}

let contract = new web3.eth.Contract(abi);

contract.deploy(payload).send(parameter, (err, transactionHash) => {
    console.log('Transaction Hash :', transactionHash);
}).on('confirmation', () => {}).then((newContractInstance) => {
    console.log('Deployed Contract Address : ', newContractInstance.options.address);
})

console.log("end")
