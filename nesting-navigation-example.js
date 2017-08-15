// DOCS https://reactnavigation.org/docs/intro/nesting
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

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

class RecentChatsScreen extends React.Component {
  render() {
    return(
       <View>
         <Text>List of recent chats</Text>
         <Button
           onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
           title="Chat with Lucy"
         />
       </View>
     )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return(
       <View>
         <Text>List of all contacts</Text>
         <Button
           onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
           title="Chat with Lucy"
         />
       </View>
     )
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SampleNavigationApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SampleNavigationApp', () => SampleNavigationApp)
