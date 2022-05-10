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
  ScrollView,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "BigBox">;

export default function BigBox() {
  return (
    <View style={{height: '100%', width: '100%', flex: 1}}>
      <ImageBackground
        source={require("../assets/forestry_paper.jpeg")}
        style={{}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1 }}>
      
        
        <View style={styles.container}>
          
          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/Liar_dice.jpg")}
              style={styles.imageBG}
            >
              <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>Liar's Dice 🎲</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* ######################################### */}

          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/meyer.jpg")}
              style={styles.imageBG}
            >
              <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>Meyer 🎲</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* ######################################### */}

          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/yatzy.jpg")}
              style={styles.imageBG}
            >
              <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>Yatzy 🎲</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* ######################################### */}

          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/10000.jpg")}
              style={styles.imageBG}
            >
              <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>10.000 🎲</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* ######################################### */}

          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/bunco.jpg")}
              style={styles.imageBG}
            >
             <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>Bunco 🎲</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* ######################################### */}

          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/shutthebox.jpg")}
              style={styles.imageBG}
            >
              <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>Shut the Box 🎲</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* ######################################### */}

          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/beatthat.jpg")}
              style={styles.imageBG}
            >
              <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>Beat That 🎲</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* ######################################### */}

          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/hyggeterninger.jpg")}
              style={styles.imageBG}
            >
              <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.4 }}
              >
                <TouchableOpacity style={styles.tOpacity}>
                  <Text style={styles.buttonTextStyle}>
                    Hygge terninger 18+⚠️
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>


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
    padding: 20,
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-between",
  },
  ImageText: {
    textAlign: "left",
    padding: 5,
  },
  
  imageBG: {
    borderRadius: 10,
    overflow: "hidden",
    width: '80%',
    height: 150,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
    position: "absolute",
    left: 5,
    bottom: 10,
    fontWeight: "600",
    fontSize: 22,
  },

  imageBox: {
    borderRadius: 6,
    overflow: "hidden",
    width: '80%',
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    //shadow
    elevation: 20,
    shadowColor: '#171717',
  },
  tOpacity: {
    height: 150,
  },

});
