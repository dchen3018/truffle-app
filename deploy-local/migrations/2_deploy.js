const Ballot = artifacts.require('Ballot');
const SimpleStorage = artifacts.require('SimpleStorage');
const bytes32 = require('bytes32');

const Str1 = bytes32({input: 'A'});
const Str2 = bytes32({input: 'B'});
const Str3 = bytes32({input: 'C'});
//"0x63616e6469646174653100000000000000000000000000000000000000000000",
//"0x6332000000000000000000000000000000000000000000000000000000000000",
//"0x6333000000000000000000000000000000000000000000000000000000000000"



module.exports = function (deployer) {
  deployer.deploy(Ballot,[Str1, Str2, Str3]);
  deployer.deploy(SimpleStorage);
};
