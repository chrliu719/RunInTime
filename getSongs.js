import { checkToken } from './checkToken.js'
import { getUserData } from './userData.js'
import { addFeatures } from './addFeatures.js'

export const getSongs = async (id, trackCount) => {
    let songs = []

    for(let i = 0; i < trackCount; i += 100){
        await checkToken()
        try{
            const accessToken = await getUserData('accessToken')
            const response = await fetch('https://api.spotify.com/v1/playlists/' + id + '/tracks?offset=' + i, {
                method: 'GET',
                headers:{
                    'Authorization': 'Bearer ' + accessToken
                },
                }); 
            const responseJson = await response.json()
            songs = songs.concat(responseJson.items)
        } catch (err){
            console.error(err);
        }
    }
    await addFeatures(songs)
    console.log(songs[0].features)
    return songs
}

