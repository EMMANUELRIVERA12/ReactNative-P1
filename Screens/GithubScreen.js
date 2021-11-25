import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const GithubScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Ionicons name={"logo-github"} size={150} color='black'/>
            <Text style={styles.negro}>@EMMANUELRIVERA12</Text>
        </View>
    )
}

export default GithubScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#71FF33',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Logo: {
        width: 300,
        height: 400,
    },
    negro:{
        fontWeight:'bold',
        fontSize: 20,
    },
});