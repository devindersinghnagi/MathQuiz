player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
 document.getElementById("player2_name").innerHTML = player2_name + " : ";
  document.getElementById("player1_score").innerHTML = player1_score ;
   document.getElementById("player2_score").innerHTML = player2_score ;
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
     document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
function send() {
     word = document.getElementById("word").value;
     word1 = document.getElementById("word1").value;
     ans=word *word1
question_word = "<h4 id='word_display'> Q. "+word+"x"+word1+"</h4>"; 
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_word + input_box + check_button ; document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = ""; }

   question_turn = "player1";
   answer_turn = "player2";

   function check()
   {
       answer = document.getElementById("input_check_box").value;
       
       if(answer == ans)
       {
           if(answer_turn == "player1")
           {
               player1_score = player1_score +1;
               document.getElementById("player1_score").innerHTML = player1_score;
           }
           else
           {
               player2_score = player2_score +1;
               document.getElementById("player2_score").innerHTML = player2_score;
           }
        }

        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_score;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_score
        }

        

      

     if(answer_turn == "player1")
     {
         answer_turn = "player2"
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_score;
     }
     else
     {
         answer_turn = "player1"
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_score
         document.getElementById("output").innerHTML = ""; }
     }