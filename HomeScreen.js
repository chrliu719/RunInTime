import {Text, View, Button, FlatList, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './styles.js'
import Playlist from './Playlist.js'
import { getPlaylists } from './getPlaylists.js'
//import { getSongs } from './getSongs.js'

export class HomeScreen extends React.Component {
    state = {
        playlists:[]
    }

    async componentDidMount() {
        const playlists = await getPlaylists()
        this.setState({playlists:playlists})
    }

    renderItem = ({ item }) => (
        <Playlist playlist={item}/>
    );

    render() {
      return (
        <>
            <SafeAreaView>
                <FlatList
                    extraData={this.state}
                    data={this.state.playlists}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
            <Button 
                title='PlaylistCheck'
                //onPress={() => console.log(this.state.playlists)}
                //onPress={() => getSongs('6ewtY519RpvwzuELd9pPL9')}
                onPress={() => this.props.navigation.navigate('Login')}
            />
        </>
      );
    }
}