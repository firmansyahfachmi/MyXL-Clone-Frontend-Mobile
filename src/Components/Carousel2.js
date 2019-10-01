import React, {Fragment} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import Carousel1 from '../Assets/carousel1.png';
import Car1 from '../Assets/car1.png';
import Carousel3 from '../Assets/carousel3.jpg';
import Carousel4 from '../Assets/carousel4.jpg';

import Logo1 from '../Assets/logoXL-04.png';

const CarouselPromo = () => {
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
        {/* <View style={styles.carousel}>
          <View style={styles.imgDiv}>
            <View style={styles.overlay}></View>

            <Image source={Carousel1} style={styles.img} />
          </View>
          <View style={styles.title}>
            <View style={styles.icon}>
              <Image source={Logo1} style={{flex: 1, width: '100%'}} />
            </View>

            <View style={{flexDirection: 'column'}}>
              <View style={styles.headTitle}>
                <Text style={styles.main}>DANA</Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <Text style={styles.sub}>Berakhir pada 30 Sep 2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.desc}>
            <Text style={{fontSize: 20}}>
              Diskon 30% Pembayaran dengan DANA
            </Text>
          </View>
        </View> */}

        <View style={styles.carousel}>
          <View style={styles.imgDiv}>
            <View style={styles.overlay}></View>

            <Image source={Car1} style={styles.img} />
          </View>
          <View style={styles.title}>
            <View style={styles.icon}>
              <Image source={Logo1} style={{flex: 1, width: '100%'}} />
            </View>

            <View style={{flexDirection: 'column'}}>
              <View style={styles.headTitle}>
                <Text style={styles.main}>Jenius</Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <Text style={styles.sub}>Berakhir pada 31 Oct 2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.desc}>
            <Text style={{fontSize: 20}}>
              Cashback Rp50.000 dengan Jenius Pay
            </Text>
          </View>
        </View>

        {/* <View style={styles.carousel}>
          <View style={styles.imgDiv}>
            <View style={styles.overlay}></View>

            <Image source={Carousel3} style={styles.img} />
          </View>
          <View style={styles.title}>
            <View style={styles.icon}>
              <Image source={Logo1} style={{flex: 1, width: '100%'}} />
            </View>

            <View style={{flexDirection: 'column'}}>
              <View style={styles.headTitle}>
                <Text style={styles.main}>GoPay</Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <Text style={styles.sub}>Berakhir pada 30 Sep 2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.desc}>
            <Text style={{fontSize: 20}}>
              Cashback 50%! Beli Gadget XL Sekarang
            </Text>
          </View>
        </View> */}

        {/* <View style={styles.carousel}>
          <View style={styles.imgDiv}>
            <View style={styles.overlay}></View>

            <Image source={Carousel4} style={styles.img} />
          </View>
          <View style={styles.title}>
            <View style={styles.icon}>
              <Image source={Logo1} style={{flex: 1, width: '100%'}} />
            </View>

            <View style={{flexDirection: 'column'}}>
              <View style={styles.headTitle}>
                <Text style={styles.main}>XL</Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <Text style={styles.sub}>Berakhir pada 30 Sep 2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.desc}>
            <Text style={{fontSize: 20}}>
              Diskon hingga 15% untuk Paket Roaming
            </Text>
          </View>
        </View> */}
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  desc: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  main: {
    fontSize: 20,
    paddingLeft: 10,
    color: 'white',
  },
  headTitle: {
    width: '100%',
    height: 30,
    marginTop: -1,
  },
  sub: {
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 12,
    color: 'grey',
  },
  img: {
    width: '100%',
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    paddingLeft: 15,
    marginTop: -35,
  },
  icon: {
    backgroundColor: 'blue',
    width: 55,
    height: 55,
    borderRadius: 8,
    padding: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: 150,
    position: 'absolute',
    zIndex: 6,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imgDiv: {
    backgroundColor: 'silver',
    height: 150,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  carousel: {
    backgroundColor: 'white',
    height: 240,
    width: 320,
    marginRight: 10,
    borderRadius: 10,
    elevation: 1,
  },
});

export default CarouselPromo;
