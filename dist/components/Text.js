"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBold = exports.TextMedium = exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement(Default, props, children);
};

exports.Text = Text;

var TextMedium = function TextMedium(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/_react.default.createElement(Medium, props, children);
};

exports.TextMedium = TextMedium;

var TextBold = function TextBold(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return /*#__PURE__*/_react.default.createElement(Bold, props, children);
};

exports.TextBold = TextBold;

var Default = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  flex: ", ";\n  font-size: ", ";\n  font-family: 'Lato', sans-serif;\n"])), function (props) {
  return props.color || '#242A31';
}, function (props) {
  return props.flex;
}, function (props) {
  return props.size ? props.size + 'px' : '14px';
});

var Medium = (0, _styledComponents.default)(Default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: 500;\n"])));
var Bold = (0, _styledComponents.default)(Default)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: bold;\n"])));