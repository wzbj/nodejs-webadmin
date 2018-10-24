<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon " type="images/x-icon" href="/public/img/favicon.ico">
    <link rel="stylesheet" href="/public/css/music/music_list.css">
    <title>积目-音乐人列表</title>
</head>
<body>
    <div class="container">
        <div class="infor">
            <div class="picture">
                <img src="/public/img/girl.jpg" class="touxiang" alt="">
                <img src="/public/img/flag.jpg" class="flag" alt="">
            </div>
            <div class="name">孟宇</div>
            <div class="dection">音乐制作人</div>
            <div class="operation">
                <div class="op_left">注销</div>
                <div class="op_right">上传</div>
            </div>
        </div>
        <div class="lists">
            <ul>
                <li class="one" id="success">
                    <!-- <div class="song_content">
                        <div class="singer_pic">
                            <img src="/public/img/girl.jpg" alt="">
                        </div>
                        <div class="song">
                            <div class="song_name">说谎</div>
                            <div class="song_singer">林宥嘉</div>
                        </div>
                        <div class="song_time">04:03</div>
                    </div> -->
                </li>
                <li class="two current" id="loading">
                    <!-- <div class="song_content">
                        <div class="singer_pic">
                            <img src="/public/img/girl.jpg" alt="">
                        </div>
                        <div class="song">
                            <div class="song_name">说谎</div>
                            <div class="song_singer">林宥嘉</div>
                        </div>
                        <div class="song_time">04:03</div>
                    </div> -->
                </li>
                <li class="three" id="pass">
                    <!-- <div class="song_content">
                        <div class="singer_pic">
                            <img src="/public/img/girl.jpg" alt="">
                        </div>
                        <div class="song">
                            <div class="song_name">说谎</div>
                            <div class="song_singer">林宥嘉</div>
                        </div>
                        <div class="song_time">04:03</div>
                    </div> -->
                </li>
            </ul>
        </div>
        <div class="status">
            <ul>
                <li>已通过</li>
                <li class="current">审核中</li>
                <li>未通过</li>
            </ul>
        </div>
    </div>
