
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import Util from './../util/Util';


export default class extends Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://www.likeben.cn:8001/amap/'}}
            />
        );
    }
}
