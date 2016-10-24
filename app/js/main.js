 $(document).ready(function() {
  var lang = 0; 
     widthPage =  $(window).width(); 
     sliderWidth = $('.content--slider--block').width();
     colSlide = $('#slider-wrapper .slide').length;
     sliderColWidth = colSlide * sliderWidth;
     sliderClick = 0;
     sliderPosition = 0;
     titleClick1 = 1; 
     titleClick2 = 0; 
     titleClick3 = 0; 
     titleClick4 = 0; 
     titleClick5 = 0; 
     
     //slider invest index
     clickInvest = 1;
     
     
     $('#feedback-close').click(function() {
          
     $('#feedback-popup').fadeOut(800);  
     
     }); 

     
     
     $('.stick-left').click(function() {
     
     if (clickInvest == 1) {
         
     $('#slide-inv3').css('opacity' , '1');    
     $('#slide-inv2').css('opacity' , '0');    
     $('#slide-inv1').css('opacity' , '0');    
     clickInvest = 3;    
         
     } else {
         
    if (clickInvest == 2) {
         
     $('#slide-inv1').css('opacity' , '1');    
     $('#slide-inv2').css('opacity' , '0');    
     $('#slide-inv3').css('opacity' , '0');    
     clickInvest = 1;    
         
     } else {
         
    if (clickInvest == 3) {
         
     $('#slide-inv2').css('opacity' , '1');    
     $('#slide-inv1').css('opacity' , '0');    
     $('#slide-inv3').css('opacity' , '0');    
     clickInvest = 2;    
         
     }   
         
     }    
   
     }
         
         
     
         
     }); 
          
     $('.stick-right').click(function() {
     
     if (clickInvest == 1) {
         
     $('#slide-inv2').css('opacity' , '1');    
     $('#slide-inv3').css('opacity' , '0');    
     $('#slide-inv1').css('opacity' , '0');    
     clickInvest = 2;    
         
     } else {
         
     if (clickInvest == 2) {
         
     $('#slide-inv3').css('opacity' , '1');    
     $('#slide-inv2').css('opacity' , '0');    
     $('#slide-inv1').css('opacity' , '0');    
     clickInvest = 3;    
         
     } else {
         
      if (clickInvest == 3) {
         
     $('#slide-inv1').css('opacity' , '1');    
     $('#slide-inv2').css('opacity' , '0');    
     $('#slide-inv3').css('opacity' , '0');    
     clickInvest = 1;    
         
     }   
         
     } 
         
     }
     
         
     }); 
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
  
     
     
     
     
       
$('#title-block1').click(function() {
    
if (titleClick1 == 0) {
$('#title-block1').addClass('active');
$('#sub-1 li').fadeIn(0);
titleClick1 = 1;
//off
    
$('#title-block4').removeClass('active');
$('#sub-4 li').fadeOut(0);
titleClick4 = 0;  
$('#title-block2').removeClass('active');
$('#sub-2 li').fadeOut(0);
$('#sub-filtrs-2').fadeOut(0);
titleClick2 = 0;  
$('#title-block3').removeClass('active');
$('#sub-3 li').fadeOut(0);
titleClick3 = 0;
    
$('#title-bloc5').removeClass('active');
$('#sub-5 li').fadeOut(0);
titleClick5 = 0;
    
} else {
$('#title-block1').removeClass('active');
$('#sub-1 li').fadeOut(0);
titleClick1 = 0;    
}

});
       
         
$('#title-block2').click(function() {
    
if (titleClick2 == 0) {
$('#title-block2').addClass('active');
$('#sub-2 li').fadeIn(0);
$('#sub-filtrs-2').fadeIn(0);
titleClick2 = 1;
//off
    
$('#title-block4').removeClass('active');
$('#sub-4 li').fadeOut(0);
titleClick4 = 0;  
$('#title-block3').removeClass('active');
$('#sub-3 li').fadeOut(0);
titleClick3 = 0;  
$('#title-block1').removeClass('active');
$('#sub-1 li').fadeOut(0);
titleClick1 = 0;
    
$('#title-bloc5').removeClass('active');
$('#sub-5 li').fadeOut(0);
titleClick5 = 0;
    
} else {
$('#title-block2').removeClass('active');
$('#sub-2 li').fadeOut(0);
$('#sub-filtrs-2').fadeOut(0);
titleClick2 = 0;    
}

});
     
         
         
$('#title-block3').click(function() {
    
if (titleClick3 == 0) {
$('#title-block3').addClass('active');
$('#sub-3 li').fadeIn(0);
titleClick3 = 1;
//off
    
$('#title-block4').removeClass('active');
$('#sub-4 li').fadeOut(0);
titleClick4 = 0;  
$('#title-block2').removeClass('active');
$('#sub-2 li').fadeOut(0);
$('#sub-filtrs-2').fadeOut(0);
titleClick2 = 0;  
$('#title-block1').removeClass('active');
$('#sub-1 li').fadeOut(0);
titleClick1 = 0; 
    
$('#title-bloc5').removeClass('active');
$('#sub-5 li').fadeOut(0);
titleClick5 = 0;
    
} else {
$('#title-block3').removeClass('active');
$('#sub-3 li').fadeOut(0);
titleClick3 = 0;    
}

});
     
        
         
         
$('#title-block4').click(function() {
    
if (titleClick4 == 0) {
$('#title-block4').addClass('active');
$('#sub-4 li').fadeIn(0);
titleClick4 = 1;   
    
//off
    
$('#title-block3').removeClass('active');
$('#sub-3 li').fadeOut(0);
titleClick3 = 0;  
$('#title-block2').removeClass('active');
$('#sub-2 li').fadeOut(0);
$('#sub-filtrs-2').fadeOut(0);
titleClick2 = 0;  
$('#title-block1').removeClass('active');
$('#sub-1 li').fadeOut(0);
titleClick1 = 0;
    
$('#title-block5').removeClass('active');
$('#sub-5 li').fadeOut(0);
titleClick5 = 0;
    
    
    
    
    

} else {
$('#title-block4').removeClass('active');
$('#sub-4 li').fadeOut(0);
titleClick4 = 0;    
}

});
     
           
$('#title-block5').click(function() {
    
if (titleClick5 == 0) {
$('#title-block5').addClass('active');
$('#sub-5 li').fadeIn(0);
titleClick5 = 1;   
    
//off
    
$('#title-block3').removeClass('active');
$('#sub-3 li').fadeOut(0);
titleClick3 = 0;  
$('#title-block2').removeClass('active');
$('#sub-2 li').fadeOut(0);
$('#sub-filtrs-2').fadeOut(0);
titleClick2 = 0;  
$('#title-block1').removeClass('active');
$('#sub-1 li').fadeOut(0);
titleClick1 = 0;  
$('#title-block4').removeClass('active');
$('#sub-4 li').fadeOut(0);
titleClick4 = 0;
    
    
    
    
    

} else {
$('#title-block5').removeClass('active');
$('#sub-5 li').fadeOut(0);
titleClick5 = 0;    
}

});
     
     

     
  
     
$('#slider-wrapper').css('width' , sliderColWidth);
$('.slide').css('width' , sliderWidth);
     
$('#sl-left').click(function() {
    if(sliderClick != 0) {
      sliderPosition = sliderPosition + sliderWidth; 
      $('#slider-wrapper').css('left' , sliderPosition);  
      sliderClick = sliderClick - 1; 
    }

    
    
});
     
$('#sl-right').click(function() {
    if(sliderClick < colSlide - 1) {
      sliderPosition = sliderPosition - sliderWidth;   
      $('#slider-wrapper').css('left' , sliderPosition);  
      sliderClick = sliderClick + 1; 
    }


    
}); 



     
     

$('#menu').click(function() {  
$('#sub2').addClass('active-sub');
}); 
     

$('#close-menu').click(function() {

$('#sub2').removeClass('active-sub'); 
}); 
    
     
     
     

$('#search').click(function() {
$('#sub1').addClass('active-sub');
}); 

$('#close-search').click(function() {
$('#sub1').removeClass('active-sub'); 
}); 


$('div#langs').click(function() {
    
if (lang == 0) {
$('#eng').addClass('active');   
$('#rus').removeClass('active'); 
lang = 1;} 
    
    
    else {
$('#rus').addClass('active');   
$('#eng').removeClass('active'); 
lang = 0;
}     
      
    
});     
     
     
         
      if (widthPage > 999) {

 $('#fullpage').fullpage({
anchors: ['home-1', 'home-2', 'home-3', 'home-4', 'home-5', 'footer'],
menu: '#menu',
scrollingSpeed: 1000
			}); 
          

          
          
          
}  else {$('#fullpage').off(); }
     

            
    
    
});  











     
//$(window).scroll(function() {
//var      
//heightHeader = $('header').height();
//heightContentBlock = $('.right--block').height();
//heightContentWindow = $(window).height();
//toTop = $(window).scrollTop();

      
      
