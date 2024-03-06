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
        // Adjust scroll speed for mobile
        const scrollMultiplier = $(window).width() > 768 ? 0.15 : 0.08;
        $('.parallax-bg.slower').css('transform', 'translateY(' + -(scrolled * scrollMultiplier) + 'px)');
        $('.parallax-bg.faster').css('transform', 'translateY(' + -(scrolled * (scrollMultiplier + 0.1)) + 'px)');
    }
    
    // Call handleParallax function when the page is loaded
    handleParallax();
    
    // Call handleParallax function when the user scrolls
    $(window).on('scroll', handleParallax);
    
    // Function to handle background movement based on mouse position
    $(document).on('mousemove', function(e) {   
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        const bgOffsetX = (mouseX - $(window).width() / 2) / 200;
        const bgOffsetY = (mouseY - $(window).height() / 2) / 200;
        $('.movingimage').css('transform', 'translate(' + bgOffsetX + 'px, ' + bgOffsetY + 'px)');
    });
    
    // Mobile navigation functionality
    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    // Function to open mobile navigation
    function openMobileNav() {
        mobileNav.classList.add('open');
    }
    
    // Function to close mobile navigation
    function closeMobileNav() {
        mobileNav.classList.remove('open');
    }
    
    // Click event listener for hamburger icon
    hamburger.addEventListener('click', openMobileNav);
    
    // Touch event listener for hamburger icon
    hamburger.addEventListener('touchstart', openMobileNav);
    
    // Click event listener for times icon
    times.addEventListener('click', closeMobileNav);
    
    // Touch event listener for times icon
    times.addEventListener('touchstart', closeMobileNav);
});
