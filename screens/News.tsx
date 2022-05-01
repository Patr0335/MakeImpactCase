import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";

import { View, Text, StyleSheet } from "react-native"

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "News"
>;

export default function News() {

    return (
        <View>
            <Text>This is the News page</Text>
        </View>
     );
    }

    const styles = StyleSheet.create({
 
    });