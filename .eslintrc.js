module.exports = {
  //-- 继承从外部引入了其他配置包，能继承另一个配置文件的所有属性(包括rules, plugins, and language option在内)
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    // your rules
  },
}
