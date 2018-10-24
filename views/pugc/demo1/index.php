<!DOCTYPE html>
<html lang="zh-cn">

<head>
  <meta charset="UTF-8">
  <title>七牛云 - JavaScript SDK</title>
  <link href="images/favicon.ico" rel="shortcut icon">
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style/index.css">
  <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
</head>

<body>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">七牛云存储 - JavaScript SDK</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">上传示例</a>
          </li>
          <li>
            <a href="http://developer.qiniu.com/code/v6/sdk/javascript.html">SDK 文档</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mainContainer">
    <div class="row" style="margin-top: 20px;">
      <ul class="tip col-md-12 text-mute">
        <li>
          <small>
            JavaScript SDK 基于 h5 file api 开发，可以上传文件至七牛云存储。
          </small>
        </li>
        <li>
          <small>临时上传的空间不定时清空，请勿保存重要文件。</small>
        </li>
        <li>
          <small>H5模式大于4M文件采用分块上传。</small>
        </li>
        <li>
          <small>上传图片可查看处理效果。</small>
        </li>
        <li>
          <small>本示例限制最大上传文件100M。</small>
        </li>
      </ul>
    </div>
    <form method="post" enctype="multipart/form-data" id="form" action="upload">
      <div id="box" class="hide">
        <button class="select-button">选择文件</button>
        <a class="file-input" id="select"></a>
      </div>
      <div id="box2">
        <button class="select-button">选择文件</button>
        <input class="file-input" type="file" id="select2" />
      </div>
    </form>
    <div class="nav-box" style="margin-top:30px">
      <ul id="myTab" class="nav nav-tabs">
        <li role="presentation" class="active">
          <a href="#h5" name="h5" data-toggle="tab">
            七牛h5上传
          </a>
        </li>
        <li role="presentation">
          <a href="#expand" name="expand" data-toggle="tab">plupload插件上传</a>
        </li>
        <li role="presentation">
          <a href="#directForm" name="directForm" data-toggle="tab">form表单直传</a>
        </li>
      </ul>
      <div id="process" class="tab-content">
        <div class="tab-pane fade in active" id="h5">
          <table class="table table-striped table-hover text-left" style="margin-top:30px">
            <thead>
              <tr>
                <th class="col-md-4">Filename</th>
                <th class="col-md-2">Size</th>
                <th class="col-md-6">Detail</th>
              </tr>
            </thead>
            <tbody id="fsUploadProgress">

            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="expand">
          <table class="table table-striped table-hover text-left" style="margin-top:30px">
            <thead>
              <tr>
                <th class="col-md-4">Filename</th>
                <th class="col-md-2">Size</th>
                <th class="col-md-6">Detail</th>
              </tr>
            </thead>
            <tbody id="fsUploadProgress2">

            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="directForm">
          <form id="uploadForm" class="picForm" method="post" action="" enctype="multipart/form-data" target="ifram">
            <button style="color:#fff;background-color:#00b7ee;position:relative;top:30px;font-weight:100;height:30px;font-size:14px;width:80px;">选择文件</button>
            <input style="width:80px;height:30px;opacity:0;cursor:pointer" type="file" name="file" id="select3" />
            <input name="token" style="display:none">
            <input name="key" style="display:none" />
            <input name="url" style="display:none" />
          </form>
          <table class="table table-striped table-hover text-left" style="margin-top:30px">
            <thead>
              <tr>
                <th class="col-md-4">Filename</th>
                <th class="col-md-2">Size</th>
                <th class="col-md-6">Detail</th>
              </tr>
            </thead>
            <tbody id="fsUploadProgress3">

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- 模态框（Modal） -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <div class="display">
            <a id = "imgContainer">
              <img data-key="">
            </a>
          </div>
          <div class="buttonList">
            <ul>
              <li>
                <div class="watermark">
                  <span>水印控制：</span>
                  <a href="#" data-watermark="NorthWest" class="btn btn-default disabled">
                    左上角
                  </a>
                  <a href="#" data-watermark="SouthWest" class="btn btn-default">
                    左下角
                  </a>
                  <a href="#" data-watermark="NorthEast" class="btn btn-default">
                    右上角
                  </a>
                  <a href="#" data-watermark="SouthEast" class="btn btn-default">
                    右下角
                  </a>
                  <a href="#" data-watermark="false" class="btn btn-default">
                    无水印
                  </a>
                </div>
              </li>
              <li>
                <div class="imageView2">
                  <span>缩略控制：</span>
                  <a href="#" data-imageview="large" class="btn btn-default disabled">
                    大缩略图
                  </a>
                  <a href="#" data-imageview="middle" class="btn btn-default">
                    中缩略图
                  </a>
                  <a href="#" data-imageview="small" class="btn btn-default">
                    小缩略图
                  </a>
                </div>
              </li>
              <li>
                <div class="imageMogr2">
                  <span>旋转控制：</span>
                  <a href="#" data-imagemogr="left" class="btn btn-default no-disable-click">
                    逆时针
                  </a>
                  <a href="#" data-imagemogr="right" class="btn btn-default no-disable-click">
                    顺时针
                  </a>
                  <a href="#" data-imagemogr="no-rotate" class="btn btn-default">
                    无旋转
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal -->
  </div>
</body>
<style>
</style>
<!--[if lte IE 8]>
  <script src="http://cdn.bootcss.com/jquery/1.9.0/jquery.min.js"></script>
<![endif]-->
<!--[if gt IE 8]>
  <script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js"></script>
<![endif]-->
<!--[if !IE]><!-->
<script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js"></script>
<!--<![endif]-->
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<script src="https://cdn.bootcss.com/json3/3.3.2/json3.min.js"></script>
<script type="text/javascript" src='./js/plupload.full.min.js'></script>
<script type="text/javascript" src='http://jssdk-v2.demo.qiniu.io/dist/qiniu.min.js'></script>
<script type="text/javascript" src='./component/widget.js'></script>
<script type="text/javascript" src='./common/common.js'></script>
<script type="text/javascript" src='./component/ui.js'></script>
<script type="text/javascript" src='./scripts/uploadWithOthers.js'></script>
<script type="text/javascript" src='./scripts/uploadWithForm.js'></script>
<script type="text/javascript" src='./scripts/uploadWithSDK.js'></script>
<script type="text/javascript" src='./main.js'></script>

</html>
