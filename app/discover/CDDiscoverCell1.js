
import React, { Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Util from './../util/Util';


export default class CDDiscoverCell1 extends Component {
    static propTypes = {
        rowData: PropTypes.object
    };
    
    render() {
        const rowData = this.props.rowData;
        return (
            <TouchableOpacity style={[styles.container, {marginTop:rowData.height}]}>
                {/*左边视图*/}
                <View style={styles.leftViewStyle}>
                   <Text style={styles.mainTitleStyle}>{rowData.name}</Text>
                   <Text style={styles.subTitleStyle}>{rowData.disc}</Text>
                </View>
                {/*右边视图*/}
                <View style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_shike_arrow'}} style={{width:7, height:12}}/>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Util.screen.width,
        height:Util.cellHeight,
        backgroundColor: '#FFF',
        borderBottomColor:'#ccc',
        borderBottomWidth: Util.minPixelRatio,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    leftViewStyle:{
        paddingLeft:10,
        flexDirection:'row'
    },

    mainTitleStyle:{
        fontSize:16,
        fontWeight:'bold',
        marginRight:5
    },

    subTitleStyle:{
        fontSize:14,
        color:'#666'
    },

    rightViewStyle:{
       paddingRight:10
    }
});


module.exports = CDDiscoverCell1;
