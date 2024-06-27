import {Pressable, View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";

import {Stack} from "expo-router";
import React, {useState} from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import GoHome from "@/components/GoHome";


const SelfDiagnosis = () => {
  const [height, setHeight] = useState('');
  const [selectedGender, setSelectedGender] = useState('남성');
  const [systolicBP, setSystolicBP] = useState('');
  const [diastolicBP, setDiastolicBP] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [selectedValue, setSelectedValue] = useState("option1");
  const [age, setAge] = useState('');
  const handleGenderSelection = (gender: React.SetStateAction<string>) => {
    setSelectedGender(gender);
  };
  const handleSave = () => {
    // 입력된 정보를 저장하는 로직 추가
    console.log('Height:', height);
    console.log('selectedGender:', selectedGender);
    console.log('systolicBP:', systolicBP);
    console.log('diastolicBP:', diastolicBP);
    console.log('bloodSugar:', bloodSugar);
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
              headerLeft: () => <GoHome/>
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
            <View style={styles.genderButtonContainer}>
              <Pressable
                  style={[styles.genderButton, selectedGender === '남성' && styles.selectedGenderButton]}
                  onPress={() => handleGenderSelection('남성')}>
                <Text style={styles.genderButtonText}>남성</Text>
                {selectedGender === '남성' && <Ionicons name="checkmark" size={24} color="white"/>}
              </Pressable>
              <View style={{width: 70}}></View>
              <Pressable
                  style={[styles.genderButton, selectedGender === '여성' && styles.selectedGenderButton]}
                  onPress={() => handleGenderSelection('여성')}>
                <Text style={styles.genderButtonText}>여성</Text>
                {selectedGender === '여성' && <Ionicons name="checkmark" size={24} color="white"/>}
              </Pressable>
            </View>
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
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },
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
    marginBottom: 8,
  },
  genderButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  genderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
  },
  selectedGenderButton: {
    backgroundColor: '#ee6538', // 예시로 선택된 상태의 색상
  },
  genderButtonText: {
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
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

