import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import {appImages} from '../../../assets/utilities';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appColor} from '../../../constants/colors';
import {MyButton} from '../../../components/MyButton';
import {fontFamily} from '../../../constants/fonts';
import {TextInput, TouchableRipple} from 'react-native-paper';

const SuccessSignin = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar hidden />
        <View style={styles.circle}>
          <Image source={appImages.tickicon} style={styles.imgstyle} />
        </View>
        <View style={styles.txtview}>
          <Text style={styles.welcometxt}>Success</Text>
          <View style={{alignItems: 'center', marginTop: responsiveHeight(1)}}>
            <Text style={styles.desctxt}>
              Congratulations your password has
            </Text>
            <Text style={styles.desctxt}>been changed</Text>
          </View>
        </View>
      </View>

      <MyButton
        myStyles={styles.fixedfooter}
        title={'Sign in'}
        onPress={() => props.navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default SuccessSignin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.appColorWhite,
    justifyContent: 'space-between',
  },
  imgstyle: {
    resizeMode: 'contain',
    width: responsiveWidth(8),
    height: responsiveHeight(3.2),
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  fixedfooter: {
    marginBottom: responsiveHeight(5),
  },
  txtview: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2),
  },
  welcometxt: {
    fontFamily: fontFamily.appTextBold,
    color: '#1f2937',

    fontSize: responsiveFontSize(2.8),
  },
  desctxt: {
    fontFamily: fontFamily.appTextRegular,
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    color: '#6b7280',
  },
  circle: {
    backgroundColor: appColor.appColorGreen,
    alignSelf: 'center',
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(80),
    marginTop: responsiveHeight(29),
  },
  forgettxt2: {
    color: '#4b5563',

    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextBold,
    // alignItems: 'flex-end',
    marginLeft: responsiveWidth(3.5),
  },
  forgettxt: {
    color: appColor.appColorGreen,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextBold,
    // alignItems: 'flex-end',
  },
});
