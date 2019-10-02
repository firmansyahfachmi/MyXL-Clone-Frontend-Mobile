import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon, Radio} from 'native-base';

import {connect} from 'react-redux';
import {getPackage} from '../Publics/Redux/Action/package';
import {getUser, buyPackage} from '../Publics/Redux/Action/user';

import {withNavigation} from 'react-navigation';
import CardPay from '../Components/CardPay';

class Pay extends Component {
  constructor() {
    super();
    this.state = {
      pulsa: true,
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getPackage());
  };

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
                Tinjau Dan Konfirmasi Pembayaran
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          style={{
            height: '100%',
            backgroundColor: 'rgb(219,222,229)',
          }}>
          <View
            style={{
              paddingHorizontal: 18,
              paddingTop: 20,
              alignItems: 'center',
            }}>
            <Text style={{color: 'grey'}}>ANDA TELAH MEMILIH</Text>
            {this.props.packages.map(pack =>
              pack.id === this.props.navigation.getParam('id') ? (
                <CardPay key={pack.id} data={pack} />
              ) : null,
            )}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View
            style={{
              backgroundColor: 'whitesmoke',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>Pilih Metode Pembayaran</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 'auto',
              paddingVertical: 30,
              paddingHorizontal: 30,
              flexDirection: 'row',
            }}>
            <Radio selected={this.state.pulsa} />
            <Text style={{fontSize: 18, marginLeft: 8}}>
              Bayar dengan pulsa
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props
                .dispatch(
                  buyPackage(
                    this.props.user.number,
                    this.props.navigation.getParam('id'),
                  ),
                )
                .then(() => {
                  this.props.navigation.navigate('Home');
                });
            }}
            activeOpacity={0.9}
            style={{
              borderTopWidth: 1,
              borderColor: 'rgb(254,242,0)',
              backgroundColor: 'yellow',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>BELI</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    elevation: 5,
    backgroundColor: 'red',
    height: 'auto',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#002CBA',
    width: '100%',
    height: 60,
    zIndex: 3,
  },

  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    packages: state.packages.packageData,
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(withNavigation(Pay));
