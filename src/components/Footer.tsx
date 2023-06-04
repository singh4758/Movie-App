import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

interface Props {
  setPanel: (value: number) => void;
  panel: number;
}


const Footer: React.FC<Props> = ({ setPanel, panel }) => {

  const backgroundColorApply = (check:boolean) => (check ? {backgroundColor: 'blue' }: {});

  return (
    <View style={styles.container}>
      <View style={{...styles.menu, ...backgroundColorApply(panel === 0)}}>
        <TouchableOpacity onPress={() => setPanel(0)}>
          <Image
            style={styles.image}
            source={require("../../assets/movie.png")}
          />
          <Text style={styles.testStyle}>Movie</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.menu, ...backgroundColorApply(panel === 1)}}>
        <TouchableOpacity onPress={() => setPanel(1)}>
          <Image
            style={styles.image}
            source={require("../../assets/ranking.png")}
          />
          <Text style={styles.testStyle}>Ranking</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.menu, ...backgroundColorApply(panel === 2)}}>
        <TouchableOpacity onPress={() => setPanel(2)}>
          <Image
            style={styles.image}
            source={require("../../assets/find.png")}
          />
          <Text style={styles.testStyle}>Find</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.menu, ...backgroundColorApply(panel === 3)}}>
        <TouchableOpacity onPress={() => setPanel(3)}>
          <Image
            style={styles.image}
            source={require("../../assets/menu.png")}
          />
          <Text style={styles.testStyle}>Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  menu: {
    width: 10,
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  image: {
    alignSelf: "center",
    height: 30,
    width: 30,
  },
  testStyle: {
    textAlign: 'center',
    color: '#ccc'
  }
});

export default Footer;
