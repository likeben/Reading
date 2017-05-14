
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    TouchableOpacity,
    Image
} from 'react-native';

import Video from 'react-native-video';
import Util from './../util/Util';


export default class CDDiscoverVideoView extends Component {
    render() {
        return (
          <View style={{flex:1}}>
              <Video
                  source={{uri: this.props.video, mainVer: 1, patchVer: 0}}
                  ref={(ref) => {
                     this.player = ref
                   }}                                      // Store reference
                  rate={1.0}                              // 0 is paused, 1 is normal.
                  volume={1.0}                            // 0 is muted, 1 is normal.
                  muted={false}                           // Mutes the audio entirely.
                  paused={false}                          // Pauses playback entirely.
                  resizeMode="contain"                      // Fill the whole screen at aspect ratio.*
                  repeat={true}                           // Repeat forever.
                  playInBackground={false}                // Audio continues to play when app entering background.
                  playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                  ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                  progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                  onLoadStart={this.loadStart}            // Callback when video starts to load
                  onLoad={this.setDuration}               // Callback when video loads
                  onProgress={this.setTime}               // Callback every ~250ms with currentTime
                  onEnd={this.onEnd}                      // Callback when playback finishes
                  onError={this.videoError}               // Callback when video cannot be loaded
                  onBuffer={this.onBuffer}                // Callback when remote video is buffering
                  onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                  style={styles.backgroundVideo} />

              <TouchableOpacity style={styles.backViewStyle} onPress={()=>this.props.navigator.pop()}>
                   <Image source={{uri: 'tnwifi_back_black'}} style={{width:30, height:30}}/>
              </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        width:Util.screen.width,
        height:Util.screen.height * 0.4,
    },

    backViewStyle:{
        position:'absolute',
        left:10,
        top:10
    }
});


module.exports = CDDiscoverVideoView;
