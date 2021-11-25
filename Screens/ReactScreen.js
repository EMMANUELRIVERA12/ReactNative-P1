import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const ReactScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.logo}
            source={require('../react.png')}
            />
        </View>
    )
}

export default ReactScreen

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
  
