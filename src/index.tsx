import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { searchMovies } from './store/actions';
import store from './store';
import Header from './components/Header';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(searchMovies(searchQuery) as any);
    }, 200);

    return clearTimeout(timeoutId);
  }, [searchQuery])

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} >
        <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </View>
      <View style={{ flex: 4 }} />
      <View style={{ flex: 1 }}/>
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
    backgroundColor: '#181132',
    width: '100%',
    height: '100%'
  }
});

export default AppWrapper;