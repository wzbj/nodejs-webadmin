$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
	$('.navbar-nav li.dropdown-fw').eq(12).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown15 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var nowPage = null;
	var page = 1;
	var currentAjax;
	var loading = '<tr id="loading"><td colspan="17"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
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
	// 置空时间
	$('.reset').on('click',function(){
		$('#searchDateRange').html('');
		deleteCookie("startTime");
        deleteCookie("endTime");
	})
	//点击修改内容变为输入框
	function cg(obj){
	   var o=obj.previousSibling;
	   if(o.childNodes[0].value) {
	     o.innerHTML =  o.childNodes[0].value;
	  }else{
	    o.innerHTML="<input type='text' value='"+o.innerHTML+"' />";
	  }
	}
	// deleteCookie('test')
// addCookie('test','hhaa',1);
	$('#sxh1').val(getCookie('sxh1'));
	$('#sxh2').val(getCookie('sxh2'));
	$('#sxh3').val(getCookie('sxh3'));
	$('#sxh5').val(getCookie('accountUuid'));
	if(getCookie('startTime')){
		var allTime = getCookie('startTime') + '至' + getCookie('endTime');
	}
	$('#searchDateRange').html(allTime);
	$('#'+getCookie("highQualityId")+'').prop('checked',true);
	$('#'+getCookie("genderId")+'').prop('checked',true);
	$('#'+getCookie("hotId")+'').prop('checked',true);
	$('#'+getCookie("osId")+'').prop('checked',true);
	$('#'+getCookie("numTypeId")+'').prop('checked',true);
	$('#'+getCookie("maskId")+'').prop('checked',true);
	$('#'+getCookie("verifyStatusId")+'').prop('checked',true);
	$('#'+getCookie("orderId")+'').prop('checked',true);
	$('#'+getCookie("statusId")+'').prop('checked',true);
	$('#'+getCookie("foulTypeId")+'').prop('checked',true);



