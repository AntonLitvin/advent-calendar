$(function() {


if ( getCookie('visited') == 1) {
	modal2Show (true);
	return;
}


$('.sock-wrapper').on('click', function(e){
	var day = new Date();
	day = day.getDate();
	var clickedDay = $(this).parents('.day-wrapper').find('span').text();
	if (day == clickedDay) {
		e.preventDefault();
		$('#modal').fadeIn();
		$('.overlay').fadeIn();
	} else {
		modal2Show();
	}
});


$('.sock-wrapper').hover(function(){
	$(this).parents('.day-wrapper').find('.light').addClass('active');
}, function(){
	$(this).parents('.day-wrapper').find('.light').removeClass('active');
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