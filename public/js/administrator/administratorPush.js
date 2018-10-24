$(function(){
	$('.navbar-nav li.dropdown-fw').eq(4).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown5 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
    // var allPage = null;
	var randomNum = Math.floor(Math.random()*100)+400;
	var currentAjax;
	var loading = '<tr id="loading"><td colspan="12"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var startTime = '',
		endTime = '',
		gender = '',
		accountStatus = '',
		readStatus = '',
		mobile = '',
		page =1;
	var strtime2 = ' 23:59:59';

	// 话术模板展示
	$('#reportrange6').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD');
		var chartime2 = picker.endDate.format('YYYY-MM-DD');
	 	$('#reportrange6 span').html(chartime1 + '至' + chartime2);
	});
	typeList();
	//列表接口
	getList('','','','','','',page);
	
	// 屏蔽及沉底弹窗内容
	module.typeList();
	module.wordsList();
	module.sinkList();
	// 点击搜索加载列表
	$('#search,.selectRadio').on('click',function(){
		$('#page1').empty();
		$('#tbody').html('');
		$('#allPage').html('');
		
		page =1;
		gender = $("input[type='radio'][name='radio1']:checked").val();
		accountStatus = $("input[type='radio'][name='radio3']:checked").val();
		readStatus = $("input[type='radio'][name='radio2']:checked").val();
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		startTime = idtime.split("至")[0];
		endTime = idtime.split("至")[1];
		mobile = $('#sxh1').val();
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		$('#tbody').html(loading);
		// $('.pageTest').empty();
		getList(readStatus,accountStatus,gender,startTime,endTime,mobile,page);
		
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		var idtime = $('#reportrange6 span').html();
		getList(readStatus,accountStatus,gender,startTime,endTime,mobile,page);
	
	})

 
	function getList(readStatus,accountStatus,gender,startTime,endTime,mobile,pageNum){
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/Feedback/feedbackAccountList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	readStatus:readStatus,
	        	accountStatus:accountStatus,
	        	gender:gender,
	        	startTime:startTime,
	        	endTime:endTime,
	        	mobile:mobile,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
	        	
				if(data.code == '200'){
					var dataD = data.data;
					var str = '';
					allPage = Math.ceil((dataD.total_num)/50);
					$("#allUser").html(dataD.total_num);
					$('#pageNum').html("50");
					$('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr><td><input type="hidden" value="'+result[i].accountId+'">'+result[i].accountId+'</td>';
							str += '<td>'+result[i].nickname+'</td>';
							str += '<td class="telNum" value="'+result[i].account+'">'+result[i].account+'</td>';
							if(result[i].gender == '1'){
								str +='<td>男</td><td>';
							}else if(result[i].gender == '2'){
								str +='<td>女</td><td>';
							}else if(result[i].gender == '0'){
								str +='<td>未知</td><td>';
							}
							for(var j = 0;j<result[i].covers.length;j++){
								str +='<a class="fancybox'+randomNum+'" href="'+result[i].covers[j]+'"data-fancybox-group="gallery" title="">';
								str +='<img style="width:100px;" src="'+result[i].covers[j]+'@w_120,q_60" alt="" /></a>';
							}
							str +='</td><td>'+result[i].sign+'</td>';

							if(result[i].status == '0'){
								str +='<td>屏蔽</td>';
							}else if(result[i].status == '1'){
								str +='<td>正常</td>';
							}else if(result[i].status == '2'){
								str +='<td>沉底</td>';
							}
							str +='<td>'+result[i].remark+'</td>';
							if(result[i].readStatus == '1'){
								str +='<td>未读</td>';
							}else if(result[i].readStatus == '2'){
								str +='<td>已读</td>';
							}else{
								str +='<td></td>';
							}
							str +='<td style="color:red;">'+result[i].intent+'</td>';
							str +='<td>'+result[i].maxCreateTime+'</td>';
							// str += '<td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap">';
							str +='<td>';
								if(result[i].status == '0'){
									str +='<button class="btn btn-success relieve">解封</button>';
									str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
									str +='<button class="btn btn-danger sink">沉底</button>';
									str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
								}else if(result[i].status == '1'){
									str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
									str +='<button class="btn btn-danger shields">屏蔽</button>';
									str +='<button class="btn btn-danger sink">沉底</button>';
									str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
								}else if(result[i].status == '2'){
									str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
									str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
									str +='<button class="btn btn-danger sink" style="display:none;">沉底</button>';
									str +='<button class="btn btn-success fishing">海捞</button>';
								}
							if(result[i].readStatus == '1'){
								str +='<button class="btn btn-warning alread" value="'+result[i].accountId+'">已读</button>';
							}
							str +='<a href="/view/administrator-leaveMsgList?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-primary levMsg">查看留言</button></a>';
							str +='<a href="/view/user-journalList?type=1?id='+result[i].accountId+'" target="_blank"><button class="btn btn-primary journal">查看日志</button></a>';
							str +='<a href="/view/user-userMsg?accountId='+result[i].accountId+'" target="_blank"><button class="btn btn-primary details">查看留言用户</button></a>';
							// str +='<div class="sink">未读消息</div>';
							str +='</td></tr>';
						}
						// $('.pageTest').css('display','block');

						Page({
							num:allPage,					//页码数
							startnum:page,				//指定页码
							elem:$('#page1'),		//指定的元素
							callback:function(n){	//回调函数
								page = n;
								window.scrollTo(0,0);
								$('#tbody').html(loading);
								$('#currentPage').html(page);
								
								getList(readStatus,accountStatus,gender,startTime,endTime,mobile,page);
							}
						});
					}else{
						str = '<tr><td colSpan = "12">暂时没有数据</td></tr>';
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

	
	function typeList(){
		$.ajax({
	        url:'/New/Words/typeList',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var len = dataD.length;
					var str = '';
					$('#typeListTxt').empty();
					for(var i=0;i<len;i++){
						// str += '<option  value="'+dataD[i].id+'">'+dataD[i].name+'</option>';
						if(i==0){
							str += '<a href="/view/administrator-wordsTemp?typeId='+dataD[i].id+'&typeTxt='+dataD[i].name+'" target="_blank">'
							str +='<button type="button" class="btn" value="'+dataD[i].id+'" style="margin-top:5px;">'+dataD[i].name+'</button></a>';
							str +='<button style="margin-top:5px;" type="button" class="editType btn btn-warning" value="'+dataD[i].id+'" name="'+dataD[i].name+'">编辑</button>';
						}else{
							str += '<a href="/view/administrator-wordsTemp?typeId='+dataD[i].id+'&typeTxt='+dataD[i].name+'" target="_blank">'
							str +='<button type="button" class="btn" value="'+dataD[i].id+'" style="margin-left:10px;margin-top:5px;">'+dataD[i].name+'</button></a>';
							str +='<button style="margin-top:5px;" type="button" class="editType btn btn-warning" value="'+dataD[i].id+'" name="'+dataD[i].name+'">编辑</button>';
						}
					}
					$('#typeListTxt').append(str);
					loadType();
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}

	function loadType(){
		$('.editType').on('click',function(){
			var id = $(this).attr('value');
			var name = $(this).attr('name');
			$('.editdialog').fadeIn('normal');
			$('#typeEdit').val(name);
			$('#checkbox3_1').on('click',function(){$('#typeEdit').val(name);})
			$('#checkbox3_2').on('click',function(){$('#typeEdit').val('');})
			$('#typeEditBtn').unbind('click').bind('click',function(){
				var gone = $("input[type='radio'][name='radio6']:checked").val();
				var typename = $('#typeEdit').val();
				if(gone =='1'){
					typeEdit(typename,id)
				}else if(gone =='2'){
					delType('words_type',id,'');
				}
			})
		})
	}


	// 添加话术模板/New/Words/typeEdit
	$('#addWords').on('click',function(){
		$("#wordsTxt").val('');
		$('.wordsdialog').fadeIn('normal');
		$('#worksBtn').unbind('click').bind('click',function(){
			var name = $("#wordsTxt").val();
			typeEdit(name,'');
		})
	})

	function typeEdit(name,id){
		$.ajax({
	        url:'/New/Words/typeEdit',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	name:name,
	        	id:id
	        },
	        success:function(data){
				if(data.code == '200'){
					typeList();
					$('.wordsdialog').fadeOut('normal');
					$('.editdialog').fadeOut('normal');
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}
	function delType(table,id,obj){//海底捞
		$.ajax({
	        url:'/New/SAdmin/del/'+table+'/'+id+'',
	        type:"GET",
	        dataType:"json",
	        async: true,
	        data:{
	        	// table:table,
	        	// id:id
	        },
	        success:function(data){
				if(data.code == '200'){
					if(table == 'liubo_reply'){//刘波回复删除
						obj.parent().parent().remove();
					}else if(table == 'android_version'){//Android版本信息删除
						obj.parent().parent().remove();
					}else if(table == 'robot_reply'){//删除评论
						obj.parent().parent().remove();
					}else if(table == 'words'){//删除话术
						obj.parent().parent().remove();
					}else if(table == 'words_type'){
						$('.editdialog').fadeOut('normal');
						typeList();
					}else{
						obj.parent().parent().remove();
					}
				}else{
					
				}	        
	        }
	    })
		
	}

	
	function loadFn(){
		
		$('.alread').on('click',function(){
			var accountId = $(this).attr('value');
			var r=confirm("确认进行已读操作吗");
			var obj = $(this);
			if(r==true){
		    	alread(2,'',accountId,obj);
		    }
		})
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

	}

	// 已读接口
	function alread(readStatus,msgId,accountId,obj){
		$.ajax({
	        url:'/New/Feedback/readStatusChange',
	        type:'POST',
	        dataType:'json',
	        data:{
	        	readStatus:readStatus,
	        	msgId,msgId,
	        	accountId:accountId
	        },
	        success:function(data){
	            if( data &&  data.code == '200'){
		        	obj.parent().parent().find('td').eq(5).html('已读');
		        	obj.css('display','none');
	            }else{
	            	console.log(data.msg);
	            }
	        }
	    });
	
	}

	$('.fancybox'+randomNum+'').fancybox({
	    'type':'image',
	    helpers:  {
	        
	    }
	});

})