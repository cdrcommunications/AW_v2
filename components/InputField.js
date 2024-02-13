import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

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
