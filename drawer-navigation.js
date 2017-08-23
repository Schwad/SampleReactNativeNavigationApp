//Relevant docs: https://reactnavigation.org/docs/navigators/drawer
import React from 'react';
import { Button, ScrollView, Text, AppRegistry, StyleSheet, Image, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')} //open drawer
          title='Open Drawer'
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerClose')} //close drawer
          title='Close Drawer'
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="No notifications. go back home"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')} //open drawer
          title='Open Drawer'
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerClose')} //close drawer
          title='Close Drawer'
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const SampleNavigationApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

AppRegistry.registerComponent('SampleNavigationApp', () => SampleNavigationApp)
