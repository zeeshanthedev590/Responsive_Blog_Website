$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('input#phone').characterCounter();
});
  
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators:true,
});

M.toast({html: 'Thanks For Comming At iCoder'})