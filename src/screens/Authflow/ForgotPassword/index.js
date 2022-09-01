import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { appImages } from '../../../assets/utilities';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { MyButton } from '../../../components/MyButton';
import { fontFamily } from '../../../constants/fonts';
import { TextInput, TouchableRipple, HelperText } from 'react-native-paper';
import axios from 'axios';
import { baseUrl } from '../../../route';
const ForgetPassword = props => {
  const [emailRegex] = useState(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  const [showEmailHelperText, setShowEmailHelperText] = useState(false)
  const [email, setEmail] = useState('')
  const onSubmitButtonPress = async () => {
    if (email.length == 0 || !emailRegex.test(email)) {
      setShowEmailHelperText(true)
    } else {
      setShowEmailHelperText(false)
      await axios.post(`${baseUrl}/email-otp`, {
        email: email
      }).then(response => {
        console.log(response.data)
        props.navigation.navigate('BackEmail', { email: email, otp: response.data })
      }).catch(error => {
        if (error.response.status == 404) {
          alert('No user registered with this email')
        } else {
          alert(error)
        }
      })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: responsiveWidth(90), alignSelf: 'center' }}>
        <Text style={styles.forgettoptxt}>Forgot Password</Text>
        <Text style={styles.entertxt}>Enter your registered email below</Text>
        <StatusBar hidden />
        <View style={styles.bothinputcont}>
          <View style={styles.txtcont1}>
            <Text style={styles.emaillabel}>Email address</Text>
            <TextInput
              style={styles.txtinput1}
              mode={'outlined'}
              theme={{
                roundness: responsiveWidth(5),
                colors: { text: '#374151' },
                fonts: {
                  regular: {
                    fontFamily: fontFamily.appTextRegular,
                  },
                },
              }}
              activeOutlineColor={appColor.appColorGreen}
              outlineColor={'#bec5d1'}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {
            showEmailHelperText && (
              <HelperText visible={showEmailHelperText} type="error" style={styles.helperTextStyle} >
                Please enter a valid email
              </HelperText>
            )
          }
        </View>

        <View style={{ flexDirection: 'row', marginTop: responsiveHeight(1) }}>
          <View>
            <Text style={styles.forgettxt2}>Remember the password?</Text>
          </View>
          <View>
            <TouchableRipple
              onPress={() => {
                console.log('Pressed'), props.navigation.navigate('Login');
              }}
              style={styles.forgetcont}
              rippleColor="lightgreen">
              <View>
                <Text style={styles.forgettxt}> Sign in </Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </View>

      <MyButton
        myStyles={styles.fixedfooter}
        title={'Submit'}
        onPress={onSubmitButtonPress}
      />
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.appColorWhite,
    justifyContent: 'space-between',
  },
  imgstyle: {
    resizeMode: 'contain',
    width: responsiveWidth(17),
    height: responsiveHeight(10),
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: responsiveHeight(8.5),
  },
  logintxtcont: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2.2),
  },
  greenline: {
    backgroundColor: appColor.appColorGreen,
    width: responsiveWidth(8),
    alignSelf: 'center',
    height: responsiveHeight(0.2),
    marginTop: responsiveHeight(1),
  },
  logintxt: {
    fontFamily: fontFamily.appTextRegular,
    color: appColor.appColorGreen,
    fontSize: responsiveFontSize(1.9),
  },
  fixedfooter: {
    marginBottom: responsiveHeight(5),
  },
  bothinputcont: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(7.5),
  },
  txtinput1: {
    backgroundColor: '#fff',
    fontSize: responsiveFontSize(2),
  },
  emaillabel: {
    marginLeft: responsiveWidth(2),
    fontFamily: fontFamily.appTextRegular,
    color: '#9ca3af',
  },
  passwordlabel: {
    marginLeft: responsiveWidth(2),
  },
  txtcont2: {
    marginTop: responsiveHeight(2),
  },
  forgetcont: {
    //   width: responsiveWidth(92),
    // alignSelf: 'flex-end',
    marginRight: responsiveWidth(7),
  },
  forgettxt2: {
    color: '#9ca3af',
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextRegular,
    // alignItems: 'flex-end',
    marginLeft: responsiveWidth(3.5),
  },
  forgettxt: {
    color: appColor.appColorGreen,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextRegular,
    // alignItems: 'flex-end',
  },
  forgettoptxt: {
    marginTop: responsiveHeight(12),
    fontFamily: fontFamily.appTextBold,
    color: '#374151',
    fontSize: responsiveFontSize(2.5),
  },
  entertxt: {
    fontFamily: fontFamily.appTextRegular,
    color: '#9ca3af',
    marginTop: responsiveHeight(0.5),
  },
  helperTextStyle: {
    alignSelf: 'center',
  },
});
