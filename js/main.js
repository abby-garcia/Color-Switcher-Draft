$( document ).ready(function() {
    $('.red').on("click", function() {

		$('.body-content').css({'background-color': '#D00000', 'h2': '#FFD700'});
	});



$('.blue').on("click", function() {
    		

		$('.body-content').css({'background-color': '#3333FF'});

	});

$('.pink').on("click", function() {
    		

		$('.body-content').css({'background-color': '#FF2BB2'});

	});

$('.green').on("click", function() {
    		

		$('.body-content').css({'background-color': '#32F999'});

	});

 $( ".stores" ).hide();

// slide down button
$( ".fa-angle-double-down" ).on("click", function() {
    $( ".stores" ).slideToggle("slow");
});





});