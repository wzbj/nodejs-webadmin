<DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta charset="utf-8" />
        <title>操作日志 </title>
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
                                                <span class="caption-subject bold uppercase">目的分类管理</span>
                                            </div>
                                            <!-- <div class="tools">添加话术</div> -->
                                        </div>
                                        
                                        <div class="portlet-body">
                                            <table class="table table-striped table-bordered table-hover" id="sample_1">
                                                <thead>
                                                    <tr>
                                                        <th class="duan10">目的id</th>
                                                        <th class="duan10">目的名称</th>
                                                        <th class="duan20">2.1目的</th>
                                                        <th class="duan20">2.1匹配成功</th>
                                                        <th class="duan10">描述</th>
                                                        <th class="duan10">当前状态</th>
                                                        <th class="duan20">操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tabledata">
                                                    <!-- <tr>
                                                        <td>101</td>
                                                        <td>KTV</td>
                                                        <td><img style="width: 80%;" src="http://jimu-intent-new.bj.bcebos.com/101_version_three" alt=""></td>
                                                        <td><img style="width: 60%;" src="http://jimu-intent-new.bj.bcebos.com/101_success_version_three" alt=""></td>
                                                        <td>已上架</td>
                                                        <td>
                                                            <button class="btn btn-danger">删除</button>
                                                            <button class="btn btn-warning">修改</button>
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
<!--修改的弹窗-->
<div class="lgdialog editdialog" style="display: none;">
    <!-- portlet-body form lgdialogcontent lgdialogcontentform -->
    <div class=" portlet-body form lgdialogcontent" style="width: 45%;">
        <div class="modal-header modal-headers">
            <div class="dialogclose dialogcloses">
                <img src="/public/img/common/remove-icon-small.png"/>
            </div>
            <h4 class="modal-title font-green"><i class=" icon-volume-2" style="padding-right: 10px;"></i>增加目的</h4>
        </div>
        <div class="modal-body">
        <!--内容开始-->
            <div class="portlet-body form">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal ">
                     <div class="form-body">
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">目的:</label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <!-- <textarea class="form-control toUserMsg" name="" rows="3" cols=""></textarea> -->
                                <input id="purposeVal" type="text" class="form-control" placeholder="输入目的">
                                <span class="help-block" style="color:red"> </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">目的卡牌描述:</label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <!-- <textarea class="form-control toUserMsg" name="" rows="3" cols=""></textarea> -->
                                <input id="purposeDes" type="text" class="form-control" placeholder="输入目的卡牌描述">
                                <span class="help-block" style="color:red"> </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">选择目的图片:</label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <div class="fileinput fileinput-new" data-provides='fileinput'>
                                    <div class="input-group input-large">
                                        <div class="form-control uneditable-input input-fixed input-medium" data-trigger='fileinput'>
                                            <span class="fileinput-filename">
                                                <!-- <i class="fa fa-file"></i> --> <!-- 请选择文件  -->    
                                            </span>
                                        </div>
                                        <span class="input-group-addon btn default btn-file">
                                            <input id="gameImg" class="form-control" type='file',  name='gameImg' onchange='previewImage(this,5);' >
                                        </span>
                                    </div>
                                </div>   
                                <span class="help-block" style="color:red"> </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4"></label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7" id="preview5">
                                <img src="" id="imghead5" width="200" height="200" style="display: none;" alt="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4">选择互粉图片文件:</label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <div class="fileinput fileinput-new" data-provides='fileinput'>
                                    <div class="input-group input-large">
                                        <div class="form-control uneditable-input input-fixed input-medium" data-trigger='fileinput'>
                                            <span class="fileinput-filename">
                                                <!-- <i class="fa fa-file"></i>  --><!-- 请选择文件 -->     
                                            </span>
                                        </div>
                                        <span class="input-group-addon btn default btn-file">
                                            <input id="gameImg1" class="form-control" type='file', name='gameImg' onchange='previewImage(this,6);' >
                                        </span>
                                    </div>
                                </div>   
                                <span class="help-block" style="color:red"> </span>
                            </div>
                        </div>
                        <div class="form-group" style="margin-top: 10px;">
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4"></label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7" id="preview6">
                                <img src="" id="imghead6" width="200" height="200" style="display: none;" alt="">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <!--<label class="control-label col-lg-7 col-md-7 col-sm-7 col-xs-7">真实用户带入机器人配比:</label>-->
                            <label class="control-label col-lg-4 col-md-4 col-sm-4 col-xs-4"></label>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7" style="text-align: center;">
                                <button id="addBtn" type="button" class="btn green editBtn">
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
        <script src="/public/js/common/datatables.min.js"  type="text/javascript"></script>
        <script src="/public/js/common/datatables.bootstrap.js"  type="text/javascript"></script>
        <script src="/public/js/common/page.js"  type="text/javascript"></script>
        <!-- input file插件 -->
        <script src="/public/js/common/bootstrap-fileinput.js" type="text/javascript"></script>
        <script src="/public/js/common/mytools.js"  type="text/javascript"></script>
		<script type="text/javascript">
			var ls = document.location.href.split('=');
			var categoryId = ls[1];
        	
			// 回复接口
			iList(categoryId);
            $('.onShelf').on('click',function(){
                var that = $(this);
                var id = that.parent().parent().find('td').eq(0).html();
                var name = that.parent().parent().find('td').eq(1).html();
                var img = that.parent().parent().find('img').eq(0).attr("src");
                var imgSuccess = that.parent().parent().find('img').eq(1).attr("src");
                var description = that.parent().parent().find('td').eq(4).html();
                var formData = new FormData();
                formData.append("id",id);
                formData.append("categoryId",categoryId);
                formData.append("name",name);
                formData.append("description",description);
                formData.append("img2_1", img);//目的图片
                formData.append("img2_1Success",imgSuccess);//互粉图片
                formData.append("status",1);
                iEdit(formData,1,that);
            })
            $('.offShelf').on('click',function(){
                var that = $(this);
                var id = that.parent().parent().find('td').eq(0).html();
                var name = that.parent().parent().find('td').eq(1).html();
                var img = that.parent().parent().find('img').eq(0).attr("src");
                var imgSuccess = that.parent().parent().find('img').eq(1).attr("src");
                var description = that.parent().parent().find('td').eq(4).html();
                var formData = new FormData();
                formData.append("id",id);
                formData.append("categoryId",categoryId);
                formData.append("name",name);
                formData.append("description",description);
                formData.append("img2_1", img);//目的图片
                formData.append("img2_1Success",imgSuccess);//互粉图片
                formData.append("status",0);
                iEdit(formData,0,that);
            })
            $('.iEdit').on('click',function(){
                $('.editdialog').fadeIn('normal');
                var that = $(this);
                var id = that.parent().parent().find('td').eq(0).html();
                var name = that.parent().parent().find('td').eq(1).html();
                var img = that.parent().parent().find('img').eq(0).attr("src");
                var imgSuccess = that.parent().parent().find('img').eq(1).attr("src");
                var description = that.parent().parent().find('td').eq(4).html();
                $('#purposeVal').val(name);
                $('#purposeDes').val(description);
                $('#imghead5').attr('src',img);
                $('#imghead6').attr('src',imgSuccess);
                $('.editdialog img').css("display","block");
                $('.editBtn').on('click',function(event){
                     event.stopPropagation();
                    var name = $('#purposeVal').val();
                    var description = $('#purposeDes').val();
                    var formData = new FormData();
                        formData.append("id",id);
                        formData.append("categoryId",categoryId);
                        formData.append("name",name);
                        formData.append("description",description);
                    if($('#imghead5').attr("src") != img){
                        formData.append("img2_1", document.getElementById("gameImg").files[0]);//目的图片
                    }else{
                        formData.append("img2_1", img);//目的图片
                    }
                    if($('#imghead5').attr("src") != img){
                        formData.append("img2_1Success", document.getElementById("gameImg1").files[0]);//互粉图片
                    }else{
                        formData.append("img2_1Success",imgSuccess);//互粉图片
                    }
                    iEdit(formData,0,that);

                })
            })

			function iList(categoryId){
				$.ajax({
			        url:'/New/Intent/iList',
			        type:'POST',
			        dataType:'json',
                    async:false,
			        data:{
			        	categoryId:categoryId,
			        	pageNum:1,
                        pageSize:100
			        },
			        success:function(data){
			            if( data &&  data.code == '200'){
			            	var dataD = data.data.result;
			            	var len = dataD.length;
				        	var str = '';
                            console.log(len);
                            if(len>0){
                                for(var i=0;i<len;i++){
                                    str += '<tr><td>'+dataD[i].id+'</td>';
                                    str += '<td>'+dataD[i].name+'</td>';
                                    str += '<td><img style="width: 80%;" src="'+dataD[i].img2_1+'" alt=""></td>';
                                    str += '<td><img style="width: 60%;" src="'+dataD[i].img2_1Success+'" alt=""></td>';
                                    str += '<td>'+dataD[i].description+'</td>';
                                    if(dataD[i].status == '0'){
                                        str += '<td>已下架</td>'
                                    }else if(dataD[i].status == '1'){
                                        str += '<td>已上架</td>';
                                    }
                                    str += '<td>';
                                    if(dataD[i].status == '0'){
                                        str += '<button class="btn btn-danger offShelf" style="display:none;">下架</button><button class="btn btn-success onShelf">上架</button>';
                                    }else if(dataD[i].status == '1'){
                                        str += '<button class="btn btn-danger offShelf">下架</button><button class="btn btn-success onShelf"  style="display:none;">上架</button>';
                                    }
                                    str += '<button class="btn btn-warning iEdit">修改</button></td></tr>';
                                }
                            }else{
                                str = '<tr><td colSpan = "6">暂时没有数据</td></tr>';
                            }
				        	$('#tabledata').empty();
                            $('#tabledata').append(str);
                        }else{
                            console.log(data.msg);
			            }
			        }
			    });
			
			}

            //目的分类管理编辑接口
            function iEdit(formData,status,obj){
                $.ajax({
                    url: "/New/Intent/iEdit",
                    type: "POST", 
                    data:formData,
                    dataType: 'JSON',  
                    contentType: false, 
                    processData: false,
                    success: function (data) {
                        if (data && data.code == "200") {
                            $('.editdialog').fadeOut('normal');
                            if(status == '1'){
                                console.log('已上架');
                                obj.parent().find('.offShelf').css("display","inline-block");
                                obj.parent().find('.onShelf').css("display","none");
                                obj.parent().parent().find('td').eq(5).html("已上架");
                            }else if(status == '0'){
                                console.log("已下架");
                                obj.parent().find('.offShelf').css("display","none");
                                obj.parent().find('.onShelf').css("display","inline-block");
                                obj.parent().parent().parent().find('td').eq(5).html("已下架");
                            }else{
                                iList(categoryId);//刷新列表
                            }
                                                       
                        }
                    },
                    error: function () {
                        console.log(data.code);
                    }
                });
            }
            function previewImage(file,imgNum)
        {
                var MAXWIDTH  = 200;
                var MAXHEIGHT = 200;
                var div = document.getElementById('preview'+imgNum);
                if (file.files && file.files[0])
                {
                        div.innerHTML ='<img id=imghead'+imgNum+'>';
                        var img = document.getElementById('imghead'+imgNum+'');
                        img.onload = function(){
                                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                                img.width  =  rect.width;
                                img.height =  rect.height;
                                img.style.marginTop = rect.top+'px';
                                //- img.style.marginLeft = rect.left +'px';
                        }
                        var reader = new FileReader();
                        reader.onload = function(evt){img.src = evt.target.result;}
                        reader.readAsDataURL(file.files[0]);
                }
                else //
                {
                        var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                        file.select();
                        var src = document.selection.createRange().text;
                        div.innerHTML = '<img id=imghead'+imgNum+'>';
                        var img = document.getElementById('imghead2');
                        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
                        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                        status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
                        div.innerHTML = "<div id=divhead"+imgNum+" style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
                }
        }
        function clacImgZoomParam( maxWidth, maxHeight, width, height ){
                var param = {top:0, left:0, width:width, height:height};
                if( width>maxWidth || height>maxHeight )
                {
                        rateWidth = width / maxWidth;
                        rateHeight = height / maxHeight;

                        if( rateWidth > rateHeight )
                        {
                                param.width =  maxWidth;
                                param.height = Math.round(height / rateWidth);
                        }else
                        {
                                param.width = Math.round(width / rateHeight);
                                param.height = maxHeight;
                        }
                }
                param.left = Math.round((maxWidth - param.width) / 2);
                param.top = Math.round((maxHeight - param.height) / 2);
                return param;
        }
	
        </script>
    </body>


</html>