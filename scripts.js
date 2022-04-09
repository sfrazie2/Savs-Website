<button type="button" class="btn btn-large btn-primary">Large Button</button> 
$(document).ready(function(){
    $("selector").hideme(function(){
class="btn btn-large btn-primary"
    });
    $("#calculate").click(function(){
      //Put the three form values into variables. Not required, just easier.
      var firstNumber = $("#firstNumber").val();
      var secondNumber = $("#secondNumber").val();
      var operation = $("#operation").val();
      var answer;
   
      //if either number isn't a number, display the error and quit
      if(firstNumber==""||isNaN(firstNumber)||secondNumber==""||isNaN(secondNumber)){
        displayError(true);
        return;
      }
      //Do the calculation based on the operation
      switch(operation){
        case 'plus':
          answer = Number(firstNumber) + Number(secondNumber);
          break;
        case 'minus':
          answer = Number(firstNumber) - Number(secondNumber);
          break;
        case 'times':
          answer = Number(firstNumber) * Number(secondNumber);
          break;
        case 'divide':
          answer = Number(firstNumber) / Number(secondNumber);
          break;
          //If it's not one of these four operations above, just exit.
        default:
          return;
      }
      //Everything's good, hide the error
      displayError(false)
      
      //Set the (rounded) answer to the answer text and show it.
      $("#answer").text(answer);
      //Show the answer block
      $("#answer-line").show();
      return;
    });
    
    //Function to turn the error box on and off
    function displayError(state){
      if(state==true){
        $("#error").show();
        $("#answer-line").hide();
      }
      else $("#error").hide();
    }
  });
  
  
