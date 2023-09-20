// rock paper scissors
//computer option
let player_score = 0;
let computer_score = 0;
//let rounds = prompt("how many rounds would you like to play? Enter a number:");
let current_round = 0;
const announcer_text = document.getElementById('announcer');
announcer_text.innerText="Hi! Please pick how many rounds you'd like to play below:";
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
//initialize rounds and pick amount of rounds to start the loop 
const one_round = document.getElementById('1_button');
const three_round = document.getElementById('3_button');
const five_round = document.getElementById('5_button');
let round_selection = document.getElementById('round_amounts');


if(one_round) {
    one_round.addEventListener('click', function() {
        let round_amount = 1;
        //console.log(round_amount);
        if(round_selection) {

            round_selection.style.display = "none";
          } else {
            console.error("round_selection is undefined");
          }
          announcer_text.innerText="Choose your weapon!";
        
        play_set(round_amount);
        
      });
    } else {
      console.error('Element with id "one_round" not found');
}if(three_round) {
    three_round.addEventListener('click', function() {
        let round_amount = 3;
        //console.log(round_amount);
        if(round_selection) {

            round_selection.style.display = "none";
          } else {
            console.error("round_selection is undefined");
          }
          announcer_text.innerText="Choose your weapon!";
          play_set(round_amount);
        
      });
    } else {
      console.error('Element with id "one_round" not found');
}if(five_round) {
    five_round.addEventListener('click', function() {
        let round_amount = 5;
        //console.log(round_amount);
        if(round_selection) {

            round_selection.style.display = "none";
          } else {
            console.error("round_selection is undefined");
          }
          announcer_text.innerText="Choose your weapon!";
          play_set(round_amount);
        
      });
    } else {
      console.error('Element with id "one_round" not found');
    }





//play round that judges winner and adds to their score after resolution

let listenersSetUp = false;
function detachEventListeners() {
    document.getElementById('rock_button').removeEventListener('click', handleRockClick);
    document.getElementById('paper_button').removeEventListener('click', handlePaperClick);
    document.getElementById('scissors_button').removeEventListener('click', handleScissorsClick);
}

function waitForPlayerChoice(callback) {
    if (listenersSetUp) return;

    document.getElementById('rock_button').addEventListener('click', function() {
        callback('rock');
    });
    document.getElementById('paper_button').addEventListener('click', function() {
        callback('paper');
    });
    document.getElementById('scissors_button').addEventListener('click', function() {
        callback('scissors');
    });

    listenersSetUp = true; // Set the flag to true after setting up the listeners
}
    
    function play_set(round_choice) {
        let current_round = 0;
        let round_counter = document.getElementById('round_counter');
        let computer_score_count = document.getElementById('computer_score_counter');
        let player_score_count = document.getElementById('player_score_counter');
        let computer_score = 0;
        
        
        function playNextRound() {
            function evaluate_round(computer, player) {
    
                if(computer == "rock" && player == "scissors" ){
                    announcer_text.innerText="You lose! Computer wins this round";
                    computer_score++;
                    computer_score_count.innerText = computer_score;
            
                }
                else if(computer == "paper" && player == "rock" ){
                    announcer_text.innerText="You lose! Computer wins this round";
                    computer_score++;
                    computer_score_count.innerText = computer_score;
                
                }
                else if(computer == "scissors" && player == "paper" ){
                    announcer_text.innerText="You lose! Computer wins this round";
                    computer_score++;
                    computer_score_count.innerText = computer_score;
                }
                else if(computer == "rock" && player == "paper" ){
                    announcer_text.innerText="You win! Computer loses this round";
                    player_score++;
                    player_score_count.innerText = player_score;
                }
                else if(computer == "paper" && player == "scissors" ){
                    announcer_text.innerText="You win! Computer loses this round";
                    player_score++;
                    player_score_count.innerText = player_score;
                }
                else if(computer == "scissors" && player == "rock" ){
                    announcer_text.innerText="You win! Computer loses this round";
                    player_score++;
                    player_score_count.innerText = player_score;
                }
                else {
                    announcer_text.innerText="Draw! Next round!";
                    
                    
                }
                
                }
            if (current_round < round_choice) {
                waitForPlayerChoice(function(playerChoice) {
                    console.log("Player chose:", playerChoice);
                    let int_between_1_and_3 = Math.floor((Math.random() * 3) + 1);
                    let computer_choice = getComputerChoice(int_between_1_and_3);
                    console.log(computer_choice);

                    evaluate_round(computer_choice, playerChoice);
                    

                    current_round++
                    console.log(current_round);
                    round_counter.innerText = current_round;
                    playNextRound();  // Recursively play the next round
                });
            } else if(current_round>= round_choice){

                // Disable event listeners
                
                // Display scores or winner
                console.log(current_round);
                if(player_score > computer_score){
                    announcer_text.innerText = 'Game over. You win with a score of ' + player_score + ' to ' + computer_score;
                    round_selection.innerHTML= '<button onClick="window.location.reload();">Play Again!</button>';
                    round_selection.style.display = "initial";
                    
                    detachEventListeners();
                }else if (player_score < computer_score){
                    announcer_text.innerText = 'Game over. You lose with a score of ' + player_score + ' to ' + computer_score;
                    //add new game button so users can play again
                    round_selection.innerHTML= '<button onClick="window.location.reload();">Play Again!</button>';
                    round_selection.style.display = "initial";
                    
                    detachEventListeners();
                }else {
                    announcer_text.innerText = 'Draw. Final score of ' + player_score + ' to ' + computer_score;
                    round_selection.innerHTML= '<button onClick="window.location.reload();">Play Again!</button>';
                    round_selection.style.display = "initial";
                    
                    detachEventListeners();
                }
            }}
        
        playNextRound();
        }






//player_choice event listener to get user choice on click, using event listeners after everything has loaded so we can feed the input into the loop


/*heres what I want to happen:
1. the announcer h1 tells player to pick number of rounds and then spawns 3 buttons, 1 round, 3 rounds, 5 rounds
2. when player picks rounds, announcer removes buttons and logs the round amount chosen
3. announcer is replaced by "pick your weapon"
4. player clicks button and player_choice is returned
5. computer rolls for their choice and their choice is highlighted after one second
6. announcer says who won and then we sleep for 1 second before the computer button highlight goes back to normal
7. increment round and continue by replacing the round number with the current round
8. increment the player or computer score according to the comparison of both rolls
9. re run the announcer at the pick your weapon stage 
10.repeat 3-9 until chosen amount of rounds have elapsed
11.when the current round reaches the chosen amount of rounds, replace announcer with the winner and score count and add a button that says "play again?", which reloads the page

while loop structure:

after user picks round number -> initiate while loop using the round number as the parameter
if player has chosen an option: 
-make computer choose an option and then highlight computer's choice after waiting .5 seconds.
-run the evaluation and change the announcer text to who wins
-increment round for each evaluation outcome
-only increment winner score if they win



*/




