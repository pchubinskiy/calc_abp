$(function() {

	var box = $("input");

	$("#clear").click(function() {
		box.val('');
	});

	$("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #decimal").click(function(){
		var n = $(this).val();
    box.val(box.val() + n);
	});


	$("#plus").click(function(){

	});
	$("#subtract").click(function(){

	});
	$("#multiply").click(function(){

	});
	$("#divide").click(function(){

	});

});
