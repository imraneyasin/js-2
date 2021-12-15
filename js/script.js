
$(document).ready(function(){

	//alert("welcome to site");

	//hide
	$('#hide').click(function() {
		$('img').hide("fast")
	});


	//show
	$('#show').click(function() {
		$('img').show("slow")
	});

	//toggle
	$('#toggle').click(function() {
		$('img').toggle('500')
	});

});