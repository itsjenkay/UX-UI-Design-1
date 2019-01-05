
$(document).ready(function() {

		$(window).scroll(function () {
				if($(this).scrollTop()<400){
					 $('.inner-state2').hide('slow');
					 // $('.prog1').hide('slow');
					

		 			
		}
		else  if ($(this).scrollTop()>530) {
					 $('.inner-state2').show('slow');
			 // $('.prog1').show('slow');
		}



				});

					$(window).scroll(function () {
				if($(this).scrollTop()<170){
					 $('.deals-pics-show').hide('slow');
					 // $('.prog1').hide('slow');
					

		 			
		}
		else  if ($(this).scrollTop()>190) {
					 $('.deals-pics-show').show('slow');
			 // $('.prog1').show('slow');
		}



				});	

					$(window).scroll(function () {
				if($(this).scrollTop()<600){
					 $('.showabj').hide('slow');
					 // $('.prog1').hide('slow');
					

		 			
		}
		else  if ($(this).scrollTop()>610) {
					 $('.showabj').show('slow');
			 // $('.prog1').show('slow');
		}



});

$('#bars').on('click', function () {
$('#mid-nav').slideToggle('slow');
});
$('.medium-phone').on('click', function () {
$('#phone-drop').slideToggle('slow');
});
$('.medium-currency').on('click', function () {
$('#currency-drop').slideToggle('slow');
});

$('.phone-contact').on('click', function () {
$('#lg-phone-drop').slideToggle('slow');
$('#lg-currency-drop').hide('slow');
});
$('#lg-currency').on('click', function () {
$('#lg-currency-drop').slideToggle('slow');
$('#lg-phone-drop').hide('slow');
});


});
 	
