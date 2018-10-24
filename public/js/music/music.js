var nickname = sessionStorage.getItem("nickname");
var phoneNumber = sessionStorage.getItem("phoneNumber");
var photo = sessionStorage.getItem("photo");

$(".selfphoto").attr("src",photo);
$(".nickname").html(nickname);

if(!nickname||!phoneNumber||!photo){
    alert('请先进行登录');
    window.location.href="/view/musicUpload-login";
}

var personId,certificationStatus,duration,verifyCode,kaiguan = 1,tijiao = 1;
//个人信息审核
$.ajax({
    url:'/New/Musician/Music/personalStatus',
    type:"POST",
    dataType:"json",
    async: false,
    data: {
        phoneNumber:phoneNumber
    },
    success:function(data){
        // console.log(data);
        if(data.code == '200'){
            var dataD = data.data;
            personId = dataD.id;
            // console.log(personId);
            sessionStorage.setItem("certificationStatus",dataD.certificationStatus);
            certificationStatus = sessionStorage.getItem("certificationStatus");
            if(dataD.certificationStatus == '1' || dataD.certificationStatus == '3'){
                $('.oneStep').hide();
                $('.twoStep').show();
                $(".user").show();
            }else if(dataD.certificationStatus == '2'){
                $('#singer').val(dataD.stageName);
                $('#name').val(dataD.name);
                $('#idCard').val(dataD.idCard);
                $('#weChat').val(dataD.wechat);
                // $('#portrait').attr("src",dataD.img);
            }
            if(dataD.personalStatus == '1'){
                $('#singer').val(dataD.stageName);
                $('#name').val(dataD.name);
                $('#idCard').val(dataD.idCard);
                // $('#portrait').attr("src",dataD.img);
            }else{
                // $('.oneStep').hide();
                // $('.twoStep').show();
            }
        }else{
            $('.msg').html(data.msg);
        }
    },
    error:function(jqXHR, textStatus){
        var json = JSON.parse(jqXHR.responseText);
        $('.msg').html(json.msg);
    }
})

//上传身份证照片
function showPreview(source) {
    var file = source.files[0];
    if (window.FileReader) {
        var fr = new FileReader();
        // console.log(fr);
        var portrait = document.getElementById('portrait');
        fr.onloadend = function (e) {
            portrait.src = e.target.result;
        };
        fr.readAsDataURL(file);
    }
}

//清空提示
$('input').on('focus',function(){
    $('.msg').html('');
})

//列表
$('.touxiang').on('click',function(){
    window.location.href='/view/musicUpload-music_list';
})
$('.logout').on('click',function(){
    $.ajax({
        url:'/New/Partner/PUGC/logout',
        type:"POST",
        dataType:"json",
        async: false,
        success:function(data){
            if(data.code == '200'){
                window.location.href='/view/musicUpload-login';
                sessionStorage.clear();
            }else{
                $('.errMsg').html(data.msg);
            }
        },
        error:function(jqXHR, textStatus){
            var json = JSON.parse(jqXHR.responseText);
            $('.errMsg').html(json.msg);
        }
    })
})

//base64转义
function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

