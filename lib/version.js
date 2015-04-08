/*jshint camelcase:false, node:true */

'use strict';

var crypto = require('crypto');
var fs = require('fs');

/**
 * 计算文件的md5加密值
 */
function hash(fp) {
    var md5 = crypto.createHash('md5');

    md5.update(fs.readFileSync(fp));
    return md5.digest('hex').substring(0, 8);
}

/**
 * 获取文件的版本号
 */
function version(file) {
    if (fs.existsSync(file)) {
        return hash(file);
    }

    return false;
}

module.exports = version;
