$(function(){
	$('.navbar-nav li.dropdown-fw').eq(11).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown2 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
    var loading = '<tr id="loading"><td colspan="10"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
    var page = 1;
    var randomNum = Math.floor(Math.random()*100)+400;
    // console.log(randomNum);
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
	$('.refresh').on('click',function(){
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

	//时间选择插件
    $("#startTime").datetimepicker({
        language: "zh-CN",
        format: "yyyy-mm-dd hh:ii",
        autoclose: true,
        todayBtn: true,
        todayHighlight: true,
        forceParse: true
    });

    $("#endTime").datetimepicker({
        language: "zh-CN",
        format: "yyyy-mm-dd hh:ii",
        autoclose: true,
        todayBtn: true,
        todayHighlight: true,
        forceParse: true
    });
   
	function loadFn(){
		// 排序
		$('.lSort').on('change',function(){
			var id = $(this).parent().parent().attr('value');
			var level = $(this).val();
			var formData = new FormData();
				formData.append("table",'article_ad');
				formData.append("id",id);
				formData.append("level",level);
			advertEdit(formData,'',level,'');
		})
	    // 上架
	    $('.onShelf').on('click',function(){
	   		var that = $(this);
			var id = that.parent().parent().attr('value');
			var formData = new FormData();
				formData.append("table",'article_ad');
				formData.append("id",id);
				formData.append("status",1);
			advertEdit(formData,1,'',that);
			
	   	})
	   	// 下架
	   	$('.offShelf').on('click',function(){
	   		var that = $(this);
			var id = that.parent().parent().attr('value');
			var formData = new FormData();
				formData.append("table",'article_ad');
				formData.append("id",id);
				formData.append("status",2);
			advertEdit(formData,2,'',that);
	   	})
	   	// 添加轮播
	   	$('#addAdvert').on('click',function(){
	   		$('.adddialog h4 span').html("添加");
	   		$('.fileinput-filename').html('');
	   		$('.fileinput-filename').append('<i class="fa fa-file"></i>请选择文件')
	   		$('#imghead5').css('display','none');
	   		$('#advertName').val('');
	   		$('#advertImg').val('');
	   		$('#startTime').val('');
	   		$('#endTime').val('');
	   		// $('.md-radio input').removeAttr("checked");
			$('.adddialog').fadeIn('normal');
			$('#advertBtn').unbind('click').bind('click',function(){
				var id = '';
				var title = $('#advertName').val();
				var url = $('#advertImg').val();
				var type = $('input[name="radio3"]:checked').val();
				var status = $('input[name="radio4"]:checked').val();
				var startTime = $('#startTime').val();
				var endTime = $('#endTime').val();
				var img = document.getElementById("gameImg").files[0];

				if(startTime >= endTime){
					alert('场次开始时间不能小于等于结束时间');
					return;
				}else{
					var formData = new FormData();
						formData.append("table",'article_ad');
						id && formData.append("id",id);
						title && formData.append("title",title);
						url && formData.append("url",url);
						type && formData.append("type",type);
						status && formData.append("status",status);
						startTime && formData.append("startTime",startTime);
						endTime && formData.append("endTime",endTime);
						img && formData.append("img",img);
					advertEdit(formData,'','','');
				}
			})
	   	})
	   	// 编辑轮播
	   	$('.aedit').on('click',function(){
	   		$('.adddialog h4 span').html("编辑");
	   		var that = $(this);
	   		var id = that.parent().parent().attr("value");
	   		var img = that.parent().parent().find('img').attr("src");
	   		$('#imghead5').attr("src",img).css("display","block");
	   		var url = that.parent().parent().find('td').eq(3).html();
	   		$('#advertImg').val(url);
	   		var type = that.parent().attr("type");
	   		var status = that.parent().attr("status");
	   		var adName = that.parent().parent().find('td').eq(1).html();
			$('#advertName').val(adName);
			var startTime = that.parent().parent().find('td').eq(6).html();
			$('#startTime').val(startTime);
			var endTime = that.parent().parent().find('td').eq(7).html();
			$('#endTime').val(endTime);   

	   		if(type == '1'){
	   			$('#checkbox3_1').prop('checked',true);
	   		}else if(type == '2'){
	   			$('#checkbox3_2').prop('checked',true);
	   		}
	   		if(status == '1'){
	   			$('#checkbox3_3').prop('checked',true);
	   		}else if(status == '2'){
	   			$('#checkbox3_4').prop('checked',true);
	   		}
	   		$('.adddialog').fadeIn('normal');
	   		$('#advertBtn').unbind('click').bind('click',function(){
				var title = $('#advertName').val();
				var url = $('#advertImg').val();
				var type = $('input[name="radio3"]:checked').val();
				var status = $('input[name="radio4"]:checked').val();
				var startTime = $('#startTime').val();
				var endTime = $('#endTime').val();
				var img = document.getElementById("gameImg").files[0];

				if(startTime >= endTime){
					alert('场次开始时间不能小于等于结束时间');
					return;
				}else{
					var formData = new FormData();
						formData.append("table",'article_ad');
						id && formData.append("id",id);
						title && formData.append("title",title);
						url && formData.append("url",url);
						type && formData.append("type",type);
						status && formData.append("status",status);
						startTime && formData.append("startTime",startTime);
						endTime && formData.append("endTime",endTime);
						img && formData.append("img",img);
					advertEdit(formData,'','','');
				}
	   		})
	   	})
	}

    function adlist(pageNum){
    	$.ajax({
	        url:'/New/ListShow/article_ad_list',
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
					console.log(dataD);
					var len = result.length;
					if(len>0){
						for(var i = 0; i < len;i++){
							str +='<tr value="'+result[i].id+'"><td>'+result[i].id+'</td>';
							str +='<td>'+result[i].title+'</td>';
							str +='<td><img src="'+result[i].img+'?v='+randomNum+'" style="width:100%;" /></td>';
							str +='<td>'+result[i].url+'</td>';
							if(result[i].type == '1'){
								str +='<td>站内活动</td>'
							}else if(result[i].type == '2'){
								str +='<td>站外活动</td>'
							}
							if(result[i].status == '1'){
								str +='<td>已上架</td>';
							}else if(result[i].status == '2'){
								str +='<td>已下架</td>';
							}
							// if(result[i].adStatus == '1'){
							// 	str +='<td>已上架</td>';
							// }else if(result[i].adStatus == '2'){
							// 	str +='<td>已下架</td>';
							// }
							str +='<td>'+result[i].startTime+'</td>';
							str +='<td>'+result[i].endTime+'</td>';
							str += '<td><input type="text" class="lSort" style="text-align:center;width:90%;" value="'+result[i].level+'" /></td>';
							str +='<td type="'+result[i].type+'" status="'+result[i].status+'" >'
							if(result[i].status == '1'){
								str +='<button class="btn btn-success onShelf" style="display:none;">上架</button><button class="btn btn-danger offShelf">下架</button>'; 
							}else if(result[i].status == '2'){
								str +='<button class="btn btn-success onShelf">上架</button><button class="btn btn-danger offShelf" style="display:none;">下架</button>'; 
							}
							str += '<button class="btn btn-warning aedit">编辑</button></td></tr>';
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
    function advertEdit(formData,status,level,obj){
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
					if(status == '2'){//下架
						obj.css('display','none');
						obj.parent().find('.onShelf').css('display','inline-block');
						obj.parent().parent().find('td').eq(5).html("已下架");
					}else if(status == '1'){//上架
						obj.css('display','none');
						obj.parent().find('.offShelf').css('display','inline-block');
						obj.parent().parent().find('td').eq(5).html("已上架");
					}else if(level != ''){
						$('.numCgdialog .smcontent p').html('排序修改成功');
						$('.numCgdialog').fadeIn('normal');
						setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
					}else{
						adlist(1);
					}
				}else{
					
				}	        
	        }
	    })
    }

})