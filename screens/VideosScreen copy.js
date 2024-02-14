import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {Video} from 'expo-av';

const widthWin = Dimensions.get("window").width;
const heightWin = Dimensions.get("window").height;

// const VideosScreen = ({navigation}) => {
  // const [temp, setTemp] = useState([
  //     {
  //       uri: 1,
  //       name: "first",
  //       description: "cool",
  //       duration: "1"
  //     },
  //     {
  //       uri: 2,
  //       name: "second",
  //       description: "better",
  //       duration: "2"
  //     },
  //     {
  //       uri: 3,
  //       name: "third",
  //       description: "best",
  //       duration: "3"
  //     }
  //   ]);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://v1.nocodeapi.com/braven/vimeo/kPGAgTFeedrJjLQs/channelVideos?channel_id=1777320`, {
  //     method: "get",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       setData(res.data)
  //       console.log(JSON.stringify(data))
  //     })
  //     .catch(err => 
  //       console.log(err))
  // }, [])

  // const renderItem = ({item}) => (
  //   <TouchableOpacity 
  //     style={styles.itemContainer}
  //     onPress = {() => 
  //         navigation.navigate('VideoDetails', {itemURI: item.uri})}>
  //     <View style={styles.thumbnail}></View>
  //     <View style={styles.metadata}>
  //         <Text style={styles.name}>{item.name}</Text>
  //         <Text style={styles.duration}>{item.duration}</Text>
  //     </View>          
  //   </TouchableOpacity>
  // );

  // return (
  //   <SafeAreaView>
  //     <FlatList
  //       data={data}
  //       renderItem={renderItem}
  //       keyExtractor = {video => video.uri}
  //       /> 
  //   </SafeAreaView>

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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/660474942/rendition/1080p/file.mp4?loc=external&signature=7e9c655a89e8f92d08c59dbfb980197c79b8721224092516bfadddd132167696',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/671321733/rendition/1080p/file.mp4?loc=external&signature=cec872748c2c2cf03160c9ff1ecd943aa7afdd45fe17934ded2c13b9e5fa6761',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/683367342/rendition/1080p/file.mp4?loc=external&signature=991ad3834ef034eb44c2ebc359e0d5334218554cd638205c6b6744a7edabfdda',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/694916199/rendition/540p/file.mp4?loc=external&signature=26592597c1fbc8d793fe2a402a2591e65d6d893331131702ee1276084bec9fe4',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/704170500/rendition/1080p/file.mp4?loc=external&signature=27441d98fd687cae5e160bf58fa2d9b5890583e994f33a529fe6c493816d9c0c',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/715742918/rendition/1080p/file.mp4?loc=external&signature=cee18d4091324ac2ad3386ce7f124f458052ec853cc29a013e1c5cf3ea7589c0',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/725754012/rendition/1080p/file.mp4?loc=external&signature=1a4783c0d3a4cdd29fd9cc1836a38d3053ca710a930a7eb5d8293948ca77ad03',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727530111/rendition/540p/file.mp4?loc=external&signature=b0f9a6c526590abe144a4f5f4654676406c740930f44fbbe35c3137e075cede9',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727533239/rendition/1080p/file.mp4?loc=external&signature=b44f916066f94acf3de974bae097e5a329809618bdee058b0853b4cb2fb1b59f',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727531277/rendition/1080p/file.mp4?loc=external&signature=b92301fbff299fd0c306266cbd20b9a68f845be55dab4f2bd45530f52d4501fa',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727496155/rendition/1080p/file.mp4?loc=external&signature=146a7fc9d62b5a2f06ecf86a1dbcdbb3d54f7c8477e0851b585c4b1044a78d15',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727536967/rendition/1080p/file.mp4?loc=external&signature=cb8db8c8d47044513746b841ae30bed41dd5f6b4dfdf776fbdfb00cbafc9a447',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727540388/rendition/1080p/file.mp4?loc=external&signature=45da2063369833fd3f6b6c003c13615c891bff638a2e36feae62c72e47e3f2f0',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727542120/rendition/1080p/file.mp4?loc=external&signature=e64a51594035439c8f8b378690ec5cff52a9955789c5056e5f4daadcadb0a867',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727542875/rendition/1080p/file.mp4?loc=external&signature=adc75d81cee7d88d658ca7af471cd95dc1e5ae80cc6fc2970cfa6f01786e39fd',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727545574/rendition/1080p/file.mp4?loc=external&signature=efdaf280f0d950d215324b7b3833fe90f60334bc053380da72cada8d6bf4990c',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727545045/rendition/1080p/file.mp4?loc=external&signature=b10e289cdb62f91fc0c5b787475c3000ba67a7d014fd73ceeed3a0baae75086c',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727544467/rendition/1080p/file.mp4?loc=external&signature=c5b19434f8e3935520b052d9680939bfe298708c1513e3285ca67c3842657989',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727544062/rendition/1080p/file.mp4?loc=external&signature=5adabc85c1f76a182543c81b4d2c83ddbd2c83b52d878602a5dc0f7ab889ace1',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727543532/rendition/1080p/file.mp4?loc=external&signature=81dd955a618886e4a0251d2a0624896f0fc90be48ad4bac79668f3031ade5181',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
          uri: 'https://player.vimeo.com/progressive_redirect/playback/727543034/rendition/1080p/file.mp4?loc=external&signature=d6cd5450f0d798156813f9639aa3a4423fcaf5eac6f274817220b3c8ad191afc',
        }}
        onLoad={async () => {
          await video.current?.playAsync();
          await video.current?.pauseAsync();
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
//   itemContainer: {
//     display: 'flex',
//     width: widthWin,
//     height: heightWin/4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   thumbnail: {
//       position: 'absolute',
//       width: '60%',
//       height: '80%',
//       backgroundColor: 'black'
//   },
//   metadata: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100%',
//       width: '100%'
//   },
//   name: {
//       flex: 1,
//       fontWeight: 'bold',
//       color: 'black'
//   },
//   duration: {
//       flex: 1,
//       color: 'black'
//   }
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

