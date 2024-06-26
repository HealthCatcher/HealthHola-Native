import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Stack} from "expo-router";
import React, {useState} from 'react';


const SelfDiagnosis = () => {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [systolicBP, setSystolicBP] = useState('');
  const [diastolicBP, setDiastolicBP] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [selectedValue, setSelectedValue] = useState("option1");
  const [age, setAge] = useState('');
  const handleSave = () => {
    // 입력된 정보를 저장하는 로직 추가
    console.log('Height:', height);
    console.log('Email:', gender);
    console.log('Phone:', systolicBP);
    console.log('Address:', diastolicBP);
    console.log('Birthday:', bloodSugar);
  };

  ;
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
            }}
        />
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>키</Text>
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={setHeight}
                placeholder="Enter your height"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>성별</Text>
            <Picker
                style={styles.input}
                selectedValue={gender}
                onValueChange={(value) => setGender(value)}
            >
              <Picker.Item label="남" value="male"/>
              <Picker.Item label="여" value="female"/>
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>나이</Text>
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder=""
                keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>수축기 혈압</Text>
            <TextInput
                style={styles.input}
                value={systolicBP}
                onChangeText={setSystolicBP}
                placeholder=""
                keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>이완기 혈압</Text>
            <TextInput
                style={styles.input}
                value={diastolicBP}
                onChangeText={setDiastolicBP}
                placeholder=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>식후 혈당</Text>
            <TextInput
                style={styles.input}
                value={bloodSugar}
                onChangeText={setBloodSugar}
                placeholder=""
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelfDiagnosis;
/* Frame 644 */

