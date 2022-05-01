import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Invest from "../screens/Invest";
import News from "../screens/News";
import MClub from "../screens/MClub";
import Academy from "../screens/Academy";
import { StackParamList } from "../typings/navigations";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";



const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('../assets/background.jpg')}
//     />
//   );
// }


export default function ScreenStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Navigation}
        options={{
          title: "Hi Malte! Let's make an impact",

            
          // headerLeft:  (
          //   props // App Logo
          // ) => (
          //   <Image
          //     style={{ width: 30, height: 30, borderRadius: 60, margin: 20}}
          //     source={require("../assets/VandMichael.png")}
          //     />
          //     ),
        }}
      />
      <Stack.Screen options={{headerShown: false}}
      name="Screen2" 
      component={Screen2}
      />
      <Stack.Screen options={{headerShown: false}} 
      name="Screen3" 
      component={Screen3} 
      
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

 function Navigation() {
  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="matches"
          component={Screen1}
          options={{
            tabBarLabel: "Matches",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heartbeat" color={color} size={size} />
              ),
              
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarLabel: "News",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="news" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Invest"
          component={Invest}
          options={{
            tabBarLabel: "Invest",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="money-bill" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Academy"
          component={Academy}
          options={{
            tabBarLabel: "Academy",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="menu-book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MClub"
          component={MClub}
          options={{
            tabBarLabel: "M!Club",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="chat" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
