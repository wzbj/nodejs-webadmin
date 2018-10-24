$(function(){
	var allPage = null;
	//页面初始时间设置
	// var date1=moment().subtract('days', 15).format('YYYY-MM-DD');
	// var date2=moment().subtract('days', 1).format('YYYY-MM-DD');
	// $('#reportrange3 span').html('');
	var loading = '<tr id="loading"><td colspan="16"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var TIME;//定义全局变量
	var type='',
		gender ='',
		city = '',
		page =1;
	var currentAjax;
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

	var randomNum = Math.floor(Math.random()*700);
	//列表接口
	getList(type,gender,city,page);

	// 点击搜索加载列表
	$("#search,.selectRadio").click(function(){
		type = $("input[type='radio'][name='radio2']:checked").val();
		gender = $("input[type='radio'][name='radio3']:checked").val();
		city = $("#cityList option:selected").val();
		page =1;
		$('#tbody').html(loading);
		getList(type,gender,city,page);
	})
	// 刷新(搜索需从第一页开始)
	$(".refresh").click(function(){
		// var type = $("input[type='radio'][name='radio2']:checked").val();
		$('#tbody').html(loading);
		getList(type,gender,city,page);
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
 
	function getList(type,gender,city,pageNum){
		// var str = '';
		// $('#loading').ajaxStart(function(){
	 //    	$(this).show();
	 //    }),	
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:conf.host+'/New/Account/highQuality',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	type:type,
	        	gender:gender,
	        	city:city,
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
					$("#allUser").html(dataD.total_num);
					$('#pageNum').html("50");
					$('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					// $('.pageTest').empty();
					if(len > 0){
						for(var i = 0; i < len;i++){
							str += '<tr class="tr'+result[i].id+'">';
							// str +='<td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';
							str += '<td>'+result[i].id+'</td>';
							str += '<td class="telNum" value="'+result[i].account+'">'+result[i].account+'</td>';
							str += '<td class="places"></td><td class="changeImg'+result[i].id+'">'
							// str += '<td>'+result[i].account+'</td><td>';
							for(var j = 0;j<result[i].covers.length;j++){
								str +='<a class="fancybox'+randomNum+'" href="'+result[i].covers[j]+'"data-fancybox-group="gallery" title="">';
								str +='<img style="" src="'+result[i].covers[j]+'@w_120,q_60" alt="" /></a>';
							}
							str += '</td><td>'+result[i].nickname+'</td>';
							if(result[i].gender == '1'){
								str +='<td>男</td>';
							}else if(result[i].gender == '2'){
								str +='<td>女</td>';
							}else{
								str +='<td>未知</td>';
							}
							str += '<td>'+result[i].city+'</td>';
							str += '<td>'+result[i].sign+'</td>';
							str += '<td>'+result[i].birthday+'</td>';
							str += '<td>'+result[i].lastActive+'</td>';
							str += '<td>'+result[i].createTime+'</td>';
							str += '<td>'+result[i].ip+'</td>';
							str += '<td class="aRemark">'+result[i].remark+'</td>';
							if(result[i].status == '0'){
								str +='<td class="userStau">屏蔽</td>';
							}else if(result[i].status == '1'){
								str +='<td class="userStau">正常</td>';
							}else if(result[i].status == '2'){
								str +='<td  class="userStau">沉底</td>';
							}
							if(result[i].os == '1'){
								str +='<td>Ios</td>';
							}else if(result[i].os == '2'){
								str +='<td>Android</td>';
							}
							str += '<td id="'+result[i].id+'">';
							str +='<a target="_blank" href="/view/user-userMsg?accountId='+result[i].id+'"><button class="btn btn-primary" style="display:block;">查看详情</button></a>';
							// str +='<a target="_blank" href="/account/ugcview/'++'"><button class="btn btn-success" style="display:block;margin-top:3px;">查看UGC</button>';
							if(result[i].highFaceScore == '1'){
								str +='<button class="btn btn-danger deleteFace" style="display:block;margin-top:3px;">删除高颜值</button>';
							}else{
								str +='';
							}
							if(result[i].highUgc == '1'){
								str +='<button class="btn btn-warning deleteCont" style="display:block;margin-top:3px;">删除高内容</button>';
							}else{
								str += '';
							}
							str+='</td></tr>';
						}
					}else{
						str = '<tr><td colSpan = "16">暂时没有数据</td></tr>';
					}
					$('#tbody').html(str);
					exHead();
					placeLoad();
					Page({
						num:allPage,					//页码数
						startnum:page,				//指定页码
						elem:$('#page1'),		//指定的元素
						callback:function(n){	//回调函数
							page = n;
							window.scrollTo(0,0);
							$('#currentPage').html(page);
							$('#tbody').html(loading);
							getList(type,gender,city,page);
							
						}
					});
					Page({
						num:allPage,					//页码数
						startnum:page,				//指定页码
						elem:$('#page2'),		//指定的元素
						callback:function(n){	//回调函数
							page = n;
							window.scrollTo(0,0);
							$('#currentPage').html(page);
							$('#tbody').html(loading);
							getList(type,gender,city,page);
							
						}
					});
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
				place(value,i);
			}

		},500)
	}
	/*
		以下是操作的相关方法
	*/
	
	function exHead(){
		$('.deleteFace').on('click',function(){
			var accountId = $(this).parent().attr('id');
			var that = $(this);
			var r=confirm("确认要删除该高颜值用户吗？");
			if(r==true){
		    	markAsHQ(accountId,2,1,that);
		    }
		})	
		$('.deleteCont').on('click',function(){
			var accountId = $(this).parent().attr('id');
			var that = $(this);
			var r=confirm("确认要删除该内容质量高的用户吗？");
			if(r==true){
		    	markAsHQ(accountId,2,2,that);
		    }
		})	
		$('.fancybox'+randomNum+'').fancybox({
		    'type':'image',
		    helpers:  {
		        
		    }
		});
	}
	// 优质标记和取消
	function markAsHQ(accountId,action,type,obj){
		$.ajax({
	        url:conf.host+'/New/HQController/markAsHQ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	action:action,
	        	type:type
	        },
	        success:function(data){
				if(data.code == '200'){
					if(type == '1'){
						obj.parent().find('.deleteFace').css('display','none');
					}else if(type == '2'){
						obj.parent().find('.deleteCont').css('display','none');
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// 城市列表加载
	setTimeout(function(){
		cityList(1);
	},1000)
	function cityList(pageNum){
    	$.ajax({
	        url:conf.host+'/New/Account/highQualityCityList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var typeLen = dataD.length;
					var str = '';
						str += '<option value="">城市选择</option>';
					for(var i =0;i<typeLen;i++){
						str +='<option value="'+dataD[i]+'">'+dataD[i]+'</option>';
					}	
					$('#cityList').empty();
					$('#cityList').html(str);
					
				}else{

				}	        
	        }
	    })
    }

})









