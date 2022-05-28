//Import af react metoder samt vores user entity

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackParamList } from "../typings/navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

// Import Screens

import HomePage from "../screens/HomePage";
import DiceGames from "../screens/DiceGames";
import ChatRoom from "../screens/ChatRoom";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import Meyer from "../screens/Meyer";

// Import tabBar Icons

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function HomePageStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Meyer"
        component={Meyer}
        options={{
          title: "Meyer - Dice Game Rules",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#003399",
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My Profile",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#003399",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Edit Profile",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#003399",
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function DiceGamesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiceGames"
        component={DiceGames}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Meyer"
        component={Meyer}
        options={{
          title: "Meyer - Dice Game Rules",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#003399",
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ChatRoomStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
    </Stack.Navigator>
  );
}

function LoginSignupStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTitleAlign: "center",
          title: "Login! ",
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: "Sign up! ",
          headerTitleAlign: "center",
          animationTypeForReplace: "push",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const user = useSelector((state: any) => state.user.loggedInUser);
  return (
    <NavigationContainer>
      {user !== null && user.email !== undefined ? ( // if user is not null. (logged in) &&(and) if email is not undefined (double check for login).
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true
        }}>
          <Tab.Screen
            name="home"
            component={HomePageStackNavigator} // Calling a StackNavigator Function with multiple stack screens in it.
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Dice Games"
            component={DiceGamesStackNavigator}
            options={{
              tabBarLabel: "Dice Games",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="dice" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Chat Rooms"
            component={ChatRoomStack}
            options={{
              tabBarLabel: "Chat",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="chat" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="user"
            component={ProfileStackNavigator}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="profile" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        //if user is null (not logged in)
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SignupLoginScreen"
            component={LoginSignupStackNavigator}
            options={{
              animationTypeForReplace: "push",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}