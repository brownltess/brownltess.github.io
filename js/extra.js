// Training
	var features6AnimateTitle = function() {
		if ( $('#feature-training').length > 0 ) {	
			$('#feature-training .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 400, 'easeInOutExpo' );
				
			});
		}
	};
	// var features2WayPoint = function() {
	// 	if ( $('#feature-training').length > 0 ) {
	// 		$('#feature-training').waypoint( function( direction ) {
										
	// 			if( direction === 'down' && !$(this).hasClass('animated') ) {
					
				
	// 				setTimeout(features2AnimateTitle, 100);

	// 				setTimeout(function(){
	// 					$('.animate-object-1').addClass('fadeInLeft animated');
	// 				}, 800);		
	// 				setTimeout(function(){
	// 					$('.animate-object-2').addClass('fadeInLeft animated');
	// 				}, 600);	
	// 				setTimeout(function(){
	// 					$('.animate-object-3').addClass('fadeInLeft animated');
	// 				}, 400);
	// 				setTimeout(function(){
	// 					$('.animate-object-4').addClass('fadeInLeft animated');
	// 				}, 200);
					
	// 				$(this.element).addClass('animated');
						
	// 			}
	// 		} , { offset: '75%' } );
	// 	}
	// };