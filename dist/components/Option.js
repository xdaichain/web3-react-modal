"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Option;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ExternalLink = _interopRequireDefault(require("./ExternalLink"));

var _Text = require("./Text");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InfoCard = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 1rem;\n  outline: none;\n  border: 1px solid;\n  border-radius: 12px;\n  width: 100% !important;\n  border-color: ", ";\n"])), function (_ref) {
  var active = _ref.active;
  return active ? '#F7F8FA' : '#fff';
}, function (_ref2) {
  var theme = _ref2.theme,
      active = _ref2.active;
  return active ? 'transparent' : theme.bg3;
});

var OptionCard = (0, _styledComponents.default)(InfoCard)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  padding: 1rem;\n"])));

var OptionCardLeft = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n  justify-content: center;\n  height: 100%;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.flexColumnNoWrap;
});

var OptionCardClickable = (0, _styledComponents.default)(OptionCard)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  &:hover {\n    cursor: ", ";\n    border: ", ";\n  }\n  opacity: ", ";\n"])), function (_ref4) {
  var clickable = _ref4.clickable;
  return clickable ? 'pointer' : '';
}, function (_ref5) {
  var clickable = _ref5.clickable;
  return clickable ? '1px solid #4287f5' : "";
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? '0.5' : '1';
});

var GreenCircle = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  justify-content: center;\n  align-items: center;\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin-right: 8px;\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.flexRowNoWrap;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.green1;
});

var CircleWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.green1;
});

var HeaderText = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 500;\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.flexRowNoWrap;
}, function (props) {
  return props.color === 'blue' ? function (_ref11) {
    var theme = _ref11.theme;
    return theme.primary1;
  } : function (_ref12) {
    var theme = _ref12.theme;
    return theme.text1;
  };
});

var IconWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.flexColumnNoWrap;
}, function (_ref14) {
  var size = _ref14.size;
  return size ? size + 'px' : '24px';
}, function (_ref15) {
  var size = _ref15.size;
  return size ? size + 'px' : '24px';
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.mediaWidth.upToMedium(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    align-items: flex-end;\n  "])));
});

function Option(_ref17) {
  var _ref17$link = _ref17.link,
      link = _ref17$link === void 0 ? null : _ref17$link,
      _ref17$clickable = _ref17.clickable,
      clickable = _ref17$clickable === void 0 ? true : _ref17$clickable,
      size = _ref17.size,
      _ref17$onClick = _ref17.onClick,
      onClick = _ref17$onClick === void 0 ? null : _ref17$onClick,
      color = _ref17.color,
      header = _ref17.header,
      _ref17$subheader = _ref17.subheader,
      subheader = _ref17$subheader === void 0 ? null : _ref17$subheader,
      icon = _ref17.icon,
      _ref17$active = _ref17.active,
      active = _ref17$active === void 0 ? false : _ref17$active,
      id = _ref17.id;

  var content = /*#__PURE__*/_react.default.createElement(OptionCardClickable, {
    id: id,
    onClick: onClick,
    clickable: clickable && !active,
    active: active
  }, /*#__PURE__*/_react.default.createElement(OptionCardLeft, null, /*#__PURE__*/_react.default.createElement(HeaderText, {
    color: color
  }, active ? /*#__PURE__*/_react.default.createElement(CircleWrapper, null, /*#__PURE__*/_react.default.createElement(GreenCircle, null, /*#__PURE__*/_react.default.createElement("div", null))) : '', /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 16
  }, header)), subheader && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    size: 12,
    style: {
      marginTop: 8
    }
  }, subheader)), /*#__PURE__*/_react.default.createElement(IconWrapper, {
    size: size
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: icon.default,
    alt: 'Icon'
  })));

  if (link) {
    return /*#__PURE__*/_react.default.createElement(_ExternalLink.default, {
      href: link
    }, content);
  }

  return content;
}