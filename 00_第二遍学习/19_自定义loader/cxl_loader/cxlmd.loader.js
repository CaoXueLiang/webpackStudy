//注意要安装2.0版本，安装3.0版本没这个方法了
const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');
const { marked } = require('marked');
const hljs = require('highlight.js');
const shcemaJson = require('./schema.json');

module.exports = function (content, map, meta) {
  const options = getOptions(this); //获取参数
  validate(shcemaJson, options); //参数校验
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value;
    },
  });

  const htmlContent = marked.parse(content);
  const innerContent = '`' + htmlContent + '`';
  const moduleCode = `var code=${innerContent}; export default code;`;
  return moduleCode;
};
