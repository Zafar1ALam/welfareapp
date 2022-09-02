import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, ScrollView, KeyboardAvoidingView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appImages } from '../../../assets/utilities'
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions'
import { appColor } from '../../../constants/colors'
import { MyButton } from '../../../components/MyButton'
import { fontFamily } from '../../../constants/fonts'
import { TextInput, TouchableRipple, HelperText } from 'react-native-paper'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { baseUrl } from '../../../route'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import LoaderButtonRnPaper from '../../../components/LoaderButton'


const Login = props => {
  const [emailRegex] = useState(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showEmailHelperText, setShowEmailHelperText] = useState(false)
  const [showPasswordHelperText, setShowPasswordHelperText] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('user_session', JSON.stringify(value))
    } catch (error) {
      alert(error)
    }
  }
  const onLoginButtonPress = async () => {
    if (!emailRegex.test(email) || email.length == 0) {
      setShowEmailHelperText(true)
      setShowPasswordHelperText(false)
    } else if (password.length == 0) {
      setShowEmailHelperText(false)
      setShowPasswordHelperText(true)
    } else {
      setIsLoading(true)
      await axios.put(`${baseUrl}/login-user`, {
        email: email,
        password: password
      }).then(response => {
        console.log(response.data)
        storeData(response.data)
        props.setUserData(response.data)
        setIsLoading(false)
        props.navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'App' }]
        }))
        // props.navigation.navigate('App')
      }).catch(error => {
        setIsLoading(false)
        if (error.response.status == 401) {
          alert('Please check your password')
        } else if (error.response.status == 404) {
          alert('No user registered with this email')
        } else {
          alert(error)
        }
      })
    }
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: appColor.appColorWhite }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <StatusBar hidden />
          <Image source={appImages.mainlogo1} style={styles.imgstyle} />
          <View style={styles.logintxtcont}>
            <Text style={styles.logintxt}>Login</Text>
            <View style={styles.greenline}></View>
          </View>
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
            <HelperText visible={showEmailHelperText} type="error" style={styles.helperTextStyle} >
              Please enter a valid email
            </HelperText>
            <View style={styles.txtcont2}>
              <Text style={styles.emaillabel}>Password</Text>
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
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <HelperText visible={showPasswordHelperText} type="error" style={styles.helperTextStyle} >
            Please enter your password
          </HelperText>
          <TouchableRipple
            onPress={() => {
              console.log('Pressed'),
                props.navigation.navigate('ForgotPassword');
            }}
            style={styles.forgetcont}
            rippleColor={'lightgreen'}>
            <Text style={styles.forgettxt}>Forget Password?</Text>
          </TouchableRipple>
        </View>
        {/* <MyButton
          myStyles={styles.fixedfooter}
          title={'Login'}
          onPress={onLoginButtonPress}
        /> */}
        <LoaderButtonRnPaper
          onPress={onLoginButtonPress}
          loading={isLoading}
          label="Login"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (user) => dispatch({
      type: 'SET_USER_DATA',
      payload: user
    })
  }
}

export default connect(null, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: appColor.appColorWhite,
    justifyContent: 'space-between',
    height: '100%',
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
    // paddingBottom: responsiveHeight(5),
    marginBottom: responsiveHeight(4),
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
    // marginTop: responsiveHeight(2),
  },
  forgetcont: {
    //   width: responsiveWidth(92),
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(1.5),
    marginRight: responsiveWidth(7),
  },
  forgettxt: {
    color: appColor.appColorGreen,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextRegular,
    alignItems: 'flex-end',
  },
  helperTextStyle: {
    alignSelf: 'center',
  }
});
