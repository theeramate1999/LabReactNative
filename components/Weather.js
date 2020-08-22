import React, { useState, useEffect } from 'react'
import { Text, ImageBackground , StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
   
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=99cf5e39075140ab0a2140335d1d7d5e`)
         .then((response) => response.json())
         .then((json) => {
            setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp
             });
        })
        .catch((error) => {
            console.warn(error);
                });
            }
        }, [props.zipCode])
    
    
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
