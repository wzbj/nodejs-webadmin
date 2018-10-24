$(function(){
	$('.navbar-nav li.dropdown-fw').eq(14).addClass("open selected").siblings().removeClass("open selected");
    $('.dropdown20 ul.dropdown-menu-fw>li').eq(0).addClass("active").siblings().removeClass("active");
    // var allPage = null;
	var randomNum = Math.floor(Math.random()*100)+450;
	var currentAjax;
	var loading = '<tr id="loading"><td colspan="15"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var keyWords = '',
		categoryId = '',
		language = '',
		verifyStatus = '',
		page =1;

	liupaiList();
	musicianStageList();
	//列表接口
	// getList(keyWords,categoryId,language,verifyStatus);
	getList(keyWords,categoryId,language,verifyStatus,page);
	

	// 点击搜索加载列表
	$('#search').on('click',function(){
		$('#page1').empty();
		$('#tbody').html('');
		$('#allPage').html('');
		
		page =1;
		keyWords = $('#sxh1').val();
		verifyStatus = $("input[type='radio'][name='radio1']:checked").val();
		categoryId = $("#slctLiupai option:selected").val();
		language = $("#language option:selected").val();
		
		$('#tbody').html(loading);
		// $('.pageTest').empty();
		getList(keyWords,categoryId,language,verifyStatus,page);
		
		
	})
	// 刷新
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		getList(keyWords,categoryId,language,verifyStatus,page);
	
	})

 
	function getList(keyWords,categoryId,language,verifyStatus,page){
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/CheckMusician/checkMusicList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	keyWords:keyWords,
	        	categoryId:categoryId,
	        	language:language,
	        	verifyStatus:verifyStatus,
	        	pageNum:page,
	        	pageSize:10
	        },
	        success:function(data){
	        	
				if(data.code == '200'){
					var dataD = data.data;
					var str = '';
					allPage = Math.ceil((dataD.total_num)/10);
					$("#allUser").html(dataD.total_num);
					$('#pageNum').html("10");
					$('#allPage').html(allPage);
					var result = dataD.result;
					var len = result.length;
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							var secondTime = parseInt(result[i].duration);// 秒
                            var minuteTime = 0;// 分
                            var hourTime = 0;// 小时
                            if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
                                //获取分钟，除以60取整数，得到整数分钟
                                minuteTime = parseInt(secondTime / 60);
                                //获取秒数，秒数取佘，得到整数秒数
                                secondTime = parseInt(secondTime % 60);
                                //如果分钟大于60，将分钟转换成小时
                                if(minuteTime > 60) {
                                    //获取小时，获取分钟除以60，得到整数小时
                                    hourTime = parseInt(minuteTime / 60);
                                    //获取小时后取佘的分，获取分钟除以60取佘的分
                                    minuteTime = parseInt(minuteTime % 60);
                                }
                            }
                            if(secondTime >= 0 && secondTime < 10){//秒
                                var duration = "" + '0' + parseInt(secondTime) + "";
                            }else if( secondTime >= 10){
                                var duration = "" + parseInt(secondTime) + "";
                            }
                            
                            if(minuteTime >= 0 && minuteTime < 10) {//分
                                duration = "" + '0' + parseInt(minuteTime) + ":" + duration;
                            }else if( minuteTime >= 10){
                                duration = "" + parseInt(minuteTime) + ":" + duration;
                            }

                            if(hourTime > 0 && hourTime < 10) {//时
                                duration = "" + '0' + parseInt(hourTime) + ":" + duration;
                            }else if( hourTime >= 10){
                                duration = "" + parseInt(hourTime) + ":" + duration;
                            }

							str += '<tr class="tr"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';;
							str += '<td>'+result[i].id+'</td>';
							str += '<td>'+result[i].musicName+'</td>';
							str += '<td>'+result[i].author+'</td>';
							str += '<td class="btn-audio"><audio class="mpaudio" style="width:95%;" src="'+result[i].name+'"  controls="controls"></audio></td>';
							str +='<td><a class="fancybox'+randomNum+'" href="'+result[i].cover+'"data-fancybox-group="gallery" title="">';
							str +='<img style="width:100px;" src="'+result[i].cover+'?imageView2/1/w/120/h/60" alt="" /></a></td>';
							str +='<td>'+duration+'</td>';
							str +='<td>'+result[i].liupai+'</td>';
							str +='<td>'+result[i].language+'</td>';
							str +='<td>'+result[i].musicDesc+'</td>';
							str +='<td>'+result[i].stageName+'</td>';
							str +='<td><input type="text" class="lSort" style="text-align:center;width:90%;" value="'+result[i].hotLevel+'" /></td>';
							if(result[i].verifyStatus=='1'){
								str +='<td class="verifyStatus">已通过</td>';
							}else if(result[i].verifyStatus=='2'){
								str +='<td class="verifyStatus">未通过</td>';
							}else if(result[i].verifyStatus=='3'){
								str +='<td class="verifyStatus">审核中</td>';
							}
							str +='<td class="verifyRemark">'+result[i].verifyRemark+'</td>';
							str +='<td>';
								if(result[i].verifyStatus == '3'){
									str +='<button class="btn btn-success adopt">通过</button>';
									str +='<button class="btn btn-danger refuse">拒绝</button>';
								}else{
									str +='<button class="btn btn-success adopt" style="display:none;">通过</button>';
									str +='<button class="btn btn-danger refuse" style="display:none;">拒绝</button>';
								}
							str +='<button class="btn btn-warning edit">编辑</button>';
							str +='<button class="btn btn-primary delete">删除</button>';
							str +='</td></tr>';
						}
						// $('.pageTest').css('display','block');

						Page({
							num:allPage,					//页码数
							startnum:page,				//指定页码
							elem:$('#page1'),		//指定的元素
							callback:function(n){	//回调函数
								page = n;
								window.scrollTo(0,0);
								$('#tbody').html(loading);
								$('#currentPage').html(page);
								getList(keyWords,categoryId,language,verifyStatus,page);
							}
						});
					}else{
						str = '<tr><td colSpan = "15">暂时没有数据</td></tr>';
						$('.pageTest').css('display','none');
					}
					$('#tbody').html(str);
					// js_file();
					loadFn();
				}else{

				}	        
	        }
	    })
	
	}

	
	function liupaiList(){
		$.ajax({
	        url:'/New/CheckMusician/musicCategory',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var len = dataD.length;
					var optstr = '<option value="">置空</option>';
					var listStr = '';
					$('#slctLiupai').empty();
					$('#liupailog').empty();
					$('#liupaiList').empty();
					for(var i=0;i<len;i++){
						optstr +='<option value="'+dataD[i].name+'" val="'+dataD[i].id+'" >'+dataD[i].name+'</option>';						
						listStr +='<button type="button" class="btn" style="margin-left:5px;">'+dataD[i].name+'</button>'
					}
				
					$('#slctLiupai').append(optstr);
					$('#liupailog').append(optstr);
					$('#liupaiList').append(listStr);
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}

	function musicianStageList(){
		$.ajax({
	        url:'/New/CheckMusician/musicianStageList',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					// console.log(dataD);
					var len = dataD.length;
					var optstr = '';
					for(var i=0;i<len;i++){
						optstr +='<option value="'+dataD[i].stageName+'" val="'+dataD[i].id+'" >'+dataD[i].stageName+'</option>';	
					}
					$('#musicanName').append(optstr);
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}

	// 添加流派
	$('#addLiupai').on('click',function(){
		$("#wordsTxt").val('');
		$('.wordsdialog').fadeIn('normal');
		$('#worksBtn').unbind('click').bind('click',function(){
			var name = $("#wordsTxt").val();
			liupaiEdit(name);
		})
	})

	function liupaiEdit(name){
		$.ajax({
	        url:'/New/CheckMusician/musicCategoryAdd',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	name:name,
	        	status:1
	        },
	        success:function(data){
				if(data.code == '200'){
					liupaiList();
					$('.wordsdialog').fadeOut('normal');

				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}
	

	function loadFn(){
		// 音频播放
		$('.btn-audio').on('click',function(){
			var cindex = $(this).parent().index();
			console.log(cindex);
			 $('.btn-audio').each(function (i) {
                console.log(i);
                var audio = $(this).children('.mpaudio')[0];
                if (i == cindex) {
                    if (audio.paused) { //如果当前是暂停状态
                        audio.play();
                    } else { //当前是播放状态
                        audio.pause();
                        audio.currentTime = 0;
                    }
                } else {
                    if (!audio.paused) { //当前是播放状态
                        audio.pause();
                        audio.currentTime = 0;
                    }
                }

            });
		})

		$('.mpaudio').on('click',function(){
			var cindex = $(this).parent().parent().index();
			console.log(cindex);
			 $('.btn-audio').each(function (i) {
                console.log(i);
                var audio = $(this).children('.mpaudio')[0];
                if (i == cindex) {
                    if (audio.paused) { //如果当前是暂停状态
                       
                        audio.play();
                    } else { //当前是播放状态
                        audio.pause();
                        audio.currentTime = 0;
                    }
                } else {
                    if (!audio.paused) { //当前是播放状态
                        audio.pause();
                        audio.currentTime = 0;
                    }
                }

            });
		})


		// 通过操作
		$('.adopt').on('click',function(){
			var id = $(this).parent().parent().find('td').eq(1).text();
			var obj = $(this);
			var r = confirm("确认进行通过操作吗？");
			var objData = {
				id:id,
				verifyStatus:1
			};
			if(r==true){
				checkMusicEdit(objData,'',obj);
			}
		})

		// 拒绝操作
		$('.refuse').on('click',function(){
			$('#refuseTxt').val('');
			var obj = $(this);
			var id = $(this).parent().parent().find('td').eq(1).text();
			$('.refusedialog').fadeIn('normal');
			$('.refuseBtn').unbind('click').bind('click',function(){
				console.log(1111111);
				var refuseTxt = $('#refuseTxt').val();
				var objData = {
					id:id,
					msg:refuseTxt,
					verifyStatus:2
				};
				checkMusicEdit(objData,'',obj);
			})
		})

		//删除操作
		$('.delete').on('click',function(){
			var id = $(this).parent().parent().find('td').eq(1).text();
			var obj = $(this);
			var r = confirm("确认进行删除操作吗？");
			var objData = {
				id:id,
			};
			if(r==true){
				$.ajax({
					url:'/New/CheckMusician/musicianDel',
					type:'POST',
					dataType:'json',
					data:objData,
					success:function(data){
						if(data.code == '200'){
							getList(1);
						}else{
							alert("删除失败");
						}
					}
				})
			}
		})


		// 置顶顺序排序
		$('.lSort').on('change',function(){
			var id = $(this).parent().parent().find('td').eq(1).text();
			var level = $(this).val();
			var that = $(this);
			var objData = {
				id:id,
				hotLevel:level
			};
			checkMusicEdit(objData,'','');
		})
		// 编辑操作
		$('.edit').on('click',function(){
			$('.editdialog').fadeIn('normal');
			$('#loadinglog').css('display','none');
			var id = $(this).parent().parent().find('td').eq(1).text();
			var obj = $(this);
			var detail = obj.parent().parent().find('td').eq(9).text();
			var musicName = obj.parent().parent().find('td').eq(2).text();
			var musicMan = obj.parent().parent().find('td').eq(3).text();
			$('#detailsDescribe').val(detail);
			$('#musicName').val(musicName);
			$('#musicMan').val(musicMan);
			var imghref = obj.parent().parent().find('td').eq(5).find('a').attr('href');
			$('#imghead5').attr("src", imghref).css("display", "block");
			var liupailog = obj.parent().parent().find('td').eq(7).text();
			var sltlanguage = obj.parent().parent().find('td').eq(8).text();
			var musicanName = obj.parent().parent().find('td').eq(10).text();
			
			$("#liupailog").find("option[value = '"+liupailog+"']").attr("selected","selected");
			$("#sltlanguage").find("option[value = '"+sltlanguage+"']").attr("selected","selected");
			$("#musicanName").find("option[value = '"+musicanName+"']").attr("selected","selected");
			$('#editBtn').unbind('click').bind('click',function(){
				var musicName = $('#musicName').val();
				var musicMan = $('#musicMan').val();
				var detailsDescribe = $('#detailsDescribe').val();
				var liupaiid = $("#liupailog option:selected").attr('val');
				var publisherId = $("#musicanName option:selected").attr('val');
				console.log(publisherId);
				var liupaitxt = $("#liupailog option:selected").val();
				var sltlanguage = $("#sltlanguage option:selected").val();
				var pciStatus = $('#imghead5').attr('src').indexOf('http://');
				if(pciStatus<0){//图片更改
					$('#loadinglog').css('display','block');
					var img = document.getElementById("gameImg").files[0];
					$.ajax({
	                    url: "/New/MusicBanner/getCoverToken",
	                    dataType: 'json',
	                    async:true,
	                    success: function (res) {
	                        // console.log(res);
	                        var token = res.uptoken;
	                        // console.log(token);
	                        var domain = res.domain;
	                        var key = res.uniqueid;
	                        var config = {
	                            useCdnDomain: true,
	                            disableStatisticsReport: false,
	                            retryCount: 6,
	                            region: qiniu.region.z0
	                        };
	                        var putExtra = {
	                            fname: "test",
	                            params: {},
	                            mimeType: null
	                        };
	        
	                        var observable2 = qiniu.upload(img, key, token, putExtra, config);
	        
	                        var observer2 = {
	                            next(res) {
	                                // console.log(res);
	                            },
	                            error(err) {
	                                // console.log(err);
	                            },
	                            complete(res) {
	                                var url =res.key;
	                                console.log(url);
	                                var objData = {
										id:id,
										musicName:musicName,
										author:musicMan,
										musicDesc:detailsDescribe,
										categoryId:liupaiid,
										language:sltlanguage,
										cover:url,
										publisherId:publisherId
									};
									checkMusicEdit(objData,liupaitxt,obj,domain);
	                            }
	                        }
	                        var subscription = observable2.subscribe(observer2); //上传开始
	                    }
	                })

				}else{//图片没有修改
					var objData = {
						id:id,
						musicName:musicName,
						author:musicMan,
						musicDesc:detailsDescribe,
						categoryId:liupaiid,
						language:sltlanguage,
						publisherId:publisherId
					};
					$('#loadinglog').css('display','block');
					checkMusicEdit(objData,liupaitxt,obj);
				}
			})
		})
	}

	// 音乐审核接口
	// var objData ={
	// 	id:7,
	// 	verifyStatus:3
	// }
	// checkMusicEdit(objData,'');
	function checkMusicEdit(objData,liupaitxt,obj,domain){
		$.ajax({
	        url:'/New/CheckMusician/checkMusicEdit',
	        type:'POST',
	        dataType:'json',
	        data:objData,
	        success:function(data){
	            if( data &&  data.code == '200'){
	            	$('.editdialog').fadeOut('normal');
					$('#loadinglog').css('display','none');
					getList(1);
		        	// 通过操作
		        	if(objData.verifyStatus == '1'){
		        		obj.parent().parent().find('.verifyStatus').text('已通过');
		        		obj.parent().find('.adopt,.refuse').remove();
		        	}else if(objData.verifyStatus == '2'){
		        		var msg = objData.msg;
		        		obj.parent().parent().find('.verifyStatus').text('未通过');
		        		obj.parent().parent().find('.verifyRemark').text(msg);
		        		obj.parent().find('.adopt,.refuse').remove();
		        		$('.refusedialog').fadeOut('normal');
		        	}
		        	if(objData.hotLevel){
		        		$('.numCgdialog .smcontent p').html('排序修改成功');
						$('.numCgdialog').fadeIn('normal');
						setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
		        	}
		        	if(objData.musicName && objData.author){
		        		obj.parent().parent().find('td').eq(2).text(objData.musicName);
		        		obj.parent().parent().find('td').eq(3).text(objData.author);
		        		obj.parent().parent().find('td').eq(7).text(liupaitxt);
		        		obj.parent().parent().find('td').eq(8).text(objData.language);
		        		obj.parent().parent().find('td').eq(9).text(objData.musicDesc);
		        		if(objData.cover){
		        			var ahref = domain+'/'+objData.cover;
		        			obj.parent().parent().find('td').eq(5).find('a').attr('href',objData.cover);
		        			var imgsrc = ahref +'?imageView2/1/w/120/h/60';
		        			obj.parent().parent().find('td').eq(5).find('img').attr('src',imgsrc);
		        		}
		        	}
	            }else{
	            	console.log(data.msg);
	            }
	        }
	    });
	
	}

	$('.fancybox'+randomNum+'').fancybox({
	    'type':'image',
	    helpers:  {
	        
	    }
	});

})