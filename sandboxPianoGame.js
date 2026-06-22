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
//Grabs data from the local storage//
GLOBAL_user = JSON.parse(localStorage.getItem("Data"));
console.log(GLOBAL_user);

var score = 0;
function preload() {
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
  //score testing//
  if (key === 'q') {
  score = score + 1;
}
if (key === '2') {
  score = score + 1;
}
if (key === 'w') {
  score = score + 1;
}
if (key === '3') {
  score = score + 1;
}
if (key === 'e') {
  score = score + 1;
}
if (key === 'r') {
  score = score + 1;
}
if (key === '5') {
  score = score + 1;
}
if (key === 't') {
  score = score + 1;
}
if (key === '6') {
  score = score + 1;
}
if (key === 'y') {
  score = score + 1;
}
if (key === '7') {
  score = score + 1;
}
if (key === 'u') {
  score = score + 1;
}
if (key === 'i') {
  score = score + 1;
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
  text("Score: " + score, 50, 100);
  textSize(30);
  text("inputs:", 350, 540);
  text("Q     2   W    3     E       R     5    T   6    Y    7     U         I", 475, 540);
  text("C    C#   D   D#   E       F    F#   G  G#  A   A#   B        C", 475, 590);
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