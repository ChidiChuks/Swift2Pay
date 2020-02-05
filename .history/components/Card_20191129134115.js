import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.36,
    elevation: 7,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5
  }
});

export default Card;