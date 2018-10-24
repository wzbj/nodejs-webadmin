$(function(){
	var randomArr = [];//随机数数组
	// 批量随机加赞
	$('#addthumbs').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			$('.thumbdialogs').fadeIn('normal');
			$('#thumbBtns').unbind('click').bind('click',function(){
				var min = $('#minthumbNum').val();
				var max = $('#maxthumbNum').val();
				randomArr = [];
				if(min != '' && max != ''){
					var comArr = [];
					for(var i=0;i<len;i++){
						randomArr.push(ugcmodule.ugcRandom(min,max));
					}
					// console.log(randomArr);
					var newcomArr = randomArr.join();//id随机数组合
					ugcmodule.addThumb(xboxArr,xboxArrNew,newcomArr,randomArr);
				}else{
					$('.thumbMsgs').html('最小最大赞数都不能为空');
				}				
			})
		}else{
			confirm("请至少选择一个用户");
		}
	})

})


var ugcmodule = new Object({
	addThumb:function(xboxArr,artIds,fakeSupportCountAdds,comArr){
		$.ajax({
	        url:'/New/UGC/randomAddSupport',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	artIds:artIds,
	        	fakeSupportCountAdds:fakeSupportCountAdds
	        },
	        success:function(data){
				if(data.code == '200'){
					// $('.shieldlog').fadeOut('normal');
					$('.thumbdialogs').fadeOut('normal');
					var len = xboxArr.length;
					for(var i = 0; i < len;i++){
						$('.tr'+xboxArr[i]+'').find('.lThumb').val((comArr[i]-0)+($('.tr'+xboxArr[i]+'').find('.lThumb').val()-0));
					
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	},
	ugcRandom:function(min,max){
    	return Math.round(((Math.random() * (max - min) + min) * 10)/10);
    },
    // 最后评论类型id
	lastCommentType:function(artId){
		$.ajax({
	        url:'/New/UGC/lastCommentType',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	artId:artId
	        },
	        success:function(data){
				if(data.code == '200'){
					var num = data.data;
					if(num == '0'){
						$('#idList .md-radio input:radio').prop("checked",false);
					}else{
						$('#checkbox66_'+num+'').prop("checked",true);
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

});

