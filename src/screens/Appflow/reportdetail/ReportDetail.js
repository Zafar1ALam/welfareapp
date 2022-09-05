import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    FlatList,
    PermissionsAndroid,
} from 'react-native';
import React, {
    useState, useEffect, useCallback,
    useRef
} from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { appImages } from '../../../assets/utilities';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import RightArrow from 'react-native-vector-icons/MaterialIcons';
import { fontFamily } from '../../../constants/fonts';
import { TouchableRipple } from 'react-native-paper';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import STYLES from '../../../STYLES/STYLES';
import LeftIconCenterTextRightIcon from '../../../components/lefticoncentertectrighticon/LeftIconCenterTextRightIcon';
import ModelResendEditDelete from '../../../components/modelresendeditdelete/ModelResendEditDelete';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LoaderButtonRnPaper from '../../../components/LoaderButton';
import { ImageUrl } from '../../../route';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewShot from "react-native-view-shot";
import RNFetchBlob from 'rn-fetch-blob';
const ReportDetail = (props) => {
    const { reportItem } = props.route.params;



    var RNFS = require('react-native-fs');

    console.log('item')
    //  console.log(reportItem)
    const viewRefScreenShot = useRef();

    const [stateUserId, setStateUserId] = useState('')

    const [correctTime, setCorrectTime] = useState('')
    const [correctDate, setCorrectDate] = useState('')
    const [activeSlide, setActiveSlide] = useState(0)

    const [isLoading, setIsLoading] = useState(false);


    const getSingleValue = async () => {
        const value = await AsyncStorage.getItem('user_session');
        try {
            if (value !== null) {
                // We have data!!
                //      console.log(value);
                let a = JSON.parse(value)
                setStateUserId(a._id)
                //   console.log(a._id)
            }
        } catch (error) {
            alert(error)
            // Error retrieving data
        }
    }


    const getCorrectTime = () => {
        const date = new Date(reportItem.time)
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
        let date = new Date(reportItem.date);
        let yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        date = dd + '-' + mm + '-' + yyyy;
        setCorrectDate(date)
    }
    useEffect(() => {
        getSingleValue()
        getCorrectTime()
        getCorrectDate()
    }, [])


    const [stateCards, setStateCCards] = useState([
        {
            _id: 1,
            image: appImages.sliderImage,


        },
        {
            _id: 2,
            image: appImages.sliderImage,

        },
        {
            _id: 3,
            image: appImages.sliderImage,

        },
        {
            _id: 4,
            image: appImages.sliderImage,

        },
        {
            _id: 5,
            image: appImages.sliderImage,

        },
    ]);

    const [secondlist, setSecondlist] = useState([
        {
            id: 1,
            date: "02-22-2022"
        },
        {
            id: 2,
            date: "02-22-2022"
        },
        {
            id: 3,
            date: "02-22-2022"
        },
        {
            id: 4,
            date: "02-22-2022"
        },
        {
            id: 5,
            date: "02-22-2022"
        },
        {
            id: 6,
            date: "02-22-2022"
        },
        {
            id: 7,
            date: "02-22-2022"
        },
        {
            id: 8,
            date: "02-22-2022"
        },
        {
            id: 9,
            date: "02-22-2022"
        },
        {
            id: 10,
            date: "02-22-2022"
        },
        {
            id: 11,
            date: "02-22-2022"
        },
    ]);



    const getExtention = filename => {
        // To get the file extension
        return /[.]/.exec(filename) ?
            /[^.]+$/.exec(filename) : undefined;
    };



    const captureAndShareScreenshot = async () => {
        viewRefScreenShot.current.capture().then(async (uri) => {
            let date = new Date();
            // Image URL which we want to download
            let image_URL = uri;
            // Getting the extention of the file
            let ext = getExtention(image_URL);
            ext = '.' + ext[0];
            console.log(uri)
            var path = RNFS.DownloadDirectoryPath + '/' + Math.floor(date.getTime() + date.getSeconds() / 2) +
                ext//+ '/test.png'
                ;
            console.log(path)



            await RNFS.moveFile(uri, path)
                .then((success) => {
                    alert('Report Downloaded Successfully.');
                })
                .catch((err) => {
                    console.log("Error: " + err.message);
                });

        });
    };
    const pagination = () => {
        return (
            <Pagination
                dotsLength={reportItem.images.length}
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


    const renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <Image
                // source={item.image}
                source={{ uri: ImageUrl + "/" + item }}

                // imageStyle={{
                //     ,
                // }}
                resizeMode='cover'
                style={{
                    // resizeMode: 'contain',
                    borderRadius: responsiveWidth(4.5),
                    width: responsiveWidth(90),
                    height: responsiveHeight(24),
                    // backgroundColor: 'red',
                }}>



            </Image>
        );
    };

    return (
        <View style={{
            flex: 1,
            color: '#F6F6F6',
            marginHorizontal: "5%",
            marginVertical: '5%'
        }}>
            <StatusBar hidden={true} />


            <View style={{
                //  backgroundColor: 'red',
                width: '100%'
            }}>
                <LeftIconCenterTextRightIcon
                    text="Report  Detail"
                    leftPress={() => {
                        props.navigation.goBack()
                    }}

                    downloadicon={true}
                    rightPress={() => {
                        console.log('SDFGFD')
                        captureAndShareScreenshot()
                    }}

                />
            </View>
            <ViewShot //onCapture={onCapture} //captureMode="mount"
                ref={viewRefScreenShot} style={{

                }}
            >
                <View style={{
                    marginTop: '3%',
                    // paddingHorizontal: '5%',

                }}>
                    <Carousel
                        data={reportItem.images}
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

                <View style={{
                    marginTop: '5%',
                    marginHorizontal: '2%'
                }}>
                    <Text style={STYLES.fontSize16_1F2937_appTextBold}>
                        {reportItem.title}   {/* Report Title Here */}
                    </Text>
                </View>

                <View style={{
                    marginTop: '2%',
                    marginHorizontal: '2%'
                }}>
                    <Text style={STYLES.fontSize12_1F2937_appTextMedium}>
                        {reportItem.department}   {/* Report Title Here */}           {/* Department Name */}
                    </Text>
                </View>




                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '10%',
                    marginHorizontal: '2%'
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={appImages.clock} style={{
                            height: 13.3,
                            width: 13.3
                        }} />

                        <View style={{ marginLeft: '10%' }}>
                            <Text style={STYLES.fontSize12_000000_appTextMedium}>Date & Time</Text>

                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={STYLES.fontSize12_000000_appTextSemiBold}>
                            {correctTime}, {correctDate}
                            {/* 10:00 AM,   01-02-2022 */}


                        </Text>
                    </View>
                </View>
                <View style={{
                    marginTop: '5%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: '2%'
                }}>
                    <Image source={appImages.location} style={{
                        width: 11.3,
                        height: 13.95

                    }} />
                    <View style={{
                        marginLeft: '4%',
                        flex: 1
                    }}>
                        <Text style={STYLES.fontSize12_1F2937_appTextSemiBold} numberOfLines={1}>
                            {reportItem.location}  {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et. */}
                        </Text>
                    </View>
                </View>


                <View style={{
                    marginTop: '2%',
                    marginTop: '6%',
                    marginHorizontal: '2%'
                }}>
                    <Text style={STYLES.fontSize13_1F2937_arialBold}>
                        Description
                    </Text>
                </View>


                <View style={{
                    marginTop: '5%',
                    marginHorizontal: '2%'
                }}>
                    <Text
                        style={STYLES.fontSize12_1F2937_appTextSemiBold}
                        numberOfLines={8}>
                        {reportItem.description}
                        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et. */}
                    </Text>



                </View>
            </ViewShot>
            {stateUserId == reportItem.reportBy &&
                <View style={{
                    marginTop: '10%',
                    //  backgroundColor: 'red',
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                    <LoaderButtonRnPaper
                        onPress={() => {
                            props.navigation.navigate("EditReporting",
                                {
                                    report: reportItem
                                })
                        }}
                        loading={isLoading}
                        label="Edit"
                    />
                </View>
            }



        </View>



    );
};

export default ReportDetail;

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
    header: {
        flexDirection: 'row',
        // marginTop: responsiveHeight(4),
        alignItems: 'center',
        width: responsiveWidth(88),
        alignSelf: 'center',
        backgroundColor: appColor.appColorWhite,
    },
    secondheader: {
        width: responsiveWidth(88),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2),
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
        borderRadius: responsiveWidth(4),
    },
    secondtitlecont: {
        paddingVertical: '2%',
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
        // marginLeft: responsiveWidth(2.5),
        fontSize: responsiveFontSize(1.5),
        width: responsiveWidth(35),
        // backgroundColor: 'red',
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
