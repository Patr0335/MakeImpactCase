import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Dimensions
} from "react-native";
import { login } from "../src/store/actions/user.actions";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "LoginScreen"
>;
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const dispatch = useDispatch(); // hook to get
  const navigation = useNavigation<ScreenNavigationType>();



  const handleLogin = () => {
    dispatch(login(email, passwordStr));
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>

        <TextInput
          value={email}
          placeholder="email"
          onChangeText={setEmail}
          style={styles.textInput}
        />

        <TextInput
          secureTextEntry={true}
          value={passwordStr}
          placeholder="password"
          onChangeText={setPasswordStr}
          style={styles.textInput}
        />

        <Button title="Login"
          onPress={() => dispatch(handleLogin)} />
      </View>
      <View style={styles.signupText}>
        <Text>Dont have a user?
          <Text style={{ color: 'blue' }} onPress={() => navigation.navigate("SignupScreen")}> Click here to Sign up</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  textInput: {
    fontSize: 16,
    width: Dimensions.get('window').width - 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  signupText: {
    margin: "10%",
    position: "absolute",
    left: Dimensions.get('window').width - 370,
    top: Dimensions.get('window').height - 460
  },
});