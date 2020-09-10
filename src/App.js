import React from 'react'
import {StatusBar} from 'react-native'

import Main from './components/Main'

const App = (props) => {
    return (
        <>
        <StatusBar 
            barStyle="light-content"
            hidden={false}
            backgroundColor="#1e90ff"
        />
        <Main/>
        </>
    );
}

export default App