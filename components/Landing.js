import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'
import  Logo from '../assets/images/Logo.jpeg'
import Styles from '../styles/styles'

export default class Landing extends Component {
  render(){
    return (
      <View style={Styles.container}>
        <Image source={Logo} style={Styles.imageStyle} />
        <Text>Hello I'm here !!</Text>
        <Button
          title="Click to go to next view"
          onPress={() => this.props.switchScreen('show')}
        />
      </View>
    )
  }
}