//提交审核
$('.submitBtn').on('click',function(){
    var singer = $.trim($('#singer').val());
    var name = $.trim($('#name').val());
    var weChat = $.trim($('#weChat').val());
    var idCard = $.trim($('#idCard').val());
    // var portrait = document.getElementById('portrait').src;
    var portrait = $('#portrait').attr('src');
    // console.log(portrait);
    var regName =/^[\u4e00-\u9fa5]{2,4}$/;  //真实名字验证
    var regId = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  //身份证验证

    // var formData = new FormData();
    //     photoNumber && formData.append("photoNumber",photoNumber);
    //     singer && formData.append("stageName",singer);
    //     name && formData.append("name",name);
    //     weChat && formData.append("wechat",weChat);
    //     idCard && formData.append("idCard",idCard);
    //     picnameOne && formData.append("img",picnameOne);

    if(singer == ''){
        $(".msg").html("歌手名不能为空");
    }else if(name == ""){
        $(".msg").html("真实姓名不能为空");
    }else if(!regName.test(name)){
        $(".msg").html("请填写真实姓名");
    }else if(idCard == ""){
        $(".msg").html("身份证号码不能为空");
    }else if(!regId.test(idCard)){
        $(".msg").html("身份证号码格式有误");
    }else if(portrait == ""){
        $(".msg").html("身份证照片不能为空");
    }else{
        if(kaiguan == 1){
            //上传图片
            $('.loading').show();
            var picFileOne = dataURLtoFile(portrait, 'cardphoto');
            $.ajax({
                url: "/New/Musician/Music/getCoverToken",
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

                    var observable2 = qiniu.upload(picFileOne, key, token, putExtra, config);

                    var observer2 = {
                        next(res) {
                            // console.log(res);
                        },
                        error(err) {
                            // console.log(err);
                        },
                        complete(res) {
                            // console.log(res);
                            var img = res.key;
                            // console.log(img);
                            $.ajax({
                                url:'/New/Musician/Music/addMusician',
                                type:"POST",
                                dataType:"json",
                                async: false,
                                // data: formData,
                                data:{
                                    id:personId,
                                    photoNumber:phoneNumber,
                                    stageName:singer,
                                    name:name,
                                    wechat:weChat,
                                    idCard:idCard,
                                    img:img
                                },
                                success:function(data){
                                    if(data.code == '200'){
                                        $(".loading").hide();
                                        $(".oneStep").hide();
                                        $(".user").show();
                                        $(".twoStep").show();
                                        window.location.href='/view/musicUpload-music';
                                    }else{
                                        $('.msg').html(data.msg);
                                    }
                                },
                                error:function(jqXHR, textStatus){
                                    var json = JSON.parse(jqXHR.responseText);
                                    $('.msg').html(json.msg);
                                }
                            })
                        }
                    }
                    var subscription = observable2.subscribe(observer2); //上传开始
                }
            })
            kaiguan = 0;
        }
    }
})

//流派
$.ajax({
    url:'/New/Musician/Music/musicliupai',
    type:"POST",
    dataType:"json",
    async: false,
    success:function(data){
        if(data.code == '200'){
            var dataD = data.data;
            var len = dataD.length;
            var str = '';
            for(var i=0;i<len;i++){
                str += '<option value="'+dataD[i].id+'">'+dataD[i].name+'</option>';
            }
            $('#liupai').html(str);
        }else{
            $('.msg').html(data.msg);
        }
    },
    error:function(jqXHR, textStatus){
        var json = JSON.parse(jqXHR.responseText);
        $('.msg').html(json.msg);
    }
})

if(phoneNumber == '8613073736300' || phoneNumber == '8613197636723' || phoneNumber == '8615938726706'){
    //音乐人列表
    $(".musicanList").show();
    $.ajax({
        url:'/New/Musician/Music/musicianList',
        type:"POST",
        dataType:"json",
        async: false,
        success:function(data){
            if(data.code == '200'){
                var dataD = data.data;
                var len = dataD.length;
                var str = '';
                for(var i=0;i<len;i++){
                    str += '<div class="nameCon"><input type="radio" name="radioName" value="'+ dataD[i].id +'">'+ dataD[i].stageName +'</div>';
                }
                $('.musicanName').html(str);
            }else{
                $('.msg').html(data.msg);
            }
        },
        error:function(jqXHR, textStatus){
            var json = JSON.parse(jqXHR.responseText);
            $('.msg').html(json.msg);
        }
    })
}else{
    $(".musicanList").hide();
}

//弹出图片裁剪框
$("#replaceImg").on("click",function () {
    $(".tailoring-container").toggle();
});
//图像上传
function selectImg(file) {
    if (!file.files || !file.files[0]){
        return;
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
        var replaceSrc = evt.target.result;
        //更换cropper的图片
        $('#tailoringImg').cropper('replace', replaceSrc,false);//默认false，适应高度，不失真
    }
    reader.readAsDataURL(file.files[0]);
}
//cropper图片裁剪
$('#tailoringImg').cropper({
    aspectRatio: 1/1,//默认比例
    preview: '.previewImg',//预览视图
    guides: false,  //裁剪框的虚线(九宫格)
    autoCropArea: 1,  //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
    movable: false, //是否允许移动图片
    dragCrop: true,  //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
    movable: true,  //是否允许移动剪裁框
    resizable: true,  //是否允许改变裁剪框的大小
    zoomable: false,  //是否允许缩放图片大小
    mouseWheelZoom: false,  //是否允许通过鼠标滚轮来缩放图片
    touchDragZoom: true,  //是否允许通过触摸移动来缩放图片
    rotatable: true,  //是否允许旋转图片
    crop: function(e) {
        // 输出结果数据裁剪图像。
    }
});
//旋转
$(".cropper-rotate-btn").on("click",function () {
    $('#tailoringImg').cropper("rotate", 45);
});
//复位
$(".cropper-reset-btn").on("click",function () {
    $('#tailoringImg').cropper("reset");
});
//换向
var flagX = true;
$(".cropper-scaleX-btn").on("click",function () {
    if(flagX){
        $('#tailoringImg').cropper("scaleX", -1);
        flagX = false;
    }else{
        $('#tailoringImg').cropper("scaleX", 1);
        flagX = true;
    }
    flagX != flagX;
});
//裁剪后的处理
$("#sureCut").on("click",function () {
    if ($("#tailoringImg").attr("src") == null ){
        return false;
    }else{
        var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
        var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
        $("#finalImg").prop("src",base64url);//显示为图片的形式
        //关闭裁剪框
        closeTailor();
    }
});
//关闭裁剪框
function closeTailor() {
    $(".tailoring-container").toggle();
}

