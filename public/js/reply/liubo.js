$(function(){
	// $('.navbar-nav li.dropdown-fw').eq(8).addClass("open selected").siblings().removeClass("open selected");
 //    $('.dropdown2 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
    var allPage = null;
    var loading = '<tr id="loading"><td colspan="4"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
    var page =1;
    liuboReplylist(page);
    setTimeout(function(){
    	Page({
			num:allPage,					//页码数
			startnum:page,				//指定页码
			elem:$('#page1'),		//指定的元素
			callback:function(n){	//回调函数
				page = n;
				window.scrollTo(0,0);
				$('#tbody').html(loading);
				liuboReplylist(page);
			}
		});
		
	},3000)
    
    $('.refresh').on('click',function(){
    	$('#tbody').html(loading);
    	liuboReplylist(page);
	    setTimeout(function(){
	    	Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					liuboReplylist(page);
				}
			});
			
		},3000)
    })
	
	function loadFn(){
	   	// 添加回复
	   	$('#addAdvert').on('click',function(){
	   		$('.adddialog h4 span').html("添加");
	   		$('#keyWord').val('');
	   		$('#keyCont').val('');
	   		$('.adddialog').fadeIn('normal');
	   		$('#advertBtn').unbind('click').bind('click',function(){
	   			var id = '';
	   			var keyword  = $('#keyWord').val();
	   			var keyCont = $('#keyCont').val();
				liuboEdit(id,keyword,keyCont);
	   		})
	   	})
	   	// 编辑广告
	   	$('.edit').on('click',function(){
	   		$('.adddialog h4 span').html("编辑");
	   		var that = $(this);
	   		var id = that.parent().parent().find('td').eq(0).html();
	   		var keyword = that.parent().parent().find('td').eq(1).html();
	   		var keyCont = that.parent().parent().find('td').eq(2).html();
	   		$('#keyWord').val(keyword);
	   		$('#keyCont').val(keyCont);
	   		$('.adddialog').fadeIn('normal');
	   		$('#advertBtn').unbind('click').bind('click',function(){
	   			var keyword  = $('#keyWord').val();
	   			var keyCont = $('#keyCont').val();
				liuboEdit(id,keyword,keyCont);
	   		})
	   	})
	   	// 删除
	   	$('.delete').on('click',function(){
	   		var that = $(this);
	   		var id = that.parent().parent().find('td').eq(0).html();
	   		var r=confirm("确认删除该条刘波回复吗？");
			if(r==true){
		   		operationCom.del('liubo_reply',id,that);
		    }
	   	})
	}

    function liuboReplylist(pageNum){
    	$.ajax({
	        url:'/New/ListShow/liuboReplylist',
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
					var str = '';
					allPage = Math.ceil((dataD.total_num)/50);
					var result = dataD.result;
					var len = result.length;
					if(len>0){
						for(var i = 0; i < len;i++){
							str +='<tr><td>'+result[i].id+'</td>';
							str +='<td>'+result[i].keyword+'</td>';
							str +='<td>'+result[i].replyContent+'</td>';
							str +='<td><button class="btn btn-success edit">编辑</button><button class="btn btn-danger delete">删除</button></td></tr>';
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

    // 编辑接口
    function liuboEdit(id,keyword,replyContent){
    	$.ajax({
	        url:'/New/SAdmin/edit',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	table:'liubo_reply',
	        	id:id,
	        	keyword:keyword,
	        	replyContent:replyContent
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.adddialog').fadeOut('normal');
					liuboReplylist(1);
					loadFn();
				}else{
					
				}	        
	        }
	    })
    }

})