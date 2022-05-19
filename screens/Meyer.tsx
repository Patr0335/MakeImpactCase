import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";

import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native"

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Meyer"
>;

export default function Invest() {

    return (
      <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <View>
            <Text>This is the Invest page</Text>
        </View>
        </ImageBackground>
     );
    }

    const styles = StyleSheet.create({
 
      background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    });