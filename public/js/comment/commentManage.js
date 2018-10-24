$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(13).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown16 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
	$('.reset').on('click',function(){$('#searchDateRange').html('')})
	var allPage = null;
	var loading = '<tr id="loading"><td colspan="12"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var nickname_like = '',
		mobile = '',
		startTime = '',
		endTime = '',
		gender = '',
		os = '',
		numType = '',
		sort = '',
		status = '',
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
	getList('','','','','','','','','',page);
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
				getList('','','','','','','','','',page);
			}
		});
		
	},3000)
	//鼠标滑过图片图片放大
	$("td a img").hover(function(){
		$(this).css({"transform":"scale(2)","z-index":"99"}).siblings().css("z-index","0");
	},function(){
		$(this).css({"transform":"scale(1)","z-index":"0"});
	})
	var strtime2 = ' 23:59:59';
	$('#gopage').on('blur',function(){
		var pages = $('#gopage').val();
		if(pages){
			var nickname_like = $('#sxh1').val();
			var mobile = $('#sxh3').val();
			var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
			var startTime = idtime.split("至")[0];
			var endTime = $.trim(idtime.split("至")[1]);
			if(!endTime){
				endTime ='';
			}else{
				endTime = endTime + strtime2;
			}
			var gender = $("input[type='radio'][name='radio1']:checked").val();
			var os = $("input[type='radio'][name='radio2']:checked").val();
			var numType = $("input[type='radio'][name='radio3']:checked").val();
			var sort = $("input[type='radio'][name='radio4']:checked").val();
			var status = $("input[type='radio'][name='radio5']:checked").val();
			$('#tbody').html(loading);
			$('.pageTest').empty();
			getList(nickname_like,mobile,startTime,endTime,os,gender,numType,sort,status,pages);
			$('#currentPage').html(pages);
			// setTimeout(function(){
			// 	console.log(pages);
			// 	console.log(allPage);
			// 	// if(allPage<=21){
			// 	// 	console.log(11111);
			// 	// }else{
			// 	// 	console.log(2222222);
			// 	// }
			// 	// var str = '<div class="next" style="float:right">&gt;</div><ul class="pagingUl"><li><a href="javascript:">1</a></li><li><a href="javascript:"  class="activP">2</a></li><li><a href="javascript:">3</a></li><li><a href="javascript:">4</a></li><li><a href="javascript:">5</a></li><li><a href="javascript:">6</a></li><li><a href="javascript:">7</a></li><li><a href="javascript:">8</a></li><li><a href="javascript:">9</a></li></ul><div class="prv" style="float:right">&lt;</div>';
			// 	var str = '<div class="next" style="float:right">&gt;</div><ul class="pagingUl"><li><a href="javascript:" class="activP">'+pages+'</a></li></ul><div class="prv" style="float:right">&lt;</div>';
			// 	$('.pageTest').html(str);

			// },3500)
			// setTimeout(function(){
			// 	$('.pageTest').page({
			// 		leng: allPage,//分页总数
			// 		activeClass: 'activP' , //active 类样式定义
			// 		clickBack:function(page){
			// 			window.scrollTo(0,0);
			// 			$('#tbody').html(loading);
			// 			$('#currentPage').html(page);
			// 			console.log(222);
			// 			getList(nickname_like,mobile,startTime,endTime,os,gender,numType,sort,status,page);
			// 		}
			// 	});
			// },3000)
		}else{

		}
	})
	// 点击搜索加载列表
	$('#search,.selectRadio').on('click',function(){
		page = 1;
		 nickname_like = $('#sxh1').val();
		 mobile = $('#sxh3').val();
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		 startTime = idtime.split("至")[0];
		 endTime = idtime.split("至")[1];
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		 gender = $("input[type='radio'][name='radio1']:checked").val();
		 os = $("input[type='radio'][name='radio2']:checked").val();
		 numType = $("input[type='radio'][name='radio3']:checked").val();
		 sort = $("input[type='radio'][name='radio4']:checked").val();
		 status = $("input[type='radio'][name='radio5']:checked").val();
		$('#tbody').html(loading);
		$('.pageTest').empty();
		getList(nickname_like,mobile,startTime,endTime,os,gender,numType,sort,status,page);
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
					getList(nickname_like,mobile,startTime,endTime,os,gender,numType,sort,status,page);
				}
			});
			
		},3000)
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		
		$('#tbody').html(loading);
		$('.pageTest').empty();
		getList(nickname_like,mobile,startTime,endTime,os,gender,numType,sort,status,page);
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
					getList(nickname_like,mobile,startTime,endTime,os,gender,numType,sort,status,page);
				}
			});
			
		},3000)
		
	})
	
	
	// 选中屏蔽
	$('#shield').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			var r=confirm("确认对选中的用户屏蔽吗？");
			if(r==true){
		    	replyPunch(xboxArr,xboxArrNew,3,'');
		    }
		}else{
			confirm("请至少选择一个用户");
		}
		
	})
	function loadFn(){
		$('.selectmap').on('click',function(e){
			var name = e.target.className;
			if(name=='shield'){
				var that = $(this).find('.shield');
				var id = that.parent().parent().find('td').eq(1).html();
				var r=confirm("确认屏蔽该评论吗？");
				if(r==true){
					replyPunch('',id,3,that);
			    }
			}else if(name=='journal'){
				var that = $(this).find('.journal');
				var id = that.parent().parent().find('td').eq(2).html();
				var url ='/view/user-journalList?type=2?id='+id;
				window.open(url);
			}else if(name=='replace'){
				var that = $(this).find('.replace');
				var id = that.parent().parent().find('td').eq(1).html();
				console.log(id);
				replace(id,that);
			}
		})
		// 屏蔽
		$('.shield').on('click',function(){
			var that = $(this);
			var id = that.parent().parent().find('td').eq(1).html();
			var r=confirm("确认屏蔽该评论吗？");
			if(r==true){
				replyPunch('',id,3,that);
		    }
		})
		// 替换
		$('.replace').on('click',function(){
			var that = $(this);
			var id = that.parent().parent().find('td').eq(1).html();
			replace(id,that);
		})
		// 列表中点赞数排序
		$('.lThumb').on('change',function(){
			var id = $(this).parent().parent().find('td').eq(1).html();
			var fakeSupportCount = $(this).val();
			var that = $(this);
			supportEdit(id,fakeSupportCount)
		})
	}
	
    
	function getList(nickname_like,mobile,startTime,endTime,os,gender,numType,sort,status,pageNum){
		$.ajax({
	        url:'/New/ArtReply/rplist',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	nickname_like:nickname_like,//昵称模糊
	        	mobile:mobile,//手机
	        	startTime:startTime,//开始时间
	        	endTime:endTime,//结束时间
	        	os:os,//操作系统
	        	gender:gender,//性别
	        	numType:numType,//号码筛选
	        	sort:sort,//号码筛选
	        	status:status,//号码筛选
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
							str += '<tr class="tr'+result[i].id+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';
							str += '<td>'+result[i].id+'</td>';
							str += '<td><a href="/ugc/view/'+result[i].artId+'"  target="_blank">'+result[i].artId+'</a></td>';
							if(result[i].os == '1'){
								str +='<td>Ios</td>';
							}else if(result[i].os == '2'){
								str +='<td>Android</td>';
							}else{
								str +='<td>未知</td>';
							}
							str += '<td>'+result[i].nickname+'</td>';
							str += '<td>'+result[i].mobile+'</td>';
							if(result[i].gender == '1'){
								str +='<td>男</td>';
							}else if(result[i].gender == '2'){
								str +='<td>女</td>';
							}else{
								str +='<td>未知</td>';
							}
							str += '<td>'+result[i].replyContent+'</td>';
							str += '<td>'+result[i].createTime+'</td>';
							str += '<td>'+result[i].totalSupports+'</td>';
							str += '<td><input type="text" class="lThumb" style="text-align:center;width:90%;" value="'+result[i].fakeSupportCount+'" /></td>';
							// str += '><td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap">';
							str +='<td>';
							if(result[i].status == '1'){
								str +='<button class="btn btn-danger shield">屏蔽</button>';
							}else{
								str +='';
							}
							str +='<button class="btn btn-warning replace">替换评论内容</button>';
							str +='<a href="/view/user-journalList?type=2?id='+result[i].articleId+'"  target="_blank"><button class="btn btn-primary journal">查看日志</button></a>';
							str +='</td></tr>';
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "15">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					
					$('#tbody').html(str);
					js_file();
					loadFn();
				}else{

				}	        
	        }
	    })
	}

	//屏蔽接口
	function replyPunch(xboxArr,id,status,obj){
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
					var len = xboxArr.length;
					if(len < 1){
						obj.remove();
					}else{
						for(var i = 0; i < len;i++){
							$('.tr'+xboxArr[i]+'').find('.shield').css("display","none");
						}
					}
					$('.numCgdialog .smcontent p').html('屏蔽成功');
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



})






