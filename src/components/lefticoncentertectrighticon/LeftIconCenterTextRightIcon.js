import React from 'react';
import { Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import STYLES from '../../STYLES/STYLES';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { appColor } from '../../constants/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const LeftIconCenterTextRightIcon = (props) => {
    return (
        <View style={{
            flexDirection: 'row',

        }}>
            <TouchableRipple onPress={props.leftPress}

                style={{
                    marginLeft: '-5%',
                    paddingLeft: '5%',
                    paddingVertical: '2%',
                    //     backgroundColor: 'red'
                }}

            >
                < LeftArrow name="arrow-back-ios" size={25} />
            </TouchableRipple>

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={STYLES.fontSize16_1F2937_appTextSemiBold}>Report Detail</Text>
            </View>

            <TouchableRipple onPress={props.rightPress}
                style={{
                    marginRight: '-7%',
                    paddingHorizontal: '3%',
                    paddingVertical: '2%',
                    //    backgroundColor: 'red'
                }}>
                {props.downloadicon != undefined
                    ?
                    <FontAwesome name="download"
                        size={24}
                        color='#32B768'
                        style={{
                            marginRight: "2%"
                        }}
                    />
                    :
                    <MaterialCommunityIcons name="dots-vertical" size={27}
                    />
                }
            </TouchableRipple>
        </View>

    );
};

export default LeftIconCenterTextRightIcon;