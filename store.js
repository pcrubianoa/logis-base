
import { Store, registerInDevtools } from "pullstate";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthStore = new Store({
  isLoggedIn: true,
});

registerInDevtools({AuthStore});

var isLoggedIn;
export async function signIn (email, password) {
  try {
    const response = await fetch("https://api.logis.com.co/v1/secure", {
      method: 'POST',
      body: JSON.stringify({
          'user': email,
          'pass': password,
          'application': 'bares'
      }),
  })
      .then(res => res.json())
      .then(data => {

        if (data.success) {
            this.isLoggedIn = true;
            storeData(data.user);
          } else {
            this.isLoggedIn = false;
          }
        });
      } catch {

      }
      return this.isLoggedIn;
}

export async function signOut () {
  removeData('user');
  this.isLoggedIn = false;
}

// localstorage
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // saving error
  }
};