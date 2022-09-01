import React, { useState, useRef } from 'react';
import {
    FlatList, SafeAreaView, StyleSheet, Text,
    TextInput, View
} from 'react-native';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { HelperText, TouchableRipple } from 'react-native-paper'
import HeaderGoBackCenterText from '../../../components/headergobackcentertext/HeaderGoBackCenterText';
import { fontFamily } from '../../../constants/fonts';
import { ScrollView } from 'react-native-gesture-handler';
import LoaderButtonRnPaper from '../../../components/LoaderButton';
import { appColor } from '../../../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'



import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomBottomSheet from '../../../components/custombottomsheet/CustomBottomSheet';
import { updateLocale } from 'moment';
import STYLES from '../../../STYLES/STYLES';
const MonthlyReportEdit = (props) => {
    const [border1, setBorder1] = useState('#bec5d1');
    const [border2, setBorder2] = useState('#bec5d1');
    const [border3, setBorder3] = useState('#bec5d1');
    const [border4, setBorder4] = useState('#bec5d1');
    const [border5, setBorder5] = useState('#bec5d1');
    const [border6, setBorder6] = useState('#bec5d1');
    const [border7, setBorder7] = useState('#bec5d1');

    const [border8, setBorder8] = useState('#bec5d1');
    const [border9, setBorder9] = useState('#bec5d1');
    
    const [stateAreaNumber, setStateAreaNumber] = useState('')
    const [stateLifeTimeMembers, setStateLifeTimeMembers] = useState('')
    const [stateRegularMembers, setStateRegularMembers] = useState('')
    const [stateRestorationOfDefaulters, setStateRestorationOfDefaulters] = useState('')
    const [stateMembershipAmount, setStateMembershipAmount] = useState('')
    const [stateNewUcs, setStateNewUcs] = useState('')

    const [stateNewUnit, setStateNewUnit] = useState('')
    const [stateMonthlyQuranCircle, setStateMonthlyQuranCircle] = useState('')
    const [stateMonthlyDaroodCircle, setStateMonthlyDaroodCircle] = useState('')
    const [stateMonthlyMeeting, setStateMonthlyMeeting] = useState('')
    const [stateTrainingSession, setStateTrainingSession] = useState('')
    const [isLoading, setIsLoading] = useState(false);



    const [showAreaNumber, setShowAreaNumbers] = useState(true)
    const [showLifeTimeMembers, setShowLifeTimeMembers] = useState(true)
    const [showRegularMembers, setShowRegularMembers] = useState(true)
    const [showRestorationOfDefaulters, setShowRestorationOfDefaulters] = useState(true)
    const [showMembershipAmount, setShowMembershipAmount] = useState(true)
    const [showNewUcs, setShowNewUcs] = useState(true)
    const [showNewUnit, setShowNewUnit] = useState(true)
    const [showMonthlyQuranCircle, setShowMonthlyQuranCircle] = useState(true)
    const [showMonthlyDaroodCircle, setShowMonthlyDaroodCircle] = useState(true)
    const [showMonthlyMeeting, setShowMonthlyMeeting] = useState(true)
    const [showTrainingSession, setShowTrainingSession] = useState(true)


    const refRBSheetCustomBottomSheetMonthlyMeeting = useRef();
    const refRBSheetCustomBottomSheetTrainingSession = useRef();



    const update = () => {

        if (stateAreaNumber == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowAreaNumbers(false)



        }
        if (stateLifeTimeMembers == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowLifeTimeMembers(false)

        }
        if (stateRegularMembers == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowRegularMembers(false)

        }

        if (stateRestorationOfDefaulters == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowRestorationOfDefaulters(false)



        }
        if (stateMembershipAmount == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMembershipAmount(false)

        }
        if (stateNewUcs == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowNewUcs(false)

        }


        if (stateNewUnit == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowNewUnit(false)



        }
        if (stateMonthlyQuranCircle == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyQuranCircle(false)

        }
        if (stateMonthlyDaroodCircle == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyDaroodCircle(false)

        }

        if (stateMonthlyMeeting == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyMeeting(false)

        }
        if (stateTrainingSession == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowTrainingSession(false)

        }


        if (stateAreaNumber != '' && stateLifeTimeMembers != ''
            && stateRegularMembers != '' &&
            stateRestorationOfDefaulters != '' && stateMembershipAmount != ''
            && stateNewUcs != ''
            &&
            stateNewUnit != '' && stateMonthlyQuranCircle != ''
            && stateMonthlyDaroodCircle != ''

            && stateMonthlyMeeting != ''
            && stateTrainingSession != ''


        ) {



            props.navigation.navigate("MonthlyReport")

        }



    }

    return (

        <SafeAreaView style={
            STYLES.container
        } >



            <View style={{
                marginBottom: '5%'
            }}>
                <HeaderGoBackCenterText text="Edit Report"
                    onPress={() => {
                        props.navigation.goBack()
                    }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}

            >


                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Area Number</Text>
                    <TextInput
                        placeholder='Enter Area Number'
                        style={[styles.txtinput1, { borderColor: border1 }]}
                        onFocus={() => setBorder1(appColor.appColorGreen)}
                        onBlur={() => setBorder1('#bec5d1')}
                        blurOnSubmit={true}
                        value={stateAreaNumber}
                        onChangeText={(text) => {
                            setStateAreaNumber(text)
                            setShowAreaNumbers(true)
                        }}
                    />
                    {
                        showAreaNumber || (
                            <HelperText visible={!showAreaNumber} type="error" >
                                please enter area number
                            </HelperText>
                        )
                    }
                </View>


                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Lifetime Members</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 02</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border2 }]}
                        onFocus={() => setBorder2(appColor.appColorGreen)}
                        onBlur={() => setBorder2('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter Lifetime Members'
                        value={stateLifeTimeMembers}
                        onChangeText={(text) => {
                            setStateLifeTimeMembers(text)
                            setShowLifeTimeMembers(true)
                        }}
                    />
                    {
                        showLifeTimeMembers || (
                            <HelperText visible={!showLifeTimeMembers} type="error" >
                                please enter a life time members
                            </HelperText>
                        )
                    }
                </View>



                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Regular Members</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 05</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border3 }]}
                        onFocus={() => setBorder3(appColor.appColorGreen)}
                        onBlur={() => setBorder3('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter Regular Members'
                        value={stateRegularMembers}
                        onChangeText={(text) => {
                            setStateRegularMembers(text)
                            setShowRegularMembers(true)
                        }}
                    />
                    {
                        showRegularMembers || (
                            <HelperText visible={!showRegularMembers} type="error" >
                                please enter a regular  Members
                            </HelperText>
                        )
                    }
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Restoration of Defaulters</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 05</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border4 }]}
                        onFocus={() => setBorder4(appColor.appColorGreen)}
                        onBlur={() => setBorder4('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter Restoration Of Defaulters'
                        value={stateRestorationOfDefaulters}
                        onChangeText={(text) => {
                            setStateRestorationOfDefaulters(text)
                            setShowRestorationOfDefaulters(true)
                        }}
                    />
                    {
                        showRestorationOfDefaulters || (
                            <HelperText visible={!showRestorationOfDefaulters} type="error" >
                                please enter a restoration of defaulters
                            </HelperText>
                        )
                    }
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Membership Amount</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 05</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border5 }]}
                        onFocus={() => setBorder5(appColor.appColorGreen)}
                        onBlur={() => setBorder5('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter Membership Amount'
                        value={stateMembershipAmount}
                        onChangeText={(text) => {
                            setStateMembershipAmount(text)
                            setShowMembershipAmount(true)
                        }}
                    />
                    {
                        showMembershipAmount || (
                            <HelperText visible={!showMembershipAmount} type="error" >
                                please enter a membershp amount
                            </HelperText>
                        )
                    }
                </View>


                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>New Ucs</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 02</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border6 }]}
                        onFocus={() => setBorder6(appColor.appColorGreen)}
                        onBlur={() => setBorder6('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter  New Ucs'
                        value={stateNewUcs}
                        onChangeText={(text) => {
                            setStateNewUcs(text)
                            setShowNewUcs(true)
                        }}
                    />
                    {
                        showNewUcs || (
                            <HelperText visible={!showNewUcs} type="error" >
                                please enter a new ucs
                            </HelperText>
                        )
                    }
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>New Unit</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 02</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border7 }]}
                        onFocus={() => setBorder7(appColor.appColorGreen)}
                        onBlur={() => setBorder7('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter  New Unit'
                        value={stateNewUnit}
                        onChangeText={(text) => {
                            setStateNewUnit(text)
                            setShowNewUnit(true)
                        }}
                    />
                    {
                        showNewUnit || (
                            <HelperText visible={!showNewUnit} type="error" >
                                please enter a new unit
                            </HelperText>
                        )
                    }
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Monthly Quran Circle</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 02</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border8 }]}
                        onFocus={() => setBorder8(appColor.appColorGreen)}
                        onBlur={() => setBorder8('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter  Monthly Quran Circle'
                        value={stateMonthlyQuranCircle}
                        onChangeText={(text) => {
                            setStateMonthlyQuranCircle(text)
                            setShowMonthlyQuranCircle(true)
                        }}
                    />
                    {
                        showMonthlyQuranCircle || (
                            <HelperText visible={!showMonthlyQuranCircle} type="error" >
                                please enter a monthly quran circle
                            </HelperText>
                        )
                    }
                </View>


                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Monthly Darood Circle</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Target </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: 02</Text>
                        </View>
                    </View>

                    <TextInput
                        style={[styles.txtinput1, { borderColor: border9 }]}
                        onFocus={() => setBorder9(appColor.appColorGreen)}
                        onBlur={() => setBorder9('#bec5d1')}
                        blurOnSubmit={true}
                        placeholder='Enter  Monthly Darood Circle'
                        value={stateMonthlyDaroodCircle}
                        onChangeText={(text) => {
                            setStateMonthlyDaroodCircle(text)
                            setShowMonthlyDaroodCircle(true)
                        }}
                    />
                    {
                        showMonthlyDaroodCircle || (
                            <HelperText visible={!showMonthlyDaroodCircle} type="error" >
                                please enter a monthly darood circle
                            </HelperText>
                        )
                    }
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Monthly Meeting</Text>

                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: 1,
                        marginTop: '5%',
                        height: 50,
                        backgroundColor: '#fff',
                        paddingHorizontal: '5%',
                        borderRadius: responsiveWidth(4),
                        borderColor: '#bec5d1'
                    }} onPress={() => refRBSheetCustomBottomSheetMonthlyMeeting.current.open()}
                    >
                        <>
                            <View style={{
                                height: 50,
                                justifyContent: 'center',
                                flex: 1,
                                //      backgroundColor: 'red'
                            }}>
                                <Text style={{

                                    fontSize: responsiveFontSize(2),
                                    fontFamily: fontFamily.appTextRegular,
                                }}>
                                    {stateMonthlyMeeting}</Text>

                            </View>
                            <AntDesign name='down'
                                size={24} style={{ marginRight: '3%' }} />

                        </>
                    </TouchableRipple>


                    {
                        showMonthlyMeeting || (
                            <HelperText visible={!showMonthlyMeeting} type="error" >
                                please enter a monthly meeting
                            </HelperText>
                        )
                    }
                </View>

                <View style={{ marginTop: '10%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>Training Session</Text>

                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: 1,
                        marginTop: '5%',
                        height: 50,
                        backgroundColor: '#fff',
                        paddingHorizontal: '5%',
                        borderRadius: responsiveWidth(4),
                        borderColor: '#bec5d1'
                    }} onPress={() => refRBSheetCustomBottomSheetTrainingSession.current.open()}
                    >
                        <>
                            <View style={{
                                height: 50,
                                justifyContent: 'center',
                                flex: 1,
                                //      backgroundColor: 'red'
                            }}>
                                <Text style={{

                                    fontSize: responsiveFontSize(2),
                                    fontFamily: fontFamily.appTextRegular,
                                }}>
                                    {stateTrainingSession}</Text>

                            </View>
                            <AntDesign name='down'
                                size={24} style={{ marginRight: '3%' }} />

                        </>
                    </TouchableRipple>


                    {
                        showTrainingSession || (
                            <HelperText visible={!showTrainingSession} type="error" >
                                please enter a training session
                            </HelperText>
                        )
                    }
                </View>



                <View style={{ marginTop: '10%' }}>
                    <LoaderButtonRnPaper
                        onPress={
                            () => {
                                update()
                            }
                        }
                        loading={isLoading}
                        label="Update"
                    />
                </View>




                <CustomBottomSheet
                    closeBottomSheet={() => {
                        refRBSheetCustomBottomSheetMonthlyMeeting.current.close()
                    }}

                    heading="Monthly Meeting"
                    uppertouchableripple={() => {
                        setStateMonthlyMeeting('Yes')
                        setShowMonthlyMeeting(true)
                        refRBSheetCustomBottomSheetMonthlyMeeting.current.close()
                    }}

                    lowertouchableripple={() => {
                        setStateMonthlyMeeting('No')
                        setShowMonthlyMeeting(true)
                        refRBSheetCustomBottomSheetMonthlyMeeting.current.close()
                    }}
                    refs={refRBSheetCustomBottomSheetMonthlyMeeting}

                />



                <CustomBottomSheet
                    closeBottomSheet={() => {
                        refRBSheetCustomBottomSheetTrainingSession.current.close()
                    }}

                    heading="Training Session"
                    uppertouchableripple={() => {
                        setStateTrainingSession('Yes')
                        setShowTrainingSession(true)
                        refRBSheetCustomBottomSheetTrainingSession.current.close()
                    }}

                    lowertouchableripple={() => {
                        setStateTrainingSession('No')
                        setShowTrainingSession(true)
                        refRBSheetCustomBottomSheetTrainingSession.current.close()
                    }}
                    refs={refRBSheetCustomBottomSheetTrainingSession}

                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default MonthlyReportEdit;



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
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
    },
    eventtxt: {
        color: '#1f2937',
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(2.2),
        // marginLeft: responsiveWidth(12),
    },
    arrowback: {
        fontSize: responsiveFontSize(2),
        // backgroundColor: 'red',
        color: '#89909e',
    },
    allinputcontainer: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: responsiveHeight(4),
    },
    txtinput1: {
        backgroundColor: '#fff',
        fontSize: responsiveFontSize(2),
        fontFamily: fontFamily.appTextRegular,
        // paddingVertical: responsiveHeight(0.1),
        marginTop: responsiveHeight(1),
        borderWidth: responsiveWidth(0.25),
        borderRadius: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(3),

    },
    labels: {
        marginLeft: responsiveWidth(2),
        fontFamily: fontFamily.appTextRegular,
        color: '#9ca3af',
    },
    txtinput2: {
        backgroundColor: '#fff',
        fontSize: responsiveFontSize(2),
        // paddingVertical: responsiveHeight(0.1),
        marginTop: responsiveHeight(1),
        borderWidth: responsiveWidth(0.25),
        borderRadius: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(3),
        fontFamily: fontFamily.appTextRegular,
        textAlignVertical: 'top',
        height: responsiveHeight(22),

        // textAlignVertical: 'center',
        // ...Platform.select({
        //   ios: {
        //     lineHeight: responsiveHeight(22), // as same as height
        //   },
        //   android: {},
        // }),
    },
    descview: {
        marginTop: responsiveHeight(2),
    },
    uploadimgview: {
        marginTop: responsiveHeight(3),
    },
    locview: {
        marginTop: responsiveHeight(2),
    },
    datetimecont: {
        flexDirection: 'row',
        marginTop: responsiveHeight(2),
        justifyContent: 'space-between',
    },
    txtinput3: {
        backgroundColor: '#fff',
        fontSize: responsiveFontSize(2),
        // paddingVertical: responsiveHeight(0.1),
        marginTop: responsiveHeight(1),
        borderWidth: responsiveWidth(0.25),
        borderRadius: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(3),
        fontFamily: fontFamily.appTextRegular,
        width: responsiveWidth(42),
        color: '#1f2937',
    },
    picker1: {
        marginTop: responsiveHeight(-7.7),
        marginLeft: responsiveWidth(1),
    },
    imagecontainer: {
        height: responsiveHeight(22.1),
        borderWidth: responsiveWidth(0.25),
        borderRadius: responsiveWidth(4),
        marginTop: responsiveHeight(1),
        borderColor: '#bec5d1',
        marginBottom: responsiveHeight(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadimagestyle: {
        resizeMode: 'contain',
        // backgroundColor: 'red',
        height: responsiveHeight(7),
        width: responsiveWidth(13),
        marginBottom: responsiveHeight(1),
    },
    newimagestyle: {
        height: responsiveHeight(21.8),
        width: responsiveWidth(90),
        resizeMode: 'contain',
    },
    fixedfooter: {
        marginBottom: responsiveHeight(2.5),
        marginTop: responsiveHeight(2),
    },
});