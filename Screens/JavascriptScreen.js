import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const JavascriptScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.logo}
            source={require('../javascript-logo.png')}
            />
        </View>
    )
}

export default JavascriptScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        width: 350,
        height:300,
    }
});
  