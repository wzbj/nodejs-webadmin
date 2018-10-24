$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(17).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown19 ul.dropdown-menu-fw>li').eq(2).addClass("active").siblings().removeClass("active");
	$('.reset').on('click',function(){$('#searchDateRange').html('')})
	var allPage = null;
	
	var username ='',
		adminId = '',
		startTime ='',
		endTime ='',
		num ='',
		infoType ='',
		checkStatus ='',
		pageNum =1;
		startTime=moment().subtract('days', 0).format('YYYY-MM-DD') + ' 00:00'; 
		endTime=moment().subtract('days', 0).format('YYYY-MM-DD HH:mm');

	var loading = '<tr id="loading"><td colspan="11"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	//页面初始时间设置
	// var date=moment().subtract('days', 0).format('YYYY-MM-DD');
	$('#reportrange1 span').html(startTime + '至'+ endTime);
	// $('#reportrange1').on('apply.daterangepicker',function(ev, picker) {
	// 	var chartime1 = picker.startDate.format('YYYY-MM-DD');
	// 	var chartime2 = picker.endDate.format('YYYY-MM-DD');
	//  	$('#reportrange1 span').html(chartime1 + '至' + chartime2);
	// });
	$('#reportrange1').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD HH:mm');
		var chartime2 = picker.endDate.format('YYYY-MM-DD HH:mm');
	 	$('#reportrange1 span').html(chartime1 + '至' + chartime2);
	});
	var randomNum = Math.floor(Math.random()*100)+900;
	var journal = ['用户审核已处理','用户审核不通过（没有这个操作）','用户海底捞','用户沉底','用户屏蔽','用户解封','刘波回复','UGC解除屏蔽','UGC屏蔽','UGC评论屏蔽','UGC评论替换','UGC评论替换','UGC审核通过','UGC审核不通过','UGC上热门'];

	//鼠标滑过图片图片放大
	$("td a img").hover(function(){
		$(this).css({"transform":"scale(2)","z-index":"99"}).siblings().css("z-index","0");
	},function(){
		$(this).css({"transform":"scale(1)","z-index":"0"});
	})

	// 员工昵称循环
	adminList(1);
	function adminList(pageNum){
        $.ajax({
            url:'/New/AdminAccount/mylist',
            type:"POST",
            dataType:"json",
            async: true,
            data:{
                pageNum:pageNum,
                pageSize:150
            },
            success:function(data){
                if(data.code == '200'){
                	var str ='<option value=""></option>';
                    var dataD = data.data;
                    var result = dataD.result;
                    var len = result.length;
                    $('#admins').empty();
					for(var i=0;i<len;i++){
						str += '<option value="'+result[i].adminId+'">'+result[i].username+'</option>';
					}
					$('#admins').append(str);
                }else{
                    // confirm("网络异常");
                }           
            }
        })
    }
    var strtime2 = ' 23:59:59';
	// 点击搜索加载列表
	$('#search,.selectRadio').on('click',function(){
		adminId = $("#admins option:selected").val();
		username = $("#admins option:selected").html();
		num = $("#nums option:selected").val();
		var idtime = $('#reportrange1 span').html();//获取时间选择器的时间
		startTime = idtime.split("至")[0];
		endTime = $.trim(idtime.split("至")[1]);
		// if(!endTime){
		// 	endTime ='';
		// }else{
		// 	endTime = endTime + strtime2;
		// }
		infoType = $("input[type='radio'][name='radio1']:checked").val();
		checkStatus = $("input[type='radio'][name='radio5']:checked").val();
		$('#tbody').html(loading);
		$('.pageTest').empty();
		getList(username,adminId,startTime,endTime,num,infoType,checkStatus,1);
		
		
	})
	// dateEnd = date + ' 23:59:59';
	// var date = '2018-07-02';
	// var dateEnd = '2018-07-31 23:59:59';
    getList('','',startTime,endTime,'',1,3,1);
	
	function getList(username,adminId,startTime,endTime,num,infoType,checkStatus,page){
		$.ajax({
	        url:'/New/UGC/qaList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	adminId:adminId,//昵称模糊
	        	startTime:startTime,//开始时间
	        	endTime:endTime,//结束时间
	        	num:num,//操作系统
	        	infoType:infoType,//性别
	        	checkStatus:checkStatus,
	        	pageNum:page,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var dataD = data.data;
					// console.log(dataD.total_num);
					allPage = Math.ceil((dataD.total_num)/50);
					$("#allUser").html(dataD.total_num);
					$('#pageNum').html("50");
					$('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					$('#tbody').empty();
					// $('.pageTest').empty();
					if(len>0){
					console.log(len);
						for(var i = 0; i < len;i++){
							if(result[i].ugcinfo.length =='0' && result[i].uinfo.length =='0'){
								str += '';
							}else{

								str += '<tr class="tr" val="'+result[i].adminLogId+'">';
								str += '<td>'+result[i].username+'</td>';
								str += '<td><a style="float:none;" href="/view/index-index#/ordinary?slectNm='+result[i].uinfo.nickname+'" target="_blank">'+result[i].uinfo.nickname+'</a></td>';
								str += '<td><a style="float:none;" href="/view/index-index#/ordinary?slectPn='+result[i].uinfo.account+'" target="_blank">'+result[i].uinfo.account+'</a></td><td>';
								if(infoType == '1'){
									for(var j = 0;j<result[i].ugcinfo.resourcesLists.length;j++){
										str +='<a class="fancybox'+randomNum+'" href="'+result[i].ugcinfo.resourcesLists[j].url+'"data-fancybox-group="gallery" title="">';
										str +='<img style="width:80px;" src="'+result[i].ugcinfo.resourcesLists[j].url+'?imageView2/1/w/100/h/100" alt="" /></a>';
									}
									for(var j=0;j<result[i].ugcinfo.videoLists.length;j++){
										// str +='<video width="80" height="80" style="float: left;" src="'+result[i].ugcinfo.videoLists[j].url+'" controls="controls"></video>';
										str +='<a style="position:relative;"><video width="80" height="80" style="float: left;" src="'+result[i].ugcinfo.videoLists[j].url+'" ></video>';
										str +='<img class="controlIcon" style="position:absolute;top:50%;left:50%;width:20px;height:20px;margin-left:-10px!important;margin-top:-10px!important;" src="/public/img/common/timg.png" /></a>';
									}
									var indexNum = result[i].ugcinfo.txtContent.indexOf('???????');
									if(indexNum>=0){
										str += '</td><td>'+result[i].ugcinfo.txtContent.substr(0,indexNum)+'</td>';
									}else{
										str += '</td><td>'+result[i].ugcinfo.txtContent+'</td>';
									}
									// str += '</td><td>'+result[i].ugcinfo.txtContent+'</td>';
								}else if(infoType == '2'){
									for(var j = 0;j<result[i].uinfo.covers.length;j++){
										str +='<a class="fancybox'+randomNum+'" href="'+result[i].uinfo.covers[j]+'"data-fancybox-group="gallery" title="">';
										str +='<img style="" src="'+result[i].uinfo.covers[j]+'@w_120,q_60" alt="" /></a>';
									}
									str += '</td><td>'+result[i].uinfo.sign+'</td>';
								}
								str += '<td>'+result[i].createTime+'</td>';
								if(result[i].type >2 && result[i].type <=17){
									str += '<td>'+journal[result[i].type-3]+'</td>';
								}else if(result[i].type == '21'){
									str += '<td>用户审核通过</td>';
								}else{
									str += '<td>暂无</td>';
								}
								if(result[i].checkRs == '1'){
									str += '<td><div class="md-radio" style="display: inline-block;">';
									str += '<input class="checkSta" type="radio" checked id="checkbox3_'+(2*i+1)+'" name="radio'+(2*i)+'" value="1" class="md-radiobtn">';
									str += '<label for="checkbox3_'+(2*i+1)+'"><span></span>';
									str += '<span class="check"></span><span class="box"></span>对</label></div>';
									str += '<div class="md-radio" style="display: inline-block;">';
									str += '<input class="checkSta" type="radio" id="checkbox3_'+(2*i+2)+'" name="radio'+(2*i)+'" value="2" class="md-radiobtn">';
									str += ' <label for="checkbox3_'+(2*i+2)+'"><span></span>';
									str += '<span class="check"></span><span class="box"></span>错</label></div>';
									str += '</td>';
								}else if(result[i].checkRs == '2'){
									str += '<td><div class="md-radio" style="display: inline-block;">';
									str += '<input class="checkSta" type="radio" id="checkbox3_'+(2*i+1)+'" name="radio'+(2*i)+'" value="1" class="md-radiobtn">';
									str += '<label for="checkbox3_'+(2*i+1)+'"><span></span>';
									str += '<span class="check"></span><span class="box"></span>对</label></div>';
									str += '<div class="md-radio" style="display: inline-block;">';
									str += '<input class="checkSta" type="radio" checked id="checkbox3_'+(2*i+2)+'" name="radio'+(2*i)+'" value="2" class="md-radiobtn">';
									str += ' <label for="checkbox3_'+(2*i+2)+'"><span></span>';
									str += '<span class="check"></span><span class="box"></span>错</label></div>';
									str += '</td>';
								}else{
									str += '<td><div class="md-radio" style="display: inline-block;">';
									str += '<input class="checkSta" type="radio" id="checkbox3_'+(2*i+1)+'" name="radio'+(2*i)+'" value="1" class="md-radiobtn">';
									str += '<label for="checkbox3_'+(2*i+1)+'"><span></span>';
									str += '<span class="check"></span><span class="box"></span>对</label></div>';
									str += '<div class="md-radio" style="display: inline-block;">';
									str += '<input class="checkSta" type="radio" id="checkbox3_'+(2*i+2)+'" name="radio'+(2*i)+'" value="2" class="md-radiobtn">';
									str += ' <label for="checkbox3_'+(2*i+2)+'"><span></span>';
									str += '<span class="check"></span><span class="box"></span>错</label></div>';
									str += '</td>';
								}
								// str += '<td>'+result[i].dataEditNum+'</td>';
								str += '<td>'+result[i].checkAdminName+'</td>';
								str += '<td><input type="text" class="remark" style="text-align:center;width:90%;" value="'+result[i].remark+'" /></td><td>';
								if(infoType==1){
									str += '<a href="/view/ugc-ugcMsg?artId='+result[i].artId+'" target="_blank"><button class="btn btn-warning seejournal">查看ugc详情</button></a>';
								}else if(infoType==2){
									str += '<a href="/view/user-userjournal?accountId='+result[i].uinfo.id+'" target="_blank"><button class="btn btn-success seejournal">用户修改日志</button></a>';
								}
								str += '</td></tr>';
							}
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "11">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					
					$('#tbody').html(str);
					Page({
						num:allPage,					//页码数
						startnum:page,				//指定页码
						elem:$('#page1'),		//指定的元素
						callback:function(n){	//回调函数
							page = n;
							window.scrollTo(0,0);
							$('#currentPage').html(page);
							$('#tbody').html(loading);
							getList(username,adminId,startTime,endTime,num,infoType,checkStatus,page);
						}
					});
					loadFn();
				}else{

				}	        
	        }
	    })
	}

	

	//质检审核操作接口
	function checkStatusChange(adminLogId,checkRs,obj){
		$.ajax({
	        url:'/New/UGC/checkStatusChange',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	adminLogId:adminLogId,
	        	checkRs:checkRs
	        },
	        success:function(data){
				if(data.code == '200'){
					obj.parent().parent().parent().css('background','#ccc');
					$('.numCgdialog .smcontent p').html('处理操作成功');
					$('.numCgdialog').fadeIn('normal');
					setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// 备注接口
	function remark(id,remark,obj){
		$.ajax({
	        url:'/New/AdminerReview/changeRemark ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id,
	        	remark:remark
	        },
	        success:function(data){
				if(data.code == '200'){
					// obj.parent().parent().css('background','#ccc');
					// $('.numCgdialog .smcontent p').html('处理操作成功');
					// $('.remarkdialog').fadeOut('normal');
					// setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// loadFn();
	$('#remarkTxt').on('focus',function(){
		$('.remarkMsg').html('');
	})
	function loadFn(){
		// 备注
		$('.remark').on('change',function(){
			// $('.remarkdialog').fadeIn('normal');
			var that = $(this);
			// $('#remarkTxt').val('');
			var id = $(this).parent().parent().attr('val');
			var replyContent = $(this).val();
			remark(id,replyContent,that);
			
		})
		$('.checkSta').on('click',function(){
			var obj = $(this);
			var checkRs = $(this).val();
			var adminLogId = $(this).parent().parent().parent().attr('val');
			checkStatusChange(adminLogId,checkRs,obj);
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






