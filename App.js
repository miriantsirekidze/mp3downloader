import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import SearchIcon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context';
import Thumbnail from './components/Thumbnail';
import { useState } from 'react';

export default function App() {

  const [searchBar, setSearchBar] = useState();
  const [urlID, setUrlID] = useState();
  const [url, setUrl] = useState();

  const handleThumbnail = () => {
    if (url.length < 0) {
      return null
    }else {
      let slicedUrl = url.slice(-11)
      setUrlID(slicedUrl)
      const Url = "https://i.ytimg.com/vi/"+ slicedUrl +"/hqdefault.jpg?"
      setSearchBar(Url)}
  }



  return (
    <SafeAreaView style={{backgroundColor: "#121111", flex: 1}}>
      <View style={{flexDirection: "row", justifyContent: 'space-around', alignItems: "center", marginBottom: 50}}>
        <TextInput style={styles.searchBar} placeholder='Insert Video URL' value={url} onChangeText={text => setUrl(text)}/>
        <TouchableOpacity style={styles.iconStyle} hitSlop={{bottom:5, left: 5, right: 10, top: 5}} onPress={() => handleThumbnail()}>
          <SearchIcon name="search" size={24} color="#121111" style={{marginTop: 5}}/>
        </TouchableOpacity>
      </View>
      <Thumbnail id={urlID}/>
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
  searchBar: {
    padding: 8,
    width: 300,
    backgroundColor: "#DFDEDE",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "blue"
  },
  iconStyle:{
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: "#2E17B9",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue"
  },
  thumbnailFrame: {
    marginTop: 50,
    width: "100%",
    height: 250,
    backgroundColor: "#212020",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue"
  }
})
