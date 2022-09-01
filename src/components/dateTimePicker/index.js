import {Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
// import { buttonColor, textColor } from '../../constants/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {styles} from './style';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';

const DateSelect = props => {
  // let Myvar = date.toString();
  const {iconStyle, labelstyle} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(
    props.isVisible || false,
  );
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(props.initialDate);
  }, [props]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDatePickerVisibility(false);
    setDate(moment(date).format('DD-MM-YYYY'));
    props.getDate(date);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        // props.style,
        {
          // backgroundColor: 'red',
          // alignSelf: 'center',
          width: responsiveWidth(40),
          alignItems: 'center',
          height: responsiveHeight(7),
          // paddingVertical: responsiveHeight(3),
        },
      ]}
      onPress={showDatePicker}>
      {/* <Text style={labelstyle}>
        {date != '' ? date : 'Select Date of Birth   '}
      </Text> */}
      <DateTimePickerModal
        isVisible={props.isVisible || isDatePickerVisible}
        mode="date"
        // date={new Date()}
        // value={date}
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{}}
        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
        ref={props.ref}
      />
      {/* <Text> </Text> */}
      {console.log(isDatePickerVisible)}
      {/* {console.log(Myvar)} */}
    </TouchableOpacity>
  );
};
const DaySelect = props => {
  // let Myvar = date.toString();
  const {iconStyle, labelstyle} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(
    props.isVisible || false,
  );
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(props.initialDate);
  }, [props]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDatePickerVisibility(false);
    setDate(moment(date).format('DD-MM-YYYY'));
    props.getDate(moment(date).format('DD'));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        // props.style,
        {
          // backgroundColor: 'red',
          // alignSelf: 'center',
          width: responsiveWidth(20),
          alignItems: 'center',
          height: responsiveHeight(8),
          // paddingVertical: responsiveHeight(3),
        },
      ]}
      onPress={showDatePicker}>
      {/* <Text style={labelstyle}>
        {date != '' ? date : 'Select Date of Birth   '}
      </Text> */}
      <DateTimePickerModal
        isVisible={props.isVisible || isDatePickerVisible}
        mode="date"
        // date={new Date()}
        // value={date}
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{}}
        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
        ref={props.ref}
      />
      <Text> </Text>
      {console.log(isDatePickerVisible)}
      {/* {console.log(Myvar)} */}
    </TouchableOpacity>
  );
};
const MonthSelect = props => {
  // let Myvar = date.toString();
  const {iconStyle, labelstyle} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(
    props.isVisible || false,
  );
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(props.initialDate);
  }, [props]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDatePickerVisibility(false);
    setDate(moment(date).format('DD-MM-YYYY'));
    props.getDate(moment(date).format('MM'));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        // props.style,
        {
          backgroundColor: 'red',
          // alignSelf: 'center',
          width: responsiveWidth(20),
          alignItems: 'center',
          height: responsiveHeight(8),
          // paddingVertical: responsiveHeight(3),
        },
      ]}
      onPress={showDatePicker}>
      {/* <Text style={labelstyle}>
        {date != '' ? date : 'Select Date of Birth   '}
      </Text> */}
      <DateTimePickerModal
        isVisible={props.isVisible || isDatePickerVisible}
        mode="date"
        // date={new Date()}
        // value={date}
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{}}
        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
        ref={props.ref}
      />
      <Text> </Text>
      {console.log(isDatePickerVisible)}
      {/* {console.log(Myvar)} */}
    </TouchableOpacity>
  );
};

const TimeSelect = props => {
  const {iconStyle, TextStyle} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(props.initialDate);
  }, [props]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(date).format('hh:mm A'));
    props.getDate(date);
    hideDatePicker();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        // props.style,
        {
          // backgroundColor: 'red',
          // alignSelf: 'center',
          width: responsiveWidth(40),
          alignItems: 'center',
          height: responsiveHeight(7),
          // paddingVertical: responsiveHeight(3),
        },
      ]}
      onPress={showDatePicker}>
      <Text style={TextStyle}>{date != '' ? date : props.placeHolder}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        // date={new Date()}
        // value={date}

        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{}}
        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
      />
    </TouchableOpacity>
  );
};

export {DateSelect, TimeSelect, DaySelect, MonthSelect};
