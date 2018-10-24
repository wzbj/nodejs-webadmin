<DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>用户详细信息</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />

    <link href="/public/css/index/bootstrap.min.css"  rel="stylesheet" type="text/css" />
    <link href="/public/css/index/bootstrap-switch.min.css"  rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <link href="/public/css/common/datatables.min.css" rel="stylesheet" type="text/css" />
    <link href="/public/css/common/datatables.bootstrap.css"  rel="stylesheet" type="text/css" />
    <!-- <link href="/public/css/anchor/bootstrap-datepicker3.min.css"  rel="stylesheet" type="text/css" /> -->
    <!--弹窗轮播开始-->
    <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox.css?v=2.1.2" media="screen" />
    <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox-buttons.css?v=1.0.5" />
    <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox-thumbs.css?v=1.0.7" />
    <!--弹窗轮播结束-->
    <!-- BEGIN THEME GLOBAL STYLES -->
    <link href="/public/css/common/components.min.css"  rel="stylesheet" id="style_components" type="text/css" />
    <link href="/public/css/common/plugins.min.css"  rel="stylesheet" type="text/css" />
    <link href="/public/css/common/mytools.css" rel="stylesheet">
    <!-- END THEME GLOBAL STYLES -->
    <link rel="shortcut icon" href="/public/img/common/favicon.ico" type="image/x-icon" />
</head>
<style type="text/css">
    #zz{
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        z-index: 9999;
    }
    #zz video{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .status{
        margin-top: 4px;
        margin-bottom: 4px;
    }
    .status button{
        display:inline-block;
        width: 30%;
    }
    .ugcphoto{
        width:190px;
        float:left;
        margin-left:4px;
        margin-bottom:4px;
    }
    input{
        display:inline-block;
        width:50px;
        margin-left:10px;
        outline:none;
    }
    .row{
        text-align:center;
    }
</style>
<!-- END HEAD -->
<body class="page-header-fixed page-sidebar-closed-hide-logo">
    <!-- BEGIN CONTAINER -->
    <div class="wrapper">
        <div class="container-fluid">
            <div class="page-content-container">
                <div class="page-content-row">
                    <!-- BEGIN PAGE SIDEBAR -->
                    <!-- END PAGE SIDEBAR -->
                    <div class="page-content-col">
                        <!-- BEGIN PAGE BASE CONTENT -->
                        <div class="row">
                            <div class="col-md-12">
                                <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption font-dark">
                                            <!-- <i class="icon-settings font-dark"></i> -->
                                            <span class="caption-subject bold uppercase">ugc 详情及评论</span>
                                        </div>
                                    </div>
                                    <div class="portlet-body" id="ugcs">
                                        <!-- <div class="row">
                                            <div class="col-md-4">
                                                <img class="ugcphoto" src="http://images.gmugmu.com//41378532764429312_4" alt="">
                                                <div class="ugcphoto">
                                                    <video style="width: 100%;" controls>
                                                        <source src="" type="video/mp4">
                                                    </video>
                                                </div>
                                            </div>
                                            <div class="col-md-2">文本内容</div>
                                            <div class="col-md-1">正常</div>
                                            <div class="col-md-1">
                                                <button class="btn btn-danger">屏蔽该文章</button>
                                            </div>
                                            <div class="col-md-1">热门</div>
                                            <div class="col-md-1">
                                                <button class="btn btn-danger">下热门</button>
                                            </div>
                                            <div class="col-md-1">点赞数：59</div>
                                            <div class="col-md-1">
                                                人工点赞数:<input type="text" value="999">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <p><span>阿达西@17673253599:</span><span>哈哈哈哈</span><button class="btn btn-danger" style="margin-left:10px;">屏蔽</button></p>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 信息提示的弹窗 -->
<div class="smdialog numCgdialog" style="display: none;">
    <div class="portlet-body form smdialogcontent">
        <div class="modal-header modal-headers">
            <div class="dialogclose dialogcloses">
                <img src="/public/img/common/remove-icon-small.png"/>
            </div>
            <h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>信息提示</h4>
        </div>
        <div class="modal-body">
        <!--内容开始-->
            <div class="smcontent">
                <p style="color: red;">信息提示</p>
            </div>
        <!--内容结束-->
        </div>
     </div>
