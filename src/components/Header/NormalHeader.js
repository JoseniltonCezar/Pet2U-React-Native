import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

const NormalHeader = () =>{
    return (
        <View style={style.container}>               
            <Text style={style.containerText}>Pet2U</Text>
        </View>          
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#1e90ff",
        justifyContent: "center",
        paddingLeft: 10,
        height: 35
    },
    containerText:{
        color: "#ffff",
        fontSize: 25,
        fontWeight: "bold"
    },
})

export default NormalHeader 