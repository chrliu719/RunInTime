import { encode as btoa } from 'base-64';
import { getAuthorizationCode } from './getAuthorizationCode.js'
import { getUserData, setUserData} from './userData.js'
import { spotifyCredentials } from './secrets.js'

export const getTokens = async () => {
  try {
    const authorizationCode = await getAuthorizationCode() //we wrote this function above
    const credentials = spotifyCredentials //we wrote this function above (could also run this outside of the functions and store the credentials in local scope)
    const credsB64 = btoa(`${credentials.clientId}:${credentials.clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`, 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
        credentials.redirectUri
      }`,
    }); 
    const responseJson = await response.json();
    // destructure the response and rename the properties to be in camelCase to satisfy my linter ;)
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn,
    } = responseJson;

    const expirationTime = new Date().getTime() + expiresIn * 1000;
    await setUserData('accessToken', accessToken);
    console.log(accessToken)
    await setUserData('refreshToken', refreshToken);
    await setUserData('expirationTime', expirationTime.toString());
  } catch (err) {
    console.error(err);
    return 1
  }
  return 0
}