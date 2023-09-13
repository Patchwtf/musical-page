const { src, dest, watch, parallel } = require("gulp");
//- CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//- IMAGENES
const cache = require("gulp-cache");
const imageMin = require("gulp-imagemin");
const webp = require("gulp-webp");

function css(done) {
  src("src/scss/app.scss") //*Identificar archivo de SASS
    .pipe(plumber()) //* Sirve para no detener el WorkFlow cuando un archivo compile mal
    .pipe(sass()) //*Compilarlo
    .pipe(dest("build/css")); //*Almacenarlo en el disco duro
  done(); //¡CAllBACK que avisa a gulp cuando llegamos al final
}

//| Convertir Imagenes
function versionWebp(done) {
  const opciones = { quality: 50 };
  src("src/img/**/*.{png,jpg}") //* De esta manera escojo todos loa archivos de ciertas extenciones de manera recursiva
    .pipe(webp(opciones))
    .pipe(dest("build/img"));
  done();
}

function imagenes(done) {
  const opciones = {
    optimizationLevel: 3,
  };
  src("src/img/**/*.{png,jpg}")
    .pipe(cache(imageMin(opciones)))
    .pipe(dest("build/img"));

  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.convertirWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, dev);
