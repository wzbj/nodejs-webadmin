//去掉排序
function unsort(){
	$('.unsort').removeClass('sorting').removeClass('sorting_asc').unbind('click');
}
unsort();
$('thead th').on('click',unsort);

// $(".fancybox").fancybox({
// 	    'type':'image',
// 	    helpers:  {
	        
// 	    }
// 	});

// var TIME;//定义全局变量
//     $(window).scroll( function() {
//         clearTimeout(TIME);//必须要有这句
//         var oDistance = $(document).scrollTop(); 
//         if( $(document).scrollTop() > 200 ){
//             TIME = setTimeout(function(){
//             	$("#iscrollHead").css("display","block");
//                 $("#iscrollHead").addClass("iscrollHead");
//                	$(".iscrollHead").css({"top":oDistance-200});
//             },100);
//         }else{
//             TIME = setTimeout(function(){
//                 $("#iscrollHead").css("display","none");
//             },100);
//         }
//     });

// 操作文件的状态
js_file();
function js_file(){
	var flg = true;
	$('.controlselect').parent('td').on('click',function(event){
		event.stopPropagation();
		var flgstate = $(this).children('.controlselect').children('.selectmap').css('display')
		flg = !flg;
		if(flgstate=='block'){
			$(this).children('.controlselect').children('i').css('background-position-y','0px');
			$(this).children('.controlselect').children('.selectmap').css('display','none');
		}else{
			$(this).children('.controlselect').children('i').css('background-position-y','-56px');
			$(this).children('.controlselect').children('.selectmap').css('display','block');
			$(this).parent().siblings().find('.controlselect').children('i').css('background-position-y','0px');
			$(this).parent().siblings().find('.controlselect').children('.selectmap').css('display','none');
		}
		return false;
	})
	$('body').on('click',function(){
		flg = !flg
		$('.controlselect').children('i').css('background-position-y','0px');
		$('.controlselect').children('.selectmap').css('display','none');
	});
	$('.selectmap div').on('click',function(){
		flg = !flg
		event.stopPropagation();
		$(this).parent('.selectmap').css('display','none');
		$(this).parent('.selectmap').parent('.controlselect').children('i').css('background-position-y','0px')
	});
}

//关闭弹框
$('.dialogcloses').on('click',function(){
	$("body,html").css({"overflow":"auto"});
	hideDialog();
});
function hideDialog() {
	$('.singledialog').fadeOut('slow')
	$('.smdialog').fadeOut('slow')
	$('.lgdialog').fadeOut('slow')
}

$('.singledialogcloses').on('click',function(){
	$('.singledialog').fadeOut('slow')
})
$('.smdialogcloses').on('click',function(){
	$('.smdialog').fadeOut('slow')
})
$('.lgdialogcloses').on('click',function(){
	$('.lgdialog').fadeOut('normal');
	$('.smdialog').fadeOut('normal');
	$("body,html").css({"overflow":"auto"});
})

js_file();
		function js_file(){
			var flg = true;
			$('.controlselect').parent('td').on('click',function(event){
				event.stopPropagation();
				var flgstate = $(this).children('.controlselect').children('.selectmap').css('display')
				flg = !flg;
				if(flgstate=='block'){
					$(this).children('.controlselect').children('i').css('background-position-y','0px');
					$(this).children('.controlselect').children('.selectmap').css('display','none');
				}else{
					$(this).children('.controlselect').children('i').css('background-position-y','-56px');
					$(this).children('.controlselect').children('.selectmap').css('display','block');
					$(this).parent().siblings().find('.controlselect').children('i').css('background-position-y','0px');
					$(this).parent().siblings().find('.controlselect').children('.selectmap').css('display','none');
				}
				return false;
			})
			$('body').on('click',function(){
				flg = !flg
				$('.controlselect').children('i').css('background-position-y','0px');
				$('.controlselect').children('.selectmap').css('display','none');
			});
			$('.selectmap div').on('click',function(){
				flg = !flg
				event.stopPropagation();
				$(this).parent('.selectmap').css('display','none');
				$(this).parent('.selectmap').parent('.controlselect').children('i').css('background-position-y','0px')
			});
		}
function deleteCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}
function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if(c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}


		$('#lgOut').on('click',function(oEvent){
			
			// operationCom.test();
			// operationCom.clearAllCookie();
			deleteCookie("sxh1");
			deleteCookie("sxh2");
			deleteCookie("sxh3");
			deleteCookie("uuid");
			deleteCookie("startTime");
			deleteCookie("endTime");
			deleteCookie("highQualityId");
			deleteCookie("genderId");
			deleteCookie("hotId");
			deleteCookie("osId");
			deleteCookie("numTypeId");
			deleteCookie("maskId");
			deleteCookie("verifyStatusId");
			deleteCookie("orderId");
			deleteCookie("statusId");
			deleteCookie("foulTypeId");
			$.ajax({
		        url:'/New/ILogin/logout',
		        type:"POST",
		        dataType:"json",
		        data:{
		        	
		        },
		        success:function(data){
					if(data.code == '200'){
						window.location.href='/New/ILogin/loginPage';					
					}else{
						confirm("网络异常");
					}	        
		        }
		    })
		})
		
		// XMLHttpRequest, textStatus, errorThrown
		$.ajaxSetup({
			error:function(xhr){
				console.log("错误信息: " + xhr.status + " " + xhr.statusText);
				if(xhr.statusText == 'abort'){
					return;
				}
				var json = JSON.parse(xhr.responseText);
				// console.log(json);
				if(xhr.status == '401'){
					// window.location.href='/New/ILogin/loginPage';
				}else if(xhr.status == '400'){
					$('.numCgdialog .smcontent p').html(json.msg);
					$('.numCgdialog').fadeIn('normal');
					setTimeout(function(){$('.numCgdialog').fadeOut('normal');},1200);
					console.log(json.msg);
				}
			}
		})

		// 多选操作按钮滚动后位置固定
		// var TIMER;//定义全局变量
	 //    $(window).scroll( function() {
	 //        clearTimeout(TIMER);//必须要有这句
	 //        if( $(document).scrollTop() > 200 ){
	 //            TIMER = setTimeout(function(){
	 //                $("#operations").addClass("fixeds");
	 //            },100);
	 //        }else{
	 //            TIMER = setTimeout(function(){
	 //                $("#operations").removeClass("fixeds");
	 //            },100);
	 //        }
	 //    });
	    // 表格的全选全不选
	    $('#all').on('click',function(e){
			e.stopPropagation();
			if(this.checked){   
		        $("tbody :checkbox").prop("checked", true);  
		    }else{   
				$("tbody :checkbox").prop("checked", false);
		    }   
		})
		$(".table").on("click", "tr th", function(){
		    var checkbox  = $(this).find("input[type='checkbox']");
		    var isChecked = checkbox.is(":checked");
		    if (isChecked) {
		        checkbox.removeAttr("checked");
		        $("tbody :checkbox").prop("checked", false);
		    } else {
		        checkbox.attr("checked","true");
		        $("tbody :checkbox").prop("checked", true); 
		    }
		})
		
		$(".table").on("click", "tr td input", function(e){
			e.stopPropagation();
		    var checkbox  = $(this).find("input[type='checkbox']");
		    var isChecked = checkbox.is(":checked");
		    if (isChecked) {
		        checkbox.removeAttr("checked");
		    } else {
		        checkbox.attr("checked","true");
		    }
		})
		$(".table").on("click", "tr td", function(){
		    var checkbox  = $(this).find("input[type='checkbox']");
		    var isChecked = checkbox.is(":checked");
		    if (isChecked) {
		        checkbox.removeAttr("checked");
		    } else {
		        checkbox.attr("checked","true");
		    }
		})

var operationCom = new Object({
	del:function(table,id,obj){//海底捞
		$.ajax({
	        url:'/New/SAdmin/del/'+table+'/'+id+'',
	        type:"GET",
	        dataType:"json",
	        async: true,
	        data:{
	        	// table:table,
	        	// id:id
	        },
	        success:function(data){
				if(data.code == '200'){
					if(table == 'liubo_reply'){//刘波回复删除
						obj.parent().parent().remove();
					}else if(table == 'android_version'){//Android版本信息删除
						obj.parent().parent().remove();
					}else if(table == 'robot_reply'){//删除评论
						obj.parent().parent().remove();
					}else if(table == 'words'){//删除话术
						obj.parent().parent().remove();
					}else if(table == 'pugc_account'){//删除合作商列表账号
						obj.parent().parent().remove();
					}else if(table == 'words_type'){
						$('.editdialog').fadeOut('normal');
						typeList();
					}else{
						obj.parent().parent().remove();
					}
				}else{
					
				}	        
	        }
	    })
		// var accountId = obj.parent().parent().find('input').val();
		// var r=confirm("确认对此用户海底捞吗？");
		// if(r==true){
	 //    	module.batchEdit('',accountId,1,'','',obj);
	 //    }
	},
	// ,
	GetRequest:function(){
		var url = decodeURI(location.search);    
        var theRequest = new Object();   
        if (url.indexOf("?") != -1) {   
            var str = url.substr(1);   
                strs = str.split("&");   
            for(var i = 0; i < strs.length; i ++) {   
             theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
            }   
        }     
        return theRequest;   
	}
	 
})