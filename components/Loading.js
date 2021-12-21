import React from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';

export default function Loading(){
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.textWrap} source={require('../assets/bg.jpg')}>
                <View style={styles.rectangle}>
                <Text style={styles.title}>오늘의운세</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>);
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        opacity: 0.6,
    },
    textWrap: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangle: {
        width:'100%',
        height:90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#654321',
        opacity: 0.85
    },
    title: {
        fontSize:50,
        fontWeight:'800',
        color:'white'
    }
})