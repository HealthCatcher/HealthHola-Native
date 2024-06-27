import { Link, Stack } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";

function LogoTitle() {
  return (
    <View>
      <Text>HearUR</Text>
      <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
    </View>
  );
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "HearUR",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Text>Home Screen</Text>
      <Link href={{ pathname: "details", params: { name: "Bacon" } }}>Go to Details</Link>
      <Link href={{ pathname: "login", params: { name: "Eggs" } }}>Go to Details... again</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
