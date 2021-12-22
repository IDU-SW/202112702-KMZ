import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

export default function Saju({content,navigation}){
    return(
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('SajuPage',content)}}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={2}>{content.title}</Text>
                <Text style={styles.cardRead}>👁{content.read}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginTop:20,
      marginLeft:30,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardRead: {
      fontSize:15,
      color:"#A6A6A6",
    }
});