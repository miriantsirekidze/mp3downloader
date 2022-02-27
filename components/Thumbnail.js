import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import React, {useState, useCallback} from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import axios from "axios";


const Thumbnail = (props) => {

  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => { if (state === "ended") { setPlaying(false) } }, []);

  const YTDownloader = () => {
    var options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: {id: props.id},
      headers: {
        'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
        'x-rapidapi-key': // Insert your rapid API key here, still haven't found a way to censor API keys and for some reason dotenv doesn't work for me  
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.link);
      Linking.openURL(response.data.link)
    }).catch(function (error) {
      console.error(error);
    });

  }

  return (
    <View>
      <Text style={styles.marginColor}>...</Text>
      <YoutubePlayer height={200} width={"100%"} play={playing} videoId={props.id} onChangeState={onStateChange} />
      <Text style={styles.marginColor}>...</Text>
      <View style={{height: 100, width: 100, alignSelf: "center"}}>
        <TouchableOpacity style={{padding: 4, borderRadius: 30, backgroundColor: "#2E17B9", borderWidth: 2, borderColor: "#121111", marginTop: 50}} onPress={() => YTDownloader()}>
          <Text style={{color: "#121111", fontSize: 14, fontWeight: "bold", alignSelf: "center", padding: 4}}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  thumbnailFrame: {
    marginTop: 50,
    width: "100%",
    height: 250,
    backgroundColor: "#212020",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue"
  },
  marginColor:{
    height: 5, 
    width: "100%", 
    backgroundColor: "#2E17B9"
  }
})

export default Thumbnail
