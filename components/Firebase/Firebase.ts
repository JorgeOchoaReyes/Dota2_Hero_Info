import { initializeApp } from 'firebase/app';

let FirebaseApp; 

const firebaseConfig = {
    apiKey: "AIzaSyCrE5-e252le6grKAABQb0j66R58jTK510",
    authDomain: "dota2-bab31.firebaseapp.com",
    databaseURL: "https://dota2-bab31-default-rtdb.firebaseio.com",
    projectId: "dota2-bab31",
    storageBucket: "dota2-bab31.appspot.com",
    messagingSenderId: "623734083501",
    appId: "1:623734083501:web:f5aa57e5ae7398f6651b24",
    measurementId: "G-JM1LQPNCQR"
};

try{ 
    FirebaseApp = initializeApp(firebaseConfig);
    console.log("Connected to Firebase succesfully!");
} catch (err) {console.log(err)}; 

export default FirebaseApp; 