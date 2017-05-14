import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';


import Swiper from 'react-native-swiper';
import CDButton from './../util/CDButton';
import CDMain from  './CDMain';
import Util from './../util/Util';


export default class CDLaunchPage extends Component{
    
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isFirstLaunch: true
        };
      }

    render(){
        if(this.state.isFirstLaunch){ // 第一次启动
            return(
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    loop={false}
                >
                    <View style={styles.slide1}>
                        <Image source={require('./../../images/slider1.png')} style={styles.sliderImgStyle}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('./../../images/slider2.png')} style={styles.sliderImgStyle} >
                            <CDButton
                                clickBtn={()=>this._replaceToMainPage()}
                                btnStyle={styles.btnStyle}
                                btnInnerTextStyle={styles.btnInnerTextStyle}
                                title="立即体验"
                            />
                        </Image>
                    </View>
                </Swiper>
            )
        }else {
           return(
               <CDMain {...this.props}/>
           )
        }
    }

    _replaceToMainPage(){
        this.props.navigator.replace({
            component: CDMain
        });
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        width: Util.screen.width,
        height: Util.screen.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    sliderImgStyle:{
        width: Util.screen.width,
        height: Util.screen.height,
        alignItems:'center'
    },

    btnStyle:{
        backgroundColor:'transparent',
        borderWidth: 1,
        borderColor: 'red',
        position:'absolute',
        bottom:120
    },

    btnInnerTextStyle:{
        color:'red'
    }
});



module.exports = CDLaunchPage;
