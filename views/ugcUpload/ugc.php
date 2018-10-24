<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ugc发布</title>
	<style>
		*{
			padding: 0;
			margin: 0;
		}
		html,body{
			background-color: #000;
			width: 100%;
			height: 100%;
		}
		.container{
			background: url('/public/img/ugcUpload/0.png') no-repeat;
			background-size: 100% 100%;
			width: 100%;
			height: 100%;
			min-height: 100%;
		}
		.content{
			width: 1000px;
			height: 350px;
			background-color: #fff;
			margin: 0 auto;
			position: relative;
		}
		.left{
			width: 400px;
			float: left;
			padding: 50px 30px 0 30px;
			box-sizing: border-box;
		}
		.right{
			width: 600px;
			float: right;
		}
		h1{
			text-align: center;
			font-size: 28px;
		}
		.texts{
			font-size: 20px;
			line-height: 36px;
		}
		textarea{
			width: 500px;
			margin: 0 auto;
			margin-top: 50px;
			/*position: absolute;
			left: 50%;
			margin-left: -400px;*/
			font-size: 24px;
		}
		.file {
		    position: relative;
		    display: inline-block;
		    background: #D0EEFF;
		    border: 1px solid #99D3F5;
		    border-radius: 4px;
		    padding: 4px 12px;
		    overflow: hidden;
		    color: #1E88C7;
		    text-decoration: none;
		    text-indent: 0;
		    line-height: 20px;
		    user-select: none;
		    cursor: pointer;
		}
		.file input {
		    position: absolute;
		    font-size: 100px;
		    right: 0;
		    top: 0;
		    opacity: 0;
		}
		.file:hover {
		    background: #AADFFD;
		    border-color: #78C3F3;
		    color: #004974;
		    text-decoration: none;
		}
		.progress{
			width: 500px;
			height: 20px;
			background: #ccc;
			border-radius: 6px;
			position: relative;
		}
		.nowpro{
			/*width: 100px;*/
			height: 20px;
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 6px;
			background: #7FFF00;
		}
		.errMsg{
			width: 100%;
			text-align: left;
			height: 40px;
			line-height: 40px;
			font-size:24px;
			color: #f66; 
		}
		.btn{
			position: absolute;
			bottom: -20px;
			left: 50%;
			margin-left: -120px;
			width: 240px;
			height: 40px;
			/*margin: 20px auto;*/
			line-height: 40px;
			border-radius: 20px;
			text-align: center;
			/*letter-spacing: 20px;*/
			background-color: #fdcc04;
			color: #000;
			font-size: 24px;
			cursor:pointer;
		}
		#logOut{
			position: absolute;
			width: 100px;
			height: 30px;
			/*background: #EE4000;*/
			top: 10px;
			right: 10px;
			color: #fff;
			text-align: center;
			line-height: 30px;
			cursor: pointer;
			user-select: none;
		}
	</style>
</head>
<body>
	<div class="container">
		<div style="width: 100%;height: 160px;"></div>
		<div class="content">
			<div class="left" style="height: 240px;">
				<h1>发布UGC</h1>
				<div class="texts">仅可发布视频UGC,发布文字内容及视频内容均为必填项，视频仅可上传一个，且不大于50兆，视频分辨率比例需介于竖版3:4及横版16:9之间</div>
			</div>
			<div class="right">
				<textarea name="" id="contents" cols="30" rows="5" placeholder="ugc文本内容"></textarea>
				<div class="videos">
					<a href="javascript:;" class="file">选择视频
					    <input type="file" name="" id="fileload" onchange="preview(this);">
					</a>
					<a class="file fileName" style="border: none;background: #fff;"></a>
					<a class="file uploadFile">开始上传</a>
					<video id="image" src="" style="display: none;"></video>
					<!-- <div style="width: 300px;height: 50px;" class="fileMsg"></div> -->
					<img id="imgs" src="" alt="" style="display: none;">
				</div>
				<div class="progress">
					<div class="nowpro"></div>
				</div>
				<h4 class="errMsg"></h4>
			</div>
			<div class="btn">提交</div>
		</div>
	</div>
	<div id="logOut">退出登录</div>