//if (($(this).scrollTop() >= 462)) {
         
//$('#left-sub-menu').css('position' , 'fixed');
//$('#left-sub-menu').css('top' , heightHeader);

         
//} else {
    
//$('#left-sub-menu').css('position' , 'relative');
//$('#left-sub-menu').css('top' , 0);   
         
         
//}
      
      
      
      
//if (($(this).scrollTop() > 462 + heightContentBlock - heightContentWindow)) {

         
//$('#title-block4').removeClass('active');
//$('#sub-4 li').fadeOut(0);
//titleClick4 = 0;  
//$('#title-block2').removeClass('active');
//$('#sub-2 li').fadeOut(0);
//titleClick2 = 0;  
//$('#title-block1').removeClass('active');
//$('#sub-1 li').fadeOut(0);
//titleClick1 = 0; 
//$('#title-block3').removeClass('active');
//$('#sub-3 li').fadeOut(0);
//titleClick3 = 0;  
         
     //}
      
      
      

//});   


$(window).resize(function() {
sliderWidth = $('.content--slider--block').width();    
sliderClick = 0;
sliderPosition = 0;  
sliderColWidth = colSlide * sliderWidth;    
$('#slider-wrapper').css('width' , sliderColWidth);
$('.slide').css('width' , sliderWidth);
    
   
    
});
 
