$(function() {
		if ( $('#feature-offer').length > 0 ) {	
			$('#feature-offer .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 400, 'easeInOutExpo' );
				
			});
		}
});