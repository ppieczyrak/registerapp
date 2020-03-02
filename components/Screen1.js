import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


export class Screen1 extends Component {
    static navigationOptions = {
        header: null,
        title: "any title",
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
            passwd: '',
            username: ''
        };

        this.Send = this.Send.bind(this)
        this.Read = this.Read.bind(this)
        //this.Send()


    }
    Send() {
        console.log("user: ", this.state.username)
        console.log("pass: ", this.state.passwd)
        fetch('http://192.168.8.105:3000/posthethod', {
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
    Read() {
        fetch('http://192.168.8.105:3000/getdata', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            })

    }
    render() {
        return (

            <View style={style.container}>
                <View style={style.top}>
                    <Text style={style.text}>Register Node App</Text>
                </View>

                <View style={style.bot}>
                    <Text>username</Text>
                    <TextInput
                        style={style.textinput}
                        placeholder="username"
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}

                    />
                    <Text>password</Text>
                    <TextInput
                        style={style.textinput}
                        placeholder="password"
                        onChangeText={(passwd) => this.setState({ passwd })}
                        value={this.state.passwd}

                    />
                </View>

                <TouchableOpacity
                    style={style.button1}
                    onPress={() => this.Send()}
                >
                    <Text>Register</Text>
                </TouchableOpacity>


            </View>

        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,


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
    button1: {
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor: "pink",
        
    },
    button2: {
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor: "orange",
        
    },
})


export default Screen1
