// SubscribeScreen.js
// Purpose: Screen component for users to subscribe to a newsletter. 
// Utilizes custom InputField components for input collection and manages subscription logic.
// Features keyboard avoidance and dismissible keyboard on touch outside input fields.


import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native';
import InputField from '../components/InputField';

const { height: height_window } = Dimensions.get('window');

const SubscribeScreen = () => {
    // State hooks for input values and error handling
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    // API keys (Consider securing these)
    const key = "c33830cf35915a643bf517427543fcad9bb74c7b";
    const secret = "a973a7a2dca0a5da98192a42026c541fe0332248";


    // Handles the submission of the subscription form

    function submitInfo() {
        console.log(firstName)
        console.log(lastName)
        console.log(email)

        // Validation for empty fields

        if (firstName === "" || lastName === "" || email === "") {
            setError("There was a field left blank.");
            console.log(error);
            return;
        }
        else {
            // API call for subscription
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
                    // Additional fields may (?) be omitted or included as necessary, question for uncle chris
                    "gender": null,
                    "country": "",
                    "region": "",
                    "city": "",
                    "lists": [],
                    "extra_fields": [],
                    "status": "confirmed"
                })
            })

            .then(() => {
                // Clearing inputs and error state upon successful submission
                setFirstName("");
                setLastName("");
                setEmail("");
                setError("");
                console.log('sub success');
            })
            .catch((error) => {
                // Error handling for failed subscription attempt
                console.error("Subscription Error:", error);
                setError("Subscription failed. Please try again later.");
                console.log('sub failed');
            });


        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        height: height_window,
        backgroundColor: '#6ACDEA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80, // Adjust padding as needed -- this may cause issues on other phones, need to test
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        width: '50%',
        margin: 5,
        padding: 20
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