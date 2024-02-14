/**
 * VideosScreen Component
 * 
 * This component renders a video player screen for the Book of Revelation chapters. 
 * It includes a dynamic video player that loads and plays chapters from a specified URI. 
 * Users can select different chapters through a horizontally scrollable chapter list below the video player. 
 * The selected chapter is highlighted, and its video starts playing automatically from the beginning.
 * 
 * Features:
 * - Auto-play videos upon chapter selection.
 * - Highlight the currently playing chapter.
 * - Display chapter title above the video player.
 * - Responsive design with light blue background for a pleasant viewing experience.
 * 
 */

import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import videoChapters from '../components/VideoData'; // Import the video chapters data

const screenWidth = Dimensions.get('window').width; // Screen width for responsive layout

const VideosScreen = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0); // State to track the selected video
  const selectedVideo = videoChapters[selectedVideoIndex]; // Currently selected video details
  const videoRef = React.useRef(null); // Ref for controlling video playback programmatically

  return (
    <View style={styles.container}>
      {/* Display the title of the currently selected video chapter */}
      <Text style={styles.selectedVideoText}>Book of Revelation: Chapter {selectedVideo.chapter}</Text>
      <Video
        key={selectedVideo.uri} // Ensure component resets with new URI
        ref={videoRef}
        style={styles.videoPlayer}
        source={{ uri: selectedVideo.uri }}
        useNativeControls
        resizeMode="contain"
        onLoad={() => videoRef.current.playAsync()} // Play video immediately when loaded
      />
      {/* Horizontal ScrollView for chapter selection */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {videoChapters.map((chapter, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.chapterItem,
              index === selectedVideoIndex ? styles.selectedChapterItem : null, // Highlight the selected chapter
            ]}
            onPress={() => setSelectedVideoIndex(index)} // Change video on press
          >
            <Text style={styles.chapterText}>Chapter {chapter.chapter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#E0F7FA', // Light blue background for a pleasant UI
  },
  selectedVideoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoPlayer: {
    width: screenWidth - 40, // Responsive width with padding
    height: (screenWidth - 40) * (9 / 16), // Maintain a 16:9 aspect ratio
    marginBottom: 20,
  },
  scrollView: {
    maxHeight: 40, // Reduced height for a more compact chapter selection bar
  },
  chapterItem: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5, // Reduced padding for a slimmer look
    backgroundColor: '#ddd',
    borderRadius: 20, // Rounded corners for a modern appearance
    justifyContent: 'center',
  },
  selectedChapterItem: {
    backgroundColor: '#007bff', // Highlight color for the selected chapter
  },
  chapterText: {
    color: '#000',
  },
});

export default VideosScreen;
