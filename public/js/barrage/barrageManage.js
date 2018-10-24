$(function(){
	$('.navbar-nav li.dropdown-fw').eq(5).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown2 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
    var lHref = document.location.href
    var loading = '<tr id="loading"><td colspan="4"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
    var keyword = '',
		senderId = '',
		masterId = '',
		page =1;

    if(lHref.indexOf('=') > 0){
    	var ls = document.location.href.split('=');
	    var accountId = ls[2];
	    var type = ls[1].split('&')[0];
	    if(type == '1'){
	    	barrageList('',accountId,'',page);
	    	setTimeout(function(){
	    		Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						barrageList('',accountId,'',page);
						// placeLoad();
					}
				});
				
			},3800)
	    	
	    }else if(type == '2'){
	    	barrageList('','',accountId,page);
	    	setTimeout(function(){
	    		Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						barrageList('','',accountId,page);
					}
				});
				
			},3800)
	    	
	    }
    }else{
    	barrageList('','','',page);
    	setTimeout(function(){
    		Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					barrageList('','','',page);
				}
			});
			
		},3000)
	    
    }
  
    $('#search').on('click',function(){
		var keyword = $('#sxh1').val();
   		var senderId = $('#sxh2').val();
   		var masterId = $('#sxh3').val();
   		page =1;
   		$('#tbody').html(loading);
		$('.pageTest').empty();
		barrageList(keyword,senderId,masterId,page);
		setTimeout(function(){
			Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					barrageList(keyword,senderId,masterId,page);
				}
			});
			
		},3000)
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		
   		$('#tbody').html(loading);
		$('.pageTest').empty();
		barrageList(keyword,senderId,masterId,page);
		setTimeout(function(){
			Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					barrageList(keyword,senderId,masterId,page);
				}
			});
			
		},3000)
		
	})
    
    function barrageList(keyword,senderId,masterId,pageNum){
    	$.ajax({
	        url:'/New/Bullet/blist',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	keyword:keyword,
	        	senderId:senderId,
	        	masterId:masterId,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var str = '';
					allPage = Math.ceil((dataD.total_num)/50);
					// console.log(allPage);
					var result = dataD.result;
					var len = result.length;
					if(len>0){
						for(var i = 0; i < len;i++){
							str +='<tr value="'+result[i].id+'">';
							if(result[i].anonymous == '1'){
								str +='<td>匿名</td>'
							}else{
								str +='<td>实名</td>'
							}
							str +='<td>'+result[i].bullet+'</td>';
							str +='<td>'+result[i].createTime+'</td>';
							str +='<td><button class="btn btn-danger delete">删除</button>';
							str +='<a href="/view/user-userMsg?accountId='+result[i].senderId+'" target="_blank"><button class="btn btn-success">查看作者</button></a>';
							str +='<a href="/view/user-userMsg?accountId='+result[i].masterId+'" target="_blank"><button class="btn btn-success">查看主人</button></a></td></tr>'; 
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "4">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					$('#tbody').empty();
					$('#tbody').html(str);
					loadFn();
				}else{

				}	        
	        }
	    })
    }

    
    function loadFn(){
	    $('.delete').on('click',function(){
	    	var id = $(this).parent().parent().attr('value');
	    	var obj = $(this);
	    	var r=confirm("确认删除该弹幕信息吗？");
			if(r==true){
		    	del(id,obj);
		    }
	    })
    }
    
    // 删除接口
    function del(id,obj){
    	$.ajax({
	        url:'/New/Bullet/del',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	id:id
	        },
	        success:function(data){
				if(data.code == '200'){
					obj.parent().parent().remove();	
				}else{

				}	        
	        }
	    })
    }




})