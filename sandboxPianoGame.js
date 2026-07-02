/*******************************************************/
// setup()
/*******************************************************/
//note variables//
let C4;
let Csharp;
let D4;
let Dsharp;
let E4;
let F4;
let Fshard;
let G4;
let Gsharp;
let A4;
let Asharp;
let B4;
let C5;

//for loop excuse variable//
var lives = 3;

//note variables//
var cNotePress = 0;
var dNotePress = 0;
var eNotePress = 0;
var fNotePress = 0;
var gNotePress = 0;
var aNotePress = 0;
var bNotePress = 0;

GLOBAL_user = JSON.parse(localStorage.getItem("Data"));
console.log(GLOBAL_user);
user = JSON.parse(localStorage.getItem("username"));
console.log(user);
pianoScore = JSON.parse(localStorage.getItem("pianoscore"));
console.log(pianoScore);

//score variable//
var pianoScore = 0;
function preload() {
  hell = loadImage('images/HELL.jpg');
  heaven = loadImage('images/heaven.jpg');
  //note images//
  crotchetImg = loadImage('images/crotchet.png');
  trebleclefImg = loadImage('images/trebleclef.png');

  //notes sounds//
  C4 = loadSound("mp3Files/C.mp3");
  Csharp = loadSound("mp3Files/Csharp.mp3");
  D4 = loadSound("mp3Files/D.mp3");
  Dsharp = loadSound("mp3Files/Dsharp.mp3");
  E4 = loadSound("mp3Files/E.mp3");
  F4 = loadSound("mp3Files/F.mp3");
  Fsharp = loadSound("mp3Files/Fsharp.mp3");
  G4 = loadSound("mp3Files/G.mp3");
  Gsharp = loadSound("mp3Files/Gsharp.mp3");
  A4 = loadSound("mp3Files/A.mp3");
  Asharp = loadSound("mp3Files/Asharp.mp3");
  B4 = loadSound("mp3Files/B.mp3");
  C5 = loadSound("mp3Files/HighC.mp3");
}

function setup() {
  console.log("setup: ");
  cnv = new Canvas(1920, 941);
  alert("hello " + GLOBAL_user.displayName);
  //safe keeping code so it won't ruin my game. livesdisplay.text = "Lives: " + lives;//

  //image test//
  trebleclef = new Sprite(860, 300, 70, 70, 'k');
  trebleclef.image = (trebleclefImg);
  trebleclefImg.resize(400, 400);
  trebleclef.visible = true;

  crotchet = new Sprite(950, 310, 70, 70, 'k');
  crotchet.image = (crotchetImg);
  crotchet.visible = true;
  crotchetImg.resize(150, 300);

  cnoteLine = new Sprite(950, 465, 150, 6, 'k')
  cnoteLine.color = "black";

  //white note sprites//
  C4Rect = new Sprite(500, 750, 100, 300, 'k');
  C4Rect.color = 'white';

  D4Rect = new Sprite(600, 750, 100, 300, 'k');
  D4Rect.color = 'white';

  E4Rect = new Sprite(700, 750, 100, 300, 'k');
  E4Rect.color = 'white';

  F4Rect = new Sprite(800, 750, 100, 300, 'k');
  F4Rect.color = 'white';

  G4Rect = new Sprite(900, 750, 100, 300, 'k');
  G4Rect.color = 'white';

  A4Rect = new Sprite(1000, 750, 100, 300, 'k');
  A4Rect.color = 'white';

  B4Rect = new Sprite(1100, 750, 100, 300, 'k');
  B4Rect.color = 'white';

  C5Rect = new Sprite(1200, 750, 100, 300, 'k');
  C5Rect.color = 'white';

  //black note sprites//
  CsharpRect = new Sprite(550, 700, 50, 200, 'k');
  CsharpRect.color = 'black';

  DsharpRect = new Sprite(650, 700, 50, 200, 'k');
  DsharpRect.color = 'black';

  FsharpRect = new Sprite(850, 700, 50, 200, 'k');
  FsharpRect.color = 'black';

  GsharpRect = new Sprite(950, 700, 50, 200, 'k');
  GsharpRect.color = 'black';
  AsharpRect = new Sprite(1050, 700, 50, 200, 'k');
  AsharpRect.color = 'black';
}

