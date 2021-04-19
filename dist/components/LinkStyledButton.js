"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkStyledButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: none;\n  text-decoration: none;\n  background: none;\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover {\n    text-decoration: ", ";\n  }\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n  :active {\n    text-decoration: none;\n  }\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'default' : 'pointer';
}, function (_ref2) {
  var theme = _ref2.theme,
      disabled = _ref2.disabled;
  return disabled ? theme.text2 : theme.primary1;
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? null : 'underline';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? null : 'underline';
});

var _default = LinkStyledButton;
exports.default = _default;