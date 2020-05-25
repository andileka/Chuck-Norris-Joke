import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Joke} from '../components/Joke';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchJoke} from '../actions/fetchJoke';
import {shareJoke} from '../actions/shareJoke';

const TabIcon = (props) => (
  <Ionicons
    name={'md-home'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
    header: 'screen',
  };

  componentDidMount() {
    this.props.fetchJoke();
  }
  onPressShareJokeButton = () => {
    this.props.shareJoke(this.props.joke);
    this.props.fetchJoke();
  };

  render() {
    const {joke, isFetching} = this.props.joke;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Chuck Norris Joke</Text>
        <Joke isFetching={isFetching} joke={joke} />
        <Button
          title="ANOTHER JOKE"
          activeOpacity={1}
          underlayColor="transparent"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => this.props.fetchJoke()}
        />
        <Button
          title="SHARE JOKE"
          activeOpacity={1}
          underlayColor="transparent"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => this.onPressShareJokeButton()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e9eb',
  },
  buttonStyle: {
    height: 50,
    width: 250,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#00a7de',
    borderRadius: 30,
  },
  buttonContainerStyle: {
    marginVertical: 10,
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    color: '#00a7de',
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#2a2b2b',
    fontSize: 29,
    marginTop: 10,
  },
});

function mapStateToProps(state) {
  return {
    joke: state.joke,
    emails: state.emails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({fetchJoke}, dispatch),
    ...bindActionCreators({shareJoke}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
