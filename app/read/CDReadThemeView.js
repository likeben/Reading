
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import CDButton from './../util/CDButton';
import CDReadThemeListView from './CDReadThemeListView';




export default class CDReadThemeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CDButton
                   btnStyle={styles.btnStyle}
                   bgImage={()=>(<Image source={require('./../../images/theam_1.jpg')} style={styles.imgStyle}/>)}
                   clickBtn={()=>this._pushToThemeList('react')}
                />
                <CDButton
                   btnStyle={styles.btnStyle}
                   bgImage={()=>(<Image source={require('./../../images/theam_2.jpg')} style={styles.imgStyle}/>)}
                   clickBtn={()=>this._pushToThemeList('node')}
                />
                <CDButton
                   btnStyle={styles.btnStyle}
                   bgImage={()=>(<Image source={require('./../../images/theam_3.jpg')} style={styles.imgStyle}/>)}
                   clickBtn={()=>this._pushToThemeList('other')}
                />
            </View>
        );
    }

    _pushToThemeList(flag){
        
        const dataArr = this.props.items[flag];
        
        this.props.navigator.push({
           component:CDReadThemeListView,
           props: {dataArr} 
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom:15,
        paddingTop:10
    },

    btnStyle:{
        width:106,
        height:62,
        borderRadius:0,
        backgroundColor:'transparent'
    },

    imgStyle:{
        width:106,
        height:62,
        position:'absolute',
        left:0,
        top:0
    }
});


module.exports = CDReadThemeView;
