import React from 'react';
import {Text, StyleSheet,TouchableOpacity} from 'react-native'

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Sign({content,navigation}){
    return(
        <TouchableOpacity style={styles.middleButton} onPress={()=>{navigation.navigate('DetailPage')},content}>
          <Text style={styles.middleButtonText}>{content.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    middleButton: {
      width:70,
      height:35,
      padding:10,
      backgroundColor:"black",
      borderRadius:10,
      margin:5
    },
    middleButtonText: {
      color:"#fff",
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
    }
  });