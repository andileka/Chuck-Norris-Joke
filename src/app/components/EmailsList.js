import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';

export default class EmailsList extends React.Component {
  render() {
    if (this.props.isFetching) {
      return (
        <View style={styles.contentContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            data={this.props.emails}
            renderItem={({item}) => (
              <Text style={styles.item}>{item.email}</Text>
            )}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  item: {
    padding: 10,
    paddingLeft: 30,
    fontSize: 18,
    height: 44,
    fontWeight: 'bold',
    color: '#555c57',
    fontSize: 20,
    borderColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
});
