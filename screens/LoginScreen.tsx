import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Dimensions
} from "react-native";
import { useDispatch } from "react-redux";
import { rehydrateUser, signup, login } from "../src/store/actions/user.actions";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const dispatch = useDispatch(); // hook to get

  async function readPersistedUserInfo() {
    const token = await SecureStore.getItemAsync("idToken");
    const userJson = await SecureStore.getItemAsync("user");
    let user = null;
    if (userJson) {
      user = JSON.parse(userJson);
    }
    if (user) {
      // then we have a priv. login
      // restore the signup by updating the redux store based on usre and token.
      dispatch(rehydrateUser(user, token!));
    }
  }

  const handleLogin = () => {
    dispatch(login(email, passwordStr));
}

  useEffect(() => {
    readPersistedUserInfo();
  }, []);

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
    width: Dimensions.get('window').width - 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});