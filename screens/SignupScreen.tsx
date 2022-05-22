import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Dimensions,
  Pressable,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { rehydrateUser, signup, login } from "../src/store/actions/user.actions";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "SignupScreen"
>;
type CheckboxComponentProps = {};

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const navigation = useNavigation<ScreenNavigationType>();
  const dispatch = useDispatch(); // hook to get
  const [check1, setCheck1] = useState(false);


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
    <SafeAreaView style={{ flex: 1 }}>
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
        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
        <CheckBox
            containerStyle={{backgroundColor: "none", flexDirection: "row", margin: 0}}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            title="Click here to agree to"
        />
        <Text style={{flexDirection: "row", marginLeft: -25, fontWeight: "bold", color: "blue"}}>Terms & Conditions</Text>
        </View>
        <View > 
        <TouchableOpacity
          
          onPress={() => {
            //navigation.navigate("home")
            dispatch(signup(email, passwordStr))

          }
        }
          disabled={check1 !== false && email && passwordStr ? ( false ) : ( true ) }
          style={check1 !== false && email && passwordStr ? styles.signup : styles.signupDisabled}
        >
        
        <Text>Sign up</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.loginText}>Already got a login? <Text style={{color: 'blue'}} onPress={() => navigation.navigate("LoginScreen")}>Click here to login</Text></Text>
        
      </View>
    </ImageBackground>
    </SafeAreaView>
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
    fontSize: 25,
    width: Dimensions.get('window').width - 100,
    height: 75,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#CFD5EA"
    
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },

  loginText: {
    margin: "10%"
  },

  signup:{
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#003399",
    
  },

  signupDisabled:{
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "gray",
  }
  
});