$( document ).ready(function() {
    $('.red').on("click", function() {

		$('.body-content').css({'background-color': '#D00000'});
		$('.title').css({'color': '#FFFF00'});
		$("#funnypicture").attr('src',"img/turkey.png");

	});



$('.blue').on("click", function() {
    		

		$('.body-content').css({'background-color': '#3333FF'});
		$('.title').css({'color': '#00FF7F'});
		$("#funnypicture").attr('src',"img/pigs.png");

	});

$('.pink').on("click", function() {
    		

		$('.body-content').css({'background-color': '#FF2BB2'});
		$('.title').css({'color': '#4682B4'});
		$("#funnypicture").attr('src',"img/popcorn.png");

	});

$('.green').on("click", function() {
    		

		$('.body-content').css({'background-color': '#32F999'});
		$('.title').css({'color': '#8B4513'});
		$("#funnypicture").attr('src',"img/pigs.png");


	});

 $( ".stores" ).hide();

// slide down button
$( ".fa-angle-double-down" ).on("click", function() {
    $( ".stores" ).slideToggle("slow");
});





});