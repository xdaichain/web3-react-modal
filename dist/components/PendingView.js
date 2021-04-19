"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PendingView;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Option = _interopRequireDefault(require("./Option"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _Text = require("./Text");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PendingSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  & > * {\n    width: 100%;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.flexColumnNoWrap;
});

var StyledLoader = (0, _styledComponents.default)(_Loader.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n"])));

var LoadingMessage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  color: ", ";\n  border: 1px solid ", ";\n  & > * {\n    padding: 1rem;\n  }\n  height: 50px;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.flexRowNoWrap;
}, function (_ref3) {
  var theme = _ref3.theme,
      error = _ref3.error;
  return error ? theme.red1 : 'inherit';
}, function (_ref4) {
  var theme = _ref4.theme,
      error = _ref4.error;
  return error ? theme.red1 : theme.text4;
});

var ErrorGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.flexRowNoWrap;
});

var LoadingWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.flexRowNoWrap;
});

var ErrorButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-left: 8px;\n  padding: 4px 6px;\n  border: 1px solid #cfcfcf;\n  border-radius: 12px;\n  background: #fff;\n  :hover {\n    cursor: pointer;\n    border-color: #999999;\n  }\n"])));

function PendingView(_ref7) {
  var _window, _window$ethereum;

  var connector = _ref7.connector,
      _ref7$error = _ref7.error,
      error = _ref7$error === void 0 ? false : _ref7$error,
      setPendingError = _ref7.setPendingError,
      tryActivation = _ref7.tryActivation,
      supportedWallets = _ref7.supportedWallets;
  var isMetamask = (_window = window) === null || _window === void 0 ? void 0 : (_window$ethereum = _window.ethereum) === null || _window$ethereum === void 0 ? void 0 : _window$ethereum.isMetaMask;
  return /*#__PURE__*/_react.default.createElement(PendingSection, null, /*#__PURE__*/_react.default.createElement(LoadingMessage, {
    error: error
  }, /*#__PURE__*/_react.default.createElement(LoadingWrapper, null, error ? /*#__PURE__*/_react.default.createElement(ErrorGroup, null, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 16,
    color: "#FD4040"
  }, "Error connecting."), /*#__PURE__*/_react.default.createElement(ErrorButton, {
    onClick: function onClick() {
      setPendingError(false);
      connector && tryActivation(connector);
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 12
  }, "Try again"))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledLoader, null), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 16
  }, "Initializing...")))), Object.keys(supportedWallets).map(function (key) {
    var option = supportedWallets[key];

    if (option.connector === connector) {
      if (option.connector === supportedWallets['injected'].connector) {
        if (isMetamask && option.name !== 'MetaMask') {
          return null;
        }

        if (!isMetamask && option.name === 'MetaMask') {
          return null;
        }
      }

      return /*#__PURE__*/_react.default.createElement(_Option.default, {
        id: "connect-".concat(key),
        key: key,
        clickable: false,
        color: option.color,
        header: option.name,
        subheader: option.description,
        icon: require('../images/' + option.iconName)
      });
    }

    return null;
  }));
}