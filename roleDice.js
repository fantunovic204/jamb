let diceImages = ['dice-six-faces-one','dice-six-faces-two','dice-six-faces-three','dice-six-faces-four','dice-six-faces-five','dice-six-faces-six',]

async function roleDice() {
    for (let i = 0; i < 6; i++) {
        //Generate tile with position
        const die = document.getElementById(`die${i + 1}`)
   
      const randomIndex =  Math.floor(Math.random() * 6);
      console.log(randomIndex)
        die.src = `images/${diceImages[randomIndex]}.png`
       
    }
}