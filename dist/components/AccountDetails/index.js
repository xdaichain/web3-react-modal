"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccountDetails;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

var _utils = require("../../utils");

var _Copy = _interopRequireDefault(require("./Copy"));

var _x = require("../../images/x.svg");

var _coinbaseWalletIcon = _interopRequireDefault(require("../../images/coinbaseWalletIcon.svg"));

var _walletConnectIcon = _interopRequireDefault(require("../../images/walletConnectIcon.svg"));

var _fortmaticIcon = _interopRequireDefault(require("../../images/fortmaticIcon.png"));

var _portisIcon = _interopRequireDefault(require("../../images/portisIcon.png"));

var _Identicon = _interopRequireDefault(require("../Identicon"));

var _Text = require("../Text");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderRow = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.flexRowNoWrap;
}, function (props) {
  return props.color === 'blue' ? function (_ref2) {
    var theme = _ref2.theme;
    return theme.primary1;
  } : 'inherit';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mediaWidth.upToMedium(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 1rem;\n  "])));
});

var UpperSection = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"])));

var InfoCard = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 1rem;\n  border: 1px solid ", ";\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.bg3;
});

var AccountGroupingRow = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ", ";\n  div {\n    ", "\n    align-items: center;\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.flexRowNoWrap;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.text1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.flexRowNoWrap;
});

var AccountSection = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 0rem 1rem;\n  ", ";\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.bg1;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.mediaWidth.upToMedium(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["padding: 0rem 1rem 1.5rem 1rem;"])));
});

var YourAccount = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n"])));

var AccountControl = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n  font-weight: 500;\n  font-size: 1.25rem;\n  a:hover {\n    text-decoration: underline;\n  }\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));

var CloseIcon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"])));

var IconWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.flexColumnNoWrap;
}, function (_ref11) {
  var size = _ref11.size;
  return size ? size + 'px' : '32px';
}, function (_ref12) {
  var size = _ref12.size;
  return size ? size + 'px' : '32px';
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.mediaWidth.upToMedium(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    align-items: flex-end;\n  "])));
});

var WalletAction = _styledComponents.default.button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-left: 8px;\n  padding: 4px 6px;\n  border: 1px solid #adcaf7;\n  border-radius: 12px;\n  background: #fff;\n  :hover {\n    cursor: pointer;\n    border-color: #4287f5;\n  }\n  :focus {\n    outline: none;\n  }\n"])));

var MainWalletAction = (0, _styledComponents.default)(WalletAction)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref14) {
  var theme = _ref14.theme;
  return theme.primary1;
});

function AccountDetails(_ref15) {
  var onClose = _ref15.onClose,
      ENSName = _ref15.ENSName,
      openOptions = _ref15.openOptions,
      supportedWallets = _ref15.supportedWallets;

  var _useWeb = (0, _index.useWeb3)(),
      account = _useWeb.account,
      connector = _useWeb.connector;

  var injected = supportedWallets.injected,
      walletconnect = supportedWallets.walletconnect,
      walletlink = supportedWallets.walletlink,
      fortmatic = supportedWallets.fortmatic,
      portis = supportedWallets.portis;

  function formatConnectorName() {
    var _window = window,
        ethereum = _window.ethereum;
    var isMetaMask = !!(ethereum && ethereum.isMetaMask);
    var name = Object.keys(supportedWallets).filter(function (k) {
      return supportedWallets[k].connector === connector && (connector !== (injected === null || injected === void 0 ? void 0 : injected.connector) || isMetaMask === (k === 'metamask'));
    }).map(function (k) {
      return supportedWallets[k].name;
    })[0];
    return /*#__PURE__*/_react.default.createElement(_Text.Text, {
      size: 14,
      color: "#888D9B"
    }, "Connected with ", name);
  }

  function getStatusIcon() {
    if (connector === (injected === null || injected === void 0 ? void 0 : injected.connector)) {
      return /*#__PURE__*/_react.default.createElement(IconWrapper, {
        size: 16
      }, /*#__PURE__*/_react.default.createElement(_Identicon.default, null));
    } else if (connector === (walletconnect === null || walletconnect === void 0 ? void 0 : walletconnect.connector)) {
      return /*#__PURE__*/_react.default.createElement(IconWrapper, {
        size: 16
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _walletConnectIcon.default,
        alt: 'wallet connect logo'
      }));
    } else if (connector === (walletlink === null || walletlink === void 0 ? void 0 : walletlink.connector)) {
      return /*#__PURE__*/_react.default.createElement(IconWrapper, {
        size: 16
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _coinbaseWalletIcon.default,
        alt: 'coinbase wallet logo'
      }));
    } else if (connector === (fortmatic === null || fortmatic === void 0 ? void 0 : fortmatic.connector)) {
      return /*#__PURE__*/_react.default.createElement(IconWrapper, {
        size: 16
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _fortmaticIcon.default,
        alt: 'fortmatic logo'
      }));
    } else if (connector === (portis === null || portis === void 0 ? void 0 : portis.connector)) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(IconWrapper, {
        size: 16
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _portisIcon.default,
        alt: 'portis logo'
      }), /*#__PURE__*/_react.default.createElement(MainWalletAction, {
        onClick: function onClick() {
          portis.connector.portis.showPortis();
        }
      }, "Show Portis")));
    }

    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(UpperSection, null, /*#__PURE__*/_react.default.createElement(CloseIcon, {
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_x.ReactComponent, null)), /*#__PURE__*/_react.default.createElement(HeaderRow, null, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 16
  }, "Account")), /*#__PURE__*/_react.default.createElement(AccountSection, null, /*#__PURE__*/_react.default.createElement(YourAccount, null, /*#__PURE__*/_react.default.createElement(InfoCard, null, /*#__PURE__*/_react.default.createElement(AccountGroupingRow, null, formatConnectorName(), /*#__PURE__*/_react.default.createElement("div", null, connector !== (injected === null || injected === void 0 ? void 0 : injected.connector) && connector !== (walletlink === null || walletlink === void 0 ? void 0 : walletlink.connector) && /*#__PURE__*/_react.default.createElement(WalletAction, {
    style: {
      marginRight: '8px'
    },
    onClick: function onClick() {
      connector.close();
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 12,
    color: "#4287f5"
  }, "Disconnect")), /*#__PURE__*/_react.default.createElement(WalletAction, {
    onClick: function onClick() {
      openOptions();
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 12,
    color: "#4287f5"
  }, "Change")))), /*#__PURE__*/_react.default.createElement(AccountGroupingRow, {
    id: "web3-account-identifier-row"
  }, /*#__PURE__*/_react.default.createElement(AccountControl, null, /*#__PURE__*/_react.default.createElement("div", null, getStatusIcon(), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 20
  }, " ", account && (0, _utils.shortenAddress)(account)), /*#__PURE__*/_react.default.createElement(_Copy.default, {
    toCopy: account
  })))))))));
}