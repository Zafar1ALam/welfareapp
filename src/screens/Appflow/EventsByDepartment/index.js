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
import { connect } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../../../route';

const EventsByDepartment = props => {
  const [eventsByDepartment, setEventsByDepartment] = useState([])
  console.log(props.user.department)
  const getEventsByDepartment = async () => {
    await axios.get(`${baseUrl}/get-events-by-department`, {
      params: {
        department: props.user.department
      }
    }).then(response => {

      console.log('response.data.department')
      console.log(response.data)
      setEventsByDepartment(response.data)
    }).catch(error => {
      alert(error)
    })
  }
  useEffect(() => {
    getEventsByDepartment()
  }, [])
  const Firstrenderitem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('EventDetail', { eventDetail: item, moreEvents: eventsByDepartment })}
        style={styles.singleitem}>
        <Image source={{ uri: `${baseUrl}/${item?.images[0]}` }}
          style={styles.listimg1} />
        <View style={styles.secondcontlist}>
          <Text style={styles.listtitle}>{item.title}</Text>
          <View style={styles.loccont}>
            <Image source={appImages.location} style={styles.locimg} />
            <Text style={styles.loctxt} numberOfLines={2}>
              {item.location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.header}>
        <LeftArrow
          name="arrow-back-ios"
          style={styles.arrowback}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.eventtxt}>Events By Department</Text>
      </View>
      <FlatList
        contentContainerStyle={{
          alignSelf: 'center',
          //   width: responsiveWidth(90),
          //   backgroundColor: 'green',
          marginTop: responsiveHeight(3.5),
          paddingBottom: responsiveHeight(4),
        }}
        data={eventsByDepartment}
        renderItem={Firstrenderitem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}
export default connect(mapStateToProps)(EventsByDepartment)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    paddingBottom: "3%",
    width: responsiveWidth(88),
    alignSelf: 'center',
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
  singleitem: {
    width: responsiveWidth(42),
    height: 210,
    // alignSelf: 'flex-start',

    // alignItems: 'center',
    paddingVertical: responsiveHeight(1.5),
    marginHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(1.9),
    // marginLeft: responsiveWidth(3),
    // marginRight: responsiveWidth(3),
    backgroundColor: appColor.appColorWhite,
    borderRadius: 8,
    borderWidth: responsiveWidth(0.1),
    borderColor: 'lightgray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  listimg1: {
    width: responsiveWidth(35),
    height: responsiveHeight(17),
    borderRadius: 8,
    alignSelf: 'center',
  },
  secondcontlist: {
    paddingHorizontal: responsiveWidth(2),
  },
  loccont: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  listtitle: {
    fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1),
    width: responsiveWidth(30)
  },
  locimg: {
    resizeMode: 'contain',
    // backgroundColor: 'red',
    height: responsiveWidth(4),
    width: responsiveWidth(4),
  },
  loctxt: {
    fontSize: responsiveFontSize(1.5),
    marginLeft: responsiveWidth(1),
    color: '#6b7280',
    width: responsiveWidth(30)
    // marginLeft: responsiveWidth(3),
    // backgroundColor: 'red',
  },
});
