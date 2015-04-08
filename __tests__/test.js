/*jshint camelcase:false, node:true */

jest.dontMock('../lib/version.js');

describe('fe-version', function() {
    it('build version numbers', function() {
        var version = require('../lib/version.js');
        var filePath = __dirname + '/testsrc/ju.png';
        console.log(filePath);
        expect(version(filePath)).toBe('00b51669');
    });
});
