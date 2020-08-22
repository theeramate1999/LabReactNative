import React, { useState } from 'react'
import { Text, ImageBackground , StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return(
        <ImageBackground source = {require('../back.jpg')} style = {styles.backdrop}>
            <Text style={{color: "red"}}>Zip Code</Text>
            <Text style = {{color: "red"}}>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%' ,
        height : '100%'
    }

})
