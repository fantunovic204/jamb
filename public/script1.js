
function generateResourcePositionsArray() {
    const positionsArray = [];
    for (let i = 2; i < 13; i++) {
        positionsArray.push(i);
    }
    for (let j = 2; j < 13; j++) {
        positionsArray.push(j);
    }
    positionsArray.push(0);
    return positionsArray
}

function generateResourceTypesArray() {
    const typesArray = [];
    //Wood
    for (let i = 0; i <= 3; i++) {
        typesArray.push("Wood");
    }
    //Sheep
    for (let i = 0; i <= 3; i++) {
        typesArray.push("Sheep");
    }
    //Rock
    for (let i = 0; i <= 2; i++) {
        typesArray.push("Rock");
    }
    //Brick
    for (let i = 0; i <= 2; i++) {
        typesArray.push("Brick");
    }
    //Weath
    for (let i = 0; i <= 3; i++) {
        typesArray.push("Weath");
    }
    typesArray.push("Desert");
    return typesArray
}


function generateRandomPosition(positonsArray) {

    const randomIndex = Math.floor(Math.random() * positonsArray.length);
    let randomValue = positonsArray[randomIndex];

    console.log(positonsArray);
    positonsArray.splice(randomIndex, 1);
    return randomValue
}

function generateRandomType(typesArray) {

    const randomIndex = Math.floor(Math.random() * typesArray.length);
    let randomValue = typesArray[randomIndex];

    console.log(typesArray);
    typesArray.splice(randomIndex, 1);
    return randomValue
}

function randomizeResourceTile() {

    let tileArray = []

    const positionsArray = generateResourcePositionsArray()
    const typesArray = generateResourceTypesArray()

    for (let i = 0; i <= 18; i++) {
        //Generate tile with position
        let tilePosition = generateRandomPosition(positionsArray)
        let titleType = generateRandomType(typesArray)
        let resourceTile = new resurceTile(titleType, tilePosition);
        tileArray.push(resourceTile);
    }
    console.log(tileArray)
    return tileArray
}

function setResourcerTiles() {
    const resurceTilesValues = randomizeResourceTile()
    for (let i = 0; i <= 18; i++) {
        //Generate tile with position
        const tileBox = document.getElementById(`box${i+1}`)
        const childParagraphs = tileBox.querySelectorAll("p");
        childParagraphs[0].textContent = resurceTilesValues[i].type;
        childParagraphs[1].textContent = resurceTilesValues[i].position;
        
    }
    alert('Randomization done!');
}

class resurceTile {
    constructor(type, position) {
        this.type = type;
        this.position = position;
    }
}