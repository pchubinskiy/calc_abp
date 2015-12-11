$(function() {

	var box = $("input");
  var hiddenbox = $("#hidden_box");

	$("#clear").click(function() {
		box.val('');
	});

	$("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #decimal").click(function(){
		var n = $(this).val();
    box.val(box.val() + n);
	});


	$("#plus").click(function(){
    var n = $(this).val();
    box.val(box.val() + n);
	});
	$("#subtract").click(function(){
    var n = $(this).val();
    box.val(box.val() + n);
	});
	$("#multiply").click(function(){
    var n = $(this).val();
    box.val(box.val() + n);
	});
	$("#divide").click(function(){
    var n = $(this).val();
    box.val(box.val() + n);
	});
  $("#equals").click(function(){
    box.val(eval(box.val()));
  });


});
