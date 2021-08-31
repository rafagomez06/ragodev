jQuery(document).ready(function( $ ) {

     // Smoth scroll on page hash links
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                
                var top_space = 0;
                
                if( $('#header').length ) {
                  top_space = $('#header').outerHeight();
                }
                
                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');
                  
                return false;
            }
        }
    });
    
    // Back to top button
    $(window).scroll(function() {
  
        if ($(this).scrollTop() > 100) {
            $('.regresar-inicio').fadeIn('slow');
        } else {
            $('.regresar-inicio').fadeOut('slow');
        }
        
    });
    
    $('.regresar-inicio').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
    });
  
  });