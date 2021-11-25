import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Contacto1Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Contacto #1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB233',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bold:{
        fontWeight:'bold',
        fontSize:35,
    }
});
  