import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text} from 'react-native';

class SideMenuCenterScreen extends React.Component {
  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
  }

  render() {
    return (
      <View>
        <Text>Click the hamburger icon to open the side menu</Text>
      </View>
    );
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }
}
export default SideMenuCenterScreen;
