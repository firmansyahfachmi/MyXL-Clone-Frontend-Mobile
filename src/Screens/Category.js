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

import {withNavigation} from 'react-navigation';

import {connect} from 'react-redux';
import {getPackage} from '../Publics/Redux/Action/package';
import {getCategoryById} from '../Publics/Redux/Action/category';

import CardBuy from '../Components/CardBuy';
import Loading from '../Components/loading';

class Category extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    await this.props.dispatch(getPackage());
    await this.props.dispatch(
      getCategoryById(this.props.navigation.getParam('category')),
    );
  };

  render() {
    return (
      <Fragment>
        {/* LOADING */}
        {this.props.loadingCategory === true ? (
          <View>
            <Loading />
          </View>
        ) : null}

        {this.props.loadingPackage === true ? (
          <View>
            <Loading />
          </View>
        ) : null}
        {/* LOADING END */}
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
                {this.props.category[0].name}
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
            <Text style={{color: 'white', margin: 18, fontSize: 16}}>
              {this.props.category[0].name}
            </Text>
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
    loadingPackage: state.packages.isLoading,
    category: state.category.categoryData,
    loadingCategory: state.category.isLoading,
  };
};

export default connect(mapStateToProps)(Category);
