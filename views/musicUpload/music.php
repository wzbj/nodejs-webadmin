<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon " type="images/x-icon" href="/public/img/favicon.ico">
    <link rel="stylesheet" href="/public/css/music/music.css">
    <link rel="stylesheet" href="/public/css/common/cropper.min.css">
    <link rel="stylesheet" href="/public/css/music/ImgCropping.css">
    <title>积目-音乐人上传音乐</title>
</head>

<body>
    <div class="container">
        <div class="oneStep" style="display: block">
            <div class="title">填写资料</div>
            <div class="name">
                <label><span>*</span> 歌手名：</label>
                <input type="text" id="singer"/>
            </div>
            <div class="name">
                <label><span>*</span> 真实姓名：</label>
                <input type="text" id="name"/>
            </div>
            <div class="name">
                <label>微信：</label>
                <input type="text" id="weChat"/>
            </div>
            <div class="name last">
                <label><span>*</span> 身份证号码：</label>
                <input type="text" id="idCard"/>
            </div>
            <div class="idCard">
                <label style="float: left;"><span>*</span> 身份证照片：</label>
                <div class="card" style="float: left;">
                    <div class="photo">
                        <img src="" alt="" id="portrait">
                    </div>
                    <p>必须本人手持身份证，保持身份证上信息清晰可见（样例详见作图）</p>
                    <div class="addImg">
                        <input type="file" id="cardphoto" accept="image/jpg,image/jpeg,image/png" class="fileBtn" onchange="showPreview(this)">添加照片
                    </div>
                </div>
            </div>
            <div class="msg"></div>
            <div class="submit">
                <div class="submitBtn">提交实名审核</div>
            </div>
        </div>
        <div class="twoStep" style="display: none">
            <div class="title">上传音乐</div>
            <div class="cover">
                <div class="coverImg">
                    <img src="" id="finalImg" alt="">
                </div>
                <div class="upcover">
                    <div id="replaceImg">添加封面</div>
                </div>
            </div>
            <div class="works">
                <div class="name">
                    <label><span>*</span> 上传音乐：</label>
                    <input type="file" accept="audio/mpeg" multiple="multiple" class="mp3" id="mp3">
                    <video id="audio" src="" style="display: none;"></video>
                    <span class="show">选择文件，支持mp3</span>
                    <!-- <div class="uploadFile">开始上传</div> -->
                </div>
                <!-- <div class="progress">
					<div class="nowpro"></div>
				</div> -->
                <div class="name">
                    <label><span>*</span> 音乐名称：</label>
                    <input type="text" id="musicName" placeholder="中英文数字标点25字以内"/>
                </div>
                <div class="name">
                    <label><span>*</span> 作 者：</label>
                    <input type="text" id="author" />
                </div>
                <div class="name">
                    <label><span>*</span> 流 派：</label>
                    <select name="" id="liupai">
                        <!-- <option value="">热 门</option>
                        <option value="">热 门</option> -->
                    </select>

                    <label><span>*</span> 语 种：</label>
                    <select name="" id="yuzhong">
                        <option value="内地">内地</option>
                        <option value="港台">港台</option>
                        <option value="韩国">韩国</option>
                        <option value="欧美">欧美</option>
                        <option value="日本">日本</option>
                        <option value="其他">其他</option>
                        <option value="无">无</option>
                    </select>
                </div>
                <div class="name">
                    <label><span>*</span> 详 情：</label>
                    <textarea name="" id="musicDesc" cols="30" rows="4"></textarea>
                </div>
                <div class="tip">声明：我保证上传的内容属实，并对此付出法律责任</div>
                <div class="msg">

                </div>
                <div class="submit">
                    <div class="uploadBtn">上传作品</div>
                </div>
            </div>
        </div>
        <!-- 音乐人列表 -->
        <div class="musicanList" style="display: none">
            <div class="title">音乐人列表</div>
            <div class="musicanName">
                
            </div>
        </div>
            
        <!--图片裁剪框 start-->
        <div style="display: none" class="tailoring-container">
            <div class="black-cloth" onclick="closeTailor(this)"></div>
            <div class="tailoring-content">
                    <div class="tailoring-content-one">
                        <label title="上传图片" for="chooseImg" class="l-btn choose-btn">
                            <input type="file" accept="image/jpg,image/jpeg,image/png" name="file" id="chooseImg" class="hidden" onchange="selectImg(this)">
                            选择图片
                        </label>
                        <div class="close-tailoring"  onclick="closeTailor(this)">×</div>
                    </div>
                    <div class="tailoring-content-two">
                        <div class="tailoring-box-parcel">
                            <img id="tailoringImg">
                        </div>
                        <div class="preview-box-parcel">
                            <p>图片预览：</p>
                            <div class="square previewImg"></div>
                            <div class="circular previewImg"></div>
                        </div>
                    </div>
                    <div class="tailoring-content-three">
                        <button class="l-btn cropper-reset-btn">复位</button>
                        <button class="l-btn cropper-rotate-btn">旋转</button>
                        <button class="l-btn cropper-scaleX-btn">换向</button>
                        <button class="l-btn sureCut" id="sureCut">确定</button>
                    </div>
                </div>
        </div>
        <!--图片裁剪框 end-->
    </div>
    <!-- 音乐人声明 -->
    <div class="tipsbox" style="display:none">
        <div class="statement">
            <div class="title">音乐人声明</div>
            <div class="title_con">
                音乐人声明音乐人声明音乐人声明音乐人声明音乐人声明音乐人声明音乐人声明音乐人声
                明音乐人声明音乐人声明音乐人声明音乐人声明音乐人声明音乐人声明音乐人声明音乐人声明音乐人
                声明音乐人声明音乐人声明
            </div>
            <div class="reverse"><span id="time">3</span>s</div>
        </div>
    </div>
    <!-- 等待loading -->
    <div class="loading" style="display:none">
        <img src="/public/img/common/loading.gif" class="true" alt="">
        <p>正在上传</p> 
    </div>

    <div class="user" style="display:none">
        <div class="touxiang">
            <img src="/public/img/team1.jpg" class="selfphoto" alt="">
        </div>
        <div class="nickname">萌萌先生</div> 
        <div class="logout">注销</div>
    </div>

    <div class="footer">本权益最终解释权由北京蓝莓时节科技有限公司所有</div>
</body>
</html>
<script src="/public/js/common/jquery-1.9.1.min.js"></script>
<script src="/public/js/common/cropper.min.js"></script>
<script src="/public/js/common/speak-md5.js"></script>
<script src="http://jssdk-v2.demo.qiniu.io/dist/qiniu.min.js"></script>
<script src="/public/js/music/music.js?t=<?=time()?>" type="text/javascript" charset="utf-8"></script>
