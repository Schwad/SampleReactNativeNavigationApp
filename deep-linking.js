// related docs: https://reactnavigation.org/docs/guides/linking
import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SampleNavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: {
    screen: ChatScreen,
    path: 'chat/:user',
   },
});

const prefix = Platform.OS == 'android' ? 'mychat://mychat/' : 'mychat://';

const MainApp = () => <SampleNavigationApp uriPrefix={prefix} />;

AppRegistry.registerComponent('SampleNavigationApp', () => SampleNavigationApp);
