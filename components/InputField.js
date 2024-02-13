// InputField.js
// Purpose: Reusable input field component for the SubscribeScreen.
// Features: Styled text input with label. Customizable for different data inputs by passing label, value, and onChangeText props.

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


// InputField component definition
// Props:
// - label: The text label displayed above the TextInput.
// - value: The input value bound to this field.
// - onChangeText: Function to update the state corresponding to this input field on text change.
const InputField = ({ label, value, onChangeText }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.tag}>{label}</Text>
        <TextInput
            onChangeText={onChangeText}
            style={styles.input}
            value={value}
        />
    </View>
);

const styles = StyleSheet.create({
    itemContainer: {
        width: "80%",
        margin: 15
    },
    input: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'white',
        marginTop: 10,
        height: 40, // Adjusted for consistency
        padding: 10,
    },
    tag: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5, // Added space between label and input
    },
});

export default InputField;
