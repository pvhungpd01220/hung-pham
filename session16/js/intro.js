$('#demo1_click').click(function() {
	$('#demo1').html('Hello Jquery');
});
$('#demo2_click').click(function() {
	//$('#demo2').css('color', 'red');
	$('#demo2').css({'color':'red', 'font-size':'30px'});
});
$('#demo3_click').click(function() {
	$('#demo3').attr('src', 'image/2.jpg');
});
$('.demo4_show').click(function() {
	$('#demo4').show("fast");
});
$('.demo4_hide').click(function() {
	$('#demo4').hide(5000);
});