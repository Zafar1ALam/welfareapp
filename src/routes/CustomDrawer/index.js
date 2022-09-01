import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { appColor } from '../../constants/colors';
import { appImages } from '../../assets/utilities';
import { fontFamily } from '../../constants/fonts';
import { TouchableRipple } from 'react-native-paper';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';
import { baseUrl } from '../../route';
import Modal from 'react-native-modal'
import { ActivityIndicator } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LoaderImage from '../../components/LoaderImage';
import ModelTwoButton from '../../components/modeltwobutton/ModelTwoButton';

const CustomDrawer = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState(props.user == null || props.user.image == undefined ? null : `${baseUrl}/${props.user.image}`)




  const [visibleLogoutModal, setVisibleLogoutModal] = useState(false);

  const showLogoutModal = () => setVisibleLogoutModal(true);

  const onDismissLogoutModal = useCallback(() => { setVisibleLogoutModal(false) }, [])

  const getData = async () => {
    const user = await AsyncStorage.getItem('user_session')
    if (user !== null) {
      console.log('user')
      console.log(user)
      const data = JSON.parse(user)
      props.setUserData(data)
      setImage(`${baseUrl}/${data.image}`)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  const removeData = async (value) => {
    try {
      await AsyncStorage.removeItem('user_session')
    } catch (error) {
      // console.log(error)
    }
  }
  const onLogoutPress = async () => {
    console.log(' _id: props.user._id')
    console.log(props.user._id)
    setIsLoading(true)
    setTimeout(async () => {
      await axios.put(`${baseUrl}/logout-user`, {
        _id: props.user._id
      }).then(response => {
        removeData()
        props.setUserData(null)
        setIsLoading(false)
        props.navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'App' }]
        }))
      }).catch(error => {
        setIsLoading(false)
        alert(error)
      })
    }, 1500);
  }
  useEffect(() => {
    if (props.user !== null) {
      setImage(`${baseUrl}/${props.user.image}`)
    }
  }, [props.user])
  return (
    <View style={styles.container}>
      <Modal isVisible={isLoading} style={{ flex: 1, zIndex: 100 }} >
        <ActivityIndicator
          color={appColor.appColorGreen}
          size="large"
          animating={true}
        />
      </Modal>
      <TouchableOpacity
        disabled={props.user == null ? true : false}
        style={styles.circle} onPress={() => props.navigation.navigate('Edit Profile')}>
        {/* <TouchableOpacity onPress={props.navigation.navigate('Edit Profile')}> */}
        {
          image == null ? (
            <FontAwesome5
              size={responsiveFontSize(10)}
              color={appColor.appColorGreen}
              name="user-circle"
            />

          ) : (
            <LoaderImage
              source={image}
              style={styles.userimage}
            />
          )
        }
        {/* <Image source={appImages.userimage} style={styles.userimage} /> */}
        {/* </TouchableOpacity> */}
      </TouchableOpacity>
      <Text style={styles.usernametxt}>{props.user == null ? null : props.user.name}</Text>
      {
        props.user == null ? (
          <TouchableOpacity onPress={() => props.navigation.navigate('Auth')} >
            <Text style={[styles.navigatortxt, styles.loginText]} >
              Login
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.greenbar}>
            {/* <View> */}
            <Text style={styles.headertxt}>{props.user.forum}</Text>
            <View style={styles.whitedot}></View>
            {/* </View> */}
            <Text style={styles.headertxt}>{props.user.userType}</Text>
            <View style={styles.whitedot}></View>

            <Text style={styles.headertxt}>{props.user.department}</Text>
          </View>
        )
      }
      <View style={styles.navigatorcontainer}>
        <View
          style={{
            borderRadius: responsiveWidth(20),
            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => {
              props.navigation.navigate('EventsByDepartment'),
                props.navigation.closeDrawer();
            }}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.eventsbydepartment}
                  style={styles.iconstyle}
                />
              </View>
              <Text style={[styles.navigatortxt, { color: props.user == null ? '#dadada' : '#1f2937' }]}>Events By Department</Text>
            </View>
          </TouchableRipple>
        </View>
        <View
          style={{
            borderRadius: responsiveWidth(20),
            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => {
              console.log("props.user" + props.user)
              props.user == null ? props.navigation.navigate('Home') :
                props.navigation.navigate('EventsByDates')
            }}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.eventsbydates}
                  style={styles.iconstyle}
                />
              </View>
              <Text style={styles.navigatortxt}>Events By Dates</Text>
            </View>
          </TouchableRipple>
        </View>
        <View
          style={{
            borderRadius: responsiveWidth(20),

            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ||
              props.user.role == 'Executive Member' ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => props.navigation.navigate('AddReporting')}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.createreporting}
                  style={styles.iconstyle2}
                />
              </View>
              <Text style={[styles.navigatortxt, { color: props.user == null || props.user.role == 'Executive Member' ? '#dadada' : '#1f2937' }]}>Create Reporting</Text>
            </View>
          </TouchableRipple>
        </View>
        <View
          style={{
            borderRadius: responsiveWidth(20),
            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => props.navigation.navigate('ReportingByDepartment')}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.reportingbydepartment}
                  style={styles.iconstyle2}
                />
              </View>
              <Text style={[styles.navigatortxt,
              {
                color: props.user == null ? '#dadada' : '#1f2937'
              }]}>Reporting By Department</Text>
            </View>
          </TouchableRipple>
        </View>

        <View
          style={{
            borderRadius: responsiveWidth(20),
            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => props.navigation.navigate('AddMonthlyReport')}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.reportingbydepartment}
                  style={styles.iconstyle2}
                />
              </View>
              <Text style={[styles.navigatortxt,
              {
                color: props.user == null ? '#dadada' : '#1f2937'
              }]}>Add Monthly Report</Text>
            </View>
          </TouchableRipple>
        </View>


        <View
          style={{
            borderRadius: responsiveWidth(20),
            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => props.navigation.navigate('MonthlyReport')}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.reportingbydepartment}
                  style={styles.iconstyle2}
                />
              </View>
              <Text style={[styles.navigatortxt,
              {
                color: props.user == null ? '#dadada' : '#1f2937'
              }]}>Monthly Reports</Text>
            </View>
          </TouchableRipple>
        </View>


        <View
          style={{
            borderRadius: responsiveWidth(20),
            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => props.navigation.navigate('Library')}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.reportingbydepartment}
                  style={styles.iconstyle2}
                />
              </View>
              <Text style={[styles.navigatortxt,
              {
                color: props.user == null ? '#dadada' : '#1f2937'
              }]}>Library</Text>
            </View>
          </TouchableRipple>
        </View>

        <View
          style={{
            borderRadius: responsiveWidth(20),
            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => props.navigation.navigate('Draft')}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image
                  source={appImages.reportingbydepartment}
                  style={styles.iconstyle2}
                />
              </View>
              <Text style={[styles.navigatortxt,
              {
                color: props.user == null ? '#dadada' : '#1f2937'
              }]}>Draft</Text>
            </View>
          </TouchableRipple>
        </View>
        <View
          style={{
            borderRadius: responsiveWidth(20),

            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => { props.navigation.navigate('Home') }}
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image source={appImages.rateus} style={styles.iconstyle2} />
              </View>
              <Text style={styles.navigatortxt}>Rate Us</Text>
            </View>
          </TouchableRipple>
        </View>
        <View
          style={{
            borderRadius: responsiveWidth(20),

            width: '97%',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <TouchableRipple
            disabled={props.user == null ? true : false}
            activeOpacity={0.6}
            borderless={true}
            rippleColor={appColor.appColorGreen}
            onPress={() => showLogoutModal()}

            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
              <View style={styles.iconcont}>
                <Image source={appImages.logout} style={styles.iconstyle2} />
              </View>
              <Text style={[styles.navigatortxt,
              {
                color: props.user == null ? '#dadada' : '#1f2937'
              }]}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>


      <ModelTwoButton
        visible={visibleLogoutModal}
        onDismiss={onDismissLogoutModal}
        text1="Confirmation"
        buttonTextLeft="No"
        buttonTextRight="Yes"
        text2="Do you really want to logout?"
        methodOnLeftSide={() => {
          onDismissLogoutModal()

        }}
        methodOnRightSide={() => {
          onDismissLogoutModal()
          onLogoutPress()
        }}

      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (user) => dispatch({
      type: 'SET_USER_DATA',
      payload: user
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(50),
    // borderWidth: responsiveWidth(0.2),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.7),
    borderColor: appColor.appColorGreen,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: appColor.appColorGreen,
  },
  userimage: {
    width: responsiveWidth(20.4),
    height: responsiveWidth(20.4),
    borderRadius: responsiveWidth(52),
    borderWidth: 2,
    borderColor: appColor.appColorGreen
  },
  usernametxt: {
    alignSelf: 'center',
    marginTop: responsiveHeight(0.5),
    fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
    fontSize: responsiveFontSize(2.3),
  },
  greenbar: {
    backgroundColor: appColor.appColorGreen,
    height: responsiveHeight(4),//4
    width: responsiveWidth(50),
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.5),
  },
  whitedot: {
    backgroundColor: appColor.appColorWhite,
    width: responsiveWidth(1),
    height: responsiveWidth(1),
    borderRadius: responsiveWidth(5),
  },
  headertxt: {
    color: appColor.appColorWhite,
  },
  singlenavigator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(3),
  },
  iconstyle: {
    // backgroundColor: 'red',
    height: responsiveHeight(3.2),
    resizeMode: 'contain',
    width: responsiveWidth(6.2),
    marginTop: responsiveHeight(0.5),
  },
  iconstyle2: {
    // backgroundColor: 'red',
    height: responsiveHeight(2.5),
    resizeMode: 'contain',
    width: responsiveWidth(5.5),
    marginTop: responsiveHeight(0.5),
  },
  navigatortxt: {
    fontFamily: fontFamily.appTextRegular,
    marginLeft: responsiveWidth(3),
    fontSize: responsiveFontSize(2.1),
    color: '#1f2937',
  },
  iconcont: {
    height: responsiveHeight(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(6.5),
  },
  loginText: {
    alignSelf: 'center',
    marginLeft: responsiveWidth(0),
    color: appColor.appColorGreen,
    fontWeight: '600'
  }
});
