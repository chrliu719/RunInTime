import * as AuthSession from 'expo-auth-session'
import { spotifyCredentials } from './secrets.js'
import querystring from 'query-string'
import generateRandomString from './generateRandomString.js'
import { View, StyleSheet, Button, Alert } from "react-native";
 
const scopesArr = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                   'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                   'playlist-modify-private','user-read-recently-played','user-top-read'];
const scopes = scopesArr.join(' ');

export const getAuthorizationCode = async () => {
  try {
    const credentials = spotifyCredentials //we wrote this function above
    const redirectUrl = AuthSession.getRedirectUrl(); //this will be something like https://auth.expo.io/@your-username/your-app-slug
    //Alert.alert(redirectUrl) 
    //var state = generateRandomString(16);
    const result = await AuthSession.startAsync({
      authUrl:
        'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: spotifyCredentials.clientId,
            scope: scopes,
            redirect_uri: redirectUrl,
        }) 
    })
    return result.params.code
  } catch (err) {
    console.error(err)
  } 
  return authCode
}