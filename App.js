import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

const main = 'https://firebasestorage.googleapis.com/v0/b/kmz-e99d0.appspot.com/o/pawel-czerwinski-d7iIvTyzccY-unsplash.jpg?alt=media&token=ef566c47-4509-4408-a4d8-e74d1cdf073a'
import data from './data.json';

export default function App() {
  let tip = data.tip;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>사주</Text>
      <Image style={styles.mainImage} source={{uri:main}}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>사회생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>인간관계</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>연애</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>찜❤</Text></TouchableOpacity>
      </ScrollView>

      <View style={styles.cardContainer}>
        {
          tip.map((content,i)=>{
            return (<View style={styles.card} key={i}>
              <Image style={styles.cardImage} source={{uri:content.image}}/>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={2}>{content.title}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
              </View>
            </View>)
          })
         }
      </View>
      
      </ScrollView>
  );
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
    height:60
  },
  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"gray",
    borderColor:"hotpink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"lightgray",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"gray",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center" //텍스트의 현재 위치에서의 정렬 
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"hotpink",
    borderRadius:15,
    margin:7
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
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
});