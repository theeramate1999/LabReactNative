import React from 'react'
import { View,Text } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style= {{color: "red"}}>{props.main}</Text>
            <Text style={{color: "red"}}>{props.description}</Text>
            <Text style={{color: "red"}}>{props.temp}</Text>
            <Text style={{color: "red"}}>°C</Text>
        </View>
    )
}