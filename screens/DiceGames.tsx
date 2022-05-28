import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Box from "../components/DiceGameContainer"

import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Constants from "expo-constants";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "DiceGames"
>;


export default function DiceGames() {
  const navigation = useNavigation<ScreenNavigationType>();

  return (

    <View style={{ height: '100%', width: '100%' }}>
      <ImageBackground
        source={require("../assets/dicebackground.jpg")}
        style={{}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.header}>Dice Games</Text>
            <View style={styles.container}>
              <Box title="Liar's Dice 🎲" img={require("../assets/Liar_dice.jpg")} onPress={() => console.log()} style={""} />
              <Box title="Meyer 🎲" img={require("../assets/meyer.jpg")} onPress={() => navigation.navigate("Meyer")} style={""} />
              <Box title="Yatzy 🎲" img={require("../assets/yatzy.jpg")} onPress={() => console.log()} style={""} />
              <Box title="10.000 🎲" img={require("../assets/10000.jpg")} onPress={() => console.log()} style={""} />
              <Box title="Bunco 🎲" img={require("../assets/bunco.jpg")} onPress={() => console.log()} style={""} />
              <Box title="Shut the Box 🎲" img={require("../assets/shutthebox.jpg")} onPress={() => console.log()} style={""} />
              <Box title="Beat That 🎲" img={require("../assets/beatthat.jpg")} onPress={() => console.log()} style={""} />
              <Box title="Hygge terninger 18+⚠️" img={require("../assets/hyggeterninger.jpg")} onPress={() => console.log()} style={""} />

            </View>
          </SafeAreaView>
        </ScrollView>
      </ImageBackground>
      {/* <SectorImage /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    color: "#fff",
    zIndex: 10,
    marginTop: Constants.statusBarHeight + 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    margin: 10,
    marginTop: 0,
    paddingTop: 0,
    padding: 20,
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
  },
});