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
import STYLES from '../../../STYLES/STYLES';
import HeaderGoBackCenterText from '../../../components/headergobackcentertext/HeaderGoBackCenterText';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAsyncUserData } from '../../../utils/axioshelper/AxiosHelper';
const Draft = (props) => {
    const isFocused = useIsFocused();
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
    const [stateUserData, setStateUserData] = useState();
    const [stateReportInDraft, setStateReportInDraft] = useState(true)

    useEffect(() => {
        const apiCall = async () => {
            setStateActivityIndicatorBody(true)


            try {


                const value = JSON.parse(await AsyncStorage.getItem("draftReport1") || '[]')

                if (value.length == 0) {

                    setStateReportInDraft(false)
                    setStateActivityIndicatorBody(false)


                }

                else {



                    const responseAsync = await getAsyncUserData()

                    console.log(responseAsync)

                    setStateUserData(responseAsync)
                    console.log(value)
                    setSecondlist(value)
                    setStateReportInDraft(true)
                    setStateActivityIndicatorBody(false)

                }
            }
            catch (err) {
                alert(err)
            }
        }
        apiCall()
    }, [isFocused])



    const [secondlist, setSecondlist] = useState([
        // {
        //     id: 1,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 2,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 3,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 4,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 5,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 6,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 7,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 8,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 9,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 10,
        //     date: "02-22-2022"
        // },
        // {
        //     id: 11,
        //     date: "02-22-2022"
        // },
    ]);
    const Secondrenderitem = ({ item, index }) => {
        console.log(item.images[0].path)

        console.log(item.title)
        return (
            <View style={{
                height: 110, backgroundColor: '#FFFFFF',
                // width: '90%',
                // alignSelf: "center",
                marginBottom: '5%',
                paddingHorizontal: '5%',
                paddingVertical: '5%',
                elevation: 1,
                borderWidth: 1,
                borderColor: '#DCDCDC',
                flexDirection: 'row',
                borderRadius: 8
            }}>

                <View style={{
                    height: '90%', width: '22%',
                    //backgroundColor: 'green',
                    borderRadius: 8
                }}>
                    <Image source={{ uri: item.images[0].path }}

                        // source={appImages.caroimage}
                        style={{
                            height: "100%",

                            width: "100%",
                            borderRadius: 8
                        }} />

                </View>
                <View style={{
                    alignItems: 'flex-start', flex: 1,
                    justifyContent: "space-evenly",
                    marginHorizontal: '5%'
                }}>
                    <View>
                        <Text style={STYLES.fontSize16_1F2937_appTextSemiBold}>{item.title}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={appImages.calender} style={styles.calender} />
                        <Text style={[styles.datestyle,
                        { marginLeft: '4%' }]}>{new Date(item.date).toISOString().split('T')[0]}</Text>
                        {/* {new Date(item.date).toISOString().split('T')[0]} */}
                    </View>
                </View>

                <View style={{
                    justifyContent: 'space-evenly',
                    //   backgroundColor: 'red',

                }}>

                    <TouchableRipple
                        style={{
                            backgroundColor: appColor.appColorGreen,
                            borderRadius: 8
                        }}
                        onPress={() => props.navigation.navigate('DraftReportDetail',
                            {
                                report: item,
                                userData: stateUserData
                            })
                        }
                        borderless={true}
                        rippleColor={'darkgreen'}>
                        <Text style={styles.detailbuttontxt}>Detail</Text>
                    </TouchableRipple>
                </View>




            </View >
        );
    };

    return (
        <View style={STYLES.container}>
            <StatusBar hidden={true} />

            <View style={{
                marginBottom: '4%',
                width: '100%'
            }}>
                <HeaderGoBackCenterText
                    text="Drafts"
                    onPress={() => {
                        props.navigation.navigate("MyDrawer")
                    }}
                />
            </View>

            {stateActivityIndicatorBody
                ?
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator
                        animating={stateActivityIndicatorBody} color={'#32B768'} />
                </View>
                :

                stateReportInDraft ?

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={secondlist}
                        renderItem={Secondrenderitem}
                        contentContainerStyle={{
                            marginTop: responsiveHeight(2),
                            paddingBottom: responsiveHeight(3),
                        }}
                    />
                    :
                    <View style={{
                        flex: 1, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>No Report in Draft</Text>

                    </View>

            }
        </View>
    );
};

export default Draft;

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
