import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';

export default function SignDetailPage({navigation,route}) {

    const [zodiac, setZodiac] = useState({
        "idx":0,
        "title":"물병자리",
        "image":"https://firebasestorage.googleapis.com/v0/b/kmz-e99d0.appspot.com/o/pawel-czerwinski-d7iIvTyzccY-unsplash.jpg?alt=media&token=ef566c47-4509-4408-a4d8-e74d1cdf073a",
        "desc":"연말의 분위기가 충만한 한 주다. 뜻밖의 수입이 생기고 연인과의 관계도 더할 나위 없이 좋아질 것.",
        "date":"01.20 ~ 02.18"
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

        setZodiac(route.params)

    },[])

    return ( 
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:zodiac.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{zodiac.title}</Text>
                <Text style={styles.dateText}>{zodiac.date}</Text>
                <Text style={styles.desc}>{zodiac.desc}</Text>
                {/*
                <TouchableOpacity style={styles.button} onPress={()=>popup()}><Text style={styles.buttonText}>지금 확인하러 가기 💨</Text></TouchableOpacity>
                */}
            </View>
            
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    image:{
        width:140,
        height:145,
        marginLeft:117,
        margin:10,
        marginTop:40,
        borderRadius:20
    },
    textContainer:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:25,
        fontWeight:'700'
    },
    desc:{
        marginTop:20,
        fontSize:16,
    },
    dateText:{
        fontSize:20,
        fontWeight:'500',
        margin:5
    }
})