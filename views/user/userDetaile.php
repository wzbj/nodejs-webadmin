<DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>被举报用户详细信息</title>
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
        <link href="/public/css/common/page.css"  rel="stylesheet" type="text/css" />
        <link href="/public/css/common/mytools.css" rel="stylesheet">
        <!-- END THEME GLOBAL STYLES -->
        <link rel="shortcut icon" href="/public/img/common/favicon.ico" type="image/x-icon" />
    </head>
    <style type="text/css">
        table thead tr th{
            text-align: center;
        }
        table.dataTable tbody td {
            line-height: 40px;
            text-align: center;
        }
        table.table-bordered.dataTable tbody td {
            text-align: center;
        }
        table.table-bordered.dataTable tbody td a div{
            text-align: left;
        }
        .userIp div,.userSign div{
			color: red;
        }
        .userNick div{
        	color: green;
        }
        td a{
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        td a img{
            width: 60px;
            display: block;
        }
        td button{
            float: left;
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
                                                <span class="caption-subject bold uppercase">被举报用户详细信息</span>
                                            </div>
                                            <!-- <div class="tools">添加话术</div> -->
                                        </div>
                                        <div class="portlet-title">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align: right;padding-bottom: 15px;color: #fff;">
                                                    <button type="button" id="shield" class="btn add shield" style="background: #FF4040;">选中屏蔽</button> 
                                                    <button type="button" id="relieve" class="btn sorting" style="background: #9ACD32;">选中解封</button> 
                                                    <button type="button" id="sink" class="btn orbit" style="background: #FF4040;">选中沉底</button>
                                                    <button type="button" id="fishs" class="btn " style="background: #9ACD32;">选中海底捞</button>  
                                                    <button type="button" id="remark" class="btn orbit" style="background: #1C86EE;">选中备注</button> 
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="note note-success row" style="color: red">提示:查看被举报用户IP,昵称，个性签名直接点击连接即可</div> -->
                                        <div class="portlet-body">
                                            <table class="table table-striped table-bordered table-hover" id="sample_1">
                                                <thead>
                                                     <tr>
                                                        <th class="all duan2">
                                                            <input id="all" type="checkbox" name="" value="" />
                                                        </th>
                                                        <th class="all duan4">UID</th> 
                                                        <th class="all duan6">手机</th>
                                                        <th class="all duan6">用户所在地</th>
                                                        <th class="all unsort duan16">头像</th>
                                                        <th class="all duan6">昵称</th>
                                                        <th class="all duan4">性别</th>
                                                        <th class="all duan8">个性签名</th>
                                                        <th class="all duan6">生日</th>
                                                        <th class="all duan8">最后登陆时间</th>
                                                        <th class="all duan6">注册日期</th>
                                                        <th class="all duan5">IP</th>
                                                        <th class="all unsort duan6">管理员备注</th>
                                                        <th class="all unsort duan5">用户状态</th>
                                                        <th class="all unsort duan4">平台</th>
                                                        <th class="all unsort duan8">操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbody">
													
                                                </tbody>
                                            </table>
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
<!--的弹窗-->
<div class="smdialog wordsEditdialog" style="display: none;">
	<div class="portlet-body form smdialogcontent">
        <div class="modal-header modal-headers">
        	<div class="dialogclose dialogcloses">
        		<img src="/public/img/common/remove-icon-small.png"/>
        	</div>
        	<h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i><span class="wordsTitle">编辑</span>话术内容</h4>
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
<!--屏蔽弹窗-->
<div class="lgdialog shieldlog" style="display: none;">
    <div class="portlet-body form lgdialogcontent">
        <div class="modal-header modal-headers">
            <div class="dialogclose dialogcloses">
                <img src="/public/img/common/remove-icon-small.png"/>
            </div>
            <h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>屏蔽反馈</h4>
        </div>
        <div class="modal-body">
        <!--内容开始-->
            <div class="portlet-body form">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal ">
                     <div class="form-body">
                        
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">话术类型:</label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <select name="" class="form-control" id="typeList">
                                    
                                </select>
                                <span class="help-block" style="color:red">选择其他话术的时候应先选择话术类型吆！</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">选择其他话术:</label>
                            <div id="radioList" class="col-lg-7 col-md-7 col-sm-7 col-xs-7 md-radio-inline" style="text-align: left;">
                                
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">给该用户备注(选填):</label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <!--<input name="personName" value="" class="form-control" type="text"/>-->
                                <textarea class="form-control toUserRemark" name="" rows="3" cols="" placeholder=""></textarea>
                                <span class="help-block" style="color:red"> </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">给该用户回复(选填):</label>
                           <!--  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 md-radio-inline" style="text-align: left;">
                                <div class="md-radio" style="display: inline-block!important;">
                                    <input type="radio" checked id="checkbox4_1" name="radio4" value="121" class="md-radiobtn">
                                    <label for="checkbox4_1">
                                        <span></span>
                                        <span class="check"></span>
                                        <span class="box"></span>刘波回复</label>
                                </div>
                                <div class="md-radio" style="display: inline-block!important;">
                                    <input type="radio" id="checkbox4_2" name="radio4" value="112" class="md-radiobtn">
                                    <label for="checkbox4_2">
                                        <span></span>
                                        <span class="check"></span>
                                        <span class="box"></span>短信回复</label>
                                </div>
                            </div> -->
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4"></label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <textarea class="form-control toUserMsg" name="" rows="3" cols=""></textarea>
                                <span class="help-block" style="color:red"> </span>
                            </div>
                        </div>

                        <div class="form-group">
                            <!--<label class="control-label col-lg-7 col-md-7 col-sm-7 col-xs-7">真实用户带入机器人配比:</label>-->
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4"></label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7" style="text-align: center;">
                                <button id="shieldBtn" type="button" class="btn green">
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
<!--备注的弹窗-->
<div class="smdialog remarkdialog" style="display: none;">
    <div class="portlet-body form smdialogcontent">
        <div class="modal-header modal-headers">
            <div class="dialogclose dialogcloses">
                <img src="/public/img/common/remove-icon-small.png"/>
            </div>
            <h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>添加备注内容</h4>
        </div>
        <div class="modal-body">
        <!--内容开始-->
            <div class="smcontent">
                <!--<p>确定删除<span class="red">道具目名称(8888)</span>道具吗？</p>-->
                <textarea id="remarkTxt" name="" rows="2" cols="" class="form-control"></textarea>
                <span class="help-block remarkMsg" style="color:red"></span>
            </div>
        <!--内容结束-->
        </div>
        <div class="modal-footer">
            <button class="btn default smdialogcloses">取消</button>
            <button id="remarkBtn" class="btn green">确定</button>
        </div>
     </div>
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
        <script src="/public/js/common/page.js"  type="text/javascript"></script>
        <script src="/public/js/common/mytools.js"  type="text/javascript"></script>
         <script src="/public/js/user/userCommon.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
            console.log(location.search);
			function GetRequest() {
                //获取到Url并且解析Url编码  
                var url = decodeURI(location.search);    
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
            var tel;
            var randomNum = Math.floor(Math.random()*1100);
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
                            $('.places').eq(i).html(province+'<br />'+carrier);

                     },
                     error:function (){    
                        $('li span').html('');
                        $('.error').css('display','block');        
                     }
                 });
            }
			var Request = new Object();  
            Request = GetRequest();
            var slaveInfo = Request.slaveInfo;
            var type = Request.type; 
            if(type == '1'){
                getList('','','','',slaveInfo,'','','','','',1);
            }else if(type == '2'){
            	getList(slaveInfo,'','','','','','','','','',1);
            }else if(type == '3'){
            	getList('','','',slaveInfo,'','','','','','',1);
            }


            exHead();
            function exHead(){
                $('.exchange').on('click',function(){
                    var accountId = $(this).parent().parent().parent().parent().find('input').val();
                    var r=confirm("确认要替换头像吗？");
                    if(r==true){
                        exchange(accountId);
                    }
                      
                })
                $('.sink').on('click',function(){
                    var that = $(this);
                    module.sink(that);
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
            }
			
    function getList(nickname,nickname_like,mobile,sign,ip,remark,startTime,endTime,gender,status,pageNum){
        $.ajax({
            url:'/New/Account/accountList',
            type:"POST",
            dataType:"json",
            async: false,
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
                pageNum:pageNum,
                pageSize:50
            },
            beforeSend:function(){
                
                var str = '<tr><td colspan="16"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td><tr>';
                $('#tbody').html(str);
            },
            success:function(data){
                
                if(data.code == '200'){
                    var str = '';
                    var dataD = data.data;
                    allPage = Math.ceil((dataD.total_num)/50);
                    var result = dataD.result;
                    var len = result.length;
                    $('#tbody').empty();
                    for(var i = 0; i < len;i++){
                        str += '<tr class="tr'+result[i].id+'"><td class="xbox"><input type="checkbox" name="" id="" value="'+result[i].id+'" /></td>';
                        str += '<td>'+result[i].id+'</td>';
                        str += '<td class="telNum" value="'+result[i].account+'">'+result[i].account+'</td>';
                        str += '<td class="places"></td><td class="changeImg'+result[i].id+'">'
                        // str += '<td>'+result[i].account+'</td><td>';
                        for(var j = 0;j<result[i].covers.length;j++){
                            // str +='<a class="fancybox'+randomNum+'" href="'+result[i].covers[j]+'"data-fancybox-group="gallery" title="">';
                            // str +='<img style="" src="'+result[i].covers[j]+'@w_120,q_60" alt="" /></a>';
                            str +='<a class="fancybox'+randomNum+'"  href="'+result[i].covers[j]+'"data-fancybox-group="gallery" title="">';
                            str +='<img style="" src="'+result[i].covers[j]+'@w_120,q_60" alt="" /></a>';
                        }
                        str += '</td><td>'+result[i].nickname+'</td>';
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
                        str += '<td>'+result[i].ip+'</td>';
                        str += '<td class="aRemark">'+result[i].remark+'</td>';
                        if(result[i].status == '0'){
                            str +='<td class="userStau">屏蔽</td>';
                        }else if(result[i].status == '1'){
                            str +='<td class="userStau">正常</td>';
                        }else if(result[i].status == '2'){
                            str +='<td  class="userStau">沉底</td>';
                        }
                        if(result[i].os == '1'){
                            str +='<td>Ios</td>';
                        }else if(result[i].os == '2'){
                            str +='<td>Android</td>';
                        }
                        // str += '<td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap">';
                        str +='<td>';
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
                        str +='<button class="btn btn-warning exchange" accountId="'+0+'">替图</button>';
                        str +='<a href="/view/user-journalList?type=1?id='+result[i].id+'"  target="_blank"><button class="btn btn-primary journal">查看日志</button></a>';
                        str +='<a href="/view/user-userMsg?accountId='+result[i].id+'"  target="_blank"><button class="btn btn-primary details">查看详情</button></a>';
                        str +='</td></tr>';
                    }
                    console.log("endend");
                    $('#tbody').html(str);
                     laodFn();
                }else{

                }           
            }
        })
    }

    module.typeList();
    module.wordsList();

    function laodFn(){
        $('.fancybox'+randomNum+'').fancybox({
            'type':'image',
            helpers:  {
                
            }
        });
    }

    placeLoad();
    // 用户所在地显示
    function placeLoad(){
        setTimeout(function(){
            var len = $('.telNum').length;
            for(var i = 0;i<len;i++){
                // console.log($('.telNum').eq(i).attr("value"));
                var value = $('.telNum').eq(i).attr("value");
                place(value,i);
            }

        },500)
    }
        	
        </script>
    </body>


</html>