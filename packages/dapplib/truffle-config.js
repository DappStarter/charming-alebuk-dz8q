require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain collect grace beauty food giant'; 
let testAccounts = [
"0xc1bfdb973ca0e7b633e8c5c4451f486ed646eab20529a2b79f5cae1e1e610d2c",
"0x01b2bf1fa92e1650dc63358f78a46faffc200177d2740efd660727ea7df4ff86",
"0x65289409a20c78e87f37ec27bb03ebba9c301ae003ef79f46b08e8b1ab079344",
"0xeaad3fbb16df9c5e062cb61f4b9b507f05db73171a78ed9306195b31345f810f",
"0xe404c2adfc958059a0121d615c425e37744fa3cb1719773e204701a134e1a161",
"0x6114443bc315687102ade1be69f686d4a45a8fa01b8b329e640b486924e88e72",
"0xe549b0a0a660460b2a824d5de08ed1101b7f1981ec48a879cae05813ce5fde12",
"0x2bd444a93442da0bcb290a2b1989581bbb81aa7580f9105a807a9fd7fa080c81",
"0x7ea8b3d27c7911d674686a79fdc55be652a0d704a3828261991df93b8910fb44",
"0x800a9cc3481735e32a731699cad58b2cd917f0e74315605e3a7609f45d2db5b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

