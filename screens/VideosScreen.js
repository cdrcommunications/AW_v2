import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import videoChapters from '../components/VideoData'; // Adjust the import path as necessary

const VideosScreen = () => {
  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {/* Navigate to video detail screen or play video */}}>
      <Text style={styles.chapterTitle}>Chapter: {item.chapter}</Text>
      {/* Implement video thumbnail or a placeholder here */}
      <Text style={styles.uri}>{item.uri}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videoChapters}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  chapterTitle: {
    fontSize: 18,
  },
  uri: {
    fontSize: 12,
    color: '#007AFF',
  },
});

export default VideosScreen;
