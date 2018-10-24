$(function () {
    var loc=location.href;
	var n1=loc.length;//地址的总长度
	var n2=loc.indexOf("?");//取得?号的位置
    var id=decodeURI(loc.substr(n2+1, n1-n2));//从?号后面的内容
    
    var loading = '<tr id="loading"><td colspan="11"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
    var keyWords = '',
		categoryId = '',
		language = '',
		status = '',
		page =1;

    //流派列表
    liupaiList();

    getList(keyWords,categoryId,language,status,page);

    // 点击搜索加载列表
	$('#search').on('click',function(){
		$('#page1').empty();
		$('#tbody').html('');
		$('#allPage').html('');
		
        page =1;
        
        keyWords = $('#sxh1').val();
        console.log(keyWords);
		categoryId = $("#slctLiupai option:selected").val();
		language = $("#language option:selected").val();
        status = $('#musicStatu option:selected').val();
        
        $('#tbody').html(loading);
        
		getList(keyWords,categoryId,language,status,page);
		
	})

    $('.refresh').on('click', function () {
        $('#tbody').html(loading);
		getList(keyWords,categoryId,language,status,page);
    })

    function loadFn() {
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

        // 移除
        $('.remove').on('click', function () {
            var that = $(this);
            var musicId = that.parent().parent().attr('value');
            var formData = new FormData();
            formData.append("bannerId", id);
            formData.append("musicIds", musicId);
            if(confirm('确定移除吗？')){
                musicAdd(formData);
            }else{
                alert('移除失败');
            }
        })
        $('#deleteAll').on('click',function(){
            var xboxArr = [];
             $.each($('.xbox input:checkbox'),function(){
                if(this.checked){
                    xboxArr.push($(this).parent().parent().attr('value'));
                }
            });
            var xboxArrNew = xboxArr.join();
            console.log(xboxArrNew);
            var len = xboxArr.length;
            if(len>0){
                var formData = new FormData();
                formData.append("bannerId", id);
                formData.append("musicIds", xboxArrNew);
                if(confirm('确定移除吗？')){
                    musicAdd(formData);
                }else{
                    alert('移除失败');
                }
            }else{
                alert("请至少选择一个用户");
            }
        })
    }
    //列表渲染
    function getList(keyWords,categoryId,language,status,page){
        $.ajax({
            url: '/New/MusicBanner/choiceMusic',
            type: "POST",
            dataType: "json",
            async: true,
            data: {
                keyWords:keyWords,
	        	categoryId:categoryId,
	        	language:language,
	        	status:status,
	        	pageNum:page,
	        	pageSize:10,
                bannerId: id
            },
            success: function (data) {
                console.log(data);
                if (data.code == '200') {
                    var dataD = data.data;
                    var str = '';
                    allPage = Math.ceil((dataD.total_num) / 50);
                    var result = dataD.result;
                    var len = result.length;
                    if (len > 0) {
                        for (var i = 0; i < len; i++) {
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

                            str += '<tr value="' + result[i].id + '"><td class="xbox"><input type="checkbox" value="'+result[i].id+'" /></td>';
                            str += '<td>'+ result[i].id +'</td>';
                            str += '<td><img src="' + result[i].cover + '" style="width:100%;" /></td>';
                            str += '<td>' + result[i].musicName + '</td>';
                            str += '<td class="btn-audio"><audio class="mpaudio" style="width:95%;" src="'+result[i].name+'"  controls="controls"></audio></td>';
                            str += '<td>' + duration + '</td>';
                            str += '<td>' + result[i].author + '</td>';
                            str += '<td>' + result[i].liupai + '</td>';
                            str += '<td>' + result[i].language + '</td>';
                            str += '<td>' + result[i].stageName + '</td>';
                            str += '<td>' + result[i].musicDesc + '</td>';
                            str += '<td><button class="btn btn-danger remove">移除</button></td></tr>';
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
								getList(keyWords,categoryId,language,status,page);
							}
						});
                        // $('.pageTest').css('display', 'block');
                    } else {
                        str = '<tr><td colSpan = "12">暂时没有数据</td></tr>';
                        // $('.pageTest').css('display', 'none');
                    }
                    $('#tbody').html(str);
                    loadFn();
                } else {

                }
            }
        })
    }
    //流派渲染
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
					var optstr = '<option value="">无</option>';
					$('#slctLiupai').empty();
					for(var i=0;i<len;i++){
						optstr +='<option value="'+dataD[i].id+'">'+dataD[i].name+'</option>';						
					}
					$('#slctLiupai').append(optstr);
				}else{

				}	        
	        }
	    })
    }
    //添加接口
    function musicAdd(formData){
        $.ajax({
            url: '/New/MusicBanner/delMusic',
            type: "POST",
            dataType: "json",
            async: true,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.code == '200') {
                    getList(keyWords,categoryId,language,status,1);
                }else{
                    
                }
            }
        })
    }
})