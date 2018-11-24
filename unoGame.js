/* TK's Code, logic incomplete, still working out structure */

const colors = ['red', 'blue', 'green', 'yellow']
const type = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Skip', 'Reverse', 'Draw_2', 'Wild', 'Wild_Draw_4']
const effect = ['play_Number', 'skip_Next_Player', 'reverse_Turn_Order', 'Draw_2', ]

class Card {

    constructor(color, type, effect){
        this.color = color
        this.type = type
        this.effect = effect
    }

    isMatch(){
        if (this.color === currentCard['color'] || this.type === currentCard['type'] || 
            this.type === "Wild" || this.type === "Wild_Draw_4"){
            return true
        }
        else {
            return false
        }
    }

    playCard(){
        if (this.isMatch() === true){
            playPile.unshift(this)
        }
        else {
            throw new Error ("Stop cheating fam")
        }
    }

}

class Deck {

    constructor(cards = []){

        this.cards = cards
        this.size = this.cards.length

    }

    draw(player){
        player['hand'] = this.cards.shift()
    }

    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    addDecks(players){

        if (players > 4){

            for(let i = 1; i < Math.floor(players/4); i++){
                this.cards = this.cards.concat(this.cards)
            }

            this.shuffle()

        }
    }

}

class Hand {

    constructor(cards = []){
        this.cards = cards
        this.size = this.cards.length
    }

}

class Player {

    constructor(name = "Player", hand =[], turn){
        this.name = name
        this.hand = hand
        this.handSize = this.hand.length
        this.turn = turn
    }

    callUno(){
        if(this.handSize === 1){
            console.log("UNO!") //Obviously not the completed code, but I'm tired. Someone else do it.
                                //Or wait for me to get around to it. Your choice really.
        }
    }

    pass(){
        this.hand.unshift(deck.shift()) //add the top card of deck to your hand if you pass your turn.
    }

}

class playPile {

    constructor(cards){
        this.cards = []
        this.currentCard = this.cards[0]
    }

}

/*TODO:

-Start game
-Determine turn order
-Implement deck generation
    Generate 1 of each non-wild cards for each color
    Generate 4 of each wild card

    Alternatively, have a pre-made array of all possible cards,
    Seems like a messier way to do it though, so I wouldn't.

    Store all cards in an array
-Implement effects
-Implement check for validity of cards in hand
-Probably some other stuff I haven't thought of?

*/