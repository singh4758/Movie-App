import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Autocomplete from "react-native-autocomplete-input";

interface Props {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
  movieData: { Title: string }[];
}

interface AutocompleteItemProps {
  item: {
    Title: string;
  };
}

export const AutocompleteComponent: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  movieData,
}) => {
  const handleQueryChange = (text: any) => {
    console.log(text);

    // Fetch the matching data from your data source
    // and update the "data" state
    // Example:
    // const matchingData = fetchMatchingData(text);
    // setData(matchingData);
  };

  function handleSelectItem(item: string) {
    throw new Error("Function not implemented.");
  }

  const renderItem: React.FC<AutocompleteItemProps> = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectItem(item.Title)}>
      <Text style={styles.item}>{item.Title}</Text>
    </TouchableOpacity>
  );

  return (
    <Autocomplete
      data={movieData}
      value={searchQuery}
      onChangeText={setSearchQuery}
      flatListProps={{ renderItem(props) {
          return <ScrollView>{ renderItem(props) }</ScrollView>
      }, }}
      containerStyle={styles.autocompleteContainer}
      inputContainerStyle={styles.inputContainer}
      listContainerStyle={styles.listContainer}
      hideResults={!movieData.length}
      style={{
        backgroundColor: "#241749",
        textAlign: "center",
        borderColor: "#ccc",
        color: "#ccc",
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  autocompleteContainer: {
    width: "60%",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  listContainer: {
    width: '100%',
    marginTop: 5,
    minHeight: 300,
    position: 'absolute',
    top: 40
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
