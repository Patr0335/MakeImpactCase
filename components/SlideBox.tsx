import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import Box from "./DiceGameContainer";

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "SlideBox">;

export default function SlideBox() {
  const navigation = useNavigation<ScreenNavigationType>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, styles.slideBox]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <Box title="10.000 🎲" img={require("../assets/10000.jpg")} onPress={() => console.log()} style={ styles.boxMargin } />
          <Box title="Liar's Dice 🎲" img={require("../assets/Liar_dice.jpg")} onPress={() => console.log()} style={ styles.boxMargin } />
          <Box title="Meyer 🎲" img={require("../assets/meyer.jpg")} onPress={() => navigation.navigate("Meyer")} style={ styles.boxMargin } />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    // justifyContent: "space-around",
    alignContent: "center",
    flexDirection: "row",
    position: "absolute",
    right: -210,
    width: Dimensions.get('window').width,
    marginRight: 2,
    marginLeft: 2,
    
  },
  slideBox: {
    borderRadius: 10,
    overflow: "hidden",

  },
  boxMargin: {
    marginLeft: 2.5, 
    marginRight: 2.5
  }
  // bigBoxContainer: {
  //   height: 150,
  // },

  // ImageBG: {
  //   borderRadius: 10,
  //   overflow: "hidden",
  //   width: 300,
  //   height: 150,
  //   marginLeft: 10

  // },
  // iconBox: {
  //   width: 180,
  //   height: "auto",
  //   margin: 8,
  //   borderRadius: 4,
  //   backgroundColor: "#fff",
  //   alignSelf: "baseline",
  //   padding: 2,
  // },

  // iconStyle: {
  //   height: 30,
  //   width: 30,
  //   borderRadius: 20,
  //   position: "absolute",
  //   bottom: 10,
  //   left: 5,
  // },
  // iconBoxStyle: {
  //   height: 40,
  //   width: 40,
  //   borderRadius: 20,
  //   position: "absolute",
  //   bottom: 20,
  //   left: 10,
  // },
  // iconBoxHead: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   position: "absolute",
  //   left: 60,
  //   bottom: 35,
  // },
  // iconBoxPrice: {
  //   fontSize: 12,
  //   color: "#646467",
  //   position: "absolute",
  //   left: 60,
  //   bottom: 20,
  // },
  // buttonTextStyle: {
  //   color: "#fff",
  //   marginBottom: 4,
  //   marginLeft: 10,
  //   position: "absolute",
  //   left: 5,
  //   bottom: 10,
  //   fontWeight: "600",
  //   fontSize: 22,
  // },
  // smallText: {
  //   fontSize: 12,
  //   color: "#fff",
  //   position: "absolute",
  //   left: 40,
  //   bottom: 10,
  // },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderRadius: 5,
  // },
  // price: {
  //   color: "#fff",
  //   position: "absolute",
  //   bottom: 20,
  //   right: 20,
  // },
  // bigHeadline: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   padding: 10,
  //   justifyContent: "center",
  // },

  // shadow: {
  //   elevation: 150,
  //   shadowColor: "#52006A",
  //   marginBottom:10,
  //   borderRadius:10,
  //   overflow: "hidden",
  // },


});
