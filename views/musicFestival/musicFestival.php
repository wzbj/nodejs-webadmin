<DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->
    <head>
        <meta charset="utf-8" />
        <title>音乐节资料</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <link href="/public/css/index/bootstrap.min.css"  rel="stylesheet" type="text/css" />
        <link href="/public/css/index/bootstrap-switch.min.css"  rel="stylesheet" type="text/css" />
        <!-- END GLOBAL MANDATORY STYLES -->
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        <link href="/public/css/common/datatables.min.css" rel="stylesheet" type="text/css" />
        <link href="/public/css/common/datatables.bootstrap.css"  rel="stylesheet" type="text/css" />
          <!--弹窗轮播开始-->
        <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox.css?v=2.1.2" media="screen" />
        <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox-buttons.css?v=1.0.5" />
        <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox-thumbs.css?v=1.0.7" />
        <!--弹窗轮播结束-->        <!-- BEGIN THEME GLOBAL STYLES -->
        <!-- BEGIN THEME GLOBAL STYLES -->
        <link href="/public/css/common/components.min.css"  rel="stylesheet" id="style_components" type="text/css" />
        <link href="/public/css/common/plugins.min.css"  rel="stylesheet" type="text/css" />
        <link href="/public/css/common/pager.css" rel="stylesheet">
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
                                                <span class="caption-subject bold uppercase">音乐节资料</span>&nbsp;&nbsp;&nbsp;&nbsp;总条数:<span id="allNum" style="color: red;"></span>
                                            </div>
                                            <!-- <div class="tools">添加话术</div> -->
                                        </div>
                                        <div class="portlet-title">
					                        <div class="row">   
					                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 md-radio-inline">
					                                <span>
					                                审核状态：
					                                </span>
					                                <div class="md-radio">
					                                    <input type="radio"  checked id="checkbox2_10" name="radio3" value="" class="md-radiobtn selectRadio">
					                                    <label for="checkbox2_10">
					                                        <span></span>
					                                        <span class="check"></span>
					                                        <span class="box"></span>默认</label>
					                                </div>
					                                <div class="md-radio">
					                                    <input type="radio"  id="checkbox2_11" name="radio3" value="2" class="md-radiobtn selectRadio">
					                                    <label for="checkbox2_11">
					                                        <span></span>
					                                        <span class="check"></span>
					                                        <span class="box"></span>未下载</label>
					                                </div>
					                                <div class="md-radio">
					                                    <input type="radio" id="checkbox2_12" name="radio3" value="1" class="md-radiobtn selectRadio">
					                                    <label for="checkbox2_12">
					                                        <span></span>
					                                        <span class="check"></span>
					                                        <span class="box"></span>已下载</label>
					                                </div>
					                            </div>
					                            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6" style="text-align: left;">
					                				<button type="button" class="btn btn-success" id="search"><i class="icon-magnifier">&nbsp;</i>搜索</button> 
					                				<!-- <button type="button" class="btn btn-warning" id="search"><i class="icon-magnifier">&nbsp;</i>下载</button>  -->
					                			</div>
					                        </div>
					                         <div class="row">   
					                            <div class="col-lg-12 col-md-12 col-sm-6 col-xs-6 md-radio-inline">
					                                <span>
					                                顺序筛选：
					                                </span>
					                                <div class="md-radio">
					                                    <input type="radio"  checked id="checkbox2_7" name="radio2" value="2" class="md-radiobtn selectRadio">
					                                    <label for="checkbox2_7">
					                                        <span></span>
					                                        <span class="check"></span>
					                                        <span class="box"></span>倒序</label>
					                                </div>
					                                <div class="md-radio">
					                                    <input type="radio" id="checkbox2_8" name="radio2" value="1" class="md-radiobtn selectRadio">
					                                    <label for="checkbox2_8">
					                                        <span></span>
					                                        <span class="check"></span>
					                                        <span class="box"></span>正序</label>
					                                </div>
					                            </div>
					                        </div>
					                    </div>
                                        <div class="portlet-body">
                                            <table class="table table-striped table-bordered table-hover" id="sample_1">
                                                <thead>
                                                    <tr>
                                                        <th class="duan10">ID</th>
                                                        <th class="duan20">提交日期</th>
                                                        <th class="duan10">状态</th>
                                                        <th class="duan20">照片</th>
                                                        <th class="duan10">昵称</th>
                                                        <th class="duan10">微信号</th>
                                                        <th class="duan20">交友宣言</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tabledata">

                                                	
                                                </tbody>
                                            </table>
                                            <div>
                                                <ul class="pagination" id="page1">
                                                </ul>
                                                <div class="pageJump">
                                                    <span>跳转到</span>
                                                    <input type="text"/ style="width: 50px!important;">
                                                    <span>页</span>
                                                    <button type="button" class="button">确定</button>
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
        <script src="/public/js/common/pager.js" type="text/javascript"></script>
        <script src="/public/js/common/mytools.js"  type="text/javascript"></script>
		<script type="text/javascript">
            var loading = '<tr id="loading"><td colspan="7"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
            var randomNum = Math.floor(Math.random()*160);
		    var currentAjax,
                allPage;
                var status = '',
                    createTime = 2;
                var page =1;
            $('#search,.selectRadio').on('click',function(){
                $('#page1').empty();
                $('#tabledata').html('');
                page =1;
                status = $("input[type='radio'][name='radio3']:checked").val();
                createTime = $("input[type='radio'][name='radio2']:checked").val();
                musicerList(status,createTime,page);
            })
			// 音乐列表接口
			musicerList(status,createTime,page);
			function musicerList(status,createTime,page){
				if(currentAjax){
                    currentAjax.abort();
                }   
                currentAjax = $.ajax({
			        url:'/New/MusicFestival/musicFestivalList',
			        type:'POST',
			        dataType:'json',
			        data:{
			        	status:status,
			        	createTime:createTime,
                        pageNum:page,
                        pageSize:50
			        },
			        success:function(data){
			            if( data &&  data.code == '200'){
			            	var dataD = data.data;
                            allPage = Math.ceil((dataD.total_num)/50);
                            var result = dataD.result;
			            	var len = result.length;
				        	var str = '';
                            $('#allNum').text(dataD.total_num);

				        	$('#tabledata').empty();
				        	if(len>0){
				        		for(var i=0;i<len;i++){
					        		str += '<tr><td>'+result[i].id+'</td>';
                                    str += '<td>'+result[i].createTime+'</td>';
                                    if(result[i].status=='1'){
                                        str += '<td>已下载</td>';
                                    }else if(result[i].status == '2'){
                                        str += '<td>未下载</td>';
                                    }
                                    str +='<td><a class="fancybox'+randomNum+'"  href="'+result[i].picture+'"data-fancybox-group="gallery" title="">';
                                    str +='<img style="" src="'+result[i].picture+'@w_120,q_60" alt="" /></a></td>';
                                    str += '<td>'+result[i].weChatName+'</td>';
                                    str += '<td>'+result[i].weChatNumber+'</td>';
					        		str += '<td>'+result[i].autograph+'</td></tr>';
				        		}
                                Page({
                                    num:allPage,                    //页码数
                                    startnum:page,              //指定页码
                                    elem:$('#page1'),       //指定的元素
                                    callback:function(n){   //回调函数
                                        page = n;
                                        window.scrollTo(0,0);
                                        $('#tbody').html(loading);
                                        $('#currentPage').html(page);
                                        
                                        musicerList(status,createTime,page);
                                    }
                                });
				        	}else{
				        		str = '<tr><td colSpan = "7">暂时没有数据</td></tr>';
				        	}
                            loadFn();
				        	$('#tabledata').append(str);
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