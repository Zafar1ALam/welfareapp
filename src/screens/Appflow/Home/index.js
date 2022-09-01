import {
  StyleSheet, Text, View, ScrollView, StatusBar,

  ImageBackground, Image, TouchableOpacity, TouchableNativeFeedback, FlatList,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize, } from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { appImages } from '../../../assets/utilities';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import RightArrow from 'react-native-vector-icons/MaterialIcons';
import { fontFamily } from '../../../constants/fonts';
import { Colors, TouchableRipple } from 'react-native-paper';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import axios from 'axios'
import { baseUrl } from '../../../route/index'
import LoaderImage from '../../../components/LoaderImage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ModelTwoButton from '../../../components/modeltwobutton/ModelTwoButton';
import STYLES from '../../../STYLES/STYLES';

const Home = props => {

  const [activeSlide, setActiveSlide] = useState(0);


  const [visibleAlertModal, setVisibleAlertModal] = useState(false);

  const showAlertModal = () => setVisibleAlertModal(true);

  const onDismissAlertModal = useCallback(() => { setVisibleAlertModal(false) }, [])



  // const [visibleLogoutModal, setVisibleLogoutModal] = useState(false);

  // const showLogoutModal = () => setVisibleLogoutModal(true);

  // const onDismissLogoutModal = useCallback(() => { setVisibleLogoutModal(false) }, [])

  const [eventsByDate, setEventsByDate] = useState([
    // {
    //   "images": [
    //     "image-uploads\\1660819736683.png",
    //     "image-uploads\\1660819737263.png",
    //     "image-uploads\\1660819737342.png",
    //     "image-uploads\\1660819737351.png"
    //   ]
    //   ,

    //   "_id": "62fcbf3582e450dbfd4b02e4",
    //   "eventId": 554731,

    //   "title": "Event Name",
    //   "description": "Media Department Event",
    //   "location": "Rawalpindi",
    //   "date": "2022-08-18T10:12:28.000Z",
    //   "time": "2022-08-18T10:12:28.000Z",
    //   "category": "Public",
    //   "department": "Media",
    //   "__v": 0
    // },
    // {
    //   "_id": "62fcbf3582e450dbfd4b02e5",
    //   "eventId": 554731,
    //   "images": [
    //     "image-uploads\\1660731188377.jpg"
    //   ],
    //   "title": "Event Name",
    //   "description": "Media Department Event",
    //   "location": "Rawalpindi",
    //   "date": "2022-08-18T10:12:28.000Z",
    //   "time": "2022-08-18T10:12:28.000Z",
    //   "category": "Public",
    //   "department": "Media",
    //   "__v": 0
    // },
    // {
    //   "_id": "62fcbf3582e450dbfd4b02e4",
    //   "eventId": 554731,
    //   "images": [
    //     "image-uploads\\1660731188377.jpg"
    //   ],
    //   "title": "Event Name",
    //   "description": "Media Department Event",
    //   "location": "Rawalpindi",
    //   "date": "2022-08-18T10:12:28.000Z",
    //   "time": "2022-08-18T10:12:28.000Z",
    //   "category": "Public",
    //   "department": "Media",
    //   "__v": 0
    // },
    // {
    //   "_id": "62fcbf3582e450dbfd4b02e57",
    //   "eventId": 554731,
    //   "images": [
    //     "image-uploads\\1660731188377.jpg"
    //   ],
    //   "title": "Event Name",
    //   "description": "Media Department Event",
    //   "location": "Rawalpindi",
    //   "date": "2022-08-18T10:12:28.000Z",
    //   "time": "2022-08-18T10:12:28.000Z",
    //   "category": "Public",
    //   "department": "Media",
    //   "__v": 0
    // },
    // {
    //   "_id": "62fcbf3582e450dbfd4b02e48",
    //   "eventId": 554731,
    //   "images": [
    //     "image-uploads\\1660731188377.jpg"
    //   ],
    //   "title": "Event Name",
    //   "description": "Media Department Event",
    //   "location": "Rawalpindi",
    //   "date": "2022-08-18T10:12:28.000Z",
    //   "time": "2022-08-18T10:12:28.000Z",
    //   "category": "Public",
    //   "department": "Media",
    //   "__v": 0
    // },

    // {
    //   "_id": "62fcbf3582e450dbfd4b02e6",
    //   "eventId": 554731,
    //   "images": [
    //     "image-uploads\\1660731188377.jpg"
    //   ],
    //   "title": "Event Name",
    //   "description": "Media Department Event",
    //   "location": "Rawalpindi",
    //   "date": "2022-08-18T10:12:28.000Z",
    //   "time": "2022-08-18T10:12:28.000Z",
    //   "category": "Public",
    //   "department": "Media",
    //   "__v": 0
    // }
  ])
  const [eventsByDepartment, setEventsByDepartment] = useState([])
  const [image, setImage] = useState(props.user == null ||
    props.user.image == undefined ? null : `${baseUrl}/${props.user.image}`)
  useEffect(() => {
    if (props.user !== null) {
      setImage(`${baseUrl}/${props.user.image}`)

    }
  }, [props.user])



  const pagination = () => {
    return (
      <Pagination
        dotsLength={eventsByDate.length > 0 && eventsByDate[0].images.length}
        activeDotIndex={activeSlide}
        containerStyle={{
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
  useFocusEffect(
    React.useCallback(() => {
      props.navigation.closeDrawer();

    }, []),
  );
  const [carolist, setCarolist] = useState([
    {
      id: 1,
      img: appImages.caroimage,
    },
    {
      id: 2,
      img: appImages.caroimage,
    },
    {
      id: 3,
      img: appImages.caroimage,
    },
  ]);

  const [firstlist, setFirstlist] = useState([
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
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.singleitem}
        onPress={() => props.navigation.navigate('EventDetail', { eventDetail: item, moreEvents: eventsByDepartment })}>
        <Image source={{ uri: `${baseUrl}/${item?.images[0]}` }} style={styles.listimg1} />
        <View style={[styles.secondcontlist, { flex: 1 }]}>
          <Text style={styles.listtitle} numberOfLines={1}>{item.title}</Text>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={styles.loccont}>
              <Image source={appImages.location} style={styles.locimg} />
              <Text style={styles.loctxt} numberOfLines={2}>
                {item.location}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Secondrenderitem = ({ item, index }) => {


    return (
      <View style={styles.singleseconditem}>
        <View style={styles.detailbutton
        }>
          <TouchableRipple
            // style={styles.detailbutton}
            onPress={() => props.navigation.navigate('EventDetail',
              {
                eventDetail: item,
                moreEvents: eventsByDate
              })}
            borderless={true}
            rippleColor={'darkgreen'}>
            <Text style={styles.detailbuttontxt}>Detail</Text>
          </TouchableRipple>
        </View>
        <Image source={{ uri: `${baseUrl}/${item?.images[0]}` }}
          style={styles.imglist2} />
        <View style={styles.secondtitlecont}>
          <Text style={styles.secondlisttitle}>{item.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={appImages.calender} style={styles.calender} />
            <Text style={styles.datestyle}>{new Date(item.date).toISOString().split('T')[0]}</Text>
          </View>
        </View>
      </View>
    );
  };



  const publicEventsData = ({ item, index }) => {


    return (
      <TouchableRipple style={{
        height: 150,
        backgroundColor: Colors.white,
        width: "45%",
        paddingHorizontal: '3%',
        borderWidth: 1,
        paddingVertical: '3%',
        borderColor: '#E5E5E5',
        borderRadius: 16,

        marginBottom: '7%'
      }}

        onPress={() => props.navigation.navigate('EventDetail',
          { eventDetail: item, moreEvents: eventsByDate })}
      >
        <>
          <View style={{
            width: '100%',
            borderRadius: 8,
            height: '70%',
          }}
          >
            <Image
              style={{
                height: "100%",
                width: '100%',
                borderRadius: 8
              }}
              source={{ uri: `${baseUrl}/${item.images[0]}` }} />
          </View>

          <View style={{

            marginTop: '8%'
          }}>
            <Text style={{
              fontFamily: fontFamily.appTextSemiBold,
              fontSize: 14,
              color: '#1f2937',
            }}>{item.title} </Text>
          </View>
        </>
      </TouchableRipple>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: '#fff',
        width: responsiveWidth(90),
        height: responsiveHeight(35),
        borderRadius: 14
      }}>

        <ImageBackground
          source={appImages.calender}
          // { uri: `${baseUrl}/${item}` }
          imageStyle={{
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14
            //   borderRadius: responsiveWidth(4.5),
          }}
          style={{
            resizeMode: 'cover',
            width: responsiveWidth(90),
            height: responsiveHeight(26),
            // backgroundColor: 'red',
          }}>
          <View style={styles.bgcontainer}>
            <View>
              <Text style={styles.bgimptxt}>Important</Text>
            </View>
            {/* <View style={styles.bgbelowcont}>
              <Text style={styles.bgtitletxt}>{eventsByDate[0].title}</Text>
              <Text style={styles.bgdesctxt} numberOfLines={2}>
                {eventsByDate[0].description}
              </Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() =>
                props.navigation.navigate('EventDetail', { eventDetail: eventsByDate[0], moreEvents: eventsByDate })}>
                <View style={styles.bgdetailcont}>
                  <Text style={styles.bgdetailtxt}>Detail</Text>
                  <RightArrow
                    name="arrow-forward-ios"
                    style={styles.bgrighticon}
                  />
                </View>
              </TouchableOpacity>
            </View> */}
          </View>
        </ImageBackground>


        <View style={{
          flexDirection: 'row',
          marginHorizontal: '4%',
          justifyContent: "space-between",
          alignItems: 'center',
          marginTop: '2%'
        }}>

          <View >
            <Text style={STYLES.fontSize14_1F2937_appTextMedium}>Title Here</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={STYLES.fontSize8_32B768_appTextBold}>Detail   </Text>
            </View>
            <View>
              <Text style={STYLES.fontSize8_32B768_appTextBold}>{`>`}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: '4%', marginTop: '1%' }}>
          <Text style={STYLES.fontSize8_000000_appTextRegular_74}
            numberOfLines={2}
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</Text>
        </View>

      </View>
    );
  };
  const getEventsByDepartment = async () => {
    await axios.get(`${baseUrl}/get-events-by-department`, {
      params: {
        department: props.user.department
      }
    }).then(response => {

      //   console.log(response.data)
      setEventsByDepartment(response.data)
    }).catch(error => {
      alert(error)
    })
  }
  const getEventsByDate = async () => {
    if (props.user == null) {
      await axios.get(`${baseUrl}/get-events-by-category`, {
        params: {
          category: 'Public'
        }
      }).then(response => {

        setEventsByDate(response.data)
      }).catch(error => {
        alert(error)
      })
    } else {
      await axios.get(`${baseUrl}/get-events-by-date`)
        .then(response => {

          setEventsByDate(response.data)
        }).catch(error => {
          alert(error)
        })
    }
  }
  useEffect(() => {
    getEventsByDate()
    console.log('asdfgfdsa')

    //  showAlertModal()
    if (props.user !== null) {
      showAlertModal()
      getEventsByDepartment()

    }
  }, [])
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: appColor.appColorWhite,
      }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true} />

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.openDrawer()}>
            <Image source={appImages.drawer} style={styles.drawericon} />
          </TouchableOpacity>
          {
            props.user == null ? (
              <></>
              //<Text style={styles.eventtxt}>Events By Dates</Text> fszal code 
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

          {props.user == null ?
            <></>
            :
            <TouchableOpacity style={styles.headerpic} onPress={() =>
              props.navigation.navigate('Edit Profile')}>
              {/* <Image source={appImages.userimage} style={styles.userimage} /> */}
              {
                image == null ? (
                  <FontAwesome5
                    size={responsiveFontSize(4)}
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
            </TouchableOpacity>
          }
        </View>

        {
          props.user == null || eventsByDate.length == 0 ? null : (
            <View style={{
              //     backgroundColor: 'green',

            }}>

              <View style={{ borderRadius: 14 }}>
                <Carousel
                  data={eventsByDate.length > 0 && eventsByDate[0].images}
                  renderItem={renderItem}
                  sliderWidth={responsiveWidth(90)}
                  itemWidth={responsiveWidth(90)}
                  pagingEnabled
                  containerCustomStyle={{
                    marginTop: responsiveHeight(4),
                    alignSelf: 'center',
                    borderRadius: 14
                    // paddingHorizontal: responsiveWidth(5),
                  }}
                  onSnapToItem={index => setActiveSlide(index)}
                />
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: responsiveHeight(2.5),
                  // backgroundColor: 'red',
                }}>
                {pagination()}
              </View>
            </View>
          )
        }
        {
          props.user == null || eventsByDepartment.length == 0 ? null : (
            <View>
              <View style={styles.eventheader}>
                <Text style={styles.eventtxt}>Events By Department</Text>
                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                  activeOpacity={0.6}
                  onPress={() => props.navigation.navigate('EventsByDepartment')}>
                  <Text style={styles.seetxt}>See All</Text>
                  <Image source={appImages.smallright} style={styles.arrowright} />
                </TouchableOpacity>
              </View>
              <FlatList
                contentContainerStyle={{
                  paddingLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(3),
                }}
                data={eventsByDate}
                renderItem={Firstrenderitem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )
        }
        {
          props.user == null || eventsByDate.length == 0 ? null : (
            <View style={styles.eventheader2}>
              <Text style={styles.eventtxt}>Events By Dates</Text>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.6}
                onPress={() => props.navigation.navigate('EventsByDates')}>
                <Text style={styles.seetxt}>See All</Text>
                <Image source={appImages.smallright} style={styles.arrowright} />
              </TouchableOpacity>
            </View>
          )
        }
        {props.user == null ?

          <View style={{
            marginTop: '5%',
            marginHorizontal: '5%',

          }}>
            <View style={{
              marginTop: '5%',

              marginBottom: '5%'
            }}>
              <Text style={{
                fontFamily: fontFamily.appTextSemiBold,
                fontSize: 14,
                color: '#1f2937',
              }}>
                We Work For
              </Text>
            </View>
            <View style={{ width: '100%' }}>
              <FlatList data={eventsByDate} renderItem={publicEventsData}
                initialNumToRender={7}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: 'space-between',


                }}

              />
            </View>
          </View>
          :
          <FlatList data={eventsByDate} renderItem={Secondrenderitem}
            initialNumToRender={7} />}

      </ScrollView>

      {

        props.user == null || props.user.role == 'Executive Member' ? null : (
          <View style={styles.floatingbutton}>
            <TouchableRipple
              onPress={() => props.navigation.navigate('AddReporting')}
              borderless={true}
              rippleColor={'darkgreen'}>
              <View
                // style={styles.floatingbutton}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: responsiveWidth(4.5),
                  paddingVertical: responsiveHeight(0.2),
                }}>
                <Plus name="plus" style={styles.plusicon} />
                <Text style={styles.reportingtxt}> Reporting</Text>
              </View>
            </TouchableRipple>
          </View>
        )
      }
      {
        props.user == null ? (
          <View style={styles.floatingbutton}>
            <TouchableRipple
              onPress={() => props.navigation.navigate('CreateMemberShip')}
              borderless={true}
              rippleColor={'darkgreen'}>
              <View
                // style={styles.floatingbutton}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: responsiveWidth(4.5),
                  paddingVertical: responsiveHeight(0.2),
                }}>
                <Plus name="plus" style={styles.plusicon} />
                <Text style={styles.reportingtxt}>Apply For Membership</Text>
              </View>
            </TouchableRipple>
          </View>
        ) : null
      }




      <ModelTwoButton
        visible={visibleAlertModal}
        onDismiss={onDismissAlertModal}
        text1="Alert"
        text2="There are some unsend 
        reports in your draft"
        methodOnLeftSide={() => {
          onDismissAlertModal()

        }}
        methodOnRightSide={() => {
          onDismissAlertModal()

        }}

      />


      {/* <ModelTwoButton
        visible={visibleLogoutModal}
        onDismiss={onDismissLogoutModal}
        text1="Confirmation"
        text2="Do you really want to logout?"
        methodOnLeftSide={() => {
          onDismissLogoutModal()

        }}
        methodOnRightSide={() => {
          onDismissLogoutModal()

        }}

      /> */}
    </View>
  );






};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flexGrow: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
    color: appColor.appColorWhite,
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
    width: responsiveWidth(91),
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(4),
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
    fontSize: responsiveFontSize(2.2),
    fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
  },

  seetxt: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: fontFamily.appTextRegular,
    color: '#6b7280',
    marginRight: responsiveWidth(1),
  },
  arrowright: {
    // fontSize: responsiveFontSize(4),
    marginRight: responsiveWidth(-1),
    // backgroundColor: 'red',
    resizeMode: 'contain',
    height: responsiveHeight(2.2),
    width: responsiveWidth(4),
  },
  singleitem: {
    width: 150, //responsiveWidth(40),
    height: 220, //,responsiveHeight(33),
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
    width: responsiveWidth(30),
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
    paddingRight: '50%',
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
  plusicon: {
    color: appColor.appColorWhite,
    fontSize: responsiveFontSize(2.2),
  },
  reportingtxt: {
    color: appColor.appColorWhite,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.1),
  },
  floatingbutton: {
    position: 'absolute',
    backgroundColor: appColor.appColorGreen,
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: responsiveHeight(5),
    // paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    // alignSelf: 'center',
    // bottom: responsiveHeight(5),
    shadowColor: 'lightgreen',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 4,
  },
  drawericon: {
    resizeMode: 'contain',
    // backgroundColor: 'red',
    height: responsiveHeight(4),
    width: responsiveWidth(5.8),
  },
});
