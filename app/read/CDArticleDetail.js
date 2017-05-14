
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import CDCommonNav from './../util/CDCommonNav';


export default class CDArticleDetail extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <CDCommonNav
                    mainTitle="文章详情"
                    leftIcon="btn_backitem"
                    clickLeftView={()=>this.props.navigator.pop()}
                />
                <WebView
                    source={{uri: this.props.url}}
                />
            </View>
        );
    }
}


module.exports = CDArticleDetail;
