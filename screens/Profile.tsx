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
import { User } from "../entities/User";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Profile"
>;

export default function Profile() {
  const user = useSelector((state: any) => state.user.loggedInUser);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);
  const navigation = useNavigation<ScreenNavigationType>();
  const dispatch = useDispatch();
  // console.log("user:", user)

  if (user.displayName === "") {
    user.displayName = "Voldemort";
  }
  if (user.photoUrl === "") {
    user.photoUrl = "https://picsum.photos/200";
  }
  console.log(user);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={{ uri: user.photoUrl }} style={styles.imageStyle} />
          {/* <Image source={require(user.photoUrl)}/> */}
          <Text>{user.displayName}</Text>
        </View>
        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </Pressable>
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
    alignContent: "flex-start",
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
  imageStyle: {
    width: 100,
    height: 100,
    margin: 5,
    // resizeMode: "contain",
    borderRadius: 80,
    alignItems: 'flex-start',
    
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-start",
  },
  // column: {
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   width: '50%',
  // }
});
