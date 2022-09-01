import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appColor} from '../../constants/colors';
// import {buttonColor, textColor} from '../../constants/colors';
import {fontFamily} from '../../constants/fonts';
// import {fonts} from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: responsiveHeight(8.5),
    width: responsiveWidth(80),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(3.5),
    // backgroundColor: appColor.appColorGreen,
  },
  mainview: {
    width: responsiveWidth(80),
    height: responsiveHeight(8.5),
    backgroundColor: 'red',
    alignSelf: 'center',
    backgroundColor: appColor.appColorGreen,
    borderRadius: responsiveWidth(5),
  },
  title: {
    color: '#fff',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    // fontFamily: fontFamily.appTextBold,
    // fontFamily: fonts.SFRegular,
  },
  IconCon: {
    width: responsiveWidth(10),
  },
});
