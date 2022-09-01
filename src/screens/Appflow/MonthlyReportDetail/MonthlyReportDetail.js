import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple, ActivityIndicator } from 'react-native-paper'
import HeaderGoBackCenterText from '../../../components/headergobackcentertext/HeaderGoBackCenterText';
import { fontFamily } from '../../../constants/fonts';
import { ScrollView } from 'react-native-gesture-handler';
import LoaderButtonRnPaper from '../../../components/LoaderButton';
import STYLES from '../../../STYLES/STYLES';
import ReportDetailComponent from '../../../components/reportdetailcomponent/ReportDetailComponent';
import { getAsyncUserData } from '../../../utils/axioshelper/AxiosHelper';
const MonthlyReportDetail = (props) => {
    const { report } = props.route.params;
    console.log('fghj')
    console.log(report)
    const [isLoading, setIsLoading] = useState(false);
    const [stateuserId, setStateUserId] = useState();


    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
    useEffect(() => {

        const getsinglevalue = async () => {

            try {
                setStateActivityIndicatorBody(true)
                const responseAsync = await getAsyncUserData()


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


    return (

        <SafeAreaView style={
            STYLES.container
        } >



            <View style={{
                marginBottom: '5%'
            }}>
                <HeaderGoBackCenterText text="Report Detail"
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
                    style={{}}>
                    <View style={{ marginTop: '8%', marginBottom: '3%' }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: fontFamily.appTextBold,
                            color: '#000000'
                        }}>{report.AreaNumber}</Text>
                    </View>


                    {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    data={secondlist}
                    renderItem={Secondrenderitem}

                /> */}
                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="Lifetime Members"
                            target={report.LifeTimeMembersTarget}
                            archieved={report.LifeTimeMembersAchieved}
                        />


                    </View>

                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="Regular Members"
                            target={report.RegularMembersTarget}
                            archieved={report.RegularMembersAchieved}
                        />


                    </View>

                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="Restoration of Defaulters"
                            target={report.RestorationOfDefaultersTarget}
                            archieved={report.RestorationOfDefaultersAchieved}
                        />


                    </View>

                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="Membership Amount"
                            target={report.MembershipAmountTarget}
                            archieved={report.MembershipAmountAchieved}
                        />


                    </View>

                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="New Ucs"
                            target={report.NewUcsTarget}
                            archieved={report.NewUcsAchieved}
                        />


                    </View>

                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="New Unit"
                            target={report.NewUnitTarget}
                            archieved={report.NewUnitAchieved}
                        />


                    </View>

                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="Monthly Quran Circle"
                            target={report.MonthlyQuranCircleTarget}
                            archieved={report.MonthlyQuranCircleAchieved}
                        />


                    </View>

                    <View style={{


                    }}>
                        <ReportDetailComponent
                            heading="Monthly Darood Circle"
                            target={report.MonthlyDaroodCircleTarget}
                            archieved={report.MonthlyDaroodCircleAchieved}
                        />


                    </View>


                    <View style={{
                        height: 70,
                        justifyContent: 'space-evenly',
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(112,112,112,0.27)',
                        backgroundColor: "#F6F6F6",
                        paddingHorizontal: '4%',

                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: fontFamily.appTextSemiBold,
                                color: '#32B768'
                            }}>Monthly Meeting</Text>
                        </View>

                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>{report.MonthlyMeeting}</Text>
                        </View>




                    </View>

                    <View style={{
                        height: 70,
                        justifyContent: 'space-evenly',
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(112,112,112,0.27)',
                        backgroundColor: "#F6F6F6",
                        paddingHorizontal: '4%',

                        marginTop: '2%'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: fontFamily.appTextSemiBold,
                                color: '#32B768'
                            }}>Training Session</Text>
                        </View>

                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>{report.TrainingSession}</Text>
                        </View>




                    </View>
                    {stateuserId == report.userId && (


                        <View style={{ marginTop: '10%' }}>
                            <LoaderButtonRnPaper
                                onPress={() => {
                                    props.navigation.navigate("MonthlyReportEdit", {
                                        report: report
                                    })
                                }}
                                loading={isLoading}
                                label="Edit"
                            />
                        </View>
                    )
                    }


                </ScrollView>

            }
        </SafeAreaView>
    );
};

export default MonthlyReportDetail;