
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';
import Util from './../util/Util';
import CDArticleDetail from './CDArticleDetail';


const cols = 3, boxW = 105;
const vMargin = (Util.screen.width - cols * boxW) / (cols +1);
const hMargin = 15;


export default class CDReadNewThemeListView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
      }

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>最新专题</Text>
                </View>
                {/*下部分*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    contentContainerStyle={styles.contentContainerStyle}
                />
            </View>
        );
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.items)
        });
    }


    /**
     * 返回具体的行的视图
     * @param rowData 数据
     * @private
     */
    _renderRow(rowData){
        return(
            <TouchableOpacity style={styles.cellStyle} onPress={()=>this._pushToArticleDetail(rowData.aticleSrc)}>
                <Image
                    source={{uri: rowData.img}}
                    defaultSource={require('./../../images/placeholder_big.png')}
                    style={styles.imgStyle}
                />
                <Text
                    numberOfLines={2}
                    style={{marginBottom:5, marginTop:5, lineHeight:20}}
                >
                    {rowData.title}
                </Text>
                <Text
                    style={{fontSize:13, color:'#666'}}
                >{rowData.intro}</Text>
            </TouchableOpacity>
        )
    }

    /**
     * 跳转到文章的详情
     * @param {string} url
     * @private
     */
    _pushToArticleDetail(url){
        this.props.navigator.push({
            component:CDArticleDetail,
            props:{url}
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop:20
    },

    topViewStyle:{
        height:44,
        borderBottomWidth:Util.minPixelRatio,
        borderBottomColor:'#ccc',
        justifyContent:'center',
        alignItems:'center'
    },

    imgStyle:{
        width:boxW,
        height:boxW + 30,
        backgroundColor:'#ccc'
    },

    contentContainerStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 换行
        flexWrap:'wrap'
    },

    cellStyle:{
        width:boxW,
        // backgroundColor:'red',
        marginLeft: vMargin,
        marginTop: hMargin
    }
});


module.exports = CDReadNewThemeListView;
