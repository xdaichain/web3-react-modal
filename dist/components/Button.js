"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonConfirmed = ButtonConfirmed;
exports.ButtonError = ButtonError;
exports.ButtonDropdown = ButtonDropdown;
exports.ButtonDropdownGrey = ButtonDropdownGrey;
exports.ButtonDropdownLight = ButtonDropdownLight;
exports.ButtonRadio = ButtonRadio;
exports.ButtonWhite = exports.ButtonEmpty = exports.ButtonOutlined = exports.ButtonUNIGradient = exports.ButtonPink = exports.ButtonSecondary = exports.ButtonGray = exports.ButtonLight = exports.ButtonPrimary = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _Row = require("./Row");

var _reactFeather = require("react-feather");

var _styledComponents2 = require("rebass/styled-components");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Base = (0, _styledComponents.default)(_styledComponents2.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: ", ";\n  width: ", ";\n  font-weight: 500;\n  text-align: center;\n  border-radius: 20px;\n  border-radius: ", ";\n  outline: none;\n  border: 1px solid transparent;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  &:disabled {\n    cursor: auto;\n  }\n  > * {\n    user-select: none;\n  }\n"])), function (_ref) {
  var padding = _ref.padding;
  return padding ? padding : '18px';
}, function (_ref2) {
  var width = _ref2.width;
  return width ? width : '100%';
}, function (_ref3) {
  var borderRadius = _ref3.borderRadius;
  return borderRadius && borderRadius;
});
var ButtonPrimary = (0, _styledComponents.default)(Base)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n    box-shadow: none;\n    border: 1px solid transparent;\n    outline: none;\n    opacity: ", ";\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _polished.darken)(0.05, theme.primary1);
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _polished.darken)(0.05, theme.primary1);
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0, _polished.darken)(0.05, theme.primary1);
}, function (_ref8) {
  var theme = _ref8.theme;
  return (0, _polished.darken)(0.1, theme.primary1);
}, function (_ref9) {
  var theme = _ref9.theme;
  return (0, _polished.darken)(0.1, theme.primary1);
}, function (_ref10) {
  var theme = _ref10.theme,
      altDisabledStyle = _ref10.altDisabledStyle,
      disabled = _ref10.disabled;
  return altDisabledStyle ? disabled ? theme.bg3 : theme.primary1 : theme.bg3;
}, function (_ref11) {
  var theme = _ref11.theme,
      altDisabledStyle = _ref11.altDisabledStyle,
      disabled = _ref11.disabled;
  return altDisabledStyle ? disabled ? theme.text3 : 'white' : theme.text3;
}, function (_ref12) {
  var altDisabledStyle = _ref12.altDisabledStyle;
  return altDisabledStyle ? '0.5' : '1';
});
exports.ButtonPrimary = ButtonPrimary;
var ButtonLight = (0, _styledComponents.default)(Base)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  :disabled {\n    opacity: 0.4;\n    :hover {\n      cursor: auto;\n      background-color: ", ";\n      box-shadow: none;\n      border: 1px solid transparent;\n      outline: none;\n    }\n  }\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.primary5;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.primaryText1;
}, function (_ref15) {
  var theme = _ref15.theme,
      disabled = _ref15.disabled;
  return !disabled && (0, _polished.darken)(0.03, theme.primary5);
}, function (_ref16) {
  var theme = _ref16.theme,
      disabled = _ref16.disabled;
  return !disabled && (0, _polished.darken)(0.03, theme.primary5);
}, function (_ref17) {
  var theme = _ref17.theme,
      disabled = _ref17.disabled;
  return !disabled && (0, _polished.darken)(0.03, theme.primary5);
}, function (_ref18) {
  var theme = _ref18.theme,
      disabled = _ref18.disabled;
  return !disabled && (0, _polished.darken)(0.05, theme.primary5);
}, function (_ref19) {
  var theme = _ref19.theme,
      disabled = _ref19.disabled;
  return !disabled && (0, _polished.darken)(0.05, theme.primary5);
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.primary5;
});
exports.ButtonLight = ButtonLight;
var ButtonGray = (0, _styledComponents.default)(Base)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n"])), function (_ref21) {
  var theme = _ref21.theme;
  return theme.bg3;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.text2;
}, function (_ref23) {
  var theme = _ref23.theme,
      disabled = _ref23.disabled;
  return !disabled && (0, _polished.darken)(0.05, theme.bg4);
}, function (_ref24) {
  var theme = _ref24.theme,
      disabled = _ref24.disabled;
  return !disabled && (0, _polished.darken)(0.05, theme.bg4);
}, function (_ref25) {
  var theme = _ref25.theme,
      disabled = _ref25.disabled;
  return !disabled && (0, _polished.darken)(0.1, theme.bg4);
});
exports.ButtonGray = ButtonGray;
var ButtonSecondary = (0, _styledComponents.default)(Base)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: transparent;\n  font-size: 16px;\n  border-radius: 12px;\n  padding: ", ";\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    border: 1px solid ", ";\n  }\n  &:hover {\n    border: 1px solid ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    border: 1px solid ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n  a:hover {\n    text-decoration: none;\n  }\n"])), function (_ref26) {
  var theme = _ref26.theme;
  return theme.primary4;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.primary1;
}, function (_ref28) {
  var padding = _ref28.padding;
  return padding ? padding : '10px';
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.primary4;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.primary3;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.primary3;
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.primary4;
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.primary3;
});
exports.ButtonSecondary = ButtonSecondary;
var ButtonPink = (0, _styledComponents.default)(Base)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref34) {
  var theme = _ref34.theme;
  return theme.primary1;
}, function (_ref35) {
  var theme = _ref35.theme;
  return (0, _polished.darken)(0.05, theme.primary1);
}, function (_ref36) {
  var theme = _ref36.theme;
  return (0, _polished.darken)(0.05, theme.primary1);
}, function (_ref37) {
  var theme = _ref37.theme;
  return (0, _polished.darken)(0.05, theme.primary1);
}, function (_ref38) {
  var theme = _ref38.theme;
  return (0, _polished.darken)(0.1, theme.primary1);
}, function (_ref39) {
  var theme = _ref39.theme;
  return (0, _polished.darken)(0.1, theme.primary1);
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.primary1;
});
exports.ButtonPink = ButtonPink;
var ButtonUNIGradient = (0, _styledComponents.default)(ButtonPrimary)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: white;\n  padding: 4px 8px;\n  height: 36px;\n  font-weight: 500;\n  background-color: ", ";\n  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;\n  width: fit-content;\n  position: relative;\n  cursor: pointer;\n  border: none;\n  white-space: no-wrap;\n  :hover {\n    opacity: 0.8;\n  }\n  :active {\n    opacity: 0.9;\n  }\n"])), function (_ref41) {
  var theme = _ref41.theme;
  return theme.bg3;
});
exports.ButtonUNIGradient = ButtonUNIGradient;
var ButtonOutlined = (0, _styledComponents.default)(Base)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  background-color: transparent;\n  color: ", ";\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref42) {
  var theme = _ref42.theme;
  return theme.bg2;
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.text1;
}, function (_ref44) {
  var theme = _ref44.theme;
  return theme.bg4;
}, function (_ref45) {
  var theme = _ref45.theme;
  return theme.bg4;
}, function (_ref46) {
  var theme = _ref46.theme;
  return theme.bg4;
});
exports.ButtonOutlined = ButtonOutlined;
var ButtonEmpty = (0, _styledComponents.default)(Base)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:focus {\n    text-decoration: underline;\n  }\n  &:hover {\n    text-decoration: none;\n  }\n  &:active {\n    text-decoration: none;\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref47) {
  var theme = _ref47.theme;
  return theme.primary1;
});
exports.ButtonEmpty = ButtonEmpty;
var ButtonWhite = (0, _styledComponents.default)(Base)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border: 1px solid #edeef2;\n  background-color: ", ";\n  color: black;\n  &:focus {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref48) {
  var theme = _ref48.theme;
  return theme.bg1;
}, (0, _polished.darken)(0.05, '#edeef2'), (0, _polished.darken)(0.1, '#edeef2'), (0, _polished.darken)(0.1, '#edeef2'));
exports.ButtonWhite = ButtonWhite;
var ButtonConfirmedStyle = (0, _styledComponents.default)(Base)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref49) {
  var theme = _ref49.theme;
  return (0, _polished.lighten)(0.5, theme.green1);
}, function (_ref50) {
  var theme = _ref50.theme;
  return theme.green1;
}, function (_ref51) {
  var theme = _ref51.theme;
  return theme.green1;
});
var ButtonErrorStyle = (0, _styledComponents.default)(Base)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n    box-shadow: none;\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"])), function (_ref52) {
  var theme = _ref52.theme;
  return theme.red1;
}, function (_ref53) {
  var theme = _ref53.theme;
  return theme.red1;
}, function (_ref54) {
  var theme = _ref54.theme;
  return (0, _polished.darken)(0.05, theme.red1);
}, function (_ref55) {
  var theme = _ref55.theme;
  return (0, _polished.darken)(0.05, theme.red1);
}, function (_ref56) {
  var theme = _ref56.theme;
  return (0, _polished.darken)(0.05, theme.red1);
}, function (_ref57) {
  var theme = _ref57.theme;
  return (0, _polished.darken)(0.1, theme.red1);
}, function (_ref58) {
  var theme = _ref58.theme;
  return (0, _polished.darken)(0.1, theme.red1);
}, function (_ref59) {
  var theme = _ref59.theme;
  return theme.red1;
}, function (_ref60) {
  var theme = _ref60.theme;
  return theme.red1;
});

