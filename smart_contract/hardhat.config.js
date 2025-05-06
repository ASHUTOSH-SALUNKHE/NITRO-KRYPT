//https://eth-sepolia.g.alchemy.com/v2/5sXEMSwUFB0ryHa8AVhzC4dia1rYX_oB

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/5sXEMSwUFB0ryHa8AVhzC4dia1rYX_oB',
      accounts: ['22ec8fc6327b59a600fb3bcc6f3136d1563ad5215909282213ddc6bf9765989d'],
    },
  },
};