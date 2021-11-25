import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>About what!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33E9FF',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bold:{
        fontWeight:'bold',
        fontSize:25,
    }
});
  
