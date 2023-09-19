// rock paper scissors
//computer option
let player_score = 0;
let computer_score = 0;
let rounds = prompt("how many rounds would you like to play? Enter a number:");
let current_round = 0;
//get computer choice function to return rock paper or scissors
function getComputerChoice(random_number) {
    

        if (random_number == 1){
            return "rock";
        }
        else if (random_number == 2){
            return "paper";
        }

        else if (random_number == 3){
            return "scissors";
            
        }

        else {
            alert("an error has occured")
        }
            

    
}


//user weapon choice prompt ;) to lowercase so it's case insensitive



//play round that judges winner and adds to their score after resolution
function play_round(computer, player) {
    if(computer == "rock" && player == "scissors" ){
        alert("You lose! Computer wins this round")
        computer_score++;

    }
    else if(computer == "paper" && player == "rock" ){
        alert("You lose! Computer wins this round")
        computer_score++;
    
    }
    else if(computer == "scissors" && player == "paper" ){
        alert("You lose! Computer wins this round")
        computer_score++;
    }
    else if(computer == "rock" && player == "paper" ){
        alert("Computer loses! You win this round")
        player_score++;
    }
    else if(computer == "paper" && player == "scissors" ){
        alert("Computer loses! You win this round")
        player_score++;
    }
    else if(computer == "scissors" && player == "rock" ){
        alert("Computer loses! You win this round")
        player_score++;
    }
    else {
        alert("Draw! On to the Next round")
        
        
    }
    
    }

//this function is a while loop for the amount of rounds to play, which loops after each round
function play_set(round_amount) {
    while (current_round < round_amount) {
        //call all of the choice generators
        let int_between_1_and_3 = Math.floor((Math.random() * 3) + 1);
        let computer_choice = getComputerChoice(int_between_1_and_3);
        let player_prompt = prompt("Lets play! Are you Rock, Paper, or Scissors?");
        let player_choice = player_prompt.toLowerCase();
        //play round!
        play_round(computer_choice, player_choice);
        //increase the round after each iteration
        current_round++;
        

    }
    if(player_score > computer_score){
        alert("You win! With a score of " + player_score + " to " + computer_score);
    
    }else if (player_score < computer_score){
        alert("You Lose! With a score of " + player_score + " to " + computer_score);
    }
    else if( player_score == computer_score){
        alert("Draw! With a score of " + player_score + " to " + computer_score);
    }
    
}

play_set(rounds);



