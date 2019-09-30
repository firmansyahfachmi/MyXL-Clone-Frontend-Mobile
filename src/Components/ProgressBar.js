import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Progress = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Progress;
