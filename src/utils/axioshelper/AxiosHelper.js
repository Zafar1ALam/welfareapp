import AsyncStorage from '@react-native-async-storage/async-storage';


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
    }




}

