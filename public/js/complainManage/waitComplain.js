$(function(){
	$('.navbar-nav li.dropdown-fw').eq(3).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown4 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var loading = '<tr id="loading"><td colspan="9"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var startTime = '',
		endTime = '',
		gender = '',
		account_status = '',
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
	var randomNum = Math.floor(Math.random()*100)+200;
	//列表接口
	getList('','',1,'',1,'',page);
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
				getList('','',1,'','','',page);
			}
		});
		
	},6000)
	module.typeList();
	module.wordsList();
	module.sinkList();
	// 点击搜索加载列表
	var strtime2 = ' 23:59:59';
	$('#search,.selectRadio').on('click',function(){
		// var sxh1 = $('#sxh1').val();
		// var sxh2 = $('#sxh2').val();
		// var sxh3 = $('#sxh3').val();
		page =1;
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		 startTime = idtime.split("至")[0];
		 endTime = idtime.split("至")[1];
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		 account_status = $("input[type='radio'][name='radio1']:checked").val();
		 gender = $("input[type='radio'][name='radio2']:checked").val();
		 status = $("input[type='radio'][name='radio3']:checked").val();
		$('#tbody').html(loading);
		console.log(account_status);
		$('.pageTest').empty();
		if(account_status=='6'){
			getList(startTime,endTime,status,gender,'',1,page);
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
						getList(startTime,endTime,status,gender,'',1,page);
					}
				});
				
			},6000)
		}else{
			getList(startTime,endTime,status,gender,account_status,'',page);
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
						getList(startTime,endTime,status,gender,account_status,'',page);
					}
				});
				
			},6000)
		}
		
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		
		$('#tbody').html(loading);
		if(account_status=='6'){
			getList(startTime,endTime,status,gender,'',1,page);
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
						getList(startTime,endTime,status,gender,'',1,page);
					}
				});
				
			},6000)
		}else{
			getList(startTime,endTime,status,gender,account_status,'',page);
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
						getList(startTime,endTime,status,gender,account_status,'',page);
					}
				});
				
			},6000)
		}
		
		
	})
	
	
    
	function getList(startTime,endTime,status,gender,account_status,lock,pageNum){
		var str = '';
		$('#loading').ajaxStart(function(){
	    	$(this).show();
	    }),	
		$.ajax({
	        url:'/New/Complain/complainList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	// nickname:nickname,
	        	// nickname_like:nickname_like,
	        	// mobile:mobile,
	        	startTime:startTime,
	        	endTime:endTime,
	        	status:status,
	        	gender:gender,
	        	account_status:account_status,
	        	lock:lock,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
	        	
				if(data.code == '200'){
					var dataD = data.data;
					allPage = Math.ceil((dataD.total_num)/50);
					$("#allUser").html(dataD.total_num);
					$('#pageNum').html("50");
					$('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr class="tr'+result[i].id+'"><td><input type="hidden" value="'+result[i].id+'">'+result[i].id+'</td>';
							str += '<td class="telNum" value="'+result[i].account+'">'+result[i].account+'</td>';
							if(result[i].gender == '1'){
								str +='<td>男</td><td>';
							}else if(result[i].gender == '2'){
								str +='<td>女</td><td>';
							}
							for(var j = 0;j<result[i].covers.length;j++){
								str +='<a class="fancybox'+randomNum+'" href="'+result[i].covers[j]+'"data-fancybox-group="gallery" title="">';
								str +='<img style="width:100px;" src="'+result[i].covers[j]+'@w_120,q_60" alt="" /></a>';
							}
							str += '</td><td>'+result[i].complain_num+'</td>';
							if(result[i].status == '1'){
								str +='<td>未处理</td>';
							}else if(result[i].status == '2'){
								str +='<td>已处理</td>';
							}
							str += '<td class="aRemark">'+result[i].remark+'</td>';
							str += '<td>'+result[i].lastActionTime+'</td>';
							// str += '<td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap">';
							str +='<td>';
							if(result[i].account_status == '0'){
								str +='<button class="btn btn-success relieve">解封</button>';
								str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
								str +='<button class="btn btn-danger sink">沉底</button>';
								str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
							}else if(result[i].account_status == '1'){
								str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
								str +='<button class="btn btn-danger shields">屏蔽</button>';
								str +='<button class="btn btn-danger sink">沉底</button>';
								str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
							}else if(result[i].account_status == '2'){
								str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
								str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
								str +='<button class="btn btn-danger sink" style="display:none;">沉底</button>';
								str +='<button class="btn btn-success fishing">海捞</button>';
							}
							if(result[i].lock == '1'){
								str +='<button class="btn btn-default locked" style="display:none;">锁定</button>';
								str +='<button class="btn btn-warning unlocked">解锁</button>';
							}else if(result[i].lock=='0'){
								str +='<button class="btn btn-default locked">锁定</button>';
								str +='<button class="btn btn-warning unlocked" style="display:none;">解锁</button>';
							}
							if(status=='1'){
								str +='<button class="btn btn-success handled">已处理</button>';
							}else{
								str +=''; 
							}
							str +='<a href="/view/complainManage-reportEvidence?slaveId='+result[i].id+'" target="_blank"><button class="btn btn-primary evidence">查看举报凭证</button></a>';
							str +='<a href="/view/user-userMsg?accountId='+result[i].id+'" target="_blank"><button class="btn btn-primary details">查看被举报人信息</button></a>';
							str += '<a href="/view/user-userjournal?accountId='+result[i].id+'" target="_blank"><button class="btn btn-success seejournal">用户修改日志</button></a>';
							str +='</td></tr>';
							// str +='</div></div></td></tr>';
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "9">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					$('#loading').hide();
			        $('#tbody').empty();
					$('#tbody').html(str);
					// js_file();
					loadFn();
				}else{

				}	        
	        }
	    })
		
	}
	// 已处理操作
	function loadFn(){
		
		$('.handled').on('click',function(){
			var id = $(this).parent().parent().find('input').val();
			handled(id);
		})
		$('.sink').on('click',function(){
		 	var that = $(this);
		 	module.sink(that);
		})
		// 解封
		$('.relieve').on('click',function(){
			var that = $(this);
			module.relieve(that);
		})
		$('.shields').on('click',function(){
			var that = $(this);
			module.shields(that);
		})
		// 海底捞
		$('.fishing').on('click',function(){
			var that = $(this);
			module.fishing(that);
		})
		// 锁定
		$('.locked').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var r=confirm("确认对选中的用户锁定吗？");
			var obj = $(this);
			if(r==true){
		    	locked(accountId,1,0,obj);
		    }
		})
		// 解锁
		$('.unlocked').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var r=confirm("确认对该锁定用户解锁吗？");
			var obj = $(this);
			if(r==true){
		    	locked(accountId,2,1,obj);
		    }
		})

	}

	
	function handled(accountId){
		$.ajax({
	        url:'/New/Complain/changeStatus',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.tr'+accountId+'').css('background','#BDBDBD');
					$('.tr'+accountId+'').find('.handled').css('display','none');
					$('.tr'+accountId+'').find('td').eq(5).html('已处理');
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}

	// 锁定功能
	function locked(accountId,lock,status,obj){
		$.ajax({
	        url:'/New/Account/advancedChangeStatus',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	lock:lock,
	        	status:status
	        },
	        success:function(data){
				if(data.code == '200'){
					if(lock=='1'){
						obj.parent().find('.locked').css("display","none");
						obj.parent().find('.unlocked').css("display","block");
					}else if(lock=='2'){
						obj.parent().find('.locked').css("display","block");
						obj.parent().find('.unlocked').css("display","none");
					}
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