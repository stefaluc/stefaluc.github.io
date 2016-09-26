$(document).ready(function(){
	$('.slider').slider({full_width: true});
});

window.onload = function() {
	setTimeout(function() {
		document.querySelectorAll('.link')[0].style.opacity = '1';
		document.querySelectorAll('.link')[1].style.opacity = '1';
		document.querySelectorAll('.link')[2].style.opacity = '1';
		document.querySelectorAll('.link')[3].style.opacity = '1';
		document.getElementById('photo').style.opacity = '1';
		document.getElementById('divider').style.width = '50%';
	}, 1000);
}

$('.arrow-next').click(function() {
	$('.slider').slider('next');
});

$('.arrow-prev').click(function() {
	$('.slider').slider('prev');
});