<DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta charset="utf-8" />
        <title>客服详细数据</title>
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
		<!--时间插件开始-->
		<link href="/public/css/common/daterangepicker-bs3.css"  rel="stylesheet"/>
		<link href="/public/css/common/daterangepicker-1.3.7.css" rel="stylesheet" />
		<link href="/public/css/common/font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet">
		<!--时间插件结束-->
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
                                                	<em id="nickname" style="font-style: normal;"></em>客服详细数据</span>
                                            </div>
                                            <!-- <div class="tools">添加话术</div> -->
                                        </div>
                                        <div class="portlet-title">
                                        	<!--时间选择-->
						                	<div class="container-fluid">
												<div class="row-fluid" style="margin-top:5px">
													<div class="span4">
														<div class="control-group">
															<div class="controls">
																<div id="reportrange6" class="pull-left dateRange" style="width:260px">
																	<i class="glyphicon glyphicon-calendar fa fa-calendar" style="margin-right: 15px;"></i>
																	<span id="searchDateRange"></span>
																	<b class="caret"></b>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
                                        </div>
                                        
                                        <div class="portlet-body">
                                            <div id="main" style="width: 100%;height:500px;"></div>
                                        </div>
                                       
                                    </div>
                                    <div class="portlet light bordered">
										<table class="table table-striped table-bordered table-hover dt-responsive" id="sample_3" cellspacing="0" width="30%" style="max-width: 40%;">
				                            <thead>
				                                <tr>
				                                	<th class="all duan50">滑动次数</th>
				                                	<th class="all duan50">举报次数</th>
				                                </tr>
				                            </thead>
				                            <tbody id="tbody">
				                                <tr>
				                                   <td class="huaCount">0</td>
				                                   <td class="complaintsNumber">0</td>
				                                </tr>
				                            </tbody>
				                        </table>
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
        <script src="/public/js/common/page.js"  type="text/javascript"></script>
        <script src="/public/js/common/mytools.js"  type="text/javascript"></script>
        <!--时间插件开始-->
        <script src="/public/js/common/moment.js" type="text/javascript"></script>
        <script src="/public/js/common/daterangepicker-1.3.7.js" type="text/javascript"></script>
        <script src="/public/js/common/mainTime.js" type="text/javascript"></script>
        <!--时间插件结束-->
        <script src="/public/js/common/echarts.common.min.js" type="text/javascript"></script>
		<script type="text/javascript">
			console.log(typeof(10-04));
			var ls = document.location.href.split('=');
			var adminId = ls[2];
			var nickname = ls[1].split('&&')[0];
			$('#nickname').html(nickname);
			var myChart = echarts.init(document.getElementById('main'));
			var dateArr = [],
				dataD1 = [],
				dataD2 = [],
				dataD3 = [],
				dataD4 = [],
				dataD5 = [],
				dataD6 = [],
				dataD7 = [],
				dataD8 = [];
			function GetDateDiff(startDate,endDate){  
			    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
			    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
			    var dates = Math.abs((startTime - endTime))/(1000*60*60*24)+1;     
			    return  dates;    
			}
			$('#reportrange6 span').html(moment().subtract('days', 0).format('YYYY-MM-DD') + '至' + moment().subtract('days', 0).format('YYYY-MM-DD'));
			var startTime = moment().subtract('days', 0).format('YYYY-MM-DD');
			getChar(startTime,1,adminId)
			$('#reportrange6').on('apply.daterangepicker',function(ev, picker) {
				var chartime1 = picker.startDate.format('YYYY-MM-DD');
				var chartime2 = picker.endDate.format('YYYY-MM-DD');
			 	$('#reportrange6 span').html(chartime1 + '至' + chartime2);
			 	var dayNum = GetDateDiff(chartime1,chartime2);
			 	console.log(dayNum);
			 	getChar(chartime1,dayNum,adminId)
			});

			
			function getChar(startTime,dayNum,adminId){
				$.ajax({
			        url:'/New/AdminerReview/charts',
			        type:"POST",
			        dataType:"json",
			        async: true,
			        data:{
			        	startTime:startTime,
			        	dayNum:dayNum,
			        	adminId:adminId
			        },
			        success:function(data){
			        	var dataD = data.data.timeRange;
			        	$('.complaintsNumber').text(data.data.complaintsNumber);
			        	$('.huaCount').text(data.data.huaCount);
			        	dateArr = [],
			        	dataD1 = [],
			        	dataD2 = [],
			        	dataD3 = [],
			        	dataD4 = [],
			        	dataD5 = [],
			        	dataD6 = [],
			        	dataD7 = [],
			        	dataD8 = [];
			        	for(var key in dataD){
			        		dateArr.push(key);
			        		dataD1.push(dataD[key].UGC_MASK);
			        		dataD2.push(dataD[key].UGC_UNMASK);
			        		dataD3.push(dataD[key].USER_DEAL);
			        		dataD4.push(dataD[key].USER_SALVAGE);
			        		dataD5.push(dataD[key].USER_SINK);
			        		dataD6.push(dataD[key].USER_MASK);
			        		dataD7.push(dataD[key].USER_UNMASK);
			        		dataD8.push(dataD[key].LIUBO_REPLY);

			        	}
		        		optionFn(dateArr,dataD1,dataD2,dataD3,dataD4,dataD5,dataD6,dataD7,dataD8);
			        }
		        })
			}
			
			
			
			function optionFn(dateArr,dataD1,dataD2,dataD3,dataD4,dataD5,dataD6,dataD7,dataD8){

				option = {
				    title: {
				        text: '详细数据折线图'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['UGC屏蔽','UGC解除屏蔽','用户审核已处理','用户海底捞','用户沉底','用户屏蔽','用户解封','刘波回复']
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    toolbox: {
				        feature: {
				            saveAsImage: {}
				        }
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: dateArr
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [
				        {
				            name:'UGC屏蔽',
				            type:'line',
				            stack: '总量',
				            data:dataD1
				        },
				        {
				            name:'UGC解除屏蔽',
				            type:'line',
				            stack: '总量',
				            data:dataD2
				        },
				        {
				            name:'用户审核已处理',
				            type:'line',
				            stack: '总量',
				            data:dataD3
				        },
				        {
				            name:'用户海底捞',
				            type:'line',
				            stack: '总量',
				            data:dataD4
				        },
				        {
				            name:'用户沉底',
				            type:'line',
				            stack: '总量',
				            data:dataD5
				        },
				        {
				            name:'用户屏蔽',
				            type:'line',
				            stack: '总量',
				            data:dataD6
				        },
				        {
				            name:'用户解封',
				            type:'line',
				            stack: '总量',
				            data:dataD7
				        },
				        {
				            name:'刘波回复',
				            type:'line',
				            stack: '总量',
				            data:dataD8
				        }
				    ]
				};
				myChart.setOption(option);
			}
			// var ls = document.location.href.split('=');
			// var id = ls[2];
			// var type = ls[1].split('?')[0];
			// if(type == '1'){
			// 	$('.typeTxt').html('用户');
			// }else if(type == '2'){
			// 	$('.typeTxt').html('UGC');
			// }
        	

			// // 回复接口
			// actionLog(id,'');
			// function actionLog(accountId,artId){
			// 	$.ajax({
			//         url:'/New/Account/actionLog',
			//         type:'POST',
			//         dataType:'json',
			//         data:{
			//         	accountId:accountId,
			//         	artId:artId
			//         },
			//         success:function(data){
			//             if( data &&  data.code == '200'){
			//             	var dataD = data.data;
			//             	var len = dataD.length;
			// 	        	var str = '';
			// 	        	$('#tabledata').empty();
			// 	        	if(len>0){
			// 	        		for(var i=0;i<len;i++){
			// 		        		str += '<tr><td>'+dataD[i].account+'</td>';
			// 		        		str += '<td>'+dataD[i].message+'</td>';
			// 		        		str += '<td>'+dataD[i].createTime+'</td></tr>';
			// 	        		}
			// 	        	}else{
			// 	        		str = '<tr><td colSpan = "4">暂时没有数据</td></tr>';
			// 	        	}
			// 	        	$('#tabledata').append(str);
			//             }else{
			//             	console.log(data.msg);
			//             }
			//         }
			//     });
			
			// }
			

	
        	
        </script>
    </body>


</html>