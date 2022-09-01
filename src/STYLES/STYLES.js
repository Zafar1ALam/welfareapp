import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";

import { fontFamily } from '../constants/fonts';



const STYLES = StyleSheet.create({

    container: {
        flex: 1,
        color: '#F6F6F6',
        paddingHorizontal: '5%',
        paddingVertical: '5%'

    },

    fontSize22_32B768_appTextBold_Bold_700: {
        fontSize: 20,
        fontFamily: fontFamily.appTextBold,
        color: '#32B768',

    },


    fontSize19_grey_appTextMedium_85: {
        fontSize: 17,
        fontFamily: fontFamily.appTextMedium,
        color: 'rgba(31,41,55,0.85)',

    },

    fontSize17_32B768_appTextBold_Bold_700: {
        fontSize: 15,
        fontFamily: fontFamily.appTextBold,
        color: '#32B768',

    },
    fontSize16_1F2937_appTextSemiBold: {
        fontSize: 14,
        fontFamily: fontFamily.appTextSemiBold,
        color: '#1F2937',

    },

    fontSize19_1F2937_appTextRegular_86: {
        fontSize: 17,
        fontFamily: fontFamily.appTextRegular,
        color: 'rgba(31,41,55,0.86)',

    },

    fontSize16_1F2937_appTextRegular_86: {
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        color: 'rgba(31,41,55,0.86)',

    },
    fontSize16_1F2937_appTextBold: {
        fontSize: 14,
        fontFamily: fontFamily.appTextBold,
        color: '#1F2937',

    },

    fontSize15_1F2937_appTextMedium: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        color: '#1F2937',

    },
    fontSize15_32B768_arialRegular: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'arial',
        color: '#32B768',

    },
    fontSize15_ffffff_arialRegular: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'arial',
        color: '#ffffff',

    },
    fontSize14_1F2937_appTextMedium: {
        fontSize: 13,
        fontFamily: fontFamily.appTextMedium,
        color: '#1F2937',

    },

    fontSize13_1F2937_arialBold: {
        fontSize: 12,
        fontFamily: 'arial',
        color: '#1F2937',

    },
    fontSize12_1F2937_appTextMedium: {
        fontSize: 11,
        fontFamily: fontFamily.appTextMedium,
        color: '#1F2937',

    },

    fontSize12_000000_appTextMedium: {
        fontSize: 11,
        fontFamily: fontFamily.appTextMedium,
        color: '#000000',

    },
    fontSize12_000000_appTextSemiBold: {
        fontSize: 11,
        fontFamily: fontFamily.appTextSemiBold,
        color: '#000000',

    },
    fontSize12_1F2937_appTextSemiBold: {
        fontSize: 11,
        fontFamily: fontFamily.appTextSemiBold,
        color: '#1F2937',

    },

    fontSize10_6B7280_appTextMedium: {
        fontSize: 10,
        fontFamily: fontFamily.appTextMedium,
        color: '#6B7280',

    },

    fontSize8_000000_appTextRegular_74: {
        fontSize: 8,
        fontFamily: fontFamily.appTextRegular,
        color: 'rgba(0,0,0,0.74)',

    },
    fontSize8_32B768_appTextBold: {
        fontSize: 8,
        fontFamily: fontFamily.appTextBold,
        color: '#32B768',

    },


});

export default STYLES;