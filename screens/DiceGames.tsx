import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SectorImage from "../components/SectorImage";
import Box from "../components/DiceGameContainer"
import { renderNode } from "@rneui/base";
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
              {/* <Text style={styles.text}>Dice Games</Text> */}
              <Box title="Liar's Dice 🎲" img={require("../assets/Liar_dice.jpg")} onPress={() => console.log()}/>
              <Box title="Meyer 🎲" img={require("../assets/meyer.jpg")} onPress={() => navigation.navigate("Meyer")}/>
              <Box title="Yatzy 🎲" img={require("../assets/yatzy.jpg")} onPress={() => console.log()}/>
              <Box title="10.000 🎲" img={require("../assets/10000.jpg")} onPress={() => console.log()}/>
              <Box title="Bunco 🎲" img={require("../assets/bunco.jpg")} onPress={() => console.log()}/>
              <Box title="Shut the Box 🎲" img={require("../assets/shutthebox.jpg")} onPress={() => console.log()}/>
              <Box title="Beat That 🎲" img={require("../assets/beatthat.jpg")} onPress={() => console.log()}/>
              <Box title="Hygge terninger 18+⚠️" img={require("../assets/hyggeterninger.jpg")} onPress={() => console.log()}/>

            </View>
          </SafeAreaView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
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
  header: {
    color: "#fff",
    zIndex: 10,
    marginTop: Constants.statusBarHeight + 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "600",

  },

  appButtonContainer: {
    color: "#0a0a14",
  },
});