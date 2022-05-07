import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BigBox from '../components/BigBox';
import { useDispatch } from 'react-redux';
import { logout } from '../src/store/actions/user.actions';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "HomePage"
>

export default function HomePage() {
  const navigation = useNavigation<ScreenNavigationType>();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      

      <TouchableOpacity
        style={styles.clickableButton}
        onPress={() => navigation.navigate('DiceGames')}
      >
        <Text>Dice Games</Text>
      </TouchableOpacity>
      </View>
      <View> 
      <Button title="Logout" onPress={() => dispatch(logout())} />
        <Text style={styles.title}>
        </Text>
      </View>
      <BigBox/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    buttonContainer: {
      backgroundColor: "#f2f2f4",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      borderRadius: 20,
      marginTop: 20,
    },
    text: {
        fontSize: 42,
      },
      clickableButton: {
        alignItems: "center",
        backgroundColor: "#f2f2f4",
        padding: 10,
        borderRadius: 20,
      },
      nonClickableButton: {
        alignItems: "center",
        backgroundColor: '#303037',
        padding: 10,
        color: '#fafafd',
        borderRadius: 20,
      },
      explore: {
        color: 'white'
      },
      title: {
        fontSize: 30,
        alignContent: "center"
      }
})