import React, {Fragment, Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Icon} from 'native-base';
import {withNavigation} from 'react-navigation';

import Logo1 from '../Assets/logoXL-04.png';
import Icon2 from '../Assets/icon2.jpg';
import Icon3 from '../Assets/icon3.jpg';
import Icon4 from '../Assets/icon4.jpg';
import Icon5 from '../Assets/icon5.jpg';
import BuyItem from './BuyItem';

class CardPay extends Component {
  constructor() {
    super();
    this.state = {
      info: false,
      term: false,
    };
  }
  render() {
    let price = this.props.data.price;
    return (
      <Fragment>
        <View
          key={this.props.data.id}
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
                {this.props.data.category === 'CAT001' ? (
                  <Image source={Logo1} style={[styles.img, {margin: 8}]} />
                ) : this.props.data.category === 'CAT002' ? (
                  <Image source={Icon2} style={styles.img} />
                ) : this.props.data.category === 'CAT003' ? (
                  <Image source={Icon3} style={styles.img} />
                ) : this.props.data.category === 'CAT004' ? (
                  <Image source={Icon4} style={styles.img} />
                ) : this.props.data.category === 'CAT005' ? (
                  <Image source={Icon5} style={styles.img} />
                ) : null}
              </View>
              <View style={styles.title}>
                <Text style={{color: 'rgb(146,146,146)'}}>
                  {this.props.data.name}
                </Text>
              </View>
            </View>
            <View style={{paddingVertical: 5, flex: 1}}>
              {/* COMPONENT 1 */}
              <View>
                <BuyItem dataItems={this.props.data.packageItems} />
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
                    <Text style={{color: 'rgb(146,146,146)'}}>
                      Masa Berlaku
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: 16, fontWeight: '700'}}>
                      {this.props.data.validUntil}
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

              <View
                style={{
                  marginVertical: 10,
                  borderTopWidth: 1,
                  paddingVertical: 15,
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() =>
                    this.state.info === false
                      ? this.setState({info: true})
                      : this.setState({info: false})
                  }
                  style={{flexDirection: 'row'}}>
                  <Text style={{flex: 1}}>Info Paket</Text>
                  <View
                    style={{flex: 1, alignItems: 'flex-end', paddingRight: 5}}>
                    <Icon type="AntDesign" name="down" style={{fontSize: 16}} />
                  </View>
                </TouchableOpacity>
                {this.state.info === true ? (
                  <View
                    style={{
                      height: 'auto',
                      marginTop: 5,
                      padding: 8,
                    }}>
                    <Text style={{color: 'grey'}}>
                      {this.props.data.description}
                    </Text>
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  paddingVertical: 18,
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() =>
                    this.state.term === false
                      ? this.setState({term: true})
                      : this.setState({term: false})
                  }
                  style={{flexDirection: 'row'}}>
                  <Text style={{flex: 1}}>Syarat & Ketentuan</Text>
                  <View
                    style={{flex: 1, alignItems: 'flex-end', paddingRight: 5}}>
                    <Icon type="AntDesign" name="down" style={{fontSize: 16}} />
                  </View>
                </TouchableOpacity>
                {this.state.term === true ? (
                  <View
                    style={{
                      height: 'auto',
                      marginTop: 5,
                      padding: 8,
                    }}>
                    <Text style={{color: 'grey'}}>
                      {this.props.data.termsCondition}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}

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

export default withNavigation(CardPay);
