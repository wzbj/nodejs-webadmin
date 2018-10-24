$(function(){
	$('.navbar-nav li.dropdown-fw').eq(6).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown2 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
   	
   	// 添加分类
   	$('.addType').on('click',function(){
   		var name = $('.typeName').val();
   		if(name != ''){
   			icEdit('',name,'','');
   		}else{
   			$('.typeMsg').html('请输入分类名字');
   			setTimeout(function(){$('.typeMsg').html('')},1000);
   		}
   	})
	purposeList(1);
   	function loadFn(){
   		// 下架
	   	$('.offShelf').on('click',function(){
	   		var that = $(this);
	   		var id = that.parent().attr('value');
	   		var name = that.parent().parent().find(".name").html();
	   		icEdit(id,name,2,that);
	   	})
	   	// 上架
	   	$('.onShelf').on('click',function(){
	   		var that = $(this);
			var id = that.parent().attr('value');
			var name = that.parent().parent().find(".name").html();
	   		icEdit(id,name,1,that);
	   	})
   	}
   	// 增加目的
   	$('.addPurpose').on('click',function(){
   		$('.fileinput-filename').html('');
   		$('.fileinput-filename').append('<i class="fa fa-file"></i>请选择文件')
   		$('#imghead5').css('display','none');
   		$('#imghead6').css('display','none');
   		$('.adddialog').fadeIn("normal");
   		var categoryId = $(this).parent().attr('value');
   		$('#addBtn').on('click',function(){
	   		var name = $('#purposeVal').val();
	   		var description = $('#purposeDes').val();
	   		var formData = new FormData();
			formData.append("id",'');
			formData.append("categoryId",categoryId);
			formData.append("name",name);
			formData.append("description",description);
	   		formData.append("img2_1", document.getElementById("gameImg").files[0]);//目的图片
	   		formData.append("img2_1Success", document.getElementById("gameImg1").files[0]);//互粉图片
	   		// var value = document.getElementById("gameImg").files[0];
	   		// console.log(value);
	   		$.ajax({
	            url: "/New/Intent/iEdit",
	            type: "POST",
	            data:formData,
	            dataType: 'JSON',  
	            contentType: false, 
	            processData: false,
	            success: function (data) {
	            	console.log(data);
	                if (data && data.code == "200") {
	                    // console.log("返回地址是:"+data.data);
	                	$('.adddialog').fadeOut("normal");
	                }
	            },
	            error: function () {
	            	console.log(data.code);
	            }
	        });
	   	})
   	})
   	// 分类管理

   	
   
    function purposeList(pageNum){
    	$.ajax({
	        url:'/New/Intent/iclist',
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
					for(var i =0;i<typeLen;i++){
						str += '<div class="content"><div class="row">';
						str += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 name">'+dataD[i].name+'</div>';
						str += '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" value="'+dataD[i].id+'"><button class="btn btn-success addPurpose">增加目的</button>';
						str += '<a href="/view/purpose-classifyManage?categoryId='+dataD[i].id+'" target="_blank"><button class="btn btn-success typeManage">分类管理</button></a>';
						if(dataD[i].status == '1'){//已上架
                            str += '<button class="btn btn-info onShelf" style="display:none;">上架</button>';
                            str += '<button class="btn btn-danger offShelf">下架</button>';
						}else{//已下架
							str += '<button class="btn btn-info onShelf">上架</button>';
                            str += '<button class="btn btn-danger offShelf" style="display:none;">下架</button>';
						}
						str += '</div></div>';
						if(dataD[i].intents){
							var len = dataD[i].intents.length;
							str += '<div class="row" style="margin-top: 10px;">';
							str += '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>';
							str += '<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">';
							str += '<div class="row img">';
							for(var j = 0;j < len;j++){
								str +='<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><div class="pic">';
								str +='<img src="'+dataD[i].intents[j].url+'" /></div>';
								str +='<p>'+dataD[i].intents[j].name+'</p>';
								// str +='<p>'+dataD[i].intents[j].description+'</p>';
								str +='</div>';
							}
							str += '</div></div>';
						}

						str += '</div>';
					}					
					$('#contents').empty();
					$('#contents').html(str);
					loadFn();
				}else{

				}	        
	        }
	    })
    }

 
    // 分类的增加/编辑接口
    function icEdit(id,name,status,obj){
    	$.ajax({
	        url:'/New/Intent/icEdit',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	id:id,
	        	name:name,
	        	status:status
	        },
	        success:function(data){
				if(data.code == '200'){
					if(id == ''){
						$('.typeName').val('');
						$('.typeMsg').html('添加成功');
   						setTimeout(function(){$('.typeMsg').html('')},1000);
   						purposeList(1);
					}
					if(status == '2'){//下架
						obj.css('display','none');
						obj.parent().find('.onShelf').css('display','inline-block');
					}else if(status == '1'){//上架
						obj.css('display','none');
						obj.parent().find('.offShelf').css('display','inline-block')
					}
				}else{

				}	        
	        }
	    })
    }




})