</body>
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script src="http://jssdk-v2.demo.qiniu.io/dist/qiniu.min.js"></script>
<script>
	
	var owidth,oheight,osrc,othat,file,videoName,picName,videoTime;
	var flg = false,
		picflg = false;
	function preview(ele) {
		var video = ele.files[0];  
	    var url = URL.createObjectURL(video);  
	    // console.log(url);  
	    document.getElementById("image").src = url; 

		$('.nowpro').css('width',0);
		$('.errMsg').html('');
		flg = false;
		picflg = false;
		$('.uploadFile').show();
				//获取文件框的第一个文件,因为文件有可能上传多个文件,咱这里是一个文件
		file = document.getElementById("fileload").files[0];
		//可以进行一下文件类型的判断
		//图片大小的限制
		var fileSize = Math.round(file.size / 1024 / 1024);

		if(fileSize>70){
			$('.errMsg').html('请选择小于50兆的视频');
		}else if(file.name.indexOf('.mp4') < 0){
			$('.errMsg').html('请选择mp4格式的视频');
		}else{
			var fileType = file.type.split("/")[0];
			$('.fileName').html(file.name);
		
			var myvObj = document.getElementById("image");
		
			myvObj.onloadedmetadata=function(){
				owidth = this.videoWidth;
			    oheight = this.videoHeight;
			    // console.log('owidth:'+owidth);
			    // console.log('oheight:'+oheight);
			}
			
		}
	}

	// 缩略图
		var createIMG = function() {
		// var scale = 0.25,
			var scale = 1,
			video = $('#image')[0],

			canvas = document.createElement("canvas"),
			canvasFill = canvas.getContext('2d');
			canvas.width = video.videoWidth * scale;
			canvas.height = video.videoHeight * scale;
			canvasFill.drawImage(video, 0, 0, canvas.width, canvas.height);
		 	function dataURLtoFile(dataurl, filename) {
			    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
			    while(n--){
			        u8arr[n] = bstr.charCodeAt(n);
			    }
			    return new File([u8arr], filename, {type:mime});
			}
			// console.log(video.videoWidth);
			// console.log(canvas);
			// console.log(canvasFill);
			var src = canvas.toDataURL("image/jpeg");
			$('#imgs').attr('src',src);
			// console.log(src);
			var picfile = dataURLtoFile(src, 'test.jpeg');
			// console.log($('#imgs'));
			// 上传首图
			$.ajax({url: "/New/Partner/PUGC/getUptoken",async:false,dataType:'json', success: function(res){
			    var token = res.uptoken;
			    var domain = res.domain;
			    var key = res.uniqueid;
			    var config = {
			      useCdnDomain: true,
			      disableStatisticsReport: false,
			      retryCount: 6,
			      region: qiniu.region.z0
			    };
			    var putExtra = {
			      fname: "test",
			      params: {},
			      mimeType: null
			    };
			   
			    var observable1 = qiniu.upload(picfile, key, token, putExtra, config);
			    var observer = {
				  next(res){
				  	// console.log(res);
				  	var percent = Math.ceil(res.total.percent);
				  	// var width = 5*percent+'px';
				  	// $('.nowpro').css('width',width);
				  },
				  error(err){
				  	// console.log(err);
				  }, 
				  complete(res){
				  	// console.log(res);
				  	picName = res.key;
				  	picflg = true;
				  }
				}

				var subscription = observable1.subscribe(observer); // 上传开始
				
			  }})
			// 上传视频
			$.ajax({url: "/New/Partner/PUGC/getUptoken",dataType:'json', success: function(res){
			  // $.ajax({url: "http://devadmin.gmugmu.com/New/Partner/PUGC/getUptoken",dataType:'json', success: function(res){
			    var token = res.uptoken;
			    var domain = res.domain;
			    var key = res.uniqueid;
			    var config = {
			      useCdnDomain: true,
			      disableStatisticsReport: false,
			      retryCount: 6,
			      region: qiniu.region.z0
			    };
			    var putExtra = {
			      fname: "test",
			      params: {},
			      mimeType: null
			    };
			   
			    var observable2 = qiniu.upload(file, key, token, putExtra, config);
			
			    var observer2 = {
				  next(res){
				  	// console.log(res);
				  	var percent = Math.ceil(res.total.percent);
				  	var width = 5*percent+'px';
				  	$('.nowpro').css('width',width);
				  	// $('.uploadFile').css('display','none');
				  	$('.uploadFile').hide();
				  },
				  error(err){
				  	// console.log(err);
				  }, 
				  complete(res){
				  	// console.log(res);
				  	videoName = res.key;
				  	flg = true;
				  }
				}

				var subscription = observable2.subscribe(observer2); // 上传开始
				
			  }})
		}

	var fraction1 = 0.75,
		fraction2 = 2;
	
	$('.uploadFile').on('click',function(){
		// console.log('owidth:'+owidth);
		// console.log('oheight:'+oheight);
		var fraction = owidth/oheight;
		var fileName = $('.fileName').html();
		var fileSize = Math.round(file.size / 1024 / 1024);
		//获取video对象
		var ovideo = document.getElementById("image");
		videoTime = Math.round(ovideo.duration);
		// console.log('times:'+videoTime);
		if(fileName == ''){
			$('.errMsg').html('请选择视频');
		}else if(fileName.indexOf('.mp4') < 0){
			$('.errMsg').html('请选择mp4格式的视频');
		}else if(fileSize > 70){
			$('.errMsg').html('请选择小于50兆的视频');
		}else{
			if(fraction>=fraction1 && fraction <= fraction2){
				createIMG();
			}else{
				$('.errMsg').html('请选比例合适的视频');
			}
		}
		
	})
	$('#contents').on('focus',function(){
		$('.errMsg').html('');
	})

	function releaseArticle(type,content,resources){
		$.ajax({
            url:'/New/Partner/PUGC/releaseArticle',
            type:"POST",
            dataType:"json",
            // async: false,
            data:{
                type:type,
                txtContent:content,
                resources:resources
            },
            success:function(data){
                if(data.code == '200'){
                    // window.location.href='/view/ugcUpload-ugc';
                    $('.fileName').html('');
                    $('#contents').val('');
                    // $('.uploadFile').css('display','block');
                    $('.uploadFile').show();
                    $('.errMsg').html('ugc发布成功');
                    $('.nowpro').css('width',0);
                    flg = false;
                    picflg = false;
                }else{
                    $('.errMsg').html(data.msg);
                }
            },
            error:function(jqXHR, textStatus){
            	var json = JSON.parse(jqXHR.responseText);
                $('.errMsg').html(json.msg);
            }
        })
	}
	


	$('.btn').on('click',function(){
		var contents = $('#contents').val();
		
		if(flg&&picflg){
			if(contents!=''){
				var resources = owidth+','+oheight+','+videoName+','+picName+','+videoTime;
				releaseArticle(3,contents,resources);
			}else{
				$('.errMsg').html('请填写ugc文章');
			}
		}else{
			$('.errMsg').html('请先上传视频！！！');
		}
	})

	$('#logOut').on('click',function(){
		$('.errMsg').html('');
		$.ajax({
            url:'/New/Partner/PUGC/logout',
            type:"POST",
            dataType:"json",
            // async: false,
            data:{
                
            },
            success:function(data){
                if(data.code == '200'){
                    window.location.href='/';
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
</script>
</html>