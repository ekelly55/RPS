console.log("javascript loaded")

const player = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  }
  const choices = ["Lapis", "Papyrus", "Scalpellus"];

  let results = document.getElementById("results")

  
  function playerChoosesLapis() {
    player.currentChoice = choices[0];
    computerChoosing()
  }
  function playerChoosesPapyrus() {
    player.currentChoice = choices[1];
    computerChoosing()


  }
  function playerChoosesScalpellus() {
    player.currentChoice = choices[2];
    computerChoosing()


  }
  
  // Here, we're wrapping the randomIndex generator, which helps us determine the computer's choice, in a new function called computerChooses
  function computerChooses(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];

  }
  function computerChoosing() {
    results.innerText = `Computer choosing`
    setTimeout(compareChoices, 3000) 
  }

  function clearResults() {
    results.innerText = ``
  }

  function autoClear() {
    setTimeout(clearResults, 3000)
  }


  function compareChoices() {
    computerChooses();
    if (computer.currentChoice === player.currentChoice) {
        results.innerText = `It's a tie. Play again`
    } else if (computer.currentChoice === choices[0]) {
        if (player.currentChoice === choices[2]) {
        results.innerText = `Computer Wins! Computer chose ${computer.currentChoice} and Player chose ${player.currentChoice}`
        } else {
        results.innerText = `Player Wins! Computer chose ${computer.currentChoice} and Player chose ${player.currentChoice}`
        } 
      } else if (computer.currentChoice === choices[1]) {
        if (player.currentChoice === choices[0]) {
        
        results.innerText = `Computer Wins! Computer chose ${computer.currentChoice} and Player chose ${player.currentChoice}`
        
        } else {
            results.innerText = `Player Wins! Computer chose ${computer.currentChoice} and Player chose ${player.currentChoice}`
      
        }
      } else if (computer.currentChoice === choices[2]) {
        if (player.currentChoice === choices[1]) {
            results.innerText = `Computer Wins! Computer chose ${computer.currentChoice} and Player chose ${player.currentChoice}`
    
        } else {
            results.innerText = `Player Wins! Computer chose ${computer.currentChoice} and Player chose ${player.currentChoice}`
      
        } 
     }
     autoClear()
  }
  


  //console.log(document.getElementById("lapis"))
  document.getElementById("lapis").addEventListener('click', playerChoosesLapis);
  
  
  document.getElementById("papyrus").addEventListener('click', playerChoosesPapyrus);
  
  document.getElementById("scalpellus").addEventListener('click', playerChoosesScalpellus);
  
  document.getElementById("clear-results").addEventListener('click', clearResults);
  /*
  */