import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { fontFamily } from '../../constants/fonts';

const ReportDetailComponent = props => {
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
                }}>{props.heading}</Text>
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
                        }}>: {props.target}</Text>
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
                        }}>: {props.archieved}</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

ReportDetailComponent.propTypes = {

};

export default ReportDetailComponent;