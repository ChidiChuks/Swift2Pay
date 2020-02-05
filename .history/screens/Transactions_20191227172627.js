import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

import { ListItem } from "react-native-elements"

export default class Transactions extends Component {
  static navigationOptions = {
    title: 'Transactions',
     headerStyle: {
       backgroundColor: 'rgb(147, 43, 173)',
     },
     headerTintColor: '#fff',
     //Sets Header text color
     headerTitleStyle: {
       fontWeight: 'bold',
       //Sets Header text style
     },
   };

   constructor(props){
     super(props);
     this.state={ 
       data: []
      };
   }

   componentDidMount() {
     this.getData()
   }

   getData = async () => {
     const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"
     fetch(apiURL).then((res) => res.json())
     .then((resJson) => {
       this.setState({
         data: resJson
       })
     })
   }

   renderRow = ({item}) => {
     return (
       <View style={styles.itemRow}>
         <Image source={{uri: item.url}} style={styles.itemImage} />
         <Text style={styles.itemText}>{item.title}</Text>
         <Text style={styles.itemText}>{item.id}</Text>
       </View>
     )
   }

  render() {
    return (
      <FlatList 
        style={styles.screen}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString() }
      />
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  }
});