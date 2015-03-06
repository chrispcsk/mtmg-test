$(document).ready(function() {
    $("#owl-demo").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $('.js-menu-trigger,.js-menu-screen').on('click touchstart', function(e) {
        $('.js-menu,.js-menu-screen').toggleClass('is-visible');
        e.preventDefault();
    });

    $('.nav-menu > li').bind('mouseover', openSubMenu).bind('mouseout', closeSubMenu);

    function openSubMenu() {
        $(this).find('ul').css('visibility', 'visible');
    };

    function closeSubMenu() {
        $(this).find('ul').css('visibility', 'hidden');
    };

});