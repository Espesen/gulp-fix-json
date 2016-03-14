var through = require('through2')
  , gutil = require('gulp-util')
  , PluginError = gutil.PluginError
  , jsonic = require('jsonic');

const PLUGIN_NAME = 'gulp-fix-json';


function fixJson() {

  return through.obj(function(file, enc, cb) {

    var parsed;

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported.'));
      return cb();
    }

    try {
      parsed = jsonic(file.contents.toString());
      file.contents = new Buffer(JSON.stringify(parsed, null, '\t'));
      cb(null, file);
    }
    catch (e) {
      this.emit('error', new PluginError(PLUGIN_NAME, e.message));
      cb();
    }

  });

}

module.exports = fixJson;
