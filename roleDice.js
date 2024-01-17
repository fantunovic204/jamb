class Die {
  constructor(value, isSelected, htmlId, dieImg) {
    this.value = value;
    this.isSelected = isSelected;
    this.htmlId = htmlId
    this.dieImg = dieImg
  }
}

let diceImages = ['dice-six-faces-one', 'dice-six-faces-two', 'dice-six-faces-three', 'dice-six-faces-four', 'dice-six-faces-five', 'dice-six-faces-six',];
let diceArray;
let addedUpValues;
let diceValueAfterSelect;

async function generateDice() {
  let diceArrayAfterRoll = [];
  for (let i = 0; i < 6; i++) {
    const randomDieValue = Math.floor(Math.random() * 6) + 1;
    const dieImageIndex = randomDieValue - 1;
    let die = new Die(randomDieValue, false, `die${i + 1}`, diceImages[dieImageIndex]);
    diceArrayAfterRoll.push(die);
  }
  //Restart select
  diceArray = diceArrayAfterRoll;
  addedUpValues = 0;
  let addedUpValueDisplay = document.getElementById(`diceThrowCounter`)
  addedUpValueDisplay.textContent = "Vrijednos kockica:" + addedUpValues;
  return diceArrayAfterRoll;
}

async function setDieImages(diceArrayAfterRoll) {
  for (let i = 0; i < 6; i++) {
    const dieImage = document.getElementById(`die${i + 1}`);
    dieImage.src = `images/${diceArrayAfterRoll[i].dieImg}.png`;
  }
}

async function selectDie(id) {
  //Find die
  const selectedDieImage = document.getElementById(id);
  const selectedDieIndex = diceArray.findIndex((die) => die.htmlId == id);
  //Select die
  if (diceArray[selectedDieIndex].isSelected === false) {
    selectedDieImage.src = `images/selected-${diceArray[selectedDieIndex].dieImg}.png`;
    diceArray[selectedDieIndex].isSelected = true;
    return diceArray[selectedDieIndex].value;
    //Deselect die
  } else if (diceArray[selectedDieIndex].isSelected === true) {
    selectedDieImage.src = `images/${diceArray[selectedDieIndex].dieImg}.png`;
    diceArray[selectedDieIndex].isSelected = false;
    return diceArray[selectedDieIndex].value * -1;
  } else {
    throw error;
  }
}

async function addUpDiceAfterRole(id) {
  diceValueAfterSelect = await selectDie(id);
  addedUpValues += diceValueAfterSelect;
  let addedUpValueDisplay = document.getElementById(`diceThrowCounter`)
  addedUpValueDisplay.textContent = "Vrijednos kockica:" + addedUpValues;

}

async function rollDice() {
  let diceArrayAfterRoll = await generateDice();
  console.log(diceArrayAfterRoll)
  await setDieImages(diceArrayAfterRoll);
}