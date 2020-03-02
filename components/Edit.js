import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'

class Edit extends Component {
    static navigationOptions = {

        title: "lista",
        headerStyle: {
            backgroundColor: "#ff0000",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    Show() {
        console.log("user: ", this.state.username)
        console.log("pass: ", this.state.passwd)
        fetch('http://192.168.8.105:3000/show', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.passwd,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                if (typeof (responseJson) == 'object') {
                    this.props.navigation.navigate("s2", { Lista: responseJson })
                }
                else alert("USEREXISTS")
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.container}></View>
                <View style={style.box}>
                    <Image
                    style={{ width: 150, height: 150 }}
                    source={require('./img.png')}
                />
                    <Text> {this.props.navigation.state.params.name} </Text>
                    <Text>{this.props.navigation.state.params.pass} </Text>
                    </View>
                <View style={style.container}></View>


            </View>
        );
    }
}

const style = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "blue"

    },
    container: {
        flex: 1,
        


    },
    box:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    top: {
        flex: 1,
        backgroundColor: '#ffff00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bot: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 48,
        color: "red"
    },
    textinput: {
        color: "black",
        fontSize: 20,
    },
    button: {
        backgroundColor: "pink",
        color: "red",
    },
})

export default Edit;
