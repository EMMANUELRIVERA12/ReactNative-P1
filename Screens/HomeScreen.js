import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.black}>BIENVENIDO</Text>
            <Image 
            style={styles.Logo}
            source={require('../spiderman.jpg')}/>
            <Text style={styles.black}>SPIDERVERSE-CONFIRMADO</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Logo: {
        width: 200,
        height: 300,
    },
    black:{
        fontWeight:'bold',
        fontSize:22,
    },
});
  