var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/dosth', function (req, res, next) {
    res.render('dosth', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
    res.render('test/test', {});
});
// login登录页面
router.get('/login', function (req, res, next) {
    res.render('login/login', { title: 'Express' });
});

/*系统首页*/
// 用户画像
router.get('/userPhoto', function (req, res, next) {
    res.render('index/userPhoto', { title: 'Express' });
});

/*用户管理*/
router.get('/ordinary', function (req, res, next) {
    res.render('user/ordinary', { title: 'Express' });
});//全部用户
router.get('/highUser', function (req, res, next) {
    res.render('user/highUser', { title: 'Express' });
});//优质用户
router.get('/userScore', function (req, res, next) {
    res.render('user/userScore', { title: 'Express' });
});//用户评分



module.exports = router;
