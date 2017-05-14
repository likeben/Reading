
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import CDCommonNav from './../util/CDCommonNav';
import Util from './../util/Util';
import CDArticleDetail from './CDArticleDetail';


export default class CDReadThemeListView extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
      }


    render() {
        return (
            <View style={styles.container}>
                <CDCommonNav
                    mainTitle="专题列表"
                    leftIcon="btn_backitem"
                    clickLeftView={()=>this.props.navigator.pop()}
                />
                <ListView
                    style={{backgroundColor:Util.bgColor}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        );
    }

    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.props.dataArr)
        })
    }

    _renderRow(rowData){
        return(
            <TouchableOpacity style={styles.cellStyle} onPress={()=>this._pushToArticleDetail(rowData.article_link)}>
                <Image
                    source={{uri: rowData.img_url}}
                    defaultSource={require('./../../images/placeholder_big.png')}
                    style={styles.imageStyle}
                />
                <View style={{justifyContent:'space-around', flex:1}}>
                    <Text
                        style={styles.mainTitleStyle}
                        numberOfLines={2}
                    >
                        {rowData.title}
                    </Text>
                    <Text style={styles.subTitleStyle}>{rowData.author}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _pushToArticleDetail(url){
        this.props.navigator.push({
            component: CDArticleDetail,
            props: {url}
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    cellStyle:{
        backgroundColor:'#fff',
        flexDirection:'row',
        padding:15,

        borderBottomColor:'#ccc',
        borderBottomWidth: Util.minPixelRatio
    },

    imageStyle:{
        width:120,
        height:90,
        marginRight:15
    },

    mainTitleStyle:{
        fontSize:16,
        fontWeight:'bold'
    },

    subTitleStyle:{
        color:'red'
    }
});


module.exports = CDReadThemeListView;
