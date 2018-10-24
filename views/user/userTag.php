<DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>用户打标签</title>
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
    label{
        color: #000;
        font-weight: bold;
        font-size: 14px;
        margin-top: 2px;
    }
    .marginTop{
        margin-top: 4px;
    }
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
                                            <span class="caption-subject bold uppercase">用户打标签</span>
                                        </div>
                                        <!-- <div class="tools">添加话术</div> -->
                                    </div>
                                    
                                    <div class="portlet-body">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="account">帐号</label>
                                                    <input type="text" class="form-control" id="account" placeholder="帐号" value="111" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="nickname">昵称</label>
                                                    <a href="" id='slectNm' target="_blank">
                                                        <input type="text" class="form-control" id="nickname" placeholder="昵称" value="" />
                                                    </a>
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="account">性别</label>
                                                    <select id="gender" class="form-control">
                                                        <!-- <option value="">选择</option> -->
                                                        <option  value="1">男</option>
                                                        <option value="2">女</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="age">年龄</label>
                                                    <input type="text" class="form-control" id="age" placeholder="年龄" value="28" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="intent">目的</label>
                                                    <input type="text" class="form-control" id="intent" placeholder="目的" value="78" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-3 col-xs-3">
                                                    <label for="lastTime">用户得分</label>
                                                    <input type="text" class="form-control" id="userScore" placeholder="" value="" />
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                    <label for="equipment">设备</label>
                                                    <input type="text" class="form-control" id="equipment" placeholder="设备" value="设备" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="constellation">最后登录时间</label>
                                                    <input type="text" class="form-control" id="lastTime" placeholder="" value="" />
                                                </div>
                                                <div class="col-lg-6 col-md-6  col-sm-6 col-xs-6">
                                                    <label for="mobileNum">手机号</label>
                                                    <input type="text" class="form-control" id="mobileNum" placeholder="手机号" value="" />
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <label for="phonePlace">手机归属地</label>
                                                    <input type="text" class="form-control" id="phonePlace" placeholder="" value="phonePlace" />
                                                </div>
                                                <div class="col-lg-12 col-md-12  col-sm-12 col-xs-12">
                                                    <label for="tag">个性签名</label>
                                                    <input type="text" class="form-control"  id="sign"  value="" />
                                                </div>
                                                <div class="col-lg-12 col-md-12  col-sm-12 col-xs-12">
                                                    <label for="tag">标签</label>
                                                    <input type="text" class="form-control" style="color: red;" id="tag"  value="" />
                                                </div>
                                                <div class="col-lg-6 col-md-6  col-sm-6 col-xs-6">
                                                    <label for="mobileNum">用户状态</label>
                                                    <input type="text" class="form-control" id="userStau" placeholder="" value="" style="color: red" />
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="margin-top: 24px;">
                                                    <button class="btn btn-danger shieldUser" style="display: none;">屏蔽用户</button>
                                                </div>
                                                <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="love">喜欢</label>
                                                    <input type="text" class="form-control" id="love" placeholder="喜欢" value="喜欢" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="hate">讨厌</label>
                                                    <input type="text" class="form-control" id="hate" placeholder="讨厌" value="讨厌" />
                                                </div> -->
                                                

                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="account">封面图</label><br/>
                                                    <div id="covers">
                                                        <!-- <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt="">
                                                        <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt="">
                                                        <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt="">
                                                        <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt=""> -->
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12" style="margin-top: 10px;">
                                                    <div class="portlet light bordered">
                                                        <div class="portlet-title">
                                                            <div class="caption font-dark">
                                                                <!-- <i class="icon-settings font-dark"></i> -->
                                                                <span class="caption-subject bold uppercase">全部ugc</span>
                                                            </div>
                                                            <!-- <div class="tools">添加话术</div> -->
                                                        </div>
                                                        <div class="portlet-body" id="ugcs">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6" id="send_bullet_content" style="margin-top: 10px;">
                                                    <label>发送的弹幕</label>
                                                    <!-- <button class="btn btn-danger" id="clear_all_bullet">清空</button><br/> -->
                                                    <div id="sendBullets">
                                                        <!--  <div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">实名: 找找 起床记bug了   @2017-07-09 04:12:29</div>
                                                        <div class="col-lg-3 col-md-3">
                                                            <button class="btn btn-danger">删除</button>
                                                            <button class="btn btn-info">查看主人</button>
                                                        </div>
                                                        <div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top:4px; ">实名: 找找 起床记bug了   @2017-07-09 04:12:29</div>
                                                        <div class="col-lg-3 col-md-3">
                                                            <button class="btn btn-danger">删除</button>
                                                            <button class="btn btn-info">查看主人</button>
                                                        </div> -->
                                                    </div>
                                                    <div class="marginTop">
                                                        <!-- <button class="btn btn-success">加载更多</button> -->
                                                        <a href="" id="sendDetail" target="_blank"> 
                                                            <button class="btn btn-success marginTop">查看详情</button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6" id="send_bullet_content" style="margin-top: 10px;">
                                                    <label>收到的弹幕</label>
                                                    <!-- <button class="btn btn-danger" id="clear_all_bullet">清空</button><br/> -->
                                                    <div id="recBullets">
                                                        <!--  <div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">实名: 找找 起床记bug了   @2017-07-09 04:12:29</div>
                                                        <div class="col-lg-3 col-md-3" style="padding-top: 5px;">
                                                            <button class="btn btn-danger">删除</button>
                                                            <button class="btn btn-info">查看主人</button>
                                                        </div>
                                                        <div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top:4px; ">实名: 找找 起床记bug了   @2017-07-09 04:12:29</div>
                                                        <div class="col-lg-3 col-md-3">
                                                            <button class="btn btn-danger">删除</button>
                                                            <button class="btn btn-info">查看主人</button>
                                                        </div> -->
                                                    </div>
                                                    <div class="marginTop">
                                                        <a href="" id="receiveDetail" target="_blank">
                                                            <button class="btn btn-success">查看详情</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 右侧 -->
                                            <div class="col-lg-6 col-md-6" >
                                                <div class="row" id="tagList"></div>
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="text-align: center;">
                                                        <button class="btn btn-success huyue">胡月</button>
                                                    </div>
                                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="text-align: center;">
                                                        <button class="btn btn-primary prevId">上一个</button>
                                                    </div>
                                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="text-align: center;">
                                                        <button class="btn btn-warning" id="updateTag" style="width: 160px;">打标签</button>
                                                    </div>
                                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="text-align: center;">
                                                        <button class="btn btn-primary nextId">下一个</button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                    
                                    </div>
                                    <!--分页-->
                                    <!-- <div class="pageTest"></div> -->
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

