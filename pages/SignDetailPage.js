import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
import signdata from '../signdata.json';

export default function SignDetailPage({navigation,route}) {

    const [descstate,setDescState] = useState([])
    const [sign, setSign] = useState({
        "idx":0,
        "category":"",
        "title":"쥐띠",
        "image":"https://firebasestorage.googleapis.com/v0/b/kmz-e99d0.appspot.com/o/pawel-czerwinski-d7iIvTyzccY-unsplash.jpg?alt=media&token=ef566c47-4509-4408-a4d8-e74d1cdf073a",
        "descTitle":"96년생",
        "desc":"많은 것을 기대 안 하는 것이 좋겠습니다. 더 이상은 잘 되지 않습니다.",
        "desc1Title":"48년생",
        "desc1":"올바른 일이라도 실력 이상의 일은 귀하에게 맞지 않습니다.",
        "desc2Title":"60년생",
        "desc2":"일도 일이지만 건강도 생각해야 할 시기입니다.",
        "desc3Title":"72년생",
        "desc3":"말을 조심해야 할 시기입니다. 구설수에 오를 수 있습니다.",
        "desc4Title":"84년생",
        "desc4":"자기의 자신을 아는 자가 현명한 자입니다.",
        "date":""
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

        setSign(route.params)

    },[])
    /*
    const popup = () => {
        Alert.alert("ss")
    }
    */
    const desc = (d) => {
        switch(d) {
            case sign.desc1Title:
                setDescState(sign.desc1)
                break;
            case sign.desc2Title:
                setDescState(sign.desc2)
                break;
            case sign.desc3Title:
                setDescState(sign.desc3)
                break;
            case sign.desc4Title:
                setDescState(sign.desc4)
                break;
            default:
                setDescState(sign.desc)
        }
    }

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    
    let dateString = year + "." + month + "." + day;

    return ( 
        <ScrollView style={styles.container}>
            <Text style={styles.date}>{dateString}</Text>
            <ScrollView style={styles.descButton} horizontal indicatorStyle={"white"}>
                <TouchableOpacity style={styles.button} onPress={()=>{desc(sign.descTitle)}}><Text style={styles.buttonText}>{sign.descTitle}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{desc(sign.desc1Title)}}><Text style={styles.buttonText}>{sign.desc1Title}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{desc(sign.desc2Title)}}><Text style={styles.buttonText}>{sign.desc2Title}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{desc(sign.desc3Title)}}><Text style={styles.buttonText}>{sign.desc3Title}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{desc(sign.desc4Title)}}><Text style={styles.buttonText}>{sign.desc4Title}</Text></TouchableOpacity>
            </ScrollView>

            <Image style={styles.image} source={{uri:sign.image}}/>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{sign.title}</Text>
                <Text style={styles.desc}>{descstate}</Text>
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
    descButton:{
        marginLeft:10,
        height:40
    },
    image:{
        width:140,
        height:130,
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
    date : {
        padding:20,
        fontSize: 30,
        textAlign:'center',
        fontWeight: '700',
        marginTop:20,
    },
    title: {
        fontSize:30,
        fontWeight:'700'
    },
    desc:{
        marginTop:10,
        fontSize:20,
    },
    button:{
        width:72, //230
        padding:10
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'500',
        fontSize:16,
    }
})