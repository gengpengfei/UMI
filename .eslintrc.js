module.exports = {
    //-- 继承从外部引入了其他配置包，能继承另一个配置文件的所有属性(包括rules, plugins, and language option在内)
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
};