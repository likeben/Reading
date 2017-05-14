import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import CDCommonNav from './../util/CDCommonNav';

const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');


export default class CDLoginView extends Component {
    render() {
        return (
          <View style={{flex:1}}>
              <CDCommonNav
                  mainTitle="登录界面"
                  leftIcon="btn_backitem"
                  clickLeftView={()=>this.props.navigator.pop()}
              />
              <View style={styles.container}>
                  {/*logo*/}
                  <Image source={require('./../../images/icon.png')} style={styles.iconStyle}/>
                  {/*输入框*/}
                  <TextInput
                      placeholder="请输入用户名"
                      clearButtonMode="always"
                      underlineColorAndroid="transparent"
                      style={styles.inputViewStyle}
                  />
                  <TextInput
                      placeholder="请输入密码"
                      password={true}
                      clearButtonMode="always"
                      underlineColorAndroid="transparent"
                      style={styles.inputViewStyle}
                  />
                  {/*登录按钮*/}
                  <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={()=>this._login()}
                      style={styles.loginBtnStyle}
                  >
                      <Text style={{color:'#fff',fontSize:18}}>登&nbsp;&nbsp;录</Text>
                  </TouchableOpacity>

                  <View style={styles.defaultSettingStyle}>
                      {/*左边*/}
                      <TouchableOpacity
                          onLongPress={()=>{alert('长按事件!!!');}}
                      >
                          <Text>无法登录</Text>
                      </TouchableOpacity>
                      {/*右边*/}
                      <TouchableOpacity>
                          <Text>新用户</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.bottomViewStyle}>
                      <Text>其它方式登录:</Text>
                      <Image source={require('./../../images/icon3.png')} style={styles.bottomImgStyle}/>
                      <Image source={require('./../../images/icon7.png')} style={styles.bottomImgStyle}/>
                      <Image source={require('./../../images/icon8.png')} style={styles.bottomImgStyle}/>
                  </View>
              </View>
          </View>

        );
    }

    /**
     * 处理登录
     * @private
     */
    _login(){
        alert('请输入用户名');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },

    iconStyle:{
        width:80,
        height:80,
        borderRadius: 40,
        marginTop: 80,
        marginBottom:30,
        borderWidth:2,
        borderColor:'#fff'
    },

    inputViewStyle:{
        width:width,
        height:36,
        backgroundColor:'#fff',
        marginBottom:1,
        textAlign:'center'
    },

    loginBtnStyle:{
        height:36,
        width:width * 0.95,
        backgroundColor:'#e9232c',
        marginTop:30,
        marginBottom:20,
        borderRadius:5,

        /*主侧轴居中*/
        justifyContent:'center',
        alignItems:'center',
    },

    defaultSettingStyle:{
        width:width * 0.95,

        /*改变主轴的方向*/
        flexDirection:'row',
        justifyContent:'space-between'
    },

    bottomViewStyle:{
        position:'absolute',
        left:10,
        bottom:10,

        /*改变主轴的方向*/
        flexDirection:'row',
        alignItems:'center'
    },

    bottomImgStyle:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:10
    }
});


module.exports = CDLoginView;
