import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import InputField from '../components/InputField';

const { height: height_window } = Dimensions.get('window');

const SubscribeScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const key = "c33830cf35915a643bf517427543fcad9bb74c7b";
    const secret = "a973a7a2dca0a5da98192a42026c541fe0332248";

    function submitInfo() {
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        if(firstName === "" || lastName === "" || email === "") 
        {
            setError("There was a field left blank.");
            console.log(error);
            return;
        }
        else {
            console.log("here")
            fetch(`https://theanimatedword.org/wp-json/newsletter/v2/subscriptions?client_key=${key}&client_secret=${secret}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "first_name": firstName,
                    "last_name": lastName,
                    "gender": null,
                    "country": "",
                    "region": "",
                    "city": "",
                    "lists": [],
                    "extra_fields": [], 
                    "status": "confirmed"
                })
            })
            setError("");
            setFirstName("");
            setLastName("");
            setEmail("");
        }
      }
    
      return (
        <SafeAreaView style={styles.form}>
            <View style={styles.container}>
                <InputField label="First Name" value={firstName} onChangeText={setFirstName} />
                <InputField label="Last Name" value={lastName} onChangeText={setLastName} />
                <InputField label="Email" value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={submitInfo} style={styles.button}>
                    <Text style={styles.buttonText}>Subscribe</Text>
                </TouchableOpacity>
                {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        height: height_window,
        backgroundColor: '#6ACDEA'
    },
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        width: '50%',
        margin: 30,
    },
    buttonText: {
        color: '#6ACDEA',
        fontSize: 20,
        fontWeight: 'bold'
    },
    error: {
        color: "red",
        fontSize: 20
    },
    // Styles for itemContainer, input, and tag moved to InputField component
});

export default SubscribeScreen;