<DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta charset="utf-8" />
        <title>留言列表 </title>
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
         <!--弹窗轮播开始-->
        <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox.css?v=2.1.2" media="screen" />
        <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox-buttons.css?v=1.0.5" />
        <link rel="stylesheet" type="text/css" href="/public/css/fancybox/jquery.fancybox-thumbs.css?v=1.0.7" />
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
        tbody tr td a img{
        	float: left;
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
                                                <span class="caption-subject bold uppercase">对话列表</span>
                                            </div>
                                            <div class="tools"> </div>
                                        </div>
                                        <div class="portlet-title">
					                    	<div class="row">
					                    		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align: right;padding-bottom: 15px;color: #fff;">
					                                <button type="button" id="addWords" class="btn btn-warning allreads" ><!--<i class="icon-share-alt ">&nbsp;</i>-->全部已读</button> 
					                            </div>
					                    	</div>
					                    </div>
                                        <div class="portlet-body">
                                            <table class="table table-striped table-bordered table-hover" id="sample_1">
                                                <thead>
                                                    <tr>
                                                        <th class="duan10">编号ID</th>
                                                        <th class="duan10">用户ID</th>
                                                        <th class="duan20">用户头像</th>
                                                        <th class="duan20">留言信息</th>
                                                        <th class="duan10">信息状态</th>
                                                        <th class="duan10">留言时间</th>
                                                        <th class="duan10">属性</th>
                                                        <th class="duan10">操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tabledata">

                                                </tbody>
                                            </table>
                                        </div>
                                        <!--分页-->
                                        <div class="pageTest"></div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!--屏蔽弹窗-->
<div class="lgdialog shieldlog" style="display: none;">
	<div class="portlet-body form lgdialogcontent ">
        <div class="modal-header modal-headers">
        	<div class="dialogclose dialogcloses">
        		<img src="/public/img/common/remove-icon-small.png"/>
        	</div>
        	<h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>回复</h4>
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
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">自定义回复:</label>
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
        <!-- <script src="/public/js/common/datatables.min.js"  type="text/javascript"></script> -->
        <!-- <script src="/public/js/common/datatables.bootstrap.js"  type="text/javascript"></script> -->
         <!--弹窗轮播开始-->
        <script type="text/javascript" src="/public/js/fancybox/jquery-1.8.2.min.js"></script>
        <script type="text/javascript" src="/public/js/fancybox/jquery.fancybox.js?v=2.1.3"></script>
        <script type="text/javascript" src="/public/js/fancybox/jquery.fancybox-thumbs.js?v=1.0.7"></script>
        <!--弹窗轮播结束-->
        <script src="/public/js/common/page.js"  type="text/javascript"></script>
        <script src="/public/js/common/mytools.js"  type="text/javascript"></script>
		<script type="text/javascript">
			var ls = document.location.href.split('=');
        	var accountId = ls[1];
        	var pages = null;
        	getData(1);
        	console.log("testquju"+pages);
        	var randomNum = Math.floor(Math.random()*1200);
        	var randomNum1 = Math.floor(Math.random()*1210);
        	setTimeout(function(){
				$('.pageTest').page({
			      leng: pages,//分页总数
			      activeClass: 'activP' , //active 类样式定义
			      clickBack:function(page){
			      	window.scrollTo(0,0);
			        getData(page);
			      }
			    })
			},4000)
        	

        	function getData(pageNum){
				$.ajax({
			        url:'/New/Feedback/feedbackDetail',
			        type:'POST',
			        dataType:'json',
			       	async: true,
			        data:{
			        	accountId:accountId,
			        	pageNum:pageNum,
			        	pageSize:50
			        },
			        success:function(data){
			            if( data &&  data.code == '200'){
				        	var dataD = data.data.result;
				        	pages = Math.ceil(( data.data.total_num)/50);
				        	var str = '';
			//	        	console.log(JSON.stringify(data))
							var len = dataD.length; 
			            	if(dataD == ''){
			            		console.log("暂时没有数据");
			            		$(".pageTest").css('display','none');
			            		$("#tabledata").html("<tr><td class='text-center' colspan='8'>暂时没有数据</td></tr>");
			            	}else{
			            		$("#tabledata").html('');
			            		for(var i=0;i<len;i++){
			            			str+='<tr><td>'+dataD[i].id+'</td>';
			            			str+='<td>'+dataD[i].accountId+'</td>';
			            			str+='<td>';
			            			for(var j = 0;j<dataD[i].covers.length;j++){
										str +='<a class="fancybox'+randomNum+'"  href="'+dataD[i].covers[j]+'" data-fancybox-group="gallery" title="">';
										str +='<img style="width:100px;" src="'+dataD[i].covers[j]+'@w_120,q_60" alt="" /></a>';
									}
			            			str+='</td>';
			            			if(dataD[i].cid == '1'){
			            				str+='<td>'+dataD[i].msg+'</td>';
			            			}else if(dataD[i].cid == '2'){
			            				str +='<td><a class="fancybox1'+randomNum1+'"  href="'+dataD[i].msg+'" data-fancybox-group="gallery" title="">';
										str +='<img style="width:100px;" src="'+dataD[i].msg+'@w_120,q_60" alt="" /></a></td>';
			            				// str+='<td><img style="width:100px;" src="'+dataD[i].msg+'@w_120,q_60" alt="" /></td>';
			            			}else{
			            				str+='<td>'+dataD[i].msg+'</td>';
			            			}
			            			if(dataD[i].readStatus == '1'){
										str +='<td>未读</td>';
									}else if(dataD[i].readStatus == '2'){
										str +='<td>已读</td>';
									}
			            			str+='<td>'+dataD[i].createTime+'</td>';
			            			if(dataD[i].status=='1'){
			            				str+='<td>用户</td>';
			            			}else if(dataD[i].status=='2'){
			            				str+='<td>客服</td>';
			            			}
			            			str+='<td>';
			            			if(dataD[i].status=='1'){
			            				str+='<button type="button" class="btn btn-danger reply" msgId="'+dataD[i].id+'" value="'+dataD[i].accountId+'">回复</button>';
			            				if(dataD[i].readStatus == '1'){
			            					str+='<button type="button" class="btn btn-warning alread" value="'+dataD[i].id+'">已读</button>';
			            				}
			            			}
			      //       			if(dataD[i].readStatus == '1'){
									// }else if(dataD[i].readStatus == '2'){
									// }
									str +='</td></tr>';
			            		}
				            	$("#tabledata").html(str);
				            	loadFn();
			            	}
			            }else{
			            	console.log(data.msg);
			            }
			        }
			    });
			
			}

			// 回复接口
			function reply(accountId,msg,msgId,obj){
				$.ajax({
			        url:'/New/Feedback/reply',
			        type:'POST',
			        dataType:'json',
			        data:{
			        	accountId:accountId,
			        	msg:msg,
			        	msgId:msgId
			        },
			        success:function(data){
			            if( data &&  data.code == '200'){
				        	$('.shieldlog').fadeOut('normal');
				        	obj.parent().parent().find('td').eq(4).html('已读');
				        	obj.parent().find('.alread').css('display','none');
			            }else{
			            	console.log(data.msg);
			            }
			        }
			    });
			
			}
			// 全部已读操作
			$('.allreads').on('click',function(){
				alread(2,'',accountId,1);
			})
			// 已读接口
			function alread(readStatus,msgId,accountId,obj){
				$.ajax({
			        url:'/New/Feedback/readStatusChange',
			        type:'POST',
			        dataType:'json',
			        data:{
			        	readStatus:readStatus,
			        	msgId,msgId,
			        	accountId:accountId
			        },
			        success:function(data){
			            if( data &&  data.code == '200'){
			            	if(obj=='1'){//全部已读操作
			            		getData(1);
			            	}else{
					        	obj.parent().parent().find('td').eq(4).html('已读');
					        	obj.css('display','none');
			            	}
			            }else{
			            	console.log(data.msg);
			            }
			        }
			    });
			
			}
	// 话术类型列表
	typeList();
	function typeList(){
		$.ajax({
	        url:'/New/Words/typeList',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var len = dataD.length;
					var str = '';
					$('#typeList').empty();
					for(var i=0;i<len;i++){
						str += '<option value="'+dataD[i].id+'">'+dataD[i].name+'</option>';
					}
					$('#typeList').append(str);
				}else{
					// confirm("网络异常");
				}	        
	        }
	    })
	}
	wordsList();
	function wordsList(){
		$.ajax({
	        url:'/New/Words/wordsList',
	        type:"POST",
	        dataType:"json",
	        data:{
	        	
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var len = dataD.length;
					var str = '';
					$('#radioList').empty();
					console.log(len);
					for(var i=0;i<len;i++){
	     				if(dataD[i].typeId == 1){
	     					str+='<div class="md-radio judgeRadio judgeRadio'+dataD[i].typeId+'">';
							str+='<input type="radio" id="checkbox3_'+dataD[i].id+'" name="radio3" value="'+dataD[i].text+'" class="md-radiobtn">';
							str+='<label for="checkbox3_'+dataD[i].id+'"><span></span><span class="check"></span>';
							str+='<span class="box"></span>'+dataD[i].text+'</label></div>';
	     				}else{
	     					str+='<div class="md-radio judgeRadio judgeRadio'+dataD[i].typeId+'" style="display:none">';
							str+='<input type="radio" id="checkbox3_'+dataD[i].id+'" name="radio3" value="'+dataD[i].text+'" class="md-radiobtn">';
							str+='<label for="checkbox3_'+dataD[i].id+'"><span></span><span class="check"></span>';
							str+='<span class="box"></span>'+dataD[i].text+'</label></div>';
	     				}
						
					}
					$('#radioList').append(str);
					
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}

	$('#typeList').on("change",function(){
		var options=$("#typeList option:selected").val();
		$('.judgeRadio').css('display','none');
		$('.judgeRadio'+options+'').css('display','block');

		console.log("选中的值"+options);
	})
	function loadFn(){
		// 回复操作
		$('.reply').on('click',function(){
			var accountId = $(this).attr('value');
			var msgId = $(this).attr('msgId');
			$('.shieldlog').fadeIn('normal');
			var obj = $(this);
			$('#shieldBtn').unbind('click').bind('click',function(){
				var msg = $("input[type='radio'][name='radio3']:checked").val();
				if(msg == undefined){
					var	msg = $('.toUserMsg').val();
				}
				reply(accountId,msg,msgId,obj);
			})
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
	}
	
	// 已读操作
	$('.alread').on('click',function(){
		var msgId = $(this).attr('value');
		var obj = $(this);
		var r=confirm("确认进行已读操作吗");
		if(r==true){
	    	alread(2,msgId,'',obj);
	    }
	})

        	
        </script>
    </body>


</html>