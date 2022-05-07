// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   Alert,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { StackParamList } from "../typings/navigations";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import SectorImage from "../components/SectorImage";

// type ScreenNavigationType = NativeStackNavigationProp<
//   StackParamList,
//   "DiceGames"
// >;


// export default function DiceGames() {
//   const navigation = useNavigation<ScreenNavigationType>();
//   return (
//       <View style={styles.container}>
//         <Text style={styles.text}>SECTORS</Text>
//         <SectorImage />
//       </View> 
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 30,
//     color: "#0a0a14",
//     alignItems: "center",
//     fontWeight: "bold",
//     margin: 20,
//   },
//   appButtonContainer: {
//     color: "#0a0a14",
//   },
// });