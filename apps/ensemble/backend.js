import "./styles.css";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiTTX24mBjypGdel2ARBx0UUvFQEaRDf4",
  authDomain: "scale-navigator-ensemble.firebaseapp.com",
  databaseURL: "https://scale-navigator-ensemble-default-rtdb.firebaseio.com",
  projectId: "scale-navigator-ensemble",
  storageBucket: "scale-navigator-ensemble.appspot.com",
  messagingSenderId: "156837833740",
  appId: "1:156837833740:web:fb2ba47ae0ba8c8b8b9229",
  measurementId: "G-HFEMXL76TP"
};

let rooms = [];
let db;
let room = null;

let isHost = false;
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
}

const roomNameInput = document.getElementById("room-name-input");
document
  .getElementById("room-creation-form")
  .addEventListener("submit", (evt) => {
    evt.preventDefault();

    const name = roomNameInput.value;

    if (name && db) {
      db.ref(`/rooms`).push({ name });
    }
  });

db.ref("/rooms").on("value", (evt) => {
  const children = evt.val();
  rooms = Object.keys(children).map((key) => ({
    name: children[key].name,
    key
  }));

  updateRoomOptions();
  console.log(rooms);
});

function updateRoomOptions() {
  const options = rooms
    .map(({ key, name }) => `<option value=${key}>${name}</option>`)
    .join("\n");
  document.getElementById("available-rooms").innerHTML = options;
}

function updateValue() {
  document.getElementById("value").innerHTML = value;
}

function writeValueToFirebase() {
  if (room) {
    db.ref(`/values/${room}`).set({ value });
  }
}
document
  .getElementById("room-select-form")
  .addEventListener("submit", (evt) => {
    evt.preventDefault();
    room = document.getElementById("available-rooms").value;

    db.ref(`/values/${room}`).on("value", (evt) => {
      if (!isHost) {
        console.log(evt.val());
        value = evt.val().value;
        updateValue();
      }
    });
  });

let value = 0;

document.getElementById("host-select").addEventListener("change", (evt) => {
  isHost = evt.target.checked;
  console.log(isHost);
});

setInterval(() => {
  if (isHost) {
    value = Math.floor(Math.random() * 1000);

    updateValue();
    writeValueToFirebase();
  }
}, 1000);
