import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Input from "../components/Input";
import UploadButton from "../components/UploadButton";
import GetProfilePicture from "../components/GetProfilePicture";

import { User } from "../entities/User";
import { updateUser } from "../src/store/actions/user.actions";

import { useDispatch, useSelector } from "react-redux";

export default function EditProfile() {
  const user = useSelector((state: any) => state.user.loggedInUser);
  const token = useSelector((state: any) => state.user.idToken);
  // hook to get
  const dispatch = useDispatch(); 
  const [name, setName] = React.useState(user.displayName);
  const [photoUrl, setphotoUrl] = React.useState(user.photoUrl)

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
        <UploadButton />
        <GetProfilePicture />
        <View style={styles.container}>
          <Input title="Full name"
            inputValue={name}
            setText={setName}
            error={"Cannot be empty"}
          />

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
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 0.5,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    position: "absolute",
    top: 150
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
});
