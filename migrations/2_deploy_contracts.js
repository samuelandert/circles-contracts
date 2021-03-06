const Hub = artifacts.require('./Hub.sol');
const { convertToBaseUnit } = require('../test/helpers/math');

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Hub, accounts[0], 107, 31556952, 'CRC', convertToBaseUnit(100), '23148148148148');
};
