import { View, Text, StyleSheet } from "react-native";

export default function SelfDiagnosis() {
  return (
    <View style={styles.container}>
      <Text>Self Diagnosis</Text>
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