//上传音乐
$(".mp3").change(function(){
    $('.nowpro').css('width',0);
	$('.msg').html('');
    flag = false;
    //获取文件框的第一个文件,因为文件有可能上传多个文件,咱这里是一个文件
    file = document.getElementById("mp3").files[0];
    // console.log(file);

    //文件转化为md5
    var fileReader = new FileReader(),
        // box = document.getElementById('box');
    blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
        fileOne = document.getElementById("mp3").files[0],
        chunkSize = 2097152,
        // read in chunks of 2MB
        chunks = Math.ceil(fileOne.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5();

    fileReader.onload = function (e) {
        // console.log("read chunk nr", currentChunk + 1, "of", chunks);
        spark.appendBinary(e.target.result); // append binary string
        currentChunk++;

        if (currentChunk < chunks) {
            loadNext();
        }
        else {
            // console.log("finished loading");
            // box.innerText = 'MD5 hash:' + spark.end();
            // console.info("computed hash", spark.end()); // compute hash
            verifyCode = spark.end();
            // console.log(verifyCode);
        }
    };

    function loadNext() {
        var start = currentChunk * chunkSize,
            end = start + chunkSize >= fileOne.size ? fileOne.size : start + chunkSize;

        fileReader.readAsBinaryString(blobSlice.call(fileOne, start, end));
    };
    loadNext();
    // Md5结束

    var fileType = file.type.split("/")[0];
    $(".show").html(file.name);
    //获取video对象
    var omusic = document.getElementById("audio");
    // console.log('times:'+img.duration);
    //建一条文件流来读取图片
    var reader = new FileReader();
    // console.log(reader);
    //根据url将文件添加的流中
    reader.readAsDataURL(file);
    //实现onload接口
    reader.onload = function(e) {
        //获取文件在流中url
        url = reader.result;
        //将url赋值给img的src属性
        // console.log(url);
        omusic.src = url;
    };
    //获取音频时长
    omusic.addEventListener("loadedmetadata", function (event) {
        duration = this.duration;
    });
});

//上传作品
$('.uploadBtn').on('click',function(){
    var musicName = $.trim($('#musicName').val());
    var author = $.trim($('#author').val());
    var musican =$.trim($("input[name='radioName']:checked").val());//音乐人选中的值
    // console.log(musican);
    var liupai =$.trim($('#liupai option:selected').val());//流派选中的值
    var yuzhong =$.trim($('#yuzhong option:selected').val());//语种选中的值
    var musicDesc = $.trim($('#musicDesc').val());
    var finalImg = $('#finalImg').attr('src');
    var audio = $('#audio').attr('src');

    var fileName = $('.show').html();
    var index1=fileName.lastIndexOf(".");
    var index2=fileName.length;
    var format=fileName.substring(index1+1,index2);//后缀名

    // var formData = new FormData();
    //     photoNumber && formData.append("photoNumber",photoNumber);
    //     musicName && formData.append("musicName",musicName);
    //     picname && formData.append("cover",picname);
    //     name && formData.append("name",name);
    //     duration && formData.append("duration",duration);
    //     format && formData.append("format",format);
    //     liupai && formData.append("categoryId",liupai);
    //     yuzhong && formData.append("languageId",yuzhong);
    //     author && formData.append("author",author);
    //     musicDesc && formData.append("musicDesc",musicDesc);
    // else if(musicDesc == ""){//音乐详情判断取消
    //     $(".msg").html("音乐详情不能为空");
    // }

    if(certificationStatus == '3' || certificationStatus == 'undefined'){
        $('.msg').html('您的身份正在审核，请等待');
    }else if(musicName == ''){
        $(".msg").html("音乐名称不能为空");
    }else if(author == ""){
        $(".msg").html("作者不能为空");
    }else if(finalImg == ""){
        $(".msg").html("音乐封面不能为空");
    }else if(audio == ""){
        $(".msg").html("音频不能为空");
    }else{
        $('.loading').show();
        $('.msg').html('');
        var picFile = dataURLtoFile(finalImg, 'finalImg');
        //上传图片
        if(tijiao == 1){
            $.ajax({
                url: "/New/Musician/Music/getCoverToken",
                dataType: 'json',
                async:true,
                success: function (res) {
                    // console.log(res);
                    var token = res.uptoken;
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
    
                    var observable2 = qiniu.upload(picFile, key, token, putExtra, config);
    
                    var observer2 = {
                        next(res) {
                            // console.log(res);
                        },
                        error(err) {
                            // console.log(err);
                        },
                        complete(res) {
                            var cover = res.key;
                            // console.log(cover);
                            //上传音频
                            $.ajax({
                                url: "/New/Musician/Music/getUptoken",
                                dataType: 'json',
                                async:true,
                                success: function (res) {
                                    // console.log(res);
                                    var token = res.uptoken;
                                    var domain = res.domain;
                                    var key = res.uniqueid + '.mp3';
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
    
                                    var observable2 = qiniu.upload(file, key, token, putExtra, config);
    
                                    var observer2 = {
                                        next(res) {
                                            // console.log(res);
                                        },
                                        error(err) {
                                            // console.log(err);
                                        },
                                        complete(res) {
                                            var name = res.key;
                                            console.log(name);
                                            // console.log(duration);
                                            $.ajax({
                                                url:'/New/Musician/Music/addWorks',
                                                type:"POST",
                                                dataType:"json",
                                                async: false,
                                                // data: formData,
                                                data:{
                                                    photoNumber:phoneNumber,//手机号
                                                    cover:cover,//作品封面
                                                    musicName:musicName,//音乐名称
                                                    name:name,//音乐文件名
                                                    duration:duration,//音乐时长
                                                    format:format,//音频格式
                                                    publisherId:musican,//上传者id
                                                    categoryId:liupai,//流派id
                                                    language:yuzhong,//语种id
                                                    author:author,//作者
                                                    musicDesc:musicDesc,//音乐详情
                                                    verifyCode:verifyCode,//音乐校验码
                                                },
                                                success:function(data){
                                                    // console.log(data);
                                                    if(data.code == '200'){
                                                        var dataD = data.data;
                                                        // console.log(dataD.certificationStatus);
                                                        // if(dataD.certificationStatus == '2'){
                                                            if(dataD.MusicCount == '0'){
                                                                // 音乐人声明
                                                                $('.loading').hide();
                                                                $(".tipsbox").toggle();
                                                                var t = setInterval(function(){
                                                                    var s = document.getElementById("time");
                                                                    if(s.innerHTML == 0){
                                                                        $(".reverse").css("background","#000");
                                                                        $(".reverse").html("我同意");
                                                                        $(".reverse").attr('id','agree');
                                                                        $('#agree').on('click',function(){
                                                                            window.location.href='/view/musicUpload-music_list';
                                                                        })
                                                                        clearInterval(t);
                                                                    }else{
                                                                        s.innerHTML = s.innerHTML * 1 - 1;
                                                                    }
                                                                },1000)
                                                            }else{
                                                                window.location.href='/view/musicUpload-music_list';
                                                            }
                                                        // }else if(dataD.certificationStatus == '3'){
                                                        //     $('.msg').html('您的身份正在审核，请等待');
                                                        // }else{
                                                        //     $('.msg').html('您的身份未审核通过');
                                                        // }
                                                    }else{
                                                        $('.msg').html(data.msg);
                                                    }
                                                },
                                                error:function(jqXHR, textStatus){
                                                    var json = JSON.parse(jqXHR.responseText);
                                                    $('.msg').html(json.msg);
                                                }
                                            })
                                        }
                                    }
                                    var subscription = observable2.subscribe(observer2); //上传开始
                                }
                            })
                        }
                    }
                    var subscription = observable2.subscribe(observer2); //上传开始
                }
            })
            tijiao = 0;
        }
    }
})


