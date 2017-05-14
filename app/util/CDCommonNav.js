
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Util from './Util';


export default class CDCommonNav extends Component {
    static propTypes = {
        mainTitle: PropTypes.string,
        mainIcon: PropTypes.string,
        leftTitle: PropTypes.string,
        leftIcon: PropTypes.string,
        rightTitle: PropTypes.string,
        rightIcon: PropTypes.string,
        clickLeftView:PropTypes.func,
        clickRightView:PropTypes.func
    };
    
    static defaultProps = {
        mainTitle: '',
        mainIcon: '',
        leftTitle: '',
        leftIcon: '',
        rightTitle: '',
        rightIcon: '',
        clickLeftView(){},
        clickRightView(){}
    };
    
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this._renderLeftView()}
                {/*中间*/}
                {this._renderCenterView()}
                {/*右边*/}
                {this._renderRightView()}
            </View>
        );
    }

    /**
     * 左边的视图
     * @returns {XML}
     * @private
     */
    _renderLeftView(){
        var tempCom;
        if(this.props.leftIcon == '' && this.props.leftTitle !== ''){ //文字
            tempCom = <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>;
        }else{
            if(this.props.leftIcon !== ''){
                tempCom = <Image source={{uri: this.props.leftIcon}} style={{width:24, height:24}}/>
            }else {
                tempCom = <View />
            }
        }

        return(
            <TouchableOpacity
                style={styles.leftViewStyle}
                onPress={()=>this.props.clickLeftView()}
            >
                {tempCom}
            </TouchableOpacity>
        )
    }


    /**
     * 中间的视图
     * @returns {XML}
     * @private
     */
    _renderCenterView(){
        var tempCom;
        if(this.props.mainIcon == '' && this.props.mainTitle !== ''){ //文字
            tempCom = <Text style={styles.navMainTitleStyle}>{this.props.mainTitle}</Text>;
        }else{
            if(this.props.mainIcon !== ''){
                tempCom = <Image source={{uri: this.props.mainIcon}} style={{width:54, height:27}}/>
            }else {
                tempCom = <View />
            }
        }

        return(
            <View style={styles.centerViewStyle}>
                {tempCom}
            </View>
        )
    }

    /**
     * 右边的视图
     * @returns {XML}
     * @private
     */
    _renderRightView(){
        var tempCom;
        if(this.props.rightIcon == '' && this.props.rightTitle !== ''){ //文字
            tempCom = <Text style={styles.leftTitleStyle}>{this.props.rightTitle}</Text>;
        }else{
            if(this.props.rightIcon !== ''){
                tempCom = <Image source={{uri: this.props.rightIcon}} style={{width:54, height:27}}/>
            }else {
                tempCom = <View />
            }
        }

        return(
            <TouchableOpacity
                onPress={()=>this.props.clickRightView()}
                style={styles.rightViewStyle}
            >
                {tempCom}
            </TouchableOpacity>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width:Util.screen.width,
        height:Util.navHeight,
        flexDirection:'row',

        // 下边线
        borderBottomColor: '#ccc',
        borderBottomWidth: Util.minPixelRatio * 2
    },

    leftViewStyle:{
        height:Util.navHeight,
        // backgroundColor:'red',
        flex:1,
        paddingTop:Util.statusBarHeight,
        paddingLeft:10,

        justifyContent:'center',
        alignItems:'flex-start'
    },

    centerViewStyle:{
        height:Util.navHeight,
        // backgroundColor:'green',
        flex:3,
        paddingTop:Util.statusBarHeight,

        justifyContent:'center',
        alignItems:'center'
    },

    navMainTitleStyle:{
       fontSize:20,
       fontWeight:'bold'
    },

    rightViewStyle:{
        height:Util.navHeight,
        // backgroundColor:'purple',
        flex:1,
        paddingTop:Util.statusBarHeight,
        paddingRight:10,
        justifyContent:'center',
        alignItems:'flex-end'
    },

    leftTitleStyle:{
        fontSize:16,
        color:"#000"
    }
});


module.exports = CDCommonNav;

