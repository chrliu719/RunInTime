import { checkToken } from './checkToken.js'
import { getUserData } from './userData.js'

export const addFeatures = async (songs) => {
    const ids = songs.map(song => song.track.id)
    let features = []

    for(let i = 0; i < songs.length; i += 100){
        await checkToken()
        try{
            const accessToken = await getUserData('accessToken')
            const curIds = ids.slice(i, Math.min(songs.length, i + 100))
            const response = await fetch('https://api.spotify.com/v1/audio-features?ids=' + curIds.join(','), {
                method: 'GET',
                headers:{
                    'Authorization': 'Bearer ' + accessToken
                },
                }); 
            const responseJson = await response.json()
            //console.log(responseJson)
            features = features.concat(responseJson.audio_features)
        } catch (err){
            console.error(err);
        }
    }

    for(let i = 0; i < songs.length; i++){
        songs[i]['features'] = features[i]
    }
    return
}
