import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

const ImageHeader = () =>{
    return (
        <View style={style.container}>               
        <Image
            style={style.image}
            source={require('../images/pet2u_logo.png')}

        />
    </View>               
    );
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#1e90ff",
        alignItems: "center",
        height: 160,
        justifyContent: "center",
    },
    image:{
        resizeMode: "contain"
    },
});

export default ImageHeader 