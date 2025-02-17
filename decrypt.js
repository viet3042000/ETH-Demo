

const fs = require('fs');
const Wallet = require('ethereumjs-wallet').default;

// Load the keystore file
const keystore = fs.readFileSync('./node3/keystore/UTC--2025-02-16T14-37-39.926852000Z--f8a5de91dd4abf703b1faea8a23db31be9fbe415').toString();

// Prompt for password (or hardcode it)
const password = '492000';

async function decrypt() {
    try {
        const wallet = await Wallet.fromV3(keystore, password);
        console.log('🔑 Private Key:', wallet.getPrivateKey().toString('hex'));
    } catch (error) {
        console.error('❌ Failed to decrypt:', error.message);
    }
}

decrypt();
