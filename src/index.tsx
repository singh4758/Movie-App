import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Movie } from "./modules/movie";
import { Ranking } from "./modules/ranking";
import { Find } from "./modules/find";
import { Menu } from "./modules/menu";

const App = () => {

  const [panel, setPanel] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ height: '10%', zIndex: 1 }}>
        <Header />
      </View>
      <View style={{ height: '80%'}}>
        {panel === 0 && <Movie />}
        {panel === 1 && <Ranking />}
        {panel === 2 && <Find />}
        {panel === 3 && <Menu />}
      </View>
      <View style={{ height: '10%' }}>
        <Footer setPanel={setPanel} />
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
  typeText: {
    color: '#ccc'
  }
});

export default AppWrapper;
