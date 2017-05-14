
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    PixelRatio,
    Platform
} from 'react-native';


module.exports = {
   // 获取屏幕相关的属性 
   screen: {
       width: Dimensions.get('window').width,
       height: Dimensions.get('window').height,
       scale: Dimensions.get('window').scale
   },

   // 最小线宽
   minPixelRatio: 1 / PixelRatio.get(),

   // 请求网络数据
   get:(api_url, successBack, failureBack)=>{
       fetch(api_url)
           .then((response)=>response.json())
           .then((responseJson)=>{
               successBack(responseJson);
           })
           .catch((error)=>{
               failureBack(error);
           })
   },
    
   // 导航栏的高度
   navHeight: Platform.OS === 'ios' ? 64: 44,
    
   // 状态栏的高度
   statusBarHeight: Platform.OS === 'ios' ? 20: 0,
    
   bgColor: '#e8e8e8',
    
   // 行的高度
   cellHeight: 44 
};
