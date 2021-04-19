"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RowFixed = exports.AutoRow = exports.RowFlat = exports.RowBetween = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("rebass/styled-components");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = (0, _styledComponents.default)(_styledComponents2.Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), function (_ref) {
  var width = _ref.width;
  return width !== null && width !== void 0 ? width : '100%';
}, function (_ref2) {
  var align = _ref2.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref3) {
  var justify = _ref3.justify;
  return justify !== null && justify !== void 0 ? justify : 'flex-start';
}, function (_ref4) {
  var padding = _ref4.padding;
  return padding;
}, function (_ref5) {
  var border = _ref5.border;
  return border;
}, function (_ref6) {
  var borderRadius = _ref6.borderRadius;
  return borderRadius;
});
var RowBetween = (0, _styledComponents.default)(Row)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  justify-content: space-between;\n"])));
exports.RowBetween = RowBetween;

var RowFlat = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n"])));

exports.RowFlat = RowFlat;
var AutoRow = (0, _styledComponents.default)(Row)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n  & > * {\n    margin: ", " !important;\n  }\n"])), function (_ref7) {
  var gap = _ref7.gap;
  return gap && "-".concat(gap);
}, function (_ref8) {
  var justify = _ref8.justify;
  return justify && justify;
}, function (_ref9) {
  var gap = _ref9.gap;
  return gap;
});
exports.AutoRow = AutoRow;
var RowFixed = (0, _styledComponents.default)(Row)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: fit-content;\n  margin: ", ";\n"])), function (_ref10) {
  var gap = _ref10.gap;
  return gap && "-".concat(gap);
});
exports.RowFixed = RowFixed;
var _default = Row;
exports.default = _default;