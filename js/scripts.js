$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();

var userNumberArray = [];

var result = $("#userNumber").val();
 $("p#result").text(result);


userNumberArray.push(result.split(""));



  console.log(userNumberArray);

});
});
