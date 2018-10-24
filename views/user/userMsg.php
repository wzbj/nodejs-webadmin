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
    .join{
        margin-top: 4px;
        margin-bottom: 4px;
    }
    .status{
        margin-top: 4px;
        margin-bottom: 4px;
    }
    .status button{
        display:inline-block;
        width: 30%;
    }
    #covers{
        text-align: center;
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
                                            <span class="caption-subject bold uppercase">用户详细信息</span>
                                        </div>
                                        <!-- <div class="tools">添加话术</div> -->
                                    </div>
                                    
                                    <div class="portlet-body">
                                        <div class="row">
                                            <div class="col-lg-9 col-md-9">
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
                                                    <label for="intent">目的</label>
                                                    <input type="text" class="form-control" id="intent" placeholder="目的" value="78" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="constellation">星座</label>
                                                    <input type="text" class="form-control" id="constellation" placeholder="星座" value="白羊座" />
                                                </div>
                                                <!-- <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="school">学校</label>
                                                    <input type="text" class="form-control" id="school" placeholder="学校" value="学校" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="job">工作</label>
                                                    <input type="text" class="form-control" id="job" placeholder="工作" value="工作" />
                                                </div> -->
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="age">年龄</label>
                                                    <input type="text" class="form-control" id="age" placeholder="年龄" value="28" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="remark">管理员备注</label>
                                                    <input type="text" class="form-control" id="remark" placeholder="管理员备注" value="管理员备注" />
                                                </div>
                                                <!-- <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="hometown">家乡</label>
                                                    <input type="text" class="form-control" id="hometown" placeholder="家乡" value="家乡" />
                                                </div> -->
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="ip">ip</label>
                                                    <a id="selectIp" href="" target="_blank">
                                                        <input type="text" class="form-control" id="ip" placeholder="ip" value="" />
                                                    </a>
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-6 col-xs-6">
                                                    <label for="mobileNum">手机号</label>
                                                    <input type="text" class="form-control" id="mobileNum" placeholder="手机号" value="" />
                                                </div>
                                                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                                    <label for="sign">个性签名</label>
                                                    <input type="text" class="form-control" id="sign" placeholder="个性签名" value="个性签名" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-3 col-xs-3">
                                                    <label for="createTime">注册时间</label>
                                                    <input type="text" class="form-control" id="createTime" placeholder="注册时间" value="" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-3 col-xs-3">
                                                    <label for="lastTime">最后登录时间</label>
                                                    <input type="text" class="form-control" id="lastTime" placeholder="最后登录时间" value="" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-3 col-xs-3">
                                                    <label for="lastTime">用户得分</label>
                                                    <input type="text" class="form-control" id="userScore" placeholder="" value="" />
                                                </div>
                                                <div class="col-lg-3 col-md-3  col-sm-3 col-xs-3">
                                                    <label for="tag">标签</label>
                                                    <input type="text" class="form-control" id="tag" placeholder="标签" value="标签" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="love">喜欢</label>
                                                    <input type="text" class="form-control" id="love" placeholder="喜欢" value="喜欢" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="hate">讨厌</label>
                                                    <input type="text" class="form-control" id="hate" placeholder="讨厌" value="讨厌" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="uuid">uuid</label>
                                                    <input type="text" class="form-control" id="uuid" placeholder="uuid" value="uuid" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="equipment">设备</label>
                                                    <input type="text" class="form-control" id="equipment" placeholder="设备" value="设备" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="userVersion">用户版本</label>
                                                    <input type="text" class="form-control" id="userVersion" placeholder="用户版本" value="用户版本" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="devVersion">内部版本</label>
                                                    <input type="text" class="form-control" id="devVersion" placeholder="内部版本" value="内部版本" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="userEditions">用户系统版本</label>
                                                    <input type="text" class="form-control" id="userEditions" placeholder="用户系统版本" value="用户系统版本" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="account">封面图</label><br/>
                                                    <div id="covers">
                                                        <!-- <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt="">
                                                        <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt="">
                                                        <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt="">
                                                        <img src="http://jimu-cover-new.bj.bcebos.com/2216572_iiiiii@w_200,q_80" alt=""> -->
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12" id="send_bullet_content" style="margin-top: 10px;">
                                                    <label>发送的弹幕</label>
                                                    <button class="btn btn-danger" id="clear_all_send">清空</button><br/>
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
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <!-- <button class="btn btn-success">加载更多</button> -->
                                                    <a href="" id="sendDetail" target="_blank"> 
                                                        <button class="btn btn-success marginTop">查看详情</button>
                                                    </a>
                                                </div>
                                                <div class="col-lg-12 col-md-12" id="send_bullet_content">
                                                    <label>收到的弹幕</label>
                                                    <button class="btn btn-danger" id="clear_all_rect">清空</button><br/>
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
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop">
                                                    <a href="" id="receiveDetail" target="_blank">
                                                        <button class="btn btn-success">查看详情</button>
                                                    </a>
                                                </div>
                                                <div class="col-lg-12 col-md-12" id="send_bullet_content">
                                                    <label>被举报信息</label>
                                                    <div id="complains">
                                                        <div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">突突突突</div>
                                                        <div class="col-lg-3 col-md-3">
                                                            <button class="btn btn-info">查看主人</button>
                                                        </div>
                                                        <div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">突突突突</div>
                                                        <div class="col-lg-3 col-md-3">
                                                            <button class="btn btn-info">查看主人</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop">
                                                    <a href="" id="reportDetail">
                                                        <button class="btn btn-success">查看详情</button>
                                                    </a>
                                                </div>
                                            </div>
                                            <!-- 右侧 -->
                                            <div class="col-lg-3 col-md-3">
                                                <img id="firstImg" style="width: 100%" src="" alt="">
                                                <br />
                                                <label for="lnglat">所在经纬度以及地理信息</label>
                                                <input type="text" class="form-control" id="lnglat" placeholder="经纬度" value="暂无经纬度" />
                                                <div id="detailAddress" style="background: #dff0d8;padding: 12px;margin-top: 4px;"></div>
                                                <div style="background: #dff0d8;padding: 12px;margin-top: 4px;">手机归属地:<span id="phonePlace"></span>&nbsp;&nbsp;<span id="phoneType"></span></div>
                                                <!-- <div style="background: #dff0d8;padding: 12px;margin-top: 4px;">IP归属地：中国 | 
                                                    <span id="provinces"></span> <sapn id="numType"></sapn></div> -->
                                                <div style="background: #dff0d8;padding: 12px;margin-top: 4px;">IP归属地: <span id="ipAddress"></span></div>
                                                <div style="background: #dff0d8;padding: 12px;margin-top: 4px;">沉底原因: <span id="sinkReason"></span></div>
                                                <button class="col-md-12 btn btn-success marginTop addRemark" id="add_remark">添加备注</button>
                                                <button class="col-md-12 btn btn-warning marginTop exchange" id="exchange">替换图像</button>
                                                <button class="col-md-12 btn btn-success marginTop liboReply" id="update-account">刘波回复</button>
                                                <button class="col-md-12 btn btn-success marginTop sendMsg" id="send-sms">给用户发送短信</button>
                                                <!-- <button class="col-md-12 btn btn-success marginTop" id="send-msg">给用户发送通知</button> -->
                                                <!-- <button class="col-md-12 btn btn-success marginTop" id="update-mongo">重置到Mongodb</button> -->
                                                <button class="col-md-12 btn btn-danger marginTop shield" id="update-mongo">屏蔽用户</button>
                                                <button class="col-md-12 btn btn-primary marginTop relieve" id="update-mongo">解封用户</button>
                                                <button class="col-md-12 btn btn-danger marginTop sink" id="update-mongo">沉底</button>
                                                <button class="col-md-12 btn btn-primary marginTop fish" id="update-mongo">海底捞</button>
                                                <button class="col-md-12 btn btn-info marginTop" id="update-mongo">已经滑动<span id="skipNum"></span>次</button>
                                                <button class="col-md-12 btn btn-success marginTop hoverZero" id="update-mongo">滑动清零</button>
                                                <button class="col-md-12 btn btn-warning marginTop givePhoto" id="update-mongo">给Ta一个头像</button>
                                            </div>
                                        </div>
                    
                                    </div>
                                    <!--分页-->
                                    <!-- <div class="pageTest"></div> -->
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <!-- BEGIN EXAMPLE TABLE PORTLET-->
                                <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption font-dark">
                                            <!-- <i class="icon-settings font-dark"></i> -->
                                            <span class="caption-subject bold uppercase">全部ugc及评论</span>
                                        </div>
                                        <!-- <div class="tools">添加话术</div> -->
                                    </div>
                                    <div class="portlet-body" id="ugcs">
                                        <!-- <div class="hr" style="border-bottom: 1px dotted red">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img src="http://images.gmugmu.com//41378532764429312_4" alt="">
                                                </div>
                                                <div class="col-md-2">正常</div>
                                                <div class="col-md-2">
                                                    <button>屏蔽此文章</button>
                                                    <button>解封此文章</button>
                                                </div>
                                                <div class="col-md-2">热门</div>
                                                <div class="col-md-3">
                                                    <p>点赞数：56</p>
                                                    <p>人工点赞数: <input type="text" value="999"></p>
                                                    <button class="btn btn-success">上热门</button>
                                                    <button class="btn btn-danger">下热门</button>
                                                </div>
                                            </div>
                                            <p><span>阿达西@17673253599:</span><span>哈哈哈哈</span><button class="btn btn-danger">屏蔽</button></p>
                                            <p><span>阿达西@17673253599:</span><span>哈哈哈哈</span><button class="btn btn-danger">屏蔽</button></p>
                                            <p><span>阿达西@17673253599:</span><span>哈哈哈哈</span><button class="btn btn-danger">屏蔽</button></p>
                                            <p><span>阿达西@17673253599:</span><span>哈哈哈哈</span><button class="btn btn-danger">屏蔽</button></p>
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
                            $('#phonePlace').html(province);
                            $('#phoneType').html(operators);

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
            var accountId = ls[1];
            // console.log('accountId'+accountId);
            // if(type == '1'){
            //     $('.typeTxt').html('用户');
            // }else if(type == '2'){
            //     $('.typeTxt').html('UGC');
            // }
            // var accountId = 2;
            console.log(accountId);
            accountInfo(accountId);
            $('#sendDetail').attr('href','/view/index-index#/barrageManage?type=1&&accountId='+accountId);
            $('#receiveDetail').attr('href','/view/index-index#/barrageManage?type=2&&accountId='+accountId);
            $('#reportDetail').attr('href','/view/index-index#/reportManage?type=2&&accountId='+accountId);

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
                            console.log(dataD);
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
                            // 显示沉底原因
                            if(dataD.reason){
                                $('#sinkReason').text(dataD.reason);
                            }else{
                                $('#sinkReason').text('不是沉底状态');
                            }
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

                            // if(!dataD.osString){
                            //     var userEditions ='暂时无用户系统版本信息';
                            // }else if(JSON.stringify(dataD.osString) == "{}"){
                            //      var userEditions ='暂时无用户系统版本信息';
                            // }else{
                            //     var userEditions = dataD.osString.MODEL+' | '+dataD.osString.BRAND+' | '+dataD.osString.SDK_RELEASE;
                            // }
                            var userEditions = dataD.osString;
                            $('#userEditions').val(userEditions);
                            $('#skipNum').html(dataD.slideCount);
                            
                            // $('#nickname').val(dataD.nickname);//用户系统版本
                            // 用户头像
                            var str = '';
                            var coversLen = dataD.covers.length;
                            var videoLen = dataD.videoName.length;
                            var src = dataD.covers[0]+'@q_80?'+randnum;
                            $('#firstImg').attr('src',src);
                            
                            //图片
                            for(var i = 0;i < coversLen;i++){
                                str +='<a style="float:left;margin-left:4px;" class="fancybox'+randnum+'"  href="'+dataD.covers[i]+'"data-fancybox-group="gallery" title="">';
                                str +='<img style="" src="'+dataD.covers[i]+'@w_200,q_80" alt="" /><div urls="'+dataD.covers[i]+'" class="join"><button class="btn btn-danger addBlack" style="display:inline-block">加入黑名单</button><button style="display:inline-block" class="btn btn-success addWhite">加入白名单</button></div></a>';
                                // str +='<img style="margin-left:5px;" src="'+dataD.covers[i]+'@w_200,q_80?'+randnum+'" />'
                            }
                            //视频
                            for(var i = 0;i < videoLen;i++){
                                str += '<div style="float:left;margin-left:4px;width:200px">';
                                str += '<video id="'+ i +'" style="width: 100%;" controls>';
                                str += '<source src="'+ dataD.videoName[i] +'" type="video/mp4"></video>';
                                if(dataD.verifyStatus[i] == '2'){
                                    str += '<div class="status" value="'+ dataD.videoId[i] +'"><button class="btn btn-danger delete">删除</button><button class="btn btn-warning pingbi">屏蔽</button><button class="btn btn-success pass">通过</button></div></div>';
                                }else if(dataD.verifyStatus[i] == '1'){
                                    str += '<div class="status" value="'+ dataD.videoId[i] +'"><button class="btn btn-danger delete">删除</button><button class="btn btn-warning pingbi">屏蔽</button><button class="btn btn-success pass" style="display:none">通过</button></div></div></div>';
                                }else if(dataD.verifyStatus[i] == '3'){
                                    str += '<div class="status" value="'+ dataD.videoId[i] +'"><button class="btn btn-danger delete">删除</button><button class="btn btn-warning pingbi" style="display:none">屏蔽</button><button class="btn btn-success pass">通过</button></div></div>';
                                }else if(dataD.verifyStatus[i] == '4'){
                                    str += '<div class="status" value="'+ dataD.videoId[i] +'"><button class="btn btn-danger delete" style="display:none">删除</button><button class="btn btn-warning pingbi" style="display:none">屏蔽</button><button class="btn btn-success pass" style="display:none">通过</button></div></div>';
                                }
                            }
                            $('#covers').empty();
                            $('#covers').append(str);
                            // 发送弹幕
                            var sendBullets = dataD.sendBullets;
                            var sendLen = dataD.sendBullets.length;
                            var sendStr = '';
                            for(var i=0;i<sendLen;i++){
                                sendStr +='<div class="row"><div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">';
                                if(sendBullets[i].anonymous == '1'){
                                    sendStr +='匿名:';
                                }else{
                                    sendStr +='实名:';
                                }
                                sendStr += ''+sendBullets[i].bullet+'&nbsp;&nbsp;@'+sendBullets[i].createTime+'</div>';
                                sendStr += '<div class="col-lg-3 col-md-3" style="padding-top: 5px;">'
                                sendStr += '<button style="margin-right:5px;" class="btn btn-danger delBarrage" ids="'+sendBullets[i].id+'">删除</button>';
                                sendStr += '<a href="/view/user-userMsg?accountId='+sendBullets[i].masterId+'"><button class="btn btn-info">查看主人</button></a></div></div>';
                            }
                            $('#sendBullets').empty();
                            $('#sendBullets').append(sendStr);
                            // 收到弹幕
                            var recBullets = dataD.recBullets;
                            var recLen = dataD.recBullets.length;
                            var recStr = '';
                            for(var i=0;i<recLen;i++){
                                recStr +='<div class="row"><div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">';
                                if(recBullets[i].anonymous == '1'){
                                    recStr +='匿名:';
                                }else{
                                    recStr +='实名:';
                                }
                                recStr += ''+recBullets[i].bullet+'&nbsp;&nbsp;@'+recBullets[i].createTime+'</div>';
                                recStr += '<div class="col-lg-3 col-md-3" style="padding-top: 5px;">'
                                recStr += '<button style="margin-right:5px;" class="btn btn-danger delBarrage" ids="'+recBullets[i].id+'">删除</button>';
                                recStr += '<a href="/view/user-userMsg?accountId='+recBullets[i].senderId+'"><button class="btn btn-info">查看主人</button></a></div></div>';

                            }
                            $('#recBullets').empty();
                            $('#recBullets').append(recStr);
                            // 投诉列表
                            var complains = dataD.complains;
                            var comLen = complains.length;
                            var comStr = '';
                            for(var i = 0;i < comLen;i++){
                                comStr += '<div class="col-lg-9 col-md-9" style="background: #dff0d8;padding: 12px;margin-top: 4px;">'+complains[i].complain+'</div>';
                                comStr += '<div class="col-lg-3 col-md-3">';
                                comStr += '<a href="/view/complainManage-reportEvidence?slaveId='+accountId+'"><button class="btn btn-info">查看被举报信息</button></a>';
                                comStr += '<a href="/view/user-userMsg?accountId='+complains[i].masterId+'"><button class="btn btn-info">查看主人</button></a></div>';
                            }
                            $('#complains').empty();
                            $('#complains').append(comStr);
                            $('#lnglat').val(dataD.lon+' , '+dataD.lat);
                            geocoder2(dataD.lon,dataD.lat);
                            var tel = dataD.account;//手机号
                            if(dataD.country == '中华人民共和国'){
                                var telNum = tel.substr(2);
                                place(telNum);
                            }else{
                                $('#phonePlace').html(dataD.country);
                            }
                            reStatus = dataD.status;//用户状态
                            userBtnStatus(dataD.status);
                            //ugcs的相关内容
                            var ugcs = dataD.ugcs;
                            var ugcsLen = ugcs.length;
                            var ugcStr = '';
                            // console.log('test'+ugcs[0].replies.length);
                            for(var i = 0;i<ugcsLen;i++){
                                // console.log(ugcs[i].replies.length);
                                ugcStr += '<div class="hr" style="border-bottom: 1px dotted red">';
                                ugcStr += '<div class="row"><div class="col-md-3">';
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
                                ugcStr += '<div class="col-md-1">'+ugcs[i].txtContent+'</div>';

                                ugcStr += '<div class="col-md-2" artId="'+ugcs[i].id+'">';
                                if(ugcs[i].status == '1'){
                                   ugcStr += '<button class="btn btn-success  shieldswen">屏蔽文章</button>';
                                   ugcStr += '<button class="btn btn-danger relievewen" style="display:none;">解封文章</button>';
                                }else if(ugcs[i].status == '3'){
                                    ugcStr += '<button class="btn btn-success  shieldswen" style="display:none">屏蔽文章</button>';
                                    ugcStr += '<button class="btn btn-danger  relievewen">解封文章</button>';
                                }else if(ugcs[i].status == '4'){
                                    ugcStr += '<button class="btn btn-success shieldswen" style="display:none">屏蔽文章</button>';
                                    ugcStr += '<button class="btn btn-danger  relievewen">解封文章</button>';
                                }
                                ugcStr +='</div>';
                                if(ugcs[i].hotTime == '0'){
                                    ugcStr += '<div class="hotStaue col-md-2">非热门</div>';
                                }else{
                                    ugcStr += '<div class="hotStaue col-md-2">热门</div>';
                                }
                                ugcStr +='<div class="col-md-2" artId="'+ugcs[i].id+'">';
                                ugcStr +='<p>点赞数:'+ugcs[i].totalSupports+'</p>';
                                ugcStr +='<p>人工点赞数:<input type="text" class="lThumb" value="'+ugcs[i].fakeSupportCount+'"></p>';
                                if(ugcs[i].hotTime == '0'){
                                    ugcStr += '<button class="btn btn-success upperHot">上热门</button>';
                                    ugcStr += '<button class="btn btn-danger lowerHot" style="display:none;">下热门</button>';
                                }else{
                                    ugcStr += '<button class="btn btn-success upperHot" style="display:none;">上热门</button>';
                                    ugcStr += '<button class="btn btn-danger lowerHot">下热门</button>';
                                }
                                ugcStr +='</div></div>';
                                for(var j=0;j<ugcs[i].replies.length;j++){
                                    ugcStr += '<p>';
                                    ugcStr += '<span class="green" style="color:green;">'+ugcs[i].replies[j].uinfo.nickname+'@<span>';
                                    ugcStr += '<span class="green" style="color:green;">'+ugcs[i].replies[j].uinfo.account+'<span>';
                                    ugcStr += '<span class="blue" style="color:blue;">'+ugcs[i].replies[j].replyContent+'<span>';
                                    if(ugcs[i].status == '1'){
                                        ugcStr += '<button class="btn btn-danger shieldreply" replyId="'+ugcs[i].replies[j].id+'">屏蔽</button>';
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
                // 黑名单操作
                $('.addBlack').on('click',function(){
                    var url = $(this).parent().attr('urls');
                    var type = 2;
                    shumeiList(type,url);
                    return false;
                })
                // 白名单操作
                $('.addWhite').on('click',function(){
                    var url = $(this).parent().attr('urls');
                    var type = 1;
                    shumeiList(type,url);
                    return false;
                })
                //删除
                $('.delete').on('click',function(){
                    var that = $(this);
                    var id = that.parent().attr('value');
                    musicDel(id,1,that);
                })
                // 屏蔽
                $('.pingbi').on('click',function(){
                    var that = $(this);
                    var id = that.parent().attr('value');
                    musicEdit(id,1,3,that);
                })
                // 通过
                $('.pass').on('click',function(){
                    var that = $(this);
                    var id = that.parent().attr('value');
                    musicEdit(id,1,1,that);
                })

                $('.upperHot').on('click',function(){
                    var r=confirm("确认要上热门吗？");
                    var id = $(this).parent().attr('artId');
                    var that = $(this);
                    if(r==true){
                        ugcUpdate('',id,'','',1,'','','',that);
                    }
                }) 
                $('.lowerHot').on('click',function(){
                    var r=confirm("确认要下热门吗？");
                    var id = $(this).parent().attr('artId');
                    var that = $(this);
                    if(r==true){
                        ugcUpdate('',id,'','',0,'','','',that);
                    }
                }) 
                $('.lThumb').on('change',function(){
                    var id = $(this).parent().parent().attr('artId');
                    var fakeSupportCount = $(this).val();
                    var that = $(this);
                    ugcUpdate('',id,'',fakeSupportCount,'','','','','');
                })
                // 屏蔽评论
                $('.shieldreply').on('click',function(){
                    var that = $(this);
                    var id = that.attr('replyId');
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
                    ugcUpdate('',id,'','','',3,'','',that)
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
                // 删除弹幕
                $('.delBarrage').on('click',function(){
                    var id = $(this).attr('ids');
                    var r=confirm("确认要删除这条弹幕吗？");
                    var obj = $(this);
                    if(r==true){
                       delBarrage(id,obj);
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
            $('.givePhoto').on('click',function(){
                var r=confirm("确认要给Ta一个头像吗？");
                var that = $(this);
                if(r==true){
                    givePhoto(accountId);
                }
            })


            // 滑动清零
            $('.hoverZero').on('click',function(){
                var r=confirm("确认要清零吗？");
                var that = $(this);
                if(r==true){
                    hoverZero(accountId);
                }
            })

            // 给狗头
            function givePhoto(accountId){
                $.ajax({
                    url:'/New/Account/coverHead',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId
                    },
                    success:function(data){
                        if(data.code == '200'){
                            var imgstr = '<img src="http://jimu-cover-dev1.bj.bcebos.com/4_iiiiii@w_200,q_80">';
                            $('#covers').append(imgstr);
                            // $('#covers').find('img').prop('src','http://jimu-cover-dev1.bj.bcebos.com/4_iiiiii@w_200,q_80');
                            $('#firstImg').prop('src','http://jimu-cover-dev1.bj.bcebos.com/4_iiiiii');
                        }else{
                            confirm("error");
                        }           
                    }
                })
            }
            // 滑动次数清零
            function hoverZero(accountId){
                $.ajax({
                    url:'/New/Account/cleanSlideCount',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId
                    },
                    success:function(data){
                        if(data.code == '200'){
                            $('#skipNum').html('0');
                        }else{
                            confirm("error");
                        }           
                    }
                })
            }
            // 清空发送弹幕
            $('#clear_all_send').on('click',function(){
                var r=confirm("确认要清空发送的弹幕吗？");
                if(r==true){
                   delallBarrage(accountId,1);
                }
            })
            // 清空收到弹幕
            $('#clear_all_rect').on('click',function(){
                var r=confirm("确认要清空收到的弹幕吗？");
                if(r==true){
                   delallBarrage(accountId,2);
                }
            })

            // 删除单条弹幕
            function delBarrage(id,obj){
                $.ajax({
                    url:'/New/Bullet/del',
                    type:"POST",
                    dataType:"json",
                    data:{
                        id:id
                    },
                    success:function(data){
                        if(data.code == '200'){
                           obj.parent().parent().remove();
                        }else{
                            confirm("error");
                        }           
                    }
                })
            }
            // 弹幕清空
            function delallBarrage(id,type){
                $.ajax({
                    url:'/New/Bullet/batchBulletDel',
                    type:"POST",
                    dataType:"json",
                    data:{
                        id:id,
                        type:type//1清空发送弹幕2.清空收到弹幕
                    },
                    success:function(data){
                        if(data.code == '200'){
                           if(type == 1){
                                $('#sendBullets').empty();
                           }else if(type == 2){
                                $('#recBullets').empty();
                           }
                        }else{
                            confirm("error");
                        }           
                    }
                })
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
                            confirm("error");
                        }           
                    }
                })
            }

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
                            $('.dialog').fadeOut('normal');
                            $('.sinkback').fadeOut('normal');
                            $('#remark').val(remark);
                            userBtnStatus(status);
                        }else{
                            confirm("error");
                        }           
                    }
                })
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
                            confirm("error");
                        }           
                    }
                })
            }
            // 添加备注
             function userRemark(accountId,remark){
                $.ajax({
                    url:'/New/Account/updateInfo',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId,
                        remark:remark
                    },
                    success:function(data){
                        if(data.code == '200'){
                            $('.dialog').fadeOut('normal');
                            $('#remark').val(remark);
                        }else{
                            confirm("error");
                        }           
                    }
                })
            }
            //刘波回复及发送短信接口
            function replyMsg(accountId,msg,msgType){
                $.ajax({
                    url:'/New/Account/replyMsg',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId,
                        msg:msg,
                        msgType:msgType
                    },
                    success:function(data){
                        if(data.code == '200'){
                            $('.dialog').fadeOut('normal');
                        }else{
                            confirm("error");
                        }           
                    }
                }) 
            }
            // userBtnStatus(reStatus);
            function userBtnStatus(status){
                if(status == '0'){
                    $('.shield').css('display','none');
                    $('.relieve').css('display','block');
                    $('.sink').css('display','block');
                    $('.fish').css('display','none');
                }else if(status == '1'){
                    $('.shield').css('display','block');
                    $('.relieve').css('display','none');
                    $('.sink').css('display','block');
                    $('.fish').css('display','none');
                }else if(status == '2'){
                    $('.shield').css('display','none');
                    $('.relieve').css('display','none');
                    $('.sink').css('display','none');
                    $('.fish').css('display','block');
                }
            }

            // 屏蔽
            $('.shield').on('click',function(){
                userStatus(accountId,0,'','','');
            })
            // 解封
            $('.relieve').on('click',function(){
                userStatus(accountId,1,'','','');
            })
            // 沉底
            sinkList();
            function sinkList(){
                $.ajax({
                    url:'/New/SAdmin/dlist/sink_reason',
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
                            // confirm("error");
                        }
                    }
                })
            }

            // 加入数美名单
            function shumeiList(type,url){
                $.ajax({
                    url:'/New/Account/imgJoinList',
                    type:"POST",
                    dataType:"json",
                    data:{
                        type:type,//1白名单2黑名单
                        url:url
                    },
                    success:function(data){
                        if(data.code == '200'){
                            if(data.data == '200'){
                                $('.numCgdialog .smcontent p').html('添加成功');
                                $('.numCgdialog').fadeIn('normal');
                                setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
                            }if(data.data == '400'){
                                $('.numCgdialog .smcontent p').html('已经添加，请勿重复添加');
                                $('.numCgdialog').fadeIn('normal');
                                setTimeout(function(){$('.numCgdialog').fadeOut('normal');},800);
                            }
                        }else{
                        }
                    }
                })
            }

            // 编辑接口
            function musicEdit(id,typeStatus,verifyStatus,obj){
                $.ajax({
                    url:'/New/CheckVideo/videoEdit',
                    type:"POST",
                    dataType:"json",
                    data:{
                        id:id,
                        typeStatus:typeStatus,
                        verifyStatus:verifyStatus,
                    },
                    success:function(data){
                        console.log(data);
                        if(data.code == '200'){
                            if(verifyStatus == '2'){//待审核
                                obj.css('display','none');
                                obj.parent().find('.delete').css('display','inline-block');
                                obj.parent().find('.pingbi').css('display','inline-block');
                                obj.parent().find('.pass').css('display','inline-block');
                            }else if(verifyStatus == '1'){//通过
                                obj.css('display','none');
                                obj.parent().find('.delete').css('display','inline-block');
                                obj.parent().find('.pingbi').css('display','inline-block');
                            }else if(verifyStatus == '3'){//屏蔽
                                obj.css('display','none');
                                obj.parent().find('.delete').css('display','inline-block');
                                obj.parent().find('.pass').css('display','inline-block');
                            }else if(verifyStatus == '4'){//删除
                                obj.css('display','none');

                            }else{

                            }
                        }else{
                            
                        }	        
                    }
                })
            }
            // 删除接口
            function musicDel(id,type,obj){
                $.ajax({
                    url:'/New/CheckVideo/videoDel',
                    type:"POST",
                    dataType:"json",
                    data:{
                        id:id,
                        typeStatus:type,
                    },
                    success:function(data){
                        console.log(data);
                        if(data.code == '200'){
                            obj.parent().css('display','none');
                        }else{
                            
                        }	        
                    }
                })
            }

            $('.sink').on('click',function(){
                var that = $(this);
                $('.sinkback').fadeIn('normal');
                $("body,html").css({"overflow":"hidden"});

                var kaiguan = 1;
                if(kaiguan){
                    $('#sinkbackBtn').unbind('click').bind('click',function(){
                        $("body,html").css({"overflow":"auto"});
                        var sinkReasonId = $('#sinkList option:selected').attr('value');
                        var remark = $('#sinkList option:selected').html();
                        // console.log(remark);
                        // console.log(sinkReasonId);
                        userStatus(accountId,2,'',remark,'',sinkReasonId);
                    })
                    kaiguan = 0;
                }
            })
            // userBtnStatus(2);
            // $('.sink').on('click',function(){
            //     userStatus(accountId,2,'','','');
            // })
            
            // 海底捞
            $('.fish').on('click',function(){
                userStatus(accountId,1,'','','');
            })
            // 替换头像
            $('#exchange').on('click',function(){
                var r=confirm("确认要替换头像吗？");
                if(r==true){
                    exchange(accountId);
                }
            })

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
                            // $('.shieldlog').fadeOut('normal');
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
                            confirm("error");
                        }           
                    }
                })
            }
            
            // 替换头像接口
            function exchange(accountId){
                $.ajax({
                    url:'/New/Account/coverReset',
                    type:"POST",
                    dataType:"json",
                    data:{
                        accountId:accountId
                    },
                    success:function(data){
                        if(data.code == '200'){
                            $('#covers').find('img').prop('src','http://jimu-cover-dev1.bj.bcebos.com/4_iiiiii@w_200,q_80');
                            $('#firstImg').prop('src','http://jimu-cover-dev1.bj.bcebos.com/4_iiiiii');
                        }else{
                            confirm("error");
                        }           
                    }
                })
            }
            // 添加备注
            $('.addRemark').on('click',function(){
                $('.dialog').fadeIn('normal');
                $('.dialogTitle').html('添加备注');
                $('#wordsTxt').val('');
                $('#wordsEditBtn').unbind('click').bind('click',function(){
                    var remark = $('#wordsTxt').val();
                    userRemark(accountId,remark);
                    // userStatus(accountId,'','',remark,'');
                })
            })
            // 刘波回复
            $('.liboReply').on('click',function(){
                $('.dialog').fadeIn('normal');
                $('.dialogTitle').html('刘波回复');
                $('#wordsTxt').val('');
                $('#wordsEditBtn').unbind('click').bind('click',function(){
                    var msg = $('#wordsTxt').val();
                    replyMsg(accountId,msg,'1');
                })
            })
            // 给用户发送短信
            $('.sendMsg').on('click',function(){
                $('.dialog').fadeIn('normal');
                $('.dialogTitle').html('发送短信');
                $('#wordsTxt').val('');
                $('#wordsEditBtn').unbind('click').bind('click',function(){
                    var msg = $('#wordsTxt').val();
                    replyMsg(accountId,msg,'2');
                })
            })

            

            $('.fancybox'+randnum+'').fancybox({
                'type':'image',
                helpers:  {
                    
                }
            });
        	
        </script>
    </body>


</html>