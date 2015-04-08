/*jshint camelcase:false, node:true */

module.exports = function(grunt) {

    'use strict';


    // 配置
    grunt.initConfig({
        'fe-version': {
            default: [__dirname + '/test/testsrc/*.png'],
            options: {
                v: 'v2'
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'lib/*.js',
                'test/*.js'
            ]
        },
        clean: ["test/testsrc/*png\.*"]
    });

    grunt.loadTasks('./task');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['fe-version']);
};
