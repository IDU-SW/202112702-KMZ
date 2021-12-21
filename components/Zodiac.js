import React from 'react';
import {Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

export default function Zodiac({content,navigation}){
    return(
        <TouchableOpacity style={styles.middleButton} onPress={()=>{navigation.navigate('ZodiacDetailPage',content)}}>
          <Image style={styles.middleButtonImage} source={{uri:content.image}}/>
          <Text style={styles.middleButtonText}>{content.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    middleButton: {
      width:70,
      height:145,
      padding:2,
      backgroundColor:"#fff",
      borderRadius:10,
      margin:3
    },
    middleButtonText: {
      color:"#222",
      fontWeight:"700",
      textAlign:"center", //텍스트의 현재 위치에서의 정렬
      marginBottom:10
    },
    middleButtonImage: {
      width:'100%',
      height:'45%',
      borderRadius:10,
      marginBottom:2
    },
  });