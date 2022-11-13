//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('nav a').removeClass('active');
             $('nav a:link').addClass('inactive');  
             $('nav a').eq(index).addClass('active');
             $('nav a:link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('nav a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
        
        
    });
 
    
});

$(document).ready(function(){
    $('nav a:link').addClass('inactive');    
    $('nav a').eq(0).addClass('active');
    $('nav a:link').eq(0).removeClass('inactive');
    


});