function keyPressed() {
  //Crotchet locations//
  // C = 365//
  // D = 342//
  // E = 310// 
  // G = 250//

  //E presses//
  if (key === 'e') {
    if (crotchet.y == 310) {
      console.log(eNotePress = eNotePress + 1);
    }

    if (crotchet.y == 310) {
      pianoScore = pianoScore + 1;
    } else {
      lives--;
      pianoScore = pianoScore - 1;
    }
    //the console logs are so I can control which direction they go in// 
    if (eNotePress == 1 && crotchet.y == 310) {
      crotchet.y = 342;
    }

    if (eNotePress == 4 && crotchet.y == 310) {
      crotchet.y = 342;
    }

    if (eNotePress == 5 && crotchet.y == 310) {
      crotchet.y = 250;
    }

    if (eNotePress == 6 && crotchet.y == 310) {
      crotchet.y = 342;
    }

    if (eNotePress == 9 && crotchet.y == 310) {
      crotchet.y = 342;
    }

    if (eNotePress == 10 && crotchet.y == 310) {
      crotchet.y = 342;
    }
  }


  //D presses//
  if (key === 'w') {
    if (crotchet.y == 342) {
      console.log(dNotePress = dNotePress + 1);
    }

    if (crotchet.y == 342) {
      pianoScore = pianoScore + 1;
    } else {
      lives--;
      pianoScore = pianoScore - 1;
    }

    if (dNotePress == 1 && crotchet.y == 342) {
      crotchet.y = 365;
    }

    if (dNotePress == 2 && crotchet.y == 342) {
      crotchet.y = 310;
    }

    if (dNotePress == 5 && crotchet.y == 342) {
      crotchet.y = 310;
    }

    if (dNotePress == 6 && crotchet.y == 342) {
      crotchet.y = 365;
    }

    if (dNotePress == 7 && crotchet.y == 342) {
      crotchet.y = 310;
    }

    if (dNotePress == 8 && crotchet.y == 342) {
      crotchet.y = 310;
    }

    if (dNotePress == 9 && crotchet.y == 342) {
      crotchet.y = 365;
    }
  }

  //C presses//
  if (key === 'q') {
    if (crotchet.y == 365) {
      console.log(cNotePress = cNotePress + 1);
    }

    if (crotchet.y == 365) {
      pianoScore = pianoScore + 1;
    } else {
      lives--;
      pianoScore = pianoScore - 1;
    }

    if (cNotePress == 1 && crotchet.y == 365) {
      crotchet.y = 342;
    }

    if (cNotePress == 2 && crotchet.y == 365) {
      crotchet.y = 342;
    }
  }

  //G presses//
  if (key === 't') {
    if (crotchet.y == 250) {
      console.log(gNotePress = gNotePress + 1);
    }

    if (crotchet.y == 250) {
      pianoScore = pianoScore + 1;
    } else {
      lives--;
      pianoScore = pianoScore - 1;
    }

    if (gNotePress == 2 && crotchet.y == 250) {
      crotchet.y = 310;
    }
  }

  //unused note presses//
  if (key === 'r') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === 'y') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === 'u') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === 'i') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === '2') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === '3') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === '5') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === '6') {
    lives--;
    pianoScore = pianoScore - 1;
  }

  if (key === '7') {
    lives--;
    pianoScore = pianoScore - 1;
  }
  //white note key presses to make sound//
  if (key === 'q') {
    C4.play();
  }
  if (key === 'w') {
    D4.play();
  }
  if (key === 'e') {
    E4.play();
  }
  if (key === 'r') {
    F4.play();
  }
  if (key === 't') {
    G4.play();
  }
  if (key === 'y') {
    A4.play();
  }
  if (key === 'u') {
    B4.play();
  }
  if (key === 'i') {
    C5.play();
  }

  //black note key presses to make sound//
  if (key === '2') {
    Csharp.play();
  }
  if (key === '3') {
    Dsharp.play();
  }
  if (key === '5') {
    Fsharp.play();
  }
  if (key === '6') {
    Gsharp.play();
  }
  if (key === '7') {
    Asharp.play();
  }
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('pink')

  //lose screen//
  if (lives < 1) {
    background(hell);
    text("Game over! You're in hell now. Your score was: " + pianoScore, 600, 540);
    exit();
  }

  //win screen//
  if (cNotePress == 3) {
    background(heaven);
    text("Good job! You're in heaven now. Your score was: " + pianoScore, 600, 540);
  firebase.database().ref(`PianoPlay/users/${GLOBAL_user.uid}/pianoScore`).set(pianoScore);
    console.log(pianoScore);
    exit();
  }
  text("Score: " + pianoScore, 800, 50);
  textSize(30);
  text("inputs:", 350, 540);
  text("Q     2   W    3     E       R     5    T   6    Y    7     U         I", 475, 540);
  text("C    C#   D   D#   E       F    F#   G  G#  A   A#   B        C", 475, 590);


  //My beautiful for loop//
  for (i = 0; i < lives; i++) {
    rect(60 * i, 60, 55, 55);
  }

  //white note change colour if key presses//
  if (kb.pressing('q')) {
    C4Rect.color = 'grey';
  } if (kb.released('q')) {
    C4Rect.color = 'white';
  }

  if (kb.pressing('w')) {
    D4Rect.color = 'grey';
  } if (kb.released('w')) {
    D4Rect.color = 'white';
  }

  if (kb.pressing('e')) {
    E4Rect.color = 'grey';
  } if (kb.released('e')) {
    E4Rect.color = 'white';
  }

  if (kb.pressing('r')) {
    F4Rect.color = 'grey';
  } if (kb.released('r')) {
    F4Rect.color = 'white';
  }

  if (kb.pressing('t')) {
    G4Rect.color = 'grey';
  } if (kb.released('t')) {
    G4Rect.color = 'white';
  }

  if (kb.pressing('y')) {
    A4Rect.color = 'grey';
  } if (kb.released('y')) {
    A4Rect.color = 'white';
  }

  if (kb.pressing('u')) {
    B4Rect.color = 'grey';
  } if (kb.released('u')) {
    B4Rect.color = 'white';
  }

  if (kb.pressing('i')) {
    C5Rect.color = 'grey';
  } if (kb.released('i')) {
    C5Rect.color = 'white';
  }


  //Black note key change colour if key is pressed//
  if (kb.pressing('2')) {
    CsharpRect.color = 'grey';
  } if (kb.released('2')) {
    CsharpRect.color = 'black';
  }

  if (kb.pressing('3')) {
    DsharpRect.color = 'grey';
  } if (kb.released('3')) {
    DsharpRect.color = 'black';
  }

  if (kb.pressing('5')) {
    FsharpRect.color = 'grey';
  } if (kb.released('5')) {
    FsharpRect.color = 'black';
  }

  if (kb.pressing('6')) {
    GsharpRect.color = 'grey';
  } if (kb.released('6')) {
    GsharpRect.color = 'black';
  }

  if (kb.pressing('7')) {
    AsharpRect.color = 'grey';
  } if (kb.released('7')) {
    AsharpRect.color = 'black';
  }
}

/*******************************************************/
//  END OF APP
/*******************************************************/