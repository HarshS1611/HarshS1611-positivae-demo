
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB_iQ5XjUypbMoju5eDSbWqrx6acViYVVM",
    authDomain: "postivae-db0ec.firebaseapp.com",
    databaseURL: "https://postivae-db0ec.firebaseio.com",
    projectId: "postivae-db0ec",
    storageBucket: "postivae-db0ec.appspot.com",
    messagingSenderId: "238036476910",
    appId: "1:238036476910:web:0023f9ddc8b04cca8224ff",
    measurementId: "G-98V01C8KWF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
auth = firebase.auth();
const db = firebase.firestore();
//var storage = firebase.storage();
// update firestore settings
db.settings({ timestampsInSnapshots: true });


auth.onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
    setupUI(user);

  } else {
      console.log("logged out");
    setupUI();
  }
});





const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');



const setupUI = (user) => {
    if (user) {

        // toggle user UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
       
    } else {

        // toggle user elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
  
    }
};

// contact form

//const form = document.querySelector('#post-form');
//form.addEventListener('submit', (e) => {
 // e.preventDefault();
 // db.collection('contact').add({
 //     name: form.uname.value,
 //     email: form.uemail.value,
 //     subject: form.usubject.value,
  //    message: form.umessage.value
 // });
//  form.uname.value = '';
 // form.uemail.value = '';
 // form.usubject.value = '';
 // form.umessage.value = '';
//});