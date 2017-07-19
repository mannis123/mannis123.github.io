$(function () {
    function slider() {
        $(".slider>section").mouseenter(function () {
            $(this).css("opacity", "1")
        });
        $(".slider>section>a").click(function () {
            $(this).parent("section").css("opacity", 1);
            $(this).parent("section").children(".info").slideDown(500);

            return false;
        });
        $(".info>.exit").click(function () {
            $(".info").slideUp(500);

            return false;
        })

    }
    if ($(window).width() >= 1200) {
        //service slider
        slider();

        $(".slider>section").mouseleave(function () {
            $(this).css("opacity", "0.2");

            $(this).children(".info").slideUp(500);
        })

        //service section width check
        var swidth = $("body").outerWidth() / 3;

        //비쥬얼 사운드바
        function soundbar() {
            function soundbar1() {
                $(".sline1").animate({
                    "height": "0px"
                }, 200, null);
                $(".sline1").animate({
                    "height": "22px"
                }, 200, null, soundbar1)
            };

            function soundbar2() {
                $(".sline2").animate({
                    "height": "0px"
                }, 250, null);
                $(".sline2").animate({
                    "height": "22px"
                }, 250, null, soundbar2)
            };

            function soundbar3() {
                $(".sline3").animate({
                    "height": "0px"
                }, 300, null);
                $(".sline3").animate({
                    "height": "22px"
                }, 300, null, soundbar3)
            };

            function soundbar4() {
                $(".sline4").animate({
                    "height": "0px"
                }, 200, null);
                $(".sline4").animate({
                    "height": "22px"
                }, 300, null, soundbar4)
            };

            function soundbar5() {
                $(".sline5").animate({
                    "height": "0px"
                }, 350, null);
                $(".sline5").animate({
                    "height": "22px"
                }, 250, null, soundbar5)
            };
            soundbar1();
            soundbar2();
            soundbar3();
            soundbar4();
            soundbar5();
        }
        soundbar();

        //비쥬얼 타이틀 제목
        var vn = ["MXM", "BLADE & SOUL", "LINEAGE M"];

        //비쥬얼 비디오  제목
        var bgname = ["mxm", "blade", "lineagem"];

        //비쥬얼 서브 타이틀 제목
        var cstitle = ["WHO`s NEXT? MASTER X MASTER!", "MAESTRO, 격사 : 전장의 지휘자", "Lineage M Cinematic Teaser"];

        //동영상을 카운팅해 줄 변수
        var i = 0;

        //listline 위치값
        var listline = ["-126", "-85", "-43"];

        //listtilte 위치값
        var listtitle = ["-123", "-82", "-40"];

        //동영상 가운데 재생시간 줄
        function tline(ch) {
            $(".tline").css("height", ch);
            $(".tline").stop().animate({
                "height": "100%"
            }, 16000, null, tline);
        };

        tline()
        //문서가 준비될시 첫 동영상 cut 애니메이션
        function s_animate() {
            $(".cut>div>p").animate({
                "left": "100%"
            }, 1500, function () {
                $(this).animate({
                    "width": "0%",
                    "left": "0%"
                }, 0, function () {
                    $(this).delay(13000).animate({
                        "width": "101%"
                    }, 1500)
                })
            })
        };
        s_animate();

        //16초마다  동영상 변경
        var bTimer1 = setInterval(time, 16000);

        function time() {
            i++
            if (i > 2) {
                i = 0
            };
            $(".bg>video").attr("src", "dvd/" + bgname[i] + ".mp4");
            $(".listline").css("margin-top", listline[i] + "px");
            $(".listtitle").css("margin-top", listtitle[i] + "px");
            $(".listtitle").text(vn[i]);
            $(".ctitle h2").text(vn[i]);
            $(".ctitle>p>a").text(cstitle[i]);
            $(".cinemabtn>a:eq(" + i + ")").addClass("on").siblings().removeClass("on");
            $(".cut>div>p").stop().animate({
                "width": "101%"
            }, 0).finish();

            $(".cut>div>p").animate({
                "left": "100%"
            }, 1500, function () {
                $(this).animate({
                    "width": "0%",
                    "left": "0%"
                }, 0, function () {
                    $(this).delay(13000).animate({
                        "width": "101%"
                    }, 1500)
                })
            });

            tline(0);
        }
        //비쥬얼 버튼 클릭시 이벤트 발생
        $(".cinemabtn>a").click(function () {
            clearInterval(bTimer1);
            setInterval(time, 16000);
            i = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(".bg>video").attr("src", "dvd/" + bgname[i] + ".mp4");
            $(".listline").css("margin-top", listline[i] + "px");
            $(".listtitle").css("margin-top", listtitle[i] + "px");
            $(".listtitle").text(vn[i]);
            $(".ctitle h2").text(vn[i]);
            $(".ctitle>p>a").text(cstitle[i]);
            $(".cut>div>p").stop().animate({
                "width": "101%",
                "left": "0%"
            }).finish();
            $(".cut>div>p").animate({
                "left": "100%"
            }, 1500, function () {
                $(this).animate({
                    "width": "0%",
                    "left": "0%"
                }, 0, function () {
                    $(this).delay(13000).animate({
                        "width": "101%"
                    }, 1500)
                })
            });
            tline(0);

        });

        //사운드제어
        var video = $(".mybg");
        var sbtn = $(".muted");

        sbtn.click(function () {
            if (video.prop('muted')) {
                video.prop('muted', false)
            } else {
                video.prop('muted', true)
            };
            return false;
        })
        //company 카운터
        var leftv = ["50%", "0%", "50%"];
        c = 0;


        $("#company>.rightbtn").click(function () {
            c++;
            if (c > 2) {
                c = 2
            };
            var bs = ["100% 100%", "135% 135%", "170% 170%"];  

            $("#company").css("background-size", bs[c]);

            $("#company>section:eq(" + (c - 1) + ")").stop().animate({
                "left": "-100%",
                "opacity": "0"
            }, 1500);
            $("#company>section:eq(" + c + ")").stop().fadeIn(2500).siblings("section").fadeOut(1000);

            $("#company>section:eq(" + c + ")>.scale").css({
                "transform": "scale(1)"
            });


            if (c > 1) {
                $(".rightbtn").fadeOut(500)
            };
            if (c > 0) {
                $(".leftbtn").fadeIn(500)
            };

            return false;
        })

        $("#company>.leftbtn").click(function () {
            c--;
            if (c < 0) {
                c = 0
            };
            var bs = ["100% 100%", "140% 140%", "180% 180%"];

            $("#company>section:eq(" + c + ")").stop().fadeIn(0).siblings("section").fadeOut(2000);

            $("#company>section:eq(" + c + ")").stop().animate({
                "left": leftv[c],
                "opacity": "1"
            }, 2000);

            $("#company").css("background-size", bs[c]);


            $("#company>section:eq(" + (c + 1) + ")>.scale").css({
                "transform": "scale(0.2)"
            });


            if (c < 2) {
                $(".rightbtn").fadeIn(500)
            };
            if (c < 1) {
                $(".leftbtn").fadeOut(500)
            };
        })
        //aside hover시 나타나기
        $("aside").on("mouseenter focusin", function () {
            $(this).stop().animate({
                "right": "0"
            }, 500);
        });
        $("aside").on("mouseleave focusout", function () {
            $(this).stop().animate({
                "right": "-250px"
            }, 500);
        });

        //service slider
        var si = 0;
        $(".srightbtn").click(function () {
            si++;
            if (si >= 7) {
                si = 7, $(".srightbtn").fadeOut(500);
            }
            if (si > 0) {
                $(".sleftbtn").fadeIn(500);
            }

            $(".slider").css("margin-left", -swidth * si + "px");
        })

        $(".sleftbtn").click(function () {
            si--;
            $(".slider").css("margin-left", -swidth * si + "px");
            if (si < 9) {
                $(".srightbtn").fadeIn(500);
            }
            if (si < 1) {
                si = 1, $(".sleftbtn").fadeOut(500);
            }
        })
        
        var cutwidth = $("body").width()/2-600;
        console.log(cutwidth)
        $(".cut>div:eq(0), .cut>div:eq(7)").css("width",cutwidth+"px")
    }

    if ($(window).width() < 1200) {
        //service slider
        slider();

        //service section width check
        var swidth = $("body").outerWidth();

        //aside
        $("aside>ul>li:eq(1)").addClass("click");
        $("aside>ul>li:eq(1) .aleft").text("1");
        $("aside>ul>li:eq(2) .aleft").text("2");
        $("aside>ul>li:eq(3) .aleft").text("3");
        //company
        var cc = 0;

        $(".rightbtn").click(function () {
            cc++;
            if (cc > 0) {
                $(".leftbtn").fadeIn(500);
            }
            if (cc > 1) {
                $(".rightbtn").fadeOut(500);
                cc = 2;
            }
            $("#company>section:eq(" + cc + ")").fadeIn(500);
            $("#company>section:eq(" + (cc - 1) + ")").fadeOut(500);
        });
        $(".leftbtn").click(function () {
            cc--;
            if (cc < 2) {
                $(".rightbtn").fadeIn(500);
            }
            if (cc < 1) {
                $(".leftbtn").fadeOut(500);
                cc=0;
            }
            $("#company>section:eq(" + cc + ")").fadeIn(500);
            $("#company>section:eq(" + (cc + 1) + ")").fadeOut(500);
        })
        //service slider
    var si = 0;
    $(".srightbtn").click(function () {
        si++;
        if (si >= 9) {
            si = 9, $(".srightbtn").fadeOut(500);
        }
        if (si > 0) {
            $(".sleftbtn").fadeIn(500);
        }

        $(".slider").css("margin-left", -swidth * si + "px");
    })

    $(".sleftbtn").click(function () {
        si--;
        $(".slider").css("margin-left", -swidth * si + "px");
        if (si < 9) {
            $(".srightbtn").fadeIn(500);
        }
        if (si < 1) {
            si = 1, $(".sleftbtn").fadeOut(500);
        }
    })
    }
    
    if($(window).width()<768){
        //contact news
        $(".news").click(function () {
            $(".c_left").animate({
                "top": "50%",
                "opacity": "0"
            }, 500, function () {
                $(this).fadeOut();
            });

            $(".c_right").animate({
                "top": "60%",
                "opacity": "0"
            }, 500, function () {
                $(this).fadeOut();
            });

            $("#contact>form").fadeIn();
            $("#contact>form").animate({
                "top": "20%",
                "opacity": "1"
            }, 500);

            return false;
        })
        $(".back").click(function () {
            $("#contact>form").animate({
                "top": "-10%",
                "opacity": "0"
            }, 500, function () {
                $(this).fadeOut();
            });

            $(".c_left").fadeIn();
            $(".c_left").animate({
                "top": "20%",
                "opacity": "1"
            }, 500);

            $(".c_right").fadeIn();
            $(".c_right").animate({
                "top": "30%",
                "opacity": "1"
            }, 500);

            return false;
        })
    }
    if($(window).width()>767){
    //contact news
        $(".news").click(function () {
            $(".c_left").animate({
                "top": "70%",
                "opacity": "0"
            }, 500, function () {
                $(this).fadeOut();
            });

            $("#contact>form").fadeIn();
            $("#contact>form").animate({
                "top": "50%",
                "opacity": "1"
            }, 500);

            return false;
        })

        $(".back").click(function () {
            $("#contact>form").animate({
                "top": "30%",
                "opacity": "0"
            }, 500, function () {
                $(this).fadeOut();
            });

            $(".c_left").fadeIn();

            $(".c_left").animate({
                "top": "50%",
                "opacity": "1"
            }, 500);

            return false;
        })

    }

    var m = 0;
    $(".menu").hide();

    //메뉴버튼  클릭시 메뉴 등장
    $(".menubtn>a").click(function () {
        m++;
        //menubtn 클릭시 menu 보이고 없어지기
        if (m % 2 == 1) {
            $("#head").css({
                "height": "100%",
                "z-index": "9008"
            });
            $(".menu").show();

            $("nav>dl:eq(0)").stop().delay(500).animate({
                "margin-top": "0px",
                "opacity": "1"
            }, 1000);
            $("nav>dl:eq(1)").stop().delay(700).animate({
                "margin-top": "0px",
                "opacity": "1"
            }, 1000);
            $("nav>dl:eq(2)").stop().delay(900).animate({
                "margin-top": "0px",
                "opacity": "1"
            }, 1000);
            $(".menu>.mfooter").stop().delay(1100).animate({
                "margin-left": "-151px",
                "opacity": "1"
            }, 1000);

        } else {
            $("#head").css({
                "z-index": "9008"
            });
            $("#head").delay(2000).animate({
                "height": "0px"
            });
            $("nav>dl:eq(0)").stop().delay(1100).animate({
                "margin-top": "-150px",
                "opacity": "0"
            }, 1000);
            $("nav>dl:eq(1)").stop().delay(900).animate({
                "margin-top": "-150px",
                "opacity": "0"
            }, 1000);
            $("nav>dl:eq(2)").stop().delay(700).animate({
                "margin-top": "-150px",
                "opacity": "0"
            }, 1000);
            $(".menu>.mfooter").stop().delay(500).animate({
                "margin-left": "-300px",
                "opacity": "0"
            }, 1000);
            $(".menu").hide(2000);
        }

        $(".menubg").toggleClass("menubg_on");

        $(".menubar").toggleClass("menubar_on");

        return false;

    })

    //어사이드 호버 및  클릭 효과
    var ac = 0;

    $("aside>ul>li").click(function () {
        ac = $(this).index();
        var atc = $("article");
        var ccutname = ["CINEMA", "COMPANY", "SERVICE", "CONTACT"];

        $(".ccut>div:eq(1)>p").text(ccutname[ac]);
        $(this).addClass("click").removeClass("hover").siblings().removeClass("click").addClass("hover");

        $(".ccut").fadeIn();

//        $(".ccut>div>p").stop().animate({
//            "width": "100%"
//        }, 700, function () {
//            $("article:eq(" + ac + ")").siblings("article").fadeOut()
//        });

        $(".ccut>div>p").stop().animate({
            "width": "100%"
        }, 700)
        $("article:eq("+ac+")").siblings("article").fadeOut(1400)

        $(".ccut>div>p").delay(400).animate({
            "left": "100%"
        }, 700, function () {
            $(this).animate({
                "left": "0%",
                "width": "0%"
            }, 0, function () {
                $(".ccut").fadeOut()
            })
        });
        $("article:eq(" + ac + ")").delay(700).fadeIn(700);

        return false;
    })

    //cpart2
    o = 0;

    $(".cmtitle>li>a").click(function () {
        o = $(this).parent().index();
        $(".cmtitle>li:eq(" + o + ")").addClass("on").siblings("li").removeClass("on");
        $(".cbigtitle>li:eq(" + o + ")").addClass("on").siblings("li").removeClass("on");

        $(".cmtext>li:eq(" + o + ")").delay(1000).fadeIn(1000).siblings("li").fadeOut(500)

        return false;

    })

})
