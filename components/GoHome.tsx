import React from "react";
import { Link } from "expo-router";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoHome = () => {
  const navigation = useNavigation();
  return <Button title="Go to Home" onPress={() => navigation.navigate("index")} />;
};

export default GoHome;
