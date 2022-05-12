import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React from "react";
import {
  Button,
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../src/store/actions/user.actions";
import { StackParamList } from "../typings/navigations";
import CustomButton from "../components/CustomButton";

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  "Profile"
>;

export default function Profile() {
  const navigation = useNavigation<ScreenNavigationType>();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View></View>
        <View>
          <Pressable
            style={styles.editButton}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.editText}>Edit Profile</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Notifications</Text>
        {/* <Button title="Logout" onPress={() => dispatch(logout())} /> */}
        <Pressable style={styles.logoutButton} onPress={() => dispatch(logout())}>
          <Text style={styles.editText}>Logout</Text>
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
  },
  safeArea: {
    flex: 1,
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 110,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#003399",
  },
  logoutButton: {

  },
  editText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  titleText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#003399",
    textAlign: "left",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },
});
