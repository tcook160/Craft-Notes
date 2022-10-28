// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyZkiv10kkdt_EVvFVzXy_TVA9XodHskk",
    authDomain: "beer-reviews-a6706.firebaseapp.com",
    projectId: "beer-reviews-a6706",
    storageBucket: "beer-reviews-a6706.appspot.com",
    messagingSenderId: "83918663319",
    appId: "1:83918663319:web:0cde16a932042a923bc3d2",
    databaseURL: "https://beer-reviews-a6706.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Get the reviews from the firebase db 
db.collection("reviews").get().then((onSnapshot) => {
    onSnapshot.forEach((doc) => {        
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        let data = doc.data();
        let row  = `<tr>
                        <td>${data.brewery_name}</td>
                        <td>${data.beer_rating}</td>
                        <td>${data.date}</td>
                  </tr>`;
        let table = document.getElementById('myTable')
        table.innerHTML += row
    });
}).catch((error) => {
    console.log("Error getting document:", error);
});