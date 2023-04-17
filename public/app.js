const memoList = document.querySelector("#memo-list");
const form = document.querySelector("#add-memo-form");
const button = document.querySelector("#button")
let isEdit = false;


// button.innerHTML = isEdit ? "Edit Item" : "Add Item"

function renderMemo(doc) {
  //diff elements
  let li = document.createElement("li");
  let name = document.createElement("p");
  let desc = document.createElement("span");
  let cross = document.createElement("div");
  let edit = document.createElement("span");
 // This line of code below attaches "data-id" to add the Auto ID   firebase will generate.
 // we are doing this so that in future we can easily get a particular doc and manipulate it.
  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  desc.textContent = doc.data().desc;
  cross.textContent = "X";

  li.appendChild(name);
  li.appendChild(desc);
  li.appendChild(cross);
  memoList.appendChild(li);
  
  let isClicked = false;
  li.addEventListener("click", function() {
    isClicked = !isClicked

    // Regular Expression to find text inside p tag and span tag
    const str = li.innerHTML
    const pRegex = /<p>(.*?)<\/p>/;
    const pMatch = str.match(pRegex);
    const pText = pMatch ? pMatch[1] : null;
    
    const spanRegex = /<span>(.*?)<\/span>/;
    const spanMatch = str.match(spanRegex);
    const spanText = spanMatch ? spanMatch[1] : null;
    
    // console.log("pText:", pText);
    // console.log("spanText:", spanText);

    form.name.value = pText;
    form.desc.value = spanText;
  });

  //deleting data
 cross.addEventListener("click", e => {
  e.stopPropagation();
  let id = e.target.parentElement.getAttribute("data-id");
 //find a doc on the dom
  db.collection("Memo-webApp")
  .doc(id)
  .delete();
  });
}


db.collection('Memo-webApp').get().then((snapshot) => {
  // console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
  //  console.log(doc.data())
  })
  
});

//real time listener
db.collection("Memo-webApp")
.orderBy("desc")
.onSnapshot(snapshot => {
// We also rendered data in real-time using
 let changes = snapshot.docChanges();
 changes.forEach(change => {
  if (change.type == "added") {
  renderMemo(change.doc);
 } else if (change.type == "removed") {
 let li = memoList.querySelector("[data-id=" + change.doc.id + "]");
 memoList.removeChild(li);
  }
 });
});

// toggle Add-item btn and Edit-btn
 const editBtn = () => {
  isEdit = true;
  button.innerHTML = isEdit ? "Edit Item" : "Add Item";
 }
 button.innerHTML = isEdit ? "Edit Item" : "Add Item";

//saving data
form.addEventListener("submit", e => {
  //read this
  e.preventDefault();
  
  if (form.name.value.length > 0 && form.desc.value.length) {
    db.collection("Memo-webApp").add({
      name: form.name.value,
      desc: form.desc.value
     }); 
     form.name.value = "";
     form.desc.value = "";
     isEdit = false;
     alert("New memo added")
  }
  else {
    alert("Inputs can not be empty, fill them and try again :(")

  }
  
 });

 //getting data
 db.collection('Memo-webApp').get().then((snapshot) => {
  // console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
   })
  
 });

 

 