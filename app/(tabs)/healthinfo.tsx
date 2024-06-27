import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer, NavigationProp, useNavigation} from '@react-navigation/native';
import {Stack} from 'expo-router';
import GoHome from '@/components/GoHome';

type NavigationProps = NavigationProp<ReactNavigation.RootParamList>;

export default function MainScreen() {
  const navigation = useNavigation<NavigationProps>();

  const Post = {
    title: '심혈관질환',
    image: '대체이미지',
    content: '머라머라머라중얼중얼중얼',
  }
  return (
      <>
        <Stack.Screen
            options={{
              title: '건강 정보',
              headerStyle: {backgroundColor: '#f4511e'},
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => <GoHome/>
            }}
        />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>{Post.title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Text>{"이미지?"}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={{fontSize: 30}}>{Post.content}</Text>
          </View>
          <Text> 상기 정보가 마음에 드셨나요?</Text>
          <Text> 대충 평점 주는 컴포넌트</Text>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: '',
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'teal',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: 'teal',
    flex: 1,
    borderRadius: 10,
    fontSize: 100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

