import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';

const width_window = Dimensions.get('window').width;
const height_window = Dimensions.get('window').height;

const SubscribeScreen = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    // const [address1, setAddress1] = useState("")
    // const [address2, setAddress2] = useState("")
    // const [city, setCity] = useState("")
    // const [state, setState] = useState("")
    // const [zipcode, setZipCode] = useState("")
    const [error, setError] = useState("")

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
                <View style={styles.itemContainer}>
                    <Text style={styles.tag}>First Name</Text>
                    <TextInput 
                        onChangeText={text => setFirstName(text)}
                        style={styles.input}
                        value={firstName}/>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.tag}>Last Name</Text>
                    <TextInput 
                        onChangeText={text => setLastName(text)}
                        style={styles.input}
                        value={lastName}/>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.tag}>Email</Text>
                    <TextInput 
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                        value={email}/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => submitInfo()}
                    style={styles.button}>
                    <Text style={{color: '#6ACDEA', fontSize: 20, fontWeight: 'bold'}}>Subscribe</Text>
                </TouchableOpacity>
                <Text style={styles.error} >{error}</Text>
            </View> 
        </SafeAreaView>
        
    );
};

export default SubscribeScreen;

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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        width: '50%',
        margin: 30,
    },
    error: {
        color: "red", 
        fontSize: 20 
    },
    itemContainer: {
        flex: 1,
        width: "80%",
        margin: 15
    },
    input: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'white',
        marginTop: 10
    },
    tag: {
        flex: 1,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})


{/* <FormItem 
    name="First Name"
    onChangeText={(event) => setFirstName(event)}/>
<FormItem 
    name="Last Name"
    onChangeText={(event) => setLastName(event)}/>
<FormItem 
    name="Email"
    placeholder="someone@example.com"
    onChangeText={(event) => setEmail(event)}/>
<FormItem 
    name="Phone"
    onChangeText={(event) => setPhone(event)}/>
<FormItem 
    name="Address1"
    onChangeText={(event) => setAddress1(event)}/>
<FormItem 
    name="Address2"
    onChangeText={(event) => setAddress2(event)}/>
<FormItem 
    name="City"
    onChangeText={(event) => setCity(event)}/>
<FormItem 
    name="State"
    onChangeText={(event) => setState(event)}/>
<FormItem 
    name="Zip/Postal Code"
    onChangeText={(event) => setZipCode(event)}/> */}