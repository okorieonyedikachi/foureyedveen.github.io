// import firebase from "firebase/app";
// import "firebase/firestore";

console.log(db);

db.collection('Memo-webApp').get().then((snapshot) => {
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
   console.log(doc.data())
  })
 });