import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import Util from './../util/Util';
import CDArticleDetail from './CDArticleDetail';


export default class extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <Swiper
                showsButtons={false}
                style={{backgroundColor:'#fff'}}
                height={Util.screen.width * 0.5}
                showsPagination={false}
                loop={true}
            >
                {this.props.items.map((item, key) => {
                    return (
                        <TouchableOpacity 
                            key={key} 
                            activeOpacity={0.5}
                            onPress={()=>this._pushToDetailView(item.url)}
                        >
                            <Image
                                source={{uri: item.image}}
                                defaultSource={require('./../../images/placeholder_big.png')}
                                style={styles.imgStyle}
                            />
                        </TouchableOpacity>
                    )
                })}
            </Swiper>
        )
    }

    _pushToDetailView(url){
        this.props.navigator.push({
             component:CDArticleDetail,
             props: {url}
        });
    }
}

const styles = {
    imgStyle:{
        width: Util.screen.width,
        height: Util.screen.width * 0.5
    }
};
