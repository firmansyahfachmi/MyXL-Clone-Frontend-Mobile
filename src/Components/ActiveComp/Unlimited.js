import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Icon} from 'native-base';

const Unlimited = () => {
  return (
    <Fragment>
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
              type="MaterialIcons"
              name="swap-vert"
              style={{
                fontSize: 24,
                color: 'rgb(146,146,146)',
                marginRight: 5,
              }}
            />
            <Text style={{color: 'rgb(146,146,146)'}}>Internet</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Unlimited</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: 'rgb(146,146,146)',
            paddingLeft: 24,
          }}>
          Apps 24jam di 2G3G4G
        </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Unlimited;
