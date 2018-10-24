$(function(){
	$('.navbar-nav li.dropdown-fw').eq(16).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown18 ul.dropdown-menu-fw>li').eq(1).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var loading = '<tr id="loading"><td colspan="17"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var ip = '',
		mobile = '',
		startTime = '',
		endTime = '',
		status = '',
		api = '',
		smRiskLevel = '',
		accountStatus = '',
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
	var TIME;//定义全局变量
    $(window).scroll( function() {
        clearTimeout(TIME);//必须要有这句
        var oDistance = $(document).scrollTop(); 
        if( $(document).scrollTop() > 200 ){
            TIME = setTimeout(function(){
            	$("#iscrollHead").css("display","block");
                $("#iscrollHead").addClass("iscrollHead");
               	$(".iscrollHead").css({"top":oDistance-300});
            },100);
        }else{
            TIME = setTimeout(function(){
                $("#iscrollHead").css("display","none");
            },100);
        }
    });

	
	var randomNum = Math.floor(Math.random()*800);
	
	//列表接口
	getList('','','','','','','','','','',page);
	setTimeout(function(){
		Page({
			num:allPage,					//页码数
			startnum:page,				//指定页码
			elem:$('#page1'),		//指定的元素
			callback:function(n){	//回调函数
				page = n;
				window.scrollTo(0,0);
				$('#tbody').html(loading);
				getList('','','','','','','','','','',page);
			}
		});
		
	},3000)
	module.typeList();
	module.wordsList();
	module.sinkList();
	// module.typeList();
	// module.wordsList();
	// loadFn();
	//鼠标滑过图片图片放大
	$("td a img").hover(function(){
		$(this).css({"transform":"scale(4)","z-index":"99"}).siblings().css("z-index","0");
	},function(){
		$(this).css({"transform":"scale(1)","z-index":"0"});
	})


	// 点击搜索加载列表
	var strtime2 = ' 23:59:59';
	$('#search,.selectRadio').on('click',function(){
		page = 1;
		 ip = $('#sxh5').val();
		 mobile = $('#mobile').val();
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		 startTime = idtime.split("至")[0];
		 endTime = idtime.split("至")[1];
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		 status = $("input[type='radio'][name='radio1']:checked").val();
		 api = $("input[type='radio'][name='radio2']:checked").val();
		 smRiskLevel = $("input[type='radio'][name='radio3']:checked").val();
		 accountStatus = $("input[type='radio'][name='radio4']:checked").val();
		$('#tbody').html(loading);
		$('.pageTest').empty();
		if(accountStatus=='6'){
			getList(startTime,endTime,ip,status,api,smRiskLevel,'','',1,mobile,page);
			setTimeout(function(){
				Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						getList(startTime,endTime,ip,status,api,smRiskLevel,'','',1,mobile,page);
					}
				});
				
			},3000)
		}else{
			getList(startTime,endTime,ip,status,api,smRiskLevel,'',accountStatus,'',mobile,page);
			setTimeout(function(){
				Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						getList(startTime,endTime,ip,status,api,smRiskLevel,'',accountStatus,'',mobile,page);
					}
				});
				
			},3000)
		}
		
	})
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		if(accountStatus=='6'){
			getList(startTime,endTime,ip,status,api,smRiskLevel,'','',1,mobile,page);
			setTimeout(function(){
				Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						getList(startTime,endTime,ip,status,api,smRiskLevel,'','',1,mobile,page);
					}
				});
				
			},3000)
		}else{
			getList(startTime,endTime,ip,status,api,smRiskLevel,'',accountStatus,'',mobile,page);
			setTimeout(function(){
				Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						getList(startTime,endTime,ip,status,api,smRiskLevel,'',accountStatus,'',mobile,page);
					}
				});
				
			},3000)
		}
		
	})

	function getList(startTime,endTime,ip,status,api,smRiskLevel,uinfo,accountStatus,lock,mobile,pageNum){
			
		$.ajax({
	        url:'/New/ShuMeiSensitive/deviceList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	startTime:startTime,
	        	endTime:endTime,
	        	ip:ip,
	        	status:status,
	        	api:api,
	        	smRiskLevel:smRiskLevel,
	        	uinfo:uinfo,
	        	accountStatus:accountStatus,
	        	lock:lock,
	        	mobile:mobile,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        beforeSend:function(){
	        	// var str = '<tr><td colspan="16"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td><tr>';
	        	// $('#tbody').html(str);
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var dataD = data.data;
					allPage = Math.ceil((dataD.total_num)/50);
					var result = dataD.result;
					var len = result.length;
					$('#all').prop('checked',false);
					// $('.pageTest').empty();
					for(var i = 0; i < len;i++){
						str += '<tr class="tr'+result[i].id+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].accountId+'" ids="'+result[i].id+'" /></td>';
						str += '<td>'+result[i].id+'</td>';
						str += '<td><a style="float:none;" target="_blank" href="/view/user-userMsg?accountId='+result[i].accountId+'">'+result[i].accountId+'</a></td>';
						str += '<td>'+result[i].uinfo.nickname+'</td><td>';
						for(var j =0;j<result[i].uinfo.covers.length;j++){
							str +='<a class="fancybox'+randomNum+'" href="'+result[i].uinfo.covers[j]+'"data-fancybox-group="gallery" title="">';
							str +='<img style="" src="'+result[i].uinfo.covers[j]+'@w_120,q_60" alt="" /></a>';
						}
						str += '</td><td>'+result[i].uinfo.account+'</td>';
						str += '<td>'+result[i].ip+'</td>';
						str += '<td>'+result[i].smScore+'</td>';
						str += '<td>'+result[i].smRiskLevel+'</td>';
						str += '<td>'+result[i].detail+'</td>';
						str += '<td>'+result[i].model+'</td>';
						if(result[i].uinfo.status =='0'){
							str +='<td class="userStau" style="color:red;">屏蔽</td>'
						}else if(result[i].uinfo.status =='1'){
							str +='<td class="userStau" style="color:red;">正常</td>'
						}else if(result[i].uinfo.status =='2'){
							str +='<td class="userStau" style="color:red;">沉底</td>'
						}
						// str += '<td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap" value="">';
						str +='<td>';
						if(result[i].uinfo.status == '0'){
							str +='<button class="btn btn-success relieve">解封</button>';
							str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
							str +='<button class="btn btn-danger sink">沉底</button>';
							str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
						}else if(result[i].uinfo.status == '1'){
							str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
							str +='<button class="btn btn-danger shields">屏蔽</button>';
							str +='<button class="btn btn-danger sink">沉底</button>';
							str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
						}else if(result[i].uinfo.status == '2'){
							str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
							str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
							str +='<button class="btn btn-danger sink" style="display:none;">沉底</button>';
							str +='<button class="btn btn-success fishing">海捞</button>';
						}
						// if(result[i].lockNew == '1'){
						// 	str +='<button class="btn btn-success through">通过</button>';
						// }
						if(result[i].lock == '1'){
							// str +='<button class="through">通过</button>';
							str +='<button class="btn btn-warning locked" style="display:none;">锁定</button>';
							str +='<button class="btn btn-warning unlocked">解锁</button>';
						}else if(result[i].lock=='0'){
							str +='<button class="btn btn-warning locked">锁定</button>';
							str +='<button class="btn btn-warning unlocked" style="display:none;">解锁</button>';
						}
						if(result[i].status =='1'){
							str +='<button class="btn btn-success through">通过</button>';
						}
						str +='</td></tr>';
						
					}
					$('#tbody').html(str);
					exHead();
				}else{

				}	        
	        }
	    })

		// $('#loading').ajaxStop(function(){
	 //        $(this).hide();
	 //        $('#tbody').empty();
		// 	$('#tbody').html(str);
		// 	js_file();
		// 	exHead();
	 //    })	
	}

	// 数美问题设备选中通过
	$('#through').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).attr('ids'));
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			// console.log(xboxArrNew);
			var r=confirm("确认对选中的用户通过吗？");
			if(r==true){
		    	module.senUserStatusChange(xboxArr,xboxArrNew,'device');
		    }
		}else{
			confirm("请至少选择一个用户");
		}
	})

	
	function exHead(){

		$('.sink').on('click',function(){
		 	var that = $(this);
			module.sink(that);
			
		 	// module.sink(that);
		})
		$('.shields').on('click',function(){
			var that = $(this);
			module.shields(that);
			
		})
		// 解封
		$('.relieve').on('click',function(){
			var that = $(this);
			module.relieve(that);
		})
		// 海底捞
		$('.fishing').on('click',function(){
			var that = $(this);
			module.fishing(that);
		})
		// 通过
		$('.through').on('click',function(){
			var that = $(this);
			module.through(that,'device');
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
		
		$('.fancybox'+randomNum+'').fancybox({
		    'type':'image',
		    helpers:  {
		        
		    }
		});
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

	// $('tr td a img').on('click',function(){
	// 	$('.fancybox'+randomNum+'').fancybox({
	// 	    'type':'image',
	// 	    helpers:  {
		        
	// 	    }
	// 	});
	// })
    

})









