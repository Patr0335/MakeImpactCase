import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { signup } from "../src/store/actions/user.actions";


export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const [check1, setCheck1] = useState(false);
  const dispatch = useDispatch(); // hook to get

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

          <View style={styles.checkBoxStyle}>
            <CheckBox
              containerStyle={{ backgroundColor: "none", flexDirection: "row", margin: 0 }}
              checked={check1}
              onPress={() => setCheck1(!check1)}
              title="Click here to agree to"
            />

            <Text style={{ flexDirection: "row", marginLeft: -25, fontWeight: "bold", color: "blue" }}>Terms & Conditions</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                dispatch(signup(email, passwordStr))
              }
              }
              disabled={check1 !== false && email && passwordStr ? (false) : (true)}
              style={check1 !== false && email && passwordStr ? styles.signup : styles.signupDisabled}
            >
              
              <Text>Sign up</Text>

            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
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
  checkBoxStyle: {
    flex: 1, 
    flexDirection: "row", 
    alignItems: "center"
  },
  signup: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#003399",
  },
  signupDisabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "gray",
  }
});