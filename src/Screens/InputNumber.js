import React, {Component, Fragment} from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';

import {Input, Item, Icon, Toast} from 'native-base';
import {withNavigation} from 'react-navigation';

import {connect} from 'react-redux';
import {login} from '../Publics/Redux/Action/user';

import Background from '../Assets/background.jpg';

class InputNumber extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
    };
  }
  handleChange = value => {
    let number = {...this.state.number};
    number = value;
    this.setState({
      number,
    });
  };
  render() {
    return (
      <Fragment>
        <Image source={Background} style={styles.splash} />
        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              height: 60,
              justifyContent: 'center',
            }}></View>
          <View style={{width: '70%', marginTop: 30, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Silahkan masukkan nomor Anda</Text>
            <Item stackedLabel style={{justifyContent: 'center'}}>
              <TextInput
                placeholder="Masukan Nomor XL Anda"
                placeholderTextColor="rgba(255,255,255,0.5)"
                keyboardType={'numeric'}
                maxLength={13}
                style={{
                  color: 'white',
                  height: 30,
                  padding: 0,
                  textAlign: 'center',
                  fontSize: 18,
                }}
                onChangeText={text => this.handleChange(text)}
              />
            </Item>
          </View>
          <View style={{width: '80%', paddingTop: 20, height: 50}}>
            <TouchableOpacity
              onPress={() =>
                this.state.number === null
                  ? Toast.show({
                      text: 'Isi nomor Anda',
                      type: 'default',
                      position: 'bottom',
                    })
                  : this.state.number.length > 13
                  ? Toast.show({
                      text: 'Nomor maksimal 13 karakter',
                      type: 'default',
                      position: 'bottom',
                    })
                  : this.props.dispatch(login(this.state.number)).then(() => {
                      this.props.navigation.navigate('Home', {
                        number: this.state.number,
                      });
                    })
              }
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

export default connect()(withNavigation(InputNumber));
