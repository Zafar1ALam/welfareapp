import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { fontFamily } from '../../../constants/fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    parentheader: {
        width: responsiveWidth(100),
        alignItems: 'center',
        backgroundColor: appColor.appColorWhite,
        paddingVertical: responsiveHeight(3),
    },

    header: {
        flexDirection: 'row',
        // marginTop: responsiveHeight(4),
        alignItems: 'center',
        width: responsiveWidth(88),
        alignSelf: 'center',
        backgroundColor: appColor.appColorWhite,
        justifyContent: 'space-between',
    },
    eventtxt: {
        color: '#1f2937',
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(2.2),
        // marginLeft: responsiveWidth(12),
    },
    arrowback: {
        fontSize: responsiveFontSize(2),
        // backgroundColor: 'red',
        color: '#89909e',
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontWeight: '600',
        color: '#F4743A',
        fontSize: 25,
        fontFamily: 'Rubik-Regular'
    },
    iconStyle: {
        color: '#4d419e'
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    headerBackIconContainer: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    screenHeaderText: {
        fontFamily: 'Malgun-SemiBold',
        fontSize: 20,
        color: 'black'
    },
    backIconContainer: {
        height: 35,
        width: 35,
        borderRadius: 50,
        borderColor: '#c6c6c6',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    miniContainer: {
        alignItems: 'center',
        width: Dimensions.get('screen').width
    },
    userIconContainer: {
        marginTop: 50,
    },
    imageStyles: {
        borderRadius: 50,
        borderWidth: 1,
        height: 100,
        width: 100
    },
    addImageContainer: {
        backgroundColor: '#f69920',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 8,
        marginVertical: 10
    },
    addImageText: {
        color: '#ffff',
        fontWeight: 'bold'
    },
    detailsEntryInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
        width: '90%',
        // marginBottom: 20,
        fontSize: responsiveFontSize(2),
        // fontSize: 15,
        alignSelf: 'center',
        color: 'black',
        fontFamily: fontFamily.appTextRegular
    },
    detailsContainer: {
        width: '90%'
    },
    detailHeaderText: {
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginTop: 10
    },
    genderModal: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10
    },
    modalTouchableContainer: {
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalTextStyles: {
        color: 'black',
        fontFamily: 'Poppins-Medium'
    },
    lineDrawer: {
        width: '90%',
        alignSelf: 'center'
    },
    modalText: {
        color: 'black',
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'Malgun-Bold'
    },
    optionModalContainer: {
        backgroundColor: '#ffff',
        width: '100%',
        minHeight: '20%',
        borderRadius: 15,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    button: {
        height: 100,
        width: '45%',
        justifyContent: 'center',
        backgroundColor: '#F4743A',
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chatButtonStyle: {
        backgroundColor: 'black'
    },
    imagePickerRbSheetContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        width: Dimensions.get('screen').width
    },
    openWithText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Poppins-SemiBold'
    },
    optionContainer: {
        width: '95%',
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionText: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        marginLeft: 20
    },
    modalViewContainer: {
        backgroundColor: '#ffff',
        width: '90%',
        minHeight: '35%',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    modalText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    profileUpdatedIconContainer: {
        alignItems: 'center'
    },
    modalButtonStyles: {
        width: '80%',
        marginTop: 30,
    },
})
export default styles