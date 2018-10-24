$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(12).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown15 ul.dropdown-menu-fw>li').eq(1).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var type = $("input[type='radio'][name='radio2']:checked").val(),
		order = $("input[type='radio'][name='radio3']:checked").val(),
		phone_number = '';
		page = 1;
	var currentAjax;
	var loading = '<tr id="loading"><td colspan="14"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var randomNum = Math.floor(Math.random()*100)+600;
	//列表接口
	getList(type,order,phone_number,page);
	
	$('#search,.selectRadio').on('click',function(){
		$('#page2').empty();
		$('#tbodyhigh').html('');
		$('#allPage').html('');
		phone_number = $('#sxh3').val();
		if(phone_number != ''){
			phone_number = $('#areacode').val() + $('#sxh3').val();
		}else{
			phone_number = '';
		}
		page =1;
		type = $("input[type='radio'][name='radio2']:checked").val();
		order = $("input[type='radio'][name='radio3']:checked").val();
		$('#tbodyhigh').html(loading);
		// $('.pageTest').empty();
		getList(type,order,phone_number,page);
	})
    
	function getList(type,order,phone_number,page){
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/UGC/highQuality',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	type:type,
	        	order:order,
	        	phone_number:phone_number,
	        	pageNum:page,
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
					$('#tbodyhigh').empty();
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr class="tr'+result[i].artId+'">';
							str +='<td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].artId+'" /></td>';
							str += '<td><a href="/view/ugc-ugcMsg?artId='+result[i].artId+'" target="_blank">'+result[i].artId+'</a></td><td>';
							for(var j = 0;j<result[i].ugcinfo.resourcesLists.length;j++){
								str +='<a class="fancybox'+randomNum+'" href="'+result[i].ugcinfo.resourcesLists[j].url+'"data-fancybox-group="gallery" title="">';
								str +='<img style="width:80px;" src="'+result[i].ugcinfo.resourcesLists[j].url+'?imageView2/1/w/100/h/100" alt="" /></a>';
							}
							for(var j=0;j<result[i].ugcinfo.videoLists.length;j++){
								str +='<a style="position:relative;"><video width="80" height="80" style="float: left;" src="'+result[i].ugcinfo.videoLists[j].url+'" ></video>';
									str +='<img class="controlIcon" style="position:absolute;top:50%;left:50%;width:20px;height:20px;margin-left:-10px!important;margin-top:-10px!important;" src="/public/img/common/timg.png" /></a>';
								// str +='<video width="80" height="80" style="float: left;" src="'+result[i].videoLists[j].url+'" controls="controls"></video>';
							}
							str += '</td><td>'+result[i].ugcinfo.account+'</td>';
							var indexNum = result[i].ugcinfo.txtContent.indexOf('???????');
							if(indexNum>=0){
								var txts = result[i].ugcinfo.txtContent.substr(0,indexNum);
								str += '<td>'+txts+'</td>';
							}else{
								str += '<td>'+result[i].ugcinfo.txtContent+'</td>';
							}
							str += '<td>'+result[i].ugcinfo.createTime+'</td>';
							str += '<td>'+result[i].createTime+'</td>';
							str += '<td><input type="text" class="lSort" style="text-align:center;width:90%;" value="'+result[i].ugcinfo.artOrder+'" /></td>';
							str += '<td>'+result[i].ugcinfo.totalSupports+'</td>';
							str += '<td class="replyNum" style="color:red;">'+result[i].ugcinfo.replyNum+'</td>';
							str += '<td><input type="text" class="lThumb" style="text-align:center;width:90%;" value="'+result[i].ugcinfo.fakeSupportCount+'" /></td>';
							str += '<td><input type="text" class="lRemark" style="text-align:center;width:90%;" value="'+result[i].remark+'" /></td>';
							str +='<td>';
							if(result[i].ugcinfo.status == '1'){
								str += '正常';
							}else if(result[i].ugcinfo.status == '2'){
								str += '主人删除';
							}else if(result[i].ugcinfo.status == '3'){
								str += '管理员删除';
							}else if(result[i].ugcinfo.status == '4'){
								str += '鉴黄删除';
							}
							str +='</td><td atrid="'+result[i].artId+'">';
							str += '<button class="btn btn-warning comments">评论</button>';
							str += '<button class="btn btn-danger removeHigh">移除</button>';
							if(result[i].ugcinfo.hotTime == '0'){
								str += '<button class="btn btn-success upperHot">上热门</button>';
								str += '<button class="btn btn-success lowerHot" style="display:none;">下热门</button>';
							}else{
								str += '<button class="btn btn-success upperHot" style="display:none;">上热门</button>';
								str += '<button class="btn btn-success lowerHot">下热门</button>';
							}
							str +='<a href="/ugc/view/'+result[i].artId+'"  target="_blank"><button class="btn btn-primary seedetails">查看详情</button></a>';
							str +='</td></tr>';
						}
						// $('.pageTest').css('display','block');
						Page({
							num:allPage,					//页码数
							startnum:page,				//指定页码
							elem:$('#page2'),		//指定的元素
							callback:function(n){	//回调函数
								page = n;
								// console.log(page);
								window.scrollTo(0,0);
								$('#tbodyhigh').html(loading);
								$('#currentPage').html(page);
								getList(type,order,phone_number,page);
							}
						});
					}else{
						str = '<tr><td colSpan = "14">暂时没有数据</td></tr>';
						// $('.pageTest').css('display','none');
					}
					
					$('#tbodyhigh').html(str);
					loadFn();
				}else{

				}	        
	        }
	    })
	}

	// ugc修改
	function ugcUpdate(xboxArr,id,level,fakeSupportCount,hot,status,verifyStatus,foulType,obj){
		$.ajax({
	        url:'/New/UGC/updateInfo',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id,
	        	level:level,//排序
	        	fakeSupportCount:fakeSupportCount,//文章人为点赞数
	        	hot:hot,//0下热门，1上热门
	        	status:status,
	        	verifyStatus:verifyStatus,//1待审核2审核通过
	        	foulType:foulType

	        },
	        success:function(data){
				if(data.code == '200'){
					$('.shieldlog').fadeOut('normal');
					$('.thumbdialog').fadeOut('normal');
					var len = xboxArr.length;
					if(hot == '1'){
						obj.parent().find('.lowerHot').css("display","block");
						obj.parent().find('.upperHot').css("display","none");
					}else if(hot == '0'){
						obj.parent().find('.lowerHot').css("display","none");
						obj.parent().find('.upperHot').css("display","block");
					}
					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 优质备注
	function ugcremark(accountId,remark){
		$.ajax({
	        url:'/New/HQController/remark',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	type:3,
	        	remark:remark
	        },
	        success:function(data){
				if(data.code == '200'){
										
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	
	// 评论显示
	function commentList(artId){
		$.ajax({
	        url:'/New/ArtReply/rplist',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	artId:artId,//昵称模糊
	        	pageNum:1,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var dataD = data.data;
					var result = dataD.result;
					var len = result.length;
					var comStr = '';
					$('.comentList').empty();
					if(len<=0){
						comStr = '暂时没有评论';
					}else if(len<6){
						for(var i=0;i<len;i++){
							comStr += '<p>'+result[i].replyContent+'</p>';
						}
					}else{
						for(var i=0;i<5;i++){
							comStr += '<p>'+result[i].replyContent+'</p>';
						}
					}
					$('.comentList').append(comStr);
					setTimeout(function(){$('.comCgdialog').fadeOut('normal');},1800);
				}else{

				}	        
	        }
	    })
	}
	//随机评论
	function randomRobot(typeId){
		$.ajax({
	        url:'/New/Robot/randomReply',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	typeId:typeId 
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		var msg = data.data;
	        		$('.commentCont').val(msg);
	        	}
	        }
        })
	}
	robotList();
		function robotList(){
			$.ajax({
		        url:'/New/ListShow/robot_reply_type_list',
		        type:"POST",
		        dataType:"json",
		        async: true,
		        data:{
		        	
		        },
		        success:function(data){
		        	if(data.code == '200'){
		        		var dataD = data.data;
		        		var len = dataD.result.length;
		        		var result = dataD.result;
		        		var str ='';
		        		for(var i=0;i<len;i++){
		        			str += '<div class="md-radio mradio'+result[i].id+'">';
		        			str += '<input type="radio" id="checkbox66_'+result[i].id+'" name="radio66" value="'+result[i].id+'" class="md-radiobtn">';
		        			str += '<label for="checkbox66_'+result[i].id+'">';
		        			str += '<span></span><span class="check"></span>';
		        			str += '<span class="box"></span>'+result[i].content+'</label></div>';
		        		}
		        		// console.log(str);
		        		$('#idList div').empty();
		        		$('#idList div').html(str);
		        	}
		        }
	        })
		}
		// 评论
	function UGCRobot(artId,typeId,replyContent,gender,classnum){
		$.ajax({
	        url:'/New/Robot/artReply',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	artId:artId,
	        	typeId:typeId,
	        	replyContent:replyContent,
	        	gender:gender
	        },
	        success:function(data){
				if(data.code == '200'){
					// console.log(classnum);
					$('.robotdialog').fadeOut('normal');
					$('.tr'+classnum+'').find('.replyNum').html(data.data);
					// console.log($('.tr'+classnum+''));
					// console.log(1111);
					// console.log(data.data);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// 优质标记和取消
	function markAsHQ(accountId,action,type,obj){
		$.ajax({
	        url:'/New/HQController/markAsHQ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	action:action,
	        	type:type
	        },
	        success:function(data){
				if(data.code == '200'){
					if(action == '1'){
						
					}else if(action == '2'){
						// obj.remove();
						obj.parent().parent().remove();
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	function loadFn(){
		// 移除优质ugc
		$('.removeHigh').on('click',function(){
			var artId = $(this).parent().parent().find('td').eq(1).find('a').html();
			var r=confirm("确认要移除热门吗？");
			var obj = $(this);
			if(r==true){
		    	markAsHQ(artId,2,type,obj);
		    }
		})

		// 显示评论内容
		$('.replyNum').on('click',function(){
			var artId = $(this).parent().find('td').eq(1).find('a').html();
			$('.comentList').empty();
			commentList(artId);
			$('.comCgdialog').fadeIn('normal');
		})
		
		// 评论
		$('.comments').on('click',function(){
			$('.robotdialog').fadeIn('normal');
			$('.commentCont').val('');
			var classnum = $(this).parent().parent().find('td').eq(1).find('a').html();
			// console.log(classnum);
			// $('#idList md-radio input:checkbox').prop("checked",false);

			var artId = $(this).parent().parent().find('td').eq(1).find('a').html();
			ugcmodule.lastCommentType(artId)
			
			$('#randombtn').unbind('click').bind('click',function(){
				var typeId = $(".md-radio input[type='radio'][name='radio66']:checked").val();
				randomRobot(typeId);
			})
			$('#robotBtn').unbind('click').bind('click',function(){
				var typeId = $(".md-radio input[type='radio'][name='radio66']:checked").val();
				var replyContent = $('.commentCont').val();
				var gender = $(".md-radio input[type='radio'][name='radio69']:checked").val();
				UGCRobot(artId,typeId,replyContent,gender,classnum);
				// if(replyContent != ''){
				// 	UGCRobot(artId,'',replyContent);
				// }else{
				// 	UGCRobot(artId,typeId,'')
				// }
				// UGCRobot(artId,typeId)
			})
		})
		// 列表中改变排序
		$('.lSort').on('change',function(){
			var id = $(this).parent().parent().find('td').eq(1).find('a').html();
			var level = $(this).val();
			var that = $(this);
			ugcUpdate('',id,level,'','','','','',that);
		})
		// 列表中点赞数排序
		$('.lThumb').on('change',function(){
			var id = $(this).parent().parent().find('td').eq(1).find('a').html();
			var fakeSupportCount = $(this).val();
			var that = $(this);
			ugcUpdate('',id,'',fakeSupportCount,'','','','',that);
		})
		// 列表中备注
		$('.lRemark').on('change',function(){
			var id = $(this).parent().parent().find('td').eq(1).find('a').html();
			var remark = $(this).val();
			var that = $(this);
			ugcremark(id,remark);
		})
		// 上热门
		$('.upperHot').on('click',function(){
			var r=confirm("确认要上热门吗？");
			// var id = $(this).parent().attr('atrid');
			var id = $(this).parent().parent().find('td').eq(1).find('a').html();
			// console.log(id);
			var that = $(this);
			if(r==true){
		    	ugcUpdate('',id,'','',1,'','','',that);
		    }
		})

		$('.lowerHot').on('click',function(){
			var id = $(this).parent().parent().find('td').eq(1).find('a').html();
			var r=confirm("确认要下热门吗？");
			var that = $(this);
			if(r==true){
		    	ugcUpdate('',id,'','',0,'','','',that);
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

	$('.fancybox'+randomNum+'').fancybox({
	    'type':'image',
	    helpers:  {
	        
	    }
	});

})






