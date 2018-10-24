$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(16).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown18 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
	$('.reset').on('click',function(){$('#searchDateRange').html('')})
	var allPage = null;
	var loading = '<tr id="loading"><td colspan="7"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var page = 1;
	//页面初始时间设置
	// var date1=moment().subtract('days', 15).format('YYYY-MM-DD');
	// var date2=moment().subtract('days', 1).format('YYYY-MM-DD');
	// $('#reportrange3 span').html('');
	var randomNum = Math.floor(Math.random()*100)+400;
	//点击修改内容变为输入框

	//全选
	$("#all").click(function(){   
	    if(this.checked){   
	        $("tbody :checkbox").prop("checked", true);  
	    }else{   
			$("tbody :checkbox").prop("checked", false);
	    }   
	});

	//列表接口
	getList('','','',1,page);
	
	//鼠标滑过图片图片放大
	$("td a img").hover(function(){
		$(this).css({"transform":"scale(2)","z-index":"99"}).siblings().css("z-index","0");
	},function(){
		$(this).css({"transform":"scale(1)","z-index":"0"});
	})
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
				getList('','','',1,page);
			}
		});
		
	},3000)

	$('.refresh').on('click',function(){
		getList('','','',1,page);
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
					getList('','','',1,page);
				}
			});
			
		},3000)
	})
	
	// 数美问题设备选中通过
	$('#through').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			var r=confirm("确认对选中的用户通过吗？");
			if(r==true){
		    	module.senUserStatusChange(xboxArr,xboxArrNew,'account');
		    }
		}else{
			confirm("请至少选择一个用户");
		}
	})
	function loadFn(){
		// 通过
		$('.through').on('click',function(){
			var that = $(this);
			module.through(that,'account');
		})
	}
	
    
	function getList(startTime,endTime,blockedType,status,pageNum){
		$.ajax({
	        url:'/New/ShuMeiSensitive/senList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	startTime:startTime,//开始时间
	        	endTime:endTime,//结束时间
	        	blockedTypeblockedType:blockedType,//号码筛选
	        	status:status,
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
							// console.log(result[i].interceptTimes);
							str += '<tr class="tr'+result[i].id.split(",",1)+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';
							// str += '<td>'+result[i].id+'</td>';
							str += '<td><a style="float:none;" target="_blank" href="/view/user-userMsg?accountId='+result[i].accountId+'">'+result[i].accountId+'</a></td>';
							str += '<td>'+result[i].sensitiveTypeText+'</td>';
							str += '<td>'+result[i].originText+'</td>';
							str += '<td>'+result[i].interceptTimes+'</td>';
							str += '<td>'+result[i].riskTypeText+'</td>';
							str += '<td><button class="btn btn-success through">通过</button></td></tr>';
							// str += '<td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap">';

							// if(result[i].status == '1'){
							// 	str +='<div class="shield">屏蔽</div>';
							// }else{
							// 	str +='';
							// }
							// str +='<div class="replace">替换评论内容</div>';
							// str +='<a href="/view/user-journalList?type=2?id='+result[i].articleId+'"  target="_blank"><div class="journal">查看日志</div></a>';
							// str +='</div></div></td></tr>';
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "15">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					
					$('#tbody').html(str);
					// js_file();
					loadFn();
				}else{

				}	        
	        }
	    })
	}

	// // 数美问题用户选中通过
	// $('#through').on('click',function(){
	// 	var xboxArr = [];
	// 	 $.each($('.xbox input:checkbox'),function(){
 //            if(this.checked){
 //            	xboxArr.push($(this).val());
 //            }
 //        });
	// 	var xboxArrNew = xboxArr.join();
	// 	var len = xboxArr.length;
	// 	if(len>0){
	// 		var r=confirm("确认对选中的用户通过吗？");
	// 		if(r==true){
	// 	    	module.senUserStatusChange(xboxArr,xboxArrNew,'device');
	// 	    }
	// 	}else{
	// 		confirm("请至少选择一个用户");
	// 	}
	// })

	$('.fancybox'+randomNum+'').fancybox({
	    'type':'image',
	    helpers:  {
	        
	    }
	});

})






