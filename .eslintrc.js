module.exports = {
  env:{
    browser:true,
    es6:true,
    node:true
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {}
}