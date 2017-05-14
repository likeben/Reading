
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Util from './../util/Util';
import CDDiscoverVideoView from './CDDiscoverVideoView';


export default class CDDiscoverCell3 extends Component {
    render() {
        const rowData = this.props.rowData;
        return (
           <TouchableOpacity
               style={{backgroundColor:'#fff', marginBottom:15}}
               onPress={()=>this._pushToVideoView(rowData.video)}
           >
               <Image
                   source={{uri: rowData.img}}
                   defaultSource={require('./../../images/placeholder_big.png')}
                   style={styles.imgStyle}
               />
               <View style={styles.bottomViewStyle}>
                   <Text style={{color:'#fff'}}>{rowData.title}</Text>
               </View>
           </TouchableOpacity>
        );
    }

    _pushToVideoView(video){
         this.props.navigator.push({
             component: CDDiscoverVideoView,
             props: {video}
         })
    }
}

const styles = StyleSheet.create({
    imgStyle:{
        width:Util.screen.width,
        height:Util.screen.width * 0.5
    },

    bottomViewStyle:{
        width:Util.screen.width,
        height:Util.screen.width * 0.1,
        position:'absolute',
        left:0,
        bottom:0,

        backgroundColor:'rgba(0, 0, 0, .5)',
        justifyContent:'center',
        paddingLeft:10
    }
});


module.exports = CDDiscoverCell3;
