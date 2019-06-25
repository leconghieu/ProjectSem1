$(document).ready(function(){
    $(".box-product h5.price").each(function(){
        $(this).hover(function(){
            x = $(this).html();
            alert(x);
        })

    })


})