"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupportedWallets = getSupportedWallets;
exports.NETWORK_CHAIN_ID = void 0;

var _injectedConnector = require("@web3-react/injected-connector");

var _walletconnectConnector = require("@web3-react/walletconnect-connector");

var _walletlinkConnector = require("@web3-react/walletlink-connector");

var _portisConnector = require("@web3-react/portis-connector");

var _Fortmatic = require("./Fortmatic");

var _constants = require("../constants");

var _process$env$REACT_AP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NETWORK_CHAIN_ID = parseInt((_process$env$REACT_AP = process.env.REACT_APP_CHAIN_ID) !== null && _process$env$REACT_AP !== void 0 ? _process$env$REACT_AP : '1');
exports.NETWORK_CHAIN_ID = NETWORK_CHAIN_ID;
var connectors = {
  injected: _injectedConnector.InjectedConnector,
  walletconnect: _walletconnectConnector.WalletConnectConnector,
  walletlink: _walletlinkConnector.WalletLinkConnector,
  fortmatic: _Fortmatic.FortmaticConnector,
  portis: _portisConnector.PortisConnector
};

function getSupportedWallets(config) {
  var injected = new connectors['injected']({
    supportedChainIds: config.supportedChainIds
  });
  var supportedWallets = {
    injected: _objectSpread({
      connector: injected
    }, _constants.SUPPORTED_WALLETS['injected']),
    metamask: _objectSpread({
      connector: injected
    }, _constants.SUPPORTED_WALLETS['metamask'])
  };
  Object.keys(config.connectors).forEach(function (key) {
    supportedWallets[key] = _objectSpread({
      connector: new connectors[key](config.connectors[key])
    }, _constants.SUPPORTED_WALLETS[key]);
  });
  return supportedWallets;
}