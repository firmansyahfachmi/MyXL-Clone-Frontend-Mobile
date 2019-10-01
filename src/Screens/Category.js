import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

import {connect} from 'react-redux';
import {getPackage} from '../Publics/Redux/Action/package';

import CardBuy from '../Components/CardBuy';

class Category extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    await this.props.dispatch(getPackage());
  };

  render() {
    return (
      <Fragment>
        <View>
          <StatusBar backgroundColor={'#002CBA'} />
        </View>

        <View style={styles.header}>
          <View
            style={[styles.headerItem, {width: '100%', flexDirection: 'row'}]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              activeOpacity={0.8}
              style={{width: '20%', alignItems: 'center'}}>
              <Icon
                type="AntDesign"
                name="arrowleft"
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
            <View style={{width: '80%'}}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
                {this.props.packages.subcategoryName}
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          style={{
            height: '100%',
            backgroundColor: 'rgb(219,222,229)',
          }}>
          <View
            style={{
              backgroundColor: 'navy',
              width: '100%',
              height: 130,
              zIndex: 3,
            }}>
            <Text>{this.props.packages.subcategoryName}</Text>
          </View>
          <View style={{paddingHorizontal: 18, paddingTop: 5}}>
            {this.props.packages.map(pack =>
              pack.category === this.props.navigation.getParam('category') ? (
                <CardBuy key={pack.id} data={pack} />
              ) : null,
            )}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#002CBA',
    width: '100%',
    height: 60,
    zIndex: 3,
  },

  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    packages: state.packages.packageData,
  };
};

export default connect(mapStateToProps)(Category);
