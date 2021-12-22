import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, Share } from 'react-native';
import Loading from '../components/SajuLoading';

export default function SajuPage({content, navigation, route}) {
    
    const [ready,setReady] = useState(true)

    const [saju, setSaju] = useState({
        "idx":0,
        "category":"",
        "title":"2022 임인년 상반기 나의 운명키워드는?",
        "image":"https://firebasestorage.googleapis.com/v0/b/kmz-e99d0.appspot.com/o/%EC%9E%84%EC%9D%B8%EB%85%84.jpg?alt=media&token=aaaf8ec5-522d-4e96-bb53-437369c1b705",
        "subtitle":"2022년 상반기 민지님의 조직에서 신뢰를 얻겠습니다.",
        "desc":"2022년 임인년 새해에 들어오는 연운 천간인 \"임수\"의 기운은 빠르게 다가오니, 상반기 운명을 좌우하는 키워드로 보기도 합니다. 민지님의 일간에는 \"정관\"으로 작용하는군요. \n\n특히 관공서 등 공공의 성격이 있는 일에 임할 때 좋은 성과를 얻겠어요. 지금까지 열심히 일해왔다면 소속된 곳에서 신뢰와 인정을 받겠군요. 사회적인 지위가 안정되고 책임 있는 역할을 맡게 됩니다. 그럼 당신을 의지하며 따르고 상담을 원하는 사람들이 생기겠어요. 사회적인 평판이 중요한 시기니 규칙을 잘 지키고 명예를 추구하면 좋은 운이 따를 거예요. \n\n다만 실제의 신년운세는 사주 다른 글자나 대운과 만나 합, 충 등의 작용을 하여 변화할 수 있어요.",
        "read":"1,046"
    })
    
    useEffect(()=>{
        navigation.setOptions({
            title:route.params.title,
            headerStyle: {
                backgroundColor: '#fff',
                shadowColor: "#000",
                height:70
            },
            headerTintColor: "#000",
        })
        setSaju(route.params)
        setTimeout(()=>{
            setReady(false)
        },2000)
    },[])

    const share = () => {
        Share.share({
            message:`${saju.title} \n\n ${saju.subtitle} \n\n ${saju.desc} \n\n ${saju.image}`,
        });
    }
    return ready ? <Loading/> :  ( 
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:saju.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{saju.title}</Text>
                <Text style={styles.subtitle}>{saju.subtitle}</Text>
                <Text style={styles.desc}>{saju.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>share()}>
                    <Text style={styles.buttonText}>공유하기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    image:{
        height:200,
        margin:10,
        marginTop:40,
        borderRadius:20
    },
    textContainer:{
        padding:15                                                                                                                                                                                             ,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:25,
        fontWeight:'800',
        textAlign:'center'
    },
    subtitle: {
        fontSize:19,
        fontWeight:'500',
        marginTop:10
    },
    desc:{
        marginTop:20,
        fontSize:17
    },
    button:{
        width:120,
        marginTop:40,
        padding:15,
        borderWidth:2,
        borderColor:'#f76707',
        borderRadius:7,
        marginBottom:35
    },
    buttonText:{
        textAlign:'center',
        fontSize:16
    }
})