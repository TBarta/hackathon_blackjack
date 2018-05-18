'use strict';

$(document).ready(function() {
   let test =  new Deck();
   let dealer = new Dealer();

   console.log(dealer);

dealer.deal_card(test.deck);
dealer.deal_card(test.deck);

console.log(dealer.card_sum);

console.log(test.deck);
    
});
