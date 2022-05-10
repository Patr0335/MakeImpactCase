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
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "BigBox">;

export default function BigBox() {
  const navigation = useNavigation<ScreenNavigationType>();
  return (
    <View>
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
                <TouchableOpacity
                  style={styles.tOpacity}
                  onPress={() => navigation.navigate("Invest")}
                >
                  <Text style={styles.buttonTextStyle}>Ved ikke endnu</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 2,
    marginLeft: 2,
    flexWrap: "wrap",
    alignContent: "center",
    width: Dimensions.get("window").scale,
    position: "absolute",
    top: 200,
  },
  ImageText: {
    textAlign: "left",
    padding: 5,
  },

  imageBG: {
    borderRadius: 10,
    overflow: "hidden",
    width: Dimensions.get("window").width - 10,
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
    width: Dimensions.get("window").width - 10,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    //shadow
    elevation: 20,
    shadowColor: "#171717",
  },
  tOpacity: {
    height: 150,
  },
});
