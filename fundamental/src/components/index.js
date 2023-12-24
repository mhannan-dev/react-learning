import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        const element = this.state ? <HomePage /> : <LoginPage />;
        return (
            <>
                {element}
            </>
        );
    }
}
