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
import { login } from "../src/store/actions/user.actions";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";
import { useNavigation } from "@react-navigation/native";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "LoginScreen"
>;
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const dispatch = useDispatch(); // hook to get
  const navigation = useNavigation<ScreenNavigationType>();

  async function readPersistedUserInfo() {
    const token = await SecureStore.getItemAsync("idToken");
    const userJson = await SecureStore.getItemAsync("user");
  }
  //   let user = null;
  //   if (userJson) {
  //     user = JSON.parse(userJson);
  //   }
  //   if (user) {
  //     // then we have a priv. login
  //     // restore the signup by updating the redux store based on usre and token.
  //     dispatch(rehydrateUser(user, token!));
  //   }
  // }

  const handleLogin = () => {
    dispatch(login(email, passwordStr));
}

  useEffect(() => {
    console.log("-----------------------------------")
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
        //value="test8@gmail.com" 
        placeholder="email" 
        onChangeText={setEmail}
        style={styles.textInput} 
        />

        <TextInput
        secureTextEntry={true}
          value={passwordStr}
          //value="123456"
          placeholder="password"
          onChangeText={setPasswordStr}
          style={styles.textInput}
        />

        <Button title="Login"  
        onPress={() => dispatch(handleLogin)} /> 
      </View>
      <View style={styles.signupText}>
      <Text>Dont have a user? <Text style={{color: 'blue'}} onPress={() => navigation.navigate("SignupScreen")}>Click here to Sign up</Text></Text>
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
  signupText: {
    margin: "10%",
    position: "absolute",
    left: Dimensions.get('window').width-370,
    top: Dimensions.get('window').height-460
  },
});