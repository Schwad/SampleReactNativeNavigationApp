import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

// STACK NAVIGATION EXAMPLE

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome Playa',
  };
  render() {
     const { navigate } = this.props.navigation;
     return(
       <View>
         <Text>Hello, Navigation! ;) </Text>
         <Button
          onPress={() => navigate('Chat', { user: 'Schwaddy' })}
          title="Chat with a mystery user"
          />
       </View>
     );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with { params.user }!</Text>
      </View>
    );
  }
}

const SampleNavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

// TAB NAVIGATION EXAMPLE

class RecentChatsScreen extends React.Component {
  render() {
    return(
       <View>
       <Text>br</Text>
       <Text>List of recent chats</Text>
       </View>
     )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return(
       <View>
         <Text>List of all contacts</Text>
       </View>
     )
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});


AppRegistry.registerComponent('SampleNavigationApp', () => MainScreenNavigator)
