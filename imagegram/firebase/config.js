import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAk6K3p20TlYlq4LCC6dqlnxblUTL7-K-8",
  authDomain: "tiqu-firegram.firebaseapp.com",
  projectId: "tiqu-firegram",
  storageBucket: "tiqu-firegram.appspot.com",
  messagingSenderId: "988132657697",
  appId: "1:988132657697:web:d817b960aa2f11e6593160",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const storage = firebase.storage();

export default storage;
