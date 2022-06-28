let index = 0;
let questions = quiz.sort(function(){
    return 0.5 - Math.random();
});


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