</body>
</html>
<script src="/public/js/common/jquery-1.9.1.min.js"></script>
<script type="text/javascript">
    //信息渲染
    var nickname = sessionStorage.getItem("nickname");
    var phoneNumber = sessionStorage.getItem("phoneNumber");
    var photo = sessionStorage.getItem("photo");

    $(".touxiang").attr("src",photo);
    $(".name").html(nickname);

    if(!nickname||!phoneNumber||!photo){
        alert('请先进行登录');
        window.location.href="/view/musicUpload-login";
    }

    //加载列表
    $.ajax({
        url:'/New/Musician/Music/musicList',
        type:"POST",
        dataType:"json",
        async: false,
        data:{
            phoneNumber:phoneNumber,
            verifyStatus: 3
        },
        success:function(data){
            if(data.code == '200'){
                var dataD = data.data.result;
                // console.log(dataD);
                var len = dataD.length;
                $('#loading').html(str);
                var str = '';
                for(var i=0;i<len;i++){
                    // console.log(dataD[i].duration);
                    var secondTime = parseInt(dataD[i].duration);// 秒
                    var minuteTime = 0;// 分
                    var hourTime = 0;// 小时
                    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
                        //获取分钟，除以60取整数，得到整数分钟
                        minuteTime = parseInt(secondTime / 60);
                        //获取秒数，秒数取佘，得到整数秒数
                        secondTime = parseInt(secondTime % 60);
                        //如果分钟大于60，将分钟转换成小时
                        if(minuteTime > 60) {
                            //获取小时，获取分钟除以60，得到整数小时
                            hourTime = parseInt(minuteTime / 60);
                            //获取小时后取佘的分，获取分钟除以60取佘的分
                            minuteTime = parseInt(minuteTime % 60);
                        }
                    }
                    
                    if(secondTime >= 0 && secondTime < 10){//秒
                        var duration = "" + '0' + parseInt(secondTime) + "";
                    }else if( secondTime >= 10){
                        var duration = "" + parseInt(secondTime) + "";
                    }
                    
                    if(minuteTime >= 0 && minuteTime < 10) {//分
                        duration = "" + '0' + parseInt(minuteTime) + ":" + duration;
                    }else if( minuteTime >= 10){
                        duration = "" + parseInt(minuteTime) + ":" + duration;
                    }

                    if(hourTime > 0 && hourTime < 10) {//时
                        duration = "" + '0' + parseInt(hourTime) + ":" + duration;
                    }else if( hourTime >= 10){
                        duration = "" + parseInt(hourTime) + ":" + duration;
                    }


                    str += "<div class='song_content'>";
                    str += "<div class='singer_pic'><img src="+ dataD[i].cover +" alt=''></div>";
                    str += "<div class='song'><div class='song_name'>"+ dataD[i].musicName +"</div><div class='song_singer'>"+ dataD[i].author +"</div></div>";
                    str += "<div class='song_time'>"+ duration +"</div></div>"
                }
                $('#loading').html(str);
            }else{
                $('.msg').html(data.msg);
            }
        },
        error:function(jqXHR, textStatus){
            var json = JSON.parse(jqXHR.responseText);
            $('.msg').html(json.msg);
        }
    })

    $.ajax({
        url:'/New/Musician/Music/musicList',
        type:"POST",
        dataType:"json",
        async: false,
        data:{
            phoneNumber:phoneNumber,
            verifyStatus: 1
        },
        success:function(data){
            if(data.code == '200'){
                var dataD = data.data.result;
                // console.log(dataD);
                var len = dataD.length;
                $('#loading').html(str);
                var str = '';
                for(var i=0;i<len;i++){
                    // console.log(dataD[i].duration);
                    var secondTime = parseInt(dataD[i].duration);// 秒
                    var minuteTime = 0;// 分
                    var hourTime = 0;// 小时
                    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
                        //获取分钟，除以60取整数，得到整数分钟
                        minuteTime = parseInt(secondTime / 60);
                        //获取秒数，秒数取佘，得到整数秒数
                        secondTime = parseInt(secondTime % 60);
                        //如果分钟大于60，将分钟转换成小时
                        if(minuteTime > 60) {
                            //获取小时，获取分钟除以60，得到整数小时
                            hourTime = parseInt(minuteTime / 60);
                            //获取小时后取佘的分，获取分钟除以60取佘的分
                            minuteTime = parseInt(minuteTime % 60);
                        }
                    }
                    
                    if(secondTime >= 0 && secondTime < 10){//秒
                        var duration = "" + '0' + parseInt(secondTime) + "";
                    }else if( secondTime >= 10){
                        var duration = "" + parseInt(secondTime) + "";
                    }
                    
                    if(minuteTime >= 0 && minuteTime < 10) {//分
                        duration = "" + '0' + parseInt(minuteTime) + ":" + duration;
                    }else if( minuteTime >= 10){
                        duration = "" + parseInt(minuteTime) + ":" + duration;
                    }

                    if(hourTime > 0 && hourTime < 10) {//时
                        duration = "" + '0' + parseInt(hourTime) + ":" + duration;
                    }else if( hourTime >= 10){
                        duration = "" + parseInt(hourTime) + ":" + duration;
                    }


                    str += "<div class='song_content'>";
                    str += "<div class='singer_pic'><img src="+ dataD[i].cover +" alt=''></div>";
                    str += "<div class='song'><div class='song_name'>"+ dataD[i].musicName +"</div><div class='song_singer'>"+ dataD[i].author +"</div></div>";
                    str += "<div class='song_time'>"+ duration +"</div></div>"
                }
                $('#success').html(str);
            }else{
                $('.msg').html(data.msg);
            }
        },
        error:function(jqXHR, textStatus){
            var json = JSON.parse(jqXHR.responseText);
            $('.msg').html(json.msg);
        }
    })

    $.ajax({
        url:'/New/Musician/Music/musicList',
        type:"POST",
        dataType:"json",
        async: false,
        data:{
            phoneNumber:phoneNumber,
            verifyStatus: 2
        },
        success:function(data){
            if(data.code == '200'){
                var dataD = data.data.result;
                // console.log(dataD);
                var len = dataD.length;
                $('#loading').html(str);
                var str = '';
                for(var i=0;i<len;i++){
                    // console.log(dataD[i].duration);
                    var secondTime = parseInt(dataD[i].duration);// 秒
                    var minuteTime = 0;// 分
                    var hourTime = 0;// 小时
                    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
                        //获取分钟，除以60取整数，得到整数分钟
                        minuteTime = parseInt(secondTime / 60);
                        //获取秒数，秒数取佘，得到整数秒数
                        secondTime = parseInt(secondTime % 60);
                        //如果分钟大于60，将分钟转换成小时
                        if(minuteTime > 60) {
                            //获取小时，获取分钟除以60，得到整数小时
                            hourTime = parseInt(minuteTime / 60);
                            //获取小时后取佘的分，获取分钟除以60取佘的分
                            minuteTime = parseInt(minuteTime % 60);
                        }
                    }
                    
                    if(secondTime >= 0 && secondTime < 10){//秒
                        var duration = "" + '0' + parseInt(secondTime) + "";
                    }else if( secondTime >= 10){
                        var duration = "" + parseInt(secondTime) + "";
                    }
                    
                    if(minuteTime >= 0 && minuteTime < 10) {//分
                        duration = "" + '0' + parseInt(minuteTime) + ":" + duration;
                    }else if( minuteTime >= 10){
                        duration = "" + parseInt(minuteTime) + ":" + duration;
                    }

                    if(hourTime > 0 && hourTime < 10) {//时
                        duration = "" + '0' + parseInt(hourTime) + ":" + duration;
                    }else if( hourTime >= 10){
                        duration = "" + parseInt(hourTime) + ":" + duration;
                    }


                    str += "<div class='song_content'>";
                    str += "<div class='singer_pic'><img src="+ dataD[i].cover +" alt=''></div>";
                    str += "<div class='song'><div class='song_name'>"+ dataD[i].musicName +"</div><div class='song_singer'>"+ dataD[i].author +"</div></div>";
                    str += "<div class='song_time'>"+ duration +"</div></div>"
                }
                $('#pass').html(str);
            }else{
                $('.msg').html(data.msg);
            }
        },
        error:function(jqXHR, textStatus){
            var json = JSON.parse(jqXHR.responseText);
            $('.msg').html(json.msg);
        }
    })

    //状态切换
    var statu = document.getElementsByClassName("status")[0].getElementsByTagName("li");
    var lists = document.getElementsByClassName("lists")[0].getElementsByTagName("li");
    for (var i = 0; i < statu.length; i++) {
        statu[i].onclick = function(){
            doTabs(this);
        }
    }
    function doTabs(obj){
        for (var i = 0; i < statu.length; i++) {
            if(statu[i]==obj){
                statu[i].className = "current";
                lists[i].className = "current";
            }else{
                statu[i].className = "";
                lists[i].className = "";
            }
        }
    }

    $('.op_left').on('click',function(){
		$.ajax({
            url:'/New/Partner/PUGC/logout',
            type:"POST",
            dataType:"json",
            // async: false,
            data:{
                
            },
            success:function(data){
                if(data.code == '200'){
                    window.location.href='/view/musicUpload-login';
                    sessionStorage.clear();
                }else{
                    $('.errMsg').html(data.msg);
                }
            },
            error:function(jqXHR, textStatus){
            	var json = JSON.parse(jqXHR.responseText);
                $('.errMsg').html(json.msg);
            }
        })
    })

    $('.op_right').on('click',function(){
        window.location.href='/view/musicUpload-music';
    })

    //关闭浏览器清空localstorage
    // window.onunload=function(){
    //     localStorage.clear();
    // }
</script>