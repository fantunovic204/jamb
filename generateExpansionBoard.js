/*Forbiden tiles*/
let positionsForExpansionBox1 = ['expansionBox2', 'expansionBox4', 'expansionBox5']
let positionsForExpansionBox2 = ['expansionBox1', 'expansionBox3', 'expansionBox5', 'expansionBox6']
let positionsForExpansionBox3 = ['expansionBox2', 'expansionBox6', 'expansionBox7']

let positionsForExpansionBox4 = ['expansionBox1','expansionBox5','expansionBox8','expansionBox9']
let positionsForExpansionBox5 = ['expansionBox1','expansionBox2','expansionBox4','expansionBox6','expansionBox9','expansionBox10']
let positionsForExpansionBox6 = ['expansionBox2','expansionBox3','expansionBox5','expansionBox7','expansionBox10','expansionBox11']
let positionsForExpansionBox7 = ['expansionBox3','expansionBox6','expansionBox11','expansionBox12']

let positionsForExpansionBox8 = ['expansionBox4','expansionBox9','expansionBox13','expansionBox14']
let positionsForExpansionBox9 = ['expansionBox4','expansionBox5','expansionBox8','expansionBox10','expansionBox14','expansionBox15']
let positionsForExpansionBox10 = ['expansionBox5','expansionBox6','expansionBox9','expansionBox11','expansionBox15','expansionBox16']
let positionsForExpansionBox11 = ['expansionBox6','expansionBox7','expansionBox10','expansionBox12','expansionBox16','expansionBox17']
let positionsForExpansionBox12 = ['expansionBox7','expansionBox11','expansionBox17','expansionBox18']

let positionsForExpansionBox13 = ['expansionBox8','expansionBox14','expansionBox19']
let positionsForExpansionBox14 = ['expansionBox8','expansionBox9','expansionBox13','expansionBox15','expansionBox19','expansionBox20']
let positionsForExpansionBox15 = ['expansionBox9','expansionBox10','expansionBox14','expansionBox16','expansionBox20','expansionBox21']
let positionsForExpansionBox16 = ['expansionBox10','expansionBox11','expansionBox15','expansionBox17','expansionBox21','expansionBox22']
let positionsForExpansionBox17 = ['expansionBox11','expansionBox12','expansionBox16','expansionBox18','expansionBox22','expansionBox23']
let positionsForExpansionBox18 = ['expansionBox12','expansionBox17','expansionBox23']

let positionsForExpansionBox19 = ['expansionBox13','expansionBox14','expansionBox20','expansionBox24']
let positionsForExpansionBox20 = ['expansionBox14','expansionBox15','expansionBox19','expansionBox21','expansionBox24','expansionBox25']
let positionsForExpansionBox21 = ['expansionBox15','expansionBox16','expansionBox20','expansionBox22','expansionBox25','expansionBox26']
let positionsForExpansionBox22 = ['expansionBox16','expansionBox17','expansionBox21','expansionBox23','expansionBox26','expansionBox27']
let positionsForExpansionBox23 = ['expansionBox17','expansionBox18','expansionBox22','expansionBox27']

let positionsForExpansionBox24 = ['expansionBox19','expansionBox20']
let positionsForExpansionBox25 = ['expansionBox20','expansionBox21','expansionBox24','expansionBox26','expansionBox28','expansionBox29']
let positionsForExpansionBox26 = ['expansionBox21','expansionBox22','expansionBox25','expansionBox27','expansionBox29','expansionBo30']
let positionsForExpansionBox27 = ['expansionBox22','expansionBox23','expansionBox26','expansionBox30']

let positionsForExpansionBox28 = ['expansionBox24','expansionBox25','expansionBox29']
let positionsForExpansionBox29 = ['expansionBox25','expansionBox26','expansionBox28','expansionBox30']
let positionsForExpansionBox30 = ['expansionBox26','expansionBox27','expansionBox29']


let forbiddenExpansionPositions  = [
    positionsForExpansionBox1, positionsForExpansionBox2, positionsForExpansionBox3, positionsForExpansionBox4,
    positionsForExpansionBox5, positionsForExpansionBox6, positionsForExpansionBox7, positionsForExpansionBox8,
    positionsForExpansionBox9, positionsForExpansionBox10, positionsForExpansionBox11, positionsForExpansionBox12,
    positionsForExpansionBox13, positionsForExpansionBox14, positionsForExpansionBox15, positionsForExpansionBox16,
    positionsForExpansionBox17, positionsForExpansionBox18, positionsForExpansionBox19, positionsForExpansionBox20,
    positionsForExpansionBox21, positionsForExpansionBox22, positionsForExpansionBox23, positionsForExpansionBox24,
    positionsForExpansionBox25, positionsForExpansionBox26, positionsForExpansionBox27, positionsForExpansionBox28,
    positionsForExpansionBox29, positionsForExpansionBox30
];

function generateExpansionResourceValuesArray() {
    let valuesArray = [];
    for (let i = 3; i < 12; i++) {
        valuesArray.push(i);
        valuesArray.push(i);
      valuesArray.push(i);
    }
    valuesArray.push(12,12);
  valuesArray.push(2,2);
    valuesArray = valuesArray.filter(number => number !== 7);
    return valuesArray
}

