
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import ReadDetail from './CDReadDetail';
import CDCommonNav from './../util/CDCommonNav';
import Util from './../util/Util';
import CDReadTopView from './CDReadTopView';
import CDReadBannerView from './CDReadBannerView';
import CDReadLoginView from './CDReadLoginView';
import CDReadThemeView from './CDReadThemeView';
import CDReadNewThemeListView from './CDReadNewThemeListView';
import CDMineSettingView from '../mine/CDMineSettingView';

const topDataArr = require('./localData/TopData.json');
const bannerDataArr = require('./localData/BannerData.json');
const themeDataObj = require('./localData/TheamData.json');
const myReadingObj = require('./localData/MyReading.json');


export default class Reading extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render() {
        return (
            <View style={styles.container}>
              {/*导航条*/} 
              <CDCommonNav
                  mainIcon="reading"
                  leftTitle="扫一扫"
                  rightTitle="设置"
                  clickLeftView={()=>{alert('点击了左边')}}
                  clickRightView={()=>{this.props.navigator.push({component: CDMineSettingView})}}
              />  
              <ScrollView>
                  {/*焦点图*/}
                  <CDReadTopView items={topDataArr} {...this.props}/>
                  {/*工具视图*/}
                  <CDReadBannerView items={bannerDataArr} {...this.props}/>
                  {/*登录视图*/}
                  <CDReadLoginView {...this.props}/>
                  {/*专题视图*/}
                  <CDReadThemeView  items={themeDataObj} {...this.props}/>
                  {/*最新专题视图*/}
                  <CDReadNewThemeListView items={myReadingObj} {...this.props}/>
              </ScrollView>
            </View>
        );
    }

    _pushToNewsDetail(){
        this.props.navigator.push({
            component: ReadDetail
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
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
});
