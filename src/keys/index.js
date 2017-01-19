'use strict'

module.exports = {
  rsa: require('./rsa'),
  ed25519: require('./ed25519')
}

try {
  module.exports.secp256k1 = require('libp2p-crypto-secp256k1')
} catch (err) {
}