function generateExpansionResourceTypesArray() {
    const typesArray = [];
    //Wood
    for (let i = 0; i <= 5; i++) {
        typesArray.push("forest");
    }
    //Sheep
    for (let i = 0; i <= 5; i++) {
        typesArray.push("pasture");
    }
    //Rock
    for (let i = 0; i <= 4; i++) {
        typesArray.push("mountain");
    }
    //Brick
    for (let i = 0; i <= 4; i++) {
        typesArray.push("hill");
    }
    //Weath
    for (let i = 0; i <= 5; i++) {
        typesArray.push("field");
    }
    typesArray.push("desert","desert");
    return typesArray
}

function generateRandomResourceValue(valuesArray) {
    const randomIndex = Math.floor(Math.random() * valuesArray.length);
    let randomResurceValue = valuesArray[randomIndex];
    valuesArray.splice(randomIndex, 1);
    return randomResurceValue
}

function generateRandomResourceType(typesArray) {
    const randomIndex = Math.floor(Math.random() * typesArray.length);
    let randomResurceType = typesArray[randomIndex];
    typesArray.splice(randomIndex, 1);
    return randomResurceType
}

function randomizeExpansionResourceTile() {
    let tileArray = []
    const valuesArray = generateExpansionResourceValuesArray()
    const typesArray = generateExpansionResourceTypesArray()

    for (let i = 0; i < 30; i++) {
        let titleType = generateRandomResourceType(typesArray)

        if (titleType != 'desert') {
            let tileValue = generateRandomResourceValue(valuesArray)
            let resourceTile = new resurceTile(titleType, tileValue);
            tileArray.push(resourceTile);
        }
        else if (titleType == 'desert') {
            let resourceTile = new resurceTile(titleType, 0);
            tileArray.push(resourceTile);
        }
    }
    return tileArray
}

async function ExpansionRestart() {
    let tileValuesArray = []
    for (let i = 0; i <30; i++) {
        //Generate tile with position
        const tileBox = document.getElementById(`expansionBox${i + 1}`)
        const childImages = tileBox.querySelectorAll("img");
        childImages[0].src = null
        const childParagraphs = tileBox.querySelectorAll("p");
        tileValuesArray.push(childParagraphs);
        childParagraphs[0].textContent = null
        childParagraphs[0].style.display = "";
    }
    return tileValuesArray
}

async function setExpanionsTiles() {
    const resurceTilesValues = randomizeExpansionResourceTile()
    let tileValuesArray = []
    for (let i = 0; i < 30; i++) {
        //Generate tile with position
        const tileBox = document.getElementById(`expansionBox${i + 1}`)
        const childImages = tileBox.querySelectorAll("img");
        childImages[0].src = `images/${resurceTilesValues[i].type}.png`
        tileValuesArray.push({ position: `expansionBox${i + 1}`, type: resurceTilesValues[i].type, forbiddenExpansionPositions: forbiddenExpansionPositions[i] });
    }
    return tileValuesArray
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

async function setExpansionRedTileValues() {
    //Setting all tiles
   
    let tileValuesArray = await setExpanionsTiles()
    //Remove old desert no-display
    for (let i = 0; i < 30; i++) {
        const oldBox = document.getElementById(`expansionBox${i + 1}`)
    const oldParaf = oldBox.querySelectorAll("p");
    oldParaf[0].style.display = "";
    }

    //remove dessert fom tile array
    let desertTile = await tileValuesArray.filter(item => item.type == "desert");

    for (let i = 0; i < 2; i++) {
    let desertTilePosition = desertTile[i].position
    const desert = document.getElementById(desertTilePosition)
    const desertParaf = desert.querySelectorAll("p");
    desertParaf[0].style.display = "none";
     }
    tileValuesArray = await tileValuesArray.filter(item => item.type !== "desert");
    
    let randomPosition;
    let tileBox;
    let childParagraphf;
    let tile;
    let tileforbidenPositions;

    const redValues = [6, 6, 6, 8, 8, 8]
    let redValueTilePositions = []
    let freeTiles = tileValuesArray

    for (let i = 0; i < 6; i++) {
        //Setting red tile value
        let randomIndex = await getRandomInt(0, tileValuesArray.length - 1);
        randomPosition = await tileValuesArray[randomIndex].position;
        tileBox = await document.getElementById(randomPosition)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = redValues[i]
        childParagraphf[0].style.color = "#f30909";
        //removing forbiden tiles
        tile = await tileValuesArray.find(item => item.position == randomPosition);
        tileforbidenPositions = tile.forbiddenExpansionPositions
        tileforbidenPositions.push(randomPosition)
        tileValuesArray = await tileValuesArray.filter(item => !tileforbidenPositions.includes(item.position));

        redValueTilePositions.push(randomPosition)
    } 
    freeTiles = await freeTiles.filter(item => !redValueTilePositions.includes(item.position));
    return freeTiles
}

async function setOtherExpansionTileValues(freeTiles) {

    let otherValues = [2, 2, 12, 12, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9, 10, 10, 10, 11, 11, 11]
    otherValues = await shuffleArray(otherValues)

    for (let i = 0; i < 22; i++) {
        const tileBox = document.getElementById(freeTiles[i].position)
        childParagraphf = await tileBox.querySelectorAll("p");
        childParagraphf[0].textContent = otherValues[i]
        childParagraphf[0].style.color = "#000000";
    }
}

async function setExpansionBoard() {
    try {
        const freeTiles = await setExpansionRedTileValues() 
       setOtherExpansionTileValues(freeTiles)
    } catch (error) {
        throw error;
    }
}
