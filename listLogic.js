//Create gray fadeout line through logic
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});
//Add delete element to span, end propagation, fade and remove
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(750,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//Add items to the list
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var tdoText = $(this).val();
		$("ul").append("<li><span>X </span>" + tdoText + "</li>");
		$(this).val("");
	}
});
//Hide input section
$("#briefcase").click(function(){
	$("input[type='text']").fadeToggle();
});