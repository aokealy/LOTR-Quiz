let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

let questions = quiz.sort(function(){
    return 0.5 - Math.random();
});

let totalQuestion = questions.length;

$(function () {

    //timer for code starts here
    let totalTime = 200; //200 seconds for the timer 
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function(){
        counter++;
        min = Math.floor( (totalTime - counter) / 60 ); // calculating the min
        sec = totalTime - (min * 60) - counter

       $(".timerBox span").text(min + ":" + sec);
        
       if(counter == totalTime){

         clearInterval(timer);
       }
        
       // console.log("min =" + min);
       // console.log("sec =" + sec);

    }, 1000); // timer set for 1 second interval

    //timer for code ends here


    //print question
    printQuestion(index); 

});

// Function to print question start
function printQuestion(i) {
   $(".questionBox").text(questions[i].question);
   $(".optionBox span").eq(0).text(questions[i].option[0]);
   $(".optionBox span").eq(1).text(questions[i].option[1]);
   $(".optionBox span").eq(2).text(questions[i].option[2]);
   $(".optionBox span").eq(3).text(questions[i].option[3]);

}
// Function to print question end

// function to check answer start
 function checkAnswer(option) {
    attempt++;
    let optionClicked = $(option).data("opt");

   // console.log(questions[index]);
    if(optionClicked == questions[index].answer){
        $(option).addClass("right");
        score++;
    }
    else {
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score);

    $(".optionBox span").attr("onClick","");

 }
// function to check answer end

// function for the next question button start


function showNext(){
   
    if(index >= (questions.length - 1)){
        showResult(0);
        return;
    }

    index++;
    $(".optionBox span").removeClass();

    $(".optionBox span").attr("onclick","checkAnswer(this)");
 
    printQuestion(index);
}

// function for the next question button end


//function for result start

  function showResult(j){
    if (
        j == 1 && //variable is used to check whether the show result button is clicked or not
        index < questions.length -1 && // condition to check if quiz if finished or not
        !confirm("The Quiz has not finished! You can skip quiz and get final result.")
     ) {
              return;
    }


    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
  }

//function for result end

