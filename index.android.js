/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import CDLaunchPage from './app/main/CDLaunchPage';

import NavigationExperimental from 'react-native-deprecated-custom-components';

export default class Reading extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'launchPage', component: CDLaunchPage }}
                configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.props} navigator={navigator} />
                }}
            />
        );
    }
}

AppRegistry.registerComponent('Reading', () => Reading);