import {initializeApp} from "firebase/app"
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "usadf-lsetf-project.firebaseapp.com",
    projectId: "usadf-lsetf-project",
    storageBucket: "usadf-lsetf-project.appspot.com",
    messagingSenderId: "187892377541",
    appId: "1:187892377541:web:9c036478cd3733fa5b0dac",
    measurementId: "G-G45S84DLLK"
  };

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
 
//       console.log(data.docs)

