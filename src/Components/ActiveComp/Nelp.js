import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Icon} from 'native-base';

const Nelp = props => {
  return (
    <Fragment>
      <View style={{height: 'auto', paddingTop: 5}}>
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
              type="Feather"
              name="phone"
              style={{
                fontSize: 24,
                color: 'rgb(146,146,146)',
                marginRight: 5,
              }}
            />

            <Text style={{color: 'rgb(146,146,146)'}}>
              {props.dataItems.name}
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
              {props.dataItems.remaining}
            </Text>
            <Text>&nbsp;menit</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Nelp;
