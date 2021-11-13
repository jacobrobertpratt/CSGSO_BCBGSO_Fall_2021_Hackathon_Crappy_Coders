'use strict';

//var dealerCard = 0
/*function getDealerWinChance() {
=
}*/

/*function findAverageHit() {
    var averageHit = totalOfCards / cardsLeft() 
    return averageHit
}*/

/*function shouldHit() {
    if (yourCard + averageHit) <= 21{
  console.log("Hit")
  }
  else{
  console.log("Don't Hit")
}
}*/

var numDecks = 1;
var numCards = 52
var deckArray = [numDecks];
for (var i = 0; i < 51; i++) {
    deckArray.push(numDecks);
}



function dealerShuffled() {
    deckArray = []
    for (var i = 0; i < 51; i++) {
        deckArray.push(numDecks);
    }
}

function addDeck() {

    if (numDecks < 8) {
        numDecks++;
    } else {
        numDecks = 1;
    }

    for (var i = 0; i < 52; i++) {
        deckArray[i] = numDecks;
    }

    cardsLeft();
    for (var i = 0; i < 52; i++) {
        updateCard(i + 1)
    }
}

function totalOfCards() {
    var temp = 0;
    for (var i = 0; i < 52; i++) {

    }
}

function cardsLeft() {
    numCards = 0;
    for (var i = 0; i < 52; i++) {
        numCards += deckArray[i];
    }
}


function card1() { if (deckArray[0] > 0) { deckArray[0]--; } updateCard(1); }
function card2() { if (deckArray[1] > 0) { deckArray[1]--; } updateCard(2); }
function card3() { if (deckArray[2] > 0) { deckArray[2]--; } updateCard(3); }
function card4() { if (deckArray[3] > 0) { deckArray[3]--; } updateCard(4); }
function card5() { if (deckArray[4] > 0) { deckArray[4]--; } updateCard(5); }
function card6() { if (deckArray[5] > 0) { deckArray[5]--; } updateCard(6); }
function card7() { if (deckArray[6] > 0) { deckArray[6]--; } updateCard(7); }
function card8() { if (deckArray[7] > 0) { deckArray[7]--; } updateCard(8); }
function card9() { if (deckArray[8] > 0) { deckArray[8]--; } updateCard(9); }
function card10() { if (deckArray[9] > 0) { deckArray[9]--; } updateCard(10); }
function card11() { if (deckArray[10] > 0) { deckArray[10]--; } updateCard(11); }
function card12() { if (deckArray[11] > 0) { deckArray[11]--; } updateCard(12); }
function card13() { if (deckArray[12] > 0) { deckArray[12]--; } updateCard(13); }
function card14() { if (deckArray[13] > 0) { deckArray[13]--; } updateCard(14); }
function card15() { if (deckArray[14] > 0) { deckArray[14]--; } updateCard(15); }
function card16() { if (deckArray[15] > 0) { deckArray[15]--; } updateCard(16); }
function card17() { if (deckArray[16] > 0) { deckArray[16]--; } updateCard(17); }
function card18() { if (deckArray[17] > 0) { deckArray[17]--; } updateCard(18); }
function card19() { if (deckArray[18] > 0) { deckArray[18]--; } updateCard(19); }
function card20() { if (deckArray[19] > 0) { deckArray[19]--; } updateCard(20); }
function card21() { if (deckArray[20] > 0) { deckArray[20]--; } updateCard(21); }
function card22() { if (deckArray[21] > 0) { deckArray[21]--; } updateCard(22); }
function card23() { if (deckArray[22] > 0) { deckArray[22]--; } updateCard(23); }
function card24() { if (deckArray[23] > 0) { deckArray[23]--; } updateCard(24); }
function card25() { if (deckArray[24] > 0) { deckArray[24]--; } updateCard(25); }
function card26() { if (deckArray[25] > 0) { deckArray[25]--; } updateCard(26); }
function card27() { if (deckArray[26] > 0) { deckArray[26]--; } updateCard(27); }
function card28() { if (deckArray[27] > 0) { deckArray[27]--; } updateCard(28); }
function card29() { if (deckArray[28] > 0) { deckArray[28]--; } updateCard(29); }
function card30() { if (deckArray[29] > 0) { deckArray[29]--; } updateCard(30); }
function card31() { if (deckArray[30] > 0) { deckArray[30]--; } updateCard(31); }
function card32() { if (deckArray[31] > 0) { deckArray[31]--; } updateCard(32); }
function card33() { if (deckArray[32] > 0) { deckArray[32]--; } updateCard(33); }
function card34() { if (deckArray[33] > 0) { deckArray[33]--; } updateCard(34); }
function card35() { if (deckArray[34] > 0) { deckArray[34]--; } updateCard(35); }
function card36() { if (deckArray[35] > 0) { deckArray[35]--; } updateCard(36); }
function card37() { if (deckArray[36] > 0) { deckArray[36]--; } updateCard(37); }
function card38() { if (deckArray[37] > 0) { deckArray[37]--; } updateCard(38); }
function card39() { if (deckArray[38] > 0) { deckArray[38]--; } updateCard(39); }
function card40() { if (deckArray[39] > 0) { deckArray[39]--; } updateCard(40); }
function card41() { if (deckArray[40] > 0) { deckArray[40]--; } updateCard(41); }
function card42() { if (deckArray[41] > 0) { deckArray[41]--; } updateCard(42); }
function card43() { if (deckArray[42] > 0) { deckArray[42]--; } updateCard(43); }
function card44() { if (deckArray[43] > 0) { deckArray[43]--; } updateCard(44); }
function card45() { if (deckArray[44] > 0) { deckArray[44]--; } updateCard(45); }
function card46() { if (deckArray[45] > 0) { deckArray[45]--; } updateCard(46); }
function card47() { if (deckArray[46] > 0) { deckArray[46]--; } updateCard(47); }
function card48() { if (deckArray[47] > 0) { deckArray[47]--; } updateCard(48); }
function card49() { if (deckArray[48] > 0) { deckArray[48]--; } updateCard(49); }
function card50() { if (deckArray[49] > 0) { deckArray[49]--; } updateCard(50); }
function card51() { if (deckArray[50] > 0) { deckArray[50]--; } updateCard(51); }
function card52() { if (deckArray[51] > 0) { deckArray[51]--; } updateCard(52); }



