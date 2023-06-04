import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

interface Props {
  setPanel: (value: number) => void;
}

const Footer: React.FC<Props> = ({ setPanel }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setPanel(0)}>
          <Image
            style={styles.image}
            source={require("../../assets/movie.png")}
          />
          <Text style={{ textAlign: "center" }}>Movie</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setPanel(1)}>
          <Image
            style={styles.image}
            source={require("../../assets/ranking.png")}
          />
          <Text style={{ textAlign: "center" }}>Ranking</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setPanel(2)}>
          <Image
            style={styles.image}
            source={require("../../assets/find.png")}
          />
          <Text style={{ textAlign: "center" }}>Find</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setPanel(3)}>
          <Image
            style={styles.image}
            source={require("../../assets/menu.png")}
          />
          <Text style={{ textAlign: "center" }}>Menu</Text>
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
  },
  image: {
    alignSelf: "center",
    height: 30,
    width: 30,
  },
});

export default Footer;
