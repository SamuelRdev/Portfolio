$(document).ready(function(){

    var $sm = 480;
    var $md = 768;
 
    function resizeThis() {
       $imgH = $('.middle img').width();
       if ($('#modal-body-script').width() >= $sm) {
          $('.left,.right,.section-animate').css('height', $imgH);
       } else {
          $('.left,.right,.section-animate').css('height', 'auto');
       }
    }
 
    resizeThis();
 
    $('#modal-body-script').resize(function(){
       resizeThis();
    });
 
    $('#modal-body-script').scroll(function() {
       $('.section-animate').each(function(){
          var $elementPos = $(this).offset().top;
          var $scrollPos = $('#modal-body-script').scrollTop();
 
          var $sectionH = $(this).height();
          var $h = $('#modal-body-script').height();
          var $sectionVert = (($h/2)-($sectionH/4));
 
 
          if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
             $(this).addClass('animate');
          } else {
             $(this).removeClass('animate');
          }
       });
    });
 });
 
 $(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
   });
 });