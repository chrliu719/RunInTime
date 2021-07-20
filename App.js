import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './LoginScreen.js'
import { HomeScreen } from './HomeScreen.js'
import { PlaylistScreen } from './PlaylistScreen.js'


const Stack = createStackNavigator()

function NavigationStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Playlist" component={PlaylistScreen}/>
    </Stack.Navigator>
  );
}

export default class App extends React.Component {

  /*async componentDidMount() {
    const tokenExpirationTime = await getUserData('expirationTime');
    if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
      await refreshTokens();
    } else {
      this.setState({ accessTokenAvailable: true });
    }
  }*/

  render() {
    return ( 
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
