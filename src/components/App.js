import React, { Fragment } from 'react';
import Home from '../pages/Home';
import {GlobalStyle} from '../baseStyles/global';

const App = () => {
    return (
        <Fragment>
            <Home/>
            <GlobalStyle/>
        </Fragment>
    )
}

export default App;