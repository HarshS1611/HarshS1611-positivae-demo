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

// update firestore settings
db.settings({ timestampsInSnapshots: true });


auth.onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");

  } else {
    console.log("logged out");
  }
});

const form = document.getElementById('prescriptions');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = form['doctorname'].value;
  let email = document.getElementById("docemail").value;
  let address = document.getElementById("address").value;
  let patientname = document.getElementById("patientname").value;
  let patientid = document.getElementById("patientid").value;
  let presc = document.getElementById("prescr").value;
  console.log(name, email, address , patientid);

  db.collection("doctors").doc('iG1FCrAy7T5FN6bFRDkV').collection("Prescriptions").add({
    doctorname: name,
    doctoremail: email,
    address: address,
    patientname: patientname,
    patientid: patientid,
    presc: presc

  });
  alert("Uploaded");

});