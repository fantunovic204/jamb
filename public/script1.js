
function generateResourceValuesArray() {
    const valuesArray = [];
    for (let i = 2; i < 13; i++) {
        valuesArray.push(i);
    }
    for (let j = 2; j < 13; j++) {
        valuesArray.push(j);
    }
    valuesArray.push(0);
    return valuesArray
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


function generateRandomResurceValue(valuesArray) {

    const randomIndex = Math.floor(Math.random() * valuesArray.length);
    let randomValue = valuesArray[randomIndex];

    console.log(valuesArray);
    valuesArray.splice(randomIndex, 1);
    return randomValue
}

function generateRandomResurceType(typesArray) {

    const randomIndex = Math.floor(Math.random() * typesArray.length);
    let randomValue = typesArray[randomIndex];

    console.log(typesArray);
    typesArray.splice(randomIndex, 1);
    return randomValue
}

function randomizeResourceTile() {

    let tileArray = []

    const valuesArray = generateResourceValuesArray()
    const typesArray = generateResourceTypesArray()

    for (let i = 0; i <= 18; i++) {
        //Generate tile with position
        let tileValue = generateRandomResurceValue(valuesArray)
        let titleType = generateRandomResurceType(typesArray)
        let resourceTile = new resurceTile(titleType, tileValue);
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
        childParagraphs[1].textContent = resurceTilesValues[i].value;
        
    }
    alert('Randomization done!');
}

class resurceTile {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}