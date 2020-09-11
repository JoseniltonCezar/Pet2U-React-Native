import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import NormalHeader from './Header/NormalHeader'

const ListarPets = props =>{
    
        state = {
            feed:[
                {id: '1', name: 'PetShop do Zezinho', waitTime: '25 - 35 min', nota: 10, image: require('./images/fachadaPet1.jpg')},
                {id: '2', name: 'CaoQmia', waitTime: '20 - 40 min', nota: 9.9, image: require('./images/fachadaPet2.png')},
                {id: '3', name: 'EuroBike Petshop', waitTime: '10 - 40 min', nota: 9.5, image: require('./images/fachadaPet3.png')},
                {id: '4', name: 'USABike Petshop', waitTime: '10 - 40 min', nota: 9.5, image: require('./images/fachadaPet2.png')},
                {id: '5', name: 'XesqueBike Petshop', waitTime: '10 - 40 min', nota: 9.5, image: require('./images/fachadaPet1.jpg')}
            ]
        };
    
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
                <Text style={style.textfilter}>Classfificar por:</Text>

                <TouchableOpacity style={style.buttonsSearch} onPress={button =>{}}>
                    <Text >Alfabético</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonsSearch} onPress={button =>{}}>
                    <Text >Novos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonsSearch} onPress={button =>{}}>

                    <Text >Pontuação</Text>
                </TouchableOpacity>

            </View>
            <View style={style.listContainer}>
                <FlatList
                    data={state.feed}
                    keyExtractor= {(item) => item.id}
                    renderItem= { ({item}) =>(
                        <View key={item.id} style={{paddingHorizontal: 10}}>
                            <Image
                                style={style.petImages}
                                source={item.image}
                            />
                            <View style={style.petInfoContainer}>
                                <Text>{item.name}</Text>
                                <Text>{item.waitTime}</Text>
                            </View>
                        </View>
                    )}
                    />
            </View>
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
        alignContent: 'flex-start',
        marginBottom: 10
    },
    textfilter: {
        fontSize: 15,
        padding: 10,
        marginTop: 10,    
    },
    buttonsSearch:{
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
        marginLeft: 10,
    },
    listContainer:{
        flex: 1,
    },
    petImages:{
        width: "100%",
        height: 150,
        resizeMode: "stretch",
        borderRadius: 3
        
    },
    petInfoContainer:{
        paddingHorizontal: 13,
        paddingVertical: 10,
        marginBottom: 20
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