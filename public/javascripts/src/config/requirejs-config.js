/*
  Requirejs配置文件
  Last Updated:2016-08-19 10:08:30  
*/
var fileVersion = {
    'require-text': '//static.huizecdn.com/js/plugins/require-text/text.min',
    'require-css': '//static.huizecdn.com/js/plugins/require-css/css.min',
    'jquery-tab': '//static.huizecdn.com/js/plugins/jquery-tab/build/jquery-tab',
    'jquery-placeholder': '//static.huizecdn.com/js/plugins/placeholder/build/jquery-placeholder',
    'base': '//static.huizecdn.com/js/base/src/base',
    'layer':'//static.huizecdn.com/js/plugins/layer/2.3.0/layer',
    'jquery-prompt':'//static.huizecdn.com/js/plugins/jquery-prompt/build/jquery-prompt',
    'kkpager':'//static.huizecdn.com/js/plugins/kkpager/kkpager.min',
    'my-calendar':'//static.huizecdn.com/js/plugins/my-calendar/build/my-calendar.min',
    'message':'//static.huizecdn.com/js/plugins/message/build/message',
    'webuploader':'http://static.huizecdn.com/js/plugins/webuploader/webuploader',
    "admin-user": "/javascripts/src/admin-user.js?v=15a5eb52b365626f89ec414e30e67f54",
    "admin": "/javascripts/src/admin.js?v=87d2e6f00eaf57f16e47ac7ee78efc0b",
    "article": "/javascripts/src/article/article.js?v=d6f6eb6cac989e2fbbc0aa741eaa9b8a",
    "my-utils": "/javascripts/src/com/my-utils.js?v=6ee4012e66cce7e0c245b177866d067d",
    "comment": "/javascripts/src/comment/comment.js?v=fe1432ab6fef229aa71c048c4d5edd16",
    "demo": "/javascripts/src/demo.js?v=53174a48ba549c9ded0832486ed61461",
    "doc": "/javascripts/src/doc.js?v=43c0b6efbce3a10eb39d0a4bf26c2b2c",
    "index": "/javascripts/src/index.js?v=d41d8cd98f00b204e9800998ecf8427e",
    "ajax": "/javascripts/src/kw/ajax.js?v=7afe35bd5fcb72c486f34eb84f61f9be",
    "css": "/javascripts/src/kw/css.js?v=d41d8cd98f00b204e9800998ecf8427e",
    "date": "/javascripts/src/kw/date.js?v=d41d8cd98f00b204e9800998ecf8427e",
    "dom": "/javascripts/src/kw/dom.js?v=ce134060c47628bb23257a3faae58661",
    "events": "/javascripts/src/kw/events.js?v=772cc004b563e9f24113e17d97a26f33",
    "utils": "/javascripts/src/kw/utils.js?v=d41d8cd98f00b204e9800998ecf8427e",
    "backbone": "/javascripts/src/lib/backbone.js?v=8a8d829617513f36185a0ab055d088ec",
    "es5-shim.min": "/javascripts/src/lib/es5-shim.min.js?v=57a4e2bf37de5dcf5463a8339f1675a7",
    "jquery": "/javascripts/src/lib/jquery.js?v=cd8b0bffc85bb5614385ee4ce3596d07",
    "json2-ie8": "/javascripts/src/lib/json2-ie8.js?v=6e411ef68e8eaaabb557562474086ad6",
    "require": "/javascripts/src/lib/require.js?v=6bd2f88aafdbf67d47f03d6eac64ddc7",
    "underscore": "/javascripts/src/lib/underscore.js?v=f893e294cde60c2462cb19b35aac431b",
    "tab": "/javascripts/src/tab.js?v=2b57809116f97ef13e66762bc79cda30",
    "user": "/javascripts/src/user.js?v=84a53495c75c55c479180de9dacac4e0"
};
requirejs.config({
    baseUrl: '',
    urlArgs: '0.0.1',
    paths: fileVersion,
    waitSeconds: 0, //超时时间
    shim: { //deps依赖关系
        jquery: {
            exports: '$'
        },
        ajax: {
            exports: 'ajax'
        },
        message: {
            exports: 'Message',
            deps: ['css!message-css']
        },
        'jquery-placeholder': {
            deps: ['jquery']
        },
        'jquery-plugins': {
            deps: ['jquery']
        },
        'jquery-prompt': {
            deps: ['jquery', 'css!jquery-prompt-css']
        },
        'layer': {
            exports: 'layer',
            deps: ['jquery', 'css!layer-css']
        },
        'my-calendar': {
            exports: 'MyCalendar',
            deps: ['css!my-calendar-css']
        },
        'kkpager': {
            deps: ['css!kkpager-css']
        },
        'webuploader': {
            deps: ['jquery', 'css!webuploader-css']
        },
        'jquery-bxslider': {
            deps: ['jquery', 'css!jquery-bxslider-css']
        },
        'fixed-tool-float': {
            deps: ['css!sidetool-css']
        }
    },
    map: {
        '*': {
            'css': 'require-css',
            'layer-css': '//static.huizecdn.com/js/plugins/layer/1.9.3/skin/layer',
            'kkpager-css': '//static.huizecdn.com/js/plugins/kkpager/kkpager_blue',
            'jquery-bxslider-css': '//static.huizecdn.com/js/plugins/jquery-bxslider',
            'my-calendar-css': '//static.huizecdn.com/js/plugins/my-calendar/stylesheets/calendar',
            'message-css': '//static.huizecdn.com/js/plugins/message/stylesheets/message',
            'webuploader-css': 'http://static.huizecdn.com/js/plugins/webuploader/webuploader',
            'jquery-prompt-css': 'http://static.huizecdn.com/js/plugins/jquery-prompt/stylesheets/jquery-prompt',
            'sidetool-css': 'http://static.huizecdn.com/css/hz/www/build/sidetool'
        }
    }
});