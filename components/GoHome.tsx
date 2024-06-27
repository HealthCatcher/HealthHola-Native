import React from "react";
import {Button, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const GoHome = () => {
  const navigation = useNavigation();
  return(
      <TouchableOpacity
          onPress={() => navigation.navigate('index')}
          style={{marginLeft: 16}}
      >
        <Ionicons name="home" size={30} color="white"/>
      </TouchableOpacity>
  );
};

export default GoHome;
