"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WalletModal;

var _core = require("@web3-react/core");

var _walletconnectConnector = require("@web3-react/walletconnect-connector");

var _react = _interopRequireWildcard(require("react"));

var _reactDeviceDetect = require("react-device-detect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _metamask = _interopRequireDefault(require("../images/metamask.png"));

var _x2 = require("../images/x.svg");

var _Fortmatic = require("../connectors/Fortmatic");

var _usePrevious = _interopRequireDefault(require("../hooks/usePrevious"));

var _AccountDetails = _interopRequireDefault(require("./AccountDetails"));

var _Text = require("./Text");

var _connectors = require("../connectors");

var _Modal = _interopRequireDefault(require("./Modal"));

var _Option = _interopRequireDefault(require("./Option"));

var _PendingView = _interopRequireDefault(require("./PendingView"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CloseIcon = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"])));

var Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.flexColumnNoWrap;
});

var HeaderRow = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.flexRowNoWrap;
}, function (props) {
  return props.color === 'blue' ? function (_ref3) {
    var theme = _ref3.theme;
    return theme.primary1;
  } : 'inherit';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mediaWidth.upToMedium(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 1rem;\n  "])));
});

var ContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 2rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  ", ";\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.mediaWidth.upToMedium(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["padding: 1rem"])));
});

var UpperSection = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"])));

var OptionGrid = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 10px;\n  ", ";\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.mediaWidth.upToMedium(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  "])));
});

var HoverText = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  :hover {\n    cursor: pointer;\n  }\n"])));

var WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending'
};

