import React, { useState, useEffect, useRef } from 'react'
import {
    View, Text, TouchableOpacity, TextInput, ScrollView, Alert,
    ToastAndroid, Image, StatusBar
} from 'react-native'
// import UserIcon from '../../assets/user-icon.svg'
// import RoundEdgesButton from '../../components/round-button'
import LoaderButtonRnPaper from '../../../components/LoaderButton'
import Feather from 'react-native-vector-icons/Feather'
import ImagePicker from 'react-native-image-crop-picker'
import Modal from 'react-native-modal'
import styles from './styles'
import axios from 'axios'
import { connect } from 'react-redux'
import RNFetchBlob from 'rn-fetch-blob'
import Octicons from 'react-native-vector-icons/Octicons'
import RBSheet from 'react-native-raw-bottom-sheet'
import { HelperText, RadioButton, Divider } from 'react-native-paper'
import LoaderImage from '../../../components/LoaderImage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { baseUrl } from '../../../route'
import moment from 'moment';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { appColor } from '../../../constants/colors'
import { MyButton } from '../../../components/MyButton'

const EditProfileScreen = (props) => {
    // console.log(props.user)
    const imagePickerBottomSheet = useRef()
    const [email, setEmail] = useState(props?.user?.email)
    const [name, setName] = useState(props?.user?.name)
    const [dob, setDob] = useState(props?.user?.dob)
    const [profession, setProfession] = useState(props?.user?.profession)
    const [city, setCity] = useState(props?.user?.city)
    const [image, setImage] = useState(props?.user?.image && `${baseUrl}/${props?.user?.image}`)
    const [userType, setUserType] = useState(props?.user?.userType)
    const [gender, setGender] = useState(props?.user?.gender)
    const [forum, setForum] = useState(props?.user?.forum)
    const [role, setRole] = useState(props?.user?.role)
    const [department, setDepartment] = useState(props?.user?.department)
    const [isLoading, setIsLoading] = useState(false)
    const [imageUpload, setImageUpload] = useState(null)
    const [getLocalImage, setLocalImage] = useState(false);
    const [showProfileUpdatedModal, setShowProfileUpdatedModal] = useState(false)
    const [showImageHelperText, setShowImageHelperText] = useState(false)
    const [showProfessionHelperText, setShowProfessionHelperText] = useState(false)

    const storeData = async (value) => {
        console.log(value)
        try {
            await AsyncStorage.setItem('user_session', JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }
    const updateData = () => {
        const filnename = imageUpload.path.substring(imageUpload.path.lastIndexOf('/') + 1)
        console.log('filnename')
        console.log(imageUpload.path)
        RNFetchBlob.fetch('POST',
            `${baseUrl}/upload-image`, {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        }, [{
            name: 'image',
            filename: filnename,
            type: imageUpload.mime,
            data: RNFetchBlob.wrap(imageUpload.path)
        }]).then(async (response) => {
            console.log("response.data")
            console.log(response.data)
            var a = response.data.split('"')[1]
            console.log('props.user_id' + props.user._id)
            console.log('respon.data' + response.data)
            console.log('profession' + profession)
            setIsLoading(false)
            await axios.put(`${baseUrl}/update-user`, {
                _id: props.user._id,
                image: a,
                profession: profession,
            }).then(response => {
                console.log('response.data')
                console.log(response.data)
                storeData(response.data)
                props.setUserData(response.data)
                setShowProfileUpdatedModal(true)
                setIsLoading(false)
            }).catch(error => {
                alert(error)
                setIsLoading(false)
            })
        }).catch((error) => {
            alert(error)
        })
    }
    const onUpdateButtonPress = async () => {
        if (image == '' || image == undefined) {
            setShowImageHelperText(true)
            setShowProfessionHelperText(false)
        } else if (profession == '' || profession == undefined) {
            setShowImageHelperText(false)
            setShowProfessionHelperText(true)
        } else {
            setShowImageHelperText(false)
            setShowProfessionHelperText(false)
            setIsLoading(true)
            updateData()
        }
    }
    const onAddImagePress = () => {
        imagePickerBottomSheet.current.open()
    }
    const onOpenWithCameraPress = () => {
        imagePickerBottomSheet.current.close()
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage(image.path)
            setImageUpload(image)
        }).catch(error => {
            console.log(error)
        })
    }
    const onOpenWithGalleryPress = () => {
        imagePickerBottomSheet.current.close()
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage(image.path)
            setImageUpload(image)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
            <View style={styles.container} >
                <View style={styles.miniContainer} >
                    <StatusBar
                        hidden={true}
                        barStyle={'dark-content'}
                        backgroundColor={'#fff'}
                    />

                    <View style={styles.parentheader}>
                        <View style={styles.header}>
                            <LeftArrow
                                name="arrow-back-ios"
                                style={styles.arrowback}
                                onPress={() => props.navigation.goBack()}
                            />
                            <Text style={styles.eventtxt}>Edit Profile</Text>
                            <Text>{'   '}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.userIconContainer} onPress={onAddImagePress} >
                        {
                            image == '' || image == null ||
                                image == undefined ?
                                <FontAwesome5
                                    size={responsiveFontSize(10)}
                                    color={appColor.appColorGreen}
                                    name="user-circle"
                                /> : (
                                    <LoaderImage
                                        source={image}
                                        style={styles.imageStyles}
                                    />
                                )
                        }
                    </TouchableOpacity>
                    <HelperText visible={showImageHelperText} type="error">
                        Please enter your image
                    </HelperText>
                    <View style={styles.detailsContainer} >
                        <TextInput
                            placeholder="Email"
                            style={styles.detailsEntryInput}
                            value={email}
                            // onChangeText={email}
                            placeholderTextColor="grey"
                            editable={false}
                        />
                        <TextInput
                            placeholder="Name"
                            style={styles.detailsEntryInput}
                            value={name}
                            // onChangeText={setLastName}
                            placeholderTextColor="grey"
                            editable={false}
                        />
                        <TextInput
                            placeholder="Gender"
                            style={styles.detailsEntryInput}
                            value={gender}
                            editable={false}
                            placeholderTextColor="grey"
                        />
                        <TextInput
                            placeholder="Date of Birth"
                            style={styles.detailsEntryInput}
                            value={moment(new Date(dob)).format('DD-MM-YYYY')}
                            // onChangeText={setEmail}
                            placeholderTextColor="grey"
                            // keyboardType="email-address"
                            editable={false}
                        />
                        <TextInput
                            placeholder="Profession"
                            style={styles.detailsEntryInput}
                            value={profession}
                            onChangeText={setProfession}
                            placeholderTextColor="grey"
                        />
                        {
                            showProfessionHelperText && (
                                <HelperText visible={showProfessionHelperText} type="error">
                                    Please mention your profession
                                </HelperText>
                            )
                        }
                        <TextInput
                            placeholder="City"
                            style={styles.detailsEntryInput}
                            value={city}
                            editable={false}
                            placeholderTextColor="grey"
                        />
                        <TextInput
                            placeholder="User Type"
                            style={styles.detailsEntryInput}
                            value={userType}
                            editable={false}
                            placeholderTextColor="grey"
                        />
                        <TextInput
                            placeholder="Forum"
                            style={styles.detailsEntryInput}
                            value={forum}
                            editable={false}
                            placeholderTextColor="grey"
                        />
                        <TextInput
                            placeholder="Role"
                            style={styles.detailsEntryInput}
                            value={role}
                            editable={false}
                            placeholderTextColor="grey"
                        />
                        <TextInput
                            placeholder="Department"
                            style={styles.detailsEntryInput}
                            value={department}
                            editable={false}
                            placeholderTextColor="grey"
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer} >
                    <LoaderButtonRnPaper
                        label="Update"
                        loading={isLoading}
                        onPress={onUpdateButtonPress}
                    />
                    {/* <RoundEdgesButton textToDisplay="Update" onPress={onUpdateButtonPress} /> */}
                </View>
            </View>
            <Modal
                isVisible={showProfileUpdatedModal}
                onBackButtonPress={() => setShowProfileUpdatedModal(false)}
                onBackdropPress={() => setShowProfileUpdatedModal(false)}
            >
                <View style={styles.modalViewContainer}>
                    <View style={styles.profileUpdatedIconContainer} >
                        <MaterialIcons name="check-circle" size={80} color={appColor.appColorGreen} />
                        <Text style={styles.modalText} >
                            Profile Updated
                        </Text>
                    </View>
                    {/* <RoundEdgesButton textToDisplay="Continue" containerStyles={styles.modalButtonStyles} onPress={() => setShowProfileUpdatedModal(false)} /> */}
                    <MyButton
                        onPress={() => props.navigation.goBack()}
                        title="Continue"
                        myStyles={{ width: '90%' }}
                    />
                </View>
            </Modal>
            <RBSheet
                ref={imagePickerBottomSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType="fade"
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,.6)",
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        elevation: 10,
                        height: '30%'
                    }
                }}
            >
                <View style={styles.imagePickerRbSheetContainer} >
                    <Text style={styles.openWithText} >
                        Open with
                    </Text>
                    <TouchableOpacity style={styles.optionContainer} onPress={onOpenWithGalleryPress}>
                        <Octicons size={25} color="grey" name="image" />
                        <Text style={styles.optionText}>
                            Gallery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer} onPress={onOpenWithCameraPress} >
                        <Octicons size={25} color="grey" name="device-camera" />
                        <Text style={styles.optionText}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </ScrollView>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userData) => dispatch({
            type: 'SET_USER_DATA',
            payload: userData
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen)
