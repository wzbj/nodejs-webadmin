$(function () {
    var loading = '<tr id="loading"><td colspan="9"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
    var page = 1;
    adlist(page);
    setTimeout(function () {
        Page({
            num: allPage,					//页码数
            startnum: page,				//指定页码
            elem: $('#page1'),		//指定的元素
            callback: function (n) {	//回调函数
                page = n;
                window.scrollTo(0, 0);
                $('#tbody').html(loading);
                adlist(page);
            }
        });

    }, 3000)
    $('.refresh').on('click', function () {
        adlist(page);
        setTimeout(function () {
            Page({
                num: allPage,					//页码数
                startnum: page,				//指定页码
                elem: $('#page1'),		//指定的元素
                callback: function (n) {	//回调函数
                    page = n;
                    window.scrollTo(0, 0);
                    $('#tbody').html(loading);
                    adlist(page);
                }
            });

        }, 3000)
    })

    function loadFn() {
        // 上架
        $('.onShelf').on('click', function () {
            var that = $(this);
            var id = that.parent().parent().attr('value');
            var formData = new FormData();
            formData.append("id", id);
            formData.append("status", 1);
            formData.append("type", 2);
            advertEdit(formData, 1, that);
        })
        // 下架
        $('.offShelf').on('click', function () {
            var that = $(this);
            var id = that.parent().parent().attr('value');
            var formData = new FormData();
            formData.append("id", id);
            formData.append("status", 2);
            formData.append("type", 2);
            advertEdit(formData, 2, that);
        })
        //删除轮播
        $('.delete').on('click', function () {
            var that = $(this);
            var id = that.parent().parent().attr('value');
            var formData = new FormData();
            formData.append("id", id);
            if(confirm('确定添加吗？')){
                $.ajax({
                    url: '/New/MusicBanner/delBanner',
                    type: "POST",
                    dataType: "json",
                    async: true,
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        if (data.code == '200') {
                            adlist(1);
                        }else{
                            
                        }
                    }
                })
            }else{
                alert("添加失败");
            }
        })
        // 添加轮播
        $('#addAdvert').on('click', function () {
            $('.adddialog h4 span').html("添加");
            $('.fileinput-filename').html('');
            $('.fileinput-filename').append('<i class="fa fa-file"></i>请选择文件')
            $('#imghead5').css('display', 'none');
            $('#loading').css('display', 'none');
            $('#themeName').val('');
            $('#detailsTitle').val('');
            $('#detailsDescribe').val('');            
            // $('.md-radio input').removeAttr("checked");
            $('.adddialog').fadeIn('normal');
            $('#advertBtn').unbind('click').bind('click', function () {
                $('#loading').css('display', 'block');
                var id = '';
                var name = $('#themeName').val();
                var topicAlias = $('#detailsTitle').val();
                var topicDesc = $('#detailsDescribe').val();
                var status = $('input[name="radio"]:checked').val();
                var img = document.getElementById("gameImg").files[0];
                $.ajax({
                    url: "/New/MusicBanner/getCoverToken",
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
                                name && formData.append("name", name);
                                topicAlias && formData.append("topicAlias", topicAlias);
                                topicDesc && formData.append("topicDesc", topicDesc);
                                status && formData.append("status", status);
                                imgFile && formData.append("img", imgFile);
                                advertEdit(formData, '', '');
                            }
                        }
                        var subscription = observable2.subscribe(observer2); //上传开始
                    }
                })
            })
        })
        // 编辑轮播
        $('.eidtAcont').on('click', function () {
            $('#loading').css('display', 'none')
            $('.adddialog h4 span').html("编辑");
            var that = $(this);
            var id = that.parent().parent().attr("value");
            console.log(id);
            var img = that.parent().parent().find('img').attr("src");
            $('#imghead5').attr("src", img).css("display", "block");

            var status = that.parent().attr("status");
            var themeName = that.parent().parent().find('td').eq(2).html();
            $('#themeName').val(themeName);
            var detailsTitle = that.parent().parent().find('td').eq(3).html();
            $('#detailsTitle').val(detailsTitle);
            var detailsDescribe = that.parent().parent().find('td').eq(4).html();
            $('#detailsDescribe').val(detailsDescribe);

            if (status == '1') {
                $('#checkbox3_3').prop('checked', true);
            } else if (status == '2') {
                $('#checkbox3_4').prop('checked', true);
            }
            $('.adddialog').fadeIn('normal');
            $('#advertBtn').unbind('click').bind('click', function () {
                $('#loading').css('display', 'block')
                var name = $('#themeName').val();
                var topicAlias = $('#detailsTitle').val();
                var topicDesc = $('#detailsDescribe').val();
                var status = $('input[name="radio"]:checked').val();
                
                var pciStatus = $('#imghead5').attr('src').indexOf('http://');
				if(pciStatus<0){//图片更改
					// $('#loading').css('display', 'block');
					var img = document.getElementById("gameImg").files[0];
					$.ajax({
                        url: "/New/MusicBanner/getCoverToken",
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
                                    name && formData.append("name", name);
                                    topicAlias && formData.append("topicAlias", topicAlias);
                                    topicDesc && formData.append("topicDesc", topicDesc);
                                    status && formData.append("status", status);
                                    imgFile && formData.append("img", imgFile);
                                    advertEdit(formData, '', '');
                                }
                            }
                            var subscription = observable2.subscribe(observer2); //上传开始
                        }
                    })
                }else{//图片没有修改
                    // $('#loading').css('display', 'block');
                    var img = that.parent().parent().find('img').attr("src");
                    var imgFile = img.substring(img.lastIndexOf("/")+1);
					var formData = new FormData();
                    id && formData.append("id", id);
                    name && formData.append("name", name);
                    topicAlias && formData.append("topicAlias", topicAlias);
                    topicDesc && formData.append("topicDesc", topicDesc);
                    status && formData.append("status", status);
                    img && formData.append("img", imgFile);
                    advertEdit(formData, '', '');
                }
            })
        })
    }


    function adlist(pageNum) {
        $.ajax({
            url: '/New/MusicBanner/bannerList',
            type: "POST",
            dataType: "json",
            async: true,
            data: {
                pageNum: pageNum,
                pageSize: 50
            },
            success: function (data) {
                if (data.code == '200') {
                    var dataD = data.data;
                    var str = '';
                    allPage = Math.ceil((dataD.total_num) / 50);
                    var result = dataD.result;
                    var len = result.length;
                    if (len > 0) {
                        for (var i = 0; i < len; i++) {
                            str += '<tr value="' + result[i].id + '"><td>' + result[i].id + '</td>';
                            str += '<td><img src="' + result[i].img + '" style="width:100%;" /></td>';
                            str += '<td>' + result[i].name + '</td>';
                            str += '<td>' + result[i].topicAlias + '</td>';
                            str += '<td>' + result[i].topicDesc + '</td>';
                            str += '<td>' + result[i].number + '</td>';
                            if (result[i].status == '1') {
                                str += '<td>已上架</td>';
                            } else if (result[i].status == '2') {
                                str += '<td>已下架</td>';
                            }
                            str += '<td status="' + result[i].status + '" >';
                            if (result[i].status == '1') {
                                str += '<button class="btn btn-success onShelf" style="display:none;">上架</button><button class="btn btn-danger offShelf">下架</button>';
                            } else if (result[i].status == '2') {
                                str += '<button class="btn btn-success onShelf">上架</button><button class="btn btn-danger offShelf" style="display:none;">下架</button>';
                            }
                            str += '<button class="btn btn-warning eidtAcont">编辑</button>';
                            str += '<a href="#/bannerDetail?'+ result[i].id +'"><button class="btn btn-info">查看详情</button></a>';
                            str += '<a href="#/addMusic?'+ result[i].id +'"><button class="btn btn-success">添加音乐</button></a>';
                            str += '<button class="btn btn-danger delete">删除</button>';
                        }
                        // $('.pageTest').css('display', 'block');
                    } else {
                        str = '<tr><td colSpan = "10">暂时没有数据</td></tr>';
                        // $('.pageTest').css('display', 'none');
                    }
                    $('#tbody').empty();
                    $('#tbody').html(str);
                    loadFn();
                } else {

                }
            }
        })
    }

    // 编辑接口
    function advertEdit(formData, status, obj) {
        $.ajax({
            url: '/New/MusicBanner/addBanner',
            type: "POST",
            dataType: "json",
            async: true,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.code == '200') {
                    $('.adddialog').fadeOut('normal');
                    if (status == '2') {//下架
                        obj.css('display', 'none');
                        obj.parent().find('.onShelf').css('display', 'inline-block');
                        obj.parent().parent().find('td').eq(6).html("已下架");
                    } else if (status == '1') {//上架
                        obj.css('display', 'none');
                        obj.parent().find('.offShelf').css('display', 'inline-block');
                        obj.parent().parent().find('td').eq(6).html("已上架");
                    } else {
                        adlist(1);
                    }
                } else {
                    
                }
            }
        })
    }

})