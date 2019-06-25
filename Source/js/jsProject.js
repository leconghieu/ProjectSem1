$(document).ready(function(){
    
   $(".pos a").click(function(){
       $(window).scrollTop(1130);
   });
    $(window).scroll(function(){
        $(".slideanim").each(function(){
            pos = $(this).offset().top;
            wintop = $(window).scrollTop();
            if(pos < wintop + 600){
                $(this).addClass("slide");
            }
            
        });    
    });
    $(".btn-default").click(function(){
        alert("This product has been added to your cart");
    })
    $(".btn-primary").click(function(){
        $(".fade-box").css({'visibility':'visible'});
        $(this).parent().next(".quick-view").addClass("my-appear");
        $(this).parent().next(".quick-view").removeClass("my-disappear")    
    });
    $(".quick-view > button").click(function(){
        $(".fade-box").css({'visibility':'hidden'});
        $(this).parent(".quick-view").removeClass("my-appear");
        $(this).parent(".quick-view").addClass("my-disappear");
    })
   
        

        


    
    
   



})