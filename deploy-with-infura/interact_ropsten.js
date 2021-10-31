const Web3 = require('web3');
const MyContract = require('./build/contracts/MyContract.json');
const address = '0x1b1ab088fbC93bA7FB1492FEe599A75316111abf';
const privateKey = '0xd0f47ad3cf40f177cc6a5d09dd543fd330bd966d2ee7ac929f09d3479f3db800';
const HDWalletProvider = require('@truffle/hdwallet-provider');


const init = async () => {
  const provider = new HDWalletProvider(
    privateKey,
    'https://ropsten.infura.io/v3/a46af26d950c44bbb9fd7cd05f678823'
  )
  const web3 = new Web3(provider);
  //const id = await web3.eth.net.getId();
  //const deployedNetwork = MyContract.networks[id];

  let contract = new web3.eth.Contract(
    MyContract.abi
  );

  contract = await contract
    .deploy({data: MyContract.bytecode})
    .send({from: address});


  await contract.methods
    .setData(10)
    .send({from: address});

  const result = await contract.methods
          .getData()
          .call();

  console.log(result);

}

init().then(() => {console.log('the end'); process.exit()});
