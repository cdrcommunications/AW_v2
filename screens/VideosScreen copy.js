import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView
} from 'react-native';
import {Video} from 'expo-av';

const widthWin = Dimensions.get("window").width;
const heightWin = Dimensions.get("window").height;
const VideosScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScrollView>
    <Image style={styles.logo} source={require('../media/logo.png')} />
    <View style={styles.container}>
      <Text style={styles.title}>Revelation Chapters:</Text>

      
      <Text style={styles.videoTitle}>Chapter 1:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/progressive_redirect/playback/651686561/rendition/1080p/file.mp4?loc=external&signature=cf8a30b2f57d4832b8f67f3d0bea757966f4d643211b74d099ee160c06a36534',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <Text style={styles.videoTitle}>Chapter 2:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/660474942.hd.mp4?s=be459fd2ab08e7661e32adcbdf5a3a01f1730f84&profile_id=175',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      

      <Text style={styles.videoTitle}>Chapter 3:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/progressive_redirect/playback/671321733/rendition/1080p?loc=external&signature=6aede1f299d0d0959833e72e82835181c4a87c7e65a3a6a0236dc65d8f1f6afe',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 4:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 5:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 6:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 7:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />


<Text style={styles.videoTitle}>Chapter 8:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/progressive_redirect/playback/671321733/rendition/1080p?loc=external&signature=6aede1f299d0d0959833e72e82835181c4a87c7e65a3a6a0236dc65d8f1f6afe',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 9:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 10:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 11:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 12:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />


<Text style={styles.videoTitle}>Chapter 13:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/progressive_redirect/playback/671321733/rendition/1080p?loc=external&signature=6aede1f299d0d0959833e72e82835181c4a87c7e65a3a6a0236dc65d8f1f6afe',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 14:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 15:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 16:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 17:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />


<Text style={styles.videoTitle}>Chapter 18:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/progressive_redirect/playback/671321733/rendition/1080p?loc=external&signature=6aede1f299d0d0959833e72e82835181c4a87c7e65a3a6a0236dc65d8f1f6afe',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 19:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 20:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 21:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

<Text style={styles.videoTitle}>Chapter 22:</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://player.vimeo.com/external/651686561.hd.mp4?s=57033a1088963e9c0ca80fb2ada982e54fb0981c&profile_id=175',
        }}

        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
    </ScrollView>


  );
};

export default VideosScreen;

const styles = StyleSheet.create({
  logo: {
    height: heightWin/3,
    width: widthWin,
    flex: 1,
    top: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#6ACDEA',
  },
  video: {
    alignSelf: 'center',
    width: 368,
    height: 207,
    marginBottom: 50,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  videoTitle: {
    alignSelf: 'center',
  },
})
