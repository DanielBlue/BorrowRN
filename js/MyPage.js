import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class MyPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ToolBar/>
            </View>
        )
    }
}

class ToolBar extends Component {
    render() {
        return (
            <View style={styles.toolbar}>
                <Text style={styles.title}>个人中心</Text>
            </View>
        )
    }
}

// class Header extends Component{
//     render(){
//         return(
//
//         )
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        backgroundColor: '#F5FCFF'
    },
    toobar: {
        height: 50,
    },
    title: {
        color: '#fff',
        textAlignVertical: "center",
        height: 50,
        fontSize: 20,
        backgroundColor:'blue',
        textAlign:'center'
    }
})
export {MyPage}