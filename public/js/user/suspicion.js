$(function(){

	// var date = '2018-05-03';
	var date = $('#reportrange11 span').html();
	var loading = '<tr id="loading"><td colspan="5"><img style="width: 36px" src="/public/img/common/loading.gif" alt=""></td></tr>';
	
	getList(date,1)
	setTimeout(function(){
		$('.pageTest').page({
			leng: allPage,//分页总数
			activeClass: 'activP' , //active 类样式定义
			clickBack:function(page){
				window.scrollTo(0,0);
				$('#tbody3').html(loading);
				getList(date,page);
			}
		});
	},3800)
	
	// 点击搜索加载列表
	$('#search').on('click',function(){
		var date = $('#reportrange11 span').html();
		var type = $("input[type='radio'][name='radio1']:checked").val();
		$('.pageTest').empty();
		$('#tbody3').html(loading);
			getList(date,1)
			setTimeout(function(){
				$('.pageTest').page({
					leng: allPage,//分页总数
					activeClass: 'activP' , //active 类样式定义
					clickBack:function(page){
						window.scrollTo(0,0);
						$('#currentPage').html(page);
						$('#tbody3').html(loading);
						getList(date,page);
					}
				});
			},3800)
		$('.pageTest').page({
			leng: allPage,//分页总数
			activeClass: 'activP' , //active 类样式定义
			clickBack:function(page){
				window.scrollTo(0,0);
				$('#currentPage').html(page);
				$('#tbody3').html(loading);
				getList(date,page);
			}
		});
	})
	function getList(date,pageNum){
		$.ajax({
	        url:'/New/Abnormal/abList',
	        type:"POST",
	        dataType:"json",
	        async:false,
	        data:{
	        	date:date,
	        	pageNum:pageNum,
	        	pageSize:50
	        },
	        success:function(data){
				if(data.code == '200'){
					var dataD = data.data;
					var result = dataD.result;
					var len = result.length;
					allPage = Math.ceil((dataD.total_num)/50);
					var str = '';
					if(len>0){
						for(var i=0; i<len; i++){
							str += '<tr><td>'+result[i].uid+'</td>';
							str += '<td>'+result[i].api+'</td>';
							str += '<td>'+result[i].sys+'</td>';
							str += '<td>'+result[i].ip+'</td>';
							str += '<td>'+result[i].number+'</td></tr>';
						}
					}else{
						str += '<tr><td colSpan = "5">暂时没有数据</td></tr>';
					}
					$('#tbody3').empty();
					$('#tbody3').append(str);
				}else{
					confirm("网络异常");
				}	        
	        }
	    })
	}
})