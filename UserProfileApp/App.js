/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      address: '',
      profilePhotoUrl: null,
      isProfileSaved: false,
    };
  }

  setProfilePic = (profilePhotoUrl) => {
    this.setState({profilePhotoUrl});
  };

  handleSaveDetails = () => {
    this.setState({isProfileSaved: !this.state.isProfileSaved});
  };

  setData = (key, value) => {
    const state = {};
    state[key] = value;
    this.setState(state);
  };

  render() {
    return (
      <SafeAreaView style={styles.containerBody}>
        <View style={styles.headerBody}>
          <Text style={styles.headerText}>
            {!this.state.isProfileSaved ? 'Edit Profile' : 'User Profile'}
          </Text>
        </View>
        <ScrollView style={styles.body}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />
          <View style={styles.container}>
            <View style={[styles.subContainer]}>
              <TextInput
                style={styles.input}
                placeholder={'Username'}
                value={this.state.name}
                onChangeText={(name) => this.setData('name', name)}
              />
            </View>
            <View style={styles.subContainer}>
              <TextInput
                style={styles.input}
                placeholder={'Email'}
                value={this.state.email}
                editable={true}
                onChangeText={(email) => this.setData('email', email)}
              />
            </View>
            <View style={styles.subContainer}>
              <TextInput
                style={styles.input}
                placeholder={'password'}
                editable={true}
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(password) => this.setData('password', password)}
              />
            </View>
            <View style={styles.subContainer}>
              <TextInput
                keyboardType={'address'}
                maxLength={3}
                onChangeText={(address) => this.setData('address', address)}
                placeholder={'Address'}
                style={styles.input}
                value={this.state.address}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.create}
            onPress={this.handleSaveDetails}>
            <Text style={styles.txtCreate}>
              {!this.state.isProfileSaved ? 'Save' : 'Edit'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
  },
  containerBody : {
    backgroundColor: 'white', 
    flex: 1,
  },
  container: {
    marginHorizontal: 40,
    marginTop: 40,
  },
  headerBody : {
    backgroundColor: 'green',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText : {
    fontSize: 16, 
    fontWeight: '600', 
    color: 'white'
  },
  input: {
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d4d4d4',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  subContainer: {
    paddingVertical: 6,
  },
  txtCreate: {
    color: '#fff',
    fontSize: 12,
    fontStyle: 'normal',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  create: {
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 12,
  },
  txtHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 1.09,
    color: '#e1e1e1',
    marginBottom: 6,
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioContainer: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    borderRadius: 4,
    borderColor: '#c1c1c1',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  border: {
    height: 1,
    width: '100%',
    backgroundColor: '#c1c1c1',
    marginTop: 10,
    marginBottom: 10,
  },
  errorBorder: {
    borderColor: '#acd',
  },
  txtVerify: {
    fontSize: 9,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.82,
    textAlign: 'right',
    color: '#523311',
    marginTop: 4,
  },
  mobileNumberError: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  txtVerifyOTP: {
    fontSize: 9,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.82,
    textAlign: 'center',
    color: 'red',
  },
  invalidContactContainer: {
    backgroundColor: 'red',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginTop: 4,
  },
  txtInvalidContact: {
    fontSize: 9,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.82,
    textAlign: 'center',
    color: '#fff',
  },
  imgProfile: {
    marginBottom: 8,
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 40,
    bottom: 14,
    right: 4,
  },
});
