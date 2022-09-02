import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export const getAsyncUserData = async () => {


    const value = await AsyncStorage.getItem('user_session');
    try {
        if (value !== null) {
            // We have data!!
            const parseValue = JSON.parse(value)
            return parseValue



        }
    } catch (error) {

        alert(error)
        return {}
    }




}


export const axiosPost = async (url, body) => {
    console.log(url, body)

    return await axios.post(url, body)

}

export const axiosPut = async (url, body) => {
    console.log(url, body)

    return await axios.put(url, body)

}


