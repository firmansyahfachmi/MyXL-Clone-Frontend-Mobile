import React, {Component, Fragment} from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';

import {Input, Item, Icon, Toast} from 'native-base';
import {withNavigation} from 'react-navigation';

import {connect} from 'react-redux';
import {verifyOTP} from '../Publics/Redux/Action/user';

import AsyncStorage from '@react-native-community/async-storage';

import Background from '../Assets/background.jpg';

class Verification extends Component {
  constructor() {
    super();
    this.state = {
      otp: '',
    };
  }
  handleChange = value => {
    let otp = {...this.state.otp};
    otp = value;
    this.setState({
      otp,
    });
  };

  submitVerify = () => {
    this.props
      .dispatch(
        verifyOTP(this.props.navigation.getParam('number'), {
          otp: this.state.otp,
        }),
      )
      .then(res => {
        if (!res.value.data.error) {
          AsyncStorage.setItem(
            'userNumber',
            this.props.navigation.getParam('number').toString(),
          );
          Toast.show({
            text: 'Berhasil Login',

            type: 'success',
            position: 'bottom',
          });
          this.props.navigation.navigate('Home');
        } else {
          Toast.show({
            text: res.value.data.error,

            type: 'danger',
            position: 'bottom',
          });
        }
      });
  };

  render() {
    console.log('s', this.state.otp);
    return (
      <Fragment>
        <Image source={Background} style={styles.splash} />

        <View style={styles.container}>
          <View style={{width: '100%', height: 60, justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('InputNumber')}>
              <Icon
                type="AntDesign"
                name="arrowleft"
                style={{color: 'white', fontSize: 18}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', marginTop: 30, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>
              Masukkan 6 kode verifikasi yang dikirimkan ke nomor Anda
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                marginTop: 10,
                fontSize: 16,
              }}>
              {this.props.navigation.getParam('number')}
            </Text>
            <View style={{flexDirection: 'row', width: '70%'}}>
              <Item stackedLabel style={styles.field}>
                <TextInput
                  style={styles.digit}
                  maxLength={6}
                  keyboardType={'numeric'}
                  onChangeText={text => this.handleChange(text)}
                />
              </Item>
            </View>
          </View>
          <View style={{width: '80%', paddingTop: 20, height: 50}}>
            <TouchableOpacity
              onPress={this.submitVerify}
              activeOpacity={0.8}
              style={{
                backgroundColor: 'yellow',
                borderRadius: 3,
                padding: 15,
                alignItems: 'center',
              }}>
              <Text>LANJUTKAN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = {
  field: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  digit: {
    width: '100%',
    color: 'white',
    height: 30,
    padding: 0,
    textAlign: 'center',
    letterSpacing: 10,
    fontSize: 22,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  splash: {
    width: '100%',
    height: '100%',
    zIndex: 0,
    position: 'absolute',
  },
};

const mapStateToProps = state => {
  return {
    error: state.user.error,
  };
};

export default connect(mapStateToProps)(withNavigation(Verification));
