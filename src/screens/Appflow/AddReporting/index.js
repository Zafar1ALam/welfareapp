import { StyleSheet, Text, View, ScrollView, StatusBar, ImageBackground, Image, TouchableOpacity, TouchableNativeFeedback, FlatList, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { appImages } from '../../../assets/utilities';
import { fontFamily } from '../../../constants/fonts';
import { TouchableRipple, HelperText } from 'react-native-paper';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { DateSelect, TimeSelect } from '../../../components/dateTimePicker';
import ImagePicker from 'react-native-image-crop-picker'
import Dialog from 'react-native-dialog';
import ImageView from 'react-native-image-viewing';
import { MyButton } from '../../../components/MyButton';
import moment from 'moment';
import RNFetchBlob from 'rn-fetch-blob'
import { baseUrl } from '../../../route';
import axios from 'axios';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native'
import LoaderButtonRnPaper from '../../../components/LoaderButton';
import ModelOneButton from '../../../components/modelonebutton/ModelOneButton';
import NetInfo from "@react-native-community/netinfo";


const AddReporting = props => {

  const [visibleAlertModal, setVisibleAlertModal] = useState(false);

  const showAlertModal = () => setVisibleAlertModal(true);

  const onDismissAlertModal = useCallback(() => { setVisibleAlertModal(false) }, [])


  const [visibleSaveDraftModal, setVisibleSaveDraftModal] = useState(false);

  const showSaveDraftModal = () => setVisibleSaveDraftModal(true);

  const onDismissSaveDraftModal = useCallback(() => { setVisibleSaveDraftModal(false) }, [])


  const isFocused = useIsFocused()
  const [border1, setBorder1] = useState('#bec5d1');
  const [border2, setBorder2] = useState('#bec5d1');
  const [border3, setBorder3] = useState('#bec5d1');
  const [border4, setBorder4] = useState('#bec5d1');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [touchedimage, setTouchedimage] = useState('');
  const [visible3, setIsVisible3] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  const [showTitleHelperText, setShowTitleHelperText] = useState(false)
  const [showDescriptionHelperText, setShowDescriptionHelperText] = useState(false)
  const [showLocationHelperText, setShowLocationHelperText] = useState(false)
  const [showDateHelperText, setShowDateHelperText] = useState(false)
  const [showTimeHelperText, setShowTimeHelperText] = useState(false)
  const [showImageUploadHelperText, setShowImageUploadHelperText] = useState(false)
  const [showFourImageOnlyHelperText, setShowFourImageOnlyHelperText] = useState(false)

  const [submitPressed, setSubmitPressed] = useState(false)

  const takePics = () => {
    setVisible(false)
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      compressImageMaxHeight: 400,
      compressImageMaxWidth: 400,
      cropping: true,
      multiple: true,
      maxFiles: 5
    })
      .then(response => {
        let tempArray = []
        response.map(image => {
          const filnename = image.path.substring(image.path.lastIndexOf('/') + 1)
          tempArray.push({
            name: 'images',
            filename: filnename,
            path: image.path,
            type: image.mime,
            data: RNFetchBlob.wrap(image.path)
          })
        })
        setImages(tempArray)

      }).catch(error => {
        // console.log(error)
      })

  }
  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('report_draft', JSON.stringify(value))
    } catch (e) {
      // console.log(e)
    }
  }
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('report_draft')
  //     if (value !== null) {
  //       const data = JSON.parse(value)
  //       setImages(data.images)
  //       setTitle(data.title)
  //       setDescription(data.description)
  //       setLocation(data.location)
  //       setDate(data.date)
  //       setTime(data.time)
  //     }
  //   } catch (e) {
  //     // console.log(e)
  //   }
  // }
  const removeData = async () => {
    try {
      console.log('remove called')
      await AsyncStorage.removeItem('report_draft')
    } catch (e) {
      // console.log(e)
    }
  }
  const writeInAsyncStorage = () => {
    if (images.length > 0 || title.length > 0 ||
      description.length > 0 || location.length > 0) {
      console.log('called on not empty')
      const data = {
        images: images,
        title: title,
        description: description,
        location: location,
        date: date,
        time: time,
      }
      storeData(data)
    }
  }
  const onSubmitButtonPress = async () => {
    if (title == '') {
      setShowTitleHelperText(true)
      setShowDescriptionHelperText(false)
      setShowLocationHelperText(false)
      setShowDateHelperText(false)
      setShowTimeHelperText(false)
      setShowImageUploadHelperText(false)
      setShowFourImageOnlyHelperText(false)
    } else if (description == '') {
      setShowTitleHelperText(false)
      setShowDescriptionHelperText(true)
      setShowLocationHelperText(false)
      setShowDateHelperText(false)
      setShowTimeHelperText(false)
      setShowImageUploadHelperText(false)
      setShowFourImageOnlyHelperText(false)
    } else if (location == '') {
      setShowTitleHelperText(false)
      setShowDescriptionHelperText(false)
      setShowLocationHelperText(true)
      setShowDateHelperText(false)
      setShowTimeHelperText(false)
      setShowImageUploadHelperText(false)
      setShowFourImageOnlyHelperText(false)
    } else if (images.length == 0) {
      setShowTitleHelperText(false)
      setShowDescriptionHelperText(false)
      setShowLocationHelperText(false)
      setShowDateHelperText(false)
      setShowTimeHelperText(false)
      setShowImageUploadHelperText(false)
      setShowFourImageOnlyHelperText(true)
    } else {
      // setIsLoading(true)
      //   setSubmitPressed(true)
      removeData()




      NetInfo.addEventListener(async state => {

        console.log("Is connected?", state.isConnected);
        if (state.isConnected) {
          await RNFetchBlob.fetch('POST',
            `${baseUrl}/upload-multiple-images`, {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
          }, images).then(async (response) => {
            console.log(response.data)
            setIsLoading(false)
            if (response.data) {
              console.log(response.data)

              const imagesForDb = JSON.parse(response.data)




              let b = {
                reportBy: props.user._id,
                title: title,


                eventCategory: 'Public',
                description: description,
                location: location,
                date: date,
                time: time,
                images: imagesForDb.images
              }

              console.log(b)


              await axios.post(`${baseUrl}/create-report`,
                b
              ).then(response => {
                setIsLoading(false)
                showAlertModal()

                console.log('hugfghjhgfdfghjbhvxdhhgfdujhgfujhbvc')
                console.log(response.data)

              }).catch(error => {
                setIsLoading(false)
                alert(error)
              })
            }
          }).catch((error) => {
            setIsLoading(false)
            console.log(error)
          })
        }
        else {
          // await AsyncStorage.setItem("draftReport1",
          // JSON.stringify("draftReport1"))


          const value = JSON.parse(await AsyncStorage.getItem("draftReport1") || '[]')
          console.log(value.length)
          if (value.length == 0) {
            const item = {
              images: images,
              reportBy: props.user._id,
              title: title,
              eventCategory: 'Public',
              description: description,
              location: location,
              date: date,
              time: time,
              randomId: 1
            }
            console.log('value')
            console.log(value)
            console.log(item)
            await AsyncStorage.setItem("draftReport1", JSON.stringify([item]))


              ;


          }
          else {
            console.log(value)
            var lastElement = value.slice(-1)[0];
            console.log('lastElement')
            console.log(lastElement.randomId)
            const item = {
              images: images,
              reportBy: props.user._id,
              title: title,
              eventCategory: 'Public',
              description: description,
              location: location,
              date: date,
              time: time,
              randomId: lastElement.randomId + 1
            }

            AsyncStorage.setItem("draftReport1", JSON.stringify([item, ...value]))

          }
          showSaveDraftModal()


        }
      }

      )
    }
  }



  useEffect(() => {
    if (isFocused) {
      //getData()
      console.log('focused')
    } else {
      console.log('not focused')
      if (!submitPressed)
        writeInAsyncStorage()
    }
  }, [isFocused])
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
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
              <Text style={styles.eventtxt}>Add Reporting</Text>
              <Text>{'   '}</Text>
            </View>
          </View>
          <View style={styles.allinputcontainer}>
            <View>
              <Text style={styles.labels}>Title</Text>
              <TextInput
                style={[styles.txtinput1, { borderColor: border1 }]}
                onFocus={() => setBorder1(appColor.appColorGreen)}
                onBlur={() => setBorder1('#bec5d1')}
                blurOnSubmit={true}
                //   value={title}
                onChangeText={setTitle}
              />
              {
                showTitleHelperText && (
                  <HelperText visible={showTitleHelperText} type="error" >
                    Please enter a title for your report
                  </HelperText>
                )
              }
            </View>
            <View style={styles.descview}>
              <Text style={styles.labels}>Description</Text>
              <TextInput
                style={[styles.txtinput2, { borderColor: border2 }]}
                onFocus={() => setBorder2(appColor.appColorGreen)}
                onBlur={() => setBorder2('#bec5d1')}
                blurOnSubmit={true}
                multiline={true}
                // value={description}
                onChangeText={setDescription}
              />
              {
                showDescriptionHelperText && (
                  <HelperText visible={showDescriptionHelperText} type="error" >
                    Please enter some description of your report
                  </HelperText>
                )
              }
            </View>
            <View style={styles.locview}>
              <Text style={styles.labels}>Location</Text>
              <TextInput
                style={[styles.txtinput1, { borderColor: border3 }]}
                onFocus={() => setBorder3(appColor.appColorGreen)}
                onBlur={() => setBorder3('#bec5d1')}
                blurOnSubmit={true}
                //  value={location}
                onChangeText={setLocation}
              />
              {
                showLocationHelperText && (
                  <HelperText visible={showLocationHelperText} type="error" >
                    Please enter a location for your report
                  </HelperText>
                )
              }
            </View>

            <View style={styles.datetimecont}>
              <View style={styles.datecont}>
                <Text style={styles.labels}>Date</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <TextInput
                    editable={false}
                    style={[styles.txtinput3, { borderColor: border4 }]}
                    value={moment(new Date(date)).format('DD-MM-YYYY')}
                  />
                </TouchableOpacity>
                <View style={styles.picker1}>
                  <DateSelect getDate={setDate} />
                </View>
                {
                  showDateHelperText && (
                    <HelperText visible={showDateHelperText} type="error" >
                      Please Select Date
                    </HelperText>
                  )
                }
              </View>

              <View style={styles.timecont}>
                <Text style={styles.labels}>Time</Text>
                <TextInput
                  editable={false}
                  style={[styles.txtinput3, { borderColor: border4 }]}
                  value={moment(time).format('hh:mm A')}
                />
                <View style={styles.picker1}>
                  <TimeSelect getDate={setTime} />
                </View>
              </View>
              {
                showTimeHelperText && (
                  <HelperText visible={showTimeHelperText} type="error" >
                    Please Select Time
                  </HelperText>
                )
              }
            </View>
            <View style={styles.uploadimgview}>
              <Text style={styles.labels}>Upload Images</Text>
              <View
                activeOpacity={0.6}
                style={styles.imagecontainer}
              >
                {images.length == 0 ? (
                  <TouchableOpacity onPress={() => setVisible(true)}>
                    <Image
                      source={appImages.uploadimage}
                      style={styles.uploadimagestyle}
                    />
                  </TouchableOpacity>
                ) : (
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity onPress={() => setVisible(true)}>
                          <ImageBackground
                            source={{ uri: item.path }}
                            imageStyle={{ borderRadius: responsiveWidth(3.6) }}
                            style={styles.newimagestyle}
                          />
                        </TouchableOpacity>
                      )
                    }}
                  />
                )}
              </View>
            </View>
            {
              showImageUploadHelperText && (
                <HelperText visible={showImageUploadHelperText} type="error" >
                  Please select images of the event
                </HelperText>
              )
            }
          </View>

          <Dialog.Container
            visible={visible}
            verticalButtons={true}
            onRequestClose={() => handleCancel()}
            contentStyle={{
              marginBottom: responsiveHeight(13),
              //   alignSelf: 'center',
            }}>
            <Dialog.Title
              style={{
                fontFamily: fontFamily.appTextBold,
                alignSelf: 'center',
                color: '#000',
              }}>
              Add Reporting Image
            </Dialog.Title>
            {/* <Dialog.Description>
            Take a photo or choose from your library
          </Dialog.Description> */}
            {images.length > 0 ? (
              <Dialog.Button
                style={{
                  fontFamily: fontFamily.appTextBold,
                  alignSelf: 'center',
                }}
                label="View Full Image"
                onPress={async () => {
                  await setTouchedimage(image),
                    await setIsVisible3(true),
                    await setVisible(false);
                }}
                color={appColor.appColorGreen}
              />
            ) : null}

            <Dialog.Button
              style={{
                fontFamily: fontFamily.appTextBold,
                alignSelf: 'center',
              }}
              label="Choose from Gallery"
              onPress={takePics}
              color={appColor.appColorGreen}
            />
            <Dialog.Button
              style={{
                fontFamily: fontFamily.appTextBold,
                alignSelf: 'center',
              }}
              label="Cancel"
              onPress={handleCancel}
              color={appColor.appColorGreen}
            />
          </Dialog.Container>
          {touchedimage === '' ? null : (
            <ImageView
              onRequestClose={() => {
                setIsVisible3(!visible3), setTouchedimage('');
              }}
              images={images}
              swipeToCloseEnabled={false}
              imageIndex={0}
              visible={visible3}
            />
          )}
        </View>

        {/* <MyButton myStyles={styles.fixedfooter} title={'Submit'} onPress={onSubmitButtonPress} /> */}
        <LoaderButtonRnPaper
          onPress={onSubmitButtonPress}
          loading={isLoading}
          label="Submit"
        />
      </ScrollView>

      <ModelOneButton
        visible={visibleAlertModal}
        onDismiss={onDismissAlertModal}
        text1="Success"
        text2="Report Sent Successfully"
        onPress={() => {
          onDismissAlertModal()
          props.navigation.goBack()
        }}
        buttonText="Ok" />

      <ModelOneButton
        visible={visibleSaveDraftModal}
        onDismiss={onDismissSaveDraftModal}
        text1="Your report is saved in drafts"
        text2="You can send later when you got internet connection"
        onPress={() => {
          onDismissSaveDraftModal()
          props.navigation.goBack()
        }}
        buttonText="Ok" />
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps)(AddReporting)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
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
  allinputcontainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  txtinput1: {
    backgroundColor: '#fff',
    fontSize: responsiveFontSize(2),
    // paddingVertical: responsiveHeight(0.1),
    marginTop: responsiveHeight(1),
    borderWidth: responsiveWidth(0.25),
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(3),
    fontFamily: fontFamily.appTextRegular,
  },
  labels: {
    marginLeft: responsiveWidth(2),
    fontFamily: fontFamily.appTextRegular,
    color: '#9ca3af',
  },
  txtinput2: {
    backgroundColor: '#fff',
    fontSize: responsiveFontSize(2),
    // paddingVertical: responsiveHeight(0.1),
    marginTop: responsiveHeight(1),
    borderWidth: responsiveWidth(0.25),
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(3),
    fontFamily: fontFamily.appTextRegular,
    textAlignVertical: 'top',
    height: responsiveHeight(22),

    // textAlignVertical: 'center',
    // ...Platform.select({
    //   ios: {
    //     lineHeight: responsiveHeight(22), // as same as height
    //   },
    //   android: {},
    // }),
  },
  descview: {
    marginTop: responsiveHeight(2),
  },
  uploadimgview: {
    marginTop: responsiveHeight(3),
  },
  locview: {
    marginTop: responsiveHeight(2),
  },
  datetimecont: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    justifyContent: 'space-between',
  },
  txtinput3: {
    backgroundColor: '#fff',
    fontSize: responsiveFontSize(2),
    // paddingVertical: responsiveHeight(0.1),
    marginTop: responsiveHeight(1),
    borderWidth: responsiveWidth(0.25),
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(3),
    fontFamily: fontFamily.appTextRegular,
    width: responsiveWidth(42),
    color: '#1f2937',
  },
  picker1: {
    marginTop: responsiveHeight(-7.7),
    marginLeft: responsiveWidth(1),
  },
  imagecontainer: {
    height: responsiveHeight(22.1),
    borderWidth: responsiveWidth(0.25),
    borderRadius: responsiveWidth(4),
    marginTop: responsiveHeight(1),
    borderColor: '#bec5d1',
    marginBottom: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadimagestyle: {
    resizeMode: 'contain',
    // backgroundColor: 'red',
    height: responsiveHeight(7),
    width: responsiveWidth(13),
    marginBottom: responsiveHeight(1),
  },
  newimagestyle: {
    height: responsiveHeight(21.8),
    width: responsiveWidth(90),
    resizeMode: 'contain',
  },
  fixedfooter: {
    marginBottom: responsiveHeight(2.5),
    marginTop: responsiveHeight(2),
  },
});
