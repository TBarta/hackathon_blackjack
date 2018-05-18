'use strict';

$(document).ready(function() {
   
   let dealer = new Dealer();
   let player = new Player();
   let test =  new Deck();


   


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



function comparison () {
if(dealer_sum() > player_sum()) {
    $(".bust").html("You lost!");
}
else if (player_sum() > dealer_sum()) {
    $(".bust").html("You won!");
}
else {
    $(".bust").html("Tie");
}

}






function Game_start(array) {

    for (var i = 0; i < 2; i++) {
        player.player_cards.push(array[0]);
        array.splice(0, 1); 
        dealer.dealer_cards.push(array[0]);
        array.splice(0, 1); 
    }
}

function Bust (){
    if (player_sum() > 21) {
        $(".bust").html("You lost!");
        $(".revers").toggleClass(dealer.dealer_cards[1].suit+ "-" +dealer.dealer_cards[1].rank)
    }
}
function dealers_turn () {
while(dealer_sum() < 17 )
 {
    dealer.deal_card();
    update_dealer();
  
    } 
    comparison();   

}



function update_html() {
    $("<div>")
    .addClass(player.player_cards[0].suit+ "-" +player.player_cards[0].rank)
    .addClass("card")
    .appendTo($("#playerCards"))
    $("<div>")
    .addClass(player.player_cards[1].suit+ "-" +player.player_cards[1].rank)
    .addClass("card")
    .appendTo($("#playerCards"))
    $("<div>")
    .addClass(dealer.dealer_cards[0].suit+ "-" +dealer.dealer_cards[0].rank)
    .addClass("card")
    .appendTo($("#dealerCards"))
    $("<div>")
    .addClass("revers card")
    .appendTo($("#dealerCards"))
}

function update_dealer () {
    $("<div>")
    .addClass(dealer.dealer_cards[2].suit + "-" +dealer.dealer_cards[2].rank)
    .addClass("card")
    .appendTo($("#dealerCards"))
}

function update_player () {
    $("<div>")
    .addClass(player.player_cards[1+clickcounter].suit+ "-" +player.player_cards[1+clickcounter].rank)
    .addClass("card")
    .appendTo($("#playerCards"))
}
$("#stay").click(function (){
    $(".revers").toggleClass(dealer.dealer_cards[1].suit+ "-" +dealer.dealer_cards[1].rank)
    update_dealer();
    dealers_turn();
})

let clickcounter = 0;

$("#newGame").click(function(){
    $("#playerCards").empty();
    $("#dealerCards").empty();
    Game_start(test.deck);
    update_html();
})
$("#hit").click(function() {
    player.hit(test.deck);
    clickcounter++;
    update_player();
    Bust();
   

})


});

