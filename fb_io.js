function helloWorld() {
  firebase.database().ref("/message").once("value", DO_THIS)
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: "Yo what's up!"
    }
  )
}
function DO_THIS(snapshot) {
  console.log(snapshot.val());
}








import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

let signInWithPopupResult;
let GLOBAL_user;

async function fb_login() {
  try {
    // Google/Facebook login popup
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    if (!user) {
      console.error("No user returned from authentication.");
      return;
    }

    // Save user globally if needed
    GLOBAL_user = user;

    const userData = {
      uid: user.uid,
      email: user.email || "",
      name: user.displayName || "",
      photoURL: user.photoURL || "",
      createdAt: serverTimestamp(),
    };

    // Save to Firestore
    await setDoc(
      doc(db, "users", user.uid),
      userData,
      { merge: true }
    );

    console.log("User data saved successfully!");
    console.log(userData);

  } catch (error) {
    console.error(
      "Error during authentication or database write:",
      error
    );
  }
}

document
  .getElementById("loginBtn")
  .addEventListener("click", fb_login);







//this is the callback function for the listener//
function fb_handleLogin(_user) {
  if (_user) {
    let user = prompt("What is your name?");
    console.log("Logged in user:", user, user.email);
    firebase.database().ref('/game1/users/' + user)
    GLOBAL_user = _user; //Save the user details object to a global variable
    const OUTPUT = document.getElementById("JavaScriptOutput");
    OUTPUT.innerHTML = "<h2>Choose your game!</h2><button onclick=\"location.href='sandboxPianoGame.html'\">Piano Play<button><button onclick=\"location.href='GeoDash.html'\">GeoDash<button>";
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
    const OUTPUT = document.getElementById("JavaScriptOutput");
    OUTPUT.innerHTML = "<h2>Login to continue</h2>";
  }
}


//makes a log in with google account pop up//
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; // Save the user details object to a global variable
    console.log("User has logged in")
  });
}

function fb_logout() {
  authenticationListener; // this line turns off the listener
  firebase.auth().signOut();
  console.log("logged out (hopefully)")
}



highscoreTable = {
  game1: {
    users: {
      Josh: 99999,
      Coby: 10000,
      Pasha: 67767675858477485,
      Lukas: 345,
    }
  },
  game2: {
    users: {
      Josh: 13,
      Coby: 14,
      Pasha: 7,
      Lukas: 3,
    }
  }
}
firebase.database().ref('/').set(highscoreTable)