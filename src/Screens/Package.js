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

import {connect} from 'react-redux';
import {getUser} from '../Publics/Redux/Action/user';

import ActivePackage from '../Components/PackageActive';
import ProgressBar from '../Components/ProgressBar';

class Packages extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    await this.props.dispatch(getUser());
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
                <View>
                  <ProgressBar
                    remaining={this.props.user.remainingQuota}
                    total={this.props.user.totalQuota}
                  />
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
                    {this.props.user.totalQuota === 0 ? (
                      <>
                        <Icon
                          type="AntDesign"
                          name="plussquare"
                          style={{fontSize: 12, color: 'red'}}
                        />
                      </>
                    ) : (
                      <Text style={{fontSize: 20}}>
                        {this.props.user.remainingQuota >= 1000
                          ? this.props.user.remainingQuota / 1000
                          : this.props.user.remainingQuota}
                      </Text>
                    )}
                    {this.props.user.remainingQuota >= 1000 ? (
                      <Text style={{color: 'grey'}}>&nbsp;GB</Text>
                    ) : (
                      <Text style={{color: 'grey'}}>&nbsp;MB</Text>
                    )}
                  </Text>
                  {this.props.user.unlimited === 1 ? (
                    <Text style={{fontSize: 10, color: '#00C89F'}}>
                      + UNLIMITED
                    </Text>
                  ) : null}
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
                    {this.props.user.remainingCall === 0 ? (
                      <>
                        <Icon
                          type="AntDesign"
                          name="plussquare"
                          style={{fontSize: 12, color: 'red'}}
                        />
                      </>
                    ) : (
                      <Text style={{fontSize: 20}}>
                        {this.props.user.remainingCall}
                      </Text>
                    )}
                    <Text style={{color: 'grey'}}>&nbsp;Menit</Text>
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
                    {this.props.user.remainingSMS === 0 ? (
                      <>
                        <Icon
                          type="AntDesign"
                          name="plussquare"
                          style={{fontSize: 12, color: 'red'}}
                        />
                      </>
                    ) : (
                      <Text style={{fontSize: 20}}>
                        {this.props.user.remainingSMS}
                      </Text>
                    )}
                    <Text style={{color: 'grey'}}>&nbsp;SMS</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* ACTIVE PACKAGE */}
          <View style={styles.myPackage}>
            <Text style={{fontSize: 12, color: 'grey'}}>PAKET AKTIF SAYA</Text>
            {this.props.user.packages.map(pack => (
              <ActivePackage
                type={pack.id}
                key={pack.id}
                data={pack}
                userId={this.props.user.number}
              />
            ))}
          </View>
          {/* ACTIVE PACKAGE END*/}
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  myPackage: {
    width: '100%',
    height: 'auto',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
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

const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Packages);
