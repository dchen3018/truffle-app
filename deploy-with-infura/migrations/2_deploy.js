const MyContract = artifacts.require('MyContract');

module.exports = async function (deployer, _, accounts) {
  await deployer.deploy(MyContract);
  await web3.eth.sendTransaction({
    from: accounts[0],
    to: '0x06f2697ed9AEFB9445697419Ed77022dAa8233A1',
    value: web3.utils.toWei('1', 'ether')
  });
};
