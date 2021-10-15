require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain exchange inner private bone giant'; 
let testAccounts = [
"0xf2035dcab00330653e166c8e7a92a8f66f247a2b1e0ac695bffb80e9b3d07583",
"0x46940eb0590f075bc7bea04e5aae7c4833e27ea14227b2b3ee8b2772cb4b5a9b",
"0x745788c556bf495df102bb210bd2999062c16ad1d8b5e0ad8ed226d8859c4cac",
"0x003ff36a49a09b30d55b52aac0556adf69a1584c0b9f6ea1f0a6ca9c35dbb4b5",
"0xcfb2dd5f717bd0693411cf018df1635dcb5c84659c0880f81e90c98d01507e13",
"0x2833c2de75cceadd1e88c4a01c5c307c4ed4b1b57aca89208d8f2e0eaf442a85",
"0x3304176305b0043e8fa10e2525792987620106599c4d93814c33aeac6ea4b19c",
"0xd1d4fab9716717d3a22292286ed1c3f6d80a8aa54905a41451bb71eff68e442e",
"0x54472e19d3d9361f8f9b9c5e966426b8dcd127c27d14faf680927fdfe96aa7e8",
"0xe8b77f8e096721a91d34277648442cbf987f1aff149d506d8c8e2766c899d638"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

