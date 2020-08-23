import React, { useState, useEffect } from 'react'
import {StyleSheet, View } from 'react-native'
import Forecast from './Forecast'


export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        temp_min:0,
        temp_max:0,
        pressure:0,
        zipCode:0,

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
                temp: json.main.temp,
                temp_min:json.main.temp_min,
                temp_max:json.main.temp_max,
                pressure:json.main.pressure,
                zipCode: props.zipCode
             });
        })
        .catch((error) => {
            console.warn(error);
                });
            }
        }, [props.zipCode])

    
  
    return(
            <View >
            <Forecast  {...forecastInfo}/>
            </View>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems : 'center',
        width : '100%' ,
        height : '100%',
        
    },
    
    
})
