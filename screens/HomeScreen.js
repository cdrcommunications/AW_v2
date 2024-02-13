import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import {Video} from 'expo-av';
// import Authenticators from '../components/Authenticators';

const widthWin = Dimensions.get('window').width;
const heightWin = Dimensions.get('window').height;
const HomeScreen = () => {
  // const video = useRef(null)
  // const [status, setStatus] = useState({});
  // const GetByIdVimeo = async (ID) => {
  //   const Token = Authenticators.vimeo.ACCESS_TOKEN;
  // }
  
  // function getHomeVideo() {
  //   client.request({
  //     method: 'GET',
  //     path: '/videos/{325277974}'
  //   })
  //   console.log("success");
  // }
  // function getHomeVideo() {
  //   fetch(`https://api.vimeo.com/videos/${325277974}`, {
  //     method: 'GET'
  //   })

  // }
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.logo} source={require('../media/logo.png')} />
        <View style={{width: widthWin, height: 20, backgroundColor: '#6ACDEA'}}></View>
        <View style={{backgroundColor: '#6ACDEA'}}>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Our mission is to show faithful biblical stories to make disciple.</Text>
          <Text style={styles.body}>
          Currently, our team of talented illustrators and animators are working tirelessly to create a beautiful, timeless, faithful animated film of the entire book of Revelation, verse by verse, word for word.
          Revelation means making something unknown, known. Its ultimate message is amazing: that, in the end, Jesus conquered sin and death and will continue to make all things new!
          Ultimately, we want God to be glorified by our work. We hope Revelation will only be the beginning of The Animated Word, and that God will use it to reach a multitude!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    height: heightWin/3,
    width: widthWin,
    flex: 1,
    top: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    flex: 1,
    color: 'white',
    margin: 10
  },
  body: {
    fontSize: 20,
    flex: 1,
    color: 'white',
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#6ACDEA'
  },
  video: {
    alignSelf: 'center',
    width: 368,
    height: 207,
    backgroundColor: '#6ACDEA'
  },
})
