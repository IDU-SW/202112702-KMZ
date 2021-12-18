import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

const main = 'https://firebasestorage.googleapis.com/v0/b/kmz-e99d0.appspot.com/o/pawel-czerwinski-d7iIvTyzccY-unsplash.jpg?alt=media&token=ef566c47-4509-4408-a4d8-e74d1cdf073a'
import data from '../data.json';
import Card from '../components/Card';
import Loading from '../components/Loading';
export default function MainPage() {

  const [state,setState] = useState([])
  const [ready,setReady] = useState(true)

  useEffect(()=>{

    setTimeout(()=>{
        setState(data)
        setReady(false)
    },1000)

  },[])

  let saju = state.saju;

  return ready ? <Loading/> :  (
    <ScrollView style={styles.container}>
    <Image style={styles.mainImage} source={{uri:main}}/>
      <Text style={styles.title}>오늘의띠별운세</Text>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>쥐띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>소띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>범띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>토끼띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>용띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>뱀띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>말띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>양띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton9}><Text style={styles.middleButtonText}>원숭이띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>닭띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>개띠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>돼지띠</Text></TouchableOpacity>
      </ScrollView>

      <View style={styles.cardContainer}>
         {
          saju.map((content,i)=>{
            return (<Card content={content} key={i}/>)
          })
        }
      </View>
   
    </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      marginTop:30,
      marginLeft:20
    },
    weather:{
      alignSelf:"flex-end",
      paddingRight:20
    },
    mainImage: {
      width:'90%', //컨텐츠의 넓이 값
      height:200, //컨텐츠의 높이 값
      borderRadius:10, //컨텐츠의 모서리 구부리기
      marginTop:20,
      alignSelf:"center" //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    },
    middleContainer:{
      marginTop:20,
      marginLeft:10,
      height:60
    },
    middleButton: {
      width:60,
      height:35,
      padding:10,
      backgroundColor:"black",
      borderRadius:10,
      margin:5
    },
    middleButton9: {
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
    },
    cardContainer: {
      marginTop:10,
      marginLeft:10
    }
  });