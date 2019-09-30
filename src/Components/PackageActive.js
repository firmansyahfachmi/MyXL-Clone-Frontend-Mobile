import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Icon} from 'native-base';

import Internet1 from '../Components/ActiveComp/Internet1';
import Unlimited from '../Components/ActiveComp/Unlimited';
import Nelp from '../Components/ActiveComp/Nelp';

const packageActive = () => {
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
            <View style={styles.icon}></View>
            <View style={styles.title}>
              <Text style={{color: 'rgb(146,146,146)'}}>
                Xtra Rejeki, 7hr, Rp 10rb
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 5, flex: 1}}>
            {/* COMPONENT 1 */}
            <View>
              <Internet1 />
            </View>
            {/* COMPONENT 1 END*/}

            {/* COMPONENT 2 */}
            <View>
              <Unlimited />
            </View>
            {/* COMPONENT 2 END */}

            {/* COMPONENT 3 */}
            <View>
              <Nelp status={1} />
            </View>
            {/* COMPONENT 3 END */}

            {/* COMPONENT 4 */}
            <View>
              <Nelp status={2} />
            </View>
            {/* COMPONENT 4 END */}

            <View style={{height: 'auto'}}>
              <View
                style={{
                  height: 25,
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
                  <Text style={{fontSize: 16, fontWeight: '700'}}>6</Text>
                  <Text>&nbsp;Hari</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
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