function WalletModal(_ref7) {
  var config = _ref7.config,
      isOpen = _ref7.isOpen,
      onClose = _ref7.onClose;

  // important that these are destructed from the account-specific web3-react context
  var _useWeb3React = (0, _core.useWeb3React)(),
      active = _useWeb3React.active,
      account = _useWeb3React.account,
      connector = _useWeb3React.connector,
      activate = _useWeb3React.activate,
      error = _useWeb3React.error;

  var _useState = (0, _react.useState)(WALLET_VIEWS.ACCOUNT),
      _useState2 = _slicedToArray(_useState, 2),
      walletView = _useState2[0],
      setWalletView = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      pendingWallet = _useState4[0],
      setPendingWallet = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      pendingError = _useState6[0],
      setPendingError = _useState6[1];

  var previousAccount = (0, _usePrevious.default)(account);

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      supportedWallets = _useState8[0],
      setSupportedWallets = _useState8[1];

  var fortmatic = supportedWallets.fortmatic,
      portis = supportedWallets.portis,
      injected = supportedWallets.injected;
  (0, _react.useEffect)(function () {
    var supportedWallets = (0, _connectors.getSupportedWallets)(config);
    setSupportedWallets(supportedWallets);
  }, [config]); // close on connection, when logged out before

  (0, _react.useEffect)(function () {
    if (account && !previousAccount && isOpen) {
      onClose();
    }
  }, [account, previousAccount, onClose, isOpen]); // always reset to account view

  (0, _react.useEffect)(function () {
    if (isOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [isOpen]); // close modal when a connection is successful

  var activePrevious = (0, _usePrevious.default)(active);
  var connectorPrevious = (0, _usePrevious.default)(connector);
  (0, _react.useEffect)(function () {
    if (isOpen && (active && !activePrevious || connector && connector !== connectorPrevious && !error)) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [setWalletView, active, error, connector, isOpen, activePrevious, connectorPrevious]);

  var tryActivation = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(connector) {
      var _connector$walletConn, _connector$walletConn2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object.keys(supportedWallets).map(function (key) {
                if (connector === supportedWallets[key].connector) {
                  return supportedWallets[key].name;
                }

                return true;
              });
              setPendingWallet(connector); // set wallet for pending view

              setWalletView(WALLET_VIEWS.PENDING); // if the connector is walletconnect and the user has already tried to connect, manually reset the connector

              if (connector instanceof _walletconnectConnector.WalletConnectConnector && (_connector$walletConn = connector.walletConnectProvider) !== null && _connector$walletConn !== void 0 && (_connector$walletConn2 = _connector$walletConn.wc) !== null && _connector$walletConn2 !== void 0 && _connector$walletConn2.uri) {
                connector.walletConnectProvider = undefined;
              }

              connector && activate(connector, undefined, true).catch(function (error) {
                if (error instanceof _core.UnsupportedChainIdError) {
                  activate(connector); // a little janky...can't use setError because the connector isn't set
                } else {
                  setPendingError(true);
                }
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function tryActivation(_x) {
      return _ref8.apply(this, arguments);
    };
  }(); // close wallet modal if fortmatic modal is active


  (0, _react.useEffect)(function () {
    fortmatic === null || fortmatic === void 0 ? void 0 : fortmatic.connector.on(_Fortmatic.OVERLAY_READY, function () {
      onClose();
    });
  }, [onClose, fortmatic]); // get wallets user can switch too, depending on device/browser

  function getOptions() {
    var isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(supportedWallets).map(function (key) {
      var option = supportedWallets[key]; // check for mobile options

      if (_reactDeviceDetect.isMobile) {
        //disable portis on mobile for now
        if (option.connector === portis.connector) {
          return null;
        }

        if (!window.web3 && !window.ethereum && option.mobile) {
          return /*#__PURE__*/_react.default.createElement(_Option.default, {
            onClick: function onClick() {
              option.connector !== connector && !option.href && tryActivation(option.connector);
            },
            id: "connect-".concat(key),
            key: key,
            active: option.connector && option.connector === connector,
            color: option.color,
            link: option.href,
            header: option.name,
            subheader: null,
            icon: require('../images/' + option.iconName)
          });
        }

        return null;
      } // overwrite injected when needed


      if (option.connector === (injected === null || injected === void 0 ? void 0 : injected.connector)) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          if (option.name === 'MetaMask') {
            return /*#__PURE__*/_react.default.createElement(_Option.default, {
              id: "connect-".concat(key),
              key: key,
              color: '#E8831D',
              header: 'Install Metamask',
              subheader: null,
              link: 'https://metamask.io/',
              icon: _metamask.default
            });
          } else {
            return null; //dont want to return install twice
          }
        } // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
            return null;
          } // likewise for generic
          else if (option.name === 'Injected' && isMetamask) {
              return null;
            }
      } // return rest of options


      return !_reactDeviceDetect.isMobile && !option.mobileOnly && /*#__PURE__*/_react.default.createElement(_Option.default, {
        id: "connect-".concat(key),
        onClick: function onClick() {
          option.connector === connector ? setWalletView(WALLET_VIEWS.ACCOUNT) : !option.href && tryActivation(option.connector);
        },
        key: key,
        active: option.connector === connector,
        color: option.color,
        link: option.href,
        header: option.name,
        subheader: null //use option.descriptio to bring back multi-line
        ,
        icon: require('../images/' + option.iconName)
      });
    });
  }

  function getModalContent() {
    if (error) {
      return /*#__PURE__*/_react.default.createElement(UpperSection, null, /*#__PURE__*/_react.default.createElement(CloseIcon, {
        onClick: onClose
      }, /*#__PURE__*/_react.default.createElement(_x2.ReactComponent, null)), /*#__PURE__*/_react.default.createElement(HeaderRow, null, error instanceof _core.UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'), /*#__PURE__*/_react.default.createElement(ContentWrapper, null, error instanceof _core.UnsupportedChainIdError ? /*#__PURE__*/_react.default.createElement("h5", null, "Please connect to the appropriate Ethereum network.") : 'Error connecting. Try refreshing the page.'));
    }

    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return /*#__PURE__*/_react.default.createElement(_AccountDetails.default, {
        onClose: onClose,
        openOptions: function openOptions() {
          return setWalletView(WALLET_VIEWS.OPTIONS);
        },
        supportedWallets: supportedWallets
      });
    }

    return /*#__PURE__*/_react.default.createElement(UpperSection, null, /*#__PURE__*/_react.default.createElement(CloseIcon, {
      onClick: onClose
    }, /*#__PURE__*/_react.default.createElement(_x2.ReactComponent, null)), walletView !== WALLET_VIEWS.ACCOUNT ? /*#__PURE__*/_react.default.createElement(HeaderRow, {
      color: "blue"
    }, /*#__PURE__*/_react.default.createElement(HoverText, {
      onClick: function onClick() {
        setPendingError(false);
        setWalletView(WALLET_VIEWS.ACCOUNT);
      }
    }, /*#__PURE__*/_react.default.createElement(_Text.Text, {
      size: 16,
      color: "#4287f5"
    }, "Back"))) : /*#__PURE__*/_react.default.createElement(HeaderRow, null, /*#__PURE__*/_react.default.createElement(HoverText, null, /*#__PURE__*/_react.default.createElement(_Text.Text, {
      size: 16
    }, "Connect to a wallet"))), /*#__PURE__*/_react.default.createElement(ContentWrapper, null, walletView === WALLET_VIEWS.PENDING ? /*#__PURE__*/_react.default.createElement(_PendingView.default, {
      connector: pendingWallet,
      error: pendingError,
      setPendingError: setPendingError,
      tryActivation: tryActivation,
      supportedWallets: supportedWallets
    }) : /*#__PURE__*/_react.default.createElement(OptionGrid, null, getOptions())));
  }

  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    isOpen: isOpen,
    onDismiss: onClose,
    minHeight: false,
    maxHeight: 90
  }, /*#__PURE__*/_react.default.createElement(Wrapper, null, getModalContent()));
}