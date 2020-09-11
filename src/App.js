import React from 'react'
import {StatusBar} from 'react-native'

import Cadastro from './components/Cadastro'
import Main from './components/Main'

const App = (props) => {
    return (
        <>
        <StatusBar 
            barStyle="light-content"
            hidden={false}
            backgroundColor="#1e90ff"
        />
        <Cadastro/>
        </>
    );
}

export default App