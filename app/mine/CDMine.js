
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import Util from './../util/Util';
import CDMineListView from './CDMineListView';
import CDMineSettingView from './CDMineSettingView';

var listDataArr = require('./Mine/listData.json').data;

export default class extends Component {
    render() {
        return (
            <CDMineListView
                dataArr={listDataArr}
                clickCell={this._dealWithCellClick.bind(this)}
                headerView={this._renderHeaderView()}
                insetHeight={300}
            />
        );
    }


    _renderHeaderView(){
        return (
            <View style={styles.headerViewStyle}>
                <Image source={require('./../../images/mine.png')} style={styles.headerImgStyle}>
                     <TouchableOpacity style={styles.userStyle}>
                          <Image source={require('./../../images/person.png')} style={styles.iconStyle}/>
                          <Text style={{backgroundColor:'transparent', color:'#fff'}}>未登录用户</Text>
                     </TouchableOpacity>
                </Image>
            </View>
        )
    }

    _dealWithCellClick(sectionID, rowID){
       
        switch (sectionID){
            case 0:
                switch(rowID){
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        alert('点击了第' + sectionID + '组中的第' + rowID + '行');
                }
                break;
            case 1:
                switch(rowID){
                    case 0:
                    case 1:
                    case 2:
                        alert('点击了第' + sectionID + '组中的第' + rowID + '行');
                        break;
                    case 3:
                        this.props.navigator.push({component:CDMineSettingView})
                }
                break;
        }
    }
}

const styles = StyleSheet.create({
    headerViewStyle:{
    },

    headerImgStyle:{
        width:Util.screen.width,
        height:Platform.OS === 'ios' ? Util.screen.height * 0.8 : Util.screen.height * 0.4,
    },

    userStyle:{
        width:100,
        height:100,
        position:'absolute',
        bottom:30,
        left: (Util.screen.width - 100) / 2,

        justifyContent:'center',
        alignItems:'center'
    },

    iconStyle:{
        width:60,
        height:60,
        marginBottom:5
    }
});
