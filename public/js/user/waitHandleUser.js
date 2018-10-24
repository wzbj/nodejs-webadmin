$(function(){
	$('.navbar-nav li.dropdown-fw').eq(2).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown3 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var currentAjax;
	// var strtime2 = ' 23:59:59';
	var sxh1 = '',
		sxh2 = '',
		sxh3 = '',
		startTime = '',
		endTime = '',
		gender = '',
		account_status = '',
		status = 1,
		lock ='',
		page =1;

	var loading = '<tr id="loading"><td colspan="16"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	//页面初始时间设置
	// var date1=moment().subtract('days', 15).format('YYYY-MM-DD');
	// var date1=moment().subtract('days', 0).format('YYYY-MM-DD') + ' 00:00'; 
	// var date2=moment().subtract('days', 0).format('YYYY-MM-DD HH:mm');
	startTime=moment().subtract('days', 0).format('YYYY-MM-DD') + ' 00:00'; 
	endTime=moment().subtract('days', 0).format('YYYY-MM-DD HH:mm');
	// console.log(date2);
	$('.reset').on('click',function(){
		$('#searchDateRange').html('');
		deleteCookie("startTime");
        deleteCookie("endTime");
	})
	$('#reportrange1 span').html(startTime + '至' + endTime);
	var randomNum = Math.floor(Math.random()*100)+100;
	//列表接口
	getList(sxh1,sxh2,sxh3,startTime,endTime,account_status,gender,status,lock,page);

	//话术加载
	module.typeList();
	module.wordsList();
	module.sinkList();

	$('#reportrange1').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD HH:mm');
		var chartime2 = picker.endDate.format('YYYY-MM-DD HH:mm');
	 	$('#reportrange1 span').html(chartime1 + '至' + chartime2);
	});

	//鼠标滑过图片图片放大
	$("td a img").hover(function(){
		$(this).css({"transform":"scale(2)","z-index":"99"}).siblings().css("z-index","0");
	},function(){
		$(this).css({"transform":"scale(1)","z-index":"0"});
	})

	

	// 点击搜索加载列表
	// var strtime2 = ' 23:59:59';
	$('#search,.selectRadio').on('click',function(){
		page =1;
		// sxh1 = $('#sxh1').val();
		sxh2 = $('#sxh2').val();
		// sxh3 = $('#sxh3').val();
		var idtime = $('#reportrange1 span').html();//获取时间选择器的时间
		startTime = $.trim(idtime.split("至")[0]);
		endTime = $.trim(idtime.split("至")[1]);
		if($('#sxh3').val()!=''){
			sxh3 = $('#areacode').val() + $('#sxh3').val();
		}else{
			sxh3 = '';
		}
		console.log(sxh3);
	 	status = $("input[type='radio'][name='radio5']:checked").val();
		$('.pageTest').empty();
		$('#tbody').html(loading);
		getList(sxh1,sxh2,sxh3,startTime,endTime,account_status,gender,status,lock,page);
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		getList(sxh1,sxh2,sxh3,startTime,endTime,account_status,gender,status,lock,page);

	})
	

    var tel;
	function place(tel,i){
        //淘宝接口    
        // let tmp = '';
        $.ajax({
             type: "get",
             url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+tel,
             dataType: "jsonp",
             jsonp: "callback",
             async:false,
             success: function(data){
                // console.log(data);
                $('.error').css('display','none');
                	var province = data.province,
                    operators = data.catName,
                    carrier = data.carrier,
                    num = data.telString;
                    $('.places').eq(i).html(province+'<br />'+carrier);

             },
             error:function (){    
                $('li span').html('');
                $('.error').css('display','block');        
             }
         });
    }
     	
    
	function getList(nickname,accountId,mobile,startTime,endTime,account_status,gender,status,lock,pageNum){
		// var str = '';
		// $('#loading').ajaxStart(function(){
	 //    	$(this).show();
	 //    }),	
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/Account/pendingAccount',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	nickname_like:nickname,
	        	accountId:accountId,
	        	mobile:mobile,
	        	startTime:startTime,
	        	endTime:endTime,
	        	account_status:account_status,
	        	gender:gender,
	        	status:status,//1是未处理，2是已处理
	        	lock:lock,
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
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr class="tr'+result[i].id+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';
							str += '<td>'+result[i].accountId+'</td>';
							str += '<td class="telNum" value="'+result[i].account+'">'+result[i].account+'</td>';
							tel = result[i].account;
							str += '<td class="places"></td><td>'
							for(var j = 0;j<result[i].covers.length;j++){
								str +='<a class="fancybox'+randomNum+'" href="'+result[i].covers[j]+'"data-fancybox-group="gallery" title="">';
								str +='<img src="'+result[i].covers[j]+'@w_120,q_60" alt="" /></a>';
							}
							str += '</td><td><a href="/view/index-index#/ordinary?slectNm='+result[i].nickname+'" target="_blank">'+result[i].nickname+'</a></td>';
							if(result[i].gender == '1'){
								str +='<td>男</td>';
							}else if(result[i].gender == '2'){
								str +='<td>女</td>';
							}else{
								str +='<td>未知</td>';
							}
							if(result[i].account_status == '0'){
								str +='<td class="userStau">屏蔽</td>';
							}else if(result[i].account_status == '1'){
								str +='<td class="userStau">正常</td>';
							}else if(result[i].account_status == '2'){
								str +='<td class="userStau">沉底</td>';
							}
							str += '<td><a href="/view/index-index#/ordinary?slectIp='+result[i].ip+'" target="_blank">'+result[i].ip+'</td>';
							str += '<td>'+result[i].sign+'</td>';
							str += '<td>'+result[i].birthday+'</td>';
							str += '<td>'+result[i].updateTime+'</td>';
							str += '<td>'+result[i].smRiskLevel+'</td>';
							if(result[i].intent == '灵魂社交'){
								str +='<td style="color:red;">'+result[i].intent+'</td>';
							}else{
								str +='<td>'+result[i].intent+'</td>';
							}
							str += '<td class="aRemark">'+result[i].remark+'</td>';
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
							// if(result[i].lockNew == '1'){
							// 	str +='<div class="through">通过</div>';
							// }
							if(result[i].lock == '1'){
								str +='<button class="btn btn-default locked" style="display:none;">锁定</button>';
								str +='<button class="btn btn-warning unlocked">解锁</button>';
							}else if(result[i].lock=='0'){
								str +='<button class="btn btn-default locked">锁定</button>';
								str +='<button class="btn btn-warning unlocked" style="display:none;">解锁</button>';
							}
							str +='<button class="btn btn-info huyue">胡月</button>';
							str +='<button class="btn btn-info paoge">炮哥</button>';
							str +='<button class="btn btn-info zhaozhao">找找</button>';
							if(status == '1'){
								str +='<button class="btn btn-success handled">已处理</button>';
								str += '<a href="/view/user-userjournal?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-success seejournal">用户修改日志</button></a>';
							}else if(status == '2'){
								str += '<a href="/view/user-userjournal?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-success seejournal">用户修改日志</button></a>';
							}
							// str +='<div class="handled">已处理</div>';
							str +='<a href="/view/user-journalList?type=1?id='+result[i].id+'" target="_blank"><button class="btn btn-primary journal">查看日志</button></a>';
							str +='<a href="/view/user-userMsg?accountId='+result[i].id+'"  target="_blank"><button class="btn btn-warning details">查看详情</button></a>';
							// str +='</div></div></td></tr>';
							str +='</td></tr>';
						}
						Page({
							num:allPage,					//页码数
							startnum:page,				//指定页码
							elem:$('#page1'),		//指定的元素
							callback:function(n){	//回调函数
								page = n;
								window.scrollTo(0,0);
								$('#currentPage').html(page);
								$('#tbody').html(loading);
								// getList('','','',startTime,endTime,'','',1,'',page);
								getList(sxh1,sxh2,sxh3,startTime,endTime,account_status,gender,status,lock,page);
							}
						});
					}else{
						str = '<tr><td colSpan = "16">暂时没有数据</td></tr>';
					}
					$('#tbody').html(str);
					placeLoad();
					loadFn();
				}else{

				}	        
	        }
	    })
	  
	}
	
	// 用户所在地显示
	function placeLoad(){
		setTimeout(function(){
			var len = $('.telNum').length;
			for(var i = 0;i<len;i++){
				// console.log($('.telNum').eq(i).attr("value"));
				var value = $('.telNum').eq(i).attr("value");
				// console.log(value);
				place(value,i);
			}

		},500)
	}
	
	// 已处理操作
	function loadFn(){
		
		$('.handled').on('click',function(){
			var id = $(this).parent().parent().find('input').val();
			handled(id,2,'');
		})
		$('.sink').on('click',function(){
		 	var that = $(this);
		 	module.sink(that);
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
		// 胡月
		$('.huyue').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var r=confirm("确认对选中的用户胡月吗？");
			if(r==true){
		    	mixed(accountId,1);
		    }
		})
		// 炮哥
		$('.paoge').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var r=confirm("确认对选中的用户炮哥吗？");
			if(r==true){
		    	mixed(accountId,2);
		    }
		})
		// 找找
		$('.zhaozhao').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var r=confirm("确认对选中的用户找找吗？");
			if(r==true){
		    	zhaozhao(accountId);
		    }
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

	// 选中已处理
	$('#relieve').on('click',function(){
			var xboxArr = [];
			 $.each($('.xbox input:checkbox'),function(){
	            if(this.checked){
	            	xboxArr.push($(this).val());
	            }
	        });
			var xboxArrNew = xboxArr.join();
			var len = xboxArr.length;
			if(len>0){
				var r=confirm("确认对选中的用户解封吗？");
				if(r==true){
			    	module.batchEdit(xboxArr,xboxArrNew,1,'','','',1,'');
			    }
			}else{
				confirm("请至少选择一个用户");
			}
		})
	$('#allhadle').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			var r=confirm("确认对选中的用户已处理吗？");
			if(r==true){
				handled(xboxArrNew,2,xboxArr);
		    	// module.batchEdit(xboxArr,xboxArrNew,1,'','','',1,'');
		    }
		}else{
			confirm("请至少选择一个用户");
		}
	})

	function handled(id,status,xboxArr){
		$.ajax({
	        url:'/New/Account/changeLastEditStatus',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:id,
	        	status:status
	        },
	        success:function(data){
				if(data.code == '200'){
					var len = xboxArr.length;
					if(len>0){
						for(var i = 0;i<len;i++){
							$('.tr'+xboxArr[i]+'').css('background','#BDBDBD');
							$('.tr'+xboxArr[i]+'').find('.handled').css('display','none');
						}
						getList('','','','','','','',1,'',1);
					}else{
						$('.tr'+id+'').css('background','#BDBDBD');
						$('.tr'+id+'').find('.handled').css('display','none');
					}
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}

	$('.lookNum').on('click',function(){
		var idtime = $('#reportrange1 span').html();//获取时间选择器的时间
		var startTime = $.trim(idtime.split("至")[0]);
		var endTime = $.trim(idtime.split("至")[1]);
		// var endTime = $.trim(idtime.split("至")[1]);
		// if(!endTime){
		// 	endTime ='';
		// }else{
		// 	endTime = endTime + strtime2;
		// }
		lookNum(startTime,endTime);
	})

	function lookNum(startTime,endTime){
		$.ajax({
	        url:'/New/Statistics/dealCountNum',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	startTime:startTime,
	        	endTime:endTime
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					$('#haveHand').html(dataD.dealNum);
					$('#noHand').html(dataD.notDealNum);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	function mixed(accountId,type){
		$.ajax({
	        url:'/New/HQController/markAsHQ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	action:1,
	        	accountId:accountId,
	        	type:type
	        },
	        success:function(data){
				if(data.code == '200'){
					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 找找
	function zhaozhao(accountId){
		$.ajax({
	        url:'/New/HQController/markAsZZ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId
	        },
	        success:function(data){
				if(data.code == '200'){
					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 通过
	function through(accountId){
		$.ajax({
	        url:'/New/Account/agree',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId
	        },
	        success:function(data){
				if(data.code == '200'){
					
				}else{
					confirm("网络异常");
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


})





