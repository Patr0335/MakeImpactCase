import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";
import {
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
} from "react-native";


type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "BigBox">;

export default function BigBox() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.ImageBG} >
          <ImageBackground
            source={require("../assets/automobil_parts.jpeg")}
            style={{ width: 150, height: 100}}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>Financial Services 🏦</Text>

        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/alternative_energy.jpeg")}
            style={{ width: 150, height: 100 }}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>Electricity ⚡</Text>

        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/general_retailers.jpeg")}
            style={{ width: 150, height: 100 }}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>General Retailers 🏪</Text>

        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/forestry_paper.jpeg")}
            style={{ width: 150, height: 100 }}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>Forestry & Paper 🍁</Text>

        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/drugs_retailers.jpeg")}
            style={{ width: 150, height: 100 }}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>Food & Drug Retailers 💊</Text>

        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/support_services.jpeg")}
            style={{ width: 150, height: 100 }}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>Support Services 👩‍💻</Text>

        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/personal_goods.jpeg")}
            style={{ width: 150, height: 100 }}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>Personal Goods 🛍️</Text>

        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/aerospace_defense.jpeg")}
            style={{ width: 150, height: 100 }}
          >
            <TouchableOpacity
              style={styles.bigBoxContainer}
              activeOpacity={0.5}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.ImageText}>Aerospace & Defense ✈️</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-between',
  },
  ImageText: {
    textAlign: "left",
    padding: 5,
  },
  bigBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    alignContent: 'space-between',
    // justifyContent: 'space-around',
    
  },
  ImageBG: {
    borderRadius: 10,
    overflow: "hidden",
    width: 150,
    marginLeft: 10,
    marginRight: 10,
  },
});
