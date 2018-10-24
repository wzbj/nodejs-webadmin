$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(13).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown16 ul.dropdown-menu-fw>li').eq(1).addClass("active").siblings().removeClass("active");
	$('.reset').on('click',function(){$('#searchDateRange').html('')})
	var allPage = null;
	var randomNum = Math.floor(Math.random()*110);
	var loading = '<tr id="loading"><td colspan="12"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var readStatus = $("input[type='radio'][name='radio1']:checked").val(),
		page =1;

	//页面初始时间设置
	// var date1=moment().subtract('days', 15).format('YYYY-MM-DD');
	// var date2=moment().subtract('days', 1).format('YYYY-MM-DD');
	$('#reportrange6 span').html('');
	$('#reportrange6').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD');
		var chartime2 = picker.endDate.format('YYYY-MM-DD');
	 	$('#reportrange6 span').html(chartime1 + '至' + chartime2);
	});
	var randomNum = Math.floor(Math.random()*100)+400;
	//点击修改内容变为输入框
	function cg(obj){
	   var o=obj.previousSibling;
	   if(o.childNodes[0].value) {
	     o.innerHTML =  o.childNodes[0].value;
	  }else{
	    o.innerHTML="<input type='text' value='"+o.innerHTML+"' />";
	  }
	}
	

	//全选
	$("#all").click(function(){   
	    if(this.checked){   
	        $("tbody :checkbox").prop("checked", true);  
	    }else{   
			$("tbody :checkbox").prop("checked", false);
	    }   
	});

	//列表接口
	getList(readStatus,page);
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
				getList(readStatus,page);
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
		page = 1;
		readStatus = $("input[type='radio'][name='radio1']:checked").val();
		$('#tbody').html(loading);
		getList(readStatus,page);
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
					getList(readStatus,page);
				}
			});
			
		},3000)
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		getList(readStatus,page);
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
					getList(readStatus,page);
				}
			});
			
		},3000)
		
	})
	
	
	// 选中已读
	$('#checkRead').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		// console.log(xboxArrNew);
		var len = xboxArr.length;
		if(len>0){
			var r=confirm("确认对选中的用户已读操作吗？");
			if(r==true){
		    	alRead(xboxArr,xboxArrNew,'');
		    }
		}else{
			confirm("请至少选择一个用户");
		}
		
	})
	function loadFn(){
		// 已读
		$('.alRead').on('click',function(){
			var that = $(this);
			// var id = that.parent().attr('id');
			var id = that.parent().parent().find('td').eq(0).find('input').val();
			console.log(id);
			var r=confirm("确认进行已读操作吗？");
			if(r==true){
				alRead('',id,that);
		    }
		})
		// 回复
		$('.reply').on('click',function(){
			$('.replydialog').fadeIn('normal');
			var that = $(this);
			$('#replyTxt').val('');
			var artId = that.parent().parent().find('td').eq(1).find('a').html();
			var beReplyAccountUuid = that.parent().attr('beReplyAccountUuid');
			var replyAccountUuid = that.parent().attr('replyAccountUuid');
			// var id = that.parent().attr('id');//评论id
			var id = that.parent().parent().find('td').eq(0).find('input').val();
			$('#replyBtn').unbind('click').bind('click',function(){
				var replyContent = $('#replyTxt').val();
				 // reply(id,replyContent,artId,replyAccountUuid,beReplyAccountUuid,that);//回复被回复被动关系
				var objData = {
					commentId:id,
					replyContent:replyContent,
					artId:artId,
					beReplyAccountUuid:replyAccountUuid,
					replyAccountUuid:beReplyAccountUuid
				};
				reply(objData,that);
			})
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

		$('.fancybox'+randomNum+'').fancybox({
		    'type':'image',
		    helpers:  {
		        
		    }
		});
	}
	
    
	function getList(readStatus,pageNum){
		$.ajax({
	        url:'/New/ArtReply/beReplyRobotReplyList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	readStatus:readStatus,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var dataD = data.data;
					allPage = Math.ceil((dataD.total_num)/50);
					$("#allUser").html(dataD.total_num);
					$('#pageNum').html("50");
					$('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					$('#all').prop('checked',false);
					$('#tbody').empty();
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr class="tr'+result[i].noread[0]+'" idarr="'+result[i].noread+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].noread +'" /></td>';
							str += '<td><a href="/ugc/view/'+result[i].artId+'"  target="_blank">'+result[i].artId+'</a></td>';
							str += '<td>'+result[i].uinfo.nickname+'</td>';
							str += '<td>'+result[i].uinfo.account+'</td><td>';
							// for(var j = 0;j<result[i].uinfo.covers.length;j++){
							// 	str +='<a class="fancybox'+randomNum+'" href="'+result[i].uinfo.covers[j]+'"data-fancybox-group="gallery" title="">';
							// 	str +='<img style="" src="'+result[i].uinfo.covers[j]+'@w_120,q_60?='+randomNum+'" alt="" /></a>';
							// }
								if(result[i].ugcinfo.type == '2'){
									for(var j = 0;j<result[i].ugcinfo.resourcesLists.length;j++){
										str +='<a class="fancybox'+randomNum+'" href="'+result[i].ugcinfo.resourcesLists[j].url+'"data-fancybox-group="gallery" title="">';
										str +='<img style="width:80px;" src="'+result[i].ugcinfo.resourcesLists[j].url+'?imageView2/1/w/100/h/100" alt="" /></a>';
									}
								}else if(result[i].ugcinfo.type=='3'){
									for(var j=0;j<result[i].ugcinfo.videoLists.length;j++){
										str +='<a style="position:relative;"><video width="80" height="80" style="float: left;" src="'+result[i].ugcinfo.videoLists[j].url+'" ></video>';
										str +='<img class="controlIcon" style="position:absolute;top:50%;left:50%;width:20px;height:20px;margin-left:-10px!important;margin-top:-10px!important;" src="/public/img/common/timg.png" /></a>';
									}
								}
							str += '</td><td>'+result[i].ugcinfo.txtContent+'</td>';
							str += '<td class="replyCont" style="vertical-align:top!important;">';
							// str += '<td>'+result[i].replyContent+'</td>';
								var chats = result[i].chats;
								var replyAccountUuid = result[i].replyAccountUuid;
								for(var j =0;j<chats.length;j++){
									if(replyAccountUuid == chats[j].replyAccountUuid){
										str+='<p style="text-align:left;color:red;">'+chats[j].replyContent+'</p>';
									}else{
										str+='<p style="text-align:right;color:blue;">'+chats[j].replyContent+'</p>';
									}
									
								}

							str += '</td>';
							
							str +='<td replyAccountUuid="'+result[i].replyAccountUuid+'" beReplyAccountUuid="'+result[i].beReplyAccountUuid+'">';
							str +='<button class="btn btn-warning reply">回复</button>';
							if(result[i].noread.length > 0){
								str +='<button class="btn btn-danger alRead">已读</button>';
							}else{
								str +='';
							}
							str +='</td></tr>';
						}
					}else{
						str = '<tr><td colSpan = "15">暂时没有数据</td></tr>';
					}
					
					$('#tbody').html(str);
					// js_file();
					loadFn();
				}else{

				}	        
	        }
	    })
	}

	//已读接口
	function alRead(xboxArr,id,obj){
		$.ajax({
	        url:'/New/ArtReply/robotReplyReadStatusChange',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id
	        },
	        success:function(data){
				if(data.code == '200'){
					var len = xboxArr.length;
					if(len < 1){
						// $('.tr'+id+'').find('.readStatus').html('已读');
						obj.remove();
					}else{
						for(var i = 0; i < len;i++){
							$('.tr'+xboxArr[i]+'').find('.alRead').css("display","none");
							// $('.tr'+xboxArr[i]+'').find('.readStatus').html('已读');
						}
					}
					// $('.numCgdialog .smcontent p').html('屏蔽成功');
					// $('.numCgdialog').fadeIn('normal');
					// setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// 回复接口
	// function reply(commentId,replyContent,artId,beReplyAccountUuid,replyAccountUuid,obj){
	// 	$.ajax({
	//         url:'/New/ArtReply/replyComment',
	//         type:"POST",
	//         dataType:"json",
	//         data:{
	//         	commentId:commentId,
	//         	replyContent:replyContent,
	//         	artId:artId,
	//         	beReplyAccountUuid:beReplyAccountUuid,
	//         	replyAccountUuid:replyAccountUuid
	//         },
	//         success:function(data){
	// 			if(data.code == '200'){
	// 				// obj.parent().parent().find('.readStatus').html("已读");
	// 				obj.parent().find('.alRead').css('display','none');
	// 				var addMsg = '<p style="text-align:right;color:blue;">'+replyContent+'</p>';
	// 				obj.parent().parent().find('.replyCont').append(addMsg);
	// 				$('.replydialog').fadeOut('normal');
	// 			}else{
	// 				confirm("网络异常");
	// 			}	        
	//         }
	//     })
	// }

	function reply(objData,obj){
		$.ajax({
	        url:'/New/ArtReply/replyComment',
	        type:"POST",
	        dataType:"json",
	        data:objData,
	        success:function(data){
				if(data.code == '200'){
					// obj.parent().parent().find('.readStatus').html("已读");
					obj.parent().find('.alRead').css('display','none');
					var addMsg = '<p style="text-align:right;color:blue;">'+objData.replyContent+'</p>';
					obj.parent().parent().find('.replyCont').append(addMsg);
					$('.replydialog').fadeOut('normal');
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}


})






