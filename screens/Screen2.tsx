import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ReactDice from 'react-dice-complete';


type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Screen2"
>


export default class Dice extends React.Component {
  reactDice: any;
  
  render() {
    
    return (
      <div>
        <ReactDice
          numDice={2}
          rollDone={this.rollDoneCallback}
          ref={(dice: any) => this.reactDice = dice}
        />
      </div>
    )
  }
 
  rollAll() {
    this.reactDice.rollAll()
  }
 
  rollDoneCallback(num: Number) {
    console.log(`You rolled a ${num}`)
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 42,
      },
})

