import React, { ReactNode } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

interface Props {
  children: ReactNode,
}


const HorizontalScroller: React.FC<Props> = ({ children }) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default HorizontalScroller;