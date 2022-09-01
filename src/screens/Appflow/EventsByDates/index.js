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
import axios from 'axios'
import { baseUrl } from '../../../route/index'

const EventsByDates = props => {
  const [eventsByDate, setEventsByDate] = useState([])
  const getEventsByDate = async () => {

    console.log('getEventByDates')
    console.log(props.user)
    if (props.user == null) {
      await axios.get(`${baseUrl}/get-events-by-date`)
        .then(response => {
          console.log('response.data')
          console.log(response.data)
          setEventsByDate(response.data)
        }).catch(error => {
          alert(error)
        })
    }
  }
  useEffect(() => {
    getEventsByDate()
  }, [])
  const Secondrenderitem = ({ item, index }) => {
    console.log(`${baseUrl}/${item?.images[0][0]}`)
    console.log(`${item.description}`)
    console.log(item?.images[0][1])
    return (
      <View style={styles.singleseconditem}>

        <Image source={{ uri: `${baseUrl}/${item?.images[0]}` }} style={styles.imglist2} />
        <View style={styles.secondtitlecont}>
          <Text style={styles.secondlisttitle}>{item.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={appImages.calender} style={styles.calender} />
            <Text style={styles.datestyle}>{new Date(item?.date).toISOString().split('T')[0]}</Text>
          </View>
        </View>

        <View style={styles.detailbutton}>
          <TouchableRipple
            // style={styles.detailbutton}
            onPress={() => props.navigation.navigate('EventDetail',
              { eventDetail: item, moreEvents: eventsByDate })}
            borderless={true}
            rippleColor={'darkgreen'}>
            <Text style={styles.detailbuttontxt}>Detail</Text>
          </TouchableRipple>
        </View>
      </View>
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
        <Text style={styles.eventtxt}>Events By Dates</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={eventsByDate}
        renderItem={Secondrenderitem}
        contentContainerStyle={{
          marginTop: responsiveHeight(3),
          paddingBottom: responsiveHeight(3),
        }}
      />
    </View>
  );
};

export default EventsByDates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
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
    color: '#89909e',
  },
  singleseconditem: {
    width: responsiveWidth(90),
    height: responsiveHeight(12.5),
    marginBottom: responsiveHeight(2),
    backgroundColor: appColor.appColorWhite,
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.1),
    borderColor: 'lightgray',
    borderTopWidth: responsiveWidth(0.2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2.5),
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
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: responsiveHeight(0.5),
  },
  secondlisttitle: {
    fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
    fontSize: responsiveFontSize(2.2),
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
