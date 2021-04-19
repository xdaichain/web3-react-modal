"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExternalLink;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLink = _styledComponents.default.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n  :hover {\n    text-decoration: underline;\n  }\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n  :active {\n    text-decoration: none;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.primary1;
});

function ExternalLink(_ref2) {
  var _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? '_blank' : _ref2$target,
      href = _ref2.href,
      _ref2$rel = _ref2.rel,
      rel = _ref2$rel === void 0 ? 'noopener noreferrer' : _ref2$rel,
      rest = _objectWithoutProperties(_ref2, ["target", "href", "rel"]);

  return /*#__PURE__*/React.createElement(StyledLink, _extends({
    target: target,
    rel: rel,
    href: href
  }, rest));
}