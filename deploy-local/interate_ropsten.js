const Web3 = require('web3');
const MyContract = require('./build/contract/Ballot.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const account = '0xD737d19672238dCAC1D0Bebe4AD1e960ae500403';
const contract_address = '0xb219Dd1FA2f3b5aDc84e19d8Bc30BEE3e77DcF3F';
const init = async () => {
  const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    'https://ropsten.infura.io/v3/' + process.env.INFURA_KEY
  );

  const web3 = new Web3(provider);
  const contract = new web3.eth.Contact(
    MyContract.abi,
    contract_address
  );

  
}

init();
