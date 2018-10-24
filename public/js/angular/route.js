 angular.module('routingDemoApp',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{
                	 templateUrl: '/application/views_new/index/home.html'//系统首页(基本数据信息)
                })
                .when('/home',{
                	 templateUrl: '/application/views_new/index/home.html'//系统首页(基本数据信息)
                })
                .when('/userMsg',{ 
                	templateUrl: '/application/views_new/index/userMsg.html'//新老用户消息
                	})
                .when('/userPhoto',{ 
                	templateUrl: '/application/views_new/index/userPhoto.html'//用户画像
                	})
                .when('/ordinary',{ 
                    templateUrl: '/application/views_new/user/ordinary.html'//全部用户
                    })
                .when('/highUser',{ 
                    templateUrl: '/application/views_new/user/highUser.html'//优质用户
                    })
                .when('/userScore',{ 
                    templateUrl: '/application/views_new/user/userScore.html'//用户评分
                    })
                .when('/suspicion',{ 
                    templateUrl: '/application/views_new/user/suspicion.html'//可疑用户
                    })
                .when('/waitHandleUser',{ 
                    templateUrl: '/application/views_new/user/waitHandleUser.html'//待处理用户
                    })
                .when('/waitComplain',{ 
                    templateUrl: '/application/views_new/complainManage/waitComplain.html'//投诉管理(待投诉管理)
                    })
                .when('/complainManage',{ 
                    templateUrl: '/application/views_new/complainManage/complainManage.html'//投诉管理(投诉管理)
                    })
                .when('/administratorPush',{ 
                    templateUrl: '/application/views_new/administrator/administratorPush.html'//管理员推送
                    })
                .when('/addTag',{ 
                    templateUrl: '/application/views_new/administrator/addTag.html'//添加ugc标签
                    })
                .when('/adduserTag',{ 
                    templateUrl: '/application/views_new/administrator/adduserTag.html'//添加用户标签
                    })
                .when('/addCommentuser',{ 
                    templateUrl: '/application/views_new/administrator/addCommentuser.html'//添加评论用户
                    })
                 .when('/addComments',{ 
                    templateUrl: '/application/views_new/administrator/addComments.html'//添加评论
                    })
                .when('/cooperList',{ 
                    templateUrl: '/application/views_new/administrator/cooperList.html'//合作商列表
                    })
                .when('/queryCode',{ 
                    templateUrl: '/application/views_new/administrator/queryCode.html'//查询验证码
                    })
                .when('/addReason',{ 
                    templateUrl: '/application/views_new/administrator/addReason.html'//添加沉底原因
                    })
                .when('/randomChat',{ 
                    templateUrl: '/application/views_new/administrator/randomChat.html'//匿名弹幕
                    })
                .when('/registerAccount',{ 
                    templateUrl: '/application/views_new/administrator/registerAccount.html'//手机号注册
                    })
                .when('/barrageManage',{ 
                    templateUrl: '/application/views_new/barrage/barrageManage.html'//弹幕管理
                    })
                .when('/purposeManage',{ 
                    templateUrl: '/application/views_new/purpose/purposeManage.html'//目的管理
                    })
                .when('/advertManage',{ 
                    templateUrl: '/application/views_new/advert/advertManage.html'//广告管理
                    })
                .when('/liubo',{ 
                    templateUrl: '/application/views_new/reply/liubo.html'//刘波回复
                    })
                .when('/liuboPush',{ 
                    templateUrl: '/application/views_new/reply/liuboPush.html'//刘波推送
                    })
                .when('/androidMsg',{ 
                    templateUrl: '/application/views_new/android/androidMsg.html'//安卓版本信息
                    })
                // .when('/barrageManage',{ 
                //     templateUrl: '/application/views_new/complainManage/test.html'//弹幕管理
                //     })
                .when('/adminManage',{ 
                    templateUrl: '/application/views_new/administrator/adminManage.html'//管理员管理
                    })
                .when('/community',{ 
                    templateUrl: '/application/views_new/ugc/community.html'//社区轮播
                    })
                .when('/ugcManage',{ 
                    templateUrl: '/application/views_new/ugc/ugcManage.html'//ugc管理
                    })
                .when('/highUgc',{ 
                    templateUrl: '/application/views_new/ugc/highUgc.html'//优质ugc
                    })
                .when('/qiNiuUnited',{ 
                    templateUrl: '/application/views_new/ugc/qiNiuUnited.html'//短视频审核
                    })
                .when('/commentManage',{ 
                    templateUrl: '/application/views_new/comment/commentManage.html'//评论管理
                    })
                .when('/commentReply',{ 
                    templateUrl: '/application/views_new/comment/commentReply.html'//评论回复
                    })
                .when('/musicExamin',{ 
                    templateUrl: '/application/views_new/musicManage/musicExamin.html'//音频审核
                    })
                .when('/musicianExamin',{ 
                    templateUrl: '/application/views_new/musicManage/musicianExamin.html'//音乐人审核
                    })
                .when('/musicBanner',{ 
                    templateUrl: '/application/views_new/musicManage/musicBanner.html'//音乐轮播
                    })
                .when('/bannerDetail',{ 
                    templateUrl: '/application/views_new/musicManage/bannerDetail.html'//音乐轮播
                    })
                .when('/addMusic',{ 
                    templateUrl: '/application/views_new/musicManage/addMusic.html'//音乐轮播
                    })
                .when('/staffTest',{ 
                    templateUrl: '/application/views_new/comment/staffTest.html'//员工质检管理
                    })
                .when('/tagsTest',{ 
                    templateUrl: '/application/views_new/client/tagsTest.html'//标签质检管理
                    })
                .when('/reportManage',{ 
                    templateUrl: '/application/views_new/report/reportManage.html'//举报管理
                    })
                .when('/shumeiUser',{ 
                    templateUrl: '/application/views_new/shumei/shumeiUser.html'//数美用户管理
                    })
                .when('/shumeiOs',{ 
                    templateUrl: '/application/views_new/shumei/shumeiOs.html'//数美设备管理
                    })
                .when('/clientDtl',{ 
                    templateUrl: '/application/views_new/client/clientDtl.html'//客服工作详情
                    })
                .when('/clientNeed',{ 
                    templateUrl: '/application/views_new/client/clientNeed.html'//客服需求表
                    })
                .when('/ugcChar',{ 
                    templateUrl: '/application/views_new/charts/ugcChar.html'//ugc数据统计
                    })
                .when('/userAddChar',{ 
                    templateUrl: '/application/views_new/charts/userAddChar.html'//用户新增数据统计
                    })
                .when('/sinkChar',{ 
                    templateUrl: '/application/views_new/charts/sinkChar.html'//沉底原因统计
                    })
                .when('/#',{ 
                    templateUrl: ''
                    })

                // ugc合作商
                .when('/ugcUpload',{ 
                    templateUrl: '/application/views_new/ugcUpload/ugc.html'//ugc数据统计
                    })
            }]);