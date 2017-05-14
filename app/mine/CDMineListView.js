
import React, { Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    Switch
} from 'react-native';

import Util from './../util/Util';
import CDMineListCell from './CDMineListCell';


export default class CDMineListView extends Component {
    static propTypes = {
        dataArr: PropTypes.array,
        clickCell: PropTypes.func,
        headerView: PropTypes.object,
        footerView: PropTypes.object,
        insetHeight: PropTypes.number
    };
    
    static defaultProps = {
        clickCell(){},
        insetHeight: 0
    };

   
    constructor(props) {
        super(props);

          var getSectionData = (dataBlob, sectionID)=>{
              return dataBlob[sectionID];
          };

          var getRowData = (dataBlob, sectionID, rowID)=>{
              return dataBlob[sectionID + ':' + rowID];
          };

        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged:(r1, r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1, s2) => s1 !== s2
            })
        };
      }
    
    render() {
        return (
           <ListView
               dataSource={this.state.dataSource}
               renderHeader={this._renderHeader.bind(this)}
               renderSectionHeader={this._renderSectionHeader.bind(this)}
               renderRow={this._renderRow.bind(this)}
               renderFooter={this._renderFooter.bind(this)}
               style={styles.listViewStyle}
               contentInset={{top: -this.props.insetHeight}}
               contentOffset={{y: this.props.insetHeight}}
           />
        );
    }

    componentDidMount() {
     
       const dataArr = this.props.dataArr;
        
       var dataBlob = {}, sectionIDs = [], rowIDs = [], rowArr = [];
        
       
        dataArr.forEach((value, index)=>{
         
             sectionIDs.push(index);
   
             dataBlob[index] = value.sData;

             rowArr = value.rData;
             
             rowIDs[index] = [];
            
            rowArr.forEach((item, i) =>{
                rowIDs[index].push(i);
                dataBlob[index + ':' + i] = item;
            })
        });

        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });

    }


    _renderHeader(){
        if(this.props.headerView !== undefined){
            return this.props.headerView;
        }else {
            return <View />
        }

    }


    _renderSectionHeader(sectionData){
        if(sectionData.title != ''){
            return (
                <View style={[{height: sectionData.height}, styles.sectionHeaderStyle]}>
                    <Text>{sectionData.title}</Text>
                </View>
            )
        }else {
            return <View style={{height: sectionData.height}}/>
        }
    }


    _renderRow(rowData, sectionID, rowID){
         return(
             <CDMineListCell
                 rowData={rowData}
                 clickCell={()=>this.props.clickCell(sectionID, rowID)}
             />
         )
    }


    _renderFooter(){
        if(this.props.footerView !== undefined){
            return this.props.footerView;
        }else {
            return <View />
        }
    }

}

const styles = StyleSheet.create({
    listViewStyle:{
        backgroundColor: Util.bgColor
    },

    sectionHeaderStyle:{
        justifyContent:'center',
        paddingLeft:10
    }
});


module.exports = CDMineListView;
