import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    Text,
    ListView,
    View
} from 'react-native';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=>row1 !== row2,
            })
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Top/>
                <RadioGroup/>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={[{fontSize:25}]}>{rowData==null?"":rowData.loan_title}</Text>}
                />
            </View>
        );
    }

    componentDidMount() {
        fetch('https://licai.hjd360.com/new/search/index')
            .then((response) => response.json())//回调结果，并转换为json对象 es6写法
            .then((responseJson) => {
                this.state.dataSource.cloneWithRows(responseJson.data.list);
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error); //网络请求出现错误，或者getMoviesFromApiAsync 函数调用者自身出现错误都会被这里catch住
            });
    }
}

class Top extends Component {
    render() {
        return (
            <Image style={styles.img_bg}
                   source={require('.././img/background_sidebars.jpg')}>
                <View>
                    <View style={styles.input_wrap}>
                        <TextInput style={styles.input_borrow}
                                   underlineColorAndroid={'transparent'}
                                   placeholder="请输入贷款金额">
                        </TextInput>
                        <Text style={styles.blue_text}>万</Text>
                        <Text style={styles.apply_button}>极速申请</Text>
                    </View>
                </View>
            </Image>
        )
    }
}
class RadioGroup extends Component{

    _renderTab(url,title){
        return(
            <View style={styles.loan_tab}>
                <Image style={styles.loan_tab_img}
                       source={url}/>
                <Text style={styles.loan_tab_text}>{title}</Text>
            </View>
        )
    }

    render(){
        return(
            <View
                style={[{flexDirection: "row"}, {backgroundColor: 'white'}, {height: 90}, {alignItems: "center"}]}>
                {this._renderTab(require('.././img/woyoufangdaithsi.png'),'我有房贷')}
                {this._renderTab(require('.././img/woyoufangchanthis.png'),'我有房产')}
                {this._renderTab(require('.././img/woyougongzuothis.png'),'我有工作')}
                {this._renderTab(require('.././img/woxinyongghaothis.png'),'我信用好')}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#F5FCFF',
    },
    img_bg: {
        height: 200,
        width: 360,
        justifyContent: "flex-end"
    },
    input_wrap: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        flexDirection: "row"
    },
    input_borrow: {
        width: 220,
        paddingTop: 10,
        paddingLeft: 50,
        backgroundColor: "#fff",
        flexDirection: "row",
        // justifyContent: "flex-end",
    },
    blue_text: {
        color: 'blue',
        backgroundColor: '#fff',
        textAlignVertical: "center",
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 5
    },
    apply_button: {
        width: 60,
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 11,
        paddingLeft: 5,
        paddingRight: 5,
        textAlignVertical: "center",
        textAlign: "center",
    },
    loan_tab: {
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    loan_tab_img: {
        height: 40,
        width: 40,
        marginBottom: 5
    },
    loan_tab_text: {
        fontSize: 11,
    }
});