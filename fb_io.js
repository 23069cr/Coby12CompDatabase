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


let user = prompt("What is your name?");
console.log("user: " + user);
let score = 0;
console.log("score: " + score);
firebase.database().ref('/game1/users/' + user).set(
  score
);





var GLOBAL_user;
var authenticationListener;
//this is a listener that runs once//
function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}


//this is the callback function for the listener//
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; //Save the user details object to a global variable
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
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