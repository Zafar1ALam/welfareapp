import React from 'react';
import PropTypes from 'prop-types';
import RBSheet from 'react-native-raw-bottom-sheet';
import { fontFamily } from '../../constants/fonts';
import { Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableRipple } from 'react-native-paper';
import STYLES from '../../STYLES/STYLES';
import { appColor } from '../../constants/colors';
const CustomBottomSheet = props => {
    return (
        <RBSheet
            //  closeOnPressMask={false}
            // closeOnDragDown={false}
            height={200}
            animationType="slide"
            ref={props.refs}
            customStyles={{
                container: {
                    //borderRadius: 40,
                    backgroundColor: '#FFFFFF',
                    paddingVertical: "5%",
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    paddingHorizontal: '5%'
                },

            }}



        >

            <View style={{
                flexDirection: 'row', justifyContent:
                    'space-between',
                alignItems: 'center',
                marginBottom: '5%'
            }}>
                <Text style={
                    STYLES.fontSize17_32B768_appTextBold_Bold_700
                }>{props.heading}</Text>

                <TouchableRipple
                    onPress={props.closeBottomSheet
                    }
                    style={{
                        justifyContent: 'center',
                        //backgroundColor: 'red',
                        paddingHorizontal: '2%',
                        paddingVertical: '2%'

                    }}
                    rippleColor="rgba(0,0,0,0.15)">

                    <Entypo name='cross' size={24}
                        color='#707070' />
                </TouchableRipple>
            </View>

            <View style={{
                flex: 1,

                justifyContent: 'space-evenly',
                backgroundColor: '#FFFFFF',
            }}>


                <TouchableRipple style={{
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    paddingVertical: '3%',
                    paddingHorizontal: '2%',
                }} onPress={
                    props.uppertouchableripple
                }
                    rippleColor={appColor.appColorGreen}
                >


                    <Text style={STYLES.fontSize19_grey_appTextMedium_85
                    }>
                        Yes </Text>


                </TouchableRipple>

                <View style={{
                    borderWidth: 0.5, borderColor: 'rgba(112, 112, 112, 0.40)'
                }}>

                </View>
                <TouchableRipple style={{
                    backgroundColor: '#fff',
                    paddingVertical: '3%',

                    paddingHorizontal: '2%',
                }}
                    rippleColor={appColor.appColorGreen}
                    onPress={
                        props.lowertouchableripple
                    }
                >



                    <Text style={STYLES.fontSize19_grey_appTextMedium_85
                    }>
                        No </Text>




                </TouchableRipple>
            </View>
        </RBSheet >


    );
};

CustomBottomSheet.propTypes = {

};

export default CustomBottomSheet;
