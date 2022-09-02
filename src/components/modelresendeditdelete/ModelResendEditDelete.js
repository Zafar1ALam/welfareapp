import React from 'react';
import { ActivityIndicator, Modal, TouchableRipple } from 'react-native-paper';
import { Svgs } from '../../assets/svg/Svg';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ReportingByDepartment } from '../../screens';
import { Text, View } from 'react-native';
import STYLES from '../../STYLES/STYLES';

const ModelResendEditDelete = (props) => {
    return (

        <Modal visible={props.visible} onDismiss={props.onDismiss}
            style={{
                //   backgroundColor: 'red',
                height: 100,
                marginTop: '15%'
            }}
            contentContainerStyle={{
                marginVertical: 0,
                backgroundColor: '#FFFFFF',
                marginHorizontal: '5%',
                paddingHorizontal: '3%',
                height: 180,
                borderRadius: 15,
                // justifyContent: 'space-evenly',
                width: "50%",
                alignSelf: 'flex-end',
                paddingVertical: '5%',
                elevation: 1

            }}>

            <TouchableRipple style={{
                flexDirection: 'row',
                paddingHorizontal: '2%',
                alignItems: 'center',
                flex: 1,
                // backgroundColor: 'red'
            }} onPress={props.onPressResendReport}>
                <>
                    <FontAwesome name="send" size={22}
                        color='#1F2937' />
                    {props.stateActivityIndicator ?
                        <View style={{
                            alignItems: 'center',
                            // backgroundColor: 'red',
                            width: '90%',
                        }}>

                            <ActivityIndicator
                                style={{ alignSelf: 'center' }}
                                animating={props.stateActivityIndicator}
                                color={'#32B768'} />
                        </View>
                        :

                        <View style={{ marginLeft: '6%' }}>
                            <Text style={STYLES.fontSize15_1F2937_appTextMedium}>Resend Report</Text>
                        </View>

                    }
                </>
            </TouchableRipple>
            <View style={{
                borderWidth: 0.3,
                borderColor: 'rgba(112,112,112,0.40)',
                width: '80%',
                marginLeft: '15%',
            }}>

            </View>
            <TouchableRipple style={{
                flexDirection: 'row',
                paddingHorizontal: '2%',
                flex: 1,
                alignItems: 'center',

                //   backgroundColor: 'red'
            }} onPress={props.onPressEditReport}>
                <>
                    <FontAwesome5 name="edit" size={20}
                        color='#1F2937' />
                    <View style={{ marginLeft: '6%' }}>
                        <Text style={STYLES.fontSize15_1F2937_appTextMedium}>Edit Report</Text>

                    </View>
                </>
            </TouchableRipple>


            <View style={{
                borderWidth: 0.3,
                width: '80%',
                marginLeft: '8%',
                alignSelf: 'center',
                borderColor: 'rgba(112,112,112,0.40)'
            }}>

            </View>
            <TouchableRipple style={{
                flexDirection: 'row',
                paddingHorizontal: '2%',
                flex: 1,
                alignItems: 'center',

                //   backgroundColor: 'red'
            }} onPress={props.onPressDeleteReport}>
                <>
                    <MaterialCommunityIcons name="delete" size={20}
                        color='#1F2937' />
                    <View style={{ marginLeft: '6%' }}>
                        <Text style={STYLES.fontSize15_1F2937_appTextMedium}>Delete Report</Text>

                    </View>
                </>
            </TouchableRipple>

        </Modal>

    );
};

export default ModelResendEditDelete;