import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AutocompleteComponent } from './Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../store/actions';


const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(searchMovies(searchQuery) as any);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie</Text>
      <AutocompleteComponent movieData={movies} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    width: '30%',
    height: 50,
  },
  input: {
    width: '60%',
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    color: '#ccc',
    textAlign: 'center'
  },
});

export default Header;
