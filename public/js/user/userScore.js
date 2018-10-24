$(function(){
	var allPage = null;
	var sxh3 ='';
	var page =1;
	var loading = '<tr id="loading"><td colspan="11"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var TIME;//定义全局变量
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

	var randomNum = Math.floor(Math.random()*780);
	//列表接口
	getList(sxh3,page);

	// 点击搜索加载列表
	$("#search,.selectRadio").click(function(){
		if($('#sxh3').val()!=''){
			sxh3 = $('#areacode').val() + $('#sxh3').val();
		}else{
			sxh3 = '';
		}
		page =1;
		$('#tbodyS').html(loading);
		getList(sxh3,page);
	})
	// 刷新(搜索需从第一页开始)
	$(".refresh").click(function(){
		// var type = $("input[type='radio'][name='radio2']:checked").val();
		$('#tbodyS').html(loading);
		getList(sxh3,page);
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
 
	function getList(phone_number,pageNum){
		// var str = '';
		// $('#loading').ajaxStart(function(){
	 //    	$(this).show();
	 //    }),	
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:conf.host+'/New/Account/userRank',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	phone_number:phone_number,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        beforeSend:function(){
	        	// var str = '<tr><td colspan="10"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td><tr>';
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
							str += '<tr>';
							if(result[i].uinfo.length == '0'){
								str +='<td></td><td></td><td></td><td></td>';
							}else{
								str +='<td><a href="/view/user-userMsg?accountId='+result[i].uinfo.id+'" target="_blank">'+result[i].uinfo.id+'</a></td>';
								str +='<td>'+result[i].uinfo.nickname+'</td>';
								str +='<td>'+result[i].uinfo.account+'</td><td>';
								for(var j = 0;j<result[i].uinfo.covers.length;j++){
									str +='<a class="fancybox'+randomNum+'" href="'+result[i].uinfo.covers[j]+'"data-fancybox-group="gallery" title="">';
									str +='<img style="" src="'+result[i].uinfo.covers[j]+'@w_120,q_60" alt="" /></a>';
								}
								str += '</td>';
							}
							str += '<td>'+result[i].total+'</td>';
							str += '<td>'+result[i].friends+'</td>';
							str += '<td>'+result[i].recv_like+'</td>';
							str += '<td>'+result[i].send_like+'</td>';
							str += '<td>'+result[i].cover+'</td>';
							str += '<td>'+result[i].new_user+'</td><td>';
							if(result[i].highFaceScore == '0'){
								str +='<button class="btn btn-info huyue">胡月</button>';
							}
							str += '</td></tr>'; 
						
						}
					}else{
						str = '<tr><td colSpan = "11">暂时没有数据</td></tr>';
					}
					$('#tbodyS').html(str);
					exHead();
					// placeLoad();
					Page({
						num:allPage,					//页码数
						startnum:page,				//指定页码
						elem:$('#page1'),		//指定的元素
						callback:function(n){	//回调函数
							page = n;
							window.scrollTo(0,0);
							$('#currentPage').html(page);
							$('#tbody').html(loading);
							getList(sxh3,page);
							
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
		// 胡月
		$('.huyue').on('click',function(){
			var accountId = $(this).parent().parent().find('td').eq(0).text();
			var obj = $(this);
			console.log(accountId);
			var r=confirm("确认对选中的用户胡月吗？");
			if(r==true){
		    	mixed(accountId,1,obj);
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

	// 胡月
	function mixed(accountId,type,obj){
		$.ajax({
	        url:conf.host+'/New/HQController/markAsHQ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	action:1,
	        	accountId:accountId,
	        	type:type
	        },
	        success:function(data){
				if(data.code == '200'){
					obj.remove();
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	

})









