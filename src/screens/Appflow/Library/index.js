import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { appColor } from '../../../constants/colors';
import { appImages } from '../../../assets/utilities';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import RightArrow from 'react-native-vector-icons/MaterialIcons';
import { fontFamily } from '../../../constants/fonts';
import { TouchableRipple } from 'react-native-paper';
import Plus from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { baseUrl, ImageUrl } from '../../../route';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import STYLES from '../../../STYLES/STYLES';
import HeaderGoBackCenterText from '../../../components/headergobackcentertext/HeaderGoBackCenterText';
const Library = (props) => {
  const [secondlist, setSecondlist] = useState([
    // {
    //   id: 1,
    // },
    // {
    //   id: 2,
    // },
    // {
    //   id: 3,
    // },
    // {
    //   id: 4,
    // },
    // {
    //   id: 5,
    // },
    // {
    //   id: 6,
    // },
    // {
    //   id: 7,
    // },
    // {
    //   id: 8,
    // },
    // {
    //   id: 9,
    // },
    // {
    //   id: 10,
    // },
    // {
    //   id: 11,
    // },
  ]);




  const getLibraryApi = async () => {
    await axios.post(baseUrl + "/get-library-items")
      .then(response => {

        console.log(response.data)
        setSecondlist(response.data)
      })
      .catch(error => {

        alert(error)
        console.log('w');
      });
  }



  useEffect(() => {
    getLibraryApi()
  }, [])



  const downloadPdf = (url) => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = url;
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/file' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'file',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Pdf file Downloaded Successfully.');
      });
  };








  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
      /[^.]+$/.exec(filename) : undefined;
  };


  const Secondrenderitem = ({ item, index }) => {
    // <Image source={appImages.caroimage} style={styles.imglist2} />


    return (
      <View style={{
        height: 110, backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: '5%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        elevation: 1,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        flexDirection: 'row',
        borderRadius: 8
      }}>

        <View style={{
          height: '100%', width: '24%',
          //backgroundColor: 'green',
          borderRadius: 8
        }}>
          <Image source={appImages.caroimage}
            style={{
              height: '100%',

              width: '100%',
              borderRadius: 8
            }} />

        </View>
        <View style={{
          alignItems: 'flex-start', flex: 1,
          justifyContent: "space-evenly",
          marginHorizontal: '5%'
        }}>
          <View>
            <Text style={STYLES.fontSize16_1F2937_appTextSemiBold}>{item.name}</Text>
          </View>
          {/* 
          <View>
            <Text STYLE={styles.fontSize10_6B7280_appTextMedium}>Lorem ipsum dolor sit amet, consetetur.</Text>
          </View> */}


        </View>

        <TouchableRipple style={{
          justifyContent: 'center',
          alignSelf: 'center'
        }}
          onPress={() => {
            downloadPdf(ImageUrl + "/" + item.path)
          }}
        >

          <FontAwesome name="download" color={'#32B768'} size={24} />
        </TouchableRipple>







      </View >
    );
  };

  return (
    <View style={STYLES.container}>
      <StatusBar hidden={true} />
      <View style={{

      }}>
        <HeaderGoBackCenterText text="Library"
          onPress={() => {
            props.navigation.goBack()
          }} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={secondlist}
        renderItem={Secondrenderitem}
        contentContainerStyle={{
          marginTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(3),
        }}
      />
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  secondheader: {
    width: responsiveWidth(88),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    flexWrap: 'wrap',
  },
  txtstyle: {
    color: '#1f2937',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
    marginRight: responsiveWidth(1),
  },
  txtstyle2: {
    color: '#1f2937',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
  },

  eventtxt: {
    color: '#1f2937',
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.2),
    marginLeft: responsiveWidth(12),
  },
  arrowback: {
    fontSize: responsiveFontSize(2),
    // backgroundColor: 'red',
    color: '#89909e',
  },
  singleseconditem: {
    width: responsiveWidth(90),
    height: responsiveHeight(12.5),
    marginBottom: responsiveHeight(2),
    backgroundColor: appColor.appColorWhite,
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.1),
    borderColor: 'lightgray',
    borderTopWidth: responsiveWidth(0.2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2.5),
  },
  imglist2: {
    resizeMode: 'cover',
    height: responsiveHeight(9),
    width: responsiveWidth(17),
    borderRadius: responsiveWidth(1.5),
  },
  secondtitlecont: {
    marginLeft: responsiveWidth(3),
    height: responsiveHeight(9),
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingBottom: responsiveHeight(0.5),
  },
  secondlisttitle: {
    fontFamily: fontFamily.appTextRegular,
    color: '#1f2937',
    fontSize: responsiveFontSize(2.2),
  },
  calender: {
    resizeMode: 'contain',
    // backgroundColor: 'red',
    width: responsiveWidth(5),
    height: responsiveWidth(5),
  },
  datestyle: {
    color: '#6b7280',
    fontFamily: fontFamily.appTextRegular,
    // marginLeft: responsiveWidth(2.5),
    fontSize: responsiveFontSize(1.5),
    width: responsiveWidth(35),
    // backgroundColor: 'red',
  },
  detailbutton: {
    position: 'absolute',
    right: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
    // height: responsiveHeight(7),
    // width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    backgroundColor: appColor.appColorGreen,
  },
  detailbuttontxt: {
    // backgroundColor: appColor.appColorGreen,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3.5),
    borderRadius: responsiveWidth(2.5),
    color: appColor.appColorWhite,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.7),
  },
});
