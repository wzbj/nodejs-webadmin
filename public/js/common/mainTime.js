$(document).ready(function (){
	
	$("#changenav li").on('click',function(){
		$(this).addClass("active selected").siblings().removeClass("active selected");
	})
	
					//1时间插件
					$('#reportrange span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange').daterangepicker(
							{
								startDate: moment().subtract('days', 30).startOf('day'),
								endDate: moment().subtract('days', 1).startOf('day'),
								//minDate: '01/01/2012',	//最小时间
								 maxDate : moment().subtract('days', 1).startOf('day'), //最大时间
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : false, //是否显示小时和分钟
								timePickerIncrement : 60, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									'最近1小时': [moment().subtract('hours',1), moment()],
									// '今日': [moment().startOf('day'), moment()],
				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
									 '今日': [moment().startOf('day'), moment()],
				                    '最近7日': [moment().subtract('days', 7), moment()],
				                    '最近30日': [moment().subtract('days', 30), moment()]
								},
								opens : 'right', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                
			                 	$('#reportrange span').html(start.format('YYYY-MM-DD') + '至' + end.format('YYYY-MM-DD'));
			               });

					// 时间插件1

					$('#reportrange1').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : true, //是否显示小时和分钟
								timePickerIncrement : 1, //时间的增量，单位为分钟
								timePicker24Hour: true, //时间制
								timePickerSeconds: true, //时间显示到秒
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									// '清空': ['', ''],
									//'最近1小时': [moment().subtract('hours',1), moment()],
									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
				                    '最近7日': [moment().subtract('days', 6), moment()],
				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'right', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD hh:mm', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                
			                 	$('#reportrange1 span').html(start.format('YYYY-MM-DD hh:mm ') + '至' + end.format('YYYY-MM-DD hh:mm'));
			               });
			               
			               
			               
			               //2时间插件
					$('#reportrange2 span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange2').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								// maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : false, //是否显示小时和分钟
								timePickerIncrement : 60, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									//'最近1小时': [moment().subtract('hours',1), moment()],
									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
				                    '最近7日': [moment().subtract('days', 6), moment()],
				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'right', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                
			                 	$('#reportrange2 span').html(start.format('YYYY-MM-DD') + '至' + end.format('YYYY-MM-DD'));
			               });
			               
			               
			               //3时间插件(改：只要今日，昨日，最近7日，最近30日)
					$('#reportrange3 span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange3').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : false, //是否显示小时和分钟
								timePickerIncrement : 60, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									// '最近1小时': [moment().subtract('hours',1), moment()],
				                    // '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
									'今日': [moment().startOf('day'), moment()],  
				                    '最近7日': [moment().subtract('days', 6), moment()],
				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'right', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                console.log(start);
				                console.log(end);
			                 	$('#reportrange3 span').html(start.format('YYYY-MM-DD') + '至' + end.format('YYYY-MM-DD'));
			               });
			               
			               //4时间插件
					$('#reportrange4 span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange4').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : false, //是否显示小时和分钟
								timePickerIncrement : 60, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									//'最近1小时': [moment().subtract('hours',1), moment()],
									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
				                    '最近7日': [moment().subtract('days', 6), moment()],
				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'right', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                
			                 	$('#reportrange4 span').html(start.format('YYYY-MM-DD') + '至' + end.format('YYYY-MM-DD'));
			               });
			               
			               //5时间插件
					$('#reportrange5 span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange5').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : false, //是否显示小时和分钟
								timePickerIncrement : 60, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									//'最近1小时': [moment().subtract('hours',1), moment()],
									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
				                    '最近7日': [moment().subtract('days', 6), moment()],
				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'left', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                
			                 	$('#reportrange5 span').html(start.format('YYYY-MM-DD') + '至' + end.format('YYYY-MM-DD'));
			               });
			               
			             //6时间插件
					// $('#reportrange6 span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange6').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : false, //是否显示小时和分钟
								timePickerIncrement : 60, //时间的增量，单位为分钟
								timePicker24Hour: false, //时间制
								timePickerSeconds: false, //时间显示到秒
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									//'最近1小时': [moment().subtract('hours',1), moment()],
									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
				                    '最近7日': [moment().subtract('days', 6), moment()],
				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'right', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                
			                 	$('#reportrange6 span').html(start.format('YYYY-MM-DD') + '至' + end.format('YYYY-MM-DD'));
			               });
			               
			               //7时间插件
					$('#reportrange7 span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange7').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker :true, //是否显示小时和分钟
								timePickerIncrement : 60, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									//'最近1小时': [moment().subtract('hours',1), moment()],
									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
				                    '最近7日': [moment().subtract('days', 6), moment()],
				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'left', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                
			                 	$('#reportrange7 span').html(start.format('YYYY-MM-DD') + '至' + end.format('YYYY-MM-DD'));
			               });  
			               
			        //时间段对比的时间选择插件10
			              //7时间插件
					$('#reportrange10 span').html(moment().subtract('days', 30).format('YYYY-MM-DD') + '至' + moment().subtract('days', 1).format('YYYY-MM-DD'));
					$('#reportrange10').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 // maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								 singleDatePicker: true,//由双日历改为单日历
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : true, //是否显示小时和分钟
								timePickerIncrement : 5, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									//'最近1小时': [moment().subtract('hours',1), moment()],
