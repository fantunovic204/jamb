function generateResourceValuesArray() {
    let valuesArray = [];
    for (let i = 3; i < 12; i++) {
        valuesArray.push(i);
        valuesArray.push(i);
    }
    valuesArray.push(2);
    valuesArray.push(12);
    valuesArray = valuesArray.filter(number => number !== 7);
    return valuesArray
}

function generateResourceTypesArray() {
    const typesArray = [];
    //Wood
    for (let i = 0; i <= 3; i++) {
        typesArray.push("forest");
    }
    //Sheep
    for (let i = 0; i <= 3; i++) {
        typesArray.push("pasture");
    }
    //Rock
    for (let i = 0; i <= 2; i++) {
        typesArray.push("mountain");
    }
    //Brick
    for (let i = 0; i <= 2; i++) {
        typesArray.push("hill");
    }
    //Weath
    for (let i = 0; i <= 3; i++) {
        typesArray.push("field");
    }
   typesArray.push("desert");
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

function randomizeResourceTile() {
    let tileArray = []
    const valuesArray = generateResourceValuesArray()
    const typesArray = generateResourceTypesArray()

    for (let i = 0; i < 19; i++) {
        let titleType = generateRandomResourceType(typesArray)

    if(titleType != 'desert'){
        let tileValue = generateRandomResourceValue(valuesArray)
        let resourceTile = new resurceTile(titleType, tileValue);
        tileArray.push(resourceTile);
    }
    else if(titleType == 'desert'){
        let resourceTile = new resurceTile(titleType, 0);
        tileArray.push(resourceTile);
    }
    }
    return tileArray
}

function setResourcerTiles() {
    const resurceTilesValues = randomizeResourceTile()
    let tileValuesArray = []
    for (let i = 0; i < 19; i++) {
        //Generate tile with position
        const tileBox = document.getElementById(`box${i+1}`)
        const childImages = tileBox.querySelectorAll("img");
        const childParagraphs = tileBox.querySelectorAll("p");
        tileValuesArray.push(childParagraphs);
        childImages[0].src = `images/${resurceTilesValues[i].type}.png`
        childParagraphs[0].textContent = resurceTilesValues[i].value;
    }
    return tileValuesArray
}

function setResourcerTilesColors(tileValuesArray) {
for (let i = 0; i < 19; i++) {
    if ( tileValuesArray[i][0].textContent == 6 ||  tileValuesArray[i][0].textContent == 8){
     console.log(tileValuesArray[i][0])
     console.log(tileValuesArray[i][0].textContent)
     tileValuesArray[i][0].style.color ="#f30909";
     tileValuesArray[i][0].style.display = "";
     }else if(tileValuesArray[i][0].textContent == 0){
         tileValuesArray[i][0].style.display = "none";
     }else{
         tileValuesArray[i][0].style.color ="#000000";
         tileValuesArray[i][0].style.display = "";
     }
 }
}

async function setBoard() {
    try {
      const tileValuesArray = await setResourcerTiles()
      setResourcerTilesColors(tileValuesArray)
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

class resurceTile {
    constructor(type, value, position) {
        this.type = type;
        this.value = value;
        this.position = position
    }
}