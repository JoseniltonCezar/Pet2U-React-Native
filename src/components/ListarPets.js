import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native'
import NormalHeader from './Header/NormalHeader'

const ListarPets = props =>{
    
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         feed:[
    //             {id: '1', nome: 'PetShop do Zezinho', tempoDeEspera: '25 - 35 min', nota: 10},
    //             {id: '2', nome: 'CaoQmia', tempoDeEspera: '20 - 40 min', nota: 9.9},
    //             {id: '3', nome: 'EuroBike Petshop', tempoDeEspera: '10 - 40 min', nota: 9.5}
    //         ]
    //     };
    // }

    return (
        <SafeAreaView style={style.container}>
            <NormalHeader/>
            <View style={style.seacrhView}>
                <TextInput
                style={style.cpfInput}
                placeholder= "Search"
                onChangeText={text =>{}}
                />
            </View>
            <View style={style.containerSearch}>
                <Text style={style.Textfilter}>Classfificar por:</Text>

                <TouchableOpacity style={style.ButtonsSearch} onPress={button =>{}}>
                    <Text >Alfabético</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.ButtonsSearch} onPress={button =>{}}>
                    <Text >Novos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.ButtonsSearch} onPress={button =>{}}>
                    <Text >Pontuação</Text>
                </TouchableOpacity>

            </View>

            {/* <View>
                <FlatList
                data={this.state.feed}
                keyExtractor= {(item ) => item.id}
                renderItem={ ({item}) => <Petshop data={item} /> }
                />
            </View> */}
                
        </SafeAreaView>              
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    seacrhView: {
        borderWidth: 1,
        width: 380,
        alignSelf: 'center',
        padding: 3,
        marginTop: 10,
        borderRadius: 10
    },
    containerSearch: {
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    Textfilter: {
        fontSize: 15,
        padding: 10,
        marginTop: 10,    
    },
    ButtonsSearch:{
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
    },
    
})
export default ListarPets 


// class Petshop extends Component{
//     render(){
//         return(
//             <View>
//                 <Text>{this.props.data.nome}</Text>
//             </View>
//         );
//     }
// }