import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'
import { appColor } from '../../constants/colors'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

const LoaderButtonRnPaper = (props) => {
    return (
        <Button
            mode="contained"
            onPress={props.onPress}
            style={[styles.buttonContainer, props.style]}
            labelStyle={[styles.buttonLabel, props.labelStyle]}
            loading={props.loading}
            disabled={props.loading}
            uppercase={false}
        >
            {props.label}
        </Button>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: responsiveWidth(70),
        height: responsiveHeight(6.5),
        justifyContent: 'center',
        backgroundColor: appColor.appColorGreen,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: 15
    },
    buttonLabel: {
        color: '#fff',
        height: responsiveHeight(8.5),
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
})
export default LoaderButtonRnPaper