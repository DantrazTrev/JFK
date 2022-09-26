
$(document).ready(function(){
  "use strict";
  var bodyWidth = (document.body.clientWidth)
  var bodyHeight = (document.body.clientHeight);
  
  var popup = $('#popup');
  var randPosX = Math.floor((Math.random()*0.6*bodyWidth));
  var randPosY = Math.floor((Math.random()*0.78*bodyHeight));
console.log(randPosX)
console.log(bodyWidth)
  
popup
.css("margin-top", randPosY )
.css("margin-left", randPosX );
});
