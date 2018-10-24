<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ugc视频发布平台</title>
<meta name="keywords" content="jquery特效,登录界面,登录界面模板,登录模板,后台登录界面模板,后台登录界面设计" />
<meta name="description" content="漂亮的网站后台登录界面模板下载html源码。" />
<style type="text/css">
html{overflow-y:scroll;vertical-align:baseline;}
body{font-family:Microsoft YaHei,Segoe UI,Tahoma,Arial,Verdana,sans-serif;font-size:12px;color:#000;height:100%;line-height:1;background: #000;}
*{margin:0;padding:0}
ul,li{list-style:none}
h1{font-size:30px;font-weight:700;text-shadow:0 1px 4px rgba(0,0,0,.2)}
.login-box{width:410px;margin:160px auto 0 auto;text-align:center;padding:30px;background:#fff;border-radius:10px;position: relative;}
.login-box .name,.login-box .password,.login-box .code,.login-box .remember{font-size:16px;text-shadow:0 1px 2px rgba(0,0,0,.1)}
.login-box .remember input{box-shadow:none;width:15px;height:15px;margin-top:25px}
.login-box .remember{padding-left:40px}
.login-box .remember label{display:inline-block;height:42px;width:70px;line-height:34px;text-align:left}
.login-box label{display:inline-block;width:100px;text-align:right;vertical-align:middle}
.login-box #code{width:120px}
.login-box .codeImg{float:right;margin-top:26px;}
.login-box img{width:148px;height:42px;border:none}
input[type=text],input[type=password]{width:270px;height:42px;margin-top:25px;padding:0px 15px;border:1px solid #000;border-radius:6px;color:#000;letter-spacing:2px;font-size:16px;background:transparent;}
.login{cursor:pointer;width:200px;text-align:center;height:44px;margin:0 auto;line-height: 44px;padding:0;background:#fdcc04;border:1px solid #fdcc04;border-radius:22px;font-weight:600;color:#1F1F1F;font-size:24px;text-shadow:0 1px 2px rgba(0,0,0,.1);position: absolute;bottom: -22px;left: 50%;margin-left: -100px;}
input:focus{outline:none;box-shadow:0 2px 3px 0 rgba(0,0,0,.1) inset,0 2px 7px 0 rgba(0,0,0,.2)}
/*button:hover{box-shadow:0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2)}*/
.screenbg{position:fixed;bottom:0;left:0;z-index:-999;overflow:hidden;width:100%;height:100%;min-height:100%;}
.screenbg ul li{display:block;list-style:none;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:-1000;float:right;}
.screenbg ul a{left:0;top:0;width:100%;height:100%;display:inline-block;margin:0;padding:0;cursor:default;}
.screenbg a img{vertical-align:middle;display:inline;border:none;display:block;list-style:none;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:-1000;float:right;}
.bottom{margin:8px auto 0 auto;width:100%;position:fixed;text-align:center;bottom:0;left:0;overflow:hidden;padding-bottom:8px;color:#ccc;word-spacing:3px;zoom:1;}
.bottom a{color:#FFF;text-decoration:none;}
.bottom a:hover{text-decoration:underline;}
.msg{
	height: 24px;
	line-height: 24px;
	color: #f66;
	font-weight: bold;
	margin-top: 20px;
}

</style>

<!-- <script type="text/javascript" src="js/jquery-1.8.2.min.js"></script> -->


</head>

<body>

<div class="login-box">
	<h1>积目UGC发布平台</h1>
	<!-- <form method="post" action=""> -->
		<div class="name">
			<label>积目账号：</label>
			<input type="text" value="86" id="areacode" style="width: 30px;display: inline-block;background: rgb(250,250,189)" />
			<input type="text" value="" name="" id="account" tabindex="1" autocomplete="off"  placeholder="请输入积目注册手机号" style="width: 200px;display: inline-block;" />
		</div>
		<div class="password">
			<label>密  码：</label>
			<input type="password" name="" id="pwd" maxlength="16" id="" tabindex="2" placeholder="请输入你的密码" />
		</div>
		
		<div class="msg"></div>
		<div class="login" style="outline: none;">
			登&nbsp;&nbsp;&nbsp;&nbsp;录
			<!-- <button type="button" tabindex="5">登录</button> -->
		</div>
	<!-- </form> -->
</div>

<!-- <div class="bottom">©2014 Leting <a href="javascript:;" target="_blank">关于</a> <span>京ICP证030173号</span><img width="13" height="16" src="images/copy_rignt_24.png" /></div> -->

<div class="screenbg">
	<ul>
		<li><a href="javascript:;"><img src="/public/img/ugcUpload/0.png"></a></li>
		<!-- <li><a href="javascript:;"><img src="images/1.jpg"></a></li>
		<li><a href="javascript:;"><img src="images/2.jpg"></a></li> -->
	</ul>
</div>

</body>
<!-- <script src="../common/jquery-2.1.3.min.js"></script> -->
<script src="/public/js/common/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
<!-- <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script> -->
<script type="text/javascript">

	$('input').on('focus',function(){
		$('.msg').html('');
	})
	
	$('.login').on('click',function(){
		var pwd = $.trim($('#pwd').val());
		var account = $.trim($('#account').val());
		// if(!(/^1[3|4|5|7|8]\d{9}$/.test(Number($('#account').val())))){
		// 	$(".msg").html("请输入正确的手机号");	
		// }
		if(account == ''){
			$(".msg").html("手机号不能为空");
		}else if(pwd == ""){
			$(".msg").html("密码不能为空");
		}else{
			account = $('#areacode').val()+account; 
			$.ajax({
                url:'/New/Partner/PUGC/login',
                type:"POST",
                dataType:"json",
                // async: false,
                data:{
                    account:account,
                    password:pwd
                },
                success:function(data){
                    if(data.code == '200'){
                        window.location.href='/view/ugcUpload-ugc';
                    }else{
                        $('.msg').html(data.msg);
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
</html>