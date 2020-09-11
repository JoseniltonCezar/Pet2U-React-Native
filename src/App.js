import React from 'react'
import {StatusBar} from 'react-native'

import Cadastro from './components/Cadastro'
import Main from './components/Main'
import ListarPets from './components/ListarPets'
import PerfilUsuario from './components/PerfilUsuario'

const App = (props) => {
    return (
        <>
        <StatusBar 
            barStyle="light-content"
            hidden={false}
            backgroundColor="#1e90ff"
        />
        <PerfilUsuario/>
        {/* <ListarPets/> */}
        </>
    );
}

export default App