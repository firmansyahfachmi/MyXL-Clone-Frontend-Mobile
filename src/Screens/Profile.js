import React, {Component, Fragment} from 'react';
import {} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {
  Icon,
  Separator,
  ListItem,
  Item,
  Input,
  Label,
  Toast,
} from 'native-base';

import {connect} from 'react-redux';
import {getUser, updateUser} from '../Publics/Redux/Action/user';

import AsyncStorage from '@react-native-community/async-storage';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      number: '',
    };
  }
  componentDidMount = async () => {
    await AsyncStorage.getItem('userNumber').then(res => {
      this.setState({
        number: res,
      });
    });

    await this.props.dispatch(getUser(this.state.number)).then(() => {
      this.setState({
        formData: {
          name: this.props.user.name,
          email: this.props.user.email,
          alternateNumber: this.props.user.alternateNumber,
        },
      });
    });
  };

  handleChange = (name, value) => {
    let formData = {...this.state.formData};
    formData[name] = value;
    this.setState({
      formData,
    });
  };

  submitEdit = () => {
    this.props
      .dispatch(updateUser(this.props.user.number, this.state.formData))
      .then(() =>
        Toast.show({
          text: 'PROFIL TERSIMPAN',
          type: 'success',
          position: 'bottom',
        }),
      );
  };

  // requestPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: 'Cool Photo App Camera Permission',
  //         message:
  //           'Cool Photo App needs access to your camera ' +
  //           'so you can take awesome pictures.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  render() {
    return (
      <Fragment>
        <View>
          <StatusBar backgroundColor={'#002CBA'} />
        </View>

        <View style={styles.header}>
          <View
            style={[styles.headerItem, {width: '100%', flexDirection: 'row'}]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              activeOpacity={0.8}
              style={{width: '20%', alignItems: 'center'}}>
              <Icon
                type="AntDesign"
                name="arrowleft"
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
            <View style={{width: '80%'}}>
              <Text style={{fontSize: 16, color: 'white', fontWeight: '700'}}>
                Ganti Profil
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          style={{
            height: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'rgb(219,222,229)',
              width: '100%',
              height: 180,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={this.requestPermission}
              style={{justifyContent: 'center', alignItems: 'center'}}
              activeOpacity={1}>
              <View
                style={{
                  backgroundColor: 'silver',
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{uri: this.props.user.photo}}
                  style={{flex: 1}}
                />
              </View>
              <Text style={{color: 'grey', marginTop: 10, fontSize: 12}}>
                TAMBAH FOTO
              </Text>
            </TouchableOpacity>
          </View>
          <Separator
            style={{
              paddingVertical: 10,
              height: 'auto',
              backgroundColor: 'rgb(219,222,229)',
            }}>
            <Text style={{color: 'grey'}}>PENGATURAN AKUN</Text>
          </Separator>
          <View style={{paddingHorizontal: 16, marginTop: 10}}>
            <Item stackedLabel>
              <Label style={{fontSize: 13}}>NOMOR ANDA</Label>
              <Input
                style={{
                  height: 'auto',
                  paddingVertical: 0,
                  fontSize: 14,
                  paddingLeft: 0,
                  color: 'silver',
                }}
                placeholderTextColor="silver"
                defaultValue={this.props.user.number}
                disabled
              />
            </Item>
          </View>
          <View style={{paddingHorizontal: 16, marginTop: 10}}>
            <Item stackedLabel>
              <Label style={{fontSize: 13}}>NAMA</Label>
              <Input
                placeholder="Masukan nama Anda"
                style={{
                  height: 'auto',
                  paddingVertical: 0,
                  fontSize: 14,
                  paddingLeft: 0,
                }}
                placeholderTextColor="silver"
                defaultValue={this.props.user.name}
                onChangeText={text => this.handleChange('name', text)}
              />
            </Item>
          </View>
          <View style={{paddingHorizontal: 16, marginTop: 10}}>
            <Item stackedLabel>
              <Label style={{fontSize: 13}}>ALAMAT EMAIL</Label>
              <Input
                placeholder="Masukan alamat email Anda"
                style={{
                  height: 'auto',
                  paddingVertical: 0,
                  fontSize: 14,
                  paddingLeft: 0,
                }}
                placeholderTextColor="silver"
                defaultValue={this.props.user.email}
                onChangeText={text => this.handleChange('email', text)}
              />
            </Item>
          </View>
          <View style={{paddingHorizontal: 16, marginTop: 10}}>
            <Item stackedLabel style={{borderBottomWidth: 0}}>
              <Label style={{fontSize: 13}}>NOMOR TELEPON ALTERNATIF</Label>
              <Input
                style={{
                  height: 'auto',
                  paddingVertical: 0,
                  fontSize: 14,
                  paddingLeft: 0,
                }}
                placeholderTextColor="silver"
                defaultValue={this.props.user.alternateNumber}
                onChangeText={text =>
                  this.handleChange('alternateNumber', text)
                }
              />
            </Item>
          </View>
          <Separator bordered style={{paddingTop: 20, height: 'auto'}}>
            <Text style={{color: 'grey'}}>INFORMASI PENDAFTARAN</Text>
          </Separator>
          <View style={{paddingHorizontal: 16, marginTop: 10}}>
            <Item stackedLabel>
              <Label style={{fontSize: 13}}>NAMA TERDAFTAR</Label>
              <Input
                placeholder="DUMMY"
                style={{
                  height: 'auto',
                  paddingVertical: 0,
                  fontSize: 14,
                  paddingLeft: 0,
                }}
                placeholderTextColor="silver"
              />
            </Item>
          </View>
          <View style={{paddingHorizontal: 16, marginTop: 10}}>
            <Item stackedLabel style={{borderBottomWidth: 0}}>
              <Label style={{fontSize: 13}}>ALAMAT TERDAFTAR</Label>
              <Input
                placeholder="DUMMY"
                style={{
                  height: 'auto',
                  paddingVertical: 0,
                  fontSize: 14,
                  paddingLeft: 0,
                }}
                placeholderTextColor="silver"
              />
            </Item>
          </View>

          <View
            style={{
              width: '100%',
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(219,222,229)',
            }}>
            <TouchableOpacity
              onPress={this.submitEdit}
              activeOpacity={0.5}
              style={{
                backgroundColor: 'white',
                width: '40%',
                borderWidth: 1,
                borderColor: '#002CBA',
                borderRadius: 3,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#002CBA', fontSize: 12}}>SIMPAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#002CBA',
    width: '100%',
    height: 50,
    zIndex: 3,
  },

  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
