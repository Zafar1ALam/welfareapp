import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native-paper';
import { Text, View } from 'react-native';
import SmallButtonPropsTextStyle from '../smallbuttonpropstextstyle/SmallButtonPropsTextStyle';
import { fontFamily } from '../../constants/fonts';
import STYLES from '../../STYLES/STYLES';
import { styles } from '../dateTimePicker/style';

const ModelTwoButton = props => {
    return (
        <Modal
            visible={props.visible} onDismiss={props.onDismiss}
            contentContainerStyle={{
                paddingVertical: '5%',
                backgroundColor: '#FFFFFF',
                marginHorizontal: '14%',
                borderRadius: 25,
                border: 1,
                borderColor: '#707070',
                height: 241,
                width: 256,

            }}>

            <View style={{
                alignItems: 'center',
                marginBottom: '10%'
            }}>
                <Text style={STYLES.fontSize22_32B768_appTextBold_Bold_700}>{props.text1}</Text>
            </View>
            <View style={{
                alignItems: 'center',
                width: "70%",
                alignSelf: 'center'

            }}>
                <Text style={[styles.fontSize19_1F2937_appTextRegular_86,
                { textAlign: 'center' }]}>{props.text2}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '15%',
                width: '70%',
                alignSelf: "center"
            }}>
                <View style={{
                    width: '45%',
                    //      backgroundColor: 'pink',

                }}>
                    <SmallButtonPropsTextStyle
                        onPress={() => {
                            props.methodOnLeftSide()
                        }}
                        buttonStyle={{
                            backgroundColor: '#FFFFFF',
                            borderColor: '#32B768',
                            borderWidth: 1,
                            paddingVertical: '2%',
                            alignItems: 'center',
                            borderRadius: 20,
                        }}

                        buttonText={props.buttonTextLeft == undefined ?
                            "Ok"

                            :
                            props.buttonTextLeft
                        }
                        style={STYLES.fontSize15_32B768_arialRegular} />
                </View>

                <View style={{ width: '45%' }}>
                    <SmallButtonPropsTextStyle
                        onPress={() => {
                            props.methodOnRightSide()
                        }}
                        buttonText=
                        {props.buttonTextRight == undefined ?
                            "Open Draft" : props.buttonTextRight}
                        buttonStyle={{
                            backgroundColor: '#32B768',
                            borderColor: '#32B768',
                            borderRadius: 20,
                            borderWidth: 1,
                            paddingVertical: '2%',
                            alignItems: 'center'
                        }}


                        style={

                            STYLES.fontSize15_ffffff_arialRegular
                        } />
                </View>
            </View>


        </Modal>

    );
};

ModelTwoButton.propTypes = {

};

export default ModelTwoButton;