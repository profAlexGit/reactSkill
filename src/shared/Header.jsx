import {hot} from 'react-hot-loader/root';
import React from 'react';
import styles from './header.less';

const HeaderComponent = () => {
    return (
        <header>
            <h1 className={styles.example}>Hello React</h1>
        </header>
    )
}

export const Header = hot(HeaderComponent)