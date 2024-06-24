import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "expo-router";
import GoHome from "@/components/GoHome";

export default function HealthInfo() {
  const navigation = useNavigation();
  return (
    <>
      <Stack.Screen
        options={{
          title: "건강정보",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <View style={styles.container}>
        <Button title="Go to Home" onPress={() => navigation.navigate("index")} />
        <Button title="Go to self" onPress={() => navigation.navigate("selfdiagnosis")} />
        <Text>Health Info</Text>
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
