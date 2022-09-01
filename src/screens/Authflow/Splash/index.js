import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, { useEffect } from 'react';
import { appImages } from '../../../assets/utilities';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { MyButton } from '../../../components/MyButton';
import { fontFamily } from '../../../constants/fonts';

const Splash = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar hidden />
        <Image source={appImages.mainlogo1} style={styles.imgstyle} />
      </View>

      <View>
        <View style={styles.txtview}>
          <Text style={styles.welcometxt}>Welcome</Text>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1) }}>
            <Text style={styles.desctxt}>
              Lorem ipsum dolor sit amet, consetetur
            </Text>
            <Text style={styles.desctxt}>
              sadipscing elitr, sed diam nonumy.
            </Text>
          </View>
        </View>
      </View>

      <MyButton
        myStyles={styles.fixedfooter}
        title={'Continue To Login'}
        onPress={() => props.navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.appColorWhite,
    justifyContent: 'space-between',
    // paddingVertical: responsiveHeight(4),
  },
  imgstyle: {
    resizeMode: 'contain',
    width: responsiveWidth(17),
    height: responsiveHeight(10),
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: responsiveHeight(8),
  },
  fixedfooter: {
    marginBottom: responsiveHeight(3.5),
  },
  txtview: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(14),
  },
  welcometxt: {
    fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
    fontSize: responsiveFontSize(2.8),
  },
  desctxt: {
    fontFamily: fontFamily.appTextRegular,
    color: '#4b5563',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
  },
});
