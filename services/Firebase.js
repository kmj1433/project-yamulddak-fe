import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB9ryw3eFXt3WKaGg2bLIkKlw6pbq98iIk",
  authDomain: "project-yamulddak.firebaseapp.com",
  databaseURL: "https://project-yamulddak-default-rtdb.firebaseio.com",
  projectId: "project-yamulddak",
  storageBucket: "project-yamulddak.appspot.com",
  messagingSenderId: "343722567229",
  appId: "1:343722567229:ios:3b92d81a67fdd7daf72c54",
};

let app, auth;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  try {
    auth = getAuth(app);
    initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}

export { app, auth };
