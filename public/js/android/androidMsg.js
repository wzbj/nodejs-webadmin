$(function(){
	$('.navbar-nav li.dropdown-fw').eq(9).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown2 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
    var allPage = null;
    var loading = '<tr id="loading"><td colspan="8"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
    var page =1;
    androidList(page);
    setTimeout(function(){
    	Page({
			num:allPage,					//页码数
			startnum:page,				//指定页码
			elem:$('#page1'),		//指定的元素
			callback:function(n){	//回调函数
				page = n;
				window.scrollTo(0,0);
				$('#tbody').html(loading);
				androidList(page);
			}
		});
		
	},3000)
	// 刷新
	$('.refresh').on('click',function(){
    	$('#tbody').html(loading);
    	androidList(page);
	    setTimeout(function(){
	    	Page({
				num:allPage,					//页码数
				startnum:page,				//指定页码
				elem:$('#page1'),		//指定的元素
				callback:function(n){	//回调函数
					page = n;
					window.scrollTo(0,0);
					$('#tbody').html(loading);
					androidList(page);
				}
			});
			
		},3000)
    })
    
	function loadFn(){
	   	// 添加回复
	   	$('#addAdvert').on('click',function(){
	   		$('.adddialog h4 span').html("添加");
	   		$('#searchDateRange ').html('');
	   		$('#changeLog').val('');
	   		$('#versionName').val('');
	   		$('#versionCode').val('');
	   		$('#apkUploadUrl').val('');
	   		$('#checkbox3_1').prop('checked',true);
	   		$('.adddialog').fadeIn('normal');
	   		$('#advertBtn').unbind('click').bind('click',function(){
	   			var id = '';
	   			var apkUpdateTime = $('#searchDateRange ').html();
		   		var changeLog = $('#changeLog').val();
		   		var versionName = $('#versionName').val();
		   		var versionCode = $('#versionCode').val();
		   		var apkUploadUrl = $('#apkUploadUrl').val();
		   		var status = $('input[name="radio3"]:checked').val();
				eidt(id,changeLog,versionName,versionCode,apkUpdateTime,apkUploadUrl,status);
	   		})
	   	})
	   	// 编辑广告
	   	$('.edit').on('click',function(){
	   		$('.adddialog h4 span').html("编辑");
	   		var that = $(this);
	   		var id = that.parent().parent().find('td').eq(0).html();
	   		var changeLog = that.parent().parent().find('td').eq(1).html();
	   		var versionName = that.parent().parent().find('td').eq(2).html();
	   		var versionCode = that.parent().parent().find('td').eq(3).html();
	   		var apkUpdateTime = that.parent().parent().find('td').eq(4).html();
	   		var apkUploadUrl = that.parent().parent().find('td').eq(5).html();
	   		var status = that.parent().attr('val');
	   		$('#changeLog').val(changeLog);
	   		$('#versionName').val(versionName);
	   		$('#versionCode').val(versionCode);
	   		$('#apkUploadUrl').val(apkUploadUrl);
	   		$('#searchDateRange ').html(apkUpdateTime);
	   		if(status == '1'){
	   			$('#checkbox3_1').prop('checked',true);
	   		}else if(status == '2'){
	   			$('#checkbox3_2').prop('checked',true);
	   		}
	   		$('.adddialog').fadeIn('normal');
	   		$('#advertBtn').unbind('click').bind('click',function(){
	   			var apkUpdateTime = $('#searchDateRange ').html();
		   		var changeLog = $('#changeLog').val();
		   		var versionName = $('#versionName').val();
		   		var versionCode = $('#versionCode').val();
		   		var apkUploadUrl = $('#apkUploadUrl').val();
		   		var status = $('input[name="radio3"]:checked').val();
				eidt(id,changeLog,versionName,versionCode,apkUpdateTime,apkUploadUrl,status);
	   		})
	   	})
	   	// 删除
	   	$('.delete').on('click',function(){
	   		var that = $(this);
	   		var id = that.parent().parent().find('td').eq(0).html();
	   		var r=confirm("确认删除该条记录吗？");
			if(r==true){
		   		operationCom.del('android_version',id,that);
		    }
	   	})
	}

    function androidList(pageNum){
    	$.ajax({
	        url:'/New/ListShow/android_version_list',
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
						// status 1正常2强制更新
						for(var i = 0; i < len;i++){
							str +='<tr><td>'+result[i].id+'</td>';
							str +='<td>'+result[i].changeLog+'</td>';
							str +='<td>'+result[i].versionName+'</td>';
							str +='<td>'+result[i].versionCode+'</td>';
							str +='<td>'+result[i].apkUpdateTime+'</td>';
							str +='<td>'+result[i].apkUploadUrl+'</td>';
							if(result[i].status == '1'){
								str +='<td>正常</td>'
							}else if(result[i].status == '2'){
								str +='<td>强制更新</td>';
							}
							str +='<td val="'+result[i].status+'"><button class="btn btn-success edit">编辑</button><button class="btn btn-danger delete">删除</button></td></tr>';
						}
						$('.pageTest').css('display','block');
					}else{
						str = '<tr><td colSpan = "8">暂时没有数据</td></tr>';
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
    function eidt(id,changeLog,versionName,versionCode,apkUpdateTime,apkUploadUrl,status){
    	$.ajax({
	        url:'/New/SAdmin/edit',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	table:'android_version',
	        	id:id,
	        	changeLog:changeLog,
	        	versionName:versionName,
	        	versionCode:versionCode,
	        	apkUpdateTime:apkUpdateTime,
	        	apkUploadUrl:apkUploadUrl,
	        	status:status
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.adddialog').fadeOut('normal');
					androidList(1);
					loadFn();
				}else{
					
				}	        
	        }
	    })
    }

})