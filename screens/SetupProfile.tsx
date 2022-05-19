import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  Button,
  Dimensions,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout, createUser } from "../src/store/actions/user.actions";
import { StackParamList } from "../typings/navigations";
import CustomButton from "../components/CustomButton";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "SetupProfile"
>;

export default function SetupProfile() {
  const [displayname, setDisplayname] = useState("");
  const dispatch = useDispatch(); // hook to get

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);
  const navigation = useNavigation<ScreenNavigationType>();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text>What is your name?</Text>
        <TextInput
          value={displayname}
          placeholder="Firstname and last name"
          onChangeText={setDisplayname}
          style={styles.textInput}
        />

        <Button title="Logout" onPress={() => dispatch(logout())} />

    

        <Pressable
          style={styles.nextButton}
          onPress={() => dispatch(createUser(displayname))}
        >
          <Text style={styles.nextText}>Save Changes</Text>
        </Pressable>

        <Pressable
          disabled={displayname ? false : true}
          style={
            displayname.length >= 3
              ? styles.nextButton
              : styles.nextButtonDisabled
          }
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={styles.nextText}>Next</Text>
        </Pressable>


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 42,
  },
  textInput: {
    fontSize: 16,
    width: Dimensions.get("window").width - 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  nextButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#003399",
  },
  nextText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  nextButtonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "gray",
  },
});
