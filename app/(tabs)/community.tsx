import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, Link } from 'expo-router';
import GoHome from "@/components/GoHome";

const PostList = () => {
  const title = '비타민 C';
  const content = '맛있다';
  const createTime = '2021-09-01';

  return (
    <View style={styles.postItem}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.createTime}>{createTime}</Text>
      </View>
    </View>
  );
};

const community = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '커뮤니티',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <GoHome/>,
        }}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>게시글 목록</Text>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortButtonText}>인기순</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postList}>
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
      </View>
      <View style={styles.createButton}>
        <Link href="/write">
          <Text style={styles.createButtonText}>✏️</Text>
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    color: 'dark',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#555',
    fontSize: 23,
  },
  sortButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  sortButtonText: {
    color: 'dark',
    fontWeight: 'bold',
  },
  postList: {
    flex: 1,
    padding: 15,
  },
  postItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
  createTime: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    backgroundColor: '#f4511e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  createButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f4511e',
    padding: 15,
    borderRadius: 50,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default community;