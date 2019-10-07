import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon, Separator, ListItem} from 'native-base';

import {withNavigation} from 'react-navigation';

import {connect} from 'react-redux';
import {logout} from '../Publics/Redux/Action/user';

import AsyncStorage from '@react-native-community/async-storage';

class Others extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logout = () => {
    AsyncStorage.removeItem('userNumber');
    this.props.dispatch(logout());
    this.props.navigation.navigate('InputNumber');
  };

  render() {
    return (
      <Fragment>
        <View>
          <StatusBar backgroundColor={'#002CBA'} />
        </View>

        <View style={styles.header}>
          <View style={[styles.headerItem, {width: '100%'}]}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
              Lainnya
            </Text>
          </View>
        </View>

        <ScrollView
          style={{
            height: '100%',
          }}>
          <Separator bordered style={{paddingTop: 20, height: 'auto'}}>
            <Text style={{color: 'grey'}}>PENGATURAN AKUN</Text>
          </Separator>
          <ListItem>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={{flex: 1}}>Ganti Profil</Text>
              <Icon
                type="AntDesign"
                name="right"
                style={{fontSize: 14, color: 'grey'}}
              />
            </TouchableOpacity>
          </ListItem>
          <ListItem>
            <Text style={{flex: 1}}>Ganti Bahasa</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem last>
            <Text style={{flex: 1}}>Lihat PUK</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <Separator bordered style={{paddingTop: 20, height: 'auto'}}>
            <Text style={{color: 'grey'}}>PENGATURAN PULSA</Text>
          </Separator>
          <ListItem>
            <Text style={{flex: 1}}>Isi Pulsa</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem last>
            <Text style={{flex: 1}}>Bagi Pulsa</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <Separator bordered style={{paddingTop: 20, height: 'auto'}}>
            <Text style={{color: 'grey'}}>BANTUAN</Text>
          </Separator>
          <ListItem>
            <Text style={{flex: 1}}>FAQ</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem>
            <Text style={{flex: 1}}>Lokasi Gerai</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem>
            <Text style={{flex: 1}}>Dukungan melalui Twitter</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem>
            <Text style={{flex: 1}}>Dukungan Melalui Facebook</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem>
            <Text style={{flex: 1}}>Tanya Komunitas</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem>
            <Text style={{flex: 1}}>Call Center (817)</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem last>
            <Text style={{flex: 1}}>Aplikasi yang direkomendasikan</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <Separator bordered></Separator>
          <ListItem>
            <Text style={{flex: 1}}>Tentang Kami</Text>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 14, color: 'grey'}}
            />
          </ListItem>
          <ListItem last>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              activeOpacity={1}
              onPress={this.logout}>
              <Text style={{color: '#002CBA'}}>Keluar</Text>
            </TouchableOpacity>
          </ListItem>
          <Separator bordered></Separator>
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

export default connect(mapStateToProps)(withNavigation(Others));
