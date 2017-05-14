
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform, 
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';

import Reading from './../read/CDRead';
import Parking from './../park/CDPark';
import Discover from './../discover/CDDiscover';
import Mine from './../mine/CDMine';

export default class extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'reading'
        };
      }

    render() {
        return (
            <TabNavigator>
                {/*畅读*/}
                {this._renderItem('阅读', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'reading', <Reading {...this.props}/>, '')}
                {/*公园*/}
                {this._renderItem('公园', 'icon_tabbar_nearby_normal', 'icon_tabbar_nearby_selected', 'discover', 'parking', <Parking {...this.props}/>, '')}
                {/*发现*/}
                {this._renderItem('发现', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', <Discover {...this.props}/>, '')}
                {/*我的*/}
                {this._renderItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', <Mine {...this.props}/>, '10')}
            </TabNavigator>
        );
    }

    /**
     * 子Item
     * @param {string} title  标题
     * @param {string} renderIcon 图标
     * @param {string} renderSelectedIcon 选中的图标
     * @param {string} selectedTab 选中索引
     * @param {object} component 组件
     * @param {string} badgeText
     * @returns {XML}
     * @private
     */
    _renderItem(title, renderIcon, renderSelectedIcon, selectedTab, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}
                selectedTitleStyle = {styles.titleStyle}
                renderIcon={() => <Image source={{uri: renderIcon}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: renderSelectedIcon}} style={styles.iconStyle}/>}
                renderBadge={()=>this._renderBadge(badgeText)}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
                {component}
            </TabNavigator.Item>
        )
    }

    _renderBadge(badgeText){
        if(badgeText == '') return <View />;

        return(
            <View style={styles.badgeViewStyle}>
                <Text style={styles.badgeTextStyle}>{badgeText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    badgeViewStyle:{
        width:18,
        height:18,
        backgroundColor:'red',
        borderRadius:9,
        justifyContent:'center',
        alignItems:'center',

        position:'absolute',
        top:Platform.OS == 'ios' ? -6 : -3
    },

    badgeTextStyle:{
        backgroundColor:'transparent',
        color:'#fff'
    },

    titleStyle:{
        color: 'rgba(62, 184, 175, 1)',
    },

    iconStyle:{
        width:26,
        height:26
    }
});
