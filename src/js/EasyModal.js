/**
 * 弹窗组件
 * @Author   wangk
 * @DateTime 2016-08-25T19:45:12+0800
 */
var EasyModal = (function () {
    var _constructor = function (_opt_) {};

    /**
     * 检测IE版本的方法
     * https://github.com/nioteam/jquery-plugins/issues/12
     * @DateTime 2016-08-25T20:29:02+0800
     * @param    {Number}  version 6/7/8
     * @return   {Boolean}         [description]
     */
    var isIE = function(version){
        var b = document.createElement('b');
        b.innerHTML = '<!--[if IE ' + version + ']><i></i><![endif]-->';
        return b.getElementsByTagName('i').length === 1;
    };

    /**
     * dom操作工具
     * @type {Object}
     */
    var domUtils = {
        getByID: function (id, _opt_node) {
            if (typeof _opt_node === 'undefined') {
                return document.getElementById(id);
            } else {
                return _opt_node.getElementById(id);
            }
        },
        getByClass: function (className, _opt_node) {
            if (typeof _opt_node === 'undefined') {
                // if ()
            }
        }
    };

    var _show = function () {
        // var 
    };
    
    _constructor.prototype = {
        init: function (_opt_config) {
            var body = document.body;
            var mask = document.createElement('div');
            mask.className = 'easy-modal-mask';
            body.appendChild(mask);
        },
        show: function () {
            var mask = document.query
        }
    };

    return _constructor;
})();