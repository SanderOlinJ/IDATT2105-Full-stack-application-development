let count = 0;
let content = document.getElementById("lorem-text");
let counter = document.getElementById("counter");
let array = [document.getElementById("li-1"),
document.getElementById("li-2"),
document.getElementById("li-3"),
document.getElementById("li-4"),
document.getElementById("li-5"),
document.getElementById("li-6")];
const words = ["lorem", "ipsum", "dolor", "sit", "amet",
"consectetur", "adipiscing", "elit", "sed", "do", "eiusmod",
"tempor", "incididunt", "ut", "labore", "et", "dolore",
"magna", "aliqua"];

function updateCounter(){
    counter.innerText = count;
}

function countUp(){
    count++;
    updateCounter();
}

function countDown(){
    count--;
    updateCounter();
}

function toggleContent(){
    if(!is_visible(content)){
        content.style.visibility = "visible";
    }
    else{
        content.style.visibility = "hidden"
    }
}

function is_visible(text){
    if(window.getComputedStyle(text).visibility === "hidden"){
        return false;
    }
    return true;
}

function chooseRandomWordsFromArray(){
    let randomWords = [];
    for (let i = 0; i < array.length; i++){
        let randomElement = words[Math.floor(Math.random() * array.length)];
        randomWords[i] = randomElement;
    }
    return randomWords;
}

function fillArrayWithWords(){
    const wordsGenerated = chooseRandomWordsFromArray();
    for (let i = 0; i < array.length; i++){
        array[i].innerText = wordsGenerated[i];
    }
}