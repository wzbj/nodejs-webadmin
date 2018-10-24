<DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta charset="utf-8" />
        <title>用户修改资料日志 </title>
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
        .pageTest{ width: 400px; height: 50px;margin: 0 auto; margin-top: 40px;}
	    .activP{
	      background-color: #337ab7!important;
	      color: #fff!important;
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
                                                <span class="caption-subject bold uppercase">
                                                	<em style="font-style: normal;" class="typeTxt">用户</em>修改资料日志</span>
                                            </div>
                                            <div class="tools red">注意:此页为修改之前资料的记录</div>
                                        </div>
                                        
                                        <div class="portlet-body">
                                            <table class="table table-striped table-bordered table-hover" id="sample_1">
                                                <thead>
                                                    <tr>
                                                        <th class="duan8">用户id</th>
                                                        <th class="duan8">昵称</th>
                                                        <th class="duan28">头像</th>
                                                        <th class="duan10">目的</th>
                                                        <th class="duan15">签名</th>
                                                        <th class="duan10">标签</th>
                                                        <th class="duan6">状态</th>
                                                        <th class="duan15">修改时间</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tabledata">
                                                	
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


    

        <!-- END QUICK NAV -->
        <!--[if lt IE 9]>
<script src="respond.min.js" tppabs="http://keenthemes.com/preview/metronic/theme/assets/global/plugins/respond.min.js"></script>
<script src="excanvas.min.js" tppabs="http://keenthemes.com/preview/metronic/theme/assets/global/plugins/excanvas.min.js"></script> 
<script src="ie8.fix.min.js" tppabs="http://keenthemes.com/preview/metronic/theme/assets/global/plugins/ie8.fix.min.js"></script> 
<![endif]-->
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
		<script type="text/javascript">
            var randomNum = Math.floor(Math.random()*1310);
			var ls = document.location.href.split('=');
			var accountId = ls[1];
			actionLog(accountId);
			function actionLog(accountId){
				$.ajax({
			        url:'/New/Account/editLog',
			        type:'POST',
			        dataType:'json',
			        data:{
			        	accountId:accountId
			        },
			        success:function(data){
			            if( data &&  data.code == '200'){
			            	var dataD = data.data;
			            	var len = dataD.length;
				        	var str = '';
				        	$('#tabledata').empty();
				        	if(len>0){
				        		for(var i=0;i<len;i++){
					        		str += '<tr><td>'+dataD[i].accountId+'</td>';
                                    str += '<td>'+dataD[i].nickname+'</td><td>';
                                    for(var j = 0;j<dataD[i].covers.length;j++){
                                        // str +='<img style="" src="'+dataD[i].masterInfo.covers[j]+'@w_120,q_60" alt="" />';
                                        str +='<a class="fancybox'+randomNum+'"  href="'+dataD[i].covers[j]+'"data-fancybox-group="gallery" title="" style="margin-right:2px;float:left;">';
                                        str +='<img style="" src="'+dataD[i].covers[j]+'@w_120,q_60" alt="" /></a>';
                                    }
                                    str += '</td>';
                                    str += '<td>'+dataD[i].intent+'</td>';
                                    str +='<td>'+dataD[i].sign+'</td>';
					        		str += '<td>'+dataD[i].tag+'</td>';
                                    if(dataD[i].status == '0'){
                                        str += '<td>封禁</td>'
                                    }else if(dataD[i].status == '1'){
                                        str += '<td>正常</td>'
                                    }else if(dataD[i].status == '2'){
                                        str += '<td>沉底</td>'
                                    }else{
                                        str += '<td></td>'
                                    }
					        		str += '<td>'+dataD[i].createTime+'</td></tr>';
				        		}
				        	}else{
				        		str = '<tr><td colSpan = "6">暂时没有数据</td></tr>';
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
                $('.fancybox'+randomNum+'').fancybox({
                    'type':'image',
                    helpers:  {
                        
                    }
                });
               
            }
			

	
        	
        </script>
    </body>


</html>