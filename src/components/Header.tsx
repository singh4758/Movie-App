import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface Props {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
}

const Header: React.FC<Props> = ({ searchQuery, setSearchQuery }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
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
