import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Linking,
  StyleSheet,
  TextInput
} from 'react-native';

const DonationsScreen = ({navigation}) => {

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://forms.donorsnap.com/form?id=a591c17f-ceba-4835-94de-7d656c2ea07c')}
        style={styles.button}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Pay It Forward</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://theanimatedword.org')}
        style={styles.button}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Checkout Our Website!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Subscribe')}
        style={styles.button}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Subscribe to the Newsletter!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ACDEA',
    margin: 50,
    borderRadius: 25
  },
  textInput: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    width: '80%',
    padding: 10,
    borderRadius: 20
  }
})

export default DonationsScreen;
