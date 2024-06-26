import React from "react";
import {Button, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";


const GoHome = () => {
  const navigation = useNavigation();
  return(
      <TouchableOpacity
          onPress={() => navigation.navigate('index')}
          style={{marginLeft: 16}}
      >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>홈</Text>
      </TouchableOpacity>
  );
};

export default GoHome;
