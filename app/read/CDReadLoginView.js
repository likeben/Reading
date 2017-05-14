
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import CDButton from './../util/CDButton';
import Util from './../util/Util';
import CDLoginView from './CDLoginView';

export default class CDReadLoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.innerViewStyle}>
                  <Image source={require('./../../images/person.png')} style={styles.iconStyle}/>
                  <Text style={{backgroundColor:'transparent', fontSize:16}}>未登录 | </Text>
                  <CDButton
                      btnStyle={styles.btnStyle}
                      title="立即登录"
                      btnInnerTextStyle={{color:'red'}}
                      clickBtn={()=>this._pushToLoginView()}
                  />
               </View>
            </View>
        );
    }

    _pushToLoginView(){
        this.props.navigator.push({
            component:CDLoginView
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },

    innerViewStyle:{
        flexDirection:'row',
        backgroundColor:'#eee',
        width:Util.screen.width * 0.9,
        height:34,
        marginLeft:Util.screen.width * 0.05,

        marginTop:10,
        marginBottom:10,

        alignItems:'center',
        borderRadius:17,

        paddingLeft:10
    },

    btnStyle:{
        backgroundColor:'transparent',
        borderWidth:0,
        alignItems:'flex-start'
    },

    iconStyle:{
        width:20,
        height:20,
        marginRight:10
    }
});


module.exports = CDReadLoginView;
