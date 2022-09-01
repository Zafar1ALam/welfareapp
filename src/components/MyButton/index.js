import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {Icon} from 'react-native-vector-icons';
import {appColor} from '../../constants/colors';

import styles from './style';
export const MyButton = props => {
  const {
    onPress,
    title,
    myStyles,
    iconName,
    iconType,
    itsTextstyle,
    iconColor,
    iconSize,
  } = props;
  return (
    <View
      style={[styles.mainview, myStyles]}
      // style={[styles.container, myStyles]}
    >
      <TouchableRipple
        rippleColor={'green'}
        borderless={true}
        onPress={onPress}>
        <View activeOpacity={0.7} style={[styles.container]}>
          {iconName && (
            <View style={styles.IconCon}>
              <Icon
                name={iconName}
                size={iconSize ? iconSize : responsiveFontSize(3)}
                type={iconType}
                // color={iconColor ? iconColor : "white"}
              />
            </View>
          )}
          {title && (
            <Text
              style={[
                styles.title,
                {width: iconName ? responsiveWidth(50) : null},
                itsTextstyle,
              ]}>
              {title}
            </Text>
          )}
        </View>
      </TouchableRipple>
    </View>
  );
};
