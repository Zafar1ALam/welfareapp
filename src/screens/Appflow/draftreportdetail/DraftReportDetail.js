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
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
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
import { TouchableRipple, ActivityIndicator } from 'react-native-paper';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import STYLES from '../../../STYLES/STYLES';
import LeftIconCenterTextRightIcon from '../../../components/lefticoncentertectrighticon/LeftIconCenterTextRightIcon';
import ModelResendEditDelete from '../../../components/modelresendeditdelete/ModelResendEditDelete';
import ModelTwoButton from '../../../components/modeltwobutton/ModelTwoButton';
import ModelOneButton from '../../../components/modelonebutton/ModelOneButton';
import RNFetchBlob from 'rn-fetch-blob';
import { baseUrl, ImageUrl } from '../../../route';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DraftReportDetail = (props) => {
    const { report, userData } = props.route.params;

    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)
    // console.log('report')
    // console.log(report)
    // console.log(userData)
    const [activeSlide, setActiveSlide] = useState(0)
    const [correctTime, setCorrectTime] = useState('')
    const [correctDate, setCorrectDate] = useState('')
    const [visibleResendEditDeleteModal, setVisibleResendEditDeleteModal] = useState(false);
    const showResendEditDeleteModal = () => setVisibleResendEditDeleteModal(true);

    const onDismissResendEditDeleteModal = useCallback(() => {
        setVisibleResendEditDeleteModal(false)
    }, [])




    const [visibledeleteModal, setVisibleDeleteModal] = useState(false);

    const showDeleteModal = () => setVisibleDeleteModal(true);

    const onDismissDeleteModal = useCallback(() => { setVisibleDeleteModal(false) }, [])

    const [visibleReportResendModal, setVisibleReportResendModal] = useState(false);

    const showReportResendModal = () => setVisibleReportResendModal(true);

    const onDismissReportResendModal = useCallback(() => { setVisibleReportResendModal(false) }, [])









    const getCorrectTime = () => {
        const date = new Date(report.time)
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
        let date = new Date(report.date);
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
    }, [])




    const deleteReport = async () => {





        const value = JSON.parse(await AsyncStorage.getItem("draftReport1") || '[]')


        console.log('value')
        console.log(value)
        if (value.length != 0) {

            var reportArray = value.filter(o => {

                // console.log(o.randomId)
                // console.log(report.randomId)
                // o.randomId != report.randomId
                if (o.randomId != report.randomId)
                    return o
            })
            console.log('reportArray')
            console.log(reportArray)
            if (reportArray.length != 0) {
                try {
                    AsyncStorage.setItem("draftReport1", JSON.stringify(


                        reportArray))

                    onDismissDeleteModal()
                    props.navigation.goBack()
                }
                catch (err) {
                    alert(err)
                }
            }
            else {
                try {
                    AsyncStorage.setItem("draftReport1", JSON.stringify(


                        []))
                    props.navigation.goBack()
                    onDismissDeleteModal()
                }
                catch (err) {
                    alert(err)
                }

            }

        }

    }

    const removeReportfromDraft = async () => {





        const value = JSON.parse(await AsyncStorage.getItem("draftReport1") || '[]')


        console.log('value')
        console.log(value)
        if (value.length != 0) {

            var reportArray = value.filter(o => {

                // console.log(o.randomId)
                // console.log(report.randomId)
                // o.randomId != report.randomId
                if (o.randomId != report.randomId)
                    return o
            })
            console.log('reportArray')
            console.log(reportArray)
            if (reportArray.length != 0) {
                try {
                    AsyncStorage.setItem("draftReport1", JSON.stringify(


                        reportArray))

                    onDismissResendEditDeleteModal()
                    setStateActivityIndicator(false)
                    showReportResendModal()
                }
                catch (err) {
                    alert(err)
                }
            }
            else {
                try {
                    AsyncStorage.setItem("draftReport1", JSON.stringify(


                        []))

                    onDismissResendEditDeleteModal()
                    setStateActivityIndicator(false)
                    showReportResendModal()
                }
                catch (err) {
                    alert(err)
                }

            }

        }

    }





    const resendReportApi = async () => {
        setStateActivityIndicator(true)
        await RNFetchBlob.fetch('POST',
            `${ImageUrl}/upload-multiple-images`, {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        }, report.images).then(async (response) => {
            console.log(response.data)

            if (response.data) {
                console.log(response.data)

                const imagesForDb = JSON.parse(response.data)




                let b = {
                    reportBy: userData._id,
                    title: report.title,


                    eventCategory: 'Public',
                    description: report.description,
                    location: report.location,
                    date: report.date,
                    time: report.time,
                    images: imagesForDb.images
                }

                console.log(b)


                await axios.post(`${baseUrl}/create-report`,
                    b
                ).then(response1 => {

                    removeReportfromDraft()
                    console.log('response1.data')
                    console.log(response1.data)

                }).catch(error => {
                    setStateActivityIndicator(false)
                    alert(error)
                })
            }
        }).catch((error) => {
            setStateActivityIndicator(false)
            console.log(error)
        })


    }

    const [stateCards, setStateCCards] = useState([
        // {
        //     _id: 1,
        //     image: appImages.sliderImage,


        // },
        // {
        //     _id: 2,
        //     image: appImages.sliderImage,

        // },
        // {
        //     _id: 3,
        //     image: appImages.sliderImage,

        // },
        // {
        //     _id: 4,
        //     image: appImages.sliderImage,

        // },
        // {
        //     _id: 5,
        //     image: appImages.sliderImage,

        // },
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



    const pagination = () => {
        return (
            <Pagination
                dotsLength={report.images.length}
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
        console.log(item.path)
        return (
            <ImageBackground
                source={{ uri: item.path }}
                imageStyle={{
                    borderRadius: responsiveWidth(4.5),
                }}
                style={{
                    resizeMode: 'cover',
                    width: responsiveWidth(90),
                    height: responsiveHeight(24),
                    // backgroundColor: 'red',
                }}>



            </ImageBackground>
        );
    };

    return (
        <View style={STYLES.container}>
            <StatusBar hidden={true} />


            <View style={{

                width: '100%'
            }}>
                <LeftIconCenterTextRightIcon
                    text="Report  Detail"
                    leftPress={() => {
                        props.navigation.goBack()
                    }}


                    rightPress={() => {
                        showResendEditDeleteModal()
                    }}

                />
            </View>

            <View style={{ marginTop: '3%' }}>
                <Carousel
                    data={report.images}
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

            <View style={{ marginTop: '5%' }}>
                <Text style={STYLES.fontSize16_1F2937_appTextBold}>
                    {report.title}  {/* Report Title Here */}
                </Text>
            </View>

            <View style={{ marginTop: '2%' }}>
                <Text style={STYLES.fontSize12_1F2937_appTextMedium}>
                    {userData.department}       {/* Department Name */}
                </Text>
            </View>




            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '10%'
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
                    <Text style={STYLES.fontSize12_000000_appTextSemiBold}>{correctTime},   {correctDate}</Text>
                </View>
            </View>
            <View style={{
                marginTop: '5%',
                flexDirection: 'row',
                alignItems: 'center'
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
                        {report.location}
                    </Text>
                </View>
            </View>


            <View style={{
                marginTop: '2%',
                marginTop: '6%'
            }}>
                <Text style={STYLES.fontSize13_1F2937_arialBold}>
                    Description
                </Text>
            </View>


            <View style={{ marginTop: '5%' }}>
                <Text
                    style={STYLES.fontSize12_1F2937_appTextSemiBold}
                    numberOfLines={8}>
                    {report.description}
                    {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.
                       */}  </Text>



            </View>


            <ModelResendEditDelete
                stateActivityIndicator={stateActivityIndicator}
                visible={visibleResendEditDeleteModal}
                onDismiss={onDismissResendEditDeleteModal}
                onPressResendReport={() => {
                    console.log('a')
                    resendReportApi()


                }}
                onPressEditReport={() => {
                    console.log('b')
                    onDismissResendEditDeleteModal()
                    props.navigation.navigate("DraftReportEdit",
                        {
                            report: report,
                            userData: userData

                        })
                }}
                onPressDeleteReport={() => {

                    onDismissResendEditDeleteModal()
                    showDeleteModal()

                }}


            />


            <ModelTwoButton
                visible={visibledeleteModal}
                onDismiss={onDismissDeleteModal}
                text1="Confirmation"
                buttonTextLeft="No"
                buttonTextRight="Yes"
                text2="Do you really want to Delete this?"
                methodOnLeftSide={() => {
                    onDismissDeleteModal()

                }}
                methodOnRightSide={() => {
                    deleteReport()

                }}

            />



            <ModelOneButton
                visible={visibleReportResendModal}
                onDismiss={onDismissReportResendModal}
                onPress={() => {
                    onDismissReportResendModal()
                    props.navigation.goBack()
                }}
                text1="Success"
                text2="Report Sent Successfully"
                buttonText="Ok"
            />

        </View>



    );
};

export default DraftReportDetail;

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
