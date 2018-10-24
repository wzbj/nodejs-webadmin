$(function(){
	$('.navbar-nav li.dropdown-fw').eq(3).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown4 ul.dropdown-menu-fw>li').eq(1).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var loading = '<tr id="loading"><td colspan="16"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var startTime = '',
		endTime = '',
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
	var randomNum = Math.floor(Math.random()*100)+300;
	//列表接口
	getList('','',2,page);
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
				getList('','',2,page);
			}
		});
		
	},3000)
	module.typeList();
	module.wordsList();
	module.sinkList();
	// 点击搜索加载列表
	var strtime2 = ' 23:59:59';
	$('#search').on('click',function(){
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
		// var gender = $("input[type='radio'][name='radio2']:checked").val();
		// var account_status = $("input[type='radio'][name='radio1']:checked").val();
		$('#tbody').html(loading);
		$('.pageTest').empty();
		getList(startTime,endTime,2,page);
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
					getList(startTime,endTime,2,page);
				}
			});
			
		},3000)
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		
		getList(startTime,endTime,2,page);
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
					getList(startTime,endTime,2,page);
				}
			});
			
		},3000)
		
	})
	
    
	function getList(startTime,endTime,status,pageNum){
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
	        	// gender:gender,
	        	// account_status:account_status,
	        	status:status,
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
							str += '<tr><td><input type="hidden" value="'+result[i].id+'">'+result[i].id+'</td>';
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
							str +='<a href="/view/complainManage-reportEvidence?slaveId='+result[i].id+'" target="_blank"><button class="btn btn-primary evidence">查看举报凭证</button></a>';
							str +='<a href="/view/user-userMsg?accountId='+result[i].id+'" target="_blank"><button class="btn btn-primary details">查看被举报人信息</button></a>';
							str += '<a href="/view/user-userjournal?accountId='+result[i].id+'" target="_blank"><button class="btn btn-success seejournal">用户修改日志</button></a>';
							str +='</td></tr>';
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "9">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					$('#loading').hide();
			        $('#tbody').empty();
					$('#tbody').html(str);
					js_file();
					loadFn();
				}else{

				}	        
	        }
	    })
	}
	
	function loadFn(){
		
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
	}

	$('.fancybox'+randomNum+'').fancybox({
	    'type':'image',
	    helpers:  {
	        
	    }
	});

})