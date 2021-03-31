import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOneScreen: 'one',
          TabTwoScreen : 'two',
          TabThreeScreen : 'three'
        },
      },
      NotFound: '*',
    },
  },
};
