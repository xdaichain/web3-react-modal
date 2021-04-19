"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = colors;
exports.theme = theme;
exports.default = ThemeProvider;
exports.ThemedGlobalStyle = exports.FixedGlobalStyle = exports.TYPE = void 0;

var _polished = require("polished");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rebass = require("rebass");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
};
var mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(function (accumulator, size) {
  ;

  accumulator[size] = function (a, b, c) {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "])), MEDIA_WIDTHS[size], (0, _styledComponents.css)(a, b, c));
  };

  return accumulator;
}, {});
var white = '#FFFFFF';
var black = '#000000';

function colors(darkMode) {
  return {
    // base
    white: white,
    black: black,
    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#2C2F36' : '#EDEEF2',
    // backgrounds / greys
    bg1: darkMode ? '#212429' : '#FFFFFF',
    bg2: darkMode ? '#2C2F36' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',
    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',
    //primary colors
    primary1: darkMode ? '#2172E5' : '#ff007a',
    primary2: darkMode ? '#3680E7' : '#FF8CC3',
    primary3: darkMode ? '#4D8FEA' : '#FF99C9',
    primary4: darkMode ? '#376bad70' : '#F6DDE8',
    primary5: darkMode ? '#153d6f70' : '#FDEAF1',
    // color text
    primaryText1: darkMode ? '#6da8ff' : '#ff007a',
    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',
    // other
    red1: '#FD4040',
    red2: '#F82D3A',
    red3: '#D60000',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    blue1: '#2172E5' // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',

  };
}

function theme(darkMode) {
  return _objectSpread(_objectSpread({}, colors(darkMode)), {}, {
    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },
    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',
    // media queries
    mediaWidth: mediaWidthTemplates,
    // css snippets
    flexColumnNoWrap: (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      display: flex;\n      flex-flow: column nowrap;\n    "]))),
    flexRowNoWrap: (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: flex;\n      flex-flow: row nowrap;\n    "])))
  });
}

function ThemeProvider(_ref) {
  var children = _ref.children;
  var themeObject = theme(false);
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: themeObject
  }, children);
}

var TextWrapper = (0, _styledComponents.default)(_rebass.Text)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return theme[color];
});
var TYPE = {
  main: function main(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'text2'
    }, props));
  },
  link: function link(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'primary1'
    }, props));
  },
  black: function black(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'text1'
    }, props));
  },
  white: function white(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'white'
    }, props));
  },
  body: function body(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 400,
      fontSize: 16,
      color: 'text1'
    }, props));
  },
  largeHeader: function largeHeader(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 600,
      fontSize: 24
    }, props));
  },
  mediumHeader: function mediumHeader(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      fontSize: 20
    }, props));
  },
  subHeader: function subHeader(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 400,
      fontSize: 14
    }, props));
  },
  small: function small(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      fontSize: 11
    }, props));
  },
  blue: function blue(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'blue1'
    }, props));
  },
  yellow: function yellow(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'yellow1'
    }, props));
  },
  darkGray: function darkGray(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'text3'
    }, props));
  },
  gray: function gray(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: 'bg3'
    }, props));
  },
  italic: function italic(props) {
    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      fontSize: 12,
      fontStyle: 'italic',
      color: 'text2'
    }, props));
  },
  error: function error(_ref3) {
    var error = _ref3.error,
        props = _objectWithoutProperties(_ref3, ["error"]);

    return /*#__PURE__*/_react.default.createElement(TextWrapper, _extends({
      fontWeight: 500,
      color: error ? 'red1' : 'text2'
    }, props));
  }
};
exports.TYPE = TYPE;
var FixedGlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nhtml, input, textarea, button {\n  font-family: 'Inter', sans-serif;\n  font-display: fallback;\n}\n@supports (font-variation-settings: normal) {\n  html, input, textarea, button {\n    font-family: 'Inter var', sans-serif;\n  }\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n a {\n   color: ", "; \n }\n* {\n  box-sizing: border-box;\n}\nbutton {\n  user-select: none;\n}\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;\n  \n}\n"])), colors(false).blue1);
exports.FixedGlobalStyle = FixedGlobalStyle;
var ThemedGlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\nhtml {\n  color: ", ";\n  background-color: ", ";\n}\nbody {\n  min-height: 100vh;\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n  background-image: ", ";\n}\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.text1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.bg2;
}, function (_ref6) {
  var theme = _ref6.theme;
  return "radial-gradient(50% 50% at 50% 50%, ".concat((0, _polished.transparentize)(0.9, theme.primary1), " 0%, ").concat((0, _polished.transparentize)(1, theme.bg1), " 100%)");
});
exports.ThemedGlobalStyle = ThemedGlobalStyle;