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
import React, { useState, useEffect } from 'react';
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
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { baseUrl } from '../../../route';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import { useIsFocused } from '@react-navigation/native';
const MonthlyReport = (props) => {
    const isFocused = useIsFocused();
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
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




    const getMonthlyReport = async () => {
        setStateActivityIndicatorBody(true)
        await axios.get(baseUrl + "/monthlyReportGetAll")
            .then(response => {

                console.log(response.data)
                setSecondlist(response.data)
                setStateActivityIndicatorBody(false)
            })
            .catch(error => {
                setStateActivityIndicatorBody(false)
                alert(error)
                console.log('w');
            });
    }



    useEffect(() => {
        getMonthlyReport()
    }, [isFocused])



    const Secondrenderitem = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1, borderColor: '#DCDCDC',
                marginHorizontal: '4%',
                height: 55,
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 10,
                elevation: 1,
                paddingHorizontal: '4%',
                flexDirection: 'row',
                marginVertical: '3%'

            }}>
                <View>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#1F2937'
                    }}>{item.PPArea}</Text>
                </View>

                <TouchableRipple style={{
                    backgroundColor: '#32B768',
                    borderRadius: 8,
                    paddingHorizontal: '2%',
                    paddingVertical: '1%'
                }}
                    onPress={() => {
                        props.navigation.navigate("MonthlyReportDetail",
                            {
                                report: item
                            })
                    }}>
                    <Text style={{
                        fontSize: 10,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#FFFFFF'
                    }}>Detail</Text>
                </TouchableRipple>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <View style={styles.parentheader}>
                <View style={styles.header}>
                    <LeftArrow name="arrow-back-ios" style={styles.arrowback}
                        onPress={() => {
                            props.navigation.goBack()
                        }} />
                    <Text style={styles.eventtxt}>Monthly Report</Text>
                </View>
            </View>
            {stateActivityIndicatorBody
                ?
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator
                        animating={stateActivityIndicatorBody} color={'#32B768'} />
                </View>
                :

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={secondlist}
                    renderItem={Secondrenderitem}
                    contentContainerStyle={{
                        marginTop: responsiveHeight(2),
                        paddingBottom: responsiveHeight(3),
                    }}
                />
            }
        </View>
    );
};

export default MonthlyReport;

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
        marginLeft: "24%",
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
