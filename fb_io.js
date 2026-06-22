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







var GLOBAL_user;
var authenticationListener;
//this is a listener that runs once//
function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}






//this is the callback function for the listener//
async function fb_handleLogin(_user) {
  if (_user) {
    let user = prompt("What is your name?");
    console.log("Logged in user:", user);
    firebase.database().ref('/game1/users/' + user)
    GLOBAL_user = _user; //Save the user details object to a global variable
        await firebase.database().ref('PianoPlay/users/' + GLOBAL_user.uid).update(
            {
                name: GLOBAL_user.displayName,
                email: GLOBAL_user.email,
                profile: GLOBAL_user.photoURL
            }
    );
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
  PianoPlay: {
    users: {
      Josh: 99999,
      Coby: 10000,
      Pasha: 67767675858477485,
      Lukas: 345,
    }
  },
  GeoDash: {
    users: {
      Josh: 13,
      Coby: 14,
      Pasha: 7,
      Lukas: 3,
    }
  }
}
firebase.database().ref('/').set(highscoreTable)