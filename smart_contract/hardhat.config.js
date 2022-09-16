// https://eth-goerli.g.alchemy.com/v2/yrBR_ATmkl-HvzBsKOKUzgATDDCyRpyH

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/yrBR_ATmkl-HvzBsKOKUzgATDDCyRpyH',
      accounts: ['5647c091ad9c0c8291573b2a07d6429658de5497701d0442b9ffa667fe98e8f9']
    }
  }
}