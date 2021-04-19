"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CopyHelper;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useCopyClipboard3 = _interopRequireDefault(require("../../hooks/useCopyClipboard"));

var _LinkStyledButton = _interopRequireDefault(require("../LinkStyledButton"));

var _reactFeather = require("react-feather");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CopyIcon = (0, _styledComponents.default)(_LinkStyledButton.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  flex-shrink: 0;\n  display: flex;\n  text-decoration: none;\n  font-size: 0.825rem;\n  :hover,\n  :active,\n  :focus {\n    text-decoration: none;\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.text3;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text2;
});

var TransactionStatusText = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-left: 0.25rem;\n  font-size: 0.825rem;\n  ", ";\n  align-items: center;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.flexRowNoWrap;
});

function CopyHelper(props) {
  var _useCopyClipboard = (0, _useCopyClipboard3.default)(),
      _useCopyClipboard2 = _slicedToArray(_useCopyClipboard, 2),
      isCopied = _useCopyClipboard2[0],
      setCopied = _useCopyClipboard2[1];

  return /*#__PURE__*/_react.default.createElement(CopyIcon, {
    onClick: function onClick() {
      return setCopied(props.toCopy);
    }
  }, isCopied ? /*#__PURE__*/_react.default.createElement(TransactionStatusText, null, /*#__PURE__*/_react.default.createElement(_reactFeather.CheckCircle, {
    size: '16'
  }), /*#__PURE__*/_react.default.createElement(TransactionStatusText, null, "Copied")) : /*#__PURE__*/_react.default.createElement(TransactionStatusText, null, /*#__PURE__*/_react.default.createElement(_reactFeather.Copy, {
    size: '16'
  })), isCopied ? '' : props.children);
}