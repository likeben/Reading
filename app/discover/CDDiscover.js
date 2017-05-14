
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import Util from './../util/Util';
import CDCommonNav from './../util/CDCommonNav';
import CDDiscoverCell1 from './CDDiscoverCell1';
import CDDiscoverCell2 from './CDDiscoverCell2';
import CDDiscoverCell3 from './CDDiscoverCell3';

const discoverDataArr = require('./localData/discoverData.json').data;


export default class extends Component {

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
            <View style={styles.container}>
                {/*导航条*/}
                <CDCommonNav
                    mainIcon="discover"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderSectionHeader={this._renderSectionHeader.bind(this)}
                    renderRow={this._renderRow.bind(this)}
                    stickySectionHeadersEnabled={false}
                />
            </View>
        );
    }

  
    _renderSectionHeader(sectionData){
        if(sectionData.sType == 1){ 
           return <CDDiscoverCell1 rowData={sectionData}/>
        }else { 
           return <View style={{height: sectionData.height}}/>
        }
    }

    _renderRow(rowdata){
       if(rowdata.type == 0){
           return <CDDiscoverCell1 rowData={rowdata}/>
       }else if(rowdata.type == 1){
           return <CDDiscoverCell2 rowData={rowdata}/>
       }else{
           return <CDDiscoverCell3 rowData={rowdata} {...this.props}/>
       }
    }

    componentDidMount() {
        
        const dataArr = discoverDataArr;

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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.bgColor,
    },
});
