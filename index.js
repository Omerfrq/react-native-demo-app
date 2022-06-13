/**
 * @format
 */

import App from './src/App';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {CartProvider} from './src/components/CartProvider/src/index';
import SideMenuCenterScreen from './src/SidemenuScreen';

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const Drawer = () => {
  return (
    <View style={styles.root}>
      <Text>Drawer </Text>
    </View>
  );
};

Navigation.mergeOptions('Drawer', {
  sideMenu: {
    left: {
      visible: true,
    },
  },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

Navigation.registerComponent('SideMenu', () => SideMenuCenterScreen);

Navigation.registerComponent('Drawer', () => Drawer);

Navigation.registerComponent(
  'App',
  () => props =>
    (
      <Provider store={store}>
        <CartProvider>
          <App {...props} />
        </CartProvider>
      </Provider>
    ),
  () => App,
);

Navigation.registerComponent('Settings', () => SettingsScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      // options: {
      //   sideMenu: {
      //     left: {
      //       visible: true,
      //       enabled: true,
      //       width: 100,
      //     },
      //   },
      // },
      // left: {
      //   component: {
      //     name: 'Drawer',
      //     options: {
      //       drawBehind: false,
      //       layout: {backgroundColor: '#fff'},
      //     },
      //   },
      // },
      sideMenu: {
        center: {
          id: 'tabs',
          stack: {
            id: 'stackid',
            children: [
              {
                component: {
                  id: 'Omer',
                  name: 'App',
                  options: {
                    topBar: {
                      visible: true,
                    },
                    sideMenu: {
                      right: {
                        visible: true,
                        enabled: true,
                        width: 400,
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
});
