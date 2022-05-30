import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Dimensions,
  TouchableOpacityBase,
  TouchableOpacity
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
        <TouchableOpacity onPress={() => dispatch(handleLogin)} style={styles.loginButton}>
        <Text>Login</Text>

        </TouchableOpacity>

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
    fontSize: 25,
    width: Dimensions.get('window').width - 100,
    height: 75,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#CFD5EA"
  
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    width: Dimensions.get('window').width - 100,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#003399",
  },
  signupText: {
    margin: "10%",
    position: "absolute",
    left: Dimensions.get('window').width - 370,
    top: 290
  },
});