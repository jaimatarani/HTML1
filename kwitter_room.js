
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB8PVAyjuQqn7asgq0LTjybxM7FNh3VAYc",
      authDomain: "classtest-da8c0.firebaseapp.com",
      databaseURL: "https://classtest-da8c0-default-rtdb.firebaseio.com",
      projectId: "classtest-da8c0",
      storageBucket: "classtest-da8c0.appspot.com",
      messagingSenderId: "126601634333",
      appId: "1:126601634333:web:b5dc32a12c6625e50a5cf4",
      measurementId: "G-CTTQL66YXH"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



function getData() { 
      firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }


getData();

function redirectToRommName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout() {

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

function addRoom() {
      
room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; 

}



