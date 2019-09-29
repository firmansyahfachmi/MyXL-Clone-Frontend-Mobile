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

import Carousel from '../Components/Carousel';
import Menu from '../Components/Menu';

class Home extends Component {
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
            <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
              Paket Saya
            </Text>
          </View>
        </View>
        <ScrollView
          style={{
            height: '100%',
            backgroundColor: 'rgb(219,222,229)',
          }}>
          <View
            style={{
              backgroundColor: '#002CBA',
              width: '100%',
              height: 85,
              zIndex: 3,
            }}></View>
          <View style={{paddingHorizontal: 15, marginTop: -60}}>
            <View style={styles.package}>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  height: 'auto',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}>
                  <Text>Sisa Kuota</Text>
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
              </View>
              <View
                style={{
                  width: '100%',
                  flex: 1,
                  height: 'auto',
                  paddingTop: 5,
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

          <View style={{backgroundColor: 'red'}}></View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  package: {
    backgroundColor: 'white',
    height: 'auto',
    width: '100%',
    borderRadius: 3,
    elevation: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  tree: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
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

export default Home;
