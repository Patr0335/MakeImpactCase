import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import Box from "./DiceGameContainer";

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "SlideBox">;

export default function SlideBox() {
  const navigation = useNavigation<ScreenNavigationType>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

          {/* Calling Reusable component inside another component */}

          <Box title="10.000 🎲" img={require("../assets/10000.jpg")} onPress={() => console.log()} style={styles.boxMargin} />
          <Box title="Liar's Dice 🎲" img={require("../assets/Liar_dice.jpg")} onPress={() => console.log()} style={styles.boxMargin} />
          <Box title="Meyer 🎲" img={require("../assets/meyer.jpg")} onPress={() => navigation.navigate("Meyer")} style={styles.boxMargin} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "center",
    flexDirection: "row",
    position: "absolute",
    right: -210,
    width: Dimensions.get('window').width,
    marginRight: 2,
    marginLeft: 2,
    borderRadius: 10,
    overflow: "hidden",
  },
  boxMargin: {
    marginLeft: 2.5,
    marginRight: 2.5
  }
});
