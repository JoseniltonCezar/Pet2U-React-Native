import React from 'react'
import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

const Cadastro = props =>{
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={style.container}>               
                <Text style={style.containerText}>Pet2U</Text>
            </View>
            <View>
                <KeyboardAvoidingView behavior="position">
                <Text style={style.headerText}>Cadastro</Text>
                    <View style={style.formContainer}>
                        <TextInput
                            style={style.nameInput}
                            keyboardType="default"
                            placeholder="Nome"
                            onChangeText={text =>{}}
                        />
                        <TextInput
                            style={style.emailInput}
                            keyboardType="email-address"
                            placeholder="Email"
                            onChangeText={text =>{}}
                        />
                        <TextInput
                            style={style.cpfInput}
                            keyboardType="number-pad"
                            placeholder="CPF"
                            onChangeText={text =>{}}
                        />
                        <TextInput
                            style={style.phoneInput}
                            keyboardType="number-pad"
                            placeholder="Telefone"
                            onChangeText={text =>{}}
                        />
                        <TextInput
                            style={style.passwordInput}
                            secureTextEntry={true}
                            placeholder="Senha"
                            onChangeText={text =>{}}                        
                        />
                        <TouchableOpacity style={style.createAccButton} onPress={button =>{}}>
                            <Text style={style.createAccButtonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>           
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
    headerText: {
        fontSize: 47,
        color: "#a9a9a9",
        marginTop: 10,
        alignSelf: "center",
        fontFamily: "sans-serif-thin",
        marginBottom: 10,
    },
    formContainer:{
        paddingLeft: 40,
        paddingRight: 40
    },
    nameInput: {
        borderWidth: 1,
        borderColor: '#a9a9a9',
        padding: 5,
        height: 60,
        marginBottom: 20
    },
    emailInput: {
        borderWidth: 1,
        borderColor: '#a9a9a9',
        padding: 5,
        height: 60,
        marginBottom: 20
    },
    cpfInput:{
        borderWidth: 1,
        borderColor: '#a9a9a9',
        padding: 5,
        height: 60,
        marginBottom: 20
    },
    phoneInput:{
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
        height: 60,
        marginBottom: 20
    },
    createAccButton:{
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
        marginTop: 10,
        borderRadius: 10,
    },
    createAccButtonText:{
        color: "#ffff",
        fontSize: 20
    }
});




export default Cadastro 