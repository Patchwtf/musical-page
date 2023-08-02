const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  src("src/scss/app.scss") //-Identificar archivo de SASS
    .pipe(sass()) //-Compilarlo
    .pipe(dest("build/css")); //-Almacenarlo en el disco duro
  done(); //¡CAllBACK que avisa a gulp cuando llegamos al final
}

exports.css = css;
