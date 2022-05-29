import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import {
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";


const KanyeQuotes = () => {

  //React Query is a library to fetch. It also helps if you want to refetch more than once and is is generally faster.
  const { data, refetch, isLoading, isError } = useQuery(
    "quote",
    async () => {
      //axios is a http promise, which helps us getting a quote from this api
      const { data } = await axios("https://api.kanye.rest");
      return data;
    }
  );

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.quoteBox}>
            <ImageBackground
              source={require("../assets/kanye.jpeg")}
              style={styles.imageBG}
            >
              <Text style={styles.textStyle}>Loading...</Text>
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
          <View style={styles.quoteBox}>
            <ImageBackground
              source={require("../assets/kanye.jpeg")}
              style={styles.imageBG}
            >
              <Text style={styles.textStyle}>ERROR!</Text>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>

    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.quoteBox}>
          <ImageBackground
            source={require("../assets/kanye.jpeg")}
            style={styles.imageBG}
          >
            <View style={styles.textPlacement}>
              <Text style={styles.textStyle}>"{data.quote}"<Text style={{ fontSize: 10 }}>{"\n"}- Kanye West</Text></Text>
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
  quoteBox: {
    borderRadius: 6,
    overflow: "hidden",
    width: Dimensions.get("window").width - 10,
    height: 190,
    marginTop: 10,
    marginBottom: 10,
    elevation: 20,
    shadowColor: "#171717",
  },
  imageBG: {
    borderRadius: 10,
    overflow: "hidden",
    width: Dimensions.get("window").width - 10,
    height: 210,
  },
  textPlacement: {
    justifyContent: "center",
    alignContent: "center"
  },
  textStyle: {
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
  anotherOne: {
    position: "absolute",
    bottom: 15,
    margin: 10,
    marginLeft: 4,
    backgroundColor: "#003399",
    borderRadius: 10,
    padding: 2,
  },

});


