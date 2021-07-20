import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import { capitalize } from './utility.js'
import styles from './styles.js'


export class Song extends React.Component{
    constructor(props){
        super(props)
    }    

    extractImageURL() {
        const song_ = {...this.props.song}
    
        if (!('album' in song_.track) || !('images' in song_.track.album)){
            console.log('Empty object')
            return 'https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647'
        }
    
        const images = song_.track.album.images
    
        if (images.length > 0){
            const image = images[0].url
            return images[0].url
        } else{
            console.log('No pictures')
            return 'https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647'
        } 
    }

    extractArtists(){
        const song_ = {...this.props.song}

        if (!('track' in song_)){
            return 'Unknown'
        }

        const artists = song_.track.album.artists
        let artistNames = []
        for (let i = 0; i < artists.length; i++){
            artistNames.push(artists[i].name)
        }

        return artistNames.join(', ')
    }

    render() {
        return (
            <>
                <View style={styles.playlist}>
                    <Image
                            style={styles.playlistImage}
                            source={{
                                uri:this.extractImageURL()
                            }}/>   
                    <Text style={{paddingLeft:10, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', flex: 1,}}>
                        {this.props.song.track.name + '\n'
                        }
                        <Text style={{paddingLeft:10, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', flex: 1,}}>
                        {this.extractArtists()}
                        </Text>
                    </Text>       
                    <Text>
                        {Math.round(this.props.song.features.tempo) + ' bpm'}
                    </Text>
                    
                </View>
            </>
        );
    }
}
