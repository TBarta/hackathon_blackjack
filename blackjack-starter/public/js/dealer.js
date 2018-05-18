function Dealer (){
    this.dealer_cards = [];

    this.total_card_sum = function(){
        let sum=0;
        for (let i=0; i<this.dealer_cards.length; i++){
            sum = sum + this.dealer_cards.value[i];
        }
        return sum;
    }

    this.deal_card = function(array){
        this.dealer_cards.push(array[0]);
        array.splice(0, 1); 
        //this.total_card_sum();  
    }

    this.game_status_check = function(){
        if (this.total_card_sum()<17 || this.total_card_sum()>21){
            console.log('Game over');
        } 
        this.deal_card();
    }
}

