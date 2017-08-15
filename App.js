import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
     const { navigate } = this.props.navigation;
     return(
       <View>
         <Text>Hello, Navigation! ;) </Text>
         <Button
          onPress={() => navigate('Chat')}
          title="Chat with schwaddy"
          />
       </View>
     );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with schwaddy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Schwaddinator!</Text>
      </View>
    );
  }
}

const SampleNavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SampleNavigationApp', () => SampleNavigationApp)
