import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import NormalHeader from './Header/NormalHeader'

const PerfilUsuario = props =>{
    return (
        <SafeAreaView style={style.container}>
            <NormalHeader/>
        <View style={style.container2}>
            <Image
            source={require('./images/pet2u_logo.png')}
            style={style.FotoPerfil}
            />
            <Text style={style.TextNome}>NOME:</Text>
            <Text style={style.TextEmail}>E-MAIL:</Text>
        </View>

        <View style={style.ButtonView}>
            <TouchableOpacity style={style.Button}>
                <Text>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.Button}>
                <Text>Favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.Button}>
                <Text>Seu Pet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.Button}>
                <Text>Seguindo</Text>
            </TouchableOpacity>

        </View>
        
        </SafeAreaView>
    );
}

const style= StyleSheet.create({
    container: {
    },
    container2: {
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 40
    },
    TextNome: {
        marginTop:40,
        fontSize: 20,
        marginBottom: 20
    },
    TextEmail: {
        marginTop:20,
        fontSize: 20
    },
    ButtonView: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    Button: {
        padding: 9,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS,
        alignItems: "center",
        backgroundColor: "#1e90ff",
        elevation: 4, //Android
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 10,
        marginLeft: 10
    }
})


export default PerfilUsuario 