import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, ImageBackground, Image, TouchableOpacity, TouchableNativeFeedback, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { appImages } from '../../../assets/utilities';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import RightArrow from 'react-native-vector-icons/MaterialIcons';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { fontFamily } from '../../../constants/fonts';
import { TouchableRipple } from 'react-native-paper';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import { baseUrl } from '../../../route';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


const EventDetail = (props) => {
  const { eventDetail, moreEvents } = props.route.params
  console.log(eventDetail, moreEvents)
  const scrollViewRef = useRef()
  const [event, setEvent] = useState(eventDetail)
  const [correctTime, setCorrectTime] = useState('')
  const [correctDate, setCorrectDate] = useState('')
  const [activeSlide, setActiveSlide] = useState(0)
  const [showDetail, setShowDetail] = useState(false)

  const pagination = () => {
    return (
      <Pagination
        dotsLength={event.images.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          // backgroundColor: 'red',
          paddingVertical: responsiveHeight(0.2),
        }}
        animatedDuration={50}
        dotElement={
          <View
            style={{
              width: responsiveWidth(2.9),
              height: responsiveWidth(2.9),
              borderRadius: responsiveWidth(30),
              marginHorizontal: responsiveWidth(0.7),
              backgroundColor: appColor.appColorGreen,
            }}></View>
        }
        inactiveDotElement={
          <View
            style={{
              width: responsiveWidth(2.8),
              height: responsiveWidth(2.8),
              borderRadius: responsiveWidth(30),
              marginHorizontal: responsiveWidth(0.7),
              backgroundColor: '#e2e2e2',
            }}></View>
        }
      />
    );
  };
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
  ]);
  const Firstrenderitem = ({ item, index }) => {
    return (
      <View style={styles.singleitem}>
        <Image source={appImages.caroimage} style={styles.listimg1} />
        <View style={styles.secondcontlist}>
          <Text style={styles.listtitle}>Title Here</Text>
          <View style={styles.loccont}>
            <Image source={appImages.location} style={styles.locimg} />
            <Text style={styles.loctxt} numberOfLines={2}>
              Lorem ipsum dolor sit amet, consetetur.
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Secondrenderitem = ({ item, index }) => {

    console.log(item?.images[0])
    if (item._id == event._id) {
      return null
    } else {
      return (
        <View style={styles.singleseconditem}>

          <Image source={{ uri: baseUrl + "/" + item?.images[0] }}

            style={styles.imglist2}
          />
          <View style={styles.secondtitlecont}>
            <Text style={styles.secondlisttitle}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={appImages.calender} style={styles.calender} />
              <Text style={styles.datestyle}>{new Date(item.date).toISOString().split('T')[0]}</Text>
            </View>
          </View>

          <View style={styles.detailbutton}>
            <TouchableRipple
              onPress={() => {
                setEvent(item)
                scrollViewRef.current.scrollTo({ y: 0, animated: true })
              }}
              borderless={true}
              rippleColor={'darkgreen'}>
              <Text style={styles.detailbuttontxt}>Detail</Text>
            </TouchableRipple>
          </View>
        </View>
      );
    }
  };

  const renderItem = ({ item, index }) => {
    console.log(`${baseUrl} / ${item}`)
    return (
      <ImageBackground
        source={{ uri: `${baseUrl}/${item}` }}
        imageStyle={{
          borderRadius: responsiveWidth(4.5),
        }}
        style={{
          resizeMode: 'cover',
          width: responsiveWidth(90),
          height: responsiveHeight(28),
          // backgroundColor: 'red',
        }}>
        <View style={styles.bgcontainer}>
          <View>
            <Text style={styles.bgimptxt}>Important</Text>
          </View>
          {/* <View style={styles.bgbelowcont}>
            <Text style={styles.bgtitletxt}>{event.title}</Text>
            <Text style={styles.bgdesctxt} numberOfLines={2}>
              {event.description}
            </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => setShowDetail(!showDetail)} >
              <View style={styles.bgdetailcont}>
                <Text style={styles.bgdetailtxt}>Detail</Text>
                <RightArrow
                  name="arrow-forward-ios"
                  style={styles.bgrighticon}
                />
              </View> 
            </TouchableOpacity>
          </View>
          */}
        </View>
      </ImageBackground>
    );
  };
  const getCorrectTime = () => {
    const date = new Date(event.time)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    setCorrectTime(strTime)
  }
  const getCorrectDate = () => {
    let date = new Date(event.date);
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    date = dd + '-' + mm + '-' + yyyy;
    setCorrectDate(date)
  }
  useEffect(() => {
    getCorrectTime()
    getCorrectDate()
  }, [event])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.appColorWhite,
      }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true} />

        <View style={styles.parentheader}>
          <View style={styles.header}>
            <LeftArrow
              name="arrow-back-ios"
              style={styles.arrowback}
              onPress={() => props.navigation.goBack()}
            />
            <Text style={styles.headertxt}>{event.title}</Text>
            <Text>{'   '}</Text>
          </View>
        </View>

        <View>
          <Carousel
            data={event.images}
            renderItem={renderItem}
            sliderWidth={responsiveWidth(100)}
            itemWidth={responsiveWidth(100)}
            pagingEnabled
            containerCustomStyle={{
              //   marginTop: responsiveHeight(1),
              alignSelf: 'center',
              paddingHorizontal: responsiveWidth(5),
            }}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <View
            style={{
              alignSelf: 'center',
              marginTop: responsiveHeight(2.5),
              // backgroundColor: 'red',
            }}>
            {pagination()}
          </View>
        </View>
        {

          <View>
            <View style={styles.datecontaier}>
              <View style={styles.clockcontainer}>
                <Image source={appImages.clock} style={styles.clockstyle} />
                <Text style={styles.datetimetxt}>Date & Time</Text>
              </View>
              <View style={{ marginTop: responsiveHeight(2) }}>
                <Text style={styles.timetxt}>{correctTime}, {correctDate}</Text>
              </View>
            </View>
            <View style={styles.datecontaier}>
              <View style={styles.clockcontainer}>
                <Image source={appImages.location} style={styles.clockstyle} />
                <Text style={styles.locationtxt} numberOfLines={3}>
                  {event.location}
                </Text>
              </View>
            </View>
            <View style={styles.eventheader3}>
              <Text style={styles.eventtxt}>Description</Text>
              <Text style={styles.desctxt} numberOfLines={6}>
                {event.description}
              </Text>
            </View>
          </View>

        }
        {
          moreEvents.length > 1 && (
            <View>
              <View style={styles.eventheader2}>
                <Text style={styles.eventtxt}>More Events</Text>
              </View>
              <FlatList data={moreEvents} renderItem={Secondrenderitem}
                extraData={event} />
            </View>
          )
        }
      </ScrollView>
    </View>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flexGrow: 1,
  },
  parentheader: {
    width: responsiveWidth(100),
    alignItems: 'center',
    backgroundColor: appColor.appColorWhite,
    paddingVertical: responsiveHeight(3),
  },
  header: {
    flexDirection: 'row',
    // marginTop: responsiveHeight(4),
    alignItems: 'center',
    width: responsiveWidth(88),
    alignSelf: 'center',
    backgroundColor: appColor.appColorWhite,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },

  greenbar: {
    backgroundColor: appColor.appColorGreen,
    height: responsiveHeight(4),
    width: responsiveWidth(50),
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
  },
  whitedot: {
    backgroundColor: appColor.appColorWhite,
    width: responsiveWidth(1),
    height: responsiveWidth(1),
    borderRadius: responsiveWidth(5),
  },
  headertxt: {
    color: '#1f2937',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.2),
    // marginLeft: responsiveWidth(12),
  },
  headerpic: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    borderRadius: responsiveWidth(10),
    borderWidth: responsiveWidth(0.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColor.appColorGreen,
  },
  userimage: {
    // resizeMode: 'stretch',
    height: responsiveWidth(8.5),
    width: responsiveWidth(8.5),
    borderRadius: responsiveWidth(10),
  },
  eventheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(91),
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  eventheader2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(87),
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(3),
  },
  eventheader3: {
    width: responsiveWidth(87),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(3),
  },
  desctxt: {
    fontFamily: fontFamily.appTextRegular,

    color: '#1f2937',
    fontSize: responsiveFontSize(1.7),
    // backgroundColor: 'red',
    width: responsiveWidth(87),
    marginTop: responsiveHeight(1),
  },
  bgcontainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    // backgroundColor: 'red',
    paddingVertical: responsiveWidth(3),
  },
  bgimptxt: {
    color: appColor.appColorWhite,
    backgroundColor: '#ff0000',
    alignSelf: 'flex-start',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(20),
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(1.6),
  },

  bgbelowcont: {
    marginLeft: responsiveWidth(3.5),
  },

  bgtitletxt: {
    color: appColor.appColorWhite,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.5),
    marginBottom: responsiveHeight(1.3),
  },
  bgdesctxt: {
    color: appColor.appColorWhite,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    marginBottom: responsiveHeight(1.3),
  },
  bgdetailtxt: {
    color: appColor.appColorWhite,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(1.6),
  },
  bgdetailcont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgrighticon: {
    color: appColor.appColorWhite,
    fontSize: responsiveFontSize(1.7),
    marginLeft: responsiveWidth(4),
  },
  eventtxt: {
    fontSize: responsiveFontSize(2.1),
    // fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
    fontWeight: 'bold',
  },

  seetxt: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextRegular,
    color: '#6b7280',
    marginRight: responsiveWidth(0.5),
  },
  arrowright: {
    fontSize: responsiveFontSize(2.5),
    marginRight: responsiveWidth(-0.5),
    // backgroundColor: 'red',
  },
  singleitem: {
    width: responsiveWidth(40),
    height: responsiveHeight(33),
    // alignSelf: 'flex-start',

    // alignItems: 'center',
    paddingVertical: responsiveHeight(1.5),

    marginBottom: responsiveHeight(1.5),
    // marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    backgroundColor: appColor.appColorWhite,
    borderRadius: responsiveWidth(3),
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
    borderTopLeftRadius: responsiveWidth(3),
    borderTopRightRadius: responsiveWidth(3),
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
    // marginLeft: responsiveWidth(3),
    // backgroundColor: 'red',
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
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingBottom: responsiveHeight(0.5),
    flex: 1,
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
  plusicon: {
    color: appColor.appColorWhite,
    fontSize: responsiveFontSize(2.2),
  },
  reportingtxt: {
    color: appColor.appColorWhite,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
  },
  floatingbutton: {
    position: 'absolute',
    backgroundColor: appColor.appColorGreen,
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: responsiveHeight(7),
    // paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    // alignSelf: 'center',
    // bottom: responsiveHeight(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  arrowback: {
    fontSize: responsiveFontSize(2),
    // backgroundColor: 'red',
    color: '#89909e',
  },
  datecontaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  clockcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  clockstyle: {
    width: responsiveWidth(4.5),
    height: responsiveWidth(4.5),
    resizeMode: 'contain',
    marginTop: responsiveHeight(0.4),
  },
  datetimetxt: {
    fontFamily: fontFamily.appTextMedium,
    marginLeft: responsiveWidth(3),
    color: '#000000',
    fontSize: responsiveFontSize(1.7),
  },
  timetxt: {
    fontFamily: fontFamily.appTextRegular,
    color: '#000000',
    fontSize: responsiveFontSize(1.7),
  },
  locationtxt: {
    fontFamily: fontFamily.appTextRegular,
    marginLeft: responsiveWidth(3),
    color: '#1f2937',
    fontSize: responsiveFontSize(1.7),
    // backgroundColor: 'red',
    width: responsiveWidth(82),
  },
});
