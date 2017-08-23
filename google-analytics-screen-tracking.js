import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

const tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);

// gets the current screen from navigation state
function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

const AppNavigator = StackNavigator(AppRouteConfigs);

export default () => (
  <AppNavigator
    onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = getCurrentRouteName(currentState);
      const prevScreen = getCurrentRouteName(prevState);

      if (prevScreen !== currentScreen) {
        // the line below uses the Google Analytics tracker
        // change the tracker here to use other Mobile analytics SDK.
        tracker.trackScreenView(currentScreen);
      }
    }}
  />
);
