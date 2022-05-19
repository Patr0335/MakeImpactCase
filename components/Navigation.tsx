import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import DiceGames from "../screens/DiceGames";
import Invest from "../screens/Invest";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import Screen2 from "../screens/Screen2";
import SetupProfile from "../screens/SetupProfile";
import { StackParamList } from "../typings/navigations";
import Meyer from "../screens/Meyer";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../App";

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
        options={{ headerShown: false }}
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
      <Stack.Screen name="Meyer" component={Meyer} />
    </Stack.Navigator>
  );
}

function TournamentStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Invest" component={Invest} />
    </Stack.Navigator>
  );
}

function SetupProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SetupProfile"
        component={SetupProfile}
        
        options={{
          title: "Setup your profile! ",
          headerTitleAlign: "center",
          animationTypeForReplace: "push",
        }}
        
      />
    </Stack.Navigator>
  );
}

// function MeyerStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Meyer" component={Meyer}/>
//     </Stack.Navigator>
//   );
// }

function LoginSignupStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: "Sign up! ",
          headerTitleAlign: "center",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTitleAlign: "center",
          title: "Login! ",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  
  return (
    <NavigationContainer>
      {user !== null ? ( // if user is logged in. (not null)
        
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="SetupProfile"
            component={SetupProfileStackNavigator}
            options={{
              tabBarStyle: { display: "none" }, // removes tabbar from this specific screen
              tabBarButton: () => null,
              tabBarLabel: () => null, // if you don't want to see the tab bar
            }}
          />
          <Tab.Screen
            name="home"
            component={HomePageStackNavigator}
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
            name="Ved ikke endnu"
            component={TournamentStackNavigator}
            options={{
              tabBarLabel: "Ved ikke endnu",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="money-bill" color={color} size={size} />
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SignupScreen"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// function ScreenStackNavigator() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Screen1"
//         component={Navigation}
//         options={{
//           title: `You Only Dice Twice`,
//         }}
//       />
//       {/* <Stack.Screen options={{headerShown: false}}
//       name="Screen2"
//       component={Screen2}
//       /> */}
//       <Stack.Screen options={{headerShown: false}}
//       name="DiceGames"
//       component={DiceGames}

//       />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
