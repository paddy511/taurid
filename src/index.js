const taurid = require('./core/taurid');

if(module && module.exports){
  module.exports = taurid;
}
if(define){
  define("taurid", ()=> taurid);
}
if(window){
  window.taurid = taurid;
}
