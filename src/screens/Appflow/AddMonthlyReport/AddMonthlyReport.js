
import React, { useState, useRef, useCallback } from 'react';
import {
    FlatList, SafeAreaView, StyleSheet, Text,
    TextInput, View
} from 'react-native';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { HelperText, TouchableRipple, ActivityIndicator } from 'react-native-paper'
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
import { useEffect } from 'react';
import { axiosPost, getAsyncUserData } from '../../../utils/axioshelper/AxiosHelper';
import { baseUrl } from '../../../route';
import ModelOneButton from '../../../components/modelonebutton/ModelOneButton';
const AddMonthlyReport = (props) => {
    const [stateuserId, setStateUserId] = useState();
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)



    const [visibleAlertModal, setVisibleAlertModal] = useState(false);

    const showAlertModal = () => setVisibleAlertModal(true);

    const onDismissAlertModal = useCallback(() => { setVisibleAlertModal(false) }, [])


    useEffect(() => {

        const getsinglevalue = async () => {

            try {
                setStateActivityIndicatorBody(true)
                const responseAsync = await getAsyncUserData()
                console.log('jhgfgh')
                console.log(responseAsync.PPArea)
                setStateAreaNumber(responseAsync.PPArea)
                setStateUserId(responseAsync._id)

                // setStateAreaNumber('KJHGHJK')
                setStateActivityIndicatorBody(false)
            }
            catch (err) {
                setStateActivityIndicatorBody(false)
                alert(err)
            }
        }

        getsinglevalue()

    }, [])


    const [border1, setBorder1] = useState('#bec5d1');
    const [border2, setBorder2] = useState('#bec5d1');
    const [border3, setBorder3] = useState('#bec5d1');
    const [border4, setBorder4] = useState('#bec5d1');
    const [border5, setBorder5] = useState('#bec5d1');
    const [border6, setBorder6] = useState('#bec5d1');
    const [border7, setBorder7] = useState('#bec5d1');

    const [border8, setBorder8] = useState('#bec5d1');
    const [border9, setBorder9] = useState('#bec5d1');


    const [border11, setBorder11] = useState('#bec5d1');
    const [border12, setBorder12] = useState('#bec5d1');
    const [border13, setBorder13] = useState('#bec5d1');
    const [border14, setBorder14] = useState('#bec5d1');
    const [border15, setBorder15] = useState('#bec5d1');
    const [border16, setBorder16] = useState('#bec5d1');
    const [border17, setBorder17] = useState('#bec5d1');

    const [border18, setBorder18] = useState('#bec5d1');
    const [border19, setBorder19] = useState('#bec5d1');

    const [stateAreaNumber, setStateAreaNumber] = useState('')
    const [stateLifeTimeMembersTarget, setStateLifeTimeMembersTarget] = useState('')
    const [stateRegularMembersTarget, setStateRegularMembersTarget] = useState('')
    const [stateRestorationOfDefaultersTarget, setStateRestorationOfDefaultersTarget] = useState('')
    const [stateMembershipAmountTarget, setStateMembershipAmountTarget] = useState('')
    const [stateNewUcsTarget, setStateNewUcsTarget] = useState('')

    const [stateNewUnitTarget, setStateNewUnitTarget] = useState('')
    const [stateMonthlyQuranCircleTarget, setStateMonthlyQuranCircleTarget] = useState('')
    const [stateMonthlyDaroodCircleTarget, setStateMonthlyDaroodCircleTarget] = useState('')
    const [stateMonthlyMeeting, setStateMonthlyMeeting] = useState('Yes')
    const [stateTrainingSession, setStateTrainingSession] = useState('Yes')



    const [stateLifeTimeMembersArchived, setStateLifeTimeMembersArchived] = useState('')
    const [stateRegularMembersArchived, setStateRegularMembersArchived] = useState('')
    const [stateRestorationOfDefaultersArchived, setStateRestorationOfDefaultersArchived] = useState('')
    const [stateMembershipAmountArchived, setStateMembershipAmountArchived] = useState('')
    const [stateNewUcsArchived, setStateNewUcsArchived] = useState('')

    const [stateNewUnitArchived, setStateNewUnitArchived] = useState('')
    const [stateMonthlyQuranCircleArchived, setStateMonthlyQuranCircleArchived] = useState('')
    const [stateMonthlyDaroodCircleArchived, setStateMonthlyDaroodCircleArchived] = useState('')

    const [isLoading, setIsLoading] = useState(false);



    const [showAreaNumber, setShowAreaNumbers] = useState(true)
    const [showLifeTimeMembersTargets, setShowLifeTimeMembersTargets] = useState(true)
    const [showRegularMembersTargets, setShowRegularMembersTargets] = useState(true)
    const [showRestorationOfDefaultersTargets, setShowRestorationOfDefaultersTargets] = useState(true)
    const [showMembershipAmountTargets, setShowMembershipAmountTargets] = useState(true)
    const [showNewUcsTargets, setShowNewUcsTargets] = useState(true)
    const [showNewUnitTargets, setShowNewUnitTargets] = useState(true)
    const [showMonthlyQuranCircleTargets, setShowMonthlyQuranCircleTargets] = useState(true)
    const [showMonthlyDaroodCircleTargets, setShowMonthlyDaroodCircleTargets] = useState(true)

    const [showLifeTimeMembersArchived, setShowLifeTimeMembersArchived] = useState(true)
    const [showRegularMembersArchived, setShowRegularMembersArchived] = useState(true)
    const [showRestorationOfDefaultersArchived, setShowRestorationOfDefaultersArchived] = useState(true)
    const [showMembershipAmountArchived, setShowMembershipAmountArchived] = useState(true)
    const [showNewUcsArchived, setShowNewUcsArchived] = useState(true)
    const [showNewUnitArchived, setShowNewUnitArchived] = useState(true)
    const [showMonthlyQuranCircleArchived, setShowMonthlyQuranCircleArchived] = useState(true)
    const [showMonthlyDaroodCircleArchived, setShowMonthlyDaroodCircleArchived] = useState(true)
    const [showMonthlyMeeting, setShowMonthlyMeeting] = useState(true)
    const [showTrainingSession, setShowTrainingSession] = useState(true)


    const refRBSheetCustomBottomSheetMonthlyMeeting = useRef();
    const refRBSheetCustomBottomSheetTrainingSession = useRef();




    const update = async () => {

        if (stateAreaNumber == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowAreaNumbers(false)



        }
        if (stateLifeTimeMembersTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowLifeTimeMembersTargets(false)

        }
        if (stateRegularMembersTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowRegularMembersTargets(false)

        }

        if (stateRestorationOfDefaultersTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowRestorationOfDefaultersTargets(false)



        }
        if (stateMembershipAmountTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMembershipAmountTargets(false)

        }
        if (stateNewUcsTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowNewUcsTargets(false)

        }


        if (stateNewUnitTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowNewUnitTargets(false)



        }
        if (stateMonthlyQuranCircleTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyQuranCircleTargets(false)

        }
        if (stateMonthlyDaroodCircleTarget == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyDaroodCircleTargets(false)

        }
        if (stateLifeTimeMembersArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowLifeTimeMembersArchived(false)

        }
        if (stateRegularMembersArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowRegularMembersArchived(false)

        }

        if (stateRestorationOfDefaultersArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowRestorationOfDefaultersArchived(false)



        }
        if (stateMembershipAmountArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMembershipAmountArchived(false)

        }
        if (stateNewUcsArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowNewUcsArchived(false)

        }


        if (stateNewUnitArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowNewUnitArchived(false)



        }
        if (stateMonthlyQuranCircleArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyQuranCircleArchived(false)

        }
        if (stateMonthlyDaroodCircleArchived == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyDaroodCircleArchived(false)

        }

        if (stateMonthlyMeeting == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowMonthlyMeeting(false)

        }
        if (stateTrainingSession == '') {
            //   console.log(stateData.email + 'emailaddress')
            setShowTrainingSession(false)

        }


        if (stateAreaNumber != '' && stateLifeTimeMembersTarget != ''
            && stateRegularMembersTarget != '' &&
            stateRestorationOfDefaultersTarget != '' && stateMembershipAmountTarget != ''
            && stateNewUcsTarget != ''
            &&
            stateNewUnitTarget != '' && stateMonthlyQuranCircleTarget != ''
            && stateMonthlyDaroodCircleTarget != ''

            && stateLifeTimeMembersArchived != ''
            && stateRegularMembersArchived != '' &&
            stateRestorationOfDefaultersArchived != ''
            && stateMembershipAmountArchived != ''
            && stateNewUcsArchived != ''
            &&
            stateNewUnitArchived != '' && stateMonthlyQuranCircleArchived != ''
            && stateMonthlyDaroodCircleArchived != ''

            && stateMonthlyMeeting != ''
            && stateTrainingSession != ''


        ) {
            setIsLoading(true)



            const b = {
                userId: stateuserId,
                AreaNumber: stateAreaNumber,
                LifeTimeMembersTarget: stateLifeTimeMembersTarget,
                LifeTimeMembersAchieved: stateLifeTimeMembersArchived,
                RegularMembersTarget: stateRegularMembersTarget,
                RegularMembersAchieved: stateRegularMembersArchived,
                RestorationOfDefaultersTarget: stateRestorationOfDefaultersTarget,
                RestorationOfDefaultersAchieved: stateRestorationOfDefaultersArchived,
                MembershipAmountTarget: stateMembershipAmountTarget,
                MembershipAmountAchieved: stateMembershipAmountArchived,

                NewUcsTarget: stateNewUcsTarget,
                NewUcsAchieved: stateNewUcsArchived,
                NewUnitTarget: stateNewUnitTarget,
                NewUnitAchieved: stateNewUnitArchived,
                MonthlyQuranCircleTarget: stateMonthlyQuranCircleTarget,
                MonthlyQuranCircleAchieved: stateMonthlyQuranCircleArchived,
                MonthlyDaroodCircleTarget: stateMonthlyDaroodCircleTarget,
                MonthlyDaroodCircleAchieved: stateMonthlyDaroodCircleArchived,
                MonthlyMeeting: stateMonthlyMeeting,
                TrainingSession: stateTrainingSession,




            }
            console.log(b)
            try {

                const reponseApi = await axiosPost(baseUrl + '/monthlyReport',
                    b
                )
                setIsLoading(false)
                console.log(reponseApi.data)
                console.log(reponseApi.data.length)

                if (!reponseApi.data || reponseApi.data == {}) {
                    setIsLoading(false)
                }
                else {

                    showAlertModal()
                    console.log(reponseApi.data)

                }
            }
            catch (e) {
                alert(e)
            }



        }



    }

    return (

        <SafeAreaView style={
            STYLES.container
        } >



            <View style={{
                marginBottom: '5%'
            }}>
                <HeaderGoBackCenterText text="Add Report"
                    onPress={() => {
                        props.navigation.goBack()
                    }} />
            </View>

            {stateActivityIndicatorBody
                ?
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator
                        animating={stateActivityIndicatorBody} color={'#32B768'} />
                </View>
                :


                <ScrollView showsVerticalScrollIndicator={false}

                >




                    <View style={{ marginTop: '10%' }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: fontFamily.appTextSemiBold,
                            color: '#32B768'
                        }}>Area Number</Text>
                        <TextInput
                            editable={false}
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




                        <TextInput
                            style={[styles.txtinput1, { borderColor: border2 }]}
                            onFocus={() => setBorder2(appColor.appColorGreen)}
                            onBlur={() => setBorder2('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Lifetime Members Target'
                            value={stateLifeTimeMembersTarget}
                            onChangeText={(text) => {
                                setStateLifeTimeMembersTarget(text)
                                setShowLifeTimeMembersTargets(true)
                            }}
                        />
                        {
                            showLifeTimeMembersTargets || (
                                <HelperText visible={!showLifeTimeMembersTargets} type="error" >
                                    please enter a life time members targets
                                </HelperText>
                            )
                        }

                        <TextInput
                            style={[styles.txtinput1, { borderColor: border3 }]}
                            onFocus={() => setBorder3(appColor.appColorGreen)}
                            onBlur={() => setBorder3('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateLifeTimeMembersArchived}
                            onChangeText={(text) => {
                                setStateLifeTimeMembersArchived(text)
                                setShowLifeTimeMembersArchived(true)
                            }}
                        />
                        {
                            showLifeTimeMembersArchived || (
                                <HelperText visible={!showLifeTimeMembersArchived} type="error" >
                                    please enter a target archived
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



                        <TextInput
                            style={[styles.txtinput1, { borderColor: border4 }]}
                            onFocus={() => setBorder4(appColor.appColorGreen)}
                            onBlur={() => setBorder4('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Regular Members Target'
                            value={stateRegularMembersTarget}
                            onChangeText={(text) => {
                                setStateRegularMembersTarget(text)
                                setShowRegularMembersTargets(true)
                            }}
                        />
                        {
                            showRegularMembersTargets
                            || (
                                <HelperText visible={!showRegularMembersTargets} type="error" >
                                    please enter a regular  Members Targets
                                </HelperText>
                            )
                        }


                        <TextInput
                            style={[styles.txtinput1, { borderColor: border5 }]}
                            onFocus={() => setBorder5(appColor.appColorGreen)}
                            onBlur={() => setBorder5('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateRegularMembersArchived}
                            onChangeText={(text) => {
                                setStateRegularMembersArchived(text)
                                setShowRegularMembersArchived(true)
                            }}
                        />
                        {
                            showRegularMembersArchived || (
                                <HelperText visible={!showRegularMembersArchived} type="error" >
                                    please enter a target archived
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



                        <TextInput
                            style={[styles.txtinput1, { borderColor: border6 }]}
                            onFocus={() => setBorder6(appColor.appColorGreen)}
                            onBlur={() => setBorder6('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Restoration Of Defaulters'
                            value={stateRestorationOfDefaultersTarget}
                            onChangeText={(text) => {
                                setStateRestorationOfDefaultersTarget(text)
                                setShowRestorationOfDefaultersTargets(true)
                            }}
                        />
                        {
                            showRestorationOfDefaultersTargets || (
                                <HelperText visible={!showRestorationOfDefaultersTargets} type="error" >
                                    please enter a restoration of defaulters targets
                                </HelperText>
                            )
                        }

                        <TextInput
                            style={[styles.txtinput1, { borderColor: border7 }]}
                            onFocus={() => setBorder7(appColor.appColorGreen)}
                            onBlur={() => setBorder7('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateRestorationOfDefaultersArchived}
                            onChangeText={(text) => {
                                setStateRestorationOfDefaultersArchived(text)
                                setShowRestorationOfDefaultersArchived(true)
                            }}
                        />
                        {
                            showRestorationOfDefaultersArchived || (
                                <HelperText visible={!showRestorationOfDefaultersArchived} type="error" >
                                    please enter a target archived
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



                        <TextInput
                            style={[styles.txtinput1, { borderColor: border8 }]}
                            onFocus={() => setBorder8(appColor.appColorGreen)}
                            onBlur={() => setBorder8('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Membership Amount'
                            value={stateMembershipAmountTarget}
                            onChangeText={(text) => {
                                setStateMembershipAmountTarget(text)
                                setShowMembershipAmountTargets(true)
                            }}
                        />
                        {
                            showMembershipAmountTargets || (
                                <HelperText visible={!showMembershipAmountTargets} type="error" >
                                    please enter a membershp amount targets
                                </HelperText>
                            )
                        }


                        <TextInput
                            style={[styles.txtinput1, { borderColor: border9 }]}
                            onFocus={() => setBorder9(appColor.appColorGreen)}
                            onBlur={() => setBorder9('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateMembershipAmountArchived}
                            onChangeText={(text) => {
                                setStateMembershipAmountArchived(text)
                                setShowMembershipAmountArchived(true)
                            }}
                        />
                        {
                            showMembershipAmountArchived || (
                                <HelperText visible={!showMembershipAmountArchived} type="error" >
                                    please enter a target archived
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



                        <TextInput
                            style={[styles.txtinput1, { borderColor: border11 }]}
                            onFocus={() => setBorder11(appColor.appColorGreen)}
                            onBlur={() => setBorder11('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter  New Ucs'
                            value={stateNewUcsTarget}
                            onChangeText={(text) => {
                                setStateNewUcsTarget(text)
                                setShowNewUcsTargets(true)
                            }}
                        />
                        {
                            showNewUcsTargets || (
                                <HelperText visible={!showNewUcsTargets} type="error" >
                                    please enter a new ucs
                                </HelperText>
                            )
                        }


                        <TextInput
                            style={[styles.txtinput1, { borderColor: border12 }]}
                            onFocus={() => setBorder12(appColor.appColorGreen)}
                            onBlur={() => setBorder12('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateNewUcsArchived}
                            onChangeText={(text) => {
                                setStateNewUcsArchived(text)
                                setShowNewUcsArchived(true)
                            }}
                        />
                        {
                            showNewUcsArchived || (
                                <HelperText visible={!showNewUcsArchived} type="error" >
                                    please enter a target archived
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



                        <TextInput
                            style={[styles.txtinput1, { borderColor: border13 }]}
                            onFocus={() => setBorder13(appColor.appColorGreen)}
                            onBlur={() => setBorder13('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter  New Unit'
                            value={stateNewUnitTarget}
                            onChangeText={(text) => {
                                setStateNewUnitTarget(text)
                                setShowNewUnitTargets(true)
                            }}
                        />
                        {
                            showNewUnitTargets || (
                                <HelperText visible={!showNewUnitTargets} type="error" >
                                    please enter a new unit
                                </HelperText>
                            )
                        }

                        <TextInput
                            style={[styles.txtinput1, { borderColor: border14 }]}
                            onFocus={() => setBorder14(appColor.appColorGreen)}
                            onBlur={() => setBorder14('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateNewUnitArchived}
                            onChangeText={(text) => {
                                setStateNewUnitArchived(text)
                                setShowNewUnitArchived(true)
                            }}
                        />
                        {
                            showNewUnitArchived || (
                                <HelperText visible={!showNewUnitArchived} type="error" >
                                    please enter a target archived
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



                        <TextInput
                            style={[styles.txtinput1, { borderColor: border15 }]}
                            onFocus={() => setBorder15(appColor.appColorGreen)}
                            onBlur={() => setBorder15('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter  Monthly Quran Circle'
                            value={stateMonthlyQuranCircleTarget}
                            onChangeText={(text) => {
                                setStateMonthlyQuranCircleTarget(text)
                                setShowMonthlyQuranCircleTargets(true)
                            }}
                        />
                        {
                            showMonthlyQuranCircleTargets || (
                                <HelperText visible={!showMonthlyQuranCircleTargets} type="error" >
                                    please enter a monthly quran circle
                                </HelperText>
                            )
                        }

                        <TextInput
                            style={[styles.txtinput1, { borderColor: border16 }]}
                            onFocus={() => setBorder16(appColor.appColorGreen)}
                            onBlur={() => setBorder16('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateMonthlyQuranCircleArchived}
                            onChangeText={(text) => {
                                setStateMonthlyQuranCircleArchived(text)
                                setShowMonthlyQuranCircleArchived(true)
                            }}
                        />
                        {
                            showMonthlyQuranCircleArchived || (
                                <HelperText visible={!showMonthlyQuranCircleArchived} type="error" >
                                    please enter a target archived
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


                        <TextInput
                            style={[styles.txtinput1, { borderColor: border17 }]}
                            onFocus={() => setBorder17(appColor.appColorGreen)}
                            onBlur={() => setBorder17('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter  Monthly Darood Circle'
                            value={stateMonthlyDaroodCircleTarget}
                            onChangeText={(text) => {
                                setStateMonthlyDaroodCircleTarget(text)
                                setShowMonthlyDaroodCircleTargets(true)
                            }}
                        />
                        {
                            showMonthlyDaroodCircleTargets || (
                                <HelperText visible={!showMonthlyDaroodCircleTargets} type="error" >
                                    please enter a monthly darood circle
                                </HelperText>
                            )
                        }


                        <TextInput
                            style={[styles.txtinput1, { borderColor: border18 }]}
                            onFocus={() => setBorder18(appColor.appColorGreen)}
                            onBlur={() => setBorder18('#bec5d1')}
                            blurOnSubmit={true}
                            placeholder='Enter Target Archieved'
                            value={stateMonthlyDaroodCircleArchived}
                            onChangeText={(text) => {
                                setStateMonthlyDaroodCircleArchived(text)
                                setShowMonthlyDaroodCircleArchived(true)
                            }}
                        />
                        {
                            showMonthlyDaroodCircleArchived || (
                                <HelperText visible={!showMonthlyDaroodCircleArchived} type="error" >
                                    please enter a target archived
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



            }

            <ModelOneButton
                visible={visibleAlertModal}
                onDismiss={onDismissAlertModal}
                text1="Success"
                text2="Report Sent Successfully"
                onPress={() => {
                    onDismissAlertModal()
                    props.navigation.navigate("MonthlyReport")
                }}
                buttonText="Ok" />
        </SafeAreaView>
    );
};

export default AddMonthlyReport;



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