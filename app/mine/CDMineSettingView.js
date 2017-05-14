
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Util from './../util/Util';
import CDCommonNav from './../util/CDCommonNav';
import CDMineListView from './CDMineListView';



const settingDataArr = require('./Mine/settingData.json').data;

export default class CDMineSettingView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CDCommonNav
                    mainTitle="设置中心"
                    leftIcon="btn_backitem"
                    clickLeftView={()=>this.props.navigator.pop()}
                />
                <CDMineListView
                    dataArr = {settingDataArr}
                    footerView={this._renderFooterView()}
                />
            </View>
        );
    }

    _renderFooterView(){
        return(
           <TouchableOpacity style={styles.footerViewStyle}>
               <Text style={{color:'red', fontSize:18}}>立即登录</Text>
           </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    footerViewStyle:{
        height:44,
        width:Util.screen.width,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    }
});


module.exports = CDMineSettingView;
