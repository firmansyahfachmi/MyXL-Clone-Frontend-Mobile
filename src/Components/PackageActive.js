import React, {Fragment} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Icon} from 'native-base';

import Internet1 from '../Components/ActiveComp/Internet1';
import Unlimited from '../Components/ActiveComp/Unlimited';
import Nelp from '../Components/ActiveComp/Nelp';

import Logo1 from '../Assets/logoXL-04.png';

const packageActive = props => {
  return (
    <Fragment>
      <View
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
              <Image
                source={Logo1}
                style={{resizeMode: 'contain', flex: 1, width: '100%'}}
              />
            </View>
            <View style={styles.title}>
              <Text style={{color: 'rgb(146,146,146)'}}>{props.data.name}</Text>
            </View>
          </View>
          <View style={{paddingVertical: 5, flex: 1}}>
            {/* COMPONENT 1 */}
            <View>
              {props.data.packageItems.map(items =>
                items.type === 'internet' ? (
                  <Internet1 dataItems={items} />
                ) : null,
              )}
            </View>
            {/* COMPONENT 1 END*/}

            {/* COMPONENT 2 */}
            <View>
              {props.data.packageItems.map(items =>
                items.type === 'unlimited' ? <Unlimited /> : null,
              )}
            </View>
            {/* COMPONENT 2 END */}

            {/* COMPONENT 3 */}
            <View>
              {props.data.packageItems.map(items =>
                items.type === 'telpon' ? <Nelp dataItems={items} /> : null,
              )}
            </View>
            {/* COMPONENT 3 END */}

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
                <Icon
                  type="AntDesign"
                  name="close"
                  style={{fontSize: 14, marginRight: 6, color: '#002CBA'}}
                />
                <Text>&nbsp;STOP PAKET</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.button,
                  {
                    marginLeft: 3,
                    backgroundColor: 'yellow',
                    borderWidth: 1,
                    borderColor: '#f2de49',
                  },
                ]}>
                <Icon
                  type="AntDesign"
                  name="plus"
                  style={{fontSize: 14, marginRight: 6, color: '#002CBA'}}
                />
                <Text>ISI KUOTA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
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
    padding: 8,
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

export default packageActive;
