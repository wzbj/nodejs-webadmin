$(function(){
	var randomNum = Math.floor(Math.random()*100);
	var loading = '<tr id="loading"><td colspan="19"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var nolist = '<tr id="loading"><td colspan="19">暂时没有数据</td></tr>';
	var allPage = null;
	var strtime2 = ' 23:59:59';
	var sxh1 = '',
		sxh2 = '',
		sxh3 = '',
		sxh4 = '',
		sxh5 = '',//ip搜索
		sxh6 = '',
		startTime = '',
		endTime = '',
		gender = '',
		status = '',
		miss = '',
		lock = '',
		intent = '',
		number = '',
		page =1;


// 标签
	var results = '';
	tagList();
	var rlens = results.length;
	// 待处理用户跳转过来时候得搜索
	var ipUrl = window.location.href.split('slectIp=')[1];
	function GetRequest() {
        //获取到Url并且解析Url编码  
        var url = decodeURI(window.location.href.split('ordinary')[1]);    
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
    var Request = new Object();  
    Request = GetRequest();
    slectNm = Request.slectNm;
    slectPn = Request.slectPn;
    slectIp = Request.slectIp;
    console.log(slectPn);

    if(slectNm){
    	sxh2 = slectNm;
    	$('#sxh2').val(sxh2);
    }else{
    	sxh2 = '';
    	$('#sxh2').val(sxh2);
    }
    if(slectPn){
    	sxh3 = slectPn;
    	var phoneNum = sxh3.substring(2);
    	$('#sxh3').val(phoneNum);
    }else{
    	sxh3 = '';
    	$('#sxh3').val(sxh3);
    }
    if(slectIp){
    	sxh5 = slectIp;
    	$('#sxh5').val(sxh5);
    }else{
    	sxh5 = '';
    	$('#sxh5').val(sxh5);
    }



	//页面初始时间设置
	
	$('#reportrang6 span').html('');

	$('#reportrange6').on('apply.daterangepicker',function(ev, picker) {
		var chartime1 = picker.startDate.format('YYYY-MM-DD');
		var chartime2 = picker.endDate.format('YYYY-MM-DD');
	 	$('#reportrange6 span').html(chartime1 + '至' + chartime2);
	});
	
	// getList('','','','','','','','','','','','','',page);
	getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,'',page);
	setTimeout(function(){
		Page({
			num:allPage,					//页码数
			startnum:page,				//指定页码
			elem:$('#page1'),		//指定的元素
			callback:function(n){	//回调函数
				
				page = n;
				window.scrollTo(0,0);
				$('#tbody').html(loading);
				$('#currentPage').html(page);
				// getList('','','','','','','','','','','','','',page);
				getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,'',page);
				placeLoad();
			}
		});
	},4000)

	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
			getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,'',page);
			placeLoad();
			setTimeout(function(){
				Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						$('#currentPage').html(page);
						getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,'',page);
						placeLoad();
					}
				});
			},4000)
		window.scrollTo(0,0);
	})

	$('#search,.selectRadio').on('click',function(){
		page =1;
		sxh1 = $('#sxh1').val();
		sxh2 = $('#sxh2').val();
		if($('#sxh3').val()!=''){
			sxh3 = $('#areacode').val() + $('#sxh3').val();
		}else{
			sxh3 = '';
		}
		sxh4 = $('#sxh4').val();
		sxh5 = $('#sxh5').val();
		 
		 var idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		 startTime = idtime.split("至")[0];
		 endTime = idtime.split("至")[1];
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		gender = $("input[type='radio'][name='radio2']:checked").val();
		status = $("input[type='radio'][name='radio1']:checked").val();
		miss = $("input[type='radio'][name='radio3']:checked").val();
		lock = $("input[type='radio'][name='radio4']:checked").val();
		number = $("input[type='radio'][name='radio5']:checked").val();
		intent = $("#objectList option:selected").val();
		// var test = $("input[type='radio'][name='radio6']:checked").val();
		// console.log('test'+test);
		$('#tbody').html(loading);
		$('.pageTest').empty();
		if(status == '6'){
			status = 1;
			sxh6 = '机器操作:(注册)数美图片检测未通过';
			$('#sxh6').css('display','none');
		}else{
			sxh6 = $('#sxh6').val();
			status = $("input[type='radio'][name='radio1']:checked").val();
			$('#sxh6').css('display','block');
		}
			
		
			getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,'',page);
			placeLoad();
			setTimeout(function(){
				Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						$('#currentPage').html(page);
						getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,'',page);
						placeLoad();
					}
				});
			},4000)
		
	})
	
	function changeURLArg(url,arg,arg_val){ 
	    var pattern=arg+'=([^&]*)'; 
	    var replaceText=arg+'='+arg_val; 
	    if(url.match(pattern)){ 
	        var tmp='/('+ arg+'=)([^&]*)/gi'; 
	        tmp=url.replace(eval(tmp),replaceText); 
	        return tmp; 
	    }else{ 
	        if(url.match('[\?]')){ 
	            return url+'&'+replaceText; 
	        }else{ 
	            return url+'?'+replaceText; 
	        } 
	    } 
	    return url+'\n'+arg+'\n'+arg_val; 
	} 



	var TIME;//定义全局变量
    $(window).scroll( function() {
        clearTimeout(TIME);//必须要有这句
        var oDistance = $(document).scrollTop(); 
        if( $(document).scrollTop() > 200 ){
            TIME = setTimeout(function(){
            	$("#iscrollHead").css("display","block");
                $("#iscrollHead").addClass("iscrollHead");
               	$(".iscrollHead").css({"top":oDistance-300});
            },100);
        }else{
            TIME = setTimeout(function(){
                $("#iscrollHead").css("display","none");
            },100);
        }
    });


	module.typeList();
	module.wordsList();
	module.sinkList();

	
	// 点击搜索加载列表
	$('.kfthrough').on('click',function(){
		sxh1 = $('#sxh1').val();
		sxh2 = $('#sxh2').val();
		if($('#sxh3').val()!=''){
			sxh3 = $('#areacode').val() + $('#sxh3').val();
		}else{
			sxh3 = '';
		}
		// sxh3 = $('#areacode').val() + $('#sxh3').val();
		sxh4 = $('#sxh4').val();
		sxh5 = $('#sxh5').val();
		sxh6 = $('#sxh6').val();
		idtime = $('#reportrange6 span').html();//获取时间选择器的时间
		startTime = idtime.split("至")[0];
		endTime = $.trim(idtime.split("至")[1]);
		if(!endTime){
			endTime ='';
		}else{
			endTime = endTime + strtime2;
		}
		gender = $("input[type='radio'][name='radio2']:checked").val();
		status = $("input[type='radio'][name='radio1']:checked").val();
		miss = $("input[type='radio'][name='radio3']:checked").val();
		intent = $("#objectList option:selected").val();
		// var test = $("input[type='radio'][name='radio6']:checked").val();
		// console.log('test'+test);
		$('#tbody').html(loading);
		$('.pageTest').empty();
		if(status == '6'){
			status = 1;
			sxh6 = '机器操作:(注册)数美图片检测未通过';
		}else{
			sxh6 = $('#sxh6').val();
			status = $("input[type='radio'][name='radio1']:checked").val();
		}

			getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,1,page);
			placeLoad();
			setTimeout(function(){
				Page({
					num:allPage,					//页码数
					startnum:page,				//指定页码
					elem:$('#page1'),		//指定的元素
					callback:function(n){	//回调函数
						
						page = n;
						window.scrollTo(0,0);
						$('#tbody').html(loading);
						$('#currentPage').html(page);
						// getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,'',1,page);
						getList(sxh1,sxh2,sxh3,sxh4,sxh5,sxh6,startTime,endTime,gender,status,miss,lock,intent,number,1,page);
						placeLoad();
					}
				});
				
			},4000)
		// }
	})

	
    var tel;
	function place(tel,i){
        //淘宝接口    
        // let tmp = '';
        $.ajax({
             type: "get",
             url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+tel,
             dataType: "jsonp",
             jsonp: "callback",
             async:false,
             success: function(data){
                // console.log(data);
                $('.error').css('display','none');
                	var province = data.province,
                    operators = data.catName,
                    carrier = data.carrier,
                    num = data.telString;
                    // $('.places').eq(i).html(province+'<br />'+carrier);
                    if(carrier){
                    	$('.places').eq(i).html(carrier);
                    }else{
                    	$('.places').eq(i).html('未知');
                    }

             },
             error:function (){    
                $('li span').html('');
                $('.error').css('display','block');        
             }
         });
    }


	function getList(nickname_like,nickname,mobile,sign,ip,remark,startTime,endTime,gender,status,miss,lock,intent,number,kfpd,pageNum){
			$.ajax({
		        url:conf.host+'/New/Account/accountList',
		        type:"POST",
		        dataType:"json",
		        async: true,
		        data:{
		        	nickname_like:nickname_like,
		        	nickname:nickname,
		        	mobile:mobile,
		        	sign:sign,
		        	ip:ip,
		        	remark:remark,
		        	startTime:startTime,
		        	endTime:endTime,
		        	gender:gender,
		        	status:status,
		        	miss:miss,
		        	lock:lock,
		        	intent:intent,
		        	number:number,
		        	pageNum:pageNum,
		        	pageSize:50
		        },
		        beforeSend:function(){
		        	// var str = '<tr><td colspan="16"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td><tr>';
		        	// $('#tbody').html(str);
		        },
		        success:function(data){
		        	
					if(data.code == '200'){
						var str = '';
						var dataD = data.data;
						allPage = Math.ceil((dataD.total_num)/50);
						$("#allUser").html(dataD.total_num);
						$('#pageNum').html("50");
						$('#allPage').html(allPage);
						var result = dataD.result;
						// console.log(result);
						var len = result.length;
						$('#all').prop('checked',false);
						// $('.pageTest').empty();
						if(len>0){

							for(var i = 0; i < len;i++){
								str += '<tr class="tr'+result[i].id+' kf kf'+i+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';
								str += '<td><a target="_blank" href="/view/user-userMsg?accountId='+result[i].id+'">'+result[i].id+'</a></td>';
								str += '<td class="telNum" value="'+result[i].account+'">'+result[i].account+'<p class="places" style="margin:0;"></p></td>';
								// str += '<td class="places"></td>';
								str += '<td class="changeImg'+result[i].id+'">';
								// str += '<td>'+result[i].account+'</td><td>';
								for(var j = 0;j<result[i].covers.length;j++){
									str +='<a class="fancybox'+randomNum+'" href="'+result[i].covers[j]+'"data-fancybox-group="gallery" title="">';
									str +='<img style="" src="'+result[i].covers[j]+'@w_120,q_60?='+randomNum+'" alt="" /></a>';
								}
								for(var j = 0;j<result[i].gifName.length;j++){
									str +='<a class="fancybox'+randomNum+'" href="'+result[i].gifName[j]+'"data-fancybox-group="gallery" title="">';
									str +='<img style="" src="'+result[i].gifName[j]+'?='+randomNum+'" alt="" /></a>';
								}
								str += '</td><td><a href="/view/index-index#/ordinary?slectNm='+result[i].nickname+'" target="_blank">'+result[i].nickname+'</a></td>';
								if(result[i].gender == '1'){
									str +='<td>男</td>';
								}else if(result[i].gender == '2'){
									str +='<td>女</td>';
								}else{
									str +='<td>未知</td>';
								}
								str += '<td>'+result[i].sign+'</td>';
								str += '<td>'+result[i].birthday+'</td>';
								str += '<td>'+result[i].lastActive+'</td>';
								str += '<td>'+result[i].createTime+'</td>';
								str += '<td><a href="/view/index-index#/ordinary?slectIp='+result[i].ip+'" target="_blank">'+result[i].ip+'</a></td>';
								str += '<td class="aRemark">'+result[i].remark+'</td>';
								str += '<td>'+result[i].smRiskLevel+'</td>';
								if(result[i].status == '0'){
									str +='<td class="userStau">屏蔽</td>';
								}else if(result[i].status == '1'){
									str +='<td class="userStau">正常</td>';
								}else if(result[i].status == '2'){
									str +='<td  class="userStau">沉底</td>';
								}
								var idslen = result[i].tagIds.length;
								if(idslen>0){
									str += '<td class="userTag">';
									for(var j = 0;j<idslen;j++){
										var onum = result[i].tagIds[j];
										var num = Math.abs(onum-rlens);
										str += '<span>'+results[num].tagName+'</span>|';
									}
									str += '</td>';
								}else{
									str +='<td class="userTag"></td>';
								}
								if(result[i].intent == '灵魂社交'){
									str +='<td style="color:red;">'+result[i].intent+'</td>';
								}else{
									str +='<td>'+result[i].intent+'</td>';
								}
								if(result[i].os == '1'){
									str +='<td>Ios</td>';
								}else if(result[i].os == '2'){
									str +='<td>Android</td>';
								}
								str +='<td>';
								// str += '<button class="btn btn-warning tags" ids="'+result[i].tagIds+'">标签</button>';
								if(result[i].status == '0'){
									str +='<button class="btn btn-success relieve">解封</button>';
									str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
									str +='<button class="btn btn-danger sink">沉底</button>';
									str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
								}else if(result[i].status == '1'){
									str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
									str +='<button class="btn btn-danger shields">屏蔽</button>';
									str +='<button class="btn btn-danger sink">沉底</button>';
									str +='<button class="btn btn-success fishing" style="display:none;">海捞</button>';
								}else if(result[i].status == '2'){
									str +='<button class="btn btn-success relieve" style="display:none;">解封</button>';
									str +='<button class="btn btn-danger shields" style="display:none;">屏蔽</button>';
									str +='<button class="btn btn-danger sink" style="display:none;">沉底</button>';
									str +='<button class="btn btn-success fishing">海捞</button>';
								}
								if(result[i].lockNew == '1' || miss =='1'){
									str +='<button class="btn btn-success through zcthrough">通过</button>';
									// str +='<div class="through">通过</div>';
								}
								// else{
								// 	str +='<button class="btn btn-success through kfthrough" style="display:none;"></button>';
								// }
								if(result[i].lock == '1'){
									str +='<button class="btn btn-default locked" style="display:none;">锁定</button>';
									str +='<button class="btn btn-warning unlocked">解锁</button>';
								}else if(result[i].lock=='0'){
									str +='<button class="btn btn-default locked">锁定</button>';
									str +='<button class="btn btn-warning unlocked" style="display:none;">解锁</button>';
								}
								if(result[i].highFaceScore == '0'){
									str +='<button class="btn btn-info huyue">胡月</button>';
								}
								if(result[i].highUgc == '0'){
									str +='<button class="btn btn-info paoge">森哥</button>';
								}
								if(result[i].zhaozhao=='0'){
									str +='<button class="btn btn-info zhaozhao">找找</button>';
									str +='<button class="btn btn-warning fanzhao" style="display:none;">反找</button>';
								}else if(result[i].zhaozhao=='1'){
									str +='<button class="btn btn-info zhaozhao" style="display:none;">找找</button>';
									str +='<button class="btn btn-warning fanzhao">反找</button>';
								}
								str +='<button class="btn btn-warning exchange">替图</button>';
								if(remark == '机器操作:(注册)数美图片检测未通过'){
									str +='<button class="btn btn-success shumeiTr">已处理</button>';
								}else{
									str +='';
								}
								str +='</td>';
								str +='<td><a href="/view/user-journalList?type=1?id='+result[i].id+'" target="_blank"><button class="btn btn-primary journal">查看日志</button></a>';
								str += '<a href="/view/user-userjournal?accountId='+result[i].id+'" target="_blank"><button class="btn btn-success seejournal">用户修改日志</button></a>';
								str +='<a href="/view/user-userMsg?accountId='+result[i].id+'" target="_blank"><button class="btn btn-primary details">查看详情</button></a>';
								str +='<a href="/view/user-userTag?accountId='+result[i].id+'" target="_blank"><button class="btn btn-warning details">打标签</button></a>';
								
								str +='</td></tr>';
							}
						}else{
							str = '<tr><td colSpan = "19">暂时没有数据</td></tr>';
						}
						$('#tbody').html(str);
						if(kfpd=='1'){
							if(len>0){
										$('.kf').hide();
								for(var j=0;j<len;j++){
									if(result[j].status == '1' && result[j].lockNew == '1'){
										// $('.kf').css('display','none');
										// $('.kf'+j+'').css('display','block');
										$('.kf'+j+'').show();
										$('.kf'+j+'').find('.kfthrough').css('display','block');
									}else{
										$('.kf'+j+'').css('display','none');
									}
								}
							}
						}
						exHead();
					}else{

					}	        
		        }
		    })
		// },0)	

		// $('#loading').ajaxStop(function(){
	 //        $(this).hide();
	 //        $('#tbody').empty();
		// 	$('#tbody').html(str);
		// 	js_file();
		// 	exHead();
	 //    })	
	}
	
	placeLoad();

	// 用户标签列表
	function tagList(){
		$.ajax({
	        url:conf.host+'/New/AccountTag/accountTagList',
	        type:"POST",
	        dataType:"json",
	        async: false,
	        data:{
	        	
	        },
	        success:function(data){
	        	if(data && data.code == '200'){
	        		return results = data.data;
	        	}
	        }
        })
	}
	var newPid = [];
	var blackPid = [];
	
	var tagStr = '';
	for(var i=rlens-1;i>=0;i--){
		if(results[i].pid == '0'){
			newPid.push(results[i].id);
		}
	}
	var tagLen = newPid.length;
	for(var i =tagLen-1;i>=0;i--){
		blackPid.push(newPid[i]);
	}
	for(var i=0;i<tagLen;i++){
		var num = newPid[i];
		var snum = blackPid[i];
		var typenum = Math.abs(snum -rlens);
		tagStr += '<div class="form-group">';
		tagStr += '<label class="control-label col-lg-2 col-md-2 col-sm-2 col-xs-2">'+results[typenum].tagName+':</label>';
		tagStr += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">';
		for(var j=0;j<rlens;j++){
			if(results[j].pid == snum){
				tagStr += '<label style="min-width:76px;" class="mt-checkbox">';
				tagStr += '<input type="checkbox" class="inlineCheckbox inlineCheckbox'+results[j].id+'" value="'+results[j].id+'">'+results[j].tagName+'<span></span></label>';
			}
		}
		tagStr += '</div></div>';
	}
	$('#tagList').html(tagStr);

	function Usertag(accountId,tagIds,arr,obj){
		$.ajax({
	        url:conf.host+'/New/AccountTag/accountTag',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	tagIds:tagIds
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.tagslog').fadeOut('normal');
					var idsLen = arr.length;
					var str ='';
					if(idsLen>0){
						for(var i=0;i<idsLen;i++){
							var onum = arr[i];
							var num = Math.abs(onum-rlens);
							str += '<span>'+results[num].tagName+'</span>|';
						}
						obj.attr('ids',arr);
						obj.parent().parent().find('.userTag').html(str);

					}					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	
	// 用户所在地显示
	function placeLoad(){
		setTimeout(function(){
			var len = $('.telNum').length;
			for(var i = 0;i<len;i++){
				// console.log($('.telNum').eq(i).attr("value"));
				var value = $('.telNum').eq(i).attr("value");
				place(value,i);
			}

		},3500)
	}
	/*
		以下是操作的相关方法
	*/
	// 替换头像
	// $(document).on("click", "tr td div .sink",function(event){
	// 		console.log(111);
	// 	})

	
	function exHead(){
		$('.exchange').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			// console.log(accountId);
			var r=confirm("确认要替换头像吗？");
			if(r==true){
		    	exchange(accountId);
		    }
			  
		})
		// 数美已处理
		$('.shumeiTr').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			console.log(accountId);
			var r=confirm("确认进行数美已处理操作吗？");
			if(r==true){
				module.batchRemark(accountId,'','','','',1);
		    }
		})
		
		$('.sink').on('click',function(){
		 	var that = $(this);
			module.sink(that);
			
		 	// module.sink(that);
		})
		$('.shields').on('click',function(){
			var that = $(this);
			module.shields(that);
			
		})
		// 解封
		$('.relieve').on('click',function(){
			var that = $(this);
			module.relieve(that);
		})
		// 海底捞
		$('.fishing').on('click',function(){
			var that = $(this);
			module.fishing(that);
		})
		// 胡月
		$('.huyue').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var obj = $(this);
			var r=confirm("确认对选中的用户胡月吗？");
			if(r==true){
		    	mixed(accountId,1,obj);
		    }
		})
		// 炮哥
		$('.paoge').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var obj = $(this);
			var r=confirm("确认对选中的用户炮哥吗？");
			if(r==true){
		    	mixed(accountId,2,obj);
		    }
		})
		// 找找
		$('.zhaozhao').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var obj = $(this);
			var r=confirm("确认对选中的用户找找吗？");
			if(r==true){
		    	zhaozhao(accountId,1,obj);
		    }
		})
		// 反找
		$('.fanzhao').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var obj = $(this);
			var r=confirm("确认对选中的用户反找找操作吗？");
			if(r==true){
		    	zhaozhao(accountId,2,obj);
		    }
		})
		// 通过
		$('.through').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var that = $(this);
			// var r=confirm("确认对选中的用户通过吗？");
			// if(r==true){
		    	through(accountId,that);
		    // }
		})
		// 锁定
		$('.locked').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var r=confirm("确认对选中的用户锁定吗？");
			var obj = $(this);
			if(r==true){
		    	locked(accountId,1,0,obj);
		    }
		})
		// 解锁
		$('.unlocked').on('click',function(){
			var accountId = $(this).parent().parent().find('input').val();
			var r=confirm("确认对该锁定用户解锁吗？");
			var obj = $(this);
			if(r==true){
		    	locked(accountId,2,1,obj);
		    }
		})

		// 打标签
		$('.tags').on('click',function(){
			// $('.inlineCheckbox').prop("checked",true);
			$('.tagslog').fadeIn('normal');
			$('.mt-checkbox input:checkbox').prop("checked",false);
			var flg = $(this).attr('ids')
			if(flg){
				console.log(11111);
				var ids = $(this).attr('ids').split(",");
				var idsLen = ids.length;
				if(idsLen > 0){
					for(var i=0; i<idsLen; i++){
						$('.inlineCheckbox'+ids[i]+'').prop("checked",true);
					}
				}
			}


			var artId = $(this).parent().parent().find('input').eq(0).attr('value');
			var obj = $(this);
			$('#checkBtn').unbind('click').bind('click',function(){
				var checkArr = [];
				 $.each($('.mt-checkbox input:checkbox'),function(){
		            if(this.checked){
		            	checkArr.push($(this).val());
		            }
		        });
				var checkArrNew = checkArr.join();
				Usertag(artId,checkArrNew,checkArr,obj);
			})
		})

		$('.fancybox'+randomNum+'').fancybox({
		    'type':'image',
		    helpers:  {
		        
		    }
		});
	}

	function exchange(accountId){
		$.ajax({
	        url:conf.host+'/New/Account/coverReset',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.changeImg'+accountId+' ').find('img').prop('src','http://jimu-cover-dev1.bj.bcebos.com/4_iiiiii');
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	function mixed(accountId,type,obj){
		$.ajax({
	        url:conf.host+'/New/HQController/markAsHQ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	action:1,
	        	accountId:accountId,
	        	type:type
	        },
	        success:function(data){
				if(data.code == '200'){
					obj.remove();
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 找找
	function zhaozhao(accountId,action,obj){
		$.ajax({
	        url:conf.host+'/New/HQController/markAsZZ',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	action:action
	        },
	        success:function(data){
				if(data.code == '200'){
					if(action=='1'){
						obj.parent().find('.zhaozhao').css('display','none');
						obj.parent().find('.fanzhao').css('display','block');
					}else if(action=='2'){
						obj.parent().find('.fanzhao').css('display','none');
						obj.parent().find('.zhaozhao').css('display','block');
					}
					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
	// 通过
	function through(accountId,obj){
		$.ajax({
	        url:conf.host+'/New/Account/agree',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId
	        },
	        success:function(data){
				if(data.code == '200'){
					// obj.parent().find('.through').css("display","none");
					obj.parent().find('.through').remove();
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// 锁定功能
	function locked(accountId,lock,status,obj){
		$.ajax({
	        url:conf.host+'/New/Account/advancedChangeStatus',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	accountId:accountId,
	        	lock:lock,
	        	status:status
	        },
	        success:function(data){
				if(data.code == '200'){
					if(lock=='1'){
						obj.parent().find('.locked').css("display","none");
						obj.parent().find('.unlocked').css("display","block");
					}else if(lock=='2'){
						obj.parent().find('.locked').css("display","block");
						obj.parent().find('.unlocked').css("display","none");
					}
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	// 目的图标搜索
	setTimeout(function(){
		purposeList(1);
	},3000)
	function purposeList(pageNum){
    	$.ajax({
	        url:conf.host+'/New/Intent/iclist',
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
						str += '<option value="">目的选择</option>';
					for(var i =0;i<typeLen;i++){
						str += '<optgroup class="myOptgroup" label="'+dataD[i].name+'">';
						if(dataD[i].intents){
							var len = dataD[i].intents.length;
							for(var j = 0;j < len;j++){
								str +='<option value="'+dataD[i].intents[j].id+'">'+dataD[i].intents[j].name+'</option>';
							}
						}
						str +='</optgroup>';				
					}	
					$('#objectList').empty();
					$('#objectList').html(str);
					
				}else{

				}	        
	        }
	    })
    }
    

})









