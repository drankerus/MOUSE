// harta gradinii - array
const EMPTY    = 0;
const CUCUMBER = 1;
const MELON    = 2;
const TOMATO   = 3;
const RAT = 4;

const CUCUMBER_PRICE = 10;
const MELON_PRICE    = 20;
const TOMATO_PRICE   = 30;
var rat_dir = "right"
var money = 100;

var rat_r = 0
var rat_c = 0


// calulele de tip Number
var garden = [        // index
    [4,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];
//schimbarea directie aleatorie
rat_dir = randomDirection();
function moveRatright() {
  if(rat_c < 9){
    garden[rat_r][rat_c] = EMPTY;
    garden[rat_r][++rat_c] = RAT;
  show()}

}
function moveRatleft() {
  garden[rat_r][rat_c] = EMPTY
  garden[rat_r][--rat_c] = RAT;
  show()
}
function moveRattop() {
  garden[rat_r][rat_c] = EMPTY
  garden[--rat_r][rat_c] = RAT;
  show()
}
function moveRatdown() {
  garden[rat_r][rat_c] = EMPTY
  garden[++rat_r][rat_c] = RAT;
  show()
}
function moveRattopleft() {
  garden[rat_r][rat_c] = EMPTY
  garden[--rat_r][--rat_c] = RAT;
  show()
}
function moveRattopright() {
  garden[rat_r][rat_c] = EMPTY
  garden[--rat_r][++rat_c] = RAT;
  show()
}
function moveRatbottomleft() {
  garden[rat_r][rat_c] = EMPTY
  garden[++rat_r][--rat_c] = RAT;
  show()
}
function moveRatbottomright() {
  garden[rat_r][rat_c] = EMPTY
  garden[++rat_r][++rat_c] = RAT;
  show()
}
function moveDirection() {
  var direction = ["right","down","top","left","bottomleft"]///////////////////////////////////////////
}
function moveRat() {
  if(rat_dir == "right"){
    moveRatright()
  }
}
setInterval(moveRat, 000)

function show(){
  var div = document.getElementById('garden');
  div.innerHTML = '';
for (var r = 0; r<=9; r++) {
  for(var c=0; c<=9; c++){
    if (garden[r][c] == MELON ){
      div.innerHTML +=('<div class="melon" onclick="gather(MELON,'+r+','+c+');"></div>')
    }if (garden[r][c] == TOMATO) {
      div.innerHTML +=('<div class="tomato" onclick="gather(TOMATO,'+r+','+c+');"></div>')
    }if (garden[r][c] == CUCUMBER) {
      div.innerHTML +=('<div class="cucumber" onclick="gather(CUCUMBER,'+r+','+c+');"></div>')
    }if (garden[r][c] == EMPTY) {
      div.innerHTML +=('<div class="empty" onclick="gather(EMPTY,'+r+','+c+');"></div>')
    }if(garden[r][c] == RAT){
      div.innerHTML +=('<div class="rat" onclick="gather(RAT, '+r+', '+c+');"></div>')
    }

  }
  }

  function showCoin(){
  var divCoin = document.getElementById('coin');
  divCoin.innerHTML = '';
  divCoin.innerHTML += ('<div class="money" ></div> ');
}
showCoin();
var money_div = document.getElementById('showMoney');
    money_div.innerHTML = money;
}

function gather(vegetable, r,c){
  if (vegetable == MELON) {
    garden[r][c] = EMPTY;
    money = money+MELON_PRICE ;
      show();
  }if (vegetable == TOMATO) {
    garden[r][c] = EMPTY;
    money = money+TOMATO_PRICE
      show();
  }if (vegetable == CUCUMBER) {
    garden[r][c] = EMPTY;
    money = money+CUCUMBER_PRICE
      show();
  }if (vegetable == EMPTY) {
    garden[r][c] = prompt("Ce Plantam???")
    money = money - CUCUMBER_PRICE*0.5
    show();
  }if (vegetable == RAT) {
    garden[r][c] = EMPTY;
    money = money-30;
      show();}
  }


show();



1.plasati o capcana daca nimereste in capcana
