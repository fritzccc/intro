//config-overrides.js
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
	// 启用 .babelrc 设置
  	useBabelRc()
);