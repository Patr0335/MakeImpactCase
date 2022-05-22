import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/store/actions/user.actions";
import { StackParamList } from "../typings/navigations";
import { RootState } from "../App";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Profile"
>;

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  console.log("user object", user);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);
  const navigation = useNavigation<ScreenNavigationType>();
  const dispatch = useDispatch();
  console.log("user ;) :", user?.displayname)
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          {/* <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/youonlydicetwice.appspot.com/o/e2ed2c20-dce6-4c3a-9671-77d92e97f3ec.jpg?alt=media&token=52625773-513d-42ca-973d-013c9bb255b4" }} style={{height: 100, width: 100}}/> */}
          {/* <Image source={require(user.photoUrl)}/> */}
          <Text>{user?.displayname}</Text>
        </View>
        <View>
          <Pressable
            style={styles.editButton}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.editText}>Edit Profile</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 1,
          margin: 20,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <View style={styles.container1}>
        <Text style={styles.titleText}>NOTIFICATIONS</Text>
        <View style={styles.container2}>
          <Text>Test</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#B8B8B8", true: "#B8B8B8" }}
            thumbColor={isEnabled ? "#003399" : "#f4f3f4"}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Pressable
          style={styles.logoutButton}
          onPress={() => dispatch(logout())}
        >
          <Text style={styles.logoutText}>LOG OUT</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    margin: 20,
  },
  container1: {
    flex: 0.5,
    backgroundColor: "#F0F0F0",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    margin: 20,
  },
  container2: {
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
  },
  switch: {
    alignContent: "flex-end",
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#003399",
  },
  logoutButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  editText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  logoutText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#003399",
  },
  titleText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#003399",
    textAlign: "left",
  },
});
