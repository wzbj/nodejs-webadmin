<DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta charset="utf-8" />
        <title>话术模板 </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <link href="/public/css/index/bootstrap.min.css"  rel="stylesheet" type="text/css" />
        <link href="/public/css/index/bootstrap-switch.min.css"  rel="stylesheet" type="text/css" />
        <!-- END GLOBAL MANDATORY STYLES -->
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        <link href="/public/css/common/datatables.min.css" rel="stylesheet" type="text/css" />
        <link href="/public/css/common/datatables.bootstrap.css"  rel="stylesheet" type="text/css" />
        <!-- <link href="/public/css/anchor/bootstrap-datepicker3.min.css"  rel="stylesheet" type="text/css" /> -->
        <!-- END PAGE LEVEL PLUGINS -->
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
                                                	<em style="font-style: normal;" class="typeTxt"></em>话术模板</span>
                                            </div>
                                            <!-- <div class="tools">添加话术</div> -->
                                        </div>
                                        <div class="portlet-title">
					                    	<div class="row">
					                    		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align: right;padding-bottom: 15px;color: #fff;">
					                                <button type="button" id="addWords" class="btn orbit" style="background: #436EEE;"><!--<i class="icon-share-alt ">&nbsp;</i>-->添加<span class="typeTxt"></span>类型话术</button> 
					                            </div>
					                    	</div>
					                    </div>
                                        <div class="portlet-body">
                                            <table class="table table-striped table-bordered table-hover" id="sample_1">
                                                <thead>
                                                    <tr>
                                                        <th class="duan10">编号</th>
                                                        <th class="duan80">话术内容</th>
                                                        <th class="duan10">编辑</th>
                                                        
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
<!--添加的弹窗-->
<div class="smdialog wordsAdddialog" style="display: none;">
	<div class="portlet-body form smdialogcontent">
        <div class="modal-header modal-headers">
        	<div class="dialogclose dialogcloses">
        		<img src="/public/img/common/remove-icon-small.png"/>
        	</div>
        	<h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>添加话术内容</h4>
        </div>
        <div class="modal-body">
       	<!--内容开始-->
       		<div class="smcontent">
       			<!--<p>确定删除<span class="red">道具目名称(8888)</span>道具吗？</p>-->
       			<textarea id="wordsTxt1" name="" rows="5" cols="" class="form-control"></textarea>
                <span class="help-block remarkMsg" style="color:red"></span>
       		</div>
       	<!--内容结束-->
        </div>
        <div class="modal-footer">
        	<button class="btn default smdialogcloses">取消</button>
        	<button id="wordsAddBtn" class="btn green">确定</button>
        </div>
     </div>
</div>
<!--编辑的弹窗-->
<div class="smdialog wordsEditdialog" style="display: none;">
	<div class="portlet-body form smdialogcontent">
        <div class="modal-header modal-headers">
        	<div class="dialogclose dialogcloses">
        		<img src="/public/img/common/remove-icon-small.png"/>
        	</div>
        	<h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>编辑话术内容</h4>
        </div>
        <div class="modal-body">
       	<!--内容开始-->
       		<div class="smcontent">
       			<!--<p>确定删除<span class="red">道具目名称(8888)</span>道具吗？</p>-->
       			<textarea id="wordsTxt2" name="" rows="5" cols="" class="form-control"></textarea>
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
        <script src="/public/js/common/page.js"  type="text/javascript"></script>
        <script src="/public/js/common/mytools.js"  type="text/javascript"></script>
		<script type="text/javascript">
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
            var Request = new Object();  
            Request = GetRequest();
            var typeId = Request.typeId;
            var typeTxt = Request.typeTxt; 
            console.log(typeId);
            console.log(typeTxt);
            $('.typeTxt').html(typeTxt);
   //          console.log(Request);

			// var ls = document.location.href.split('=');
   //      	var typeTxt = ls[2];
   //      	var typeId= ls[1].split('&')[0];
   //      	console.log(typeId);
        	// console.log(typeTxt);
        	
	// 话术列表
	wordsList(typeId);
	function wordsList(typeId){
		$.ajax({
	        url:'/New/Words/wordsList',
	        type:"POST",
	        dataType:"json",
	        async: true,
	        data:{
	        	typeId:typeId
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var len = dataD.length;
					var str = '';
					$('#tabledata').empty();
					for(var i=0;i<len;i++){
						str+='<tr class="tr'+dataD[i].id+'"><td>'+dataD[i].id+'</td>';
						str+='<td>'+dataD[i].text+'</td>';
						str+='<td><button type="button" class="btn btn-warning edit" value="'+dataD[i].id+'">编辑</button>';
                        str+='<button class="btn btn-danger delete">删除</button></td></tr>';
						// str+='<td><button type="button" class="btn btn-danger">回复<button></td></tr>'
					}
					$('#tabledata').append(str);
                    loadFun();
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}
	// 话术编辑
	function wordsEdit(typeId,id,text){
		$.ajax({
	        url:'/New/Words/wordsEdit',
	        type:"POST",
	        dataType:"json",
	        async: false,
	        data:{
	        	typeId:typeId,
	        	id:id,
	        	text:text
	        },
	        success:function(data){
				if(data.code == '200'){
					$('.wordsEditdialog').fadeOut('normal');
					$('.wordsAdddialog').fadeOut('normal');
					wordsList(typeId);
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}
	// 回复
    loadFun();
    function loadFun(){
        $('.edit').on('click',function(){
            var that = $(this);
            var id = that.attr('value');
            // $('.wordsTitle').html('编辑');
            $('.wordsEditdialog').fadeIn('normal');
            $('#wordsTxt2').val($(this).parent().parent().find('td').eq(1).html());
            $('#wordsEditBtn').unbind('click').bind('click',function(){
                var text = $('#wordsTxt2').val();
                wordsEdit(typeId,id,text);
            })
        })
        $('.delete').on('click',function(){
            var obj = $(this);
            var id = obj.parent().parent().find('td').eq(0).html();
            var r=confirm("确认要删除这条话术吗？");
            if(r==true){
                operationCom.del('words',id,obj);
            }
        })
    }
	
	
	// 添加话术弹窗
	$('#addWords').on('click',function(){
		// $('.wordsTitle').html('添加');
		$('#wordsTxt1').val('');
		$('.wordsAdddialog').fadeIn('normal');
		$('#wordsAddBtn').unbind('click').bind('click',function(){
			var text = $('#wordsTxt1').val();
			wordsEdit(typeId,'',text);
		})
	})
        	
        </script>
    </body>


</html>