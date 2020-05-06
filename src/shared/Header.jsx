import {hot} from 'react-hot-loader/root';
import React from 'react';

const HeaderComponent = () => {
    return (
        <header>
            <h1>Reddit for our own!!!</h1>
        </header>
    )
}

export const Header = hot(HeaderComponent)