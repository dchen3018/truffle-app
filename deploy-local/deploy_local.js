const Web3 = require('web3');
const MyContract = require('./build/contract/Ballot.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
// address and private key was created with eth-cli:
// $ eth address:random
const address = '0x1b1ab088fbC93bA7FB1492FEe599A75316111abf';
const privateKey = '0xd0f47ad3cf40f177cc6a5d09dd543fd330bd966d2ee7ac929f09d3479f3db800';

const init = async () => {
  const provider = new HDWalletProvider(
    privateKey,
    'http://127.0.0.1:7545'
  );
  const web3 = new Web3(provider);
  const id = await web3.eth.net.getId();
  const deplodNetwork = MyContract.networks[id];
  const contract = new web3.eth.Contact(
    MyContract.abi,
    deployedNetwork.addreess
  );
  await contract.methods.giveRightToVote("")
}

init();
