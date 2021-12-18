module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // 0 => off
    // 1 => warn
    // 2 => error
    'no-unused-vars': 2,
    semi: 2,
  },
};
