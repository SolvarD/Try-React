import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Form } from '../form/form';
import Game from '../morpion/game';
import './header.css';
import LegalDocument from '../legal-documents/legal-document';
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
                            <Link to="/form">Form</Link>
                        </li>
                        <li>
                            <Link to="/legal-document">Documents</Link>
                        </li>
                        
                    </ul>

                    <hr />
                    <div className="main-route-place">
                        <Route exact path="/" component={Game} />
                        <Route path="/form" component={Form} />
                        <Route path="/legal-document" component={LegalDocument} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Header;