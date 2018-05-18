'use strict';

$(document).ready(function() {
   let test =  new Deck();
   let dealer = new Dealer();
   let player = new Player();

   Game_start(test.deck);

   


   console.log(dealer);
   console.log(player);

let dealer_sum = function(){
    let summ=0;
    for (let i=0; i<dealer.dealer_cards.length; i++){
         summ += dealer.dealer_cards[i].value;
        }
        return summ;
}
let player_sum = function(){
    let summ=0;
    for (let i=0; i<player.player_cards.length; i++){
         summ += player.player_cards[i].value;
        }
        return summ;
}



function comparison (x,y) {
if(dealer_sum() > player_sum()) {
    console.log("Dealer won")
}
else if (player_sum() > dealer_sum()) {
    console.log("Player won")
}
else {console.log("tie")}

}


comparison();

function Game_start(array) {
    for (var i = 0; i < 2; i++) {
        player.player_cards.push(array[0]);
        array.splice(0, 1); 
        dealer.dealer_cards.push(array[0]);
        array.splice(0, 1); 
    }
}
});

