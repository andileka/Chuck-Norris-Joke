import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';

export class Joke extends React.Component {
  render() {
    if (this.props.isFetching) {
      return (
        <View style={styles.jokeContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    } else {
      return (
        <View style={styles.jokeContainer}>
          <Text style={styles.textStyle}>{this.props.joke.joke}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  jokeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e9eb',
    padding: 30,
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#555c57',
    fontSize: 25,
  },
});
