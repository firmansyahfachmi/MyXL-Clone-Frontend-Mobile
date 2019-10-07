import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {Icon} from 'native-base';

import {connect} from 'react-redux';

import Carousel2 from '../Components/Carousel2';

import Fashion from '../Assets/fashion.jpg';
import Food from '../Assets/food.jpg';
import Lifestyle from '../Assets/lifestyle.jpg';
import XL from '../Assets/xlproduct.jpg';

class Promo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <View>
          <StatusBar backgroundColor={'#002CBA'} />
        </View>

        <View style={styles.header}>
          <View style={[styles.headerItem, {width: '100%'}]}>
            <Text style={{fontSize: 12, color: 'white'}}>Cari promo di</Text>
            <Text style={{fontSize: 16, color: 'white', paddingVertical: 3}}>
              Seluruh Kota&nbsp;
              <Icon
                type="AntDesign"
                name="down"
                style={{fontSize: 16, color: 'white'}}
              />
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            paddingHorizontal: 10,
            paddingVertical: 6,
            flexDirection: 'row',
          }}>
          <View style={{width: '82%'}}>
            <TextInput
              style={{backgroundColor: 'whitesmoke', paddingHorizontal: 10}}
              placeholder="Nama Partner atau promo"
            />
          </View>
          <View
            style={{
              backgroundColor: 'whitesmoke',
              width: '15%',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 8,
              borderRadius: 3,
              elevation: 2,
            }}>
            <Icon
              type="AntDesign"
              name="search1"
              style={{fontSize: 18, color: 'grey'}}
            />
          </View>
        </View>
        <ScrollView
          style={{
            height: '100%',
            backgroundColor: 'rgb(219,222,229)',
          }}>
          <View style={{paddingHorizontal: 18, paddingTop: 18}}>
            <Text style={{color: 'grey', fontSize: 12}}>
              REKOMENDASI UNTUK KAMU
            </Text>
            <Carousel2 />
          </View>

          <View style={{paddingHorizontal: 18}}>
            <Text style={{color: 'grey', fontSize: 12}}>KATEGORI PROMO</Text>
            <View
              style={{
                height: 80,
                marginTop: 5,
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Fashion}
                  style={{flex: 1, width: '100%', borderRadius: 5}}
                />
                <Text style={{color: 'white', position: 'absolute'}}>
                  Fashion
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Food}
                  style={{flex: 1, width: '100%', borderRadius: 5}}
                />
                <Text style={{color: 'white', position: 'absolute'}}>
                  Food & Beverage
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 80,
                marginTop: 10,
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,

                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Lifestyle}
                  style={{flex: 1, width: '100%', borderRadius: 5}}
                />
                <Text style={{color: 'white', position: 'absolute'}}>
                  Lifestyle
                </Text>
              </View>
              <View
                style={{
                  flex: 1,

                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={XL}
                  style={{flex: 1, width: '100%', borderRadius: 5}}
                />
                <Text style={{color: 'white', position: 'absolute'}}>
                  XL Product
                </Text>
              </View>
            </View>
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

export default connect(mapStateToProps)(Promo);
