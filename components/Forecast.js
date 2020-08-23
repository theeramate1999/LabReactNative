import React from 'react'
import { View,Text,StyleSheet, ImageBackground } from 'react-native'

export default function Forecast(props){
    let img = ""
    console.log(`main  = ${props.main}`)
    switch(props.main){
        case 'Rain' : img =require('../rain.jpg')
                      break;
        case 'Clouds' :img =require('../clouds.jpg')
                      break;
        
    }
    console.log(`Image = ${img}`)

    return(
        <ImageBackground source ={img} style ={styles.backdrop}>
            <View style ={styles.viewstyle}>
                <Text style ={styles.textstyles}>{"\n"}Zip Code is {props.zipCode}{"\n"}</Text>
                <Text style ={styles. headertextstyles}>{props.main}{"\n"}</Text>
                <Text style ={styles.textstyles} > {props.description}{"\n"}{"\n"}
                        {props.temp} °C</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headertextstyles: {
        color: 'white',
        fontSize : 32,
        fontWeight: 'bold',
        textAlign: 'center'


    },
    textstyles:{
        fontSize : 22,
        color: 'white',
        textAlign :'center',
        


    },
    textstyles: {
        textAlign : 'center',
        color: 'white',
        fontSize: 22,

    },
    backdrop: {
        alignItems : 'center',
        width : '100%' ,
        height : '100%',
        
    },
    viewstyle: {
        width: 800, 
        height: 300, 
        backgroundColor: 'black',
        opacity : .6
    }
})
