//HomeScreen.js
// Description: The HomeScreen component presents the mission and vision of the organization. It includes a logo,
// a mission statement, and details about ongoing projects. The layout is optimized for readability and engagement,
// using a SafeAreaView and ScrollView for a better user experience on all devices.
//
//Changes and improvements include:
//Added a safeAreaView style to ensure content is rendered within the safe area bounds of the screen.
//Introduced scrollViewContent style to improve the layout within ScrollView.
//Adjusted the logo style for better scaling and positioning.
//Simplified the layout by removing unnecessary View wrappers and consolidating styles.
//Cleaned up comments to provide clear descriptions of each section and its purpose.

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native';

const widthWin = Dimensions.get('window').width;
const heightWin = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image style={styles.logo} source={require('../media/logo.png')} />
        <View style={styles.divider}></View>
        <View style={styles.container}>
          <Text style={styles.header}>Our mission is to show faithful biblical stories to make disciple.</Text>
          <Text style={styles.body}>
            Currently, our team of talented illustrators and animators are working tirelessly to create a beautiful,
            timeless, faithful animated film of the entire book of Revelation, verse by verse, word for word.
            Revelation means making something unknown, known. Its ultimate message is amazing: that, in the end, Jesus
            conquered sin and death and will continue to make all things new! Ultimately, we want God to be glorified
            by our work. We hope Revelation will only be the beginning of The Animated Word, and that God will use it
            to reach a multitude!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  logo: {
    height: heightWin / 3,
    width: widthWin,
    resizeMode: 'contain',
    marginTop: 10,
  },
  divider: {
    width: widthWin,
    height: 20,
    backgroundColor: '#6ACDEA',
  },
  container: {
    flex: 1,
    backgroundColor: '#6ACDEA',
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
  },
  body: {
    fontSize: 20,
    color: 'white',
  },
});
