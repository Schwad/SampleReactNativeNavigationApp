// Docs for example- https://reactnavigation.org/docs/intro/headers
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

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

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
          />
      ),
    };
  };
}

const SampleNavigationApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});



AppRegistry.registerComponent('SampleNavigationApp', () => SampleNavigationApp)
