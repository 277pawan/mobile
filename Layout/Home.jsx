import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text className="w-full bg-red-500">Home is the best place.</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      ></Button>
      <Button
        title="Go to Bookmark"
        onPress={() => {
          navigation.navigate("Bookmark");
        }}
      ></Button>
      <Text>This is very useful in case you want to show it.</Text>
    </View>
  );
};

export default Home;
