$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(17).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown19 ul.dropdown-menu-fw>li').eq(3).addClass("active").siblings().removeClass("active");
	$('.reset').on('click',function(){$('#searchDateRange').html('')})
	var allPage = null;
	
	var username ='',
		adminId = '',
		startTime ='',
		endTime ='',
		checknum ='',
		checkStatus ='',
		pageNum =1;
	// 标签
	var results = '';
	tagList();
	var rlens = results.length;

	var loading = '<tr id="loading"><td colspan="11"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	//页面初始时间设置
	var date=moment().subtract('days', 0).format('YYYY-MM-DD');
	$('#reportrange6 span').html(date + '至'+ date);
	$('#reportrange6').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD');
		var chartime2 = picker.endDate.format('YYYY-MM-DD');
	 	$('#reportrange6 span').html(chartime1 + '至' + chartime2);
	});
	var randomNum = Math.floor(Math.random()*100)+900;
	var journal = ['用户审核已处理','用户审核不通过（没有这个操作）','用户海底捞','用户沉底','用户屏蔽','用户解封','刘波回复','UGC解除屏蔽','UGC屏蔽','UGC评论屏蔽','UGC评论替换','UGC评论替换','UGC审核通过','UGC审核不通过'];


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
		checknum = $("#nums option:selected").val();
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		startTime = idtime.split("至")[0];
		endTime = $.trim(idtime.split("至")[1]);
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		infoType = $("input[type='radio'][name='radio1']:checked").val();
		checkStatus = $("input[type='radio'][name='radio5']:checked").val();
		$('#tagtbody').html(loading);
		$('.pageTest').empty();
		getList(username,adminId,startTime,endTime,checknum,checkStatus,1);
		
		
	})
	dateEnd = date + ' 23:59:59';
	// var date = '2018-07-02';
	// var dateEnd = '2018-07-31 23:59:59';
    getList('','',date,dateEnd,'',3,1);
	
	function getList(username,adminId,startTime,endTime,checknum,checkStatus,page){
		$.ajax({
	        url:'/New/UGC/qaList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	adminId:adminId,//昵称模糊
	        	startTime:startTime,//开始时间
	        	endTime:endTime,//结束时间
	        	num:checknum,//抽样数
	        	infoType:3,//类别
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
					// $("#allUser").html(dataD.total_num);
					// $('#pageNum').html("50");
					// $('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					$('#tagtbody').empty();
					// $('.pageTest').empty();
					if(len>0){
					console.log(len);
						for(var i = 0; i < len;i++){
							if(result[i].ugcinfo.length =='0' && result[i].uinfo.length =='0'){
								str += '';
							}else{

								str += '<tr class="tr" val="'+result[i].adminLogId+'">';
								str += '<td>'+result[i].username+'</td>';
								str += '<td><a target="_blank" href="/view/user-userMsg?accountId='+result[i].uinfo.id+'">'+result[i].uinfo.id+'</a></td>';
								str += '<td>'+result[i].uinfo.nickname+'</td><td>';
									for(var j = 0;j<result[i].uinfo.covers.length;j++){
										str +='<a class="fancybox'+randomNum+'" href="'+result[i].uinfo.covers[j]+'"data-fancybox-group="gallery" title="">';
										str +='<img style="" src="'+result[i].uinfo.covers[j]+'@w_120,q_60" alt="" /></a>';
									}
								str += '</td>';
								str += '<td>'+result[i].uinfo.sign+'</td>';
								var idslen = result[i].tagIds.length;
								if(idslen>0){
									str += '<td class="userTag">';
									for(var j = 0;j<idslen;j++){
										var onum = result[i].tagIds[j];
										var num = Math.abs(onum-rlens);
										str += '<span>'+results[num].tagName+'</span>|';
									}
									str += '</td>';
								}else{
									str +='<td class="userTag"></td>';
								}
								
								str += '<td>'+result[i].createTime+'</td>';
								
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
								str += '<td><input type="text" class="remark" style="text-align:center;width:90%;" value="'+result[i].remark+'" /></td>';
								// str += '<td><a href="/view/user-userjournal?accountId='+result[i].uinfo.id+'" target="_blank"><button class="btn btn-success seejournal">用户修改日志</button></a></td>'
								str += '</tr>';
							}
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "11">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					
					$('#tagtbody').html(str);
					Page({
						num:allPage,					//页码数
						startnum:page,				//指定页码
						elem:$('#tagpage1'),		//指定的元素
						callback:function(n){	//回调函数
							page = n;
							window.scrollTo(0,0);
							$('#currentPage').html(page);
							$('#tagtbody').html(loading);
							getList(username,adminId,startTime,endTime,checknum,checkStatus,page);
						}
					});
					loadFn();
				}else{

				}	        
	        }
	    })
	}
	// 用户标签列表
	function tagList(){
		$.ajax({
	        url:'/New/AccountTag/accountTagList',
	        type:"POST",
	        dataType:"json",
	        async: false,
	        data:{
	        	
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		return results = data.data;
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






