$(document).ready(function(){

    //PARALLAX
    setTimeout(function(){
        $('#promotion-area').parallax({imageSrc: 'img/parallax.jpg'});
    }, 250);

    //SCROLL ANIMATION
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let companySection = $('#company-area');
    let productsSection = $('#products-area');
    let founderSection = $('#founder-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){
        let btnId = $(this).attr('id');

        if(btnId == 'company-menu'){
            scrollTo = companySection;
        } else if(btnId == 'products-menu'){
            scrollTo = productsSection;
        } else if(btnId == 'founder-menu'){
            scrollTo = founderSection;
        } else if(btnId == 'contact-menu'){
            scrollTo = contactSection;
        } else{
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });

});