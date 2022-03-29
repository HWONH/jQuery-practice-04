$(document).ready(function(){
    var $img_arr_01=$("#ex_00 .slider .img-box");
    console.log($img_arr_01);
    $("#ex_00 .total-Num").text($img_arr_01.length);
    
    /*     
    $($img_arr_01).click(function(){
        var $index=$(this).index();
        if($index<$img_arr_01.length-1){
            $($img_arr_01).hide();
            $(this).next().show();
        }else{

        }
    });
     */
    
    $($img_arr_01).click(function(){
        var $index=$(this).index();
        if($index<$img_arr_01.length-1){
            $($img_arr_01).hide();
            $(this).next().show();
        }else{
            $($img_arr_01).hide();
            $($img_arr_01).first().show();
        }
    });

    setInterval(function(){
        var $f_child=$("#ex_01 .slider .img-box").first();
        $("#ex_01 .slider").append($f_child);
    }, 3000);

    setInterval(function(){
        var $f_child=$("#ex_02 .slider .img-box").first();
        $("#ex_02 .slider").stop().animate({"margin-left":"-25%"},1000,function(){
            $("#ex_02 .slider").append($f_child).css("margin-left","0");
        });
    }, 3000);

    setInterval(function(){
        var $f_child=$("#ex_05 .slides li").first();
        var $pause=$("#ex_05").hasClass("pause");
        if($pause==true){

        }else{
            $("#ex_05 .slides").stop().animate({"margin-left":"-100%"},1000,function(){
                $("#ex_05 .slides").append($f_child).css("margin-left","0");
            });
        }
    }, 2000);

    $("#ex_05").hover(function(){
        $(this).addClass("pause")
    }, function(){
        $(this).removeClass("pause")
    });
    
    setInterval(function(){
        var $f_child=$("#ex_06 .slides li").first();
        var $pause=$("#ex_06 .play_btn").hasClass("pause");
        if($pause==true){

        }else{
            $("#ex_06 .slides").stop().animate({"margin-left":"-100%"},1000,function(){
                $("#ex_06 .slides").append($f_child).css("margin-left","0");
            });
        }
    }, 2000);

    $("#ex_06 .play_btn").click(function(){
        var $pause=$(this).hasClass("pause");
        if($pause==false){
            $(this).addClass("pause");
            $(this).text("PLAY");
        }else{
            $(this).removeClass("pause");
            $(this).text("PAUSE");
        }
    });

    $("#ex_07 .control_panel .control_button").click(function(){
        var $index=$(this).index();
        $("#ex_07 .control_panel .control_button").removeClass("active");
        $(this).addClass("active");
        $("#ex_07 .slider_panel").stop().animate({"margin-left":(-600*$index)+"px"}, 1000);
    });

    setInterval(function(){
        var $f_child=$("#ex_08 .slider_panel .slider_image").first();
        $("#ex_08 .slider_panel").stop().animate({"margin-left":"-600px"},1000,function(){
            $("#ex_08 .slider_panel").append($f_child).css("margin-left","0");            
            var $rel=$("#ex_08 .slider_panel .slider_image").eq(0).attr("rel");
            $("#ex_08 .control_panel .control_button").removeClass("active");
            $("#ex_08 .control_panel .control_button").eq($rel).addClass("active");
        });
    }, 2000);
});