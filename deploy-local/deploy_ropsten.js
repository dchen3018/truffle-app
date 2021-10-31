const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
require('dotenv').config();

//contract information
const contractFile = fs.readFileSync("./build/contracts/ballot.json");
const source = JSON.parse(contractFile);
const bytecode = source.bytecode;
const abi = source.abi;

//account to deploy the contract
let account = "0xD737d19672238dCAC1D0Bebe4AD1e960ae500403";

//arguments for the constructor of the contract
let argument =
[["0x63616e6469646174653100000000000000000000000000000000000000000000",
"0x6332000000000000000000000000000000000000000000000000000000000000",
"0x6333000000000000000000000000000000000000000000000000000000000000"]];


const init = async () => {
  const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    'https://ropsten.infura.io/v3/' + process.env.INFURA_KEY
  );
  const web3 = new Web3(provider);
  const id = await web3.eth.net.getId();

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

}

init();