//									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
//				                    '最近7日': [moment().subtract('days', 6), moment()],
//				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'left', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD HH:mm', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                $('.daterangepicker  .calendar').css('display','block!important');
			                 	$('#reportrange10 span').html(start.format('YYYY-MM-DD HH:mm'));
			               });
		             //时间段对比的时间选择插件11
					$('#reportrange11 span').html(moment().subtract('days', 0).format('YYYY-MM-DD'));
					$('#reportrange11').daterangepicker(
							{
								// startDate: moment().startOf('day'),
								//endDate: moment(),
								//minDate: '01/01/2012',	//最小时间
								 // maxDate : moment(), //最大时间 
								// dateLimit : {
								// 	days : 30
								// }, 
								//起止时间的最大间隔
								 singleDatePicker: true,//由双日历改为单日历
								showDropdowns : true,
								showWeekNumbers : false, //是否显示第几周
								timePicker : false, //是否显示小时和分钟
								timePickerIncrement : 5, //时间的增量，单位为分钟
								timePicker12Hour : false, //是否使用12小时制来显示时间
								ranges : {
									//'最近1小时': [moment().subtract('hours',1), moment()],
//									'今日': [moment().startOf('day'), moment()],
//				                    '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
//				                    '最近7日': [moment().subtract('days', 6), moment()],
//				                    '最近30日': [moment().subtract('days', 29), moment()]
								},
								opens : 'left', //日期选择框的弹出位置
								buttonClasses : [ 'btn btn-default' ],
								applyClass : 'btn-small btn-primary blue',
								cancelClass : 'btn-small',
								format : 'YYYY-MM-DD HH:mm', //控件中from和to 显示的日期格式
								separator : ' to ',
								locale : {
									applyLabel : '确定',
									cancelLabel : '取消',
									fromLabel : '起始时间',
									toLabel : '结束时间',
									customRangeLabel : '自定义',
									daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
									monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
											'七月', '八月', '九月', '十月', '十一月', '十二月' ],
									firstDay : 1
								}
							}, function(start, end, label) {//格式化日期显示框
				                $('.daterangepicker  .calendar').css('display','block!important');
			                 	$('#reportrange11 span').html(start.format('YYYY-MM-DD'));
			               });
			               
			               

				//设置日期菜单被选项  --开始--
		      	  var dateOption ;
		      	  if("${riqi}"=='day') {
						dateOption = "今日";
		          }else if("${riqi}"=='yday') {
						dateOption = "昨日";
		          }else if("${riqi}"=='week'){
						dateOption ="最近7日";
		          }else if("${riqi}"=='month'){
						dateOption ="最近30日";
		          }else if("${riqi}"=='year'){
						dateOption ="最近一年";
		          }else{
						dateOption = "自定义";
		          }
		      	   $(".daterangepicker").find("li").each(function (){
						if($(this).hasClass("active")){
							$(this).removeClass("active");
						}
						if(dateOption==$(this).html()){
							$(this).addClass("active");
						}
		          });
			      	   
//			触发事件      	   
			 
//			 $('#reportrange2').on('apply.daterangepicker',function(ev, picker) {
//				
//				 console.log(picker.startDate.format('YYYY-MM-DD'));
//				
//				 console.log(picker.endDate.format('YYYY-MM-DD'));
//				
//				});
//			
//			 $('#reportrange4').on('apply.daterangepicker',function(ev, picker) {
//				
//				 console.log(picker.startDate.format('YYYY-MM-DD'));
//				
//				 console.log(picker.endDate.format('YYYY-MM-DD'));
//				
//				});
//			
//			 $('#reportrange5').on('apply.daterangepicker',function(ev, picker) {
//				
//				 console.log(picker.startDate.format('YYYY-MM-DD'));
//				
//				 console.log(picker.endDate.format('YYYY-MM-DD'));
//				
//				});
//			 
			 
			    
		})