'use strict';

var numDecks = 1;
var deckArray = [numDecks];
var inputFromDealer = 0;
var inputFromHuman = 0;
for (var i = 0; i < 51; i++) {
    deckArray.push(numDecks);
}



function dealerShuffled() {
    deckArray = []
    for (var i = 0; i < 52; i++) {
        deckArray[i] = numDecks;
    }
    for (var i = 0; i < 52; i++) {
        updateCard(i + 1)
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

    for (var i = 0; i < 52; i++) {
        updateCard(i + 1)
    }
}

function arrayOfNums(arr) {
    var arrNums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var g = 0; g < 9; g++) {
        arrNums[g] += (arr[g] + arr[g + 13] + arr[g + 26] + arr[g + 39]);
    }
    for (var g = 9; g < 52; g + 10) {
        arrNums[9] += (arr[g + 9] + arr[g + 10] + arr[g + 11] + arr[g + 12]);
    }
}


function cardsLeft(arr) {
    var numCards = 0;
    for (var i = 0; i < arr.length; i++) {
        numCards += arr[i];
    }
    return numCards
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
    document.getElementById("card" + a).innerHTML = "" + deckArray[a - 1];
}

function updateDealer() {
    inputFromDealer = document.getElementById("dealerHandValue").value;
}

function updateHuman() {
    inputFromHuman = document.getElementById("handValue").value;
}

function hitButton() {
    if (shouldHit()) {
        document.getElementById("shouldHit").innerHTML = "Should Hit? YES"
    } else {
        document.getElementById("shouldHit").innerHTML = "Should Hit? NO"
    }
}

function shouldHit() {
    updateHuman();
    updateDealer();
    var current = inputFromDealer;
    var human = inputFromHuman;
    var arr = arrayOfNums(deckArray);
    console.log(current + "   " + human);
    console.log(chanceWinHit(current, human, arr) + "   " + chanceWin(current, human, arr));
    return chanceWinHit(current, human, arr) <= chanceWin(current, human, arr);
}

function chanceWinHit(current,human,arr) {
    chanceWin = 0;

    for(var q = 0; q < 10 ; q++) {
        if(human + q + 1 > 21) {
            chanceWin += (arr[q]/numCards(arr));
        }
    } 

    for(var q = 0; q < 10; q++) {
        if(human + q + 1 <= 21) {
            chanceWin += chanceWin(current, human + q + 1, arr);
        }
    } 
    return chanceWin;
}

function chanceWin(current, human, arr) {
    var temp;
    var totalChance = 0;
    if (current > 21) {
        return 0;
    }
    if (current >= 16 && current < human) {
        return 0;
    }
    if (current >= 16 && current == human) {
        return .5;
    }
    if (current > human) {
        return 1;
    }
    for (var y = 0; y < 10; y++) {
        if (arr[y] > 0) {
            temp = arr;
            temp[y]--;
            totalChance += (arr[y] / numCards(arr)) * chanceWin(current + y + 1, human, temp)
        }
    }
    return totalChance;
}