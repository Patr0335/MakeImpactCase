import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SlideBox from "../components/SlideBox";
import KanyeQuotes from "../components/KanyeQuotes";
import { useDispatch } from "react-redux";
import { logout } from "../src/store/actions/user.actions";
import Constants from "expo-constants";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "HomePage"
>;

export default function HomePage() {
  const navigation = useNavigation<ScreenNavigationType>();
  const dispatch = useDispatch();
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome to YouOnlyDiceTwice</Text>
          <View style={styles.buttonContainer}>
            {/* <Button title="Logout" onPress={() => dispatch(logout())} /> */}
            <TouchableOpacity
              style={styles.clickableButton}
              onPress={() => navigation.navigate("DiceGames")}
            >
              <Text style={{color: "white"}}>See all Dice Games ➜</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.BigBoxHeadline}> Our Popular Games</Text>
          <SlideBox/>
          <Text style={styles.BigBoxHeadline}> Kanye Quotes</Text>
          <KanyeQuotes/>
        </View>
      </SafeAreaView>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    color: "black",
    zIndex: 10,
    marginTop: Constants.statusBarHeight + 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "600",
  },
  buttonContainer: {
    backgroundColor: "#f2f2f4",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 42,
  },
  clickableButton: {
    alignItems: "center",
    backgroundColor: "#003399",
    padding: 10,
    borderRadius: 20,
    marginBottom:10,
    height: 50,
    width: 190,
    justifyContent: "center"

  },
  nonClickableButton: {
    alignItems: "center",
    backgroundColor: "#303037",
    padding: 10,
    color: "#fafafd",
    borderRadius: 20,
  },
  explore: {
    color: "white",
  },
  title: {
    fontSize: 30,
    alignContent: "center",
  },
  BigBoxHeadline: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
  smallBoxPos: {},
});
