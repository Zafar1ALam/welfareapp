import React from 'react';
import PropTypes from 'prop-types';
import SmallButtonPropsTextStyle from '../smallbuttonpropstextstyle/SmallButtonPropsTextStyle';
import { Text, View } from 'react-native';
import { Modal } from 'react-native-paper';
import STYLES from '../../STYLES/STYLES';

const ModelOneButton = props => {
    return (
        <Modal
            visible={props.visible} onDismiss={props.onDismiss}
            contentContainerStyle={{
                paddingVertical: '5%',
                backgroundColor: '#ffffff',
                marginHorizontal: '14%',
                borderRadius: 25,
                height: 221,
                width: 256
            }}>

            <View style={{
                alignItems: 'center',
                marginBottom: '10%'
            }}>
                <Text style={STYLES.fontSize22_32B768_appTextBold_Bold_700}>{props.text1}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={STYLES.fontSize16_1F2937_appTextRegular_86}>{props.text2}</Text>
            </View>


            <View style={{
                width: '55%',
                // backgroundColor: 'pink',
                alignSelf: 'center',
                marginTop: '15%'
            }}>
                <SmallButtonPropsTextStyle
                    paddingVertical="3%"
                    onPress={props.onPress}
                    buttonText={props.buttonText}
                    buttonStyle={{
                        backgroundColor: '#32B768',
                        borderColor: '#32B768',
                        borderRadius: 20,
                        borderWidth: 1,
                        paddingVertical: '4%',
                        alignItems: 'center'
                    }}


                    style={

                        STYLES.fontSize15_ffffff_arialRegular
                    } />
            </View>





        </Modal>

    );
};

ModelOneButton.propTypes = {

};

export default ModelOneButton;