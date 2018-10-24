$(function(){
	$('.navbar-nav li.dropdown-fw').eq(17).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown19 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var currentAjax;
	var loading = '<tr id="loading"><td colspan="17"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	
	var account_like = '',
		mobile_like = '',
		startTime = '',
		endTime = '',
		page =1;
	// 置空时间
	$('.reset').on('click',function(){
		$('#searchDateRange').html('');
		
	})
	$('#reportrange1').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD HH:mm');
		var chartime2 = picker.endDate.format('YYYY-MM-DD HH:mm');
	 	$('#reportrange1 span').html(chartime1 + '至' + chartime2);
	});
    // 获取json对象长度
    function getJsonObjLength(jsonObj) {
         var Length = 0;
         for (var item in jsonObj) {
             Length++;
         }
         return Length;
     }
	//列表接口
	getList(account_like,mobile_like,startTime,endTime,page);
	// 点击搜索加载列表
	$('#search').on('click',function(){
		account_like = $('#sxh1').val();
		mobile_like = $('#sxh2').val();
		idtime = $('#reportrange1 span').html();//获取时间选择器的时间
		startTime = idtime.split("至")[0];
		endTime = $.trim(idtime.split("至")[1])
		$('#tbody').html(loading);
		page =1;
		getList(account_like,mobile_like,startTime,endTime,page);
		
	})
	
	
	function getList(account_like,mobile_like,startTime,endTime,pageNum){
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/AdminerReview/arList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	account_like:account_like,
	        	mobile_like:mobile_like,
	        	startTime:startTime,
	        	endTime:endTime,
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
					var len = getJsonObjLength(result);
					for(var i in result){
						// console.log(Number(result[i].ugcunmask)+Number(result[i].ugcmask));
						str += '<tr>';
						// if(result[i].account){
						// 	str += '<td>'+result[i].username+'</td>';
						// }else{
						// 	str +='<td></td>';
						// }
						str += '<td>'+result[i].username+'</td>';
						str += '<td>'+result[i].mobile+'</td>';
						// str += '<td></td>';
						str += '<td>'+result[i].lastLogin+'</td>';
						str += '<td>'+result[i].deal+'</td>';
						str += '<td>'+result[i].mask+'</td>';
						str += '<td>'+result[i].sink+'</td>';
						str += '<td>'+result[i].lbreply+'</td>';
						str += '<td>'+result[i].unmask+'</td>';
						str += '<td>'+result[i].salvage+'</td>';
						str += '<td>'+result[i].ugcallow+'</td>';
						str += '<td>'+result[i].ugcmask+'</td>';
						str += '<td>'+Math.round(result[i].trueRate*10000)/100+'%</td>';
						str += '<td>'+result[i].ugcreply+'</td>';
						str += '<td>'+result[i].accountTag+'</td>';
						str += '<td>'+result[i].adminreview+'</td>';
						str += '<td>'+result[i].adopt+'</td>';
						str += '<td><a target="_blank" href="/view/report-qualityMass?name='+result[i].account+'&&admin='+result[i].id+'"><button class="btn btn-success">查看详情</button></a></td></tr>';
					}
					// $('.pageTest').empty();
					$('#tbody').html(str);
						Page({
							num:allPage,					//页码数
							startnum:page,				//指定页码
							elem:$('#page1'),		//指定的元素
							callback:function(n){	//回调函数
								page = n;
								window.scrollTo(0,0);
								$('#tbody').html(loading);
								// $('#currentPage').html(page);
								getList(account_like,mobile_like,startTime,endTime,page);
							}
						});
				}else{

				}	        
	        }
	    })
	}

})









