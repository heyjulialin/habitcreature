/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	
   $('.closer').click(function(){

      $('.overlay').hide();

      $('audio').each(function(){
         this.pause(); // Stop playing
         this.currentTime = 0; // Reset time
      }); 

   });


   $('.one').click(function(){

      $('.overlay1').fadeIn();

   });

   $('.two').click(function(){ // this makes a popup on click

      $('.overlay2').fadeIn();

   });

   $('.three').click(function(){ // this makes a popup on click

      $('.overlay3').fadeIn();

   });

   $('.four').click(function(){

      $('.overlay4').fadeIn();

   });

   $('.five').click(function(){

      $('.overlay5').fadeIn();

   });

   $('.six').click(function(){

      $('.overlay6').fadeIn();

   });

   $('.seven').click(function(){

      $('.overlay7').fadeIn();

   });

   $('.eight').click(function(){

      $('.overlay8').fadeIn();

   });

   $('.nine').click(function(){

      $('.overlay9').fadeIn();

   });

   $('.ten').click(function(){

      $('.overlay10').fadeIn();

   });

   $('.eleven').click(function(){

      $('.overlay11').fadeIn();

   });


   $('.twelve').click(function(){

      $('.overlay12').fadeIn();

   });

   $('.thirteen').click(function(){

      $('.overlay13').fadeIn();

   });

   $('.fourteen').click(function(){

      $('.overlay14').fadeIn();

   });

   $('.fifteen').click(function(){

      $('.overlay15').fadeIn();

   });

   $('.sixteen').click(function(){

      $('.overlay16').fadeIn();

   });

   $('.seventeen').click(function(){

      $('.overlay17').fadeIn();

   });

   $('.eighteen').click(function(){

      $('.overlay18').fadeIn();

   });

   $('.nineteen').click(function(){

      $('.overlay19').fadeIn();

   });

   $('.twenty').click(function(){

      $('.overlay20').fadeIn();

   });

   $('.twentyone').click(function(){

      $('.overlay21').fadeIn();

   });

    $('.twentytwo').click(function(){

      $('.overlay22').fadeIn();

   });

   // $('.twentythree').click(function(){

   //    $('.overlay23').fadeIn();

   // });

 
   






}); //end document.ready block
