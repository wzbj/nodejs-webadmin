$(function(){
	//全选

	// 选中备注
	$('#remark').on('click',function(){
		var xboxArr = [];
		 $.each($('.xbox input:checkbox'),function(){
            if(this.checked){
            	xboxArr.push($(this).val());
            }
        });
		var xboxArrNew = xboxArr.join();
		var len = xboxArr.length;
		if(len>0){
			$('.remarkdialog').fadeIn("normal");
			$('#remarkBtn').on('click',function(){
				var content = $('#remarkTxt').val();
				module.batchRemark(xboxArrNew,content,'',1,xboxArr);
			})
		}else{
			confirm("请至少选择一个用户");
		}
	})

	// 批量增加备注接口
	// function batchRemark(accountId,remark,gender,msgType,xboxArr,flg){
	// 	$.ajax({
	//         url:'/New/Account/updateInfo',
	//         type:"POST",
	//         dataType:"json",
	//         data:{
	//         	accountId:accountId,
	//         	remark:remark,
	//         	gender:gender,
	//         	msgType:msgType,
	//         	agree:1
	//         },
	//         success:function(data){
	// 			if(data.code == '200'){
	// 				$('.remarkdialog').fadeOut('normal');	
	// 				var len = xboxArr.length;
	// 				if(len>1){
	// 					for(var i = 0;i<len;i++){
	// 						// $('.tr'+xboxArr[i]+'').css('background','#BDBDBD');
	// 						$('.tr'+xboxArr[i]+'').find('.aRemark').html(remark);
	// 					}
	// 				}else{
	// 					$('.tr'+accountId+'').find('.aRemark').html(remark);
	// 					// $('.tr'+id+'').css('background','#BDBDBD');
	// 					// $('.tr'+id+'').find('.handled').css('display','none');
	// 					if(flg == '1'){
	// 						$('.tr'+accountId+'').remove();
	// 					}
	// 				}			
	// 			}else{
	// 				confirm("网络异常");
	// 			}	        
	//         }
	//     })
	// }

		//选中屏蔽
		$('#shield').on('click',function(){
			var xboxArr = [];
			 $.each($('.xbox input:checkbox'),function(){
	            if(this.checked){
	            	xboxArr.push($(this).val());
	            }
	        });
			var xboxArrNew = xboxArr.join();
			var len = xboxArr.length;
			if(len>0){
				$('.shieldlog').fadeIn('slow');
				$('#shieldBtn').on('click',function(){
					var msg = $("input[type='radio'][name='radio3']:checked").val();
					if(msg == undefined){
						var	msg = $('.toUserMsg').val();
					}
					var remark = $('.toUserRemark').val();
					module.batchEdit(xboxArr,xboxArrNew,0,msg,remark,1,1,'');
				})
			}else{
				confirm("请至少选择一个用户");
			}
		})

		// 选中解封
		$('#relieve').on('click',function(){
			var xboxArr = [];
			 $.each($('.xbox input:checkbox'),function(){
	            if(this.checked){
	            	xboxArr.push($(this).val());
	            }
	        });
			var xboxArrNew = xboxArr.join();
			var len = xboxArr.length;
			if(len>0){
				var r=confirm("确认对选中的用户解封吗？");
				if(r==true){
			    	module.batchEdit(xboxArr,xboxArrNew,1,'','','',1,'');
			    }
			}else{
				confirm("请至少选择一个用户");
			}
		})

		
		// 选中沉底
		$('#sink').on('click',function(){
			var xboxArr = [];
			$.each($('.xbox input:checkbox'),function(){
	            if(this.checked){
	            	xboxArr.push($(this).val());
	            }
			});
			var xboxArrNew = xboxArr.join();
			var len = xboxArr.length;
			if(len>0){
				$('.sinkback').fadeIn('slow');
				$('#sinkbackBtn').on('click',function(obj){
					// var msg = $("input[type='radio'][name='radio3']:checked").val();
					// if(msg == undefined){
					// 	var	msg = $('.toUserMsg').val();
					// }
					// var remark = $('.toUserRemark').val();
					// module.batchEdit(xboxArr,xboxArrNew,0,msg,remark,1,1,'');
					var sinkReasonId = $('#sinkList option:selected').attr('value');
					// console.log(sinkReasonId);
					module.batchEdit(xboxArr,xboxArrNew,2,'','','',1,obj,sinkReasonId);
				})
				// var r=confirm("确认对选中的用户沉底吗？");
				// if(r==true){
				// 	console.log(xboxArr);
				// 	console.log(xboxArrNew);
			    // 	module.batchEdit(xboxArr,xboxArrNew,2,'','','',1,'');
				// }
			}else{
				confirm("请至少选择一个用户");
			}
			
		})

		//选中海底捞
		$('#fishs').on('click',function(){
			var xboxArr = [];
			 $.each($('.xbox input:checkbox'),function(){
	            if(this.checked){
	            	xboxArr.push($(this).val());
	            }
	        });
			var xboxArrNew = xboxArr.join();
			var len = xboxArr.length;
			if(len>0){
				var r=confirm("确认对选中的用户海底捞吗？");
				if(r==true){
			    	module.batchEdit(xboxArr,xboxArrNew,1,'','','',1,'');
			    }
			}else{
				confirm("请至少选择一个用户");
			}
		})

		
		
		$('#typeList').on("change",function(){
			var options=$("#typeList option:selected").val();
			$('.toUserMsg').val('');
			$('.judgeRadio').css('display','none');
			$('.judgeRadio'+options+'').css('display','block');
		})

	// }

})


