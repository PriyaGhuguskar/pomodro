import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDSB8kzCiKd5OaQHfIY_m_n49eMT4yU3tI",
    authDomain: "timer-2d426.firebaseapp.com",
    databaseURL: "https://timer-2d426-default-rtdb.firebaseio.com",
    projectId: "timer-2d426",
    storageBucket: "timer-2d426.appspot.com",
    messagingSenderId: "262921414724",
    appId: "1:262921414724:web:e2ef31e9e6a1e42b34b411",
    measurementId: "G-GLTQ2GHMJY",
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);


