import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'




export class Screen2 extends Component {
    
    static navigationOptions = {

        title: "admin page",
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
            index: '',
            list:this.props.navigation.state.params.Lista,
        };
        this.Send=this.Send.bind(this)
        this.Read=this.Read.bind(this)
        this.Delete=this.Delete.bind(this)
        //this.Send()
        this.Read()
        console.log(this.props.navigation.state.params.Lista)

        // console.log(this.props.navigation.state.params.passwd)
    }
    Send(){
        
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

    }
    Delete(user){
        console.log(user)
        fetch('http://192.168.8.105:3000/delete', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },body:JSON.stringify({
                username: user,
            })
          })
          .then((response) => response.json())
    .then((responseJson) => {
        this.setState({ list:responseJson })
      console.log(responseJson);
    })

    }
    render() {
       
        return (
            <View style={style.container}>
                {/* <Button
                   
                    title="Back to login page"
                    onPress={() => this.props.navigation.navigate("s1")}
                /> */}
                <FlatList
                    keyExtractor={(item, index) => item + index}
                    data={
                        this.state.list
                    }
                    extraData={this.state}

                    renderItem={({ item,index }) => 
                    <View style={style.row}>
                        <Image
                        style={{width: 50, height: 50}}
                        source={require('./img.png')}
                            />
                        
                        <Text style={{ flex: 1,}} >{index+1+': '+item.username}</Text>
                        <Text style={{ flex: 1 }} >{item.password}</Text>
                        
                        <TouchableOpacity 
                            style={{ flex: 1 }} 
                            onPress={() => this.props.navigation.navigate("s3",{name: item.username,pass: item.password})}
                            >

                            <Text> Edytuj </Text>

                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{ flex: 1 }} 
                            onPress={()=>this.Delete(item.username)}
                            
                            >

                            <Text> Usuń </Text>

                        </TouchableOpacity>
                    </View>}

                />
                
               
                
            </View>

        )
        
    }
}
const style = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        

    },
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
    button: {
        backgroundColor: "pink",
        color: "red",
    },
})

export default Screen2