var module = new Object({
	batchEdit:function (xboxArr,accountId,status,msg,remark,msgType,agree,obj,sinkReasonId){
		$.ajax({
	        url:conf.host+'/New/Account/advancedChangeStatus',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	status:status,
	        	msg:msg,
	        	remark:remark,
	        	msgType:msgType,
				agree:agree,
				sinkReasonId:sinkReasonId
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.shieldlog').fadeOut('normal');
					$('.sinkback').fadeOut('normal');
					var len = xboxArr.length;
					if(len < 1){
						if(agree == '1'){
							obj.parent().find('.through').remove();
						}
						if(status == '0'){
							obj.parent().parent().find('.userStau').html("封禁");
							obj.parent().parent().find('.aRemark').html(remark);
							obj.parent().find('.shields').css("display","none");
							obj.parent().find('.fishing').css("display","none");
							obj.parent().find('.relieve').css("display","block");
							obj.parent().find('.sink').css("display","block");
						}else if(status == '1'){
							obj.parent().parent().find('.userStau').html("正常");
							obj.parent().find('.shields').css("display","block");
							obj.parent().find('.fishing').css("display","none");
							obj.parent().find('.relieve').css("display","none");
							obj.parent().find('.sink').css("display","block");
						}else if(status =='2'){
							obj.parent().parent().find('.userStau').html("沉底");
							obj.parent().parent().find('.aRemark').html(remark);
							obj.parent().find('.shields').css("display","none");
							obj.parent().find('.fishing').css("display","block");
							obj.parent().find('.relieve').css("display","none");
							obj.parent().find('.sink').css("display","none");
						}			
					}else{
						for(var i = 0; i < len;i++){
							// console.log(xboxArr[i]);
							if(status == '0'){
								$('.tr'+xboxArr[i]+'').find('.userStau').html("封禁");
								$('.tr'+xboxArr[i]+'').find('.aRemark').html(remark);
								$('.tr'+xboxArr[i]+'').find('.shields').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.fishing').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.relieve').css("display","block");
								$('.tr'+xboxArr[i]+'').find('.sink').css("display","block");
							}else if(status == '1'){
								$('.tr'+xboxArr[i]+'').find('.userStau').html("正常");
								$('.tr'+xboxArr[i]+'').find('.shields').css("display","block");
								$('.tr'+xboxArr[i]+'').find('.fishing').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.relieve').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.sink').css("display","block");
							}else if(status == '2'){
								// console.log(xboxArr[i]);
								$('.tr'+xboxArr[i]+'').find('.userStau').html("沉底");
								$('.tr'+xboxArr[i]+'').find('.aRemark').html(remark);
								$('.tr'+xboxArr[i]+'').find('.shields').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.fishing').css("display","block");
								$('.tr'+xboxArr[i]+'').find('.relieve').css("display","none");
								$('.tr'+xboxArr[i]+'').find('.sink').css("display","none");
							}
						}
					}
							
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	},
	batchRemark:function(accountId,remark,gender,msgType,xboxArr,flg){
		$.ajax({
	        url:conf.host+'/New/Account/updateInfo',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	remark:remark,
	        	gender:gender,
	        	msgType:msgType,
	        	agree:1
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.remarkdialog').fadeOut('normal');	
					var len = xboxArr.length;
					if(len>1){  
						for(var i = 0;i<len;i++){
							// $('.tr'+xboxArr[i]+'').css('background','#BDBDBD');
							$('.tr'+xboxArr[i]+'').find('.aRemark').html(remark);
						}
					}else{
						$('.tr'+accountId+'').find('.aRemark').html(remark);
						// $('.tr'+id+'').css('background','#BDBDBD');
						// $('.tr'+id+'').find('.handled').css('display','none');
						if(flg == '1'){
							$('.tr'+accountId+'').remove();
						}
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	},
	typeList:function(){
		$.ajax({
	        url:conf.host+'/New/Words/typeList',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var len = dataD.length;
					var str = '';
					$('#typeList').empty();
					for(var i=0;i<len;i++){
						str += '<option value="'+dataD[i].id+'">'+dataD[i].name+'</option>';
					}
					$('#typeList').append(str);
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	},
	wordsList:function(){
		$.ajax({
	        url:conf.host+'/New/Words/wordsList',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var len = dataD.length;
					var str = '';
					$('#radioList').empty();
					if(len>0){
						for(var i=0;i<len;i++){
							var firstTypeId = dataD[0].typeId;
							// console.log('+++++++'+firstTypeId);
		     				if(dataD[i].typeId == firstTypeId){
		     					str+='<div style="display:block;" class="md-radio judgeRadio judgeRadio'+dataD[i].typeId+'">';
								str+='<input type="radio" id="checkbox3_'+dataD[i].id+'" name="radio3" value="'+dataD[i].text+'" class="md-radiobtn">';
								str+='<label for="checkbox3_'+dataD[i].id+'"><span></span><span class="check"></span>';
								str+='<span class="box"></span>'+dataD[i].text+'</label></div>';
		     				}else{
		     					str+='<div class="md-radio judgeRadio judgeRadio'+dataD[i].typeId+'" style="display:none">';
								str+='<input type="radio" id="checkbox3_'+dataD[i].id+'" name="radio3" value="'+dataD[i].text+'" class="md-radiobtn">';
								str+='<label for="checkbox3_'+dataD[i].id+'"><span></span><span class="check"></span>';
								str+='<span class="box"></span>'+dataD[i].text+'</label></div>';
		     				}
						}
					}else{
						str +='';
					}
					
					$('#radioList').append(str);	
				}else{
					confirm("网络异常");	
				}						        	
	        }	
	    })
	},
	sinkList:function(){
		$.ajax({
	        url:conf.host+'/New/SAdmin/dlist/sink_reason',
	        type:"POST",
	        dataType:"json",
	        data:{
				pageNum:1,
				pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data.result;
					// console.log(dataD);
					var len = dataD.length;
					var str = '';
					$('#sinkList').empty();
					for(var i=0;i<len;i++){
						str += '<option value="'+dataD[i].id+'">'+dataD[i].content+'</option>';
					}
					$('#sinkList').append(str);
				}else{
					// confirm("网络异常");
				}
	        }
	    })
	},
	
	// 数美用户选中通过操作
	senUserStatusChange:function(xboxArr,id,type,obj){
		$.ajax({
	        url:conf.host+'/New/ShuMeiSensitive/senUserStatusChange',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	id:id,
	        	type:type
	        },
	        success:function(data){
				if(data.code == '200'){
					var len = xboxArr.length;
					if(len < 1){
						obj.parent().parent().remove();
					}else{
						// console.log(xboxArr);
						for(var i = 0;i<len;i++){
							// $('.tr'+xboxArr[i]+'').find('.through').css("display","none");
							var test = $('.tr'+xboxArr[i]+'').find('.through').html();
							// $('.tr'+xboxArr[i]+'').find('.through').css("display","none");
							$('.tr'+xboxArr[i].split(",",1)+'').remove();
						}
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	},
	through:function(obj,type){
		if(type == 'device'){
			var accountId = obj.parent().parent().find('td').eq(1).html();
		}else{
			var accountId = obj.parent().parent().find('input').val();
		}
		// console.log(accountId);
		var r = confirm('确认对此用户通过吗？');
		if(r==true){
			module.senUserStatusChange('',accountId,type,obj);
		}
	},
	relieve:function(obj){//解封

		var accountId = obj.parent().parent().find('input').val();
		// console.log("用户id"+accountId);
		var r=confirm("确认对此用户解封吗？");
		if(r==true){
			if(obj.parent().find('.through').html()){//判断是新用户
				module.batchEdit('',accountId,1,'','','',1,obj);
			}else{
				module.batchEdit('',accountId,1,'','','','',obj);
			}
	    }
	},
	shields:function(obj){//屏蔽
		var accountId = obj.parent().parent().find('input').val();
		// console.log('测试'+accountId);
		$('.shieldlog').fadeIn('normal');
		$("body,html").css({"overflow":"hidden"});
		$("input[type='radio'][name='radio3']").prop('checked',false);
		$('.toUserRemark').val('');
		$('.toUserMsg').val('');
		$('#shieldBtn').unbind('click').bind('click',function(){
			$("body,html").css({"overflow":"auto"});
			var msg = $("input[type='radio'][name='radio3']:checked").val();
			if(msg == undefined){
				var	msg = $('.toUserMsg').val();
			}
			var remark = $('.toUserRemark').val();
			if(obj.parent().find('.through').html()){//判断是新用户
				module.batchEdit('',accountId,0,msg,remark,1,1,obj);
			}else{
				module.batchEdit('',accountId,0,msg,remark,1,'',obj);
			}
		})
	},
	sink:function(obj){//沉底
		var Id = obj.parent().parent().find('input').val();	
		var accountId = Id ? Id : obj.parent().parent().find('input').val();
		$('.sinkback').fadeIn('normal');
		$("body,html").css({"overflow":"hidden"});
		// $('.toUserRemark').val('');
		// $('.toUserMsg').val('');
		var kaiguan = 1;//状态是防止确定按钮被多次绑定事件
		if(kaiguan){
			$('#sinkbackBtn').unbind('click').bind('click',function(){
				$("body,html").css({"overflow":"auto"});
				var sinkReasonId = $('#sinkList option:selected').attr('value');
				var remark = $('#sinkList option:selected').html();
				if(obj.parent().find('.through').html()){//判断是新用户
					module.batchEdit('',accountId,2,'',remark,'',1,obj,sinkReasonId);
				}else{
					module.batchEdit('',accountId,2,'',remark,'','',obj,sinkReasonId);
				}
			})
			kaiguan = 0;
		}
		
	},
	fishing:function(obj){//海底捞
		var accountId = obj.parent().parent().find('input').val();
		var r=confirm("确认对此用户海底捞吗？");
		if(r==true){
			if(obj.parent().find('.through').html()){//判断是新用户
	    		module.batchEdit('',accountId,1,'','','',1,obj);
			}else{
				module.batchEdit('',accountId,1,'','','','',obj);
			}
	    }
	}

});

