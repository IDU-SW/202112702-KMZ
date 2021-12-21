import React from 'react';
import {Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Sign({content,navigation}){
    return(
        <TouchableOpacity style={styles.middleButton} onPress={()=>{navigation.navigate('SignDetailPage',content)}}>
          <Image style={styles.middleButtonImage} source={{uri:content.image}}/>
          <Text style={styles.middleButtonText}>{content.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  middleButton: {
    width:71,
    height:'100%',
    padding:5,
    backgroundColor:"#fff",
    borderRadius:10,
    margin:3
  },
  middleButtonText: {
    color:"#222",
    fontWeight:"700",
    textAlign:"center" //텍스트의 현재 위치에서의 정렬 
  },
  heartButton: {
    width:60,
    height:35,
    padding:10,
    backgroundColor:"hotpink",
    borderRadius:10,
    margin:5
  },
  middleButtonImage: {
    width:'100%',
    height:'75%',
    borderRadius:10,
    marginBottom:8
  }
  });