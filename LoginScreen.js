import {Text, View, Button, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './styles.js'
import { refreshTokens } from './refreshTokens.js'
import { getTokens } from './getTokens.js';

export class LoginScreen extends React.Component {
    login = async() => {
        this.props.navigation.navigate('Home')
        const result = await getTokens()
        /*if (result != 0){// Error in getting tokens
            Alert.alert("Error retrieving tokens")
        } 
        else{

        }*/
    }

    render() {
        return (
            <>
                <View>
                    <Text style={styles.title}>RunInTime</Text>
                    <StatusBar/>
                </View>

                <Button
                onPress={() => this.props.navigation.navigate('Home')}
                title="Connect to Spotify"
                style="container"
                />
            </>
        )
    }
}