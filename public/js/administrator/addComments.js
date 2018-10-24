$(function(){
	$('.navbar-nav li.dropdown-fw').eq(4).addClass("open selected").siblings().removeClass("open selected");
	$('.dropdown5 ul.dropdown-menu-fw>li').eq(4).addClass("active").siblings().removeClass("active");
	var allPage = null;	
	var currentAjax;
 	var loading = '<tr id="loading"><td colspan="4"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';		
	getComList(1);
	// setTimeout(function(){
	// 	$('.pageTest').page({
	// 		leng: allPage,//分页总数
	// 		activeClass: 'activP' , //active 类样式定义
	// 		clickBack:function(page){
	// 			window.scrollTo(0,0);
	// 			$('#tbody').html(loading);
	// 			getComList(page);
	// 		}
	// 	});
	// },3000)
	
	function getComList(pageNum){
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/ListShow/robot_reply_list',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	pageNum:pageNum,
    			pageSize:50
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		var result = data.data.result;
	        		var len = result.length;
	        		allPage = Math.ceil((data.data.total_num)/50);
	        		var str = '';
	        		if(len>0){
	        			for(var i=0;i<len;i++){
	        				str += '<tr><td>'+result[i].id+'</td>';
	        				str += '<td>'+result[i].typeName+'</td>';
	        				str += '<td>'+result[i].content+'</td>';
	        				str += '<td id="'+result[i].id+'" typeId="'+result[i].typeId+'"><button class="btn btn-warning cometEdit">编辑</button><button class="btn btn-danger delete">删除</button></td></tr>';
	        			}
	        			Page({
							num:allPage,					//页码数
							startnum:pageNum,				//指定页码
							elem:$('#page1'),		//指定的元素
							callback:function(n){	//回调函数
								pageNum = n;
								window.scrollTo(0,0);
								$('#tbody').html(loading);
								$('#currentPage').html(pageNum);
								
								 getComList(pageNum);
							}
						});
	        		}else{
	        			str = '<tr><td colSpan = "4">暂时没有数据</td></tr>';
	        		}
	        		$('#tbody').empty();
	        		$('#tbody').html(str);
	        		loadFn();
	        		loadDel();
	        	}
	        }
        })
	}
	// 评论类型显示
	getList();
	function getList(){
		$.ajax({
	        url:'/New/ListShow/robot_reply_type_list',
	        // url:'/New/ListShow/robot_reply_list',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		var results = data.data.result;
	        		var len = results.length;
	        		var btnStr = '';
	        		var logStr = '';
	        		for(var i=0;i<len;i++){
	        			btnStr += '<button typeId="'+results[i].id+'" type="button" class="btn bgType" style="margin-right:5px;margin-top:3px;">'+results[i].content+'</button>'
	        		}
	        		for(var i=0;i<len;i++){
	        			if(i==0){
	        				logStr += '<div class="md-radio" style="float:left;">';
		        			logStr += '<input checked type="radio" id="checkbox66_'+results[i].id+'" name="radio66" value="'+results[i].id+'" class="md-radiobtn">';
		        			logStr += '<label for="checkbox66_'+results[i].id+'">';
		        			logStr += '<span></span><span class="check"></span>';
		        			logStr += '<span class="box"></span>'+results[i].content+'</label></div>';
	        			}else{
		        			logStr += '<div class="md-radio" style="float:left;">';
		        			logStr += '<input type="radio" id="checkbox66_'+results[i].id+'" name="radio66" value="'+results[i].id+'" class="md-radiobtn">';
		        			logStr += '<label for="checkbox66_'+results[i].id+'">';
		        			logStr += '<span></span><span class="check"></span>';
		        			logStr += '<span class="box"></span>'+results[i].content+'</label></div>';
	        			}
	        		}
	        		$('#typeList').empty();
	        		$('#typeList').html(btnStr);
	        		$('#idList div').empty();
	        		$('#idList div').html(logStr);
	        		loadBgType();
	        	}
	        }
        })
	}
	$('#tagsTxt,#tagsTxtEdit').on('focus',function(){
		$('.tagsMsg').html('');
	})
	$('#commentMsg').on('focus',function(){
		$('.redMsg').html('');
	})
	// 增加评论类别
	$('#addBgTag').on('click',function(){
		$('.tagsdialog').fadeIn('normal');
		$('#tagsTxt').val('');
		$('#logTitle').html('增加评论类别');
		$('#tagsBtn').unbind('click').bind('click',function(){
			var content = $('#tagsTxt').val();
			if(content != ''){
				typeEdit('',content);
			}else{
				$('.tagsMsg').html('内容不能为空');
			}
		})
	})

	

	// 编辑评论类别接口
	function typeEdit(id,content){
		$.ajax({
	        url:'/New/SAdmin/edit',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	table:'robot_reply_type',
	        	id:id,
	        	content:content
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		$('.tagsdialog').fadeOut('normal');
	        		getList();
	        	}
	        }
        })
	}
	// 编辑评论接口
	function cometEdit(id,content,typeId){
		$.ajax({
	        url:'/New/SAdmin/edit',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	table:'robot_reply',
	        	id:id,
	        	content:content,
	        	typeId:typeId
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		$('.commentdialog').fadeOut('normal');
	        		getComList(1);
	        	}
	        }
        })
	}

	// 添加评论内容
	$('.addcomment').on('click',function(){
		$('.commentdialog').fadeIn('normal');
		$('#idList').css('display','block');
		$('#commentMsg').val('');
		$('#cometLog').html('增加评论');
		$('#comtBtn').unbind('click').bind('click',function(){
			var content = $('#commentMsg').val();
			var typeId = $("input[type='radio'][name='radio66']:checked").val();
			if(content != ''){
				cometEdit('',content,typeId);
			}else{
				$('.redMsg').html('内容不能为空');
			}
		})
	})


	// loadFn();
	function loadFn(){
		
		$('.cometEdit').on('click',function(){
			$('.commentdialog').fadeIn('normal');
			$('#idList').css('display','none');
			var content = $(this).parent().parent().find('td').eq(2).html();
			$('#commentMsg').val(content);
			$('#cometLog').html('编辑评论');
			var id = $(this).parent().parent().find('td').eq(3).attr('id');
			var typeId = $(this).parent().parent().find('td').eq(3).attr('typeid');
			$('#comtBtn').unbind('click').bind('click',function(){
				var content = $('#commentMsg').val();
				if(content != ''){
					cometEdit(id,content,typeId);
				}else{
					$('.redMsg').html('内容不能为空');
				}
			})
		})
		// 删除评论


	}

	function loadBgType(){
		$('.bgType').on('click',function(){
			$('.tagsdialogEdit').fadeIn('normal');
			var id = $(this).attr('typeid');
			$('#tagsTxtEdit').val($(this).html());
			// $('#logTitle').html('编辑评论类别');
			$('#tagsBtnEdit').unbind('click').bind('click',function(){
				var content = $('#tagsTxtEdit').val();
				if(content != ''){
					typeEdit(id,content);
				}else{
					$('.tagsMsg').html('内容不能为空');
				}
			})
			$('#typeDel').unbind('click').bind('click',function(){
				typeDel(id);
			})
		})
	}

	// 评论类型删除接口
    function typeDel(id){
    	$.ajax({
	        url:'/New/Robot/delComment',
	        type:"POST",
	        dataType:"json",
	        // async: true,
	        data:{
	        	id:id
	        },
	        success:function(data){
				if(data.code == '200'){
					getList();
					getComList(1);
					$('.tagsdialogEdit').fadeOut('normal');
				}else{
					
				}	        
	        }
	    })
    }

    // 详细评论删除接口
    function commetDel(id,obj){
    	$.ajax({
	        url:'/New/Robot/delSingleComment',
	        type:"POST",
	        dataType:"json",
	        // async: true,
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

	function loadDel(){
		$('.delete').on('click',function(){
			var obj = $(this);
			var id = $(this).parent().parent().find('td').eq(0).html();
			var r=confirm("确认删除该条评论吗？");
			if(r==true){
				commetDel(id,obj);
				// operationCom.del('robot_reply',id,obj);
		    }
		})
	}
	
	
})