const Web3 = require('web3');
const MyContract = require('./build/contracts/MyContract.json');
const address = '0x06f2697ed9AEFB9445697419Ed77022dAa8233A1';
const privateKey = '0x8278299254a4d59aa4451f3843807390ab9abc0c02d36b68efcd8c8b8c0c63d8';
const HDWalletProvider = require('@truffle/hdwallet-provider');


const init = async () => {
  const provider = new HDWalletProvider(
    privateKey,
    'http://127.0.0.1:7545'
  )
  const web3 = new Web3(provider);
  const id = await web3.eth.net.getId();
  const deployedNetwork = MyContract.networks[id];

  const contract = new web3.eth.Contract(
    MyContract.abi,
    deployedNetwork.address
  );
  await contract.methods
    .setData(10)
    .send({from: address});

  const result = await contract.methods
          .getData()
          .call();

  console.log(result);

}

init();
