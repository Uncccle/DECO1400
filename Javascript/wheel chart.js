$(function(){
    var index=0;
    var X;
    change_picture();
    function change_picture(){
        X=setInterval(function(){
            if(index==2){
                index=0;
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
            }else{
                index++;
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
            }
        },3000)
    }
        
    $(".box-left").click(function(){
        clearInterval(X);
        if(index==0){
            index=$(".box-img").length-1;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            change_picture();
        }else{
            index--;
        $(".box-img").css("opacity","0");
        $(".box-img").eq(index).css("opacity","1");
        change_picture();
        }
        
    })
    $(".box-right").click(function(){
        clearInterval(X);
        if(index==$(".box-img").length-1){
            index=0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            change_picture();
        }else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            change_picture();
        }
        
    })

    $(".botton").click(function(){
        clearInterval(X);
        var index_x=$(this).index();
        index=index_x;
        $(".box-img").css("opacity","0");
        $(".box-img").eq(index).css("opacity","1");
        change_picture();
    })
})