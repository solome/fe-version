/*jshint camelcase:false, node:true */
'use strict';

module.exports = function(grunt) {

    var chalk = require('chalk');
    var version = require('../lib/version');

    grunt.registerMultiTask('fe-version', '给静态文件添加版本号', function() {
        var task = this;
        var options = task.options({v:'v'});
        var files = task.files;

        console.log(task);
        console.log(options);
        files.forEach(function(file){
            file.src.forEach(function(f) {
                var v = options['v'];
                var code = version(f);
                if (v) {
                    var newFile = f + '.' + v + code;
                    grunt.file.copy(f, newFile);
                    grunt.log.ok('new file => ' + chalk.magenta(newFile) + '\n');
                }
            });
        });
    });
}
