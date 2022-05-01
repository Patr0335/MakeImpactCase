import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";
import {
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "BigBox">;

export default function BigBox() {
  return (
    <SafeAreaView style={{ flex: 1, alignSelf: 'baseline'}}>
      <Text style={styles.bigHeadline}>Trending Companies</Text>
      <View style={styles.container}>
        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/forestry_paper.jpeg")}
            style={{ width: 250 }} >

            <LinearGradient
              colors={["rgba(0,0,0,0.9)", "transparent"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 1, y: 0 }} >

              <TouchableOpacity
                style={styles.bigBoxContainer}
                activeOpacity={0.5} >

                <Image
                  source={require("../assets/svenska-cellulosa-aktiebolaget-sca-logo-vector.png")}
                  style={styles.iconStyle} />

                <Text style={styles.buttonTextStyle}>SCA Svenska</Text>
                <Text style={styles.smallText}>Forestry & paper 🍁</Text>
                <Text style={styles.price}>17,46€</Text>

              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>
        <View style={styles.ImageBG}>
          <ImageBackground
            source={require("../assets/financial_service.jpeg")}
            style={{ width: 130 }}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.9)", "transparent"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <TouchableOpacity
                style={styles.bigBoxContainer}
                activeOpacity={0.5}
              >
                <Image
                  source={require("../assets/axa-logo-2-768x768.png")}
                  style={styles.iconStyle}
                />
                <Text style={styles.buttonTextStyle}>AXA</Text>
                <Text style={styles.smallText}>Financial Services 🏦</Text>
                <Text style={styles.price}></Text>
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>

      <Text style={styles.bigHeadline}>Trending Companies</Text>
      <View style={styles.container}>
        <View style={[styles.iconBox, styles.shadow]}>
          <Image
          source={require("../assets/PVH-Corp-logo-1080x745.jpeg")}
          style={styles.iconBoxStyle}>
            
          </Image>
          <Text style={styles.iconBoxHead}>PVH Corp.</Text>
          <Text style={styles.iconBoxPrice}>82,69€</Text> 
        </View>

        <View style={[styles.iconBox, styles.shadow]}>
          <Image
          source={require("../assets/axa-logo-2-768x768.png")}
          style={styles.iconBoxStyle}>
            
          </Image>
          <Text style={styles.iconBoxHead}>AXA</Text>
          <Text style={styles.iconBoxPrice}>26,23€</Text> 
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
    height: 130,
    flexDirection: 'row',
    
  },
  bigBoxContainer: {
    height: 130,
  },

  ImageBG: {
    borderRadius: 6,
    overflow: "hidden",
    width: 250,
    height: 130,
    marginLeft: 10,
    marginRight: 10,
  },
  iconBox: {
    width: 180,
    height: 'auto',
    margin: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    alignSelf: 'baseline',
    padding: 2
  },

  iconStyle: {
    height: 30,
    width: 30,
    borderRadius: 20,
    position: "absolute",
    bottom: 10,
    left: 5,
  },
  iconBoxStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    left: 10,
  },

  //Text styling
  iconBoxHead: {
    fontSize: 20,
    fontWeight: 'bold',
    position: "absolute",
    left: 60,
    bottom:35

  },
  iconBoxPrice: {
    fontSize: 12,
    color: '#646467',
    position: "absolute",
    left: 60,
    bottom: 20

  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
    position: "absolute",
    left: 30,
    bottom: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  smallText: {
    fontSize: 12,
    color: "#fff",
    position: "absolute",
    left: 40,
    bottom: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  price: {
    color: "#fff",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  bigHeadline: {
    fontSize:20,
    fontWeight: 'bold',
    padding: 10,

  },

  shadow: {
    elevation: 20,
    shadowColor: '#171717',
  },

});
