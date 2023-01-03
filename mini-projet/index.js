let numberToGuess = Math.floor(Math.random() * 100);
let numberToCompare;

while(numberToCompare !== numberToGuess){
    
    let userProposal = window.prompt("Quel est le nombre mystère ?");
    numberToCompare = parseInt(userProposal);
    
    if(numberToCompare < numberToGuess){
        
        window.alert("C'est plus !");
        
    }else if(numberToCompare > numberToGuess){
        
        window.alert("C'est moins !");
        
    }else{
        
        window.alert("C'est gagné !");
        
    }
}
