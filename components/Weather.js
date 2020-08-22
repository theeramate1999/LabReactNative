import React, { useState } from 'react'
import { Text, ImageBackground , StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return(
        <ImageBackground source = {require('../back.jpg')} style = {styles.backdrop}>
            <View style = {styles.viewstyle}>
            <Text style ={styles.textstyles}>{"\n"}Zip Code is {props.zipCode}{"\n"}</Text>
            <Forecast  {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems : 'center',
        width : '100%' ,
        height : '100%',
        
    },
    textstyles: {
        textAlign : 'center',
        color: 'white',
        fontSize: 22,

    },
    viewstyle: {
        width: 800, 
        height: 300, 
        backgroundColor: 'black',
        opacity : .6
    }
})
