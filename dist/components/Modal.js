"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactSpring = require("react-spring");

var _dialog = require("@reach/dialog");

var _reactDeviceDetect = require("react-device-detect");

require("@reach/dialog/styles.css");

var _polished = require("polished");

var _reactUseGesture = require("react-use-gesture");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AnimatedDialogOverlay = (0, _reactSpring.animated)(_dialog.DialogOverlay);
var StyledDialogOverlay = (0, _styledComponents.default)(AnimatedDialogOverlay)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.modalBG;
});
var AnimatedDialogContent = (0, _reactSpring.animated)(_dialog.DialogContent); // destructure to not pass custom props to Dialog DOM element

var StyledDialogContent = (0, _styledComponents.default)(function (_ref2) {
  var minHeight = _ref2.minHeight,
      maxHeight = _ref2.maxHeight,
      mobile = _ref2.mobile,
      isOpen = _ref2.isOpen,
      rest = _objectWithoutProperties(_ref2, ["minHeight", "maxHeight", "mobile", "isOpen"]);

  return /*#__PURE__*/_react.default.createElement(AnimatedDialogContent, rest);
}).attrs({
  'aria-label': 'dialog'
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow-y: ", ";\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 50vw;\n    overflow-y: ", ";\n    overflow-x: hidden;\n    align-self: ", ";\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 20px;\n    ", "\n    ", "\n  }\n"])), function (_ref3) {
  var mobile = _ref3.mobile;
  return mobile ? 'scroll' : 'hidden';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.bg1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _polished.transparentize)(0.95, theme.shadow1);
}, function (_ref6) {
  var mobile = _ref6.mobile;
  return mobile ? 'scroll' : 'hidden';
}, function (_ref7) {
  var mobile = _ref7.mobile;
  return mobile ? 'flex-end' : 'center';
}, function (_ref8) {
  var maxHeight = _ref8.maxHeight;
  return maxHeight && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        max-height: ", "vh;\n      "])), maxHeight);
}, function (_ref9) {
  var minHeight = _ref9.minHeight;
  return minHeight && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        min-height: ", "vh;\n      "])), minHeight);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.mediaWidth.upToMedium(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      width: 65vw;\n      margin: 0;\n    "])));
}, function (_ref11) {
  var theme = _ref11.theme,
      mobile = _ref11.mobile;
  return theme.mediaWidth.upToSmall(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      width:  85vw;\n      ", "\n    "])), mobile && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          width: 100vw;\n          border-radius: 20px;\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        "]))));
});

function Modal(_ref12) {
  var isOpen = _ref12.isOpen,
      onDismiss = _ref12.onDismiss,
      _ref12$minHeight = _ref12.minHeight,
      minHeight = _ref12$minHeight === void 0 ? false : _ref12$minHeight,
      _ref12$maxHeight = _ref12.maxHeight,
      maxHeight = _ref12$maxHeight === void 0 ? 90 : _ref12$maxHeight,
      initialFocusRef = _ref12.initialFocusRef,
      children = _ref12.children;
  var fadeTransition = (0, _reactSpring.useTransition)(isOpen, null, {
    config: {
      duration: 50
    },
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return {
      y: 0,
      config: {
        mass: 1,
        tension: 210,
        friction: 20
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      y = _useSpring2[0].y,
      set = _useSpring2[1];

  var bind = (0, _reactUseGesture.useGesture)({
    onDrag: function onDrag(state) {
      set({
        y: state.down ? state.movement[1] : 0
      });

      if (state.movement[1] > 300 || state.velocity > 3 && state.direction[1] > 0) {
        onDismiss();
      }
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, fadeTransition.map(function (_ref13) {
    var item = _ref13.item,
        key = _ref13.key,
        props = _ref13.props;
    return item && /*#__PURE__*/_react.default.createElement(StyledDialogOverlay, {
      key: key,
      style: props,
      onDismiss: onDismiss,
      initialFocusRef: initialFocusRef,
      unstable_lockFocusAcrossFrames: false
    }, /*#__PURE__*/_react.default.createElement(StyledDialogContent, _extends({}, _reactDeviceDetect.isMobile ? _objectSpread(_objectSpread({}, bind()), {}, {
      style: {
        transform: y.interpolate(function (y) {
          return "translateY(".concat(y > 0 ? y : 0, "px)");
        })
      }
    }) : {}, {
      "aria-label": "dialog content",
      minHeight: minHeight,
      maxHeight: maxHeight,
      mobile: _reactDeviceDetect.isMobile
    }), !initialFocusRef && _reactDeviceDetect.isMobile ? /*#__PURE__*/_react.default.createElement("div", {
      tabIndex: 1
    }) : null, children));
  }));
}