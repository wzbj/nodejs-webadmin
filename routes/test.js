var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('test/test', {});
});
// router.get('/login',function(req,res){
// 	res.render('login/login')
// })
module.exports = router;
