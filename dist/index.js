"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWeb3 = exports.Web3Provider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@web3-react/core");

var _ethers = require("ethers");

var _WalletModal = _interopRequireDefault(require("./components/WalletModal"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getLibrary(provider) {
  var library = new _ethers.ethers.providers.Web3Provider(provider);
  library.pollingInterval = 1000;
  return library;
}

var Web3Context = /*#__PURE__*/(0, _react.createContext)({});

var Web3ContextProvider = function Web3ContextProvider(_ref) {
  var config = _ref.config,
      children = _ref.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useWeb3React = (0, _core.useWeb3React)(),
      account = _useWeb3React.account,
      library = _useWeb3React.library,
      chainId = _useWeb3React.chainId,
      connector = _useWeb3React.connector;

  var openWalletModal = function openWalletModal() {
    return setShowModal(true);
  };

  return /*#__PURE__*/_react.default.createElement(Web3Context.Provider, {
    value: {
      library: library,
      account: account,
      chainId: chainId,
      connector: connector,
      openWalletModal: openWalletModal
    }
  }, children, /*#__PURE__*/_react.default.createElement(_WalletModal.default, {
    config: config,
    isOpen: showModal,
    onClose: function onClose() {
      return setShowModal(false);
    }
  }));
};

var Web3Provider = function Web3Provider(_ref2) {
  var config = _ref2.config,
      children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement(_core.Web3ReactProvider, {
    getLibrary: getLibrary
  }, /*#__PURE__*/_react.default.createElement(_theme.default, null, /*#__PURE__*/_react.default.createElement(Web3ContextProvider, {
    config: config
  }, children)), /*#__PURE__*/_react.default.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /*#__PURE__*/_react.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
    rel: "stylesheet"
  }));
};

exports.Web3Provider = Web3Provider;

var useWeb3 = function useWeb3() {
  return (0, _react.useContext)(Web3Context);
};

exports.useWeb3 = useWeb3;