<!-- 沉底弹窗 -->
<div class="lgdialog sinkback" style="display: none;">
    <div class="portlet-body form lgdialogcontent">
        <div class="modal-header modal-headers">
            <div class="dialogclose dialogcloses">
                <img src="/public/img/common/remove-icon-small.png"/>
            </div>
            <h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>沉底反馈</h4>
        </div>
        <div class="modal-body">
            <div class="portlet-body form">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal ">
                    <div class="form-body">
                        
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">选择沉底原因:</label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <select name="" class="form-control" id="sinkList">
                                    
                                </select>
                            </div>
                        </div>
                        <div class="form-group" style="margin-top: 10px;">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4"></label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7" style="text-align: center;">
                                <button id="sinkbackBtn" type="button" class="btn green">
                                    <i class="fa fa-check"></i> 确定</button>
                                <button type="button" class="btn default lgdialogcloses">
                                    <i class="fa fa-times"></i>取消</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- END FORM-->
            </div>
            <!--内容结束-->
        </div>
    </div>
</div>

<!--的弹窗-->
<div class="smdialog dialog" style="display: none;">
	<div class="portlet-body form smdialogcontent">
        <div class="modal-header modal-headers">
        	<div class="dialogclose dialogcloses">
        		<img src="/public/img/common/remove-icon-small.png"/>
        	</div>
        	<h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i><span class="dialogTitle">用户备注</span></h4>
        </div>
        <div class="modal-body">
       	<!--内容开始-->
       		<div class="smcontent">
       			<!--<p>确定删除<span class="red">道具目名称(8888)</span>道具吗？</p>-->
       			<textarea id="wordsTxt" name="" rows="5" cols="" class="form-control"></textarea>
                <span class="help-block remarkMsg" style="color:red"></span>
       		</div>
       	<!--内容结束-->
        </div>
        <div class="modal-footer">
        	<button class="btn default smdialogcloses">取消</button>
        	<button id="wordsEditBtn" class="btn green">确定</button>
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
        <!-- END CORE PLUGINS -->
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        <script src="/public/js/common/datatable.js"  type="text/javascript"></script>
        <script src="/public/js/common/datatables.min.js"  type="text/javascript"></script>
        <script src="/public/js/common/datatables.bootstrap.js"  type="text/javascript"></script>
         <!--弹窗轮播开始-->
        <script type="text/javascript" src="/public/js/fancybox/jquery-1.8.2.min.js"></script>
        <script type="text/javascript" src="/public/js/fancybox/jquery.fancybox.js?v=2.1.3"></script>
        <script type="text/javascript" src="/public/js/fancybox/jquery.fancybox-thumbs.js?v=1.0.7"></script>
        <!--弹窗轮播结束-->
        <script src="/public/js/common/mytools.js"  type="text/javascript"></script>
        <script language="javascript" src="http://webapi.amap.com/maps?v=1.3&key=389880a06e3f893ea46036f030c94700"></script>
        <!-- <script src="/public/js/user/userCommon.js?t=<?=time()?>" type="text/javascript" charset="utf-8"></script> -->
		<script type="text/javascript">
            // 用户打标签
            var results = '';
            tagList();
            var rlens = results.length;
            
            var reStatus;
            // 获取地理位置信息
            var mapObj;
            var MGeocoder;
            var address;
            var randnum = Math.floor(Math.random()*100);
            function geocoder2(lon,lat) {  //POI搜索，关键字查询
                var mapObj = new AMap.Map('');
                var lnglatXY = new AMap.LngLat(lon,lat);
                //加载地理编码插件
                mapObj.plugin(["AMap.Geocoder"], function() {       
                    MGeocoder = new AMap.Geocoder({
                        radius: 1000,
                        extensions: "all"
                    });
                    //返回地理编码结果
                    AMap.event.addListener(MGeocoder, "complete", geocoder_CallBack2);
                    //逆地理编码
                    MGeocoder.getAddress(lnglatXY);
                });
            }
            function geocoder_CallBack2(data) { //回调函数
                address = data.regeocode.formattedAddress;
                var detail = data.regeocode.addressComponent;
                var str  = detail.province + " | " + detail.city + " | "; 
                $('#provinces').html(str);
                // console.log(data.regeocode.addressComponent);
                $('#detailAddress').html(address);
            }



            function place(tel){
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
                            console.log(province + '----'+ operators+'----'+carrier+'='+num);
                            // if(operators.indexOf('移动')>0){
                            //     $('#numType').html('移动');
                            // }else if(operators.indexOf('联通')){
                            //     $('.numType').html('联通');
                            // }else if(operators.indexOf('电信')){
                            //     $('.numType').html('电信');
                            // }else{
                            //     $('.numType').html('');
                            // }
                            $('#phonePlace').val(province+'  '+operators);
                            // $('#phoneType').html(operators);

                     },
                     error:function (){    
                        $('li span').html('');
                        $('.error').css('display','block');        
                     }
                 });
            } 
            // accountInfo(4146);
            var ls = document.location.href.split('=');
            // var id = ls[2];
            // var type = ls[1].split('?')[0];
            var hrefs = ls[0];
            var accountId = ls[1];

            accountInfo(accountId);
            $('#sendDetail').attr('href','/view/index-index#/barrageManage?type=1&&accountId='+accountId);
            $('#receiveDetail').attr('href','/view/index-index#/barrageManage?type=2&&accountId='+accountId);

            // accountInfo(2);
			function accountInfo(accountId){
                $.ajax({
                    url:'/New/Account/accountInfo',
                    type:"POST",
                    dataType:"json",
                    async: true,
                    data:{
                        accountId:accountId
                    },
                    success:function(data){
                        if(data.code == '200'){
                            var dataD = data.data;
                            if(dataD.gender == '1'){//男
                                $('#gender').find('option').eq(0).prop('selected',true);
                            }else if(dataD.gender == '2'){//女
                                $('#gender').find('option').eq(1).prop('selected',true);
                            }
                            $('#account').val(dataD.id);
                            $('#nickname').val(dataD.nickname);
                            $('#slectNm').attr('href','/view/index-index#/ordinary?slectNm='+dataD.nickname+'');
                            $('#intent').val(dataD.intent);
                            $('#constellation').val(dataD.constellation);
                            // $('#school').val(dataD.school);
                            // $('#job').val(dataD.job);
                            $('#age').val(dataD.age);
                            $('#remark').val(dataD.remark);
                            // $('#hometown').val(dataD.hometown);
                            $('#ip').val(dataD.ip);
                            $('#selectIp').attr('href','/view/index-index#/ordinary?slectIp='+dataD.ip+'');
                            $('#mobileNum').val(dataD.account);
                            $('#sign').val(dataD.sign);
                            $('#createTime').val(dataD.createTime);
                            $('#lastTime').val(dataD.lastActive);
                            $('#userScore').val(dataD.score);//用户得分
                            $('#tag').val(dataD.tag);
                            $('#love').val(dataD.love);
                            $('#hate').val(dataD.hate);
                            $('#uuid').val(dataD.uuid);
                            if(dataD.os == '1'){
                                $('#equipment').val("IOS");
                            }else if(dataD.os == '2'){
                                $('#equipment').val("Android");
                            }else{
                                $('#equipment').val(dataD.os);
                            }
                            $('#userVersion').val(dataD.userVersion);
                            $('#devVersion').val(dataD.devVersion);
                            // if(JSON.stringify(dataD.osString) == "{}"){

                            var ip = dataD.ip;
                            if(ip != ''){
                                var ipurl = '/New/account/ipAddress?ip='+ip;
                                $.get(ipurl,function(idata){
                                    // var ipAddress = idata.data.ip+' | '+idata.data.country+' | '+idata.data.county+' | '+ idata.data.isp;
                                    var ipAddress = idata;
                                    $('#ipAddress').html(ipAddress);
                                    // console.log(idata);
                                })
                            }
                            if(dataD.status == '0'){

                                str +='<td class="userStau">屏蔽</td>';
                            }
                            if(dataD.status == '0'){
                                $('#userStau').val('屏蔽');
                            }else if(dataD.status == '1'){
                                $('#userStau').val('正常');
                                $('.shieldUser').css('display','block');
                            }else if(dataD.status == '2'){
                                $('#userStau').val('沉底');
                            }
                            //ugcs的相关内容
                            var ugcs = dataD.ugcs;
                            var ugcsLen = ugcs.length;
                            var ugcStr = '';
                            // console.log('test'+ugcs[0].replies.length);
                            for(var i = 0;i<ugcsLen;i++){
                                // console.log(ugcs[i].replies.length);
                                ugcStr += '<div class="hr" style="border-bottom: 1px dotted red">';
                                ugcStr += '<div class="row"><div class="col-md-6">';
                                for(var j = 0;j<ugcs[i].resourcesLists.length;j++){
                                    ugcStr +='<a class="fancybox'+randnum+'" href="'+ugcs[i].resourcesLists[j].url+'"data-fancybox-group="gallery" title="">';
                                    ugcStr +='<img style="width:80px;" src="'+ugcs[i].resourcesLists[j].url+'?imageView2/1/w/100/h/100" alt="" /></a>';
                                }
                                for(var j=0;j<ugcs[i].videoLists.length;j++){
                                    // ugcStr +='<video width="80" height="80" style="float: left;" src="'+ugcs[i].videoLists[j].url+'" controls="controls"></video>';
                                    ugcStr +='<a style="position:relative;"><video width="80" height="80" style="float: left;" src="'+ugcs[i].videoLists[j].url+'" ></video>';
                                    ugcStr +='<img class="controlIcon" style="position:absolute;top:50%;left:50%;width:20px;height:20px;margin-left:-130px!important;margin-top:-10px!important;" src="/public/img/common/timg.png" /></a>';
                                }
                                ugcStr +='</div>';
                                if(ugcs[i].status == '1'){
                                    ugcStr += '<div class="articleStaue col-md-2">正常</div>';
                                }else if(ugcs[i].status == '2'){
                                    ugcStr += '<div class="articleStaue col-md-2">主人删除</div>';
                                }else if(ugcs[i].status == '3'){
                                    ugcStr += '<div class="articleStaue col-md-2">管理员删除</div>';
                                }else if(ugcs[i].status == '4'){
                                    ugcStr += '<div class="articleStaue col-md-2">鉴黄删除</div>';
                                }
                                ugcStr += '<div class="col-md-2">'+ugcs[i].txtContent+'</div>';

                               
                                if(ugcs[i].hotTime == '0'){
                                    ugcStr += '<div class="hotStaue col-md-2">非热门</div>';
                                }else{
                                    ugcStr += '<div class="hotStaue col-md-2">热门</div>';
                                }
                                ugcStr+='</div></div>';
                              
                            }
                            $('#ugcs').empty();
                            $('#ugcs').append(ugcStr);
                            loadFn();
                            // 标签显示
                            var ids = dataD.tagIds;
                            var idsLen = ids.length;
                            var tagStr = '';
                            console.log(idsLen);
                            if(idsLen > 0){
                                for(var i=0; i<idsLen; i++){
                                    $('.inlineCheckbox'+ids[i]+'').prop("checked",true);
                                    var onum = ids[i];
                                    var num = Math.abs(onum-rlens);
                                    tagStr += ''+results[num].tagName+'|';
                                }
                            }
                            $('#tag').val(tagStr);

                            var userEditions = dataD.osString;
                            $('#userEditions').val(userEditions);
                            $('#skipNum').html(dataD.slideCount);
                            
                            // $('#nickname').val(dataD.nickname);//用户系统版本
                            // 用户头像
                            var str = '';
                            var coversLen = dataD.covers.length;
                            var src = dataD.covers[0]+'@q_80?'+randnum;
                            $('#firstImg').attr('src',src);
                            for(var i = 0;i < coversLen;i++){
                                str +='<a style="float:left;margin-left:4px;" class="fancybox'+randnum+'"  href="'+dataD.covers[i]+'"data-fancybox-group="gallery" title="">';
                                str +='<img style="" src="'+dataD.covers[i]+'@w_180,q_80" alt="" /></a>';
                                // str +='<img style="margin-left:5px;" src="'+dataD.covers[i]+'@w_200,q_80?'+randnum+'" />'
                            }
                            $('#covers').empty();
                            $('#covers').append(str);
                            // 发送弹幕
                            var sendBullets = dataD.sendBullets;
                            var sendLen = dataD.sendBullets.length;
                            var sendStr = '';
                            for(var i=0;i<sendLen;i++){
                                sendStr +='<div class="col-lg-12 col-md-12" style="background: #dff0d8;padding: 12px;margin-top: 4px;">';
                                if(sendBullets[i].anonymous == '1'){
                                    sendStr +='匿名:';
                                }else{
                                    sendStr +='实名:';
                                }
                                sendStr += ''+sendBullets[i].bullet+'</div>';
                                // sendStr += '<div class="col-lg-3 col-md-3" style="padding-top: 5px;">'
                                // sendStr += '<button style="margin-right:5px;" class="btn btn-danger">删除</button>';
                                // sendStr += '<a href="/view/user-userMsg?accountId='+sendBullets[i].masterId+'"><button class="btn btn-info">查看主人</button></a></div>';
                            }
                            $('#sendBullets').empty();
                            $('#sendBullets').append(sendStr);
                            // 收到弹幕
                            var recBullets = dataD.recBullets;
                            var recLen = dataD.recBullets.length;
                            var recStr = '';
                            for(var i=0;i<recLen;i++){
                                recStr +='<div class="col-lg-12 col-md-12" style="background: #dff0d8;padding: 12px;margin-top: 4px;">';
                                if(recBullets[i].anonymous == '1'){
                                    recStr +='匿名:';
                                }else{
                                    recStr +='实名:';
                                }
                                recStr += ''+recBullets[i].bullet+'</div>';
                                // recStr += '<div class="col-lg-3 col-md-3" style="padding-top: 5px;">'
                                // recStr += '<button style="margin-right:5px;" class="btn btn-danger">删除</button>';
                                // recStr += '<a href="/view/user-userMsg?accountId='+recBullets[i].senderId+'"><button class="btn btn-info">查看主人</button></a></div>';

                            }
                            $('#recBullets').empty();
                            $('#recBullets').append(recStr);
                            // 投诉列表
                            var complains = dataD.complains;
                            var comLen = complains.length;
                            var comStr = '';
                            for(var i = 0;i < comLen;i++){
                                comStr += ' <div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">'+complains[i].complain+'</div>';
                                comStr += '<div class="col-lg-3 col-md-3">';
                                comStr += '<a href="/view/complainManage-reportEvidence?slaveId='+accountId+'"><button class="btn btn-info">查看被举报信息</button></a>';
                                comStr += '<a href="/view/user-userMsg?accountId='+complains[i].masterId+'"><button class="btn btn-info">查看主人</button></a></div>';
                            }
                            $('#complains').empty();
                            $('#complains').append(comStr);
                            $('#lnglat').val(dataD.lon+' , '+dataD.lat);
                            geocoder2(dataD.lon,dataD.lat);
                            var tel = dataD.account;//手机号
                            console.log('tellll'+tel);
                            if(dataD.country == '中华人民共和国'){
                                console.log(1111111111);
                                var telNum = tel.substr(2);
                                place(telNum);
                            }else{
                                $('#phonePlace').html(dataD.country);
                            }
                            
                         
                        }else{

                        }           
                    }
                })
            }

            function loadFn(){
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


             $('#gender').on('change',function(){
                var gender=$("#gender option:selected").val();
                changeGender(accountId,gender);
            })
            // 修改性别
            function changeGender(accountId,gender){
                $.ajax({
                    url:'/New/Account/updateInfo',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId,
                        gender:gender
                    },
                    success:function(data){
                        if(data.code == '200'){
                            // $('.dialog').fadeOut('normal');
                            // $('#remark').val(remark);
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

            
            // 用户标签列表
            function tagList(){
                $.ajax({
                    url:'/New/AccountTag/accountTagList',
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
                tagStr += '<div class="form-group" style="height:34px;">';
                tagStr += '<label class="control-label col-lg-1 col-md-1 col-sm-1 col-xs-1">'+results[typenum].tagName+':</label>';
                tagStr += '<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">';
                for(var j=0;j<rlens;j++){
                    if(results[j].pid == snum){
                        tagStr += '<label style="min-width:76px;" class="mt-checkbox">';
                        tagStr += '<input type="checkbox" class="inlineCheckbox inlineCheckbox'+results[j].id+'" value="'+results[j].id+'">'+results[j].tagName+'<span></span></label>';
                    }
                }
                tagStr += '</div></div>';
            }
            $('#tagList').html(tagStr);

            // 胡月操作
            $('.huyue').on('click',function(){
                // var accountId = $(this).parent().parent().find('input').val();
                var obj = $(this);
                console.log(accountId);
                var r=confirm("确认进行胡月操作吗？");
                if(r==true){
                    mixed(accountId,1,obj);
                }
            })
            function mixed(accountId,type,obj){
                $.ajax({
                    url:'/New/HQController/markAsHQ',
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
            // 屏蔽用户操作
            $('.shieldUser').on('click',function(){
                userStatus(accountId,0,'','','');
            })
            function userStatus(accountId,status,msg,remark,msgType,sinkReasonId){
                $.ajax({
                    url:'/New/Account/advancedChangeStatus',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId,
                        status:status,
                        msg:msg,
                        remark:remark,
                        msgType:msgType,
                        sinkReasonId:sinkReasonId
                    },
                    success:function(data){
                        if(data.code == '200'){
                           $('.shieldUser').css('display','none');
                           $('#userStau').val('屏蔽');
                        }else{
                            confirm("网络异常");
                        }           
                    }
                })
            }

            // 点击上一个下一个操作
            $('.prevId').on('click',function(){
                accountId = accountId-0-1;
                window.location.href=hrefs+'='+accountId;
            })
            $('.nextId').on('click',function(){
                accountId = accountId-0+1;
                window.location.href=hrefs+'='+accountId;

            })

            //打标签
            $('#updateTag').on('click',function(){
                var checkArr = [];
                 $.each($('.mt-checkbox input:checkbox'),function(){
                    if(this.checked){
                        checkArr.push($(this).val());
                    }
                });
                var checkArrNew = checkArr.join();
                if(checkArr.length>0){
                    Usertag(accountId,checkArrNew,checkArr,'');
                }else{
                    $('.numCgdialog .smcontent p').html('请选择标签');
                    $('.numCgdialog').fadeIn('normal');
                    setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
                }

            })
            // 打标签接口
            function Usertag(accountId,tagIds,arr,obj){
                $.ajax({
                    url:'/New/AccountTag/accountTag',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId,
                        tagIds:tagIds
                    },
                    success:function(data){
                        if(data.code == '200'){
                            // $('.tagslog').fadeOut('normal');
                            var idsLen = arr.length;
                            var str ='';
                            // $('.numCgdialog .smcontent p').html('标签修改成功');
                            // $('.numCgdialog').fadeIn('normal');
                            accountId = accountId-0+1;
                            window.location.href=hrefs+'='+accountId;
                            setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
                            if(idsLen>0){
                                for(var i=0;i<idsLen;i++){
                                    var onum = arr[i];
                                    var num = Math.abs(onum-rlens);
                                    str += ''+results[num].tagName+'|';
                                }
                                $('#tag').val(str);
                                // obj.attr('ids',arr);
                                // obj.parent().parent().find('.userTag').html(str);

                            }                   
                        }else{
                            confirm("网络异常");
                        }           
                    }
                })
            }
        </script>
    </body>


</html>