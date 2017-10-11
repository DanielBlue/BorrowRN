/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Image,
    Text,
    ListView,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './js/HomePage';
import MyPage from './js/MyPage';
import BorrowPage from './js/BorrowPage';

export default class BorrowRN extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('./././img/home_icon.png')}
                                             resizeMode = "contain"/>}
                    renderSelectedIcon={() => <Image style={styles.icon}
                                                     source={require('./././img/home_selected.png')}
                                                     resizeMode = "contain"/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <HomePage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'borrow'}
                    title="借款"
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('./img/borrow.png')}
                                             resizeMode = "contain"/>}
                    renderSelectedIcon={() => <Image style={styles.icon}
                                                     source={require('./img/borrow_selected.png')}
                                                     resizeMode = "contain"/>}

                    onPress={() => this.setState({selectedTab: 'borrow'})}>
                    <BorrowPage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('./././img/self_icon.png')}
                                             resizeMode = "contain"/>}
                    renderSelectedIcon={() => <Image style={styles.icon}
                                                     source={require('./././img/self_icon_selected.png')}
                                                     resizeMode = "contain"/>}

                    onPress={() => this.setState({selectedTab: 'my'})}>
                    <MyPage/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    icon: {
        width: 25,
        height: 25
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

AppRegistry.registerComponent('BorrowRN', () => BorrowRN);
