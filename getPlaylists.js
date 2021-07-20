import { checkToken } from './checkToken.js'
import { getUserData } from './userData.js'

export const getPlaylists = async (offset = 0) => {
    await checkToken()
    try{
        const accessToken = await getUserData('accessToken')
        const response = await fetch('https://api.spotify.com/v1/me/playlists?offset=' + offset, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + accessToken
            },
            }); 
        const responseJson = await response.json()
        console.log(responseJson)
        //console.log(responseJson.items)
        return responseJson.items
    } catch (err){
        console.error(err);
    }
}