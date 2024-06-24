import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
