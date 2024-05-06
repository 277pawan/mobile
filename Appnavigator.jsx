import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./Layout/Home";
import Profilescreen from "./Layout/Profile";
import Signup from "./Auth/signup";
import Signin from "./Auth/signIn";
import Auth from "./Auth/authLayout";
import Layout from "./Layout/tabsLayout";
import Bookmark from "./Layout/bookMark";
import Query from "./Search/Query";
import tabsLayout from "./Layout/tabsLayout";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Profile") {
              iconName = "person";
            } else if (route.name === "Layout") {
              iconName = "grid";
            } else if (route.name === "Bookmark") {
              iconName = "bookmark";
            }

            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Profile" component={Profilescreen} />
        <Tab.Screen name="Layout" component={Layout} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
