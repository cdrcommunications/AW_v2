// DonationsScreen.js
// Description: Screen component for handling donations. It provides options for users to pay it forward,
// visit the organization's website, or subscribe to the newsletter. Each option is represented by a button
// that navigates to the respective link or screen.

//UPDATES:
//Simplified the styling by using a StyleSheet and added a container style for the view.
//Added comments to describe each button's functionality, making the code easier to understand at a glance.
//Consolidated text styling into a single buttonText style to maintain consistency and reduce redundancy.

import React from 'react';
import { TouchableOpacity, Text, View, Linking, StyleSheet } from 'react-native';

const DonationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Button to donate */}
      <TouchableOpacity
        onPress={() => Linking.openURL('https://forms.donorsnap.com/form?id=a591c17f-ceba-4835-94de-7d656c2ea07c')}
        style={styles.button}>
        <Text style={styles.buttonText}>Pay It Forward</Text>
      </TouchableOpacity>

      {/* Button to visit the website */}
      <TouchableOpacity
        onPress={() => Linking.openURL('https://theanimatedword.org')}
        style={styles.button}>
        <Text style={styles.buttonText}>Checkout Our Website!</Text>
      </TouchableOpacity>

      {/* Button to subscribe to the newsletter */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Subscribe')}
        style={styles.button}>
        <Text style={styles.buttonText}>Subscribe to the Newsletter!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ACDEA',
    margin: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DonationsScreen;
