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


    } else {
        console.log("logged out");

    }
});
const form = document.querySelector('#post-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(12)
    db.collection('dr2reviews').add({
        name: form.uname.value,
        message: form.umessage.value
    });
    form.uname.value = '';
    form.umessage.value = '';
    alert("Your Review have been saved");
    window.location.href = 'https://positivae.com/doctor%20list/newdoc.html';

});

