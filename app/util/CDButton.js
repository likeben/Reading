
import React, { Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class CDButton extends Component {
    static propTypes = {
        clickBtn: PropTypes.func,
        btnStyle: View.propTypes.style,
        btnInnerTextStyle:Text.propTypes.style,
        title: PropTypes.string,
        bgImage:PropTypes.func
    };
    
    static defaultProps = {
        clickBtn(){},
        bgImage(){}
    };
    
    
    render() {
        return (
           <TouchableOpacity
               style={[styles.btnViewStyle, this.props.btnStyle]}
               onPress={()=>this.props.clickBtn()}
           >
               {this.props.bgImage()}
               <Text style={[styles.btnTextStyle, this.props.btnInnerTextStyle]}>{this.props.title}</Text>
           </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnViewStyle:{
        backgroundColor:'blue',
        width:120,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },

    btnTextStyle:{
        color:'#fff',
        fontSize:16,
        backgroundColor:'transparent'
    }
});


module.exports = CDButton;
