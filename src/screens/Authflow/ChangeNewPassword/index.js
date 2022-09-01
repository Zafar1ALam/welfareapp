import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
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
import { HelperText } from 'react-native-paper';
import LoaderButtonRnPaper from '../../../components/LoaderButton'
import axios from 'axios';
import { baseUrl } from '../../../route';

const ChangeNewPassword = props => {
  const { email } = props.route.params
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showHelperText, setShowHelperText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const onResetPasswordPress = async () => {
    if (password == confirmPassword && password.length > 0 && confirmPassword.length > 0) {
      setShowHelperText(false)
      setIsLoading(true)
      await axios.put(`${baseUrl}/update-password`, {
        email: email,
        password: password
      }).then(response => {
        setIsLoading(false)
        props.navigation.navigate('SuccessSignin')
      }).catch(error => {
        alert(error)
      })
    } else {
      setIsLoading(false)
      setShowHelperText(true)
    }
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ width: responsiveWidth(90), alignSelf: 'center' }}>
          <Text style={styles.forgettoptxt}>Change New Password</Text>
          <Text style={styles.entertxt}>
            Enter a different password with the previous
          </Text>
          <StatusBar hidden />
          <View style={styles.bothinputcont}>
            <View style={styles.txtcont1}>
              <Text style={styles.emaillabel}>New Password</Text>
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
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.txtcont2}>
              <Text style={styles.emaillabel}>Confirm Password</Text>
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
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
              />
            </View>
            <HelperText visible={showHelperText} type="error" style={{ alignSelf: 'center' }} >
              Your Passwords Do Not Match
            </HelperText>
          </View>
        </View>

        {/* <MyButton
          myStyles={styles.fixedfooter}
          title={'Reset Password'}
          onPress={onResetPasswordPress}
        /> */}
        <LoaderButtonRnPaper
          label="Reset Password"
          loading={isLoading}
          onPress={onResetPasswordPress}
          style={styles.fixedfooter} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangeNewPassword;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    color: '#828282',
    marginTop: responsiveHeight(0.5),
  },
});
