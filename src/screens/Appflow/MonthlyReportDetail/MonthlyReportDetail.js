import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper'
import HeaderGoBackCenterText from '../../../components/headergobackcentertext/HeaderGoBackCenterText';
import { fontFamily } from '../../../constants/fonts';
import { ScrollView } from 'react-native-gesture-handler';
import LoaderButtonRnPaper from '../../../components/LoaderButton';
import STYLES from '../../../STYLES/STYLES';
const MonthlyReportDetail = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [secondlist, setSecondlist] = useState([
        {
            id: 1,
            headingText: "Lifetime Members",
            target: "02",
            achived: "00"
        },
        {
            id: 2,
            headingText: "Regular Members",
            target: "05",
            achived: "00"
        },
        {
            id: 3,
            headingText: "Restoration of Defaulters",
            target: "05",
            achived: "00"
        },
        {
            id: 4,
            headingText: "Membership Amount",
            target: "15,000 Rs.",
            achived: "00"
        },
        {
            id: 5, headingText: "New Ucs",
            target: "02",
            achived: "01"

        },
        {
            id: 6,
            headingText: "New Unit",
            target: "02",
            achived: "00"
        },
        {
            id: 7,
            headingText: "Monthly Quran Circle",
            target: "01",
            achived: "00"
        },
        {
            id: 8,
            headingText: "Monthly Darood Circle",
            target: "02",
            achived: "00"
        },

    ]);


    const Secondrenderitem = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: "#F6F6F6",

                justifyContent: 'space-evenly',

                height: 70,

                borderBottomWidth: 1,
                borderBottomColor: 'rgba(112,112,112,0.27)',

                paddingHorizontal: '4%',

                marginTop: '2%'

            }}>
                <View>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextSemiBold,
                        color: '#32B768'
                    }}>{item.headingText}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
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
                            }}>: {item.target}</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextBold,
                                color: '#000000'
                            }}>Achived </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: fontFamily.appTextMedium,
                                color: 'rgba(0,0,0,0.70)'
                            }}>: {item.achived}</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    };
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
            <ScrollView showsVerticalScrollIndicator={false}
                style={{}}>
                <View style={{ marginTop: '8%', marginBottom: '3%' }}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: fontFamily.appTextBold,
                        color: '#000000'
                    }}>Area Number Here</Text>
                </View>


                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={secondlist}
                    renderItem={Secondrenderitem}

                />

                <View style={{
                    height: 70,
                    justifyContent: 'space-evenly',
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(112,112,112,0.27)',

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
                        }}>Yes</Text>
                    </View>




                </View>

                <View style={{
                    height: 70,
                    justifyContent: 'space-evenly',
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(112,112,112,0.27)',

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
                        }}>No</Text>
                    </View>




                </View>

                <View style={{ marginTop: '10%' }}>
                    <LoaderButtonRnPaper
                        onPress={() => {
                            props.navigation.navigate("MonthlyReportEdit")
                        }}
                        loading={isLoading}
                        label="Edit"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MonthlyReportDetail;