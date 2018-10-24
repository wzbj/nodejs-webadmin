<DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>举报凭证 </title>
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
        <!--弹窗轮播结束-->        <!-- BEGIN THEME GLOBAL STYLES -->
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
        table tr td img{
            float: left;
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

        td a img{
			width: 60px;

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
                                                <span class="caption-subject bold uppercase">举报凭证详细信息</span>
                                            </div>
                                            <!-- <div class="tools">添加话术</div> -->
                                        </div>
                                        <div class="note note-success row" style="color: red">提示:查看被举报用户IP,昵称，个性签名直接点击连接即可</div>
                                        <div class="portlet-body">
                                            <table class="table table-striped table-bordered table-hover" id="sample_1">
                                                <thead>
                                                    <tr>
                                                        <th class="duan5">信息ID</th>
                                                        <th class="duan20">举报人头像</th>
                                                        <th class="duan20">被举报人头像</th>
                                                        <th class="duan20">被举报截图</th>
                                                        <th class="duan10">举报内容</th>
                                                        <th class="duan10">举报时间</th>
                                                        <th class="duan10">被举报用户重要信息</th>
                                                        <th class="duan5">操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tabledata">
													<!-- <tr>
														<td>93</td>
														<td><img src="http://jimu-cover-dev1.bj.bcebos.com/764_iiiiii@w_120,q_60?1523340326" alt=""></td>
														<td><img src="http://jimu-cover-dev1.bj.bcebos.com/764_iiiiii@w_120,q_60?1523340326" alt=""></td>
														<td><img src="http://jimu-cover-dev1.bj.bcebos.com/764_iiiiii@w_120,q_60?1523340326" alt=""></td>
														<td>用户所发布的弹幕存在不良内容</td>
														<td>2018-03-20 11:46:10</td>
														<td>
															<a href=""><div style="text-align: left;color: red;">ip:<span>192.168.10.69</span></div></a>
															<a href=""><div style="text-align: left;color: green;">昵称：<span>三生三世</span></div></a>
															<a href=""><div style="text-align: left;color: red;">个性签名：<span>空间大书法家连接方式</span></div></a>
														</td>
														<td class="all">
					                                    	<div class="controlselect">
					                                    		<span>操作</span><i></i>
					                                    		<div class="selectmap">
					                                    			<div class="shields">沉底</div>
					                                    			<div class="sink">举报用户</div>
					                                    			<div class="sink">被举报用户</div>
					                                    		</div>
					                                    	</div>
					                                    </td>
													</tr> -->
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
			var ls = document.location.href.split('=');
			var slaveId = ls[1];
            var randomNum = Math.floor(Math.random()*1200);
            var randomNum1 = Math.floor(Math.random()*1210);
			var randomNum2 = Math.floor(Math.random()*1220);
			complainInfo(slaveId);
			// $('.sink').on('click',function(){
   //              console.log(22222222);
			//  	var that = $(this);
			//  	module.sink(that);
			// })
        	

			// 回复接口
			function complainInfo(slaveId){
				$.ajax({
			        url:'/New/Complain/complainInfo',
			        type:'POST',
			        dataType:'json',
			        async:false,
			        data:{
			        	slaveId:slaveId
			        },
			        success:function(data){
			            if( data &&  data.code == '200'){
			            	var dataD = data.data;
			            	var len = dataD.length;
				        	var str = '';
				        	$('#tabledata').empty();
				        	if(len>0){
				        		for(var i=0;i<len;i++){
					        		str += '<tr><td><input type="hidden" value="'+dataD[i].slaveInfo.accountId+'">'+(i+1)+'</td><td>';
					        		for(var j = 0;j<dataD[i].masterInfo.covers.length;j++){
										// str +='<img style="" src="'+dataD[i].masterInfo.covers[j]+'@w_120,q_60" alt="" />';
                                        str +='<a class="fancybox'+randomNum+'"  href="'+dataD[i].masterInfo.covers[j]+'"data-fancybox-group="gallery" title="">';
                                        str +='<img style="" src="'+dataD[i].masterInfo.covers[j]+'@w_120,q_60" alt="" /></a>';
									}
									str +='</td><td>';
									for(var j = 0;j<dataD[i].slaveInfo.covers.length;j++){
										// str +='<img style="" src="'+dataD[i].slaveInfo.covers[j]+'@w_120,q_60" alt="" />';
                                        str +='<a class="fancybox1'+randomNum1+'"  href="'+dataD[i].slaveInfo.covers[j]+'"data-fancybox-group="gallery" title="">';
                                        str +='<img style="" src="'+dataD[i].slaveInfo.covers[j]+'@w_120,q_60" alt="" /></a>';
									}
									str += '</td><td>';
									for(var j = 0;j<dataD[i].imgs.length;j++){
										// str +='<img style="" src="'+dataD[i].imgs[j]+'@w_120,q_60" alt="" />';
                                        str +='<a class="fancybox2'+randomNum2+'"  href="'+dataD[i].imgs[j]+'"data-fancybox-group="gallery" title="">';
                                        str +='<img style="" src="'+dataD[i].imgs[j]+'@w_120,q_60" alt="" /></a>';
									}
					        		str += '</td><td>'+dataD[i].complain+'</td>';
					        		str += '</td><td>'+dataD[i].createTime+'</td><td>';
					        		str += '<a class="userIp" target="_blank" href="/view/user-userDetaile?type=1&slaveInfo='+dataD[i].slaveInfo.ip+'">';
					        		str += '<div>ip:'+dataD[i].slaveInfo.ip+'</div></a>';
					        		str += '<a class="userNick" target="_blank" href="/view/user-userDetaile?type=2&slaveInfo='+dataD[i].slaveInfo.nickname+'">';
					        		str += '<div>昵称:'+dataD[i].slaveInfo.nickname+'</div></a>';
					        		str += '<a class="userSign" target="_blank" href="/view/user-userDetaile?type=3&slaveInfo='+dataD[i].slaveInfo.sign+'">';
					        		str += '<div>签名:'+dataD[i].slaveInfo.sign+'</div></a></td>';
					        		// str += '<td class="all"><div class="controlselect"><span>操作</span><i></i><div class="selectmap">';
                                    str += '<td>';
					        		// str +='<button class="btn btn-danger sink">沉底</button>';
									str +='<a href="/view/user-userMsg?accountId='+dataD[i].masterInfo.accountId+'" target="_blank"><button class="btn btn-primary">查看举报用户</button></a>';
									str +='<a href="/view/user-userMsg?accountId='+dataD[i].slaveInfo.accountId+'" target="_blank"><button class="btn btn-primary">查看被举报用户</button></a>';
									// str +='<div class="sink">未读消息</div>';
                                    str +='</td></tr>';
									// str +='</div></div></td></tr>';
				        		}
				        	}else{
				        		str = '<tr><td colSpan = "8">暂时没有数据</td></tr>';
				        	}
				        	$('#tabledata').append(str);
				        	loadFn();
			            }else{
			            	console.log(data.msg);
			            }
			        }
			    });
			
			}
			
            function loadFn(){
                $('.sink').on('click',function(){
                    console.log(111111);
                    var that = $(this);
                    module.sink(that);
                })

                $('.fancybox'+randomNum+'').fancybox({
                    'type':'image',
                    helpers:  {
                        
                    }
                });
                $('.fancybox1'+randomNum1+'').fancybox({
                    'type':'image',
                    helpers:  {
                        
                    }
                });
                $('.fancybox2'+randomNum2+'').fancybox({
                    'type':'image',
                    helpers:  {
                        
                    }
                });
            }

	
        	
        </script>
    </body>


</html>