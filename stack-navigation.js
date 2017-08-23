// Docs for example- https://reactnavigation.org/docs/navigators/stack
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Go to Lucy's profile"
      />
    );
  }
}

class MyProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerRight: <Text>info</Text>,
    headerLeft: <Text>Back</Text>,
  }
  render() {
    return (
      // before you continue get lucy to dynamically show up
      <View><Text>Wutup</Text></View>
    )
  }
}

const SampleNavigationApp = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
});


AppRegistry.registerComponent('SampleNavigationApp', () => SampleNavigationApp)
