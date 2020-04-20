import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD0OMAXFej_pDVk40FONyby9QvX8RzRK-0",
	authDomain: "udemy-smoothies-4edd3.firebaseapp.com",
	databaseURL: "https://udemy-smoothies-4edd3.firebaseio.com",
	projectId: "udemy-smoothies-4edd3",
	storageBucket: "udemy-smoothies-4edd3.appspot.com",
	messagingSenderId: "586071568571",
	appId: "1:586071568571:web:d0a123b59204a2cdbf399e",
};

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
