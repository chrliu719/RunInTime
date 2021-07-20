import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { capitalize } from './utility.js'
import styles from './styles.js'


class Playlist extends React.Component{
    constructor(props){
        super(props)
    }
    

    extractImageURL() {
        const playlist_ = {...this.props.playlist}
    
        if (!('images' in playlist_)){
            console.log('Empty object')
            return 'https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647'
        }
    
        const images = playlist_.images
    
        if (images.length > 0){
            const image = images[0].url
            console.log(image)
            return images[0].url
        } else{
            console.log('No pictures')
            return 'https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647'
        } 
    }

    extractOwner(){
        const playlist_ = {...this.props.playlist}

        if (!('owner' in playlist_)){
            return 'Unknown'
        }

        const name = playlist_.owner.display_name
        return name
    }

    render() {
        return (
            <>
                <TouchableOpacity style={styles.playlist} onPress={() => this.props.navigation.navigate('Playlist', {id:this.props.playlist.id, tracks:this.props.playlist.tracks.total})}>
                    <Image
                            style={styles.playlistImage}
                            source={{
                                uri:this.extractImageURL()
                            }}/>   
                    <Text style={{paddingLeft:4, alignItems: 'center', justifyContent: 'center',}}>
                        {this.props.playlist.name + '\n'
                        + capitalize(this.props.playlist.type) + ' - ' + this.extractOwner()
                        }
                    </Text>       
                </TouchableOpacity>
            </>
        );
    }
}

export default function(props) {
    const navigation = useNavigation();
    return <Playlist {...props} navigation={navigation}/>
}
