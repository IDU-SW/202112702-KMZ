import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';

export default function DetailPage({navigation,route}) {

    const [saju, setSaju] = useState({
        "idx":0,
        "category":"",
        "title":"12월 건강운",
        "image":"https://firebasestorage.googleapis.com/v0/b/kmz-e99d0.appspot.com/o/pawel-czerwinski-d7iIvTyzccY-unsplash.jpg?alt=media&token=ef566c47-4509-4408-a4d8-e74d1cdf073a",
        "desc":"2021년 12월은 사주로 경자월, 하얀 쥐의 달입니다.\n절기로는 대설부터 소한까지로, 이는 양력으로 2021년 12월 8일부터 1월 5일까지에 해당합니다.\n\n경자월에 들어온 경금과 자수의 오행을 기준으로 당신의 사주, 대운, 신축년의 오행에 대입하여 12월 건강운을 알려드립니다.",
        "date":"2021.12.19"
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
    },[])

    const popup = () => {
        Alert.alert("ss")
    }
    return ( 
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:saju.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{saju.title}</Text>
                <Text style={styles.desc}>{saju.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>popup()}><Text style={styles.buttonText}>지금 확인하러 가기 💨</Text></TouchableOpacity>
            </View>
            
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    image:{
        height:400,
        margin:10,
        marginTop:40,
        borderRadius:20
    },
    textContainer:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:20,
        fontWeight:'700'
    },
    desc:{
        marginTop:10,
        fontSize:16,
    },
    button:{
        width:230,
        marginTop:40,
        padding:15,
        borderWidth:2,
        borderColor:'deeppink',
        borderRadius:7
    },
    buttonText:{
        textAlign:'center',
        fontSize:16
    }
})