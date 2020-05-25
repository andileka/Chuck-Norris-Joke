import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import EmailsList from '../components/EmailsList';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Input, Button} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchEmails} from '../actions/fetchEmails';
import {addEmail} from '../actions/addEmail';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const TabIcon = (props) => (
  <Ionicons
    name={'md-mail'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

class Emails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      selectedType: null,
      email: '',
      emailValid: true,
    };

    this.validateEmail = this.validateEmail.bind(this);
  }

  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  componentDidMount() {
    this.props.fetchEmails();
  }

  validateEmail() {
    const {email} = this.state;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = re.test(email);
    this.setState({emailValid});
    return emailValid;
  }

  onPressSaveButton = () => {
    this.props.addEmail(this.state.email);
    this.setState({email: ''});
  };

  render() {
    const {email, emailValid} = this.state;
    const {emails, isFetching} = this.props.emails;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            refInput={(input) => (this.emailInput = input)}
            icon="envelope"
            value={email}
            onChangeText={(email) => this.setState({email})}
            placeholder="Enter email address"
            keyboardType="email-address"
            returnKeyType="next"
            errorMessage={
              emailValid ? null : 'Please enter a valid email address'
            }
            rightIcon={
              <Button
                title="Save"
                onPress={() => this.validateEmail() && this.onPressSaveButton()}
              />
            }
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.textStyle}>Your Emalis </Text>
          <EmailsList emails={emails} isFetching={isFetching} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 20,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#e6e9eb',
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {
    height: 80,
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#555c57',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

function mapStateToProps(state) {
  return {
    emails: state.emails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({fetchEmails}, dispatch),
    ...bindActionCreators({addEmail}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Emails);
