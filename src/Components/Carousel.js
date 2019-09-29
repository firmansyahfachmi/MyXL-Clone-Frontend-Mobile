import React, {Fragment} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import Carousel1 from '../Assets/carousel1.png';
import Carousel2 from '../Assets/carousel2.jpg';
import Carousel3 from '../Assets/carousel3.jpg';
import Carousel4 from '../Assets/carousel4.jpg';

const Carousel = () => {
  return (
    <Fragment>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          height: 'auto',
          paddingVertical: 10,
          paddingBottom: 30,
        }}>
        <View style={styles.carousel}>
          <Image source={Carousel1} style={{resizeMode: 'contain', flex: 1}} />
        </View>
        <View style={styles.carousel}>
          <Image source={Carousel2} style={{resizeMode: 'contain', flex: 1}} />
        </View>
        <View style={styles.carousel}>
          <Image source={Carousel3} style={{resizeMode: 'contain', flex: 1}} />
        </View>
        <View style={styles.carousel}>
          <Image source={Carousel4} style={{resizeMode: 'contain', flex: 1}} />
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: 'white',
    height: 150,
    width: 330,
    marginRight: 10,
    borderRadius: 3,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Carousel;
