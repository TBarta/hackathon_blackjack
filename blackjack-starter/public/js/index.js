'use strict';

$(document).ready(function() {
   let test =  new Deck();
   let dealer = new Dealer();

   console.log(dealer);

dealer.deal_card(test.deck);
dealer.deal_card(test.deck);
dealer.deal_card(test.deck);
dealer.deal_card(test.deck);

let sum = function(){
    let summ=0;
    for (let i=0; i<dealer.dealer_cards.length; i++){
         summ += dealer.dealer_cards[i].value;
        }
        return summ;
}
console.log(sum());
});
