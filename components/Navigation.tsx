import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../screens/Screen1";
import DiceGames from "../screens/DiceGames";
import Invest from "../screens/Invest";
import Profile from "../screens/Profile";
import { StackParamList } from "../typings/navigations";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 




const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();




export default function ScreenStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Navigation}
        options={{
          title: `You Only Dice Twice`,
        }}
      />
      {/* <Stack.Screen options={{headerShown: false}}
      name="Screen2" 
      component={Screen2}
      /> */}
      <Stack.Screen options={{headerShown: false}} 
      name="DiceGames" 
      component={DiceGames} 
      
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
          name="home"
          component={Screen1}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
              ),
              
          }}
        />
        <Tab.Screen
          name="Dice Games"
          component={DiceGames}
          options={{
            tabBarLabel: "Dice Games",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="dice" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Ved ikke endnu"
          component={Invest}
          options={{
            tabBarLabel: "Ved ikke endnu",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="money-bill" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" color={color} size={25} />
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