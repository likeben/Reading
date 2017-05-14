
import React, { Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';


export default class CDDiscoverCell2 extends Component {
    static propTypes = {
        rowData: PropTypes.object,
    };

    render() {
        return (
            <ScrollView
                horizontal={true}
                style={{backgroundColor:'#fff', padding:15}}
                showsHorizontalScrollIndicator={false}
            >
                {this._renderItem()}
            </ScrollView>
        );
    }
    
    _renderItem(){

        const content = this.props.rowData.content;
        var itemArr = [];

        content.forEach((value, index)=>{
            itemArr.push(
               <TouchableOpacity key={index} onPress={()=>alert(index)}>
                <Image
                    source={{uri: value.img}}
                    defaultSource={require('./../../images/placeholder_big.png')}
                    style={styles.imgStyle}
                />
               </TouchableOpacity>
            )
        });

        return itemArr;
    }
}

const styles = StyleSheet.create({

    imgStyle:{
        width: 150,
        height:90,
        marginRight:15,
        borderRadius:5
    }

});


module.exports = CDDiscoverCell2;
