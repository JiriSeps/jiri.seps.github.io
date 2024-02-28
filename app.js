$(document).ready(function(){
    $('.parallax-bg').each(function() {
        const image = $(this).data('image');
        $(this).css('background-image', `url('./${image}')`);
    });
    
    // Initialize the Slick slider
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
    
    // Function to handle the parallax effect
    function handleParallax() {
        const scrolled = $(window).scrollTop();
        // First parallax with slower speed
        $('.parallax-bg.slower').css('transform', 'translateY(' + -(scrolled * 0.1) + 'px)');
        // Second parallax with faster speed
        $('.parallax-bg.faster').css('transform', 'translateY(' + -(scrolled * 0.2) + 'px)');
    }
    
    // Call handleParallax function when the page is loaded
    handleParallax();
    
    // Call handleParallax function when the user scrolls
    $(window).on('scroll', handleParallax);
    
    // Mobile navigation functionality
    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function(){
        mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
});