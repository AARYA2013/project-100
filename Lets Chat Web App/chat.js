// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC4qFO9aF0unBc2gdA-U4FtiCh9Q6AijUw",
    authDomain: "project100-e4e69.firebaseapp.com",
    projectId: "project100-e4e69",
    storageBucket: "project100-e4e69.appspot.com",
    messagingSenderId: "515177698065",
    appId: "1:515177698065:web:167ef0e6aa4a838e7eb2b0",
    measurementId: "G-4TX93H8JFR"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name" , user_name);

    window.location = "chat_room.html"
}



