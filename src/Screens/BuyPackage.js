import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'native-base';

import {withNavigation} from 'react-navigation';

import {connect} from 'react-redux';
import {getPackage} from '../Publics/Redux/Action/package';

import CardBuy from '../Components/CardBuy';
import Loading from '../Components/loading';

import Cat1 from '../Assets/cat1.jpg';
import Cat2 from '../Assets/cat2.jpg';
import Cat3 from '../Assets/cat3.jpg';
import Cat4 from '../Assets/cat4.jpg';
import Cat5 from '../Assets/cat5.jpg';

class BuyPackage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    await this.props.dispatch(getPackage());
  };

  render() {
    return (
      <Fragment>
        {/* LOADING */}
        {this.props.loading === true ? (
          <View>
            <Loading />
          </View>
        ) : null}
        {/* LOADING END */}
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
              <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
                Beli Paket
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            height: '100%',
            backgroundColor: 'rgb(219,222,229)',
          }}>
          <View style={{paddingHorizontal: 12, paddingVertical: 18}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 12, color: 'grey'}}>
                PENAWARAN TERBAIK
              </Text>
            </View>
            <View>
              {this.props.packages.map(pack =>
                pack.id === 'PAK004' ? (
                  <CardBuy key={pack.id} data={pack} />
                ) : null,
              )}
            </View>
          </View>
          <View style={{paddingTop: 10}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                this.props.navigation.navigate('Category', {category: 'CAT001'})
              }
              style={styles.cat}>
              <Image source={Cat1} style={{flex: 1, width: '100%'}} />
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="MaterialIcons"
                    name="swap-vert"
                    style={{color: 'white', fontSize: 30, marginRight: 8}}
                  />
                  <Icon type="Feather" name="phone" style={{color: 'white'}} />
                </View>
                <Text
                  style={{color: 'white', fontSize: 24, paddingVertical: 3}}>
                  XTRA Combo VIP
                </Text>
                <View style={styles.indicator}>
                  <Text style={{color: 'white'}}>
                    {/* {this.props.packages.map(
                      pack => pack.category === 'CAT001',
                    )}{' '} */}
                    1 Paket
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                this.props.navigation.navigate('Category', {category: 'CAT002'})
              }
              style={styles.cat}>
              <Image source={Cat2} style={{flex: 1, width: '100%'}} />
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="MaterialIcons"
                    name="swap-vert"
                    style={{color: 'white', fontSize: 30}}
                  />
                </View>
                <Text
                  style={{color: 'white', fontSize: 24, paddingVertical: 3}}>
                  Internet
                </Text>
                <View style={styles.indicator}>
                  <Text style={{color: 'white'}}>8 Paket</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                this.props.navigation.navigate('Category', {category: 'CAT003'})
              }
              style={styles.cat}>
              <Image source={Cat3} style={{flex: 1, width: '100%'}} />
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="Feather"
                    name="phone"
                    style={{color: 'white', marginRight: 8}}
                  />
                  <Icon
                    type="MaterialIcons"
                    name="chat"
                    style={{color: 'white'}}
                  />
                </View>
                <Text
                  style={{color: 'white', fontSize: 24, paddingVertical: 3}}>
                  Nelpon & SMS
                </Text>
                <View style={styles.indicator}>
                  <Text style={{color: 'white'}}>15 Paket</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                this.props.navigation.navigate('Category', {category: 'CAT004'})
              }
              style={styles.cat}>
              <Image source={Cat4} style={{flex: 1, width: '100%'}} />
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="MaterialIcons"
                    name="headset"
                    style={{color: 'white', fontSize: 30}}
                  />
                </View>
                <Text
                  style={{color: 'white', fontSize: 24, paddingVertical: 3}}>
                  Lifestyle
                </Text>
                <View style={styles.indicator}>
                  <Text style={{color: 'white'}}>6 Paket</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                this.props.navigation.navigate('Category', {category: 'CAT005'})
              }
              style={styles.cat}>
              <Image source={Cat5} style={{flex: 1, width: '100%'}} />
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="Ionicons"
                    name="ios-globe"
                    style={{color: 'white', fontSize: 30}}
                  />
                </View>
                <Text
                  style={{color: 'white', fontSize: 24, paddingVertical: 3}}>
                  Roaming
                </Text>
                <View style={styles.indicator}>
                  <Text style={{color: 'white'}}>20 Paket</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 5,
    marginTop: 10,
  },
  cat: {
    width: '100%',
    height: 180,
    marginVertical: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    // justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    packages: state.packages.packageData,
    loading: state.packages.isLoading,
  };
};

export default connect(mapStateToProps)(withNavigation(BuyPackage));
