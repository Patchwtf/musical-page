const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  src("src/scss/app.scss") //-Identificar archivo de SASS
    .pipe(sass()) //-Compilarlo
    .pipe(dest("build/css")); //-Almacenarlo en el disco duro
  done(); //¡CAllBACK que avisa a gulp cuando llegamos al final
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}

exports.css = css;
exports.dev = dev;
