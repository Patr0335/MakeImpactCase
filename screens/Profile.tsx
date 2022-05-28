import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/store/actions/user.actions";
import { StackParamList } from "../typings/navigations";
import GetProfilePicture from "../components/GetProfilePicture";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Profile"
>;

export default function Profile() {
  const user = useSelector((state: any) => state.user.loggedInUser);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState: any) => !previousState);

  const navigation = useNavigation<ScreenNavigationType>();
  const dispatch = useDispatch();

  if (user.displayName === "" || user.displayName === undefined) {
    user.displayName = "Voldemort";
  }

  if (user.photoUrl === "" || user.photoUrl === undefined) {
    user.photoUrl = "Ca3pture.JPG";
  }

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.topContainer}>

        <View style={styles.row}>

          <GetProfilePicture />
          <Text>{user.displayName}</Text>

        </View>

        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </Pressable>

      </View>

      <View style={styles.borderContainer}>
        <View style={styles.borderLine} />
      </View>

      <View style={styles.bottomContainer}>

        <Text style={styles.titleText}>NOTIFICATIONS</Text>

        <View style={styles.notificationContainer}>

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
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    margin: 20,
    alignContent: "flex-start",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-start",
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
  editText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  borderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 1,
    margin: 20,
  },
  borderLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black"
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor: "#F0F0F0",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    margin: 20,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#003399",
    textAlign: "left",
  },
  notificationContainer: {
    paddingVertical: 12,
    paddingHorizontal: 130,
    elevation: 3,
    backgroundColor: "white",
  },
  switch: {
    alignContent: "flex-end",
  },
  logoutButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    paddingHorizontal: 130,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#F5B041",
  },
  logoutText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "red",
  },
});
