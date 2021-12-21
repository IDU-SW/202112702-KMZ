import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const main = 'https://firebasestorage.googleapis.com/v0/b/kmz-e99d0.appspot.com/o/pawel-czerwinski-d7iIvTyzccY-unsplash.jpg?alt=media&token=ef566c47-4509-4408-a4d8-e74d1cdf073a'
import sajudata from '../sajudata.json';
import signdata from '../signdata.json';
import zodiacdata from '../zodiacdata.json';
import Sign from '../components/Sign';
import Card from '../components/Card';
import Zodiac from '../components/Zodiac';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';
export default function MainPage({navigation, route}) {

  const [Sstate,setSstate] = useState([])
  const [Nstate,setNstate] = useState([])
  const [signState,setSignState] = useState([])
  const [zodiacState,setZodiacState] = useState([])
  const [noticeState,setNoticeState] = useState([])

  const [ready,setReady] = useState(true)

  useEffect(()=>{
    navigation.setOptions({ //헤더 타이틀 변경
      title:'오늘의운세'
    })
    setTimeout(()=>{
        setSstate(signdata.sign)
        setNstate(sajudata.saju)
        setSignState(signdata.sign)
        setZodiacState(zodiacdata.zodiac)
        setNoticeState(sajudata.saju)
        setReady(false)
    },1000)

  },[])

  let saju = Sstate.saju;
  let sign = Nstate.sign;

  return ready ? <Loading/> :  (
    <ScrollView style={styles.container}>
    <StatusBar style="light"/>
    <Text style={styles.title}>오늘의띠별운세</Text>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        {
          signState.map((content,i)=>{
            return (<Sign content={content} key={i} navigation={navigation}/>)
          })
        }
      </ScrollView>

      <Text style={styles.title}>오늘의별자리운세</Text>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        {
          zodiacState.map((content,i)=>{
            return (<Zodiac content={content} key={i} navigation={navigation}/>)
          })
        }
      </ScrollView>

      <View style={styles.cardContainer}>
         {
          noticeState.map((content,i)=>{
            return (<Card content={content} key={i} navigation={navigation}/>)
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
      marginTop:50,
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
      height:'100%'
    },
    middleButton: {
      width:60,
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
    cardContainer: {
      marginTop:10,
      marginLeft:10
    }
  });