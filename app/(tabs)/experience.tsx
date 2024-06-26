import {View, Text, StyleSheet} from "react-native";
import {Stack} from "expo-router";
import React from "react";

export default function Experience() {
  return (
      <>
        <Stack.Screen
            options={{
              title: "체험단",
              headerStyle: {backgroundColor: "#f4511e"},
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
        />
          <View style={styles.category}>
            <Text style={styles.text}>제품</Text>
            <Text style={styles.text}>관심제품</Text>
            <Text style={styles.text}>신청제품</Text>
          </View>
          <View style={styles.advertisement}>
            <Text>광고</Text>
          </View>
          <View style={styles.product}>
            <Text>제품</Text>
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
  category: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
  advertisement: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  product: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
});
