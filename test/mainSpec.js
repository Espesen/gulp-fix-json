var fs = require('fs')
  , File = require('vinyl')
  , fixJson = require('../index');


describe('gulp-fix-json', function () {
  it('should fix bad json', function (done) {
    var badJson = fs.readFileSync('test/fixtures/bad.json')
      , file = new File({ contents: badJson })
      , fixer = fixJson();

    fixer.write(file);

    fixer.once('data', function (file) {
      var parsed;
      expect(file.isBuffer()).toBeTruthy();
      try {
        parsed = JSON.parse(file.contents.toString());
        expect(parsed.bad).toBe('json');
        expect(parsed.without).toBe('quotes');
        done();
      }
      catch(e) {
        done(e);
      }

    });

  });
});