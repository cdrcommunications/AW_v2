import React, {useRef, useState, useEffect} from 'react';
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
import {WebView} from 'react-native-webview';

const widthWin = Dimensions.get('window').width;
const heightWin = Dimensions.get('window').height;
const VideoDetails = ({navigation, route}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  // const { description } = route.params
  // const {itemURI}  = route.params
  // var itemID = itemURI.replace('/videos/', '')
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://v1.nocodeapi.com/braven/vimeo/kPGAgTFeedrJjLQs/videoInfo?video_id=684828766", {
  //     method: "get",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       setData(res)
  //       console.log(JSON.stringify(data))
  //     })
  //     .catch(err => 
  //       console.log(err))
  // }, [])
  
  return (
    <SafeAreaView>
      <ScrollView style={{width:'100%', height:'100%'}}>
        {/* <WebView 
          source={{
            uri: "https://player.vimeo.com/video/684828766?h=30af257a62&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=233538"
          }}/> */}
        {/* <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "https://player.vimeo.com/video/684828766?h=30af257a62",
            }}

            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        /> */}
        {/* <Text>{description}</Text> */}
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
          }}

          useNativeControls
          playsInSilentLockedModeIOS ={ true }
          ignoreSilentSwitch={'ignore'}
          resizeMode="contain"
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </ScrollView>
    </SafeAreaView>

  );
};

export default VideoDetails;

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
