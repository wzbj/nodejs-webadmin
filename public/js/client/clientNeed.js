$(function(){
	$('.navbar-nav li.dropdown-fw').eq(17).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown19 ul.dropdown-menu-fw>li').eq(1).addClass("active").siblings().removeClass("active");
	var allPage = null;
	var currentAjax;
	var page =1;
	var loading = '<tr id="loading"><td colspan="5"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	//列表接口
	getList(1);
	// setTimeout(function(){
	// 	$('.pageTest').page({
	// 		leng: allPage,//分页总数
	// 		activeClass: 'activP' , //active 类样式定义
	// 		clickBack:function(page){
	// 			window.scrollTo(0,0);
	// 			$('#tbody').html(loading);
	// 			getList(page);
	// 		}
	// 	});

	// },3000)
	
	function loadFn(){
		// 编辑
		$('.edit').unbind('click').bind('click',function(){
			var id = $(this).attr('val');
			var text = $(this).parent().parent().find('td').eq(3).html();
			$('.needlog').fadeIn('normal');
			$('#needTitle').html('编辑需求');
			$('.toNeed').val(text);
			$('#needBtn').unbind('click').bind('click',function(){
				var text = $('.toNeed').val();
				needEdit(id,text);
			})
		})
		// 删除
		$('.del').unbind('click').bind('click',function(){
			var id = $(this).attr('val');
			var r = confirm("确认要删除这条需求吗？");
			var obj = $(this);
			if(r == true){
				operationCom.del('demand',id,obj);
			}
		})
	}


	function getList(pageNum){
		$.ajax({
	        url:'/New/ListShow/demand_list',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var str = '';
					var dataD = data.data;
					allPage = Math.ceil((dataD.total_num)/50);
					var result = dataD.result;
					var len = result.length;
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr>';
							str += '<td>'+result[i].account+'</td>';
							str += '<td>'+result[i].mobile+'</td>';
							str += '<td>暂无</td>';
							str += '</td><td>'+result[i].text+'</td>';
							str += '<td>';
							str += '<button class="btn btn-warning edit" val="'+result[i].id+'">编辑</button>';
							str += '<button class="btn btn-danger del" val="'+result[i].id+'">删除</button>';
							str += '</td></tr>'
						}
					}else{
						str += '<tr><td colSpan = "5">暂时没有数据</td></tr>';
					}
					$('#tbody').empty();
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
							getList(page);
						}
					});
					loadFn();
				}else{

				}	        
	        }
	    })
	}
	function needEdit(id,text){
		$.ajax({
	        url:'/New/SAdmin/edit',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	table:'demand',
	        	id:id,
	        	text:text
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.needlog').fadeOut('normal');
					getList(1);
					loadFn();
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	$('#addNeed').on('click',function(){
		$('.needlog').fadeIn('normal');
		$('#needTitle').html('添加需求');
		$('.toNeed').val('');
		$('#needBtn').unbind('click').bind('click',function(){
			var text = $('.toNeed').val();
			needEdit('',text)
		})
	})
	

})









