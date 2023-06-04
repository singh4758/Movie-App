import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { searchMovies } from "./store/actions";
import store from "./store";
import Header from "./components/Header";
import HorizontalScroller from "./components/HorizantalScroller";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(searchMovies(searchQuery) as any);
    }, 200);

    return clearTimeout(timeoutId);
  }, [searchQuery]);

  const movieType = ["Recommend", "Generic", "Science Fiction", "Comedy"];

  return (
    <View style={styles.container}>
      <View style={{ height: '10%' }}>
        <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </View>
      <View style={{ height: '80%' }}>
        <HorizontalScroller>
          {movieType.map((type) => (
            <View key={type} style={styles.movieTypeItem}>
              <Text style={styles.typeText}>{type}</Text>
            </View>
          ))}
        </HorizontalScroller>
      </View>
      <View style={{ height: '10%' }}>
        <Footer />
      </View>
    </View>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#181132",
    width: "100%",
    height: "100%",
  },
  movieTypeItem: {
    height: 40,
    padding: 10,
    margin: 5,
    backgroundColor: '#241749',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    color: '#ccc'
  }
});

export default AppWrapper;
