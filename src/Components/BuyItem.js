import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Icon} from 'native-base';

import ProgressBar from './ProgressBar';

const buyItem = props => {
  return (
    <Fragment>
      {props.dataItems.map(items => (
        <View key={items.id} style={{height: 'auto'}}>
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
              {items.type === 'internet' ? (
                <Icon
                  type="MaterialIcons"
                  name="swap-vert"
                  style={{
                    fontSize: 24,
                    color: 'rgb(146,146,146)',
                    marginRight: 5,
                  }}
                />
              ) : items.type === 'telpon' ? (
                <Icon
                  type="Feather"
                  name="phone"
                  style={{
                    fontSize: 24,
                    color: 'rgb(146,146,146)',
                    marginRight: 5,
                  }}
                />
              ) : items.type === 'sms' ? (
                <Icon
                  type="MaterialIcons"
                  name="chat-bubble-outline"
                  style={{
                    fontSize: 24,
                    color: 'rgb(146,146,146)',
                    marginRight: 5,
                  }}
                />
              ) : null}
              {items.type === 'internet' ? (
                <Text style={{color: 'rgb(146,146,146)'}}>Internet</Text>
              ) : items.type === 'telpon' ? (
                <Text style={{color: 'rgb(146,146,146)'}}>Nelp</Text>
              ) : items.type === 'sms' ? (
                <Text style={{color: 'rgb(146,146,146)'}}>SMS</Text>
              ) : null}
            </View>

            {items.type === 'internet' ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                {items.value === -1 ? (
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Unlimited
                  </Text>
                ) : (
                  <>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      {items.value >= 1000 ? items.value / 1000 : items.value}
                    </Text>
                    {items.value >= 1000 ? (
                      <Text>&nbsp;GB</Text>
                    ) : (
                      <Text>&nbsp;MB</Text>
                    )}
                  </>
                )}
              </View>
            ) : items.type === 'telpon' ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                  {items.value}
                </Text>
                <Text>&nbsp;menit</Text>
              </View>
            ) : items.type === 'sms' ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                  {items.value}
                </Text>
                <Text>&nbsp;SMS</Text>
              </View>
            ) : null}
          </View>
          {items.type === 'internet' ? (
            <View style={{paddingVertical: 2}}>
              <Text
                style={{
                  fontSize: 12,
                  color: 'silver',
                  paddingLeft: 29,
                }}>
                {items.name}
              </Text>
            </View>
          ) : items.type === 'telpon' ? (
            <Text
              style={{
                fontSize: 12,
                color: 'silver',
                paddingLeft: 29,
              }}>
              {items.name}
            </Text>
          ) : items.type === 'sms' ? (
            <Text
              style={{
                fontSize: 12,
                color: 'silver',
                paddingLeft: 29,
              }}>
              {items.name}
            </Text>
          ) : null}
        </View>
      ))}
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default buyItem;
