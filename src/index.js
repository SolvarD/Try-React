import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/morpion/game';
import Header from './components/header/header';

/*
 * base app: https://fr.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment
 * router : npm install--save react-router-dom
 * https://o7planning.org/fr/12139/comprendre-le-react-router-avec-un-exemple-basique
 * */

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);
