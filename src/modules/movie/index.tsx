import { View, StyleSheet, Text } from "react-native";
import HorizontalScroller from "../../components/HorizantalScroller";

interface Props {
  styles?: any
}

export const Movie: React.FC<Props> = (props) => {

  const { styles } = props;

  const movieType = ["Recommend", "Generic", "Science Fiction", "Comedy"];
  return (
    <View style={styles}>
        <HorizontalScroller>
          {movieType.map((type) => (
            <View key={type} style={innerStyle.movieTypeItem}>
              <Text style={innerStyle.typeText}>{type}</Text>
            </View>
          ))}
        </HorizontalScroller>
      </View>
  );
}

const innerStyle = StyleSheet.create({
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