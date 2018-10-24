<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon " type="images/x-icon" href="../../../public/img/favicon.ico">
    <link rel="stylesheet" href="../../../public/css/music/login.css">
    <title>积目-音乐人上传音乐</title>
    <style>
        
    </style>
</head>
<body>
    <div class="login">
        <h1>积目用户登录</h1>
        <div class="name">
            <input type="text" value="86" id="areacode" class="pre"/>
            <input type="text" value="" id="account" class="phone" placeholder="请输入手机号"/>
        </div>
        <div class="password">
            <input type="password" name="" id="pwd" class="word" maxlength="16" placeholder="请输入密码" />
        </div>
        <div class="msg"></div>
        <div class="submit">
            <div class="submitBtn">登录</div>
        </div>
        <div class="tip">登录即代表您已同意<a href="">《积目用户协议》</a></div>
    </div>
</body>
</html>
<script src="/public/js/common/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript"> 
    $('input').on('focus',function(){ 
		$('.msg').html('');
	})
	
	$('.submitBtn').on('click',function(){
		var pwd = $.trim($('#pwd').val());
		var mobile = $.trim($('#account').val());
		// if(!(/^1[3|4|5|7|8]\d{9}$/.test(Number($('#account').val())))){
		// 	$(".msg").html("请输入正确的手机号");	
		// }
		if(mobile == ''){
			$(".msg").html("手机号不能为空");
		}else if(pwd == ""){
			$(".msg").html("密码不能为空");
		}else{
			mobile = $('#areacode').val()+mobile; 
			$.ajax({
                url:'/New/ILogin/loginMusic',
                type:"POST",
                dataType:"json",
                async: false,
                data:{
                    mobile:mobile,
                    password:pwd
                },
                success:function(data){
                    console.log(data);
                    if(data.code == '0'){
                        window.location.href='/view/musicUpload-music';
                        sessionStorage.setItem("nickname",data.data.account.nickname);
                        sessionStorage.setItem("photo",data.data.account.cover[0].url+'@w_80');
                        sessionStorage.setItem("phoneNumber",data.data.account.account);
                    }else{
                        $('.msg').html(data.message);
                    }
                },
                error:function(jqXHR, textStatus){
                	var json = JSON.parse(jqXHR.responseText);
                    $('.msg').html(json.msg);
                }
            })
		}
	})	
</script>