function updateCard(a) {
    switch (a) {
        case 1:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 2:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 3:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 4:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 5:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 6:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 7:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 8:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 9:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 10:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 11:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 12:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 13:
            document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
            break;
        case 14:
            document.getElementById("card" + a).innerHTML = "Ace of Diamonds " + deckArray[a - 1];
            break;
        case 15:
            document.getElementById("card" + a).innerHTML = "2 of Diamonds " + deckArray[a - 1];
            break;
        case 16:
            document.getElementById("card" + a).innerHTML = "3 of Diamonds " + deckArray[a - 1];
            break;
        case 17:
            document.getElementById("card" + a).innerHTML = "4 of Diamonds " + deckArray[a - 1];
            break;
        case 18:
            document.getElementById("card" + a).innerHTML = "5 of Diamonds " + deckArray[a - 1];
            break;
        case 19:
            document.getElementById("card" + a).innerHTML = "6 of Diamonds " + deckArray[a - 1];
            break;
        case 20:
            document.getElementById("card" + a).innerHTML = "7 of Diamonds " + deckArray[a - 1];
            break;
        case 21:
            document.getElementById("card" + a).innerHTML = "8 of Diamonds " + deckArray[a - 1];
            break;
        case 22:
            document.getElementById("card" + a).innerHTML = "9 of Diamonds " + deckArray[a - 1];
            break;
        case 23:
            document.getElementById("card" + a).innerHTML = "10 of Diamonds " + deckArray[a - 1];
            break;
        case 24:
            document.getElementById("card" + a).innerHTML = "Jack of Diamonds " + deckArray[a - 1];
            break;
        case 25:
            document.getElementById("card" + a).innerHTML = "Queen of Diamonds " + deckArray[a - 1];
            break;
        case 26:
            document.getElementById("card" + a).innerHTML = "King of Diamonds " + deckArray[a - 1];
            break;
        case 27:
            document.getElementById("card" + a).innerHTML = "Ace of Spades " + deckArray[a - 1];
            break;
        case 28:
            document.getElementById("card" + a).innerHTML = "2 of Spades " + deckArray[a - 1];
            break;
        case 29:
            document.getElementById("card" + a).innerHTML = "3 of Spades " + deckArray[a - 1];
            break;
        case 30:
            document.getElementById("card" + a).innerHTML = "4 of Spades " + deckArray[a - 1];
            break;
        case 31:
            document.getElementById("card" + a).innerHTML = "5 of Spades " + deckArray[a - 1];
            break;
        case 32:
            document.getElementById("card" + a).innerHTML = "6 of Spades " + deckArray[a - 1];
            break;
        case 33:
            document.getElementById("card" + a).innerHTML = "7 of Spades " + deckArray[a - 1];
            break;
        case 34:
            document.getElementById("card" + a).innerHTML = "8 of Spades " + deckArray[a - 1];
            break;
        case 35:
            document.getElementById("card" + a).innerHTML = "9 of Spades " + deckArray[a - 1];
            break;
        case 36:
            document.getElementById("card" + a).innerHTML = "10 of Spades " + deckArray[a - 1];
            break;
        case 37:
            document.getElementById("card" + a).innerHTML = "Jack of Spades " + deckArray[a - 1];
            break;
        case 38:
            document.getElementById("card" + a).innerHTML = "Queen of Spades " + deckArray[a - 1];
            break;
        case 39:
            document.getElementById("card" + a).innerHTML = "King of Spades " + deckArray[a - 1];
            break;
        case 40:
            document.getElementById("card" + a).innerHTML = "Ace of Clubs " + deckArray[a - 1];
            break;
        case 41:
            document.getElementById("card" + a).innerHTML = "2 of Clubs " + deckArray[a - 1];
            break;
        case 42:
            document.getElementById("card" + a).innerHTML = "3 of Clubs " + deckArray[a - 1];
            break;
        case 43:
            document.getElementById("card" + a).innerHTML = "4 of Clubs " + deckArray[a - 1];
            break;
        case 44:
            document.getElementById("card" + a).innerHTML = "5 of Clubs " + deckArray[a - 1];
            break;
        case 45:
            document.getElementById("card" + a).innerHTML = "6 of Clubs " + deckArray[a - 1];
            break;
        case 46:
            document.getElementById("card" + a).innerHTML = "7 of Clubs " + deckArray[a - 1];
            break;
        case 47:
            document.getElementById("card" + a).innerHTML = "8 of Clubs " + deckArray[a - 1];
            break;
        case 48:
            document.getElementById("card" + a).innerHTML = "9 of Clubs " + deckArray[a - 1];
            break;
        case 49:
            document.getElementById("card" + a).innerHTML = "10 of Clubs " + deckArray[a - 1];
            break;
        case 50:
            document.getElementById("card" + a).innerHTML = "Jack of Clubs " + deckArray[a - 1];
            break;
        case 51:
            document.getElementById("card" + a).innerHTML = "Queen of Clubs " + deckArray[a - 1];
            break;
        case 52:
            document.getElementById("card" + a).innerHTML = "King of Clubs " + deckArray[a - 1];
            break;
    }
}
