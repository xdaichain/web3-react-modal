"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAddress = isAddress;
exports.shortenAddress = shortenAddress;
exports.getEtherscanLink = getEtherscanLink;

var _address = require("@ethersproject/address");

function isAddress(value) {
  try {
    return (0, _address.getAddress)(value);
  } catch (_unused) {
    return false;
  }
} // shorten the checksummed version of the input address to have 0x + 4 characters at start and end


function shortenAddress(address) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var parsed = isAddress(address);

  if (!parsed) {
    throw Error("Invalid 'address' parameter '".concat(address, "'."));
  }

  return "".concat(parsed.substring(0, chars + 2), "...").concat(parsed.substring(42 - chars));
}

var ETHERSCAN_PREFIXES = {
  1: '',
  3: 'ropsten.',
  4: 'rinkeby.',
  5: 'goerli.',
  42: 'kovan.'
};

function getEtherscanLink(chainId, data, type) {
  var prefix = "https://".concat(ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1], "etherscan.io");

  switch (type) {
    case 'transaction':
      {
        return "".concat(prefix, "/tx/").concat(data);
      }

    case 'token':
      {
        return "".concat(prefix, "/token/").concat(data);
      }

    case 'block':
      {
        return "".concat(prefix, "/block/").concat(data);
      }

    case 'address':
    default:
      {
        return "".concat(prefix, "/address/").concat(data);
      }
  }
}