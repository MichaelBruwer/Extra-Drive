import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDJlAjvIxzYUy-sr86ua9uGQ1LiRFYPjwg',
	authDomain: 'drive-clonelive.firebaseapp.com',
	projectId: 'drive-clonelive',
	storageBucket: 'drive-clonelive.appspot.com',
	messagingSenderId: '566249519521',
	appId: '1:566249519521:web:743d77a27418b7a814b3e0',
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseapp.firestore();

export { auth, provider, storage, db };
