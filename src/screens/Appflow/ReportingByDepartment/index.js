import { StyleSheet, Text, View, ScrollView, StatusBar, ImageBackground, Image, TouchableOpacity, TouchableNativeFeedback, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { appImages } from '../../../assets/utilities';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import RightArrow from 'react-native-vector-icons/MaterialIcons';
import { fontFamily } from '../../../constants/fonts';
import { TouchableRipple } from 'react-native-paper';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { baseUrl } from '../../../route';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
const ReportingByDepartment = (props) => {
  console.log(props.user)

  const isFocused = useIsFocused();
  const [reports, setReports] = useState([])

  const [showEvents, setShowEvents] = useState(true)

  const [secondlist, setSecondlist] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
  ]);
  const getDepartmentReports = async () => {
    let b = {
      userType: props.user.userType,
      department: props.user.department,
      ReportCategory: showEvents == true ? "Event" : "Meeting"

    }
    console.log(b)

    await axios.get(`${baseUrl}/get-reports-of-subordinates`, {
      params: b
    }).then(response => {
      console.log(response.data)
      const data = response.data.reverse()
      console.log(data)
      setReports(data)
    }).catch(error => {
      alert(error)
    })
  }
  useEffect(() => {
    getDepartmentReports()
  }, [isFocused])

  useEffect(() => {
    getDepartmentReports()
  }, [showEvents])
  const Secondrenderitem = ({ item, index }) => {
    return (
      <View style={{
        height: 110, backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: '5%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        elevation: 1,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        flexDirection: 'row',
        borderRadius: 8
      }}>

        <View style={{
          height: '100%', width: '20%',
          //backgroundColor: 'green',
          borderRadius: 8
        }}>
          <Image source={{ uri: `${baseUrl}/${item.images[0]}` }}
            style={{
              height: '100%',

              width: '100%',
              borderRadius: 8
            }} />

        </View>
        <View style={{
          alignItems: 'flex-start', flex: 1,
          justifyContent: "space-evenly",
          marginHorizontal: '5%'
        }}>
          <View>
            <Text>{item.title}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={appImages.calender} style={styles.calender} />
            <Text style={styles.datestyle}>{new Date(item.date).toISOString().split('T')[0]}</Text>
          </View>
        </View>

        <View style={{
          justifyContent: 'space-evenly',
          //   backgroundColor: 'red',

        }}>

          {/* <TouchableRipple
            style={{
              backgroundColor: appColor.appColorGreen,
              borderRadius: 8
            }}
            onPress={() => props.navigation.navigate('EditReporting',
              { report: item })}
            borderless={true}
            rippleColor={'darkgreen'}>
            <Text style={styles.detailbuttontxt}>Edit</Text>
          </TouchableRipple> */}
          <TouchableRipple
            style={{
              backgroundColor: appColor.appColorGreen,
              borderRadius: 8
            }}
            onPress={() => props.navigation.navigate('ReportDetail',
              {

                reportItem: item
              })}
            borderless={true}
            rippleColor={'darkgreen'}>
            <Text style={styles.detailbuttontxt}>Detail</Text>
          </TouchableRipple>
        </View>







      </View >
    );
  };


  const Thirdrenderitem = ({ item, index }) => {
    return (
      <View style={{
        height: 110, backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: '5%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        elevation: 1,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        flexDirection: 'row',
        borderRadius: 8
      }}>

        <View style={{
          height: '100%', width: '20%',
          //backgroundColor: 'green',
          borderRadius: 8
        }}>
          <Image source={{ uri: `${baseUrl}/${item.images[0]}` }}
            style={{
              height: '100%',

              width: '100%',
              borderRadius: 8
            }} />

        </View>
        <View style={{
          alignItems: 'flex-start', flex: 1,
          justifyContent: "space-evenly",
          marginHorizontal: '5%'
        }}>
          <View>
            <Text>{item.title}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={appImages.calender} style={styles.calender} />
            <Text style={styles.datestyle}>{new Date(item.date).toISOString().split('T')[0]}</Text>
          </View>
        </View>

        <View style={{
          justifyContent: 'space-evenly',
          //   backgroundColor: 'red',

        }}>

          {/* <TouchableRipple
            style={{
              backgroundColor: appColor.appColorGreen,
              borderRadius: 8
            }}
            onPress={() => props.navigation.navigate('EditReporting',
              { report: item })}
            borderless={true}
            rippleColor={'darkgreen'}>
            <Text style={styles.detailbuttontxt}>Edit</Text>
          </TouchableRipple> */}
          <TouchableRipple
            style={{
              backgroundColor: appColor.appColorGreen,
              borderRadius: 8
            }}
            onPress={() => props.navigation.navigate('ReportDetail',
              {

                reportItem: item
              })}
            borderless={true}
            rippleColor={'darkgreen'}>
            <Text style={styles.detailbuttontxt}>Detail</Text>
          </TouchableRipple>
        </View>




      </View >
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.parentheader}>
        <View style={styles.header}>
          <LeftArrow name="arrow-back-ios" style={styles.arrowback}
            onPress={() => props.navigation.goBack()}
          />
          <Text style={styles.eventtxt}>Reporting By Department</Text>
        </View>
      </View>


      <View style={{
        flexDirection: 'row',// backgroundColor: 'red',
        width: "50%", alignSelf: 'center',
        justifyContent: 'space-between',
        marginVertical: '5%',

      }}>
        <TouchableRipple style={{
          backgroundColor: showEvents ? '#32B768' : '#ffffff',
          borderRadius: 16,
          paddingHorizontal: '5%',
          paddingVertical: '1%',
          borderWidth: showEvents ? 0 : 1,
          borderColor: showEvents ? '#ffffff' : '#32B768',
        }} onPress={() => {
          setShowEvents(true)
        }}>
          <Text style={{
            fontSize: 12,
            fontFamily: 'arial',
            fontWeight: '400',
            color: showEvents ? '#ffffff' : '#32B768',
          }}>Event</Text>

        </TouchableRipple>
        <TouchableRipple style={{
          backgroundColor: !showEvents ? '#32B768' : '#ffffff',
          borderRadius: 16,
          paddingHorizontal: '5%',
          borderWidth: !showEvents ? 0 : 1,
          borderColor: !showEvents ? '#ffffff' : '#32B768',


          paddingVertical: '1%'
        }}
          onPress={() => {
            setShowEvents(false)
          }}>
          <Text style={{
            fontSize: 12,
            fontFamily: 'arial',
            fontWeight: '400',
            color: !showEvents ? '#ffffff' : '#32B768',
          }}>Meeting</Text>

        </TouchableRipple>
      </View>

      <View style={{
        borderWidth: 1,
        borderColor: 'rgba(112,112,112,0.25)'
      }}>

      </View>
      <View style={styles.secondheader}>
        <Text style={styles.txtstyle}>{props.user.department}</Text>
        <Text style={styles.txtstyle2}>Total Record: {reports.length}</Text>
      </View>


      {showEvents ?
        <View style={{ flex: 1, marginHorizontal: '5%' }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={reports}
            renderItem={Secondrenderitem}

          />
        </View>
        :
        <View style={{ flex: 1, marginHorizontal: '5%' }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={reports}
            renderItem={Thirdrenderitem}

          />
        </View>
      }
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}
export default connect(mapStateToProps)(ReportingByDepartment)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parentheader: {
    width: responsiveWidth(100),
    alignItems: 'center',
    backgroundColor: appColor.appColorWhite,
    paddingVertical: responsiveHeight(3),
  },
  secondheader: {
    width: responsiveWidth(88),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginBottom: "4%",
    flexWrap: 'wrap',
  },
  txtstyle: {
    color: '#1f2937',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
    marginRight: responsiveWidth(1),
  },
  txtstyle2: {
    color: '#1f2937',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
  },
  header: {
    flexDirection: 'row',
    // marginTop: responsiveHeight(4),
    alignItems: 'center',
    width: responsiveWidth(88),
    alignSelf: 'center',
    backgroundColor: appColor.appColorWhite,
  },
  eventtxt: {
    color: '#1f2937',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.2),
    marginLeft: responsiveWidth(12),
  },
  arrowback: {
    fontSize: responsiveFontSize(2),
    // backgroundColor: 'red',
    color: '#89909e',
  },
  singleseconditem: {
    width: "100%",
    height: 100,
    marginBottom: responsiveHeight(2),
    backgroundColor: appColor.appColorWhite,
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.1),
    borderColor: 'lightgray',
    borderTopWidth: responsiveWidth(0.2),
    shadowColor: '#000',
    marginHorizontal: '5%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,

    flexDirection: 'row',
    alignItems: 'center',

  },
  imglist2: {
    resizeMode: 'cover',
    height: responsiveHeight(9),
    width: responsiveWidth(17),
    borderRadius: responsiveWidth(1.5),
  },
  secondtitlecont: {
    marginLeft: responsiveWidth(3),
    height: responsiveHeight(9),
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingBottom: responsiveHeight(0.5),
  },
  secondlisttitle: {
    fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
    fontSize: responsiveFontSize(2.2),
    width: responsiveWidth(50),
  },
  calender: {
    resizeMode: 'contain',
    // backgroundColor: 'red',
    width: responsiveWidth(5),
    height: responsiveWidth(5),
  },
  datestyle: {
    color: '#6b7280',
    fontFamily: fontFamily.appTextRegular,
    marginLeft: responsiveWidth(2.5),
    fontSize: responsiveFontSize(1.5),
  },
  detailbutton: {
    position: 'absolute',
    right: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
    // height: responsiveHeight(7),
    // width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    backgroundColor: appColor.appColorGreen,
  },
  detailbuttontxt: {
    // backgroundColor: appColor.appColorGreen,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3.5),
    borderRadius: responsiveWidth(2.5),
    color: appColor.appColorWhite,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.7),
  },
});
