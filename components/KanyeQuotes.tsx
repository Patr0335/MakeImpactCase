import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
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
  Pressable,
} from "react-native";


const KanyeQuotes = () => {
  const { data, refetch, isLoading, isError } = useQuery(
    "quote",
    async () => {
      const { data } = await axios("https://api.kanye.rest");
      return data;
    }
  );

  if (isLoading) {
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/kanye.jpeg")}
              style={styles.imageBG}
            >
              <Text style={styles.buttonTextStyle}>Loading...</Text>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>

    )
  }

  if (isError) {
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/kanye.jpeg")}
              style={styles.imageBG}
            >

              <Text style={styles.buttonTextStyle}>ERROR!</Text>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>

    )
  }



  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <ImageBackground
            source={require("../assets/kanye.jpeg")}
            style={styles.imageBG}
          >
            <View style={{justifyContent: "center", alignContent: "center" }}>
            <Text style={styles.buttonTextStyle}>"{data.quote}"<Text style={{ fontSize: 10 }}> - Kanye West</Text></Text>
            </View>
            <TouchableOpacity style={styles.anotherOne} onPress={() => { refetch() }}>
              <Text style={{ color: "white" }}>Another Quote</Text>
            </TouchableOpacity>

          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>

  )
};


export default KanyeQuotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 2,
    marginLeft: 2,
    marginBottom: 2,
    flexWrap: "wrap",
    alignContent: "center",
    width: Dimensions.get("window").scale,


  },
  ImageText: {
    textAlign: "left",
    padding: 5,
  },

  imageBG: {
    borderRadius: 10,
    overflow: "hidden",
    width: Dimensions.get("window").width - 10,
    height: 210,

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
    maxWidth: Dimensions.get("window").width - 9,
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 18,
    justifyContent: "center",
    alignContent: "center",
    padding: 50
    
  },

  imageBox: {
    borderRadius: 6,
    overflow: "hidden",
    width: Dimensions.get("window").width - 10,
    height: 190,
    marginTop: 10,
    marginBottom: 10,
    //shadow
    elevation: 20,
    shadowColor: "#171717",
  },
  tOpacity: {
    height: 150,
  },
  anotherOne: {
    position: "absolute",
    bottom: 15,
    margin: 10,
    marginLeft: 4,
    backgroundColor: "#003399",
    borderRadius: 10,
    padding: 2,

  }
});

