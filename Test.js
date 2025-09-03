plyerRanked(35, 2)

function plyerRanked(wins, losses){
let result = wins - losses
let rank;

if (result <= 10){
  rank = "ferro"
  }else if (result <= 20){
  rank = "bronze"  
  }
  else{
  console.log("sem rank")
  }
  console.log(`o rank é ${rank}`)

_----------_
  
plyerRanked(45, 10)

function plyerRanked(wins, losses){
let result = wins - losses
let resultPart = wins + losses
let rank;

if (result <= 10){
  rank = "ferro"
  }else if (result <= 20){
  rank = "bronze"  
  }
  console.log(`o rank é ${rank} com ${resultPart} partidas e ${result} vitorias.`)
  
}  
