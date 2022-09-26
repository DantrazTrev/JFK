
$(document).ready(function(){
  "use strict";
  var bodyWidth = (window.innerWidth)
  var bodyHeight = (window.innerHeight);
  
  var popup = $('#popup');
  var randPosX = Math.floor((Math.random()*0.6*bodyWidth));
  var randPosY = Math.floor((Math.random()*0.78*bodyHeight));
console.log(randPosX)
console.log(bodyWidth)
  
popup
.css("margin-top", randPosY )
.css("margin-left", randPosX );
});
