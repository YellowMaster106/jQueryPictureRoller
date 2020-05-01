$(function () {
    var num = 1;
    $(".point").eq(0).addClass("point-active") 
    $("#lunbo").attr('src', "img/" + num + ".jpg");

    //清除红点
    function timeClear() {
        $(".point").removeClass("point-active")
    }

    //上翻图片
    function imgback() {
        num--;
        if (num == 0) {
            num = 4;
        }
        timeClear();
        $(".point").eq(num - 1).addClass("point-active")
        $("#lunbo").attr('src', "img/" + num + ".jpg");
    }

    //下翻图片
    function imgnext() {
        num++;
        if (num == 5) {
            num = 1;
        }
        timeClear();
        $(".point").eq(num - 1).addClass("point-active")
        $("#lunbo").attr('src', "img/" + num + ".jpg");
    }

    //计时器
    let timer = setInterval(() => {
        imgnext()
    }, 3000)

    //停止计时
    function timeStop() {
        clearInterval(timer);
    }

    //开始计时
    function timeStart() {
        timer = setInterval(() => {
            imgnext()
        }, 3000)
    }

    //箭头上翻事件
    function backAction() {
        timeStop();
        imgback();
        timeStart();
    }

    //箭头下翻事件
    function nextAction() {
        timeStop();
        imgnext();
        timeStart();
    }

    //给箭头附上鼠标点击事件
    $("#left").click(function () {
        backAction()
    })
    $("#right").click(function () {
        nextAction()
    })


    // 点击圆点换图
    var allLi = $("ul li")
    for (var i = 0; i < allLi.length; i++) {
        allLi[i].index = i;
        allLi[i].onclick = function () {
            timeStop();
            num = this.index + 1;
            $("#lunbo").attr('src', "img/" + num + ".jpg");
            timeClear();
            $(".point").eq(this.index).addClass("point-active")
            timeStart();
        }
    }

    // 点击图片换图
    var imgLi = $(".imgDisplay img")
    for (var i = 0; i < imgLi.length; i++) {
        imgLi[i].index = i;
        imgLi[i].onclick = function () {
            timeStop();
            num = this.index + 1;
            $("#lunbo").attr('src', "img/" + num + ".jpg");
            timeClear();
            $(".point").eq(this.index).addClass("point-active")
            timeStart();
        }
    }

});