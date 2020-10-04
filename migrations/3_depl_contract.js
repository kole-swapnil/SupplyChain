var medi = artifacts.require("./medico.sol");

module.exports = function(deployer) {
  deployer.deploy(medi);
};
