import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { appImages } from '../../../assets/utilities';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { MyButton } from '../../../components/MyButton';
import { fontFamily } from '../../../constants/fonts';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field'
import axios from 'axios';
import { baseUrl } from '../../../route';
import { HelperText } from 'react-native-paper';

const BackEmail = props => {
  const { email, otp } = props.route.params
  const CELL_COUNT = 4
  const [value, setValue] = useState('')
  const [finalOtp, setFinalOtp] = useState(otp)
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue, })
  const [authenticated, setAuthenticated] = useState(false)
  const [showHelperText, setShowHelperText] = useState(false)
  const onSubmitButtonPress = async () => {
    await axios.post(`${baseUrl}/email-otp`, {
      email: email
    }).then(response => {
      console.log(response.data)
      setFinalOtp(response.data)
    }).catch(error => {
      if (error.response.status == 404) {
        alert('No user registered with this email')
      } else {
        alert(error)
      }
    })
  }
  const onContinueButtonPress = () => {
    if (finalOtp == value) {
      setAuthenticated(true)
      setShowHelperText(false)
    } else {
      setShowHelperText(true)
      setAuthenticated(false)
    }
  }
  useEffect(() => {
    if (authenticated) {
      props.navigation.navigate('ChangeNewPassword', { email: email })
    }
  }, [authenticated])
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar hidden />
        <View style={styles.circle}>
          <Image source={appImages.tickicon} style={styles.imgstyle} />
        </View>
        <View style={styles.txtview}>
          <Text style={styles.welcometxt}>OTP Sent</Text>
          <CodeField
            ref={ref}
            {...propss}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={{ width: '100%', alignSelf: 'center', marginTop: '5%' }}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <HelperText visible={showHelperText} type="error">
            Please enter the OTP you received
          </HelperText>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1) }}>
            <Text style={styles.desctxt}>
              Please check your email for 4-digit OTP
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveHeight(3),
            alignSelf: 'center',
          }}>
          <View>
            <Text style={styles.forgettxt2}>Can't get email?</Text>
          </View>
          <View>
            <TouchableRipple
              onPress={onSubmitButtonPress}
              style={styles.forgetcont}
              rippleColor="lightgreen">
              <Text style={styles.forgettxt}> Resend </Text>
            </TouchableRipple>
          </View>
        </View>
      </View>

      <MyButton
        myStyles={styles.fixedfooter}
        title={'Continue'}
        onPress={onContinueButtonPress}
      />
    </SafeAreaView>
  );
};

export default BackEmail;

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
    shadowColor: 'lightgreen',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
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
  cell: {
    width: 60,
    height: 75,
    lineHeight: 38,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 18,
    marginRight: 5,
    color: 'black',
    marginBottom: 30,
    textAlignVertical: 'center'
  },
  focusCell: {
    borderColor: '#000',
  },
});