</div>
<!-- video弹窗 -->
<div id="zz">
    <video id="big" src="" controls="" width="600px" height="600px"></video>
</div>  

<!-- BEGIN CORE PLUGINS -->
<script src="/public/js/common/jquery.min.js"  type="text/javascript"></script>
<script src="/public/js/common/bootstrap.min.js"  type="text/javascript"></script>

<!--弹窗轮播开始-->
<script type="text/javascript" src="/public/js/fancybox/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="/public/js/fancybox/jquery.fancybox.js?v=2.1.3"></script>
<script type="text/javascript" src="/public/js/fancybox/jquery.fancybox-thumbs.js?v=1.0.7"></script>
<!--弹窗轮播结束-->
<script type="text/javascript">
    var randnum = Math.floor(Math.random()*100)
    var ls = document.location.href.split('=');
    // var id = ls[2];
    // var type = ls[1].split('?')[0];
    var artId = ls[1];
    // console.log('accountId'+accountId);
    // console.log(artId);
    accountInfo(artId);

    function accountInfo(artId){
        $.ajax({
            url:'/New/UGC/getSingleUgc',
            type:"POST",
            dataType:"json",
            async: true,
            data:{
                artId:artId 
            },
            success:function(data){
                if(data.code == '200'){
                    var dataD = data.data;
                    console.log(dataD);

                    var ugcsLen = dataD.length;
                    var ugcStr = '';
                    // console.log('test'+ugcs[0].replies.length);
                    for(var i = 0;i<ugcsLen;i++){
                        // console.log(ugcs[i].replies.length);
                        ugcStr += '<div class="row"><div class="col-md-4">';
                        for(var j = 0;j<dataD[i].resourcesLists.length;j++){
                            ugcStr +='<a class="fancybox'+randnum+'" href="'+dataD[i].resourcesLists[j].url+'"data-fancybox-group="gallery" title="">';
                            ugcStr +='<img class="ugcphoto" src="'+dataD[i].resourcesLists[j].url+'?imageView2/1/w/100/h/100" alt="" /></a>';
                        }
                        for(var j=0;j<dataD[i].videoLists.length;j++){
                            ugcStr += '<div class="ugcphoto"><video style="width: 100%;" controls>';
                            ugcStr += '<source src="'+ dataD[i].videoLists[j].url +'" type="video/mp4"></video></div>'
                        }
                        ugcStr +='</div><div class="col-md-1">'+ dataD[i].txtContent +'</div>';
                        
                        if(dataD[i].status == '1'){
                            ugcStr += '<div class="articleStaue col-md-1"">正常</div>';
                        }else if(dataD[i].status == '2'){
                            ugcStr += '<div class="articleStaue col-md-1">主人删除</div>';
                        }else if(dataD[i].status == '3'){
                            ugcStr += '<div class="articleStaue col-md-1">管理员删除</div>';
                        }else if(dataD[i].status == '4'){
                            ugcStr += '<div class="articleStaue col-md-1">鉴黄删除</div>';
                        }
                        ugcStr += '<div class="col-md-1" artId="'+dataD[i].id+'">';
                        if(dataD[i].status == '1'){
                            ugcStr += '<button class="btn btn-danger  shieldswen">屏蔽文章</button>';
                            ugcStr += '<button class="btn btn-warning relievewen" style="display:none;">解封文章</button>';
                        }else{
                            ugcStr += '<button class="btn btn-danger  shieldswen" style="display:none;">屏蔽文章</button>';
                            ugcStr += '<button class="btn btn-warning relievewen">解封文章</button>';
                        }
                        ugcStr +='</div>';
                        if(dataD[i].hotTime == '0'){
                            ugcStr += '<div class="hotStaue col-md-1">非热门</div>';
                        }else{
                            ugcStr += '<div class="hotStaue col-md-1">热门</div>';
                        }
                        ugcStr += '<div class="col-md-1" artId="'+dataD[i].id+'">';
                        if(dataD[i].hotTime == '0'){
                            ugcStr += '<button class="btn btn-success upperHot">上热门</button>';
                            ugcStr += '<button class="btn btn-danger lowerHot" style="display:none;">下热门</button>';
                        }else{
                            ugcStr += '<button class="btn btn-success upperHot" style="display:none;">上热门</button>';
                            ugcStr += '<button class="btn btn-danger lowerHot">下热门</button>';
                        }

                        ugcStr += '</div><div class="col-md-1">点赞数：'+ dataD[i].totalSupports +'</div>';
                        ugcStr += '<div class="col-md-1">评论总数：'+ dataD[i].totalComments +'</div>';
                        ugcStr +='<div class="col-md-1" artId="'+dataD[i].id+'">人工点赞数:<input type="text" class="lThumb" value="'+dataD[i].fakeSupportCount+'"></div>';
                        ugcStr +='</div><div class="row">';
                        for(var j=0;j<dataD[i].replies.length;j++){
                            ugcStr += '<p>';
                            ugcStr += '<span class="green" style="color:green;">'+dataD[i].replies[j].uinfo.nickname+'@<span>';
                            ugcStr += '<span class="green" style="color:green;">'+dataD[i].replies[j].uinfo.account+'<span>：';
                            ugcStr += '<span class="blue" style="color:blue;">'+dataD[i].replies[j].replyContent+'<span>';
                            if(dataD[i].status == '1' && dataD[i].replies[j].status == 1){
                                ugcStr += '<button class="btn btn-danger shieldreply" style="margin-left:10px;" replyId="'+dataD[i].replies[j].id+'">屏蔽</button>';
                            }
                            ugcStr += '</p>';
                        }
                        ugcStr += '</div>';
                    }
                    $('#ugcs').empty();
                    $('#ugcs').append(ugcStr);
                    loadFn();
                }else{

                }           
            }
        })
    }
    function loadFn(){
        //上热门
        $('.upperHot').on('click',function(){
            var r=confirm("确认要上热门吗？");
            var id = $(this).parent().attr('artId');
            var that = $(this);
            if(r==true){
                ugcUpdate('',id,'','',1,'','','',that);
            }
        }) 
        //下热门
        $('.lowerHot').on('click',function(){
            var r=confirm("确认要下热门吗？");
            var id = $(this).parent().attr('artId');
            var that = $(this);
            if(r==true){
                ugcUpdate('',id,'','',0,'','','',that);
            }
        }) 
        //人工点赞
        $('.lThumb').on('change',function(){
            var id = $(this).parent().attr('artId');
            var fakeSupportCount = $(this).val();
            var that = $(this);
            ugcUpdate('',id,'',fakeSupportCount,'','','','','');
        })
        //屏蔽评论
        $('.shieldreply').on('click',function(){
            var that = $(this);
            var id = that.attr('replyId');
            console.log(id);
            var r=confirm("确认屏蔽该评论吗？");
            if(r==true){
                replyPunch('',id,3,that);
            }
        })
        // 屏蔽文章
        $('.shieldswen').on('click',function(){
            var id = $(this).parent().attr('artId');
            // console.log(id);
            var that = $(this);
            ugcUpdate('',id,'','','',3,'','',that);
        })
        // 解封文章
        $('.relievewen').on('click',function(){
            var id = $(this).parent().attr('artId');
            // console.log(id);
            var r=confirm("确认要解封吗？");
            var that = $(this);
            if(r==true){
                ugcUpdate('',id,'','','',1,'','',that)
            }
        })

        var list = document.querySelectorAll('video');
        var big = document.querySelector('#big');
        var zz = document.querySelector('#zz');
        list.forEach(function(el, i){
            el.onclick = function(){
                zz.style.display = 'block';
                big.src = this.src;
                //播放
                big.play();
            }
        });
        var controlIcon = document.querySelectorAll('.controlIcon');
        controlIcon.forEach(function(el, i){
            el.onclick = function(){
                zz.style.display = 'block';
                big.src = $(this).parent().find('video').attr('src');
                //播放
                big.play();
            }
        });
        zz.onclick = function(){
            this.style.display = 'none';
            //暂停
            big.pause();
        };
    }

    //屏蔽评论接口
    function replyPunch(xboxArr,id,status,obj){
        $.ajax({
            url:'/New/ArtReply/replyPunch',
            type:"POST",
            dataType:"json",
            data:{
                ids:id,
                status:status
            },
            success:function(data){
                if(data.code == '200'){
                    var len = xboxArr.length;
                    if(len < 1){
                        // obj.remove();
                        obj.css('display','none');
                    }else{
                        for(var i = 0; i < len;i++){
                            $('.tr'+xboxArr[i]+'').find('.shield').css("display","none");
                        }
                    }
                    $('.numCgdialog .smcontent p').html('屏蔽成功');
                    $('.numCgdialog').fadeIn('normal');
                    setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
                }else{
                    confirm("网络异常");
                }           
            }
        })
    }

    function ugcUpdate(xboxArr,id,level,fakeSupportCount,hot,status,verifyStatus,foulType,obj){
        $.ajax({
            url:'/New/UGC/updateInfo',
            type:"POST",
            dataType:"json",
            data:{
                id:id,
                level:level,//排序
                fakeSupportCount:fakeSupportCount,//文章人为点赞数
                hot:hot,//0下热门，1上热门
                status:status,
                verifyStatus:verifyStatus,//1待审核2审核通过
                foulType:foulType
            },
            success:function(data){
                if(data.code == '200'){
                    $('.thumbdialog').fadeOut('normal');
                    var len = xboxArr.length;
                    if(len < 1){
                        if(level != ''){
                            $('.numCgdialog .smcontent p').html('排序修改成功');
                            $('.numCgdialog').fadeIn('normal');
                            setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
                        }else if(fakeSupportCount != ''){
                            // $('.numCgdialog .smcontent p').html('点赞修改成功');
                            // $('.numCgdialog').fadeIn('normal');
                            // setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
                        }else if(hot == '1'){
                            obj.parent().parent().find('.hotStaue').html("热门");
                            obj.parent().find('.lowerHot').css("display","block");
                            obj.parent().find('.upperHot').css("display","none");
                        }else if(hot == '0'){
                            obj.parent().parent().find('.hotStaue').html("非热门");
                            obj.parent().find('.lowerHot').css("display","none");
                            obj.parent().find('.upperHot').css("display","block");
                        }else if(status == '3'){
                            // obj.parent().parent().css('background','#ccc');
                            obj.parent().parent().find('.articleStaue').html("管理员删除");
                            obj.parent().parent().find('.examineStatus').html("已审核");
                            obj.parent().find('.shieldswen').css("display","none");
                            obj.parent().find('.relievewen').css("display","block");
                            obj.parent().find('.idopt').css("display","none");
                        }else if(status == '1'){
                            obj.parent().parent().find('.articleStaue').html("正常");
                            obj.parent().parent().find('.examineStatus').html("已审核");
                            obj.parent().find('.shieldswen').css("display","block");
                            obj.parent().find('.relievewen').css("display","none");
                            obj.parent().find('.idopt').css("display","none");
                        }else if(verifyStatus == '2'){
                            obj.parent().parent().css('background','#ccc');
                            obj.parent().parent().find('.articleStaue').html("正常");
                            obj.parent().parent().find('.examineStatus').html("已审核");
                            obj.parent().find('.shieldswen').css("display","block");
                            obj.parent().find('.relievewen').css("display","none");
                            obj.parent().find('.idopt').css("display","none");
                        }
                    }else{
                        for(var i = 0; i < len;i++){
                            if(fakeSupportCount != ''){
                                $('.tr'+xboxArr[i]+'').find('.lThumb').val(fakeSupportCount);
                            }else if(status == '3'){
                                $('.tr'+xboxArr[i]+'').find('.articleStaue').html("管理员删除");
                                $('.tr'+xboxArr[i]+'').find('.examineStatus').html("已审核");
                                $('.tr'+xboxArr[i]+'').find('.shields').css("display","none");
                                $('.tr'+xboxArr[i]+'').find('.relieve').css("display","block");
                                $('.tr'+xboxArr[i]+'').find('.idopt').css("display","none");
                            }else if(verifyStatus == '2'){//选中通过
                                $('.tr'+xboxArr[i]+'').find('.articleStaue').html("正常");
                                $('.tr'+xboxArr[i]+'').find('.examineStatus').html("已审核");
                                $('.tr'+xboxArr[i]+'').find('.shields').css("display","block");
                                $('.tr'+xboxArr[i]+'').find('.relieve').css("display","none");
                                $('.tr'+xboxArr[i]+'').find('.idopt').css("display","none");
                            }
                        }
                    }
                }else{
                    confirm("网络异常");
                }           
            }
        })
    }

    $('.fancybox'+randnum+'').fancybox({
        'type':'image',
        helpers:  {
            
        }
    });
</script>
</body>
</html>