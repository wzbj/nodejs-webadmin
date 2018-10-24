$(function(){
    // var allPage = null;
	var randomNum = Math.floor(Math.random()*100)+480;
	var currentAjax;
	var loading = '<tr id="loading"><td colspan="9"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	var keyWords = '',
		page =1;

	//列表接口
	getList('',page);
	
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
		getList(keyWords,page);
	})

	// 刷新
	$('.refresh').on('click',function(){
		$('#tbody').html(loading);
		getList(keyWords,page);
	})

	function getList(phoneNumber,page){
		if(currentAjax){
			currentAjax.abort();
		}	
		currentAjax = $.ajax({
	        url:'/New/CheckMusician/checkMusicianList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	phoneNumber:phoneNumber,
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
					console.log(dataD);
					var len = result.length;
					// $('.pageTest').empty();
					if(len>0){
						for(var i = 0; i < len;i++){
							str += '<tr class="tr" value="' + result[i].id + '"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';;
							str += '<td>'+result[i].uuid+'</td>';
							str += '<td>'+result[i].account+'</td>';
							str +='<td><a class="fancybox'+randomNum+'" href="'+result[i].img+'"data-fancybox-group="gallery" title="">';
							str +='<img style="width:100px;" src="'+result[i].img+'" alt="" /></a></td>';
							str +='<td>'+result[i].stageName+'</td>';
							str +='<td>'+result[i].real_name+'</td>';
							str +='<td>'+result[i].idCard+'</td>';
							str +='<td>'+result[i].wechat+'</td>';
							if(result[i].certificationStatus=='1'){
								str +='<td class="certificationStatus">已通过</td>';
							}else if(result[i].certificationStatus=='2'){
								str +='<td class="certificationStatus">未通过</td>';
							}else if(result[i].certificationStatus=='3'){
								str +='<td class="certificationStatus">审核中</td>';
							}
							str +='<td>';
								if(result[i].certificationStatus == '3'){
									str +='<button class="btn btn-success adopt">通过</button>';
									str +='<button class="btn btn-danger refuse">拒绝</button>';
									str +='<button class="btn btn-warning eidtAcont">编辑</button>';
								}else if(result[i].certificationStatus == '2'){
									// str +='<button class="btn btn-success adopt">通过</button>';
									str +='<button class="btn btn-warning eidtAcont">编辑</button>';
								}else if(result[i].certificationStatus == '1'){
									// str +='<button class="btn btn-danger adopt">拒绝</button>';
									str +='<button class="btn btn-warning eidtAcont">编辑</button>';
								}
							str +='</td></tr>';
						}

						Page({
							num:allPage,					//页码数
							startnum:page,				//指定页码
							elem:$('#page1'),		//指定的元素
							callback:function(n){	//回调函数
								page = n;
								window.scrollTo(0,0);
								$('#tbody').html(loading);
								$('#currentPage').html(page);
								getList(keyWords,page);
							}
						});
					}else{
						str = '<tr><td colSpan = "10">暂时没有数据</td></tr>';
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

	function loadFn(){
		// 通过操作
		$('.adopt').on('click',function(){
			// var id = $(this).parent().parent().find('td').eq(1).text();
			var id = $(this).parent().parent().find('input').val();
			var obj = $(this);
			var r = confirm("确认进行通过操作吗？");
			var objData = {
				id:id,
				certificationStatus:1
			};
			if(r==true){
				checkMusicianEdit(objData,obj);
			}
		})

		// 拒绝操作
		$('.refuse').on('click',function(){
			var obj = $(this);
			var id = $(this).parent().parent().find('input').val();
			var r = confirm("确认进行拒绝操作吗？");
			var objData = {
				id:id,
				certificationStatus:2
			};
			if(r==true){
				checkMusicianEdit(objData,obj);
			}
		})

		// 添加音乐人
        $('#addAdvert').on('click', function () {
            $('.adddialog h4 span').html("添加");
            $('.fileinput-filename').html('');
            $('.fileinput-filename').append('<i class="fa fa-file"></i>请选择文件')
            $('#imghead5').css('display', 'none');
            $('#loading').css('display', 'none');
            $('#photoNumber').val('');
            $('#stageName').val('');
            $('#name').val('');
            $('#wechat').val('');            
            $('#idCard').val('');            
            // $('.md-radio input').removeAttr("checked");
            $('.adddialog').fadeIn('normal');
            $('#advertBtn').unbind('click').bind('click', function () {
                $('#loading').css('display', 'block');
                var id = '';
                var photoNumber = $('#photoNumber').val();
                var stageName = $('#stageName').val();
                var name = $('#name').val();
                var wechat = $('#wechat').val();
                var idCard = $('#idCard').val();
                var img = document.getElementById("gameImg").files[0];
                $.ajax({
                    url: "/New/CheckMusician/getCoverToken",
                    dataType: 'json',
                    async:true,
                    success: function (res) {
                        console.log(res);
                        var token = res.uptoken;
                        console.log(token);
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
                                console.log(res);
                                var imgFile = res.key;

                                var formData = new FormData();
                                id && formData.append("id", id);
                                photoNumber && formData.append("photoNumber", photoNumber);
                                stageName && formData.append("stageName", stageName);
                                name && formData.append("name", name);
                                wechat && formData.append("wechat", wechat);
                                idCard && formData.append("idCard", idCard);
                                imgFile && formData.append("img", imgFile);
                                musicianEdit(formData);
                            }
                        }
                        var subscription = observable2.subscribe(observer2); //上传开始
                    }
                })
            })
        })

		//编辑音乐人
		$('.eidtAcont').on('click', function () {
            $('#loading').css('display', 'none')
            $('.adddialog h4 span').html("编辑");
            var that = $(this);
            var id = that.parent().parent().attr("value");
            console.log(id);
            var img = that.parent().parent().find('img').attr("src");
            $('#imghead5').attr("src", img).css("display", "block");

            var photoNumber = that.parent().parent().find('td').eq(2).html();
            $('#photoNumber').val(photoNumber);
            var stageName = that.parent().parent().find('td').eq(4).html();
            $('#stageName').val(stageName);
            var name = that.parent().parent().find('td').eq(5).html();
			$('#name').val(name);
			var wechat = that.parent().parent().find('td').eq(7).html();
			$('#wechat').val(wechat);
			var idCard = that.parent().parent().find('td').eq(6).html();
			$('#idCard').val(idCard);

            $('.adddialog').fadeIn('normal');
            $('#advertBtn').unbind('click').bind('click', function () {
                $('#loading').css('display', 'block')
                var photoNumber = $('#photoNumber').val();
                var stageName = $('#stageName').val();
                var name = $('#name').val();
                var wechat = $('#wechat').val();
                var idCard = $('#idCard').val();
                
                var pciStatus = $('#imghead5').attr('src').indexOf('http://');
				if(pciStatus<0){//图片更改
					var img = document.getElementById("gameImg").files[0];
					$.ajax({
                        url: "/New/CheckMusician/getCoverToken",
                        dataType: 'json',
                        async:true,
                        success: function (res) {
                            console.log(res);
                            var token = res.uptoken;
                            console.log(token);
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
									var imgFile = res.key;
									
                                    var formData = new FormData();
									id && formData.append("id", id);
									photoNumber && formData.append("photoNumber", photoNumber);
									stageName && formData.append("stageName", stageName);
									name && formData.append("name", name);
									wechat && formData.append("wechat", wechat);
									idCard && formData.append("idCard", idCard);
									imgFile && formData.append("img", imgFile);
									musicianEdit(formData);
                                }
                            }
                            var subscription = observable2.subscribe(observer2); //上传开始
                        }
                    })
                }else{//图片没有修改
					var img = that.parent().parent().find('img').attr("src");
					var imgFile = img.substring(img.lastIndexOf("/")+1);
					var formData = new FormData();
					id && formData.append("id", id);
					photoNumber && formData.append("photoNumber", photoNumber);
					stageName && formData.append("stageName", stageName);
					name && formData.append("name", name);
					wechat && formData.append("wechat", wechat);
					idCard && formData.append("idCard", idCard);
					imgFile && formData.append("img", imgFile);
					musicianEdit(formData);
                }
            })
        })
	}

	//音乐人审核
	function checkMusicianEdit(objData,obj){
		$.ajax({
	        url:'/New/CheckMusician/checkMusicianEdit',
	        type:'POST',
	        dataType:'json',
	        data:objData,
	        success:function(data){
	            if( data &&  data.code == '200'){
		        	// 通过操作
		        	if(objData.certificationStatus == '1'){
		        		obj.parent().parent().find('.certificationStatus').text('已通过');
		        		obj.parent().find('.adopt,.refuse').remove();
		        	}else if(objData.certificationStatus == '2'){
		        		obj.parent().parent().find('.certificationStatus').text('未通过');
		        		obj.parent().find('.adopt,.refuse').remove();
		        	}
	            }else{
	            	console.log(data.msg);
	            }
	        }
	    })
	}

	// 编辑接口
    function musicianEdit(formData) {
        $.ajax({
			url: '/New/CheckMusician/editMusician',
            type: "POST",
            dataType: "json",
            async: true,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
				if(data.code == '200') {
					$('.adddialog').fadeOut('normal');
					getList(1);
				}else if(data.code == '400'){
					$('.adddialog').fadeOut('normal');
					$('.numCgdialog .smcontent p').html(data.msg);
					$('.numCgdialog').fadeIn('normal');
					setTimeout(
						function(){
							$('.numCgdialog').fadeOut('normal');
					},800);
				}
            }
        })
    }

	$('.fancybox'+randomNum+'').fancybox({
	    'type':'image',
	    helpers:  {
	        
	    }
	});
})