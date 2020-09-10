import React from 'react'
import {SafeAreaView ,View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'


const Main = () =>{
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={style.container}>               
                <Image
                    style={style.image}
                    source={require('./images/pet2u_logo.png')}

                />
            </View>     

            <View style={style.loginContainer}>
                <Text style={style.headerText}>Login de Usuário</Text>
                <View style={style.loginSecondContainer}>
                    <TextInput
                        style={style.emailInput}
                        keyboardType="email-address"
                        placeholder="Email"
                        onChangeText={text =>{}}
                    />
                    <TextInput
                        style={style.passwordInput}
                        secureTextEntry={true}
                        placeholder="Senha"
                        onChangeText={text =>{}}                        
                    />

                    <TouchableOpacity style={style.signInButton} onPress={button =>{}}>
                        <Text style={style.signInButtonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.forgetButton} onPress={button =>{}}>
                        <Text style={style.forgetText}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.createAccButton} onPress={button =>{}}>
                        <Text style={style.createAccButtonText}> Criar nova conta de usuário </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>    
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
    headerText: {
        fontSize: 47,
        color: "#a9a9a9",
        marginTop: 40,
        alignSelf: "center",
        fontFamily: "sans-serif-thin",
    },
    loginContainer:{
        flex:3,
    },
    loginSecondContainer:{
        padding: 40
    },
    emailInput: {
        borderWidth: 1,
        borderColor: '#a9a9a9',
        padding: 5,
        height: 60,
        marginBottom: 20
    },
    passwordInput:{
        borderWidth: 1,
        borderColor: '#a9a9a9',
        padding: 5,
        height: 60
    },
    signInButton:{
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS,
        alignItems: "center",
        backgroundColor: "#1e90ff",
        elevation: 4, //Android
        alignSelf: "center",
        width: 300,
        padding: 10,
        marginTop: 30,
        borderRadius: 10,
    },
    signInButtonText:{
        color: "white",
        fontSize: 20
    },
    forgetButton:{
        marginTop: 15,
        marginBottom: 30,
        width: 143,
        alignSelf: "center"
    },
    forgetText:{
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#a9a9a9",
    },
    createAccButton:{
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS,
        alignItems: "center",
        backgroundColor: "#eb4d4b",
        elevation: 4, //Android
        alignSelf: "center",
        width: 300,
        padding: 10,
        borderRadius: 10,
    },
    createAccButtonText:{
        color: "white",
        fontSize: 20
    }

})
export default Main 