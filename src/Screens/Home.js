import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

import {withNavigation} from 'react-navigation';

import Carousel from '../Components/Carousel';
import Menu from '../Components/Menu';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showBox: false,
    };
  }

  render() {
    return (
      <Fragment>
        <View>
          <StatusBar backgroundColor={'#002CBA'} />
        </View>

        <View style={styles.header}>
          <View style={[styles.headerItem, {width: '20%'}]}>
            <Icon
              type="EvilIcons"
              name="question"
              style={{color: 'white', fontSize: 30}}
            />
          </View>
          <View style={[styles.headerItem, {width: '60%'}]}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
              myXL
            </Text>
          </View>
          <View style={[styles.headerItem, {width: '20%'}]}>
            <Icon
              type="Ionicons"
              name="ios-notifications-outline"
              style={{color: 'white', fontSize: 28}}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.setState({showBox: true})}
          activeOpacity={1}
          style={styles.profile}>
          <View style={styles.profileImg}>
            <View style={styles.img}></View>
          </View>
          <View style={{justifyContent: 'center', flex: 1}}>
            <Text style={{fontSize: 14}}>Name</Text>
            <Text style={{fontSize: 14, color: 'silver'}}>Number</Text>
          </View>
          <View
            style={{
              width: '20%',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 15,
            }}>
            {this.state.showBox === true ? (
              <View style={styles.butPulsa}>
                <Text style={{fontSize: 0.18 * 65, color: '#002CBA'}}>
                  PREPAID
                </Text>
              </View>
            ) : (
              <Icon
                type="AntDesign"
                name="down"
                style={{fontSize: 12, alignItems: 'flex-end'}}
              />
            )}
          </View>
        </TouchableOpacity>

        {this.state.showBox === true ? (
          <>
            <View
              style={{
                width: '100%',
                height: 55,
                zIndex: 3,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon type="EvilIcons" name="gear" style={{fontSize: 28}} />
              </View>
              <Text>Pengaturan Akun</Text>
            </View>

            <TouchableOpacity
              onPress={() => this.setState({showBox: false})}
              activeOpacity={1}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: 2,
              }}></TouchableOpacity>
          </>
        ) : null}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: '100%',
            backgroundColor: 'rgb(219,222,229)',
          }}>
          {/* SISA PULSA */}
          <View style={{paddingHorizontal: 18, paddingTop: 18}}>
            <View style={styles.pulsa}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 14}}>Sisa Pulsa</Text>
              </View>

              <View style={{flex: 1, paddingVertical: 3, flexDirection: 'row'}}>
                <View style={{width: '70%'}}>
                  <Text style={{fontSize: 22}}>Rp 2.750</Text>
                </View>

                <View
                  style={{
                    width: '30%',
                    alignItems: 'flex-end',
                  }}>
                  <View style={styles.butPulsa}>
                    <Text style={{fontSize: 0.18 * 65, color: '#002CBA'}}>
                      ISI PULSA
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{fontSize: 12}}>
                  <View
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 5,
                      backgroundColor: '#00C89F',
                    }}></View>
                  <Text style={{color: 'silver'}}>&nbsp;&nbsp;Sampai</Text> 28
                  Oct, 2019 - 29 Hari
                </Text>
              </View>
            </View>
          </View>
          {/* SISA PULSA END*/}

          {/* SISA KUOTA */}
          <View style={{paddingHorizontal: 18, paddingTop: 10}}>
            <View style={styles.home}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PackageTab')}
                activeOpacity={1}
                style={{
                  width: '100%',
                  flex: 1,
                  height: 'auto',
                }}>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={{flex: 1}}>Sisa Kuota</Text>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                    }}>
                    <Text style={{color: 'rgb(146,146,146)'}}>
                      Lihat Detail&nbsp;
                      <Icon
                        type="AntDesign"
                        name="right"
                        style={{fontSize: 12, color: 'rgb(146,146,146)'}}
                      />
                    </Text>
                  </View>
                </View>

                {/* PROGRESS BAR */}
                <View
                  style={{
                    backgroundColor: 'rgb(146,146,146)',
                    width: '100%',
                    borderRadius: 3,
                    height: 25,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      position: 'absolute',
                      zIndex: 1,
                      fontSize: 12,
                      left: 5,
                    }}>
                    0 MB
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#00C89F',
                      width: '50%',
                      borderRadius: 3,
                      flex: 1,
                    }}></View>
                  <Text
                    style={{
                      color: 'white',
                      position: 'absolute',
                      zIndex: 1,
                      fontSize: 12,
                      right: 5,
                    }}>
                    50 MB
                  </Text>
                </View>
                {/* PROGRESS BAR */}
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  height: 'auto',
                  paddingTop: 10,
                  flexDirection: 'row',
                }}>
                <View style={styles.tree}>
                  <View
                    style={{
                      padding: 2,
                    }}>
                    <Icon
                      type="MaterialIcons"
                      name="swap-vert"
                      style={{
                        fontSize: 22,
                        color: 'rgb(146,146,146)',
                        margin: 3,
                      }}
                    />
                  </View>

                  <Text style={{fontSize: 12, paddingTop: 3}}>
                    <Icon
                      type="AntDesign"
                      name="plussquare"
                      style={{fontSize: 12, color: 'red'}}
                    />
                    &nbsp;MB
                  </Text>
                </View>
                <View
                  style={[
                    styles.tree,
                    {
                      borderRightWidth: 1,
                      borderLeftWidth: 1,
                      paddingHorizontal: 5,
                      borderColor: 'whitesmoke',
                    },
                  ]}>
                  <View
                    style={{
                      padding: 2,
                    }}>
                    <Icon
                      type="Feather"
                      name="phone"
                      style={{
                        fontSize: 22,
                        color: 'rgb(146,146,146)',
                        margin: 3,
                      }}
                    />
                  </View>
                  <Text style={{fontSize: 12, paddingTop: 3}}>
                    <Icon
                      type="AntDesign"
                      name="plussquare"
                      style={{fontSize: 12, color: 'red'}}
                    />
                    &nbsp;Menit
                  </Text>
                </View>
                <View style={styles.tree}>
                  <View
                    style={{
                      padding: 2,
                    }}>
                    <Icon
                      type="MaterialIcons"
                      name="chat"
                      style={{
                        fontSize: 22,
                        color: 'rgb(146,146,146)',
                        margin: 3,
                      }}
                    />
                  </View>
                  <Text style={{fontSize: 12, paddingTop: 3}}>
                    <Icon
                      type="AntDesign"
                      name="plussquare"
                      style={{fontSize: 12, color: 'red'}}
                    />
                    &nbsp;SMS
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* SISA KUOTA END*/}

          {/* MENU */}
          <View style={{paddingHorizontal: 18, paddingTop: 15}}>
            <Text>Menu</Text>
            <Menu />
          </View>
          {/* MENU END */}

          {/* CAROUSEL */}
          <View style={{paddingHorizontal: 18}}>
            <Text>Promo Terbaru</Text>
            <Carousel />
          </View>
          {/* CAROUSEL END */}
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  tree: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  butPulsa: {
    width: 65,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#002CBA',
    alignItems: 'center',
    padding: 3,
  },

  pulsa: {
    backgroundColor: 'white',
    height: 'auto',
    width: '100%',
    borderRadius: 3,
    elevation: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  home: {
    backgroundColor: 'white',
    height: 'auto',
    width: '100%',
    borderRadius: 3,
    elevation: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

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

  profile: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 65,
    elevation: 2,
    zIndex: 2,
  },

  profileImg: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    backgroundColor: 'silver',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default withNavigation(Home);
