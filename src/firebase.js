import firebase from "firebase";

let config = {
  apiKey: "AIzaSyCyVtJVByttlqrgUXToRf7eGdT0kyVj3pY",
  authDomain: "flow-chart-77eaa.firebaseapp.com",
  projectId: "flow-chart-77eaa",
  databaseURL: "https://flow-chart-77eaa-default-rtdb.firebaseio.com/",
  storageBucket: "flow-chart-77eaa.appspot.com",
  messagingSenderId: "825276871835",
  appId: "1:825276871835:web:a8e4c174fba1778c32823e",
};

var fireDb = firebase.initializeApp(config);

export default fireDb.database().ref();
