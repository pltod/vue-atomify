var gulp = require('gulp');
var atomify = require('atomify');

gulp.task('default', function () {
  var options = {
    server: {
      path: "index.html",
      open: true
    },
    js: {
      entry: "src/app.js",
      alias: "/bundle.js"
    },
    css : {
      entry: "src/app.css",
      alias: "/bundle.css"
    }
  };
  atomify(options, function (err, src) {
    console.log('Atomify Build Done!');
  });
  atomify.server(options);
});
