
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

// 引入字体
import Icon from 'react-native-vector-icons/Ionicons';


export default class CDReadBannerView extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                style={styles.scrollViewStyle}
                showsHorizontalScrollIndicator={false}
            >
                {
                 this.props.items.map((value, index)=>{
                     return(
                         <TouchableOpacity
                             key={index}
                             style={styles.innerViewStyle}
                             onPress={()=>alert(value.title)}
                         >
                             <Icon name={value.icon} size={50} />
                             <Text>{value.title}</Text>
                         </TouchableOpacity>
                     )
                 })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle:{
        backgroundColor:'#fff',
        padding:10
    },

    innerViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        margin:10
    }
});


module.exports = CDReadBannerView;
