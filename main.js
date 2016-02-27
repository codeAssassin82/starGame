'use strict'



$(document).ready(init);

function init() {

  $('.reset').click('click', reset);
  $('.confirm').click('click', confirm);
  $('.box').click(selected);
}



function reset() {    /////refresh page
$('total').text;
$('button').on();
}

function selected() {
  var $this = $(this);
  console.log('clicked');
}

var $selectedDivs = $('.selected');
var total = 0;

$selectedDivs.each(function(index, value) {
  total += parseInt($(value).text());
})

// if (total === $('#stars').children().length){
//   removeNumbers();
//   generateStars(correct);
// }
// function addTotal() {
//   var selected = $('.selector')
//   theTotal = number(theTotal) + number() ///working on it
// }


function confirm() {   ////add buttons
var selected = $('.selected')
total = number()
}
function carAdd() {                             ///car was adding, working on it
  var $myCar = $('.myCar');
  var random = Math.floor( Math.random() * 9 + 1);
  console.log(yess);
    for (var i = 0; i < random ; i++) {
     var  $bmw = $('<div>').addClass('image');
     $myCar.append($bmw);
  }
}

// $(document).on("keyPress",keyPress):
// $('.button').click(clickButton);
// //
// function nextMove(square) {
//   if (document.winner != null){
//     setMessage(document.winner + " already won the game.");
