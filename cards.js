class Deck {
    numcards; //number of cards in deck
    cards; //array of strings

    //Could add an enum to see if this deck is a prompt or a response deck

    constructor() {
        this.cards = [];
        this.numcards = 0;
    }

    Addcard(string) {
        this.cards[this.numcards] = string;
        this.numcards++;
    };

    Removecard(n) {
        this.cards.splice(n, 1);  
        this.numcards--;
    };
}

class Player {
    numwins; //This is the number of wins a player has
    name; 
    wcards; //This is the array of prompt cards that were won 
    rcards; //This is the array of response cards that they currently have in their deck
    constructor(pname) {
        this.numwins = 0; //Initialize numwins to 0
        this.name = pname; 
        this.wcards = new Deck();
        this.rcards = new Deck();
        //cards
    }

    Addrcard(responses, m) { //Takes the deck and the number of the card within that deck, and the number of the card in your own deck
        this.rcards.Addcard(responses.cards[m]); //Adds the card at index m
        responses.Removecard(m);
        
    };

    Swaprcard(responses, n, m) {
        this.rcards.Removecard(n); //Removes the card chosen
        this.rcards.Addcard(responses.cards[m]); //Adds the card at index m
        responses.Removecard(m);
    }

    Addpcard(prompts, n, m) {
        this.wcards.Removecard(n);
        this.wcards.Addcard(prompts.cards[m]);
        prompts.Removecard(m);
    };
}

function printcards(deck) {
    for (let i = 0; i < deck.numcards; i++) {
        console.log(i, "->", deck.cards[i]);
    }
}

function gameplay() {

    /*You have a certain number of players p.
    Have a while loop that finishes when a player reaches the number w*/


//TESTING ENVIRONMENT BEGIN
    let w = 2; //These numbers will be decided upon with input
    let name = 'Alex' //This will be an input
    let p = 1; //This is the number of players in the game will be depending on the amount of people in the network

    let prompts = new Deck(); //These should include all prompts and responses in the game
    let responses = new Deck();
    let curPrompt; //This will be the current card, which will be a number
    let chosenCard; //This will be the card chosen by the player

    responses.Addcard('Sphaghetti');
    responses.Addcard('Avocados');
    responses.Addcard('Cats');
    responses.Addcard('Dogs');
    responses.Addcard('Stuff');
    responses.Addcard('Plants');
    responses.Addcard('Guns');
    responses.Addcard('Children');
    responses.Addcard('Your mom');
    responses.Addcard('Something funny');
    responses.Addcard('I wish I could come up with funnier prompts');
    responses.Addcard('I plagiarized from the boardgame');


    prompts.Addcard('_ is the best thing ever'); 
    prompts.Addcard('_ is the worst thing ever');
    prompts.Addcard('Ok to who?');
    prompts.Addcard('For what reason?');
    prompts.Addcard('Hello to who?');
    prompts.Addcard('Excuse me?!');
    prompts.Addcard('What do you like?');
    prompts.Addcard('_ is nice to see');
    

    printcards(prompts);
    printcards(responses);

    let player1 = new Player(name);

    player1.Addrcard(responses, 0);
    player1.Addrcard(responses, 5);
    player1.Addrcard(responses, 9);
    player1.Addrcard(responses, 0);
    player1.Addrcard(responses, 0);
    player1.Addrcard(responses, 0);
    player1.Addrcard(responses, 0);

//TESTING ENVIRONMENT OVER

    /*The chooser will start with player 1, and each player will have a number. 
    There will be a rotation which will happen through a mod operator */
    while (player1.numwins < 6 && prompts.numcards > 0 && responses.numcards > 0) { //Play until end goal is reached or there are no more prompt cards/response cards left
        console.log(" "); 
        //This will be a random card in the future, but this removes the chosen prompt:
        curPrompt = 0; 
        console.log("The prompt card is:");
        console.log(prompts.cards[curPrompt]);

        console.log("Here's your deck, which includes the card number and its text:");
        printcards(player1.rcards);
        console.log("Choose which card you want to play");
        chosenCard = 0;
        console.log("You chose 0:", player1.rcards.cards[chosenCard]); //This is depending on what the person chooses
        
        player1.Swaprcard(responses, 0, 0);

        //Person's card is chosen
        console.log("Your card was chosen!");
        player1.Addpcard(prompts, 0, 0);


        //If card chosen
        player1.numwins++; 
        console.log("Here is your score:", player1.numwins);
    }

    console.log(" ");
    console.log("You won!"); 


}


{
    console.log("Game start");
    gameplay();
}



