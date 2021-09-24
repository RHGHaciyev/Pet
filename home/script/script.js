$(document).ready(function(){
    setInterval(function(){
$('#slide ul').animate({left:"-1400px"},800,function(){
$('#slide ul li:last').after($('#slide ul li:first'));


})
    });
   
});