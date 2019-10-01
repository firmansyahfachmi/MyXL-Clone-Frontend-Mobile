import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Progress = props => {
  let count = 0;
  let percent = 0;
  percent = (props.remaining / props.total) * 100;
  percent.toString();

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
          0{props.total >= 1000 ? <Text> GB</Text> : <Text> MB</Text>}
        </Text>

        <View
          style={{
            backgroundColor: '#00C89F',
            width: percent + '%',
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
          {props.total >= 1000 ? (
            <Text>{(count = props.total / 1000)} GB</Text>
          ) : (
            <Text>{props.total} MB</Text>
          )}
        </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Progress;
