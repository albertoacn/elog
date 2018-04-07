import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-uid-key";

export const onSignIn = (uid) => AsyncStorage.setItem(USER_KEY, uid);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const signedUID = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_KEY);
    if (value !== null) {
      return value;
    }
  } catch (error) {
  }
  return null;
};