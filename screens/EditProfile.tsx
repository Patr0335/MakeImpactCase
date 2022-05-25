import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import UploadScreen from "../components/UploadScreen";
import { User } from "../entities/User";
import { updateUser } from "../src/store/actions/user.actions";
import GetProfilePicture from "../components/GetProfilePicture";

export default function EditProfile() {
  const user = useSelector((state: any) => state.user.loggedInUser);
  const token = useSelector((state: any) => state.user.idToken);
  const dispatch = useDispatch(); // hook to get
  const [name, setName] = React.useState(user.displayName);
  const [photoUrl, setphotoUrl] = React.useState(user.photoUrl)
  // const [photoUrl, setphotoUrl] = useState(user.photoUrl)
  

  

  const onSave = () => {
    if (name !== "" && photoUrl !== "") {
      const newUser: User = new User(user.email, name, user.photoUrl)
      dispatch(updateUser(newUser, token))
    } else {
      alert("Username or Picture")
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={'padding'}
      keyboardVerticalOffset={65}>
      <SafeAreaView style={styles.safeArea}>
        
        <UploadScreen />
      <GetProfilePicture />
      
        <View style={styles.container}>

          <Input title="Full name"
            inputValue={name}
            setText={setName}
            error={"Cannot be empty"}
          />

          
          {/* <Input title="Study programme"
                inputValue=""
                error="Study programme cannot be empty" /> */}

          <Pressable
            style={styles.saveButton}
            onPress={() => {
              dispatch(onSave)
              
            }}
          >
            <Text style={styles.saveText}>Save Changes</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    position:"absolute",
    top: 150

  },
  safeArea: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    fontSize: 16,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#003399",
  },
  saveText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  imageStyle:{
    height: 140, 
    width: 140,
    position: "absolute",
    top:20,
    right: Dimensions.get("window").width - 350,
    borderRadius: 80

  },
});
