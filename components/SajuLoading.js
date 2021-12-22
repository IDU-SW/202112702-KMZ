import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SajuLoading(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>분석중입니다..</Text>
        </View>);
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangle: {
        width:'100%',
        height:90,
        backgroundColor: '#654321',
        opacity: 0.85
    },
    title: {
        fontSize:30,
        fontWeight:'800',
        color:'black'
    }
})