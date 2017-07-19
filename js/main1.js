$(function() {
    var m = 0;
			$(".menu").hide();
	
	//메뉴버튼  클릭시 메뉴 등장
    $(".menubtn>a").click(function(){
        m++;
        //menubtn 클릭시 menu 보이고 없어지기
        if(m%2 == 1){
            $(".menu").show();
            $("#head").css("z-index","9008");
            $("nav>dl:eq(0)").stop().delay(500).animate({"margin-top":"0px", "opacity":"1"},1000);
            $("nav>dl:eq(1)").stop().delay(700).animate({"margin-top":"0px", "opacity":"1"},1000);
            $("nav>dl:eq(2)").stop().delay(900).animate({"margin-top":"0px", "opacity":"1"},1000);
            $(".menu>.mfooter").stop().delay(1100).animate({"margin-left":"-151px", "opacity":"1"},1000);
        }
        else{
            $("#head").css("z-index","9003");
            $("nav>dl:eq(0)").stop().delay(1100).animate({"margin-top":"-150px", "opacity":"0"},1000);
            $("nav>dl:eq(1)").stop().delay(900).animate({"margin-top":"-150px", "opacity":"0"},1000);
            $("nav>dl:eq(2)").stop().delay(700).animate({"margin-top":"-150px", "opacity":"0"},1000);
            $(".menu>.mfooter").stop().delay(500).animate({"margin-left":"-300px", "opacity":"0"},1000);
            $(".menu").hide(2000);
        }
        $(".menubg").toggleClass("menubg_on")
        
        $(".menubar").toggleClass("menubar_on")
        
        return false
        
    })
	//어사이드 호버 및  클릭 효과
	$("aside>ul>li:eq(0)").addClass("click").siblings().addClass("hover");
    
    $("aside>ul>li>a").click(function(){
        return false
    })
	
	//aside hover시 나타나기
    $("aside").on("mouseover focusin",function(){
        $(this).stop().animate({"right":"0"},500);
    });
    $("aside").on("mouseout focusout",function(){
        $(this).stop().animate({"right":"-250px"},500);
    });
    
    /*
	$("aside").hover(function(){
		$(this).stop().animate({"right":"0"},500)
	}, function(){
		$(this).stop().animate({"right":"-250px"},500)
	})
    */
    
    //비쥬얼 사운드바
 	function soundbar1() {
		$(".sline1").animate({"height":"0px"}, 200, null);
		$(".sline1").animate({"height":"22px"},200,null,soundbar1)
    }
	function soundbar2() {
		$(".sline2").animate({"height":"0px"}, 250, null);
		$(".sline2").animate({"height":"22px"},250,null,soundbar2)
    }
	function soundbar3() {
		$(".sline3").animate({"height":"0px"}, 300, null);
		$(".sline3").animate({"height":"22px"},300,null,soundbar3)
    }
	function soundbar4() {
		$(".sline4").animate({"height":"0px"}, 200, null);
		$(".sline4").animate({"height":"22px"},300,null,soundbar4)
    }
	function soundbar5() {
		$(".sline5").animate({"height":"0px"}, 350, null);
		$(".sline5").animate({"height":"22px"},250,null,soundbar5)
    }
    soundbar1();
	soundbar2();
    soundbar3();
	soundbar4();
	soundbar5();
    
	//비쥬얼 동영상 변경
	
	//타이틀 제목
	var vn = ["MXM", "BLADE & SOUL", "LINEAGE M"];
	
	//변경할 비디오  제목
	var bgname = ["mxm", "blade", "lineagem"];
	
	//ctitle > p>a 제목
	var cstitle = ["WHO`s NEXT? MASTER X MASTER!", "MAESTRO, 격사 : 전장의 지휘자", "Lineage M Cinematic Teaser"]

	var i = 0;
    
	
	//cut
    /*
	function cut(){
		$(".cut").addClass("cut_on");
	}
    
    cut();
	*/
	
	function tline(ch){
        $(".tline").css("height",ch);
		$(".tline").stop().animate({"height":"100%"}, 16000, null, tline);
	};
	
    tline()
   
    $(".cut>div>p").animate({"left":"100%"},1500, function(){
        $(this).animate({"width":"0%", "left":"0%"},0, function(){
            $(this).delay(13000).animate({"width":"101%"},1500)
        })
    }) 
   
    var bTimer1 = setInterval(time,16000);
        function time(){
            i++
            if(i>2){i=0}
            $(".bg>video").attr("src", "dvd/"+bgname[i]+".mp4")  ;
            $(".listtitle").text(vn[i] );
            $(".ctitle h2").text(vn[i]);
            $(".ctitle>p>a").text(cstitle[i]);
            $(".cinemabtn>a:eq("+i+")").addClass("on").siblings().removeClass("on");
            $(".cut>div>p").stop().animate({"width":"101%"},0).finish();
            
            $(".cut>div>p").animate({"left":"100%"},1500, function(){
                    $(this).animate({"width":"0%", "left":"0%"},0, function(){
                        $(this).delay(13000).animate({"width":"101%"},1500)
                    })
                })
            
            tline(0);
        }
    
   $(".cinemabtn>a").click(function(){ 
	   return false;
        clearInterval(bTimer1);
        setInterval(time,16000);
        i = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".bg>video").attr("src", "dvd/"+bgname[i]+".mp4")  ;
        $(".listtitle").text(vn[i] );
        $(".ctitle h2").text(vn[i]);
        $(".ctitle>p>a").text(cstitle[i]);
        $(".cut>div>p").stop().animate({"width":"101%","left":"0%"}).finish();
        $(".cut>div>p").animate({"left":"100%"},1500, function(){
            $(this).animate({"width":"0%","left":"0%"},0, function(){
                $(this).delay(13000).animate({"width":"101%"},1500)
            })
        })
        
        tline(0);
   }); 
   
   //사운드제어
   var video = $(".mybg")
   var sbtn = $(".muted")
   
   sbtn.click(function(){
       if(video.prop('muted')){
            video.prop('muted', false)
       }
       else{
            video.prop('muted', true)
       }
       return false;
   })


});