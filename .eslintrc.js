module.exports = {
  "env": { // Program execution environment
    "browser": true,
    "es2021": true
  },
  "extends": [ // Sharing settings
    "plugin:react/recommended",
    "airbnb",
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard'
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    ecmaVersion: 12,
    project: './tsconfig.eslint.json',
    "sourceType": "module",
    tsconfigRootDir: __dirname,
  },
  "plugins": [
    "@typescript-eslint",
    'import',
    'jsx-a11y',
    'prefer-arrow',
    'prettier',
    "react",
    'react-hooks',
  ],
  root: true, // To prevent the default behaving to load the parent directory settings
  rules: { // Customizing the sharing settings in 'extends'
    // To avoid 'no-use-before-define' error, refer to the following link for details
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    'lines-between-class-members': [ // Whether or not to include blank lines between class member definitions
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-void': [ // Prohibit the use of the void operator as an expression
      'error',
      { allowAsStatement: true }
    ],
    'padding-line-between-statements': [ // To include a separating blank line between arbitrary syntax
      'error',
      { // Always add a separating blank line before 'return' statement
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    '@typescript-eslint/no-unused-vars': [ // Prohibit the use of unused variables
      'error',
      { // Allow only '_'
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '_',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      { // Add '.tsx' as eslint-config-airbnb limit with '.jsx' only
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      { // Allow writing that specifies the individual props
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
  },
  overrides: [ // Overriding the settings for files that matches
    {
      'files': ['*.tsx'],
      'rules': {
        'react/prop-types': 'off', // Disabling the rules to force the definition of propTypes
      },
    },
  ],
  settings: { // Additional sharing settings
    'import/resolver': {
      node: {
        paths: ['src'], // To avoid an error for calling with an absolute path
      },
    },
  },
};
