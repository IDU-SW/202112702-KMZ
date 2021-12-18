import React from "react"
import {View,Text,Image,StyleSheet} from "react-native";

export default function Card({content}) {
    return (<View style={styles.card}>
        <Image style={styles.cardImage} source={{uri:content.image}}/>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={2}>{content.title}</Text>
          <Text style={styles.cardDate}>{content.date}</Text>
        </View>
      </View>)
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection:"row", //컨텐츠들을 가로로 나열, 세로 나열은 column : 디폴트 값
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
      cardDate: {
        fontSize:10,
        color:"#A6A6A6",
      }
})