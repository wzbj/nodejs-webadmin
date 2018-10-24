$(function(){
	$('.navbar-nav li.dropdown-fw').eq(12).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown15 ul.dropdown-menu-fw>li').eq(2).addClass("active").siblings().removeClass("active");
	
    var allPage = null;
	var type = $("input[type='radio'][name='radio2']:checked").val(),
		status = $("input[type='radio'][name='radio3']:checked").val(),
		page = 1,
		startTime = '',
		endTime = '',
		strtime1 = ' 00:00:00',
    	strtime2 = ' 23:59:59';
	var currentAjax;
	var loading = '<img style="width: 36px" src="/public/img/common/loading.gif" alt="">';
	
	//页面初始时间设置
	$('#reportrange6 span').html('');
	$('#reportrange6').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD');
		var chartime2 = picker.endDate.format('YYYY-MM-DD');
	 	$('#reportrange6 span').html(chartime1 + '至' + chartime2);
	}); 
	// 置空时间
	$('.reset').on('click',function(){
		$('#searchDateRange').html('');
	})
    
	//列表接口
	getList(type,status,startTime,endTime,page);

	setTimeout(function(){
    	Page({
			num:allPage,					//页码数
			startnum:page,				//指定页码
			elem:$('#page1'),		//指定的元素
			callback:function(n){	//回调函数
				page = n;
				window.scrollTo(0,0);
				$('#tbody').html(loading);
				getList(type,status,startTime,endTime,page);
			}
		});
		
	},3000)
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		getList(type,status,startTime,endTime,page);
		setTimeout(function(){
	    	Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					getList(type,status,startTime,endTime,page);
				}
			});
			
		},3000)
	})
	
	//搜索
	$('#search,.selectRadio').on('click',function(){
		$('#page2').empty();
		$('#tbodyhigh').html('');
        $('#allPage').html('');
        
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		if(idtime){
			var startTime = idtime.split("至")[0];
			var endTime = $.trim(idtime.split("至")[1]);
			// var endTime0 = idtime.split("至")[1];
		}else{

		}

		if(!startTime){
			startTime ='';
		}else{
			startTime = startTime + strtime1;
		}
		
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		
		// console.log(startTime);
		// console.log(endTime);
		page =1;
		type = $("input[type='radio'][name='radio2']:checked").val();
		status = $("input[type='radio'][name='radio3']:checked").val();
		$('#tbodyhigh').html(loading);
		// $('.pageTest').empty();
		getList(type,status,startTime,endTime,page);
		setTimeout(function(){
	    	Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					getList(type,status,startTime,endTime,page);
				}
			});
			
		},3000)
	})
	
	function loadFn(){
	    // 删除
	    $('.delete').on('click',function(){
	   		var that = $(this);
			var id = that.parent().attr('value');
			musicDel(id,type);
	   	})
	   	// 屏蔽
	   	$('.shield').on('click',function(){
			var that = $(this);
			var id = that.parent().attr('value');
			musicEdit(id,type,3);
		})
	    // 通过
	   	$('.pass').on('click',function(){
			var that = $(this);
			var id = that.parent().attr('value');
			musicEdit(id,type,1);
		})
	}

    //列表
	function getList(type,status,startTime,endTime,page){
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/CheckVideo/videoList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	typeStatus:type,
	        	verifyStatus:status,
				startTime:startTime,
				endTime:endTime,
	        	pageNum:page,
	        	pageSize:12
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var dataD = data.data;
					allPage = Math.ceil((dataD.total_num)/12);
					$("#allUser").html(dataD.total_num);
					$('#pageNum').html("12");
					$('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					$('#tbodyhigh').empty();
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<div class="col-lg-2 col-md-3 col-sm-3 col-xs-3 musicbox">';
                            str += '<video id="'+ i +'" style="width: 100%;margin-bottom: 4px" controls>';
							str += '<source src="'+ result[i].videoName +'" type="video/mp4"></video>';
							if(status == '2'){
								str += '<div class="status" value="'+ result[i].id +'"><button class="btn btn-danger delete">删除</button><button class="btn btn-warning shield">屏蔽</button><button class="btn btn-success pass">通过</button><a href="/view/user-userMsg?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-info detail">详情</button></a></div></div>';
							}else if(status == '1'){
								str += '<div class="status" value="'+ result[i].id +'"><button class="btn btn-danger delete">删除</button><button class="btn btn-warning shield">屏蔽</button><a href="/view/user-userMsg?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-info detail">详情</button></a></div></div>';
							}else if(status == '3'){
								str += '<div class="status" value="'+ result[i].id +'"><button class="btn btn-danger delete">删除</button><button class="btn btn-success pass">通过</button><a href="/view/user-userMsg?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-info detail">详情</button></a></div></div>';
							}else if(status == '4'){
								str += '<div class="status" value="'+ result[i].id +'"><a href="/view/user-userMsg?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-info detail">详情</button></a></div></div>';
							}
						}
						// $('.pageTest').css('display','block');
						var videos = document.getElementsByTagName('video');
						console.log(videos);
						for (var i = videos.length - 1; i >= 0; i--) {
							(function(){
								var p = i;
								videos[p].addEventListener('play',function(){
									for (var j = videos.length - 1; j >= 0; j--) {
										if (j!=p) videos[j].pause();
									}
								})
							})()
						}
						// function pauseAll(index){
						// 	for (var j = videos.length - 1; j >= 0; j--) {
						// 		if (j!=index) videos[j].pause();
						// 	}
						// };

						Page({
							num:allPage,					//页码数
							startnum:page,				//指定页码
							elem:$('#page2'),		//指定的元素
							callback:function(n){	//回调函数
								page = n;
								// console.log(page);
								window.scrollTo(0,0);
								$('#content').html(loading);
								$('#currentPage').html(page);
								getList(type,status,startTime,endTime,page);
							}
						});
					}else{
						str = '<p>暂时没有数据</p>';
						// $('.pageTest').css('display','none');
					}
					$('#content').html(str);
					loadFn();
				}else{

				}	        
	        }
	    })
	}

	// 编辑接口
    function musicEdit(id,typeStatus,verifyStatus){
    	$.ajax({
	        url:'/New/CheckVideo/videoEdit',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
				id:id,
				typeStatus:typeStatus,
				verifyStatus:verifyStatus,
			},
	        success:function(data){
				console.log(data);
				if(data.code == '200'){
					getList(type,status,startTime,endTime,1)
				}else{
					
				}	        
	        }
	    })
	}
	// 删除接口
    function musicDel(id,type){
    	$.ajax({
	        url:'/New/CheckVideo/videoDel',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
				id:id,
				typeStatus:type,
			},
	        success:function(data){
				console.log(data);
				if(data.code == '200'){
					getList(type,status,startTime,endTime,1)
				}else{
					
				}	        
	        }
	    })
    }
})






