import React from 'react';
import { Text, TouchableRipple } from 'react-native-paper';

const SmallButtonPropsTextStyle = (props) => {
    return (
        <TouchableRipple
            style={props.buttonStyle} onPress={props.onPress}>
            <Text style={props.style}>{props.buttonText}</Text>
        </TouchableRipple>

    );
};

export default SmallButtonPropsTextStyle;