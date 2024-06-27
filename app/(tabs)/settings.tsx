import {View, Text, StyleSheet} from "react-native";
import GoHome from "@/components/GoHome";
import {Stack} from "expo-router";
import React from "react";

export default function Settings() {
  return (
      <>
        <Stack.Screen
            options={{
              title: "자가진단",
              headerStyle: {backgroundColor: "#f4511e"},
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerLeft: () => <GoHome/>
            }}
        />
        <View style={styles.container}>
          <Text>Settings</Text>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
