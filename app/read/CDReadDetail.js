
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';



export default class  extends Component {
    render() {
        return (
            <View style={styles.container}>
               <TouchableOpacity onPress={()=>this.props.navigator.pop()}> 
                <Text style={styles.welcome}>
                  新闻详情
                </Text>
               </TouchableOpacity>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
