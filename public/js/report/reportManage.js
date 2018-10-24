$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(15).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown17 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
	$('.reset').on('click',function(){$('#searchDateRange').html('')})
	var allPage = null;
	var loading = '<tr id="loading"><td colspan="8"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var type = '',
		page =1;

	//页面初始时间设置
	// var date1=moment().subtract('days', 15).format('YYYY-MM-DD');
	// var date2=moment().subtract('days', 1).format('YYYY-MM-DD');
	// $('#reportrange3 span').html('');
	var randomNum = Math.floor(Math.random()*100)+500;

	//列表接口
	getList('',page);
	setTimeout(function(){
		Page({
			num:allPage,					//页码数
			startnum:page,				//指定页码
			elem:$('#page1'),		//指定的元素
			callback:function(n){	//回调函数
				page = n;
				window.scrollTo(0,0);
				$('#tbody').html(loading);
				$('#currentPage').html(page);
				getList('',page);
			}
		});
		
	},3000)
	//鼠标滑过图片图片放大
	$("td a img").hover(function(){
		$(this).css({"transform":"scale(2)","z-index":"99"}).siblings().css("z-index","0");
	},function(){
		$(this).css({"transform":"scale(1)","z-index":"0"});
	})

	// 点击搜索加载列表
	$('#search,.selectRadio').on('click',function(){
		page =1;
		 type = $("input[type='radio'][name='radio1']:checked").val();
		$('#tbody').html(loading);
		$('.pageTest').empty();
		getList(type,page);
		setTimeout(function(){
			Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					$('#currentPage').html(page);
					getList(type,page);
				}
			});
			
		},3000)
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		
		$('#tbody').html(loading);
		$('.pageTest').empty();
		getList(type,page);
		setTimeout(function(){
			Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					$('#currentPage').html(page);
					getList(type,page);
				}
			});
			
		},3000)
		
	})
	
	function loadFn(){
		// 屏蔽文章
		$('.shieldArt').on('click',function(){
			var that = $(this);
			var id = that.parent().parent().find('td').eq(0).html();
			var r=confirm("确认屏蔽该文章吗？");
			if(r==true){
				ugcUpdate(id,3,that);
		    }
		})
		// 屏蔽评论
		$('.shieldReply').on('click',function(){
			var that = $(this);
			var id = that.parent().parent().find('td').eq(0).html();
			var r=confirm("确认屏蔽该评论吗？");
			if(r==true){
				replyPunch(id,3,that);
		    }
		})
		var list = document.querySelectorAll('video');
	    var big = document.querySelector('#big');
	    var zz = document.querySelector('#zz');
	    list.forEach(function(el, i){
	        el.onclick = function(){
	            zz.style.display = 'block';
	            big.src = this.src;
	            //播放
	            big.play();
	        }
	    });
	    var controlIcon = document.querySelectorAll('.controlIcon');
	    controlIcon.forEach(function(el, i){
	        el.onclick = function(){
	            zz.style.display = 'block';
	            big.src = $(this).parent().find('video').attr('src');
	            //播放
	            big.play();
	        }
	    });
	    zz.onclick = function(){
	        this.style.display = 'none';
	        //暂停
	        big.pause();
	    };
		
	}
	
	function getList(type,pageNum){
		$.ajax({
	        url:'/New/UGC/reportList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	type:type,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var total_num = data.data.ugc.total_num + data.data.ugcReply.total_num;
					var total_num1 = Math.ceil((data.data.ugc.total_num)/50);
					var total_num2 = Math.ceil((data.data.ugcReply.total_num)/50);
					allPage = (total_num1 > total_num2) ? total_num1 :total_num2;
					// allPage = Math.ceil((dataD.total_num)/50);
					$("#allUser").html(total_num);
					$('#allPage').html(allPage);
					var ugc = data.data.ugc.result;
					var ugcReply = data.data.ugcReply.result;
					var ugcLen = ugc.length;
					var ugcReplyLen = ugcReply.length;
					var allLen = ugcLen + ugcReplyLen;
					$('#pageNum').html(allLen);
					for(var i = 0;i < ugcLen;i++ ){
						str += '<tr><td>'+ugc[i].artId+'</td><td>';
						for(var j = 0;j<ugc[i].resourcesLists.length;j++){
							str +='<a class="fancybox'+randomNum+'" href="'+ugc[i].resourcesLists[j].url+'"data-fancybox-group="gallery" title="">';
							str +='<img style="width:80px;" src="'+ugc[i].resourcesLists[j].url+'?imageView2/1/w/100/h/100" alt="" /></a>';
						}
						for(var j=0;j<ugc[i].videoLists.length;j++){
							// str +='<video width="80" height="80" style="float: left;" src="'+ugc[i].videoLists[j].url+'" controls="controls"></video>';
							str +='<a style="position:relative;"><video width="80" height="80" style="float: left;" src="'+ugc[i].videoLists[j].url+'" ></video>';
							str +='<img class="controlIcon" style="position:absolute;top:50%;left:50%;width:20px;height:20px;margin-left:-10px!important;margin-top:-10px!important;" src="/public/img/common/timg.png" /></a>';
						}
						str += '</td><td>'+ugc[i].txtContent+'</td>';
						str += '<td class="red">--</td>';
						str += '<td>文章举报</td>'
						str += '<td>'+ugc[i].reportedNum+'</td>';
						str += '<td>'+ugc[i].createTime+'</td>';
						str += '<td><button class="btn btn-danger shieldArt">屏蔽该文章</button></td></tr>';

					}
					for(var i = 0;i < ugcReplyLen;i++ ){
						// str += '<tr><td>'+i+'</td></tr>';
						str += '<tr><td>'+ugcReply[i].replyId+'</td>';
						str += '<td class="red">--</td>'
						str += '<td class="red">--</td>'
						str += '<td>'+ugcReply[i].replyContent+'</td>';
						str += '<td>评论举报</td>';
						str += '<td>'+ugcReply[i].reportedNum+'</td>';
						str += '<td>'+ugcReply[i].createTime+'</td>';
						str += '<td><button class="btn btn-danger shieldReply">屏蔽该文章</button></td></tr>';
					}
					$('#tbody').empty();
					$('#tbody').html(str);
					loadFn();
				}else{

				}	        
	        }
	    })
	}
	// 文章屏蔽
	function ugcUpdate(id,status,obj){
		$.ajax({
	        url:'/New/UGC/updateInfo',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id,
	        	status:status
	        },
	        success:function(data){
				if(data.code == '200'){
					obj.parent().parent().remove();
					$('.numCgdialog .smcontent p').html('屏蔽文章成功');
					$('.numCgdialog').fadeIn('normal');
					setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 评论屏蔽
	function replyPunch(id,status,obj){
		$.ajax({
	        url:'/New/ArtReply/replyPunch',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	ids:id,
	        	status:status
	        },
	        success:function(data){
				if(data.code == '200'){
					obj.parent().parent().remove();
					$('.numCgdialog .smcontent p').html('屏蔽评论成功');
					$('.numCgdialog').fadeIn('normal');
					setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	
	//替换接口
	function replace(id,obj){
		$.ajax({
	        url:'/New/ArtReply/replaceCont',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id
	        },
	        success:function(data){
				if(data.code == '200'){
					obj.parent().parent().find('td').eq(7).html("我是刘波");
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 排序接口
	function supportEdit(id,fakeSupportCount){
		$.ajax({
	        url:'/New/ArtReply/supportEdit',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id,
	        	fakeSupportCount:fakeSupportCount
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.numCgdialog .smcontent p').html('排序成功');
					$('.numCgdialog').fadeIn('normal');
					setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}


	$('.fancybox'+randomNum+'').fancybox({
	    'type':'image',
	    helpers:  {
	        
	    }
	});

})
