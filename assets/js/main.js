(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

     // Fact Counter
     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

	$(document).ready(function() {
		var boxInitialTop = $('#logoBar').offset().top;
		function sticky(){
			if ($(window).scrollTop() > boxInitialTop) {
			  $('#logoBar').css({position: 'fixed', top: '0px','z-index': '2'});
			  $('#navbar').css({position: 'fixed', top: '110px','z-index': '2'});

			  $('#logoBar img').css({'max-height': '1rem !important'}); 
			} else {
			  $('#navbar').css({position: 'static'});
				  $('#logoBar').css({position: 'static'});
			}
		}
		//if (window.matchMedia("(min-width: 992px)").matches){
			$(window).scroll(sticky);
			$(window).resize(sticky);
		//}
	});

})(jQuery);