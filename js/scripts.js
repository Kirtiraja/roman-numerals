$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();


var userNumberArray = [];


var result = $("#userNumber").val();
 $("p#result").text(result);
userNumberArray.push(result.split(""));

var romanizeNumber = function romanize(number) {
  var userNumber = [1, 5, 10, 50, 100, 500, 1,000];

  if (userNumberArray.includes(userNumber[0])) {
  return "I" ; }
}

  console.log(userNumberArray);
  console.log(romanizeNumber)
});
});


// var romanizeNumber = userNumberArray.map(function(number){
//   return number + "I";
