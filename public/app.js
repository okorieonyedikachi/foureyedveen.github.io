// import firebase from "firebase/app";
// import "firebase/firestore";

// const e = require("express");

// console.log(db);

db.collection('Memo-webApp').get().then((snapshot) => {
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
   console.log(doc.data())
  })
 });

const memoList = document.getElementById("memo-list");
const form = document.getElementById("add-memo-form");

const button = document.getElementById("button");
button.addEventListener("submit", myButton);

function myButton() {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let desc = document.createElement("span");
}


// function renderMemo(doc) {
//   let li = document.createElement("li");
//   let name = document.createElement("span");
//   let desc = document.createElement("span");
//   let cross = document.createElement("div");
//   let edit = document.createElement("span");
//   li.setAttribute("data-id", doc.id);
//   name.textContent = doc.data().name;
//   desc.textContent = doc.data().desc;
//   cross.textContent = "X";
//   li.appendChild(name);
//   li.appendChild(desc);
//   memoList.appendChild(li);
// };


//saving data in firebase 
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   db.collection("Memo").add({
//     name:form.name.value,
//     desc: form.desc.value
//   });
//   form.name.value = "";
//   form.desc.value = "";
// });