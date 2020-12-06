import { Component } from 'react';

export class HttpClient extends Component {

    static getHeader = (method, body) => {

        let request = {};
        request.method = method;

        request.headers = {
            'Content-Type': 'application/json',
            //REMEMBER JWT
            'Authorization': 'Bearer my-token',
        };

        if (body) {
            request.body = JSON.stringify(body);
        }

        return request;
    }

    static httpGet = (url) => {
        return fetch(url, HttpClient.getHeader('GET')).then(g => g.json());
    };

    static httpPost = (url, body) => {
        return fetch(url, HttpClient.getHeader('POST', body)).then(g => g.json());
    };
}

export default HttpClient;