import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style ={styles. headertextstyles}>{props.main}{"\n"}</Text>
                <Text style ={styles.textstyles} > {props.description}{"\n"}{"\n"}
                        {props.temp} °C</Text>
        </View>
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
        


    }


})
