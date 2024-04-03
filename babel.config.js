module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@routes': './src/routes',
          '@services': './src/services',
          '@modules': './src/modules',
          '@locale': './src/locale',
          '@utils': './src/utils',
          '@themes': './src/themes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
