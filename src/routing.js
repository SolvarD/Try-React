import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Game from './components/morpion/game';
import Form from './components/form/form';

export class Routing extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Game} />
                <Route path="/Form" component={Form} />
            </BrowserRouter>
        );
    }
}
export default Routing;