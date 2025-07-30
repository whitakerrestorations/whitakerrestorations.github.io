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
    
	setTimeout(function() {
		if( $('#contact_formModal', document).hasClass('show') || $('#contactSmallModal', document).hasClass('show') ){
			//console.log('already open');
		} else {
			//const myModal = bootstrap.Modal.getInstance($('#contactSmallModal')[0]);
			//myModal.show();
			$('.btn-contactSM_btn', document).trigger('click');
		}
    }, 5000); // 10000 milliseconds = 5 seconds
    
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
				$('#logoBar').addClass('position-sticky fixed-top');//.css({position: 'fixed', top: '0px','z-index': '2'});
				$('#navbar').css({position: 'fixed', top: '110px','z-index': '2'});

				$('#logoBar img').css({'max-height': '1rem !important'}); 
			} else {
				$('#navbar').css({position: 'static'});
				$('#logoBar').removeClass('position-sticky fixed-top');//.css({position: 'static'});
			}
		}
		//if (window.matchMedia("(min-width: 992px)").matches){
			$(window).scroll(sticky);
			$(window).resize(sticky);
		//}
	}).on('click', '.btn-contactSM_btn', function () {
		$(this).hide(); // Hide the button
		$('body').css('overflow', 'auto');
		//var myModal = new bootstrap.Modal(document.getElementById('chatModal'));
		//myModal.show();
    }).on('click', '.btn-contactFormModal', function(e){
		var this_modal = $(this).parents('.modal');//.attr('id');
		const myModal = bootstrap.Modal.getInstance(this_modal[0]); //new bootstrap.Modal( this_modal[0] );
		myModal.hide();
		
	}).on('click', '#contact_form .btn-close, #contactSmallModal .btn-close', function(e){
		$('.btn-contactSM_btn').show();
	}).on('hidden.bs.modal', function (e) {
		//console.log(e);
		if(e.target.id == 'contact_formModal'){
			$('.btn-contactSM_btn').show();
		}
    });

})(jQuery);


    // Get the query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const message = params.get('message'); // Get 'message' parameter

    // Display it if it exists
    if (message) {
	const message ="We received your Message, Thank you.";    
      document.getElementById('message').textContent = decodeURIComponent(message);
    }
