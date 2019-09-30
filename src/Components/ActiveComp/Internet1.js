import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Icon} from 'native-base';

import ProgressBar from '../ProgressBar';

const Internet1 = () => {
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
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>40&nbsp;</Text>
            <Text>MB</Text>
          </View>
        </View>
        {/* PROGRES BAR */}
        <View style={{paddingVertical: 2}}>
          <ProgressBar />
          <Text
            style={{
              fontSize: 12,
              color: 'silver',
              paddingLeft: 24,
            }}>
            24jam di 2G3G4G
          </Text>
        </View>
        {/* PROGRES BAR END*/}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Internet1;
