$(function() {


if ( getCookie('visited') == 1) {
	modal2Show (true);
	return;
}


$('.day-item a').on('click', function(e){
	var day = new Date();
	day = day.getDate();
	var clickedDay = $(this).find('.day-item-cover').text();
	if (day == clickedDay) {
		e.preventDefault();
		$('#modal').fadeIn();
		$('.overlay').fadeIn();
		$(window).off('focus.my');
		$(window).off('blur.my');
		countDown.stop();
	} else {
		modal2Show();
		countDown.stop();
	}
});


function modal2Show ( noset ) {
	$('#modal-2').fadeIn();
	$('.overlay').fadeIn();
	// if (!noset) setCookie('visited', '1', 1); // закоментировать для разработки
}


function randomGift() {
	var gifts = [
	{
		img: "img/gifts/galaxys8.png",
		text: "New Samsung Galaxy S8"
	},
	{
		img: "img/gifts/ipad.png",
		text: "New Ipad Pro"
	},
	{
		img: "img/gifts/iphone7.png",
		text: "New iPhone 7"
	},
	{
		img: "img/gifts/iphone8.png",
		text: "New iPhone 8"
	},
	{
		img: "img/gifts/iphoneX.png",
		text: "New iPhone X"
	}
];

	var index = Math.round(
		Math.random() * (gifts.length - 1)
	);

	var el = gifts[index];

	$('#gift-name').text(el.text);
	$('#gift-img').attr('src', el.img);

}

randomGift();

var isCounting = false;

var countDown = $("#countdown").countdown360({
	radius      : 60,
	seconds     : 120, //тут ставим количество секунд обратного отсчета
	strokeWidth : 10,
	fillStyle   : '#DC3C3C',
	strokeStyle : '#ffffff',
	fontSize    : 60,
	fontColor   : '#ffffff',
	fontFamily  : 'znikomitno25, serif',
	label: ["sec", "sec"],
	autostart: false,
	startOverAfterAdding: false, 
	onComplete  : function () { modal2Show() }
});


countDown.start();

$(window).on('focus.my', function(){
	if(!isCounting) {
		countDown.resume();
		isCounting = true;
	}
});

$(window).on('blur.my', function(){
	countDown.stop();
	isCounting = false;
});


function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


});