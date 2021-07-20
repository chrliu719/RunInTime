import { getUserData } from './userData.js'
import { refreshTokens } from './refreshTokens.js'

export const checkToken = async () => {
    const tokenExpirationTime = await getUserData('expirationTime');
    if (new Date().getTime() > tokenExpirationTime) {
        // access token has expired, so we need to use the refresh token
        await refreshTokens();
    }
}