// console.log('hahhah'+getCookie('endTime'));
// $("input[type='radio'][name='radio0'][value='1']").porp('checked',true);
	// 标签
	var results = '';
	tagList();
	var rlens = results.length;
	// console.log(rlens);
	var num = Math.abs(6-rlens)
	// console.log(results[num].tagName);
	
	//列表接口
	var strtime2 = ' 23:59:59';
	var sxh1 = $('#sxh1').val();
	var sxh2 = $('#sxh2').val();
	var sxh3;
	if($('#sxh3').val()!=''){
		sxh3 = $('#areacode').val() + $('#sxh3').val();
	}else{
		sxh3 = '';
	}
	// var sxh3 = $('#sxh3').val();
	// var sxh4 = $('#sxh4').val();
	var accountUuid = $('#sxh5').val();
	var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
	if(idtime){
		var startTime = idtime.split("至")[0];
		var endTime = $.trim(idtime.split("至")[1]);
		var endTime0 = idtime.split("至")[1];
		addCookie("startTime", startTime, 1);
		addCookie("endTime", endTime0, 1);
	}else{
		addCookie("startTime", '', 1);
		addCookie("endTime", '', 1);
	}
	if(!endTime){
		endTime ='';
	}else{
		endTime = endTime + strtime2;
	}
	var highQuality = $("input[type='radio'][name='radio0']:checked").val() 
	var gender = $("input[type='radio'][name='radio1']:checked").val();
	var hot = $("input[type='radio'][name='radio2']:checked").val();
	var os = $("input[type='radio'][name='radio3']:checked").val();
	var numType = $("input[type='radio'][name='radio4']:checked").val();
	var mask = $("input[type='radio'][name='radio5']:checked").val();
	var verifyStatus = $("input[type='radio'][name='radio6']:checked").val();
	var order = $("input[type='radio'][name='radio7']:checked").val();
	var status = $("input[type='radio'][name='radio8']:checked").val();
	var foulType = $("input[type='radio'][name='radio9']:checked").val();
	var type = $("input[type='radio'][name='radio10']:checked").val();
	getList(sxh1,sxh2,sxh3,startTime,endTime,gender,hot,os,numType,mask,verifyStatus,order,status,foulType,accountUuid,highQuality,type,page);
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
				getList(sxh1,sxh2,sxh3,startTime,endTime,gender,hot,os,numType,mask,verifyStatus,order,status,foulType,accountUuid,highQuality,type,page);
			}
		});
	},3000)

	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		var sxh1 = $('#sxh1').val();
		var sxh2 = $('#sxh2').val();
		// var sxh3 = $('#sxh3').val();
		var sxh3;
		if($('#sxh3').val()!=''){
			sxh3 = $('#areacode').val() + $('#sxh3').val();
		}else{
			sxh3 = '';
		}
		// var sxh4 = $('#sxh4').val();
		var accountUuid = $('#sxh5').val();
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		if(idtime){
			var startTime = idtime.split("至")[0];
			var endTime = $.trim(idtime.split("至")[1]);
			var endTime0 = idtime.split("至")[1];
			addCookie("startTime", startTime, 1);
			addCookie("endTime", endTime0, 1);
		}else{
			addCookie("startTime", '', 1);
			addCookie("endTime", '', 1);
		}
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		var highQuality = $("input[type='radio'][name='radio0']:checked").val() 
		var gender = $("input[type='radio'][name='radio1']:checked").val();
		var hot = $("input[type='radio'][name='radio2']:checked").val();
		var os = $("input[type='radio'][name='radio3']:checked").val();
		var numType = $("input[type='radio'][name='radio4']:checked").val();
		var mask = $("input[type='radio'][name='radio5']:checked").val();
		var verifyStatus = $("input[type='radio'][name='radio6']:checked").val();
		var order = $("input[type='radio'][name='radio7']:checked").val();
		var status = $("input[type='radio'][name='radio8']:checked").val();
		var foulType = $("input[type='radio'][name='radio9']:checked").val();
		var type = $("input[type='radio'][name='radio10']:checked").val();
		// var highQualityId = $("input[type='radio'][name='radio0']:checked").attr('id'); 
		// var genderId = $("input[type='radio'][name='radio1']:checked").attr('id');
		// var hotId = $("input[type='radio'][name='radio2']:checked").attr('id');
		// var osId = $("input[type='radio'][name='radio3']:checked").attr('id');
		// var numTypeId = $("input[type='radio'][name='radio4']:checked").attr('id');
		// var maskId = $("input[type='radio'][name='radio5']:checked").attr('id');
		// var verifyStatusId = $("input[type='radio'][name='radio6']:checked").attr('id');
		// var orderId = $("input[type='radio'][name='radio7']:checked").attr('id');
		// var statusId = $("input[type='radio'][name='radio8']:checked").attr('id');
		// var foulTypeId = $("input[type='radio'][name='radio9']:checked").attr('id');
		// var type = $("input[type='radio'][name='radio10']:checked").attr('id');
		getList(sxh1,sxh2,sxh3,startTime,endTime,gender,hot,os,numType,mask,verifyStatus,order,status,foulType,accountUuid,highQuality,type,page);
		window.scrollTo(0,0);
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
					getList(sxh1,sxh2,sxh3,startTime,endTime,gender,hot,os,numType,mask,verifyStatus,order,status,foulType,accountUuid,highQuality,type,page);
				}
			});
		},3000)
	})



	// var test = JSON.parse(localStorage.getItem("resultData"));
	// console.log(test[0].articleId);
	//鼠标滑过图片图片放大
	$("td a img").hover(function(){
		$(this).css({"transform":"scale(2)","z-index":"99"}).siblings().css("z-index","0");
	},function(){
		$(this).css({"transform":"scale(1)","z-index":"0"});
	})

	// 点击搜索加载列表
	var strtime2 = ' 23:59:59';
	$('#search,.selectRadio').on('click',function(){
		page = 1;
		var sxh1 = $('#sxh1').val();
		var sxh2 = $('#sxh2').val();
		// var sxh3 = $('#sxh3').val();
		var sxh3;
		if($('#sxh3').val()!=''){
			sxh3 = $('#areacode').val() + $('#sxh3').val();
		}else{
			sxh3 = '';
		}
		// var sxh4 = $('#sxh4').val();
		var accountUuid = $('#sxh5').val();
		var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		if(idtime){
			var startTime = idtime.split("至")[0];
			var endTime = $.trim(idtime.split("至")[1]);
			var endTime0 = idtime.split("至")[1];
			addCookie("startTime", startTime, 1);
			addCookie("endTime", endTime0, 1);
		}else{
			addCookie("startTime", '', 1);
			addCookie("endTime", '', 1);
		}
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		var highQuality = $("input[type='radio'][name='radio0']:checked").val() 
		var gender = $("input[type='radio'][name='radio1']:checked").val();
		var hot = $("input[type='radio'][name='radio2']:checked").val();
		var os = $("input[type='radio'][name='radio3']:checked").val();
		var numType = $("input[type='radio'][name='radio4']:checked").val();
		var mask = $("input[type='radio'][name='radio5']:checked").val();
		var verifyStatus = $("input[type='radio'][name='radio6']:checked").val();
		var order = $("input[type='radio'][name='radio7']:checked").val();
		var status = $("input[type='radio'][name='radio8']:checked").val();
		var foulType = $("input[type='radio'][name='radio9']:checked").val();
		var type = $("input[type='radio'][name='radio10']:checked").val();
		var highQualityId = $("input[type='radio'][name='radio0']:checked").attr('id'); 
		var genderId = $("input[type='radio'][name='radio1']:checked").attr('id');
		var hotId = $("input[type='radio'][name='radio2']:checked").attr('id');
		var osId = $("input[type='radio'][name='radio3']:checked").attr('id');
		var numTypeId = $("input[type='radio'][name='radio4']:checked").attr('id');
		var maskId = $("input[type='radio'][name='radio5']:checked").attr('id');
		var verifyStatusId = $("input[type='radio'][name='radio6']:checked").attr('id');
		var orderId = $("input[type='radio'][name='radio7']:checked").attr('id');
		var statusId = $("input[type='radio'][name='radio8']:checked").attr('id');
		var foulTypeId = $("input[type='radio'][name='radio9']:checked").attr('id');
		var typeId = $("input[type='radio'][name='radio10']:checked").attr('id');
		// console.log(type);
		addCookie("sxh1", sxh1, 1);
		addCookie("sxh2", sxh2, 1);
		addCookie("sxh3", $('#sxh3').val(), 1);
		addCookie("uuid", accountUuid, 1);
		
		addCookie("highQualityId", highQualityId, 1);
		addCookie("genderId", genderId, 1);
		addCookie("hotId", hotId, 1);
		addCookie("osId", osId, 1);
		addCookie("numTypeId", numTypeId, 1);
		addCookie("maskId", maskId, 1);
		addCookie("verifyStatusId", verifyStatusId, 1);
		addCookie("orderId", orderId, 1);
		addCookie("statusId", statusId, 1);
		addCookie("foulTypeId", foulTypeId, 1);
		addCookie("type", typeId, 1);
		// getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,1);
		$('#tbody').html(loading);
		// $('.pageTest').empty();
		console.log(gender);
		getList(sxh1,sxh2,sxh3,startTime,endTime,gender,hot,os,numType,mask,verifyStatus,order,status,foulType,accountUuid,highQuality,type,page);
		
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
					getList(sxh1,sxh2,sxh3,startTime,endTime,gender,hot,os,numType,mask,verifyStatus,order,status,foulType,accountUuid,highQuality,type,page);
				}
			});
		},3000)
		
	})
	
	
    
	function getList(nickname_like,accountId,mobile,startTime,endTime,gender,hot,os,numType,mask,verifyStatus,order,status,foulType,accountUuid,highQuality,type,pageNum){

		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/UGC/UGCList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	nickname_like:nickname_like,//昵称模糊
	        	accountId:accountId,//id搜索
	        	mobile:mobile,//手机
	        	startTime:startTime,//开始时间
	        	endTime:endTime,//结束时间
	        	gender:gender,//性别
	        	hot:hot,//是否热门
	        	os:os,//操作系统
	        	numType:numType,//号码筛选
	        	mask:mask,//屏蔽筛选1已屏蔽2未屏蔽
	        	verifyStatus:verifyStatus,//审核状态筛选筛选
	        	order:order,//条件筛选
	        	status:status,//状态筛选
	        	foulType:foulType,//违规筛选
	        	accountUuid:accountUuid,
	        	highQuality:highQuality,
	        	type:type,
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
					// var resultData =  JSON.stringify(result);
					// localStorage.setItem("resultData", resultData);
					var len = result.length;
					$('#all').prop('checked',false);
					$('#tbody').empty();
					// $('.pageTest').empty();
					// console.log("test"+result[0].tagIds[0]);
					// console.log("test"+result[0].tagIds[1]);
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr class="sb tr'+result[i].articleId+' sb'+i+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].articleId+'" /></td>';
							str += '<td><a href="/view/ugc-ugcMsg?artId='+result[i].articleId+'" target="_blank">'+result[i].articleId+'</a></td>';
							if(result[i].os == '1'){
								str +='<td>Ios</td>';
							}else if(result[i].os == '2'){
								str +='<td>Android</td>';
							}else{
								str +='<td>未知</td>';
							}
							str += '<td class="telNum" value="'+result[i].account+'"><a href="/view/user-userMsg?accountId='+result[i].accountId+'" target="_blank">'+result[i].accountId+'</a></td>';
							str += '<td>'+result[i].nickname+'</td>';
							str += '<td>'+result[i].account+'</td>';
							if(result[i].gender == '1'){
								str +='<td>男</td><td>';
							}else if(result[i].gender == '2'){
								str +='<td>女</td><td>';
							}else{
								str +='<td>未知</td><td>';
							}
							if(result[i].type == '2'){
								for(var j = 0;j<result[i].resourcesLists.length;j++){
									str +='<a class="fancybox'+randomNum+'" href="'+result[i].resourcesLists[j].url+'"data-fancybox-group="gallery" title="">';
									str +='<img style="width:80px;" src="'+result[i].resourcesLists[j].url+'?imageView2/1/w/100/h/100" alt="" /></a>';
								}
							}else if(result[i].type=='3'){
								for(var j=0;j<result[i].videoLists.length;j++){
									str +='<a style="position:relative;"><video width="80" height="80" style="float: left;" src="'+result[i].videoLists[j].url+'" ></video>';
									str +='<img class="controlIcon" style="position:absolute;top:50%;left:50%;width:20px;height:20px;margin-left:-10px!important;margin-top:-10px!important;" src="/public/img/common/timg.png" /></a>';
								}
							}
							var indexNum = result[i].txtContent.indexOf('???????');
							if(indexNum>=0){
								str += '</td><td>'+result[i].txtContent.substr(0,indexNum)+'</td>';
							}else{
								str += '</td><td>'+result[i].txtContent+'</td>';
							}
							var idslen = result[i].tagIds.length;
							if(idslen>0){
								str += '<td>';
								for(var j = 0;j<idslen;j++){
									var onum = result[i].tagIds[j];
									var num = Math.abs(onum-rlens);
									str += '<span>'+results[num].tagName+'</span>|';
								}
								str += '</td>';
							}else{
								str +='<td></td>';
							}
							str += '<td>'+result[i].createTime+'</td>';
							str += '<td><input type="text" class="lSort" style="text-align:center;width:90%;" value="'+result[i].artOrder+'" /></td>';
							str += '<td>'+result[i].totalSupports+'</td>';
							str += '<td class="replyNum" style="color:red;">'+result[i].replyNum+'</td>';
							str += '<td><input type="text" class="lThumb" style="text-align:center;width:90%;" value="'+result[i].fakeSupportCount+'" /></td><td>';
							if(result[i].verifyStatus == '1'){
								str += '<p class="examineStatus">未审核</p>';
							}else if(result[i].verifyStatus == '2'){
								str += '<p class="examineStatus">已审核</p>';
							}
							if(result[i].status == '1'){
								str += '<p class="articleStaue">正常</p>';
							}else if(result[i].status == '2'){
								str += '<p class="articleStaue">主人删除</p>';
							}else if(result[i].status == '3'){
								str += '<p class="articleStaue">管理员删除</p>';
							}else if(result[i].status == '4'){
								str += '<p class="articleStaue">鉴黄删除</p>';
							}
							if(result[i].hotTime == '0'){
								str += '<p class="hotStaue">非热门</p>';
							}else{
								str += '<p class="hotStaue">热门</p>';
							}
							// str += '</td><td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap">';
							str +='<td>';
							if(result[i].verifyStatus == '1'&& result[i].status != '2'){
								// 未审核
								str +='<button class="btn btn-success idopt">通过</button>';
								
							}else if(result[i].verifyStatus == '2'){
								// 已审核
								str +='<button class="btn btn-success idopt" style="display:none;">通过</button>';
								
							}
							str += '<button class="btn btn-warning tags" ids="'+result[i].tagIds+'">标签</button>';
							str += '<button class="btn btn-warning comments">评论</button>';
							if(result[i].status == '1'){//正常
								str +='<button class="btn btn-danger shields">屏蔽</button>';
								str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
								str += '<button class="btn btn-warning pick">pick</button>';
								str += '<button class="btn btn-warning recommend">推荐</button>';
							}else if(result[i].status == '2'){//主人删
								str += '';
							}else if(result[i].status == '3' || result[i].status == '4'){
								str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
								str +='<button class="btn btn-success relieve">解封</button>';
							}
							if(result[i].hotTime == '0'){
								str +='<button class="btn btn-info upperHot">上热门</button>';
								str +='<button class="btn btn-info lowerHot" style="display:none;">下热门</button>';
							}else{
								// str +='<button class="btn btn-info upperHot" style="display:none;">上热门</button>';
								str +='<button class="btn btn-info upperHot">上热门</button>';
								str +='<button class="btn btn-info lowerHot">下热门</button>';
							}
							str +='<a href="/view/user-journalList?type=2?id='+result[i].articleId+'"  target="_blank"><button class="btn btn-primary journal">查看日志</button></a>';
							str +='<a href="/view/ugc-ugcMsg?artId='+result[i].articleId+'"  target="_blank"><button class="btn btn-primary seedetails">查看详情</button></a>';
							str +='</td></tr>';
						}
						$('.pageTest').css('display','block');
						// setTimeout(function(){
							
						// },7000)
					}else{
						str = '<tr><td colSpan = "17">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}

					$('#tbody').html(str);
					if(gender=='1'){
						for(var k=0;k<len;k++){
							if(result[k].gender == '2'){
								$('.sb'+k+'').css('display','none');
							}else if(!result[k].gender){
								$('.sb'+k+'').css('display','none');
							}
						}
					}else if(gender=='2'){
						for(var k=0;k<len;k++){
							if(result[k].gender == '1'){
								$('.sb'+k+'').css('display','none');
							}else if(!result[k].gender){
								$('.sb'+k+'').css('display','none');
							}
						}
					}
					if(os=='2'){
						for(var k=0;k<len;k++){
							if(result[k].os == '1'){
								$('.sb'+k+'').css('display','none');
							}else if(!result[k].os){
								$('.sb'+k+'').css('display','none');
							}
						}
					}else if(os=='1'){
						for(var k=0;k<len;k++){
							if(result[k].os == '2'){
								$('.sb'+k+'').css('display','none');
							}else if(!result[k].os){
								$('.sb'+k+'').css('display','none');
							}
						}
					}
					
					// js_file();
					loadFn();
				}else{

				}	        
	        }
	    })
	}

	// 选中手工点赞
	$('#thumbs').on('click',function(){
		$('#thumbNum').val('');
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			$('.thumbText').html('修改点赞数');
			$('.thumbdialog').fadeIn('normal');
			$('#thumbBtn').unbind('click').bind('click',function(){
				var fakeSupportCount = $('#thumbNum').val();
				ugcUpdate(xboxArr,xboxArrNew,'',fakeSupportCount,'','','','','');
			})
		}else{
			confirm("请至少选择一个用户");
		}
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
		    	ugcUpdate(xboxArr,xboxArrNew,'','','',3,'','','');
		    }
		}else{
			confirm("请至少选择一个用户");
		}
		
	})
	// 选中通过
	$('#idopt').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			var r=confirm("确认对选中的用户通过？");
			if(r==true){
		    	ugcUpdate(xboxArr,xboxArrNew,'','','','',2,'','');
		    }
		}else{
			confirm("请至少选择一个用户");
		}
		
	})

	// 置顶归零
	$('#returnZero').on('click',function(){
		var r=confirm("确认要置顶归零吗？");
		if(r==true){
			levelReset();
	    }
	})

	// ugc修改
	function ugcUpdate(xboxArr,id,level,fakeSupportCount,hot,status,verifyStatus,foulType,obj){
		$.ajax({
	        url:'/New/UGC/updateInfo',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id,
	        	level:level,//排序
	        	fakeSupportCount:fakeSupportCount,//文章人为点赞数
	        	hot:hot,//0下热门，1上热门
	        	status:status,
	        	verifyStatus:verifyStatus,//1待审核2审核通过
	        	foulType:foulType

	        },
	        success:function(data){
				if(data.code == '200'){
					// $('.shieldlog').fadeOut('normal');
					$('.thumbdialog').fadeOut('normal');
					var len = xboxArr.length;
					if(len < 1){
						if(level != ''){
							$('.numCgdialog .smcontent p').html('排序修改成功');
							$('.numCgdialog').fadeIn('normal');
							setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
						}else if(fakeSupportCount != ''){
							// $('.numCgdialog .smcontent p').html('点赞修改成功');
							// $('.numCgdialog').fadeIn('normal');
							// setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
						}else if(hot == '1'){
							obj.parent().parent().find('.hotStaue').html("热门");
							obj.parent().find('.lowerHot').css("display","block");
							// obj.parent().find('.upperHot').css("display","none");
							obj.parent().find('.upperHot').css("display","block");
						}else if(hot == '0'){
							obj.parent().parent().find('.hotStaue').html("非热门");
							obj.parent().find('.lowerHot').css("display","none");
							obj.parent().find('.upperHot').css("display","block");
						}else if(status == '3'){
							obj.parent().parent().css('background','#ccc');
							obj.parent().parent().find('.articleStaue').html("管理员删除");
							obj.parent().parent().find('.examineStatus').html("已审核");
							obj.parent().find('.shields').css("display","none");
							obj.parent().find('.relieve').css("display","block");
							obj.parent().find('.idopt').css("display","none");
						}else if(status == '1'){
							obj.parent().parent().find('.articleStaue').html("正常");
							obj.parent().parent().find('.examineStatus').html("已审核");
							obj.parent().find('.shields').css("display","block");
							obj.parent().find('.relieve').css("display","none");
							obj.parent().find('.idopt').css("display","none");
						}else if(verifyStatus == '2'){
							obj.parent().parent().css('background','#ccc');
							obj.parent().parent().find('.articleStaue').html("正常");
							obj.parent().parent().find('.examineStatus').html("已审核");
							obj.parent().find('.shields').css("display","block");
							obj.parent().find('.relieve').css("display","none");
							obj.parent().find('.idopt').css("display","none");
						}
					}else{
						for(var i = 0; i < len;i++){
							if(fakeSupportCount != ''){
								$('.tr'+xboxArr[i]+'').find('.lThumb').val(fakeSupportCount);
							}else if(status == '3'){
								$('.tr'+xboxArr[i]+'').find('.articleStaue').html("管理员删除");
								$('.tr'+xboxArr[i]+'').find('.examineStatus').html("已审核");
								$('.tr'+xboxArr[i]+'').find('.shields').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.relieve').css("display","block");
								$('.tr'+xboxArr[i]+'').find('.idopt').css("display","none");
							}else if(verifyStatus == '2'){//选中通过
								$('.tr'+xboxArr[i]+'').find('.articleStaue').html("正常");
								$('.tr'+xboxArr[i]+'').find('.examineStatus').html("已审核");
								$('.tr'+xboxArr[i]+'').find('.shields').css("display","block");
								$('.tr'+xboxArr[i]+'').find('.relieve').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.idopt').css("display","none");
							}
						}
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// ugc排序重置
	function levelReset(){
		$.ajax({
	        url:'/New/UGC/levelReset',
	        type:"POST",
	        dataType:"json",
	        data:{

	        },
	        success:function(data){
				if(data.code == '200'){
					// $('.shieldlog').fadeOut('normal');					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 评论
	function UGCRobot(artId,typeId,replyContent,gender,classnum){
		$.ajax({
	        url:'/New/Robot/artReply',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	artId:artId,
	        	typeId:typeId,
	        	replyContent:replyContent,
	        	gender:gender
	        },
	        success:function(data){
				if(data.code == '200'){
					// console.log(classnum);
					$('.robotdialog').fadeOut('normal');
					$('.tr'+classnum+'').find('td').eq(13).html(data.data);
					// console.log($('.tr'+classnum+''));
					// console.log(1111);
					// console.log(data.data);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	

	function UGCtag(artId,tagIds,arr,obj){
		$.ajax({
	        url:'/New/UGC/UGCtag',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	artId:artId,
	        	tagIds:tagIds
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.tagslog').fadeOut('normal');
					var idsLen = arr.length;
					var str ='';
					if(idsLen>0){
						for(var i=0;i<idsLen;i++){
							var onum = arr[i];
							var num = Math.abs(onum-rlens);
							str += '<span>'+results[num].tagName+'</span>|';
						}
						obj.attr('ids',arr);
						obj.parent().parent().find('td').eq(9).html(str);

					}					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	function UGCOrder(artId,artOrder){
		$.ajax({
	        url:'/New/UGC/UGCOrder',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	artId:artId,
	        	artOrder:artOrder
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.numCgdialog .smcontent p').html('强运维排序修改成功');
					$('.numCgdialog').fadeIn('normal');
					setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	function commentList(artId){
		$.ajax({
	        url:'/New/ArtReply/rplist',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	artId:artId,//昵称模糊
	        	pageNum:1,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var dataD = data.data;
					var result = dataD.result;
					var len = result.length;
					var comStr = '';
					$('.comentList').empty();
					if(len<=0){
						comStr = '暂时没有评论';
					}else if(len<6){
						for(var i=0;i<len;i++){
							comStr += '<p>'+result[i].replyContent+'</p>';
						}
					}else{
						for(var i=0;i<5;i++){
							comStr += '<p>'+result[i].replyContent+'</p>';
						}
					}
					$('.comentList').append(comStr);
					setTimeout(function(){$('.comCgdialog').fadeOut('normal');},1800);
				}else{

				}	        
	        }
	    })
	}
	function loadFn(){
		$('.replyNum').on('click',function(){
			var artId = $(this).parent().find('td').eq(1).html();
			$('.comentList').empty();
			commentList(artId);
			$('.comCgdialog').fadeIn('normal');
		})
		
		// 评论
		$('.comments').on('click',function(){
			$('.robotdialog').fadeIn('normal');
			$('.commentMsg').html('');
			$('.commentCont').val('');
			var classnum = $(this).parent().parent().find('td').eq(1).html();
			// console.log(classnum);
			// $('#idList label input:checkbox').prop("checked",false);
			// $("#idList .md-radio input[type='radio']:checked").prop("checked",false);
			var artId = $(this).parent().parent().find('input').eq(0).attr('value');
			ugcmodule.lastCommentType(artId)
			$('#randombtn').unbind('click').bind('click',function(){
				var typeId = $(".md-radio input[type='radio'][name='radio66']:checked").val();
				randomRobot(typeId);
			})
			$('#robotBtn').unbind('click').bind('click',function(){
				var typeId = $(".md-radio input[type='radio'][name='radio66']:checked").val();
				var replyContent = $('.commentCont').val();
				var gender = $(".md-radio input[type='radio'][name='radio69']:checked").val();
				// console.log(typeId);
				if(replyContent != ''){
					UGCRobot(artId,typeId,replyContent,gender,classnum);
				}else{
					$('.commentMsg').html('评论内容不能为空');
				}
				// UGCRobot(artId,typeId)
			})
		})
		// 打标签
		$('.tags').on('click',function(){
			// $('.inlineCheckbox').prop("checked",true);
			$('.tagslog').fadeIn('normal');
			$('.mt-checkbox input:checkbox').prop("checked",false);
			var flg = $(this).attr('ids')
			if(flg){
				console.log(11111);
				var ids = $(this).attr('ids').split(",");
				var idsLen = ids.length;
				if(idsLen > 0){
					for(var i=0; i<idsLen; i++){
						$('.inlineCheckbox'+ids[i]+'').prop("checked",true);
					}
				}
			}


			var artId = $(this).parent().parent().find('input').eq(0).attr('value');
			var obj = $(this);
			$('#checkBtn').unbind('click').bind('click',function(){
				var checkArr = [];
				 $.each($('.mt-checkbox input:checkbox'),function(){
		            if(this.checked){
		            	checkArr.push($(this).val());
		            }
		        });
				var checkArrNew = checkArr.join();
				UGCtag(artId,checkArrNew,checkArr,obj);
			})
		})
		// 列表中改变排序
		$('.lSort').on('change',function(){
			var id = $(this).parent().parent().find('input').eq(0).attr('value');
			var level = $(this).val();
			// var that = $(this);
			UGCOrder(id,level)
			// ugcUpdate('',id,level,'','','','','',that);
		})
		// 列表中点赞数排序
		$('.lThumb').on('change',function(){
			var id = $(this).parent().parent().find('input').eq(0).attr('value');
			var fakeSupportCount = $(this).val();
			var that = $(this);
			ugcUpdate('',id,'',fakeSupportCount,'','','','',that);
		})
		
		// 上热门
		$('.upperHot').on('click',function(){
			var r=confirm("确认要上热门吗？");
			var id = $(this).parent().parent().find('input').attr('value');
			var that = $(this);
			if(r==true){
		    	ugcUpdate('',id,'','',1,'','','',that);
		    }
		})

		$('.lowerHot').on('click',function(){
			var id = $(this).parent().parent().find('input').attr('value');
			var r=confirm("确认要下热门吗？");
			var that = $(this);
			if(r==true){
		    	ugcUpdate('',id,'','',0,'','','',that);
		    }
		})
		// 屏蔽
		$('.shields').on('click',function(){
			var id = $(this).parent().parent().find('input').eq(0).attr('value');
			// var r=confirm("确认要屏蔽吗？");
			var that = $(this);
			// if(r==true){
		    	ugcUpdate('',id,'','','',3,'','',that)
		    // }
		})
		// pick
		$('.pick').on('click',function(){
			var id = $(this).parent().parent().find('input').eq(0).attr('value');
			var obj = $(this);
			var r=confirm("确认要pick吗？");
			if(r==true){
		    	mixed(id,3,obj);
		    }
		})
		// 推荐
		$('.recommend').on('click',function(){
			var id = $(this).parent().parent().find('input').eq(0).attr('value');
			var obj = $(this);
			var r=confirm("确认要推荐吗？");
			if(r==true){
		    	mixed(id,4,obj);
		    }
		})

		// 通过
		$('.idopt').on('click',function(){
			var id = $(this).parent().parent().find('input').eq(0).attr('value');
			// var r=confirm("确认要通过审核吗？");
			var that = $(this);
			// if(r==true){
		    	ugcUpdate('',id,'','','','',2,'',that)
		    // }
		})
		// 解封
		$('.relieve').on('click',function(){
			var id = $(this).parent().parent().find('input').eq(0).attr('value');
			var r=confirm("确认要解封吗？");
			var that = $(this);
			if(r==true){
		    	ugcUpdate('',id,'','','',1,'','',that)
		    }
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
	// 评论
		robotList();
		function robotList(){
			$.ajax({
		        url:'/New/ListShow/robot_reply_type_list',
		        type:"POST",
		        dataType:"json",
		        async: true,
		        data:{
		        	
		        },
		        success:function(data){
		        	if(data.code == '200'){
		        		var dataD = data.data;
		        		var len = dataD.result.length;
		        		var result = dataD.result;
		        		var str ='';
		        		for(var i=0;i<len;i++){
		        			str += '<div class="md-radio">';
		        			str += '<input type="radio" id="checkbox66_'+result[i].id+'" name="radio66" value="'+result[i].id+'" class="md-radiobtn">';
		        			str += '<label for="checkbox66_'+result[i].id+'">';
		        			str += '<span></span><span class="check"></span>';
		        			str += '<span class="box"></span>'+result[i].content+'</label></div>';
		        		}
		        		// console.log(str);
		        		$('#idList div').empty();
		        		$('#idList div').html(str);
		        	}
		        }
	        })
		}
	//标签
	function tagList(){
		$.ajax({
	        url:'/New/ListShow/tag_list',
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
	var newPid = [];
	var blackPid = [];
	
	var tagStr = '';
	for(var i=rlens-1;i>=0;i--){
		if(results[i].pid == '0'){
			newPid.push(results[i].id);
		}
	}
	var tagLen = newPid.length;
	for(var i =tagLen-1;i>=0;i--){
		blackPid.push(newPid[i]);
	}
	for(var i=0;i<tagLen;i++){
		var num = newPid[i];
		var snum = blackPid[i];
		var typenum = Math.abs(snum -rlens);
		tagStr += '<div class="form-group">';
		tagStr += '<label class="control-label col-lg-2 col-md-2 col-sm-2 col-xs-2">'+results[typenum].tagName+':</label>';
		tagStr += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">';
		for(var j=0;j<rlens;j++){
			if(results[j].pid == snum){
				tagStr += '<label style="min-width:76px;" class="mt-checkbox">';
				tagStr += '<input type="checkbox" class="inlineCheckbox inlineCheckbox'+results[j].id+'" value="'+results[j].id+'">'+results[j].tagName+'<span></span></label>';
			}
		}
		tagStr += '</div></div>';
	}
	$('#tagList').html(tagStr);

	//随机评论

	function randomRobot(typeId){
		$.ajax({
	        url:'/New/Robot/randomReply',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	typeId:typeId 
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		var msg = data.data;
	        		$('.commentCont').val(msg);
	        	}
	        }
        })
	}

	function mixed(accountId,type,obj){
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
					obj.parent().parent().css('background','#ccc');
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}



})






