function Player () {
    // this.chips = chips;
    this.player_cards = [];
    this.counter = 0;   

    this.bust = function(){
        if(count() > 21){
            $("whatever").html("You went over 21! YOU LOST!")
            /*some function to end the game */
        }
    }
    this.stand = function(){

    }
    this.hit = function(array) {
        this.player_cards.push(array[0]);
        array.splice(0, 1); 
    }

    this.count = function() {
        for (var i = 0; i < player_cards.length; i++) {
            this.counter = player_cards.value;
        }
    }
}
function Game_start(array) {
    for (var i = 0; i < 2;i++) {
        player.player_cards.push(array[0]);
        array.splice(0, 1); 
        dealer.dealer_cards.push(array[0]);
        array.splice(0, 1); 
    }
}