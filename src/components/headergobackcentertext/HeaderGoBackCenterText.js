import React from 'react';
import { Text, View } from 'react-native';
import { TouchableRipple, HelperText } from 'react-native-paper';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { fontFamily } from '../../constants/fonts';
const HeaderGoBackCenterText = (props) => {
    return (

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

        }}>

            <TouchableRipple style={{
                //    backgroundColor: 'red',
                paddingHorizontal: '2%',
                paddingVertical: '2%',
                marginVertical: '-2%',
                marginHorizontal: '-2%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
                onPress={props.onPress}
            >
                <LeftArrow
                    name="arrow-back-ios"
                    size={24}

                />

            </TouchableRipple>

            <View style={{
                flex: 1, alignItems: 'center',
                marginLeft: '-8%'
            }}>
                <Text style={{
                    color: '#1F2937',
                    fontSize: 14,
                    fontFamily: fontFamily.appTextSemiBold
                }}>{props.text}</Text>
            </View>

        </View>

    );
};

export default HeaderGoBackCenterText;