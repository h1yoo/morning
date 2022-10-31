$(document).ready(function(){
    //상단메뉴 마우스오버(css에선 hover)시, 각 항목 별 하위메뉴 슬라이드
    $(".mainMenu").mouseenter(function(){  //마우스 갖다대면 function 실행
        $(".mainMenu").removeClass("active");
        //위로 서서히 올라간 후 없어짐{display: none;} 
        $(".subMenu").stop().slideUp();  //  .stop()은 할 일들 멈추라는 의미이고, .slideUp()은 올라가라는 의미(=>즉, 하던거 멈추고 위로 밀어올림(숨김))
        //그것(=마우스를 댄 곳)의 다음형제요소를 표시 (==>룸 미리보기 메뉴(<a>)의 형제는 <nav>이고 <nav>는 하위메뉴이다. 즉, 하위메뉴를 표시하겠다는 의미)
        $(this).next(".subMenu").stop().slideDown();
        //이전 형제는 prev   (slideDown은 표시하는 것이고 slideUp은 숨기는 것)
        //class가 subMenu로 설정되어 있는 것의 형제 (==<nav>   <nav>속 요소들(=하위메뉴))를 표시하겠다
        //형제 요소를 보려면 설계도(=html)에서 보면 보기 수월함
    });
    //하위메뉴에 마우스 갖다댈 때 메인메뉴 활성화 유지
    $(".subMenu").mouseenter(function(){
        //$(".subMenu").prev().addClass("active");
        $("this").prev().addClass("active");
    });
    //하위메뉴 마우스 아웃 시 올라가게 설정
    $(".subMenu, header>nav").mouseleave(function(){
        $(".mainMenu").removeClass("active");
        $(".subMenu").stop().slideUp();
    });

    //왼쪽방향 자동 슬라이드
    setInterval(leftMove, 2000);  //시험에서 대부분 3초(3000) 이내로. 문제 잘 봐야 함
    function leftMove() {
        $("#sliding div").stop().animate({left:"-1100px"}, 1000, function(){
            $(this).append( $(this).children().first() );
            $(this).css("left",0);  //좌표 0으로 변경 (이동된 거 원위치로)
        });
    }

    //공지사항 보이게 하기
    $(".show").click(function(){
        $("#popup").fadeIn();  //팝업창 뜨면 화면이 올라가는데, <a>태그는 그런 경향이 있다고 한다!
    });

    //팝업창 사라지게 하기
    $("#popup button").click(function(){
        $("#popup").fadeOut();
    });

});  //마지막 부분