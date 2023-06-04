import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Footer: React.FC = () => {

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Image style={styles.image} source={require('../../assets/movie.png')} />
        <Text style={{ textAlign: 'center'}}>Movie</Text>
      </View>
      <View style={styles.menu}>
        <Image style={styles.image} source={require('../../assets/ranking.png')} />
        <Text style={{ textAlign: 'center'}}>Ranking</Text>
      </View>
      <View style={styles.menu}>
        <Image style={styles.image} source={require('../../assets/find.png')} />
        <Text style={{ textAlign: 'center'}}>Find</Text>
      </View>
      <View style={styles.menu}>
        <Image style={styles.image} source={require('../../assets/menu.png')} />
        <Text style={{ textAlign: 'center'}}>Menu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  menu: {
    width: 10,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  image: {
    alignSelf: 'center',
    height: 30,
    width: 30,
  }
});

export default Footer;
