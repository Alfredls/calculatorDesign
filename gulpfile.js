const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

//configuracion para pug
gulp.task("pug", () => {
  return gulp
    .src("./dev/pug/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./public"));
});

//configuracion sass y autoprefixer
gulp.task("sass", () => {
  return gulp
    .src("./dev/sass/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )

    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("./public/css"));
});

//escuchamos las tareas que realiza
gulp.task("default", () => {
  gulp.watch("dev/**/*.pug", gulp.series("pug"));
  gulp.watch("dev/sass/*.scss", gulp.series("sass"));
});
