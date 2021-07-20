import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserData = async (key, value) =>{
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

export const getUserData = async (key) =>{
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          // We have data!!
          return value
        }
      } catch (error) {
        // Error retrieving data
        console.log('Error retrieving data with key ' + key)
      }
}