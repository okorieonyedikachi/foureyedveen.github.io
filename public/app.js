const memoList = document.querySelector("#memo-list");
const form = document.querySelector("#add-memo-form");

db.collection('Memo-webApp').get().then((snapshot) => {
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
   console.log(doc.data())
  })
 });

//saving data
form.addEventListener("submit", e => {
  //read this
  e.preventDefault();
  db.collection("memo").add({
   name: form.name.value,
   desc: form.desc.value
  }); 
  form.name.value = "";
  form.desc.value = "";
  alert("New memo added")
 });
