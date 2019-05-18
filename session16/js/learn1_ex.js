$('#runMyBox').click(function() {
	$('#go').animate({'left': '300px'});
	$('#go').animate({'top': '300px'});
	$('#go').animate({'left': '600px'});
	$('#go').animate({'bottom': '600px'}); 
	$('#mybox').animate({'width': '300px'});
	$('#mybox2').animate({'top': '90px'});
	$('#mybox2').animate({'left': '300px'});
	$('#mybox2').show(100);
	$('#mybox2').animate({'height': '260px'});
	$('#mybox3').animate({'left': '300px'});
	$('#mybox3').animate({'top': '350px'});
	$('#mybox3').animate({'width': '300px'});
});