function ButtonConfirmed(_ref61) {
  var confirmed = _ref61.confirmed,
      altDisabledStyle = _ref61.altDisabledStyle,
      rest = _objectWithoutProperties(_ref61, ["confirmed", "altDisabledStyle"]);

  if (confirmed) {
    return /*#__PURE__*/_react.default.createElement(ButtonConfirmedStyle, rest);
  } else {
    return /*#__PURE__*/_react.default.createElement(ButtonPrimary, _extends({}, rest, {
      altDisabledStyle: altDisabledStyle
    }));
  }
}

function ButtonError(_ref62) {
  var error = _ref62.error,
      rest = _objectWithoutProperties(_ref62, ["error"]);

  if (error) {
    return /*#__PURE__*/_react.default.createElement(ButtonErrorStyle, rest);
  } else {
    return /*#__PURE__*/_react.default.createElement(ButtonPrimary, rest);
  }
}

function ButtonDropdown(_ref63) {
  var _ref63$disabled = _ref63.disabled,
      disabled = _ref63$disabled === void 0 ? false : _ref63$disabled,
      children = _ref63.children,
      rest = _objectWithoutProperties(_ref63, ["disabled", "children"]);

  return /*#__PURE__*/_react.default.createElement(ButtonPrimary, _extends({}, rest, {
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_Row.RowBetween, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, children), /*#__PURE__*/_react.default.createElement(_reactFeather.ChevronDown, {
    size: 24
  })));
}

function ButtonDropdownGrey(_ref64) {
  var _ref64$disabled = _ref64.disabled,
      disabled = _ref64$disabled === void 0 ? false : _ref64$disabled,
      children = _ref64.children,
      rest = _objectWithoutProperties(_ref64, ["disabled", "children"]);

  return /*#__PURE__*/_react.default.createElement(ButtonGray, _extends({}, rest, {
    disabled: disabled,
    style: {
      borderRadius: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_Row.RowBetween, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, children), /*#__PURE__*/_react.default.createElement(_reactFeather.ChevronDown, {
    size: 24
  })));
}

function ButtonDropdownLight(_ref65) {
  var _ref65$disabled = _ref65.disabled,
      disabled = _ref65$disabled === void 0 ? false : _ref65$disabled,
      children = _ref65.children,
      rest = _objectWithoutProperties(_ref65, ["disabled", "children"]);

  return /*#__PURE__*/_react.default.createElement(ButtonOutlined, _extends({}, rest, {
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_Row.RowBetween, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, children), /*#__PURE__*/_react.default.createElement(_reactFeather.ChevronDown, {
    size: 24
  })));
}

function ButtonRadio(_ref66) {
  var active = _ref66.active,
      rest = _objectWithoutProperties(_ref66, ["active"]);

  if (!active) {
    return /*#__PURE__*/_react.default.createElement(ButtonWhite, rest);
  } else {
    return /*#__PURE__*/_react.default.createElement(ButtonPrimary, rest);
  }
}