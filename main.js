$(function() {

  var box = $("input");
  var log = $('textarea');
  var add, minus, multiply, divide;
  var num;

  $("#clear").click(function() {
    box.val('');
  });

  $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine").click(function(){
    box.val(box.val() + $(this).val());

  });
  $("#plus").click(function(){
    add=true;
    minus=false;
    multiply=false;
    divide=false;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#subtract").click(function(){
    add=false;
    minus=true;
    multiply=false;
    divide=false;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#multiply").click(function(){
    add=false;
    minus=false;
    multiply=true;
    divide=false;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#divide").click(function(){
    add=false;
    minus=false;
    multiply=false;
    divide=true;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#equals").click(function(){
    var num2 = parseInt(box.val());
    if(num && add) {
      box.val(num + num2);
    } else if (num && minus) {
      box.val(num - num2);
    } else if (num && multiply) {
      box.val(num * num2);
    } else if (num && divide) {
      box.val(num / num2);
    } else {
      //$(body).insertBefore("img", );
    }
    log.prepend(box.val() + "\n");
  });
});

//numbers gets clicked and box.val needs to get stored
//operator gets clicked and that gets stored
//numbers get clicked again and box.val must get stored
//user clicks equals, 1st, 2nd set of numbers get operated on by stored operator

//box.val().substring(box.val().length) === this.val() ? box.val() + return false;








