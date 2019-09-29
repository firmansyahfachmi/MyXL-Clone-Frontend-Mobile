import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Menu1 from '../Assets/menu1.png';
import Menu2 from '../Assets/menu2.png';
import Menu3 from '../Assets/menu3.png';

const cardMenu = () => {
  return (
    <Fragment>
      <View
        style={{
          height: 'auto',
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View style={styles.menu}>
          <View style={styles.icon}>
            <Image source={Menu1} style={{resizeMode: 'contain', width: 35}} />
          </View>
          <Text style={{fontSize: 12}}>Beli Paket</Text>
        </View>
        <View style={[styles.menu, {marginHorizontal: 10}]}>
          <View style={styles.icon}>
            <Image source={Menu2} style={{resizeMode: 'contain', width: 35}} />
          </View>
          <Text style={{fontSize: 12}}>Bagi Pulsa</Text>
        </View>
        <View style={styles.menu}>
          <View style={styles.icon}>
            <Image source={Menu3} style={{resizeMode: 'contain', width: 35}} />
          </View>
          <Text style={{fontSize: 12}}>123 Play</Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 55,
    width: 50,
    alignItems: 'center',
  },

  menu: {
    flex: 1,
    backgroundColor: 'white',
    height: 85,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 3,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default cardMenu;
