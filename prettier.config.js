module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['config/*.js', 'scripts/*.js'],
      options: {
        trailingComma: 'es5',
      },
    },
    {
      files: '*.scss',
      options: { parser: 'scss' },
    },
  ],
};
