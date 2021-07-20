import {Text, View, Button, FlatList, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './styles.js'
import { Song } from './Song.js'
import { getSongs } from './getSongs.js'
import { compareSongs } from './utility.js'

export class PlaylistScreen extends React.Component {
    state={
        songs:[]
    }

    async componentDidMount() {
        const songs = await getSongs(this.props.route.params.id, this.props.route.params.tracks)
        this.setState({songs:songs})
    }

    renderItem = ({ item }) => (
        <Song song={item}/>
    );

    sort = () => {
        this.setState(prevState => ({
            songs: prevState.songs.sort(compareSongs)
        }))
    }

    render() {
      return (
        <> 
            <SafeAreaView style={{flex:6}}>
                <FlatList
                    extraData={this.state}
                    data={this.state.songs}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.track.id}
                />      
            </SafeAreaView>
            <View style={{flex:.5}}> 
                <Button
                title='Sort'
                onPress={() => this.sort()}
                style={{alignItems:'flex-end', justifyContent:'flex-end'}}/>
            </View>
        </>
      );
    }
}