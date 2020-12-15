'use strict';

const os = require('os');

const pkg = require('../package.json');

exports.DEFAULT_UA = `AlibabaCloud (${os.platform()}; ${os.arch()}) ` +
  `Node.js/${process.version} Core/${pkg.version}`;
exports.DEFAULT_CLIENT = `Node.js(${process.version}), ${pkg.name}: ${pkg.version}`;
exports.DEFAULT_PARAMTERS = ['Product', 'Version', 'Action', 'RegionId', 'TraceId', 'IdToken', 
    'AliUid', 'AccessKeyId', 'Format', 'SignatureMethod', 'SignatureNonce', 'SignatureVersion', 'Timestamp', 'Signature']
