import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Spinner} from 'native-base';

const Loading = () => {
  return (
    <Fragment>
      <View style={styles.overlay}>
        <View style={styles.spin}>
          <Spinner color="#002CBA" />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  spin: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    zIndex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: 700,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default Loading;
