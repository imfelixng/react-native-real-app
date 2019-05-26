import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import FastImage from "react-native-fast-image";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const App = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    loadWallpapers();
  }, []);

  const loadWallpapers = async () => {
    let res = null;
    try {
      res = await axios.get(
        "https://api.unsplash.com/photos/random?count=30&client_id=beebb77da5b99592f8fb5d43c04ece4620a007d8ccfe6c1df4eccda14e9574fc"
      );
    } catch (error) {
      console.log(error);
      res = null;
    }

    if (res) {
      setImages(res.data);
    }
    setLoading(false);
  };

  const renderItem = image => {
    return (
      <View style = { { flex: 1 } }>
        <View style = { { flex: 1, ...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center' } }>
          <ActivityIndicator size = 'large' color = 'grey' />
        </View>
        <View key={image.urls.regular} style={{ width, height }}>
          <FastImage
            source={{ uri: image.urls.regular }}
            style={{ flex: 1, width: null, height: null }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          {isLoading && <ActivityIndicator size="large" color="grey" />}
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            horizontal
            pagingEnabled
            data={images}
            renderItem={item => renderItem(item.item)}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
