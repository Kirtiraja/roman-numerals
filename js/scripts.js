$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
// var userNumberArray = result.split("")

// function stringSplit(string) {
//   return result.split(" ").forEach(function(string) {
//     userNumberArray.push(stringSplit(string));



var userNumberArray = [];


var result = $("#userNumber").val();
 $("p#result").text(result);
result.split("");
userNumberArray.push(result);
console.log(userNumberArray);

});
});
