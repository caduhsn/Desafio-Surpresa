plyerRanked(12, 10)

function plyerRanked(wins, losses){
let result = wins - losses
let resultPart = wins + losses
let rank;

if (result <= 10)
    {rank = "Ferro"}
    else if (result <= 20)
        {rank = "Bronze"}
    else if (result <= 50)
        {rank = "Prata"}  
    else if (result <= 80)
        {rank = "Ouro"}  
    else if (result <= 100)
        {rank = "Diamante"}  
    else if (result >= 101)
        {rank = "Imortal"}

    console.log(`O rank atual é ${rank} com: ${resultPart} partidas e ${result} vitorias.`)
}  