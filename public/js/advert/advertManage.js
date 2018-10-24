$(function(){
	$('.navbar-nav li.dropdown-fw').eq(7).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown2 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
    var page =1;
    adlist(page);
    var loading = '<tr id="loading"><td colspan="10"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
    setTimeout(function(){
    	Page({
			num:allPage,					//页码数
			startnum:page,				//指定页码
			elem:$('#page1'),		//指定的元素
			callback:function(n){	//回调函数
				page = n;
				window.scrollTo(0,0);
				$('#tbody').html(loading);
				adlist(page);
			}
		});
		
	},3000)
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		adlist(page);
		setTimeout(function(){
	    	Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					adlist(page);
				}
			});
			
		},3000)
	})
    
	function loadFn(){
	    // 上架
	    $('.onShelf').on('click',function(){
	   		var that = $(this);
			var id = that.parent().parent().attr('value');
			var formData = new FormData();
				formData.append("table",'ad');
				formData.append("id",id);
				formData.append("adStatus",1);
			advertEdit(formData,1,that);
			
	   	})
	   	// 下架
	   	$('.offShelf').on('click',function(){
	   		var that = $(this);
			var id = that.parent().parent().attr('value');
			var formData = new FormData();
				formData.append("table",'ad');
				formData.append("id",id);
				formData.append("adStatus",2);
			advertEdit(formData,2,that);
	   	})
	   	// 删除广告
	   	$('.adel').on('click',function(){
	   		var r = confirm('确定要删除这条广告吗');
	   		var id = $(this).parent().parent().find('td').eq(0).text();
	   		var obj = $(this);
	   		if(r){
	   			advertDel(id,obj);
	   		}

	   	})
	   	// 添加广告
	   	$('#addAdvert').on('click',function(){
	   		$('.adddialog h4 span').html("添加");
	   		$('.fileinput-filename').html('');
	   		$('.fileinput-filename').append('<i class="fa fa-file"></i>请选择文件')
	   		$('#imghead5').css('display','none');
	   		$('#advertName').val('');
	   		$('#advertImg').val('');
	   		$('#advertCount').val('');
	   		$('.md-radio input').removeAttr("checked");
	   		$('.adddialog').fadeIn('normal');
	   		$('#advertBtn').unbind('click').bind('click',function(){
	   			var id = '';
				var adName = $('#advertName').val();
				var adTo = $('#advertImg').val();
				var resourcesType = $('input[name="radio3"]:checked').val();
				var jumpStatus = $('input[name="radio4"]:checked').val();
				var adType = $('input[name="radio5"]:checked').val();
				var adStatus = $('input[name="radio6"]:checked').val();//上架下架
				var count = $('#advertCount').val();
				var img = document.getElementById("gameImg").files[0];
				var formData = new FormData();
					formData.append("table",'ad');
					id && formData.append("id",id);
					adName && formData.append("adName",adName);
					adTo && formData.append("adTo",adTo);
					resourcesType && formData.append("resourcesType",resourcesType);
					jumpStatus && formData.append("jumpStatus",jumpStatus);
					adType && formData.append("adType",adType);
					count && formData.append("count",count);
					img && formData.append("img",img);
					adStatus && formData.append("adStatus",adStatus);
				advertEdit(formData,'','');
	   		})
	   	})
	   	// 编辑广告
	   	$('.aedit').on('click',function(){
	   		$('.adddialog h4 span').html("编辑");
	   		var that = $(this);
	   		var id = that.parent().parent().attr("value");
	   		var img = that.parent().parent().find('img').attr("src");
	   		$('#imghead5').attr("src",img).css("display","block");
	   		var adTo = that.parent().attr("adTo");
	   		$('#advertImg').val(adTo);
	   		var resourcesType = that.parent().parent().find('td').eq(3).html();
	   		var jumpStatus = that.parent().attr("jumpStatus");
	   		var adType = that.parent().attr("adType");
	   		var adStatus = that.parent().attr("adStatus");
	   		var count = that.parent().parent().find('td').eq(7).html();
	   		$('#advertCount').val(count);
	   		var adName = that.parent().parent().find('td').eq(1).html();
	   		$('#advertName').val(adName);
	   		if(resourcesType == '图片'){
	   			$('#checkbox3_2').prop('checked',true);
	   		}else if(resourcesType == 'gif'){
	   			$('#checkbox3_1').prop('checked',true);
	   		}
	   		if(jumpStatus == '1'){
	   			$('#checkbox3_3').prop('checked',true);
	   		}else if(jumpStatus == '2'){
	   			$('#checkbox3_4').prop('checked',true);
	   		}
	   		if(adType == '1'){
	   			$('#checkbox3_5').prop('checked',true);
	   		}else if(adType == '2'){
	   			$('#checkbox3_6').prop('checked',true);
	   		}else if(adType == '3'){
	   			$('#checkbox3_7').prop('checked',true);
	   		}
	   		if(adStatus == '1'){
	   			$('#checkbox3_8').prop('checked',true);
	   		}else if(adStatus == '2'){
	   			$('#checkbox3_9').prop('checked',true);
	   		}

	   		$('.adddialog').fadeIn('normal');
	   		$('#advertBtn').unbind('click').bind('click',function(){
				var adName = $('#advertName').val();
				var adTo = $('#advertImg').val();;
				var resourcesType = $('input[name="radio3"]:checked').val();
				var jumpStatus = $('input[name="radio4"]:checked').val();
				var adType = $('input[name="radio5"]:checked').val();
				var adStatus = $('input[name="radio6"]:checked').val();//上架下架
				var count = $('#advertCount').val();;
				var img = document.getElementById("gameImg").files[0];
				var formData = new FormData();
					formData.append("table",'ad');
					id && formData.append("id",id);
					adName && formData.append("adName",adName);
					adTo && formData.append("adTo",adTo);
					resourcesType && formData.append("resourcesType",resourcesType);
					jumpStatus && formData.append("jumpStatus",jumpStatus);
					adType && formData.append("adType",adType);
					count && formData.append("count",count);
					img && formData.append("img",img);
					adStatus && formData.append("adStatus",adStatus);
					console.log(id);
				advertEdit(formData,'','');
	   		})

	   	})
	}


    function adlist(pageNum){
    	$.ajax({
	        url:'/New/ListShow/adlist',
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
							str +='<tr value="'+result[i].id+'"><td>'+result[i].id+'</td>';
							str +='<td>'+result[i].adName+'</td>';
							str +='<td><img src="'+result[i].url+'" style="width:100%;" /></td>';
							str +='<td>'+result[i].resourcesType+'</td>';
							if(result[i].jumpStatus == '1'){
								str +='<td>跳转</td>'
							}else if(result[i].jumpStatus == '2'){
								str +='<td>不跳转</td>'
							}
							if(result[i].adType == '1'){
								str +='<td>网页</td>';
							}else if(result[i].adType == '2'){
								str +='<td>人</td>';
							}else if(result[i].adType == '3'){
								str +='<td>活动</td>';
							}
							if(result[i].adStatus == '1'){
								str +='<td>已上架</td>';
							}else if(result[i].adStatus == '2'){
								str +='<td>已下架</td>';
							}
							str +='<td>'+result[i].count+'</td>';
							str +='<td>'+result[i].createTime+'</td>';
							str +='<td adTo="'+result[i].adTo+'" jumpStatus="'+result[i].jumpStatus+'" adType="'+result[i].adType+'" adStatus="'+result[i].adStatus+'" >'
							if(result[i].adStatus == '1'){
								str +='<button class="btn btn-success onShelf" style="display:none;">上架</button><button class="btn btn-danger offShelf">下架</button>'; 
							}else if(result[i].adStatus == '2'){
								str +='<button class="btn btn-success onShelf">上架</button><button class="btn btn-danger offShelf" style="display:none;">下架</button>'; 
							}
							str += '<button class="btn btn-warning aedit">编辑</button><button class="btn btn-danger adel">删除</button></td></tr>';
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
    function advertEdit(formData,adStatus,obj){
    	$.ajax({
	        url:'/New/SAdmin/edit',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:formData,
	        contentType: false, 
            processData: false,
	        success:function(data){
				if(data.code == '200'){
					$('.adddialog').fadeOut('normal');
					if(adStatus == '2'){//下架
						obj.css('display','none');
						obj.parent().find('.onShelf').css('display','inline-block');
						obj.parent().parent().find('td').eq(6).html("已下架");
					}else if(adStatus == '1'){//上架
						obj.css('display','none');
						obj.parent().find('.offShelf').css('display','inline-block');
						obj.parent().parent().find('td').eq(6).html("已上架");
					}else{
						adlist(1);
					}
				}else{
					
				}	        
	        }
	    })
    }

    // 删除接口
    function advertDel(id,obj){
    	$.ajax({
	        url:'/New/Advertisement/delAd',
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

})