const darkMode = $(".go-dark")
const button = $("button")

button.on("click", function(){
  darkMode.toggleClass("dark-mode")
})

//my map//

        const map = L.map('map').setView([39.091077, -94.564205],
           13);                             
 const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

var marker = L.marker([39.091077,-94.564205]).addTo(map);

var circle = L.circle([39.10, -94.56], {radius: 1000}).addTo(map);


//firebase setup//

var firebaseConfig = {
  apiKey: "AIzaSyDCIF71NFPEfdyPkqY40hMQm-JaCfwjP7o",
  authDomain: "my-personal-webpage-2d21f.firebaseapp.com",
  databaseURL: "https://my-personal-webpage-2d21f-default-rtdb.firebaseio.com",
  projectId: "my-personal-webpage-2d21f",
  storageBucket: "my-personal-webpage-2d21f.appspot.com",
  messagingSenderId: "138878482930",
  appId: "1:138878482930:web:f094c242f1007bcc54136b",
  measurementId: "G-W0RZ3FT7Z4",
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("messages");

document.getElementById("get-in-touch").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");
  
   saveMessage(name, email, message);

  document.querySelector(".sent-message").style.display = "block";

  setTimeout(function () {
    document.querySelector(".sent-message").style.display = "none";
  }, 3000);

  document.getElementById("get-in-touch").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
