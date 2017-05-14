
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Switch
} from 'react-native';

import Util from './../util/Util';


export default class CDMineListCell extends Component {
    static propTypes = {
        rowData: PropTypes.object,
        clickCell: PropTypes.func
    };
    
    static defaultProps = {
        clickCell(){}
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            switchSelected: false
        };
      }

    render() {
        const rowData = this.props.rowData;
        return (
            <TouchableOpacity style={styles.cellStyle} onPress={()=>this.props.clickCell()}>
                {/*左边*/}
                {this._renderRowLeftView(rowData)}
                {/*右边*/}
                {this._renderRowRightView(rowData)}
            </TouchableOpacity>
        );
    }

    /**
     * 左边视图
     * @private
     */
    _renderRowLeftView(rowData){
        let temp;
        if(rowData.leftIcon !== ''){ // 有图片
            if(rowData.name !== ''){ // 图片 + 文字
                temp = (
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: rowData.leftIcon}} style={{width:20, height:20, marginRight:5}}/>
                        <Text>{rowData.name}</Text>
                    </View>
                )
            }else { // 图片
                temp = (
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: rowData.leftIcon}} style={{width:20, height:20, marginRight:5}}/>
                    </View>
                )
            }
        }else if(rowData.name !== ''){ // 没有图片有文字
            temp = (
                <View style={styles.leftViewStyle}>
                    <Text>{rowData.name}</Text>
                </View>
            )
        }else { // 没有文字也没有图片
            temp = <View />
        }


        return temp;
    }

    /**
     * 右边视图
     * @private
     */
    _renderRowRightView(rowData){

        let temp;
        if(rowData.disc !== ''){ // 有文字
            if(rowData.disc == 'switch'){ // 开关
                temp = (
                    <View style={styles.rightViewStyle}>
                        <Switch
                            value= {this.state.switchSelected}
                            onValueChange={()=>this.setState({
                               switchSelected: !this.state.switchSelected
                            })}

                        />
                    </View>
                )
            }else { // 不是开关
                temp = (
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'#666', marginRight:5}}>{rowData.disc}</Text>
                        <Image source={{uri: 'icon_shike_arrow'}} style={{width:7, height:12}}/>
                    </View>
                )
            }
        }else { // 没有文字也没有图片
            temp = (
                <View style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_shike_arrow'}} style={{width:7, height:12}}/>
                </View>
            )
        }


        return temp;
    }
}

const styles = StyleSheet.create({
    cellStyle:{
        width:Util.screen.width,
        height:Util.cellHeight,
        backgroundColor:'#fff',
        borderBottomColor:'#ccc',
        borderBottomWidth: Util.minPixelRatio,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    leftViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:10
    },

    rightViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingRight:10
    }
});


module.exports = CDMineListCell;
