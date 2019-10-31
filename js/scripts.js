$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();



var result = $("#userNumber").val();
 $("p#result").text(result);

});
});
