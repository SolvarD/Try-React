import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Form } from '../form/form';
import Game from '../morpion/game';

export class Header extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Form">Form</Link>
                        </li>
                        
                    </ul>

                    <hr />
                    <div className="main-route-place">
                        <Route exact path="/" component={Game} />
                        <Route path="/Form" component={Form} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Header;