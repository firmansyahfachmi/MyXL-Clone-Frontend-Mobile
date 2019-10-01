import React, {Fragment} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Icon} from 'native-base';

import Logo1 from '../Assets/logoXL-04.png';
import Icon2 from '../Assets/icon2.jpg';
import Icon3 from '../Assets/icon3.jpg';
import Icon4 from '../Assets/icon4.jpg';
import Icon5 from '../Assets/icon5.jpg';
import BuyItem from './BuyItem';

const CardBuy = props => {
  let price = props.data.price;
  return (
    <Fragment>
      <View
        key={props.data.id}
        style={{
          height: 'auto',
          width: '100%',
          paddingVertical: 10,
        }}>
        <View style={styles.package}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              width: '100%',
            }}>
            <View style={styles.icon}>
              {props.data.category === 'CAT001' ? (
                <Image source={Logo1} style={[styles.img, {margin: 8}]} />
              ) : props.data.category === 'CAT002' ? (
                <Image source={Icon2} style={styles.img} />
              ) : props.data.category === 'CAT003' ? (
                <Image source={Icon3} style={styles.img} />
              ) : props.data.category === 'CAT004' ? (
                <Image source={Icon4} style={styles.img} />
              ) : props.data.category === 'CAT005' ? (
                <Image source={Icon5} style={styles.img} />
              ) : null}
            </View>
            <View style={styles.title}>
              <Text style={{color: 'rgb(146,146,146)'}}>{props.data.name}</Text>
            </View>
          </View>
          <View style={{paddingVertical: 5, flex: 1}}>
            {/* COMPONENT 1 */}
            <View>
              <BuyItem dataItems={props.data.packageItems} />
            </View>
            {/* COMPONENT 1 END*/}

            <View style={{height: 'auto'}}>
              <View
                style={{
                  paddingTop: 5,
                  height: 'auto',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="calendar-check-outline"
                    style={{
                      fontSize: 24,
                      color: 'rgb(146,146,146)',
                      marginRight: 5,
                    }}
                  />
                  <Text style={{color: 'rgb(146,146,146)'}}>Masa Berlaku</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    {props.data.validUntil}
                  </Text>
                  <Text>&nbsp;Hari</Text>
                </View>
              </View>
            </View>
            <View style={{height: 'auto'}}>
              <View
                style={{
                  paddingTop: 5,
                  height: 'auto',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    type="FontAwesome5"
                    name="money-bill"
                    style={{
                      fontSize: 20,
                      color: 'rgb(146,146,146)',
                      marginRight: 5,
                    }}
                  />
                  <Text style={{color: 'rgb(146,146,146)'}}>Harga</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text>Rp&nbsp;</Text>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.button,
                  {
                    marginRight: 3,
                    borderWidth: 1,
                    borderColor: '#002CBA',
                  },
                ]}>
                <Text style={{color: '#002CBA'}}>&nbsp;INFO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.button,
                  {
                    marginLeft: 3,
                    backgroundColor: 'rgb(254,242,0)',
                    borderWidth: 1,
                    borderColor: '#f2de49',
                  },
                ]}>
                <Text>BELI</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    flex: 1,
    width: '100%',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'silver',
  },

  icon: {
    backgroundColor: '#002CBA',
    width: 50,
    height: 50,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  package: {
    width: '100%',
    backgroundColor: 'white',
    height: 'auto',
    paddingHorizontal: 16,
    borderRadius: 3,
    elevation: 1,
  },
});

export default CardBuy;
