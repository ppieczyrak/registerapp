import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        // <TouchableOpacity>
        // <Text> MyButton </Text>
        // </TouchableOpacity>

        <Button
            title="go to screen2"
            onPress={() => this.props.navigation.navigate("s2")}
        />
    );
  }
}

export default MyButton;
