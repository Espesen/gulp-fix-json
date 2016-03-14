# gulp-fix-json

**Gulp plugin for fixing JSON files**

This plugin is based on [jsonic](https://github.com/rjrodger/jsonic) by Richard Rodger.
It adds missing quotes and removes trailing commas in JSON.

Usage example:

```JavaScript
var gulp = require('gulp')
  , fixJson = require('gulp-fix-json')
  
gulp.task('fix-json', function() {
  return gulp.src('example.json')
    .pipe(fixJson())
    .on('error', function(err) {
      console.log('Error parsing json: ' + err.message);
    })
    .pipe(gulp.dest('.'))
});
```

**To install:**

```sh
npm install gulp-fix-json
```
