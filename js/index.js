AOS.init();

let textCheckRunTimes = 0;
let textCharacter = 0;

let wordArray = [
    "Design",
    "Develop",
    "Revamp"
];

function textCheck() {

    if ( textCheckRunTimes == 0 ) {
        writeWord(wordArray[0]);
    }

    else if ( textCheckRunTimes == 1 ) {
        writeWord(wordArray[1]);
    }

    else if ( textCheckRunTimes == 2 ) {
        writeWord(wordArray[2]);
    }

    else {
        textCheckRunTimes = 0;
        textCheck();
    }
}

function writeWord(wordToWrite) {

    if ( textCharacter < wordToWrite.length ) {

        heroWord.innerText += wordToWrite.charAt(textCharacter);
        textCharacter++;
        console.log(heroWord.innerText);
        setTimeout( () => { writeWord(wordToWrite) }, 200);
    }

    else {
        textCharacter = 0;
        setTimeout( () => { removeWord(wordToWrite) }, 2000 );
    }
}

function removeWord(wordToErase) {

    console.log("word to be removed: " + wordToErase);

    if ( wordToErase != "" ) {
        
        let newWord = wordToErase.substring(0, wordToErase.length -1);

        heroWord.innerText = newWord;
        console.log(heroWord.innerText);

        setTimeout( () => { removeWord(newWord) }, 150 );
    }

    else {
        textCheckRunTimes++;
        textCheck();
    }

}

document.addEventListener('DOMContentLoaded', textCheck);

